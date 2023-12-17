import { Session, SupabaseClient, User, createClient } from '@supabase/supabase-js';
import { getCountTotalIntiatives } from './methods/analytics/get_count_by_year_by_status';
import getViewsByCityAndPage from "./methods/analytics/get_views_by_city_and_page";
import getViewsByDate from "./methods/analytics/get_views_by_date";
import getViewsByPage from "./methods/analytics/get_views_by_page";
import createFile, { CreateFileParams } from "./methods/git/create_file";
import deleteFile from "./methods/git/delete_file";
import fetchFiles, { searchFiles } from "./methods/git/fetch_files";
import getFileContent from "./methods/git/get_file_content";
import updateFile from "./methods/git/update_file";
import acceptInvitation from './methods/supabase/administrator/accept_invitation';
import checkAuthorization from './methods/supabase/administrator/check_authorization';
import createDiscardAdminRole from './methods/supabase/administrator/create_admin';
import deleteAdmin from './methods/supabase/administrator/delete_admin';
import getAdmins from './methods/supabase/administrator/get_admins';
import inviteAdmin from './methods/supabase/administrator/invite_admin';
import getUserInfo from './methods/supabase/authentication/get_user_info';
import signIn from "./methods/supabase/authentication/sign_in";
import signOut from './methods/supabase/authentication/sign_out';
import updateUserInfo from './methods/supabase/authentication/update_user_info';
import getComments from './methods/supabase/comments/get_comments';
import { Administrator } from './models/administrator';
import { CompositeFilter } from './models/composite_filter';
import { FileComment } from './models/file_comment';
import { FileContent } from "./models/file_content";
import { FileModel } from "./models/file_model";
import { SDKInitializerConfig } from './models/sdk_initializer_config';
import { ViewsByCityAndPageResponse } from "./models/views_by_city_and_page_response";
import { ViewsByDateResponse } from "./models/views_by_date_response";
import { ViewsByPageResponse } from "./models/views_by_page_response";

/**
 * Function type for a void callback.
 */
type VoidCallback = (user : User | undefined, session : Session | null) => void;


/**
 * The EsgSDK class provides methods for file management and analytics using the ESG API.
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
 * Creates a file with the specified parameters using the Supabase stored procedure.
 *
 * @param {CreateFileParams} params - The parameters for creating a new file.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file creation was successful.
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
   * Fetches a list of FileModel instances from the specified API endpoint.
   * @param {string} dir - The directory parameter for the API endpoint. Must be one of "environment", "social", "governance".
   * @returns {Promise<FileModel[]>} - A Promise that resolves to an array of FileModel instances.
   * @example
   * const esgSDK = EsgSDK.initialize("your-analytics-api-key");
   * const directory = "environment";
   * const files = await esgSDK.fetchFiles(directory);
   * console.log("Fetched Files:", files.map((file) => new FileModel(file)));
   */
  async fetchFiles(dir: string): Promise<FileModel[]> {
    return await fetchFiles(this.supabase, dir);
  }

  /**
   * Searches for files based on the provided filter in the specified API endpoint.
   * @param {string} dir - The directory parameter for the API endpoint. Must be one of "environment", "social", "governance".
   * @param {CompositeFilter} filter - The composite filter to apply to the search.
   * @returns {Promise<FileModel[]>} - A Promise that resolves to an array of FileModel instances matching the search criteria.
   * @example
   * const directory = "environment";
   * const filter = { field_name: "name", key: "energy" };
   * const searchResult = await esgSDK.searchFiles(directory, filter);
   * console.log("Search Result:", searchResult.map((file) => new FileModel(file)));
   */
  async searchFiles(dir: string, filter: CompositeFilter): Promise<FileModel[]> {
    return await searchFiles(this.supabase, dir, filter);
  }
  

  /**
   * Updates a file with the specified content at the given path.
   * @param {FileContent} file - The file content parameters.
   * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file update was successful.
   * @example
   * const fileContentInstance = new FileContent({
   *   sha: "abc123",
   *   path: " environment ",
   *   name: "initiative name",
   *   content: "updated content string"
   * });
   * const success = await esgSDK.updateFile(fileContentInstance,fileModelInstance);
   * console.log("File update success:", success);
   */
  async updateFile(fileModel : FileModel,file: FileContent): Promise<boolean> {
    await this.supabase.from("pages").update(fileModel.toSupaJson()).eq('id',fileModel.id);
    return await updateFile(file);
  }

  /**
   * Fetches the content of a file from the specified API endpoint.
   * @param {string} dir - The directory parameter. Must be one of "environment", "social", "governance".
   * @param {FileModel} fileModel - The name of the file without extension.
   * @returns {Promise<FileContent>} - A Promise that resolves to the content of the specified file.
   * @example
   * const esgSDK = EsgSDK.initialize("your-analytics-api-key");
   * const dir = "environment";
   * const fileName = "sflsj-fsdafjlj-jfas"; // Mostly a uuid 
   * const fileContentInstance = await esgSDK.getFileContent(dir, fileModelInstance); // File Model instance fetched from listing files [fetchFiles]
   * console.log("File Content:", new FileContent(fileContentInstance));
   */
  async getFileContent(dir: string, fileModel:FileModel): Promise<FileContent> {
    return await getFileContent(dir, fileModel);
  }

  /**
   * Deletes a file at the specified path.
   * @param {FileContent} fileContent - The file  model representing the file to be deleted.
   * @param {FileModel} fileModel - The file content model representing the file to be deleted.
   * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file deletion was successful.
   * @example
   * const esgSDK = EsgSDK.initialize("your-analytics-api-key");
   * const fileContentInstance = new FileContent({
   *   sha: "abc123",
   *   path: " environment/file1 ",
   *   name: "file1 ",
   *   type: "file",
   *   content: "content string"
   * });
   * const success = await esgSDK.deleteFile(fileContentInstance);
   * console.log("File deletion success:", success);
   */
  async deleteFile(fileModel:FileModel,fileContent:FileContent): Promise<boolean> {
   
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
 * @returns {Promise<void>} A promise that resolves if the invitation is sent successfully.
 * @throws {Error} Throws an error if there is an issue with the invitation process.
 */
  async inviteAdmin(email:string):Promise<void>{
      return await inviteAdmin(this.supabase,email);
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
 * @param {boolean} is_admin_role - A boolean indicating whether to create (`true`) or discard (`false`) the "admin" role.
 * @returns {Promise<void>} A promise that resolves when the operation is successful.
 * @throws {Error} Throws an error if there is an issue with the role creation or discard process.
 */
 async createDiscardAdminRole(userId:string,is_admin_role:Boolean):Promise<void>{
   return await createDiscardAdminRole(this.supabase,userId,is_admin_role);
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
 * Retrieves a list of administrators from the Supabase "administrators" table.
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
}
