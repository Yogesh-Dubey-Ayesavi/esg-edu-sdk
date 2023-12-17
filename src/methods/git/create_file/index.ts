  import { SupabaseClient } from '@supabase/supabase-js';
import { FileContent } from "../../../models/file_content";



  export default async function createFile(supabase:SupabaseClient,params:CreateFileParams): Promise<boolean> {
    try {
      const userId = (await supabase.auth.getUser()).data.user?.id;
    const {data,error} =  await supabase.rpc("create_file",
        {
          "body":params.content,
          "file_path":params.dir,
          "i_name":params.initiative_name,
          "byuid":userId,
          "date_oc":params.dateOfCompletion.toISOString(),
          "loc":params.location ?? "India",
          "file_desc":params.file_desc??""
      }
      );
      console.log(data);
      if(error){
        throw error;
      }else{
      return Boolean(data == true);

      }

    } catch (error) {
      console.error('Error creating file:', error);
      throw new Error('File creation failed'); // You can customize the error message as needed
    }
  }

/**
 * Represents the parameters for creating a new file.
 * @interface
 */
/**
 * Represents the parameters for creating a new file.
 * @interface
 */
export interface CreateFileParams {
  /**
   * The directory parameter for the API endpoint. Must be one of 'environment', 'social', 'governance'.
   * @type {string}
   */
  dir: string;

  /**
   * The date of completion for the file.
   * @type {Date}
   */
  dateOfCompletion: Date;

  /**
   * The location of the file.
   * @type {string | undefined}
   */
  location?: string | undefined;

  /**
   * The description of the file.
   * @type {string | undefined}
   */
  file_desc?: string | undefined;

  /**
   * The content of the file.
   * @type {string}
   */
  content: string;

  /**
   * The name of the initiative.
   * @type {string}
   */
  initiative_name?: string;
}