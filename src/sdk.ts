import { Session, SupabaseClient, User, createClient } from '@supabase/supabase-js';
import { getCountTotalIntiatives } from './methods/analytics/get_count_by_year_by_status';
import getViewsByCityAndPage from "./methods/analytics/get_views_by_city_and_page";
import getViewsByDate from "./methods/analytics/get_views_by_date";
import getViewsByPage from "./methods/analytics/get_views_by_page";
import createFile, { CreateFileParams } from "./methods/git/create_file";
import deleteFile from "./methods/git/delete_file";
import fetchFiles, { searchFiles } from "./methods/git/fetch_files";
import getInitiativeContent from "./methods/git/get_file_content";
import updateFile from "./methods/git/update_file";
import acceptInvitation from './methods/supabase/administrator/accept_invitation';
import checkAuthorization from './methods/supabase/administrator/check_authorization';
import changeAdminRole from './methods/supabase/administrator/create_admin';
import deleteAdmin from './methods/supabase/administrator/delete_admin';
import getAdmins from './methods/supabase/administrator/get_admins';
import inviteAdmin from './methods/supabase/administrator/invite_admin';
import getUserInfo from './methods/supabase/authentication/get_user_info';
import signIn from "./methods/supabase/authentication/sign_in";
import signOut from './methods/supabase/authentication/sign_out';
import updateUserInfo from './methods/supabase/authentication/update_user_info';
import getComments from './methods/supabase/comments/get_comments';
import addCertificatesToDatabase from './methods/supabase/institutions/add_certificate';
import deleteInstitution from './methods/supabase/institutions/delete_institution';
import fetchInstitutionsByHandlerId from './methods/supabase/institutions/fetch_institution';
import registerInstitution from './methods/supabase/institutions/register_institution';
import { removeCertificateById } from './methods/supabase/institutions/remove_certificate';
import uploadDocument from './methods/supabase/institutions/upload_certificates';
import { Administrator } from './models/administrator';
import { CertificateModel, ICertificationModel } from './models/certificate';
import { CompositeFilter } from './models/composite_filter';
import { UserRole } from './models/enumerations';
import { FileComment } from './models/file_comment';
import { InitiativeContent } from "./models/file_content";
import { InitiativeModel } from "./models/file_model";
import { InstitutionModel } from './models/institution';
import { SDKInitializerConfig } from './models/sdk_initializer_config';
import { ViewsByCityAndPageResponse } from "./models/views_by_city_and_page_response";
import { ViewsByDateResponse } from "./models/views_by_date_response";
import { ViewsByPageResponse } from "./models/views_by_page_response";

/**
 * Function type for a void callback.
 */
type VoidCallback = (user : User | undefined, session : Session | null) => void;


/**
 * The EsgSDK class provides methods for initiative management and analytics using the ESG API.
 * It follows the Singleton pattern to ensure a single instance is used throughout the application.
 * @class
 */
export default class EsgSDK {
  private static instance: EsgSDK;
  private static analytics_api_key: string;

  static _supabase: SupabaseClient;

  get supabase() : SupabaseClient {
      return EsgSDK._supabase;
  } 

   /**
   * Getter for obtaining the initialized instance of EsgSDK
   * #### NOTE : Must call this method only after initilizing `EsgSDK` else will throw error;
   */
  static get getInstance():EsgSDK{
    return this.instance;
  }

  /**
   * Private constructor to prevent direct instantiation. Use the `initialize` method instead.
   */
  private constructor() {}

  /**
   * Initializes and returns the singleton instance of the EsgSDK class.
   * @param {SDKInitializerConfig} - For initilizing the SDK with required resources check out at [SDKInitializerConfig] 
   * @returns {EsgSDK} - The singleton instance of the EsgSDK class.
   */
  public static initialize(config:SDKInitializerConfig): EsgSDK {
    if (!EsgSDK.instance) {
      EsgSDK.instance = new EsgSDK();
      EsgSDK.analytics_api_key = config.analyticsApiKey;
      EsgSDK._supabase = createClient(config.supabaseApiUrl, config.supabaseApiKey);
    }
    return EsgSDK.instance;
  
  }
  /**
 * Creates a initiative with the specified parameters using the Supabase stored procedure.
 *
 * @param {CreateFileParams} params - The parameters for creating a new initiative.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the initiative creation was successful.
 * @throws {Error} Throws an error if there is an issue with the Supabase query.
 * @example
 
 * const createParams = {
 *   dir: "environment",
 *   dateOfCompletion: new Date(),
 *   location: "India",
 *   file_desc: "File description",
 *   content: "content string",
 *   initiative_name: "Initiative Name"
 * };
 * const success = await esgSDK.createFile(createParams);
 * console.log("File creation success:", success);
 */
async createFile(params: CreateFileParams): Promise<boolean> {
  return await createFile(this.supabase, params);
}

    /**
   * Fetches a list of InitiativeModel instances from the specified API endpoint.
   * @param {string} dir - The directory parameter for the API endpoint. Must be one of "environment", "social", "governance".
   * @returns {Promise<InitiativeModel[]>} - A Promise that resolves to an array of InitiativeModel instances.
   * @example
   * const esgSDK = EsgSDK.initialize("your-analytics-api-key");
   * const directory = "environment";
   * const files = await esgSDK.fetchFiles(directory);
   * console.log("Fetched Files:", files.map((initiative) => new InitiativeModel(initiative)));
   */
  async fetchFiles(dir: string): Promise<InitiativeModel[]> {
    return await fetchFiles(this.supabase, dir);
  }

  /**
   * Searches for files based on the provided filter in the specified API endpoint.
   * @param {string} dir - The directory parameter for the API endpoint. Must be one of "environment", "social", "governance".
   * @param {CompositeFilter} filter - The composite filter to apply to the search.
   * @returns {Promise<InitiativeModel[]>} - A Promise that resolves to an array of InitiativeModel instances matching the search criteria.
   * @example
   * const directory = "environment";
   * const filter = { field_name: "name", key: "energy" };
   * const searchResult = await esgSDK.searchFiles(directory, filter);
   * console.log("Search Result:", searchResult.map((initiative) => new InitiativeModel(initiative)));
   */
  async searchFiles(dir: string, filter: CompositeFilter): Promise<InitiativeModel[]> {
    return await searchFiles(this.supabase, dir, filter);
  }
  

  /**
   * Updates a initiative with the specified content at the given path.
   * @param {InitiativeContent} initiative - The initiative content parameters.
   * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the initiative update was successful.
   * @example
   * const fileContentInstance = new InitiativeContent({
   *   sha: "abc123",
   *   path: " environment ",
   *   name: "initiative name",
   *   content: "updated content string"
   * });
   * const success = await esgSDK.updateFile(fileContentInstance,fileModelInstance);
   * console.log("File update success:", success);
   */
  async updateFile(fileModel : InitiativeModel,initiative: InitiativeContent): Promise<boolean> {
    await this.supabase.from("pages").update({
       path :fileModel.path,
      closed_at: fileModel.closed_at,
      name:fileModel.name,
      id:fileModel.id,
      status:fileModel.status,
      created_at:fileModel.created_at,
       created_by:fileModel.created_by,
       doc:fileModel.dateOfCompletion,
       location:fileModel.location,
       description:fileModel.description, 
    }).eq('id',fileModel.id);
    return await updateFile(initiative);
  }

  /**
   * Fetches the content of a initiative from the specified API endpoint.
   * @param {string} dir - The directory parameter. Must be one of "environment", "social", "governance".
   * @param {fileId} fileId - The id of the initiative from [InitiativeModel].
   * @returns {Promise<InitiativeContent>} - A Promise that resolves to the content of the specified initiative.
   * @example
   * const esgSDK = EsgSDK.initialize("your-analytics-api-key");
   * const dir = "environment";
   * const fileName = "sflsj-fsdafjlj-jfas"; // Mostly a uuid 
   * const fileContentInstance = await esgSDK.getInitiativeContent(dir, fileModelInstance); // File Model instance fetched from listing files [fetchFiles]
   * console.log("File Content:", new InitiativeContent(fileContentInstance));
   */
  async getInitiativeContent(dir: string, fileId:string): Promise<InitiativeContent> {
    return await getInitiativeContent(dir, fileId);
  }

  /**
   * Deletes a initiative at the specified path.
   * @param {InitiativeContent} fileContent - The initiative  model representing the initiative to be deleted.
   * @param {InitiativeModel} fileModel - The initiative content model representing the initiative to be deleted.
   * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the initiative deletion was successful.
   * @example
   * const esgSDK = EsgSDK.initialize("your-analytics-api-key");
   * const fileContentInstance = new InitiativeContent({
   *   sha: "abc123",
   *   path: " environment/file1 ",
   *   name: "file1 ",
   *   type: "initiative",
   *   content: "content string"
   * });
   * const success = await esgSDK.deleteFile(fileContentInstance);
   * console.log("File deletion success:", success);
   */
  async deleteFile(fileModel:InitiativeModel,fileContent:InitiativeContent): Promise<boolean> {
   
    return await deleteFile(this.supabase,fileModel.copyWith({sha:fileContent.sha}));
  }

  /**
   * Fetches views by date from the analytics API.
   * #### Note: By default, fetches data for the last 30 days.
   * @returns {Promise<ViewsByDateResponse[]>} - A Promise resolving to an array of ViewsByDateResponse objects.
   * @throws {Error} Throws an error if the request fails or if the response does not have the expected format.
   * @example
   * // Using the function to fetch views by date
   * try {
   *   const viewsByDateData = await esgSDK.getViewsByDate();
   *   console.log(viewsByDateData);
   * } catch (error) {
   *   console.error(`Error fetching views by date: ${error}`);
   * }
   */
  async getViewsByDate(): Promise<ViewsByDateResponse[]> {
    return await getViewsByDate(EsgSDK.analytics_api_key);
  }

  /**
   * Fetches per-page views data from the analytics API.
   * #### Note: By default, fetches data for the last 30 days.
   * @returns {Promise<ViewsByPageResponse[]>} - A Promise resolving to an array of ViewsByPageResponse objects.
   * @throws {Error} Throws an error if the request fails or if the response does not have the expected format.
   * @example
   * // Using the function to fetch per-page views
   * try {
   *   const perPageViewsData = await esgSDK.getViewsByPage();
   *   console.log(perPageViewsData);
   * } catch (error) {
   *   console.error(`Error fetching per-page views: ${error}`);
   * }
   */
  async getViewsByPage(): Promise<ViewsByPageResponse[]> {
    return await getViewsByPage(EsgSDK.analytics_api_key);
  }

  /**
   * Fetches views data by city and page from the analytics API.
   * #### Note: By default, fetches data for the last 30 days.
   * @returns {Promise<ViewsByCityAndPageResponse[]>} - A Promise resolving to an array of ViewsByCityAndPageResponse objects.
   * @throws {Error} Throws an error if the request fails or if the response does not have the expected format.
   * @example
   * // Using the function to fetch views by city and page
   * try {
   *   const viewsByCityAndPageData = await esgSDK.getViewsByCityAndPage();
   *   console.log(viewsByCityAndPageData);
   * } catch (error) {
   *   console.error(`Error fetching views by city and page: ${error}`);
   * }
   */
  async getViewsByCityAndPage(): Promise<ViewsByCityAndPageResponse[]> {
    return await getViewsByCityAndPage(EsgSDK.analytics_api_key);
  }

 
/**
 * Updates User's info Supabase authentication.
 * @returns {Promise<Boolean>} - The signed-in user information or null if there was an error.
 */
 async  updateUserInfo(administrator : Administrator): Promise<Boolean> {
    return await updateUserInfo(this.supabase,administrator);
 }

 
/**
 * Sign in with Google using Supabase authentication.
 * @returns {Promise<Boolean>} - The signed-in user information or null if there was an error.
 */
async signIn(authListen : VoidCallback): Promise<Boolean> {
  return  await signIn(this.supabase,authListen);
}

/**
 * Get the current authenticated user info.
 * @returns {Promise<User>} - The signed-in user information or null if there was an error.
 */
 async  getUserInfo(): Promise<User> {
    return await getUserInfo(this.supabase);
}


/**
 *  Signs user out of the context
 */

 async  signOut() : Promise<void> {
 return  await  signOut(this.supabase);
  }

  /**
 * Retrieves a comment from the 'comments' table based on the comment ID.
 * @param {string} pageId - The ID of the comment to retrieve.
 * @returns {Promise<FileComment[] | []>} - The retrieved comment or [] if not found.
 */
  async getComments(pageId: string): Promise<FileComment[] | []> {
    return await getComments(this.supabase,pageId);
  }
  /**
 * Invites a user to become an administrator by calling a Supabase stored procedure.
 *
 * @param {string} email - The email address of the user to be invited as an administrator.
 * @param {UserRole} userRole - The role of the user to be invited as an.
  * @returns {Promise<void>} A promise that resolves if the invitation is sent successfully.
 * @throws {Error} Throws an error if there is an issue with the invitation process.
 */
  async inviteAdmin(email:string,userRole:UserRole):Promise<void>{
      return await inviteAdmin(this.supabase,email,userRole);
  }
  /**
 * Accepts an invitation for a user, validates the access token, signs in the user,
 * and assigns the "administrator" role by inserting a record into the "administrators" table.
 *
 * @param {string} access_token - The access token associated with the user's invitation.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the invitation is successfully accepted and the role is assigned.
 * @throws {string | Error} Throws an error if validation fails or role assignment is unsuccessful.
 */
  async acceptInvitation(access_token:string):Promise<Boolean>{
      return acceptInvitation(this.supabase,access_token);
  }

  
/**
 * Checks the authorization status of the current user for Esg-Edu Dashboard access.
 *
 * @returns {Promise<boolean>} A promise that resolves to `true` if the user is authorized, and `false` otherwise.
 * @throws {Error} Throws an error if there is an issue with checking the authorization status.
 */
 async checkAuthorization():Promise<Boolean> {
   return await  checkAuthorization(this.supabase);
 }

 
/**
 * Creates or discards the "admin" role for a user.
 * Note: Admin and administrator are different, admin role is superior than administrator roles.
 * administrators roles can not delete files, and update site settings, publish pages.
 *
 * @param {string} userId - The user ID for which the "admin" role is to be created or discarded.
 * @param {UserRole} role - The role, you want to set for an admin
   * @returns {Promise<void>} A promise that resolves when the operation is successful.
 * @throws {Error} Throws an error if there is an issue with the role creation or discard process.
 */
 async changeAdminRole(userId:string,role:UserRole):Promise<void>{
   return await changeAdminRole(this.supabase,userId,role);
 }


 /**
 * Deletes the "admin" role for a user using a Supabase stored procedure.
 *
 * @param {string} userId - The user ID for which the "admin" role is to be deleted.
 * @returns {Promise<void>} A promise that resolves when the role deletion is successful.
 * @throws {Error} Throws an error if there is an issue with the role deletion process.
 */
 async deleteAdmin(userId:string):Promise<void>{
    return await deleteAdmin(this.supabase,userId);
 }

/**
 * Retrieves a list of administrators from the Supabase "users" table.
 *
 * @returns {Promise<Administrator[] | []>} A promise that resolves to an array of Administrator objects if successful, or an empty array if there are no administrators.
 * @throws {Error} Throws an error if there is an issue with retrieving the administrators.
 */
 async getAdmins():Promise<Administrator[]| []>{
    return await getAdmins(this.supabase);
  }/**
 * Gets the total number of initiatives created until now.
 * @returns {Promise<number>} The total number of initiatives in the current year.
 * @throws {Error} Throws an error if there is an issue with the Supabase query.
 */
async getCurrentYearTotalInitiatives(): Promise<number> {
  const { count, error } = await this.supabase.from("pages").select('*', { count: 'exact', head: true });

  if (error) {
    throw error;
  }

  return count ?? 0;
}

/**
 * Gets the total number of initiatives in the previous year.
 * @returns {Promise<number>} The total number of initiatives in the previous year.
 */
async getPrevYearTotalInitiatives(): Promise<number> {
  const currentYear = new Date(new Date().getFullYear(), 0, 1);
  const startFrom = new Date(1980, 0, 1);
  return await getCountTotalIntiatives(this.supabase, startFrom, currentYear, "created_at");
}

/**
 * Gets the total number of initiatives in the current month with the 'undergoing' status.
 * @returns {Promise<number>} The total number of 'undergoing' initiatives in the current month.
 * @throws {Error} Throws an error if there is an issue with the Supabase query.
 */
async getCurrentMonthUndergoingInitiativeCounts(): Promise<number> {
  const { count, error } = await this.supabase.from("pages").select('*', { count: 'exact', head: true }).eq("status", "undergoing");

  if (error) {
    throw error;
  }

  return count ?? 0;
}
/**
 * Gets the total number of initiatives in the previous month with the 'undergoing' status.
 * @returns {Promise<number>} The total number of 'undergoing' initiatives in the previous month.
 * @throws {Error} Throws an error if there is an issue with the Supabase query.
 */
async getPrevMonthUndergoingInitiativeCounts(): Promise<number> {
  try {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    const { count, error ,data} = await this.supabase.from("pages").select('*', { count: 'exact', head: false }).gt("closed_at", new Date(year, month, 0).toISOString());
    if (error) {
     throw error;
    }

    return count ?? 0;
  } catch (error) {
    // Handle the error, log it, or rethrow if necessary
    console.error(error);
    throw new Error('An error occurred while fetching initiative counts.');
  }
}
/**
 * Uploads a certificate to the certifications table.
 *
 * @param {string} certName - The name of the certificate.
 * @param {Blob} fileBlob - The Blob containing the certificate file.
 * @returns {Promise<CertificateModel[]>} - A Promise that resolves to an array of CertificateModel instances representing the uploaded certificate.
 * @throws {Error} Throws an error if there is an issue with the document upload or Supabase query.
 * @example
 * const esgSDK = EsgSDK.initialize("your-analytics-api-key");
 * const certName = "ExampleCertificate";
 * const fileBlob = new Blob(["Certificate Content"], { type: "application/pdf" });
 * const uploadedCertificates = await esgSDK.uploadCertificate(certName, fileBlob);
 * console.log("Uploaded Certificates:", uploadedCertificates);
 */
async uploadCertificate(certName: string, fileBlob: Blob): Promise<CertificateModel[]> {
  const userId = (await this.getUserInfo()).id;
  const docName = `${userId}-cert-${certName}-${new Date().toLocaleDateString()}`;
  const { data, error } = await uploadDocument(this.supabase, docName, fileBlob, "certifications");
  if (error) {
    throw error;
  }
  return data.map((e: ICertificationModel) => new CertificateModel(e));
}

/**
 * Asynchronous function to register an institution.
 * 
 * @param {IInstitutionModel} institutionModel - The institution model to be registered.
 * @returns {Promise<IInstitutionModel>} - A Promise that resolves to the registered institution model.
```javascript
// Example usage:
const institutionInitializerData: IInstitutionInitializer = {
  name: 'Example University',
  city: 'Example City',
  email: 'example@example.com',
  phone_number: '123-456-7890',
  address: '123 Main St',
  established_in:'ISO_STRING,
  website: 'http://www.exampleuniversity.com',
  employee_size: 1000,
  id: 'unique_identifier',
  handler_id: 'handler123',
};

// Create an instance of InstitutionInitializer
const institutionInitializer = new InstitutionInitializer(institutionInitializerData);

// Create an instance of InstitutionModel using the initialized data
const institutionModel = new InstitutionModel(institutionInitializer);

// Call the registerInstitution function with the created institution model
try {
  const registeredInstitution = await registerInstitution(institutionModel);
  console.log('Institution registered:', registeredInstitution);
} catch (error) {
  console.error('Error registering institution:', error.message);
}
```
*/
  async registerInstitution(institutionModel:InstitutionModel):Promise<InstitutionModel>{
    return await registerInstitution(this.supabase,institutionModel);
  }

  /**
 * Fetches institution details for the institution associated with the current handler.
 * 
 * @returns {Promise<InstitutionModel[]>} - A Promise that resolves to an array of institution models.
 * @throws {Error} - Throws an error if there is an issue with the database query.
 * 
 * @example
 * // Usage:
 * try {
 *   const myInstitutions = await getMyInstitutionDetails();
 *   console.log('My Institutions:', myInstitutions);
 * } catch (error) {
 *   console.error('Error fetching my institutions:', error.message);
 * }
 */
async  getMyInstitutionDetails(): Promise<InstitutionModel[]> {
  return await fetchInstitutionsByHandlerId(this.supabase, /* provide your handlerId here */);
}

/**
 * Adds multiple certificates to the database.
 * 
 * @param {SupabaseClient} supabase - The Supabase client used for database operations.
 * @param {CertificateModel[]} certificates - An array of certificate models to be added.
 * @returns {Promise<CertificateModel[]>} - A Promise that resolves to the added certificate models.
 * @throws {Error} - Throws an error if there is an issue with the database query.
 * 
 * @example
  // Usage:
 ```javascript 
 const certificates: CertificateModel[] = [
    {...},
    {...},
    // ... add more certificate models as needed
  ];
 * try {
 *   const addedCertificates = await addCertificates(certificates);
 *   console.log('Certificates added:', addedCertificates);
 * } catch (error) {
 *   console.error('Error adding certificates:', error.message);
 * }
 ```
 */

async addCertificates(certificates:CertificateModel[]):Promise<Boolean> {
  return await addCertificatesToDatabase(this.supabase,certificates);
}


/**
 * Removes a certificate from the database by its ID.
 * 
 * @param {SupabaseClient} supabase - The Supabase client used for database operations.
 * @param {string} certificateId - The ID of the certificate to be removed.
 * @returns {Promise<void>} - A Promise that resolves when the certificate is successfully removed.
 * @throws {Error} - Throws an error if there is an issue with the database query.
 * 
 * @example
 * // Usage:
 * const certificateId = 'someCertificateId';
 * try {
 *   await removeCertificates(certificateId);
 *   console.log('Certificate removed successfully.');
 * } catch (error) {
 *   console.error('Error removing certificate:', error.message);
 * }
 */
async removeCertificates(certificateId:string):Promise<void> {
  return await removeCertificateById(this.supabase,certificateId);
}

/**
 * Deletes an institution from the database based on its unique identifier.
 *
 * @param {string} institutionId - The unique identifier of the institution to be deleted.
 * @returns {Promise<Boolean>} A Promise that resolves to `true` if the deletion is successful, or `false` otherwise.
 * @throws {Error} Throws an error if the deletion process encounters any issues.
 *
 * @example
 * // Using the function to delete an institution
 * const success = await deleteInstitution(supabaseClient, 'exampleInstitutionId');
 * if (success) {
 *   console.log('Institution deleted successfully.');
 * } else {
 *   console.error('Failed to delete institution.');
 * }
 */
async deleteInstitution(institutionId:string):Promise<Boolean>{
  return await deleteInstitution(this.supabase,institutionId);
}


}
