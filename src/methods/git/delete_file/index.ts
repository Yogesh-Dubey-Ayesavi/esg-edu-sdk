import { SupabaseClient } from '@supabase/supabase-js';
import { InitiativeModel } from '../../..//models/file_model';

export default async function deleteFile(supabase:SupabaseClient,fileModel: InitiativeModel,sha:string): Promise<boolean> {
    try {
     const {data,error} = await supabase.rpc("delete_file",{
      "file_id":fileModel.id,
      "file_path":fileModel.path+ '.mdx',
      "file_sha":sha,
     });
     if(error){
      throw error;
     }
     else{
      return Boolean(data);
     }
    } catch (error) {
      // Handle errors here (e.g., log, throw, etc.)
      console.error('Error deleting initiative:', error);
      throw error;
    }
  }