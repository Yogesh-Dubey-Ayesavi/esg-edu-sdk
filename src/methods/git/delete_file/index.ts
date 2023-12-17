import { SupabaseClient } from '@supabase/supabase-js';
import { FileModel } from '../../..//models/file_model';
/**
 * Deletes a file at the specified path.
 * @param {supabaseClient} supabase - supabase client.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file deletion was successful.
 */
export default async function deleteFile(supabase:SupabaseClient,fileModel: FileModel): Promise<boolean> {
    try {
     const {data,error} = await supabase.rpc("delete_file",{
      "file_id":fileModel.id,
      "file_path":fileModel.path+ '.mdx',
      "file_sha":fileModel.sha,
     });
     if(error){
      throw error;
     }
     else{
      return Boolean(data);
     }
    } catch (error) {
      // Handle errors here (e.g., log, throw, etc.)
      console.error('Error deleting file:', error);
      throw error;
    }
  }