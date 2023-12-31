import { SupabaseClient } from '@supabase/supabase-js';
import { FileComment } from '../../../../models/file_comment';

/**
 * Retrieves a comment from the 'comments' table based on the comment ID.
 * @param {SupabaseClient} supabaseInstance - The Supabase client instance.
 * @param {string} pageId - The ID of the comment to retrieve.
 * @returns {Promise<FileComment | null>} - The retrieved comment or null if not found.
 */
export default async function getComments(supabaseInstance: SupabaseClient, pageId: string): Promise<FileComment[] | []> {
  try {
    // Use the 'get' method to retrieve a specific row from the 'comments' table based on the comment ID
    const { data, error } = await supabaseInstance.from('comments').select().eq('page_id', pageId);

    if (error) {
      throw error;
    } 



    // Return the retrieved comment or null if not found
    return data?.map((e)=>{
      return new FileComment({
        page_id :e?.page_id,
        text : e?.text,
        time : e?.time,
        id : e?.id
      });
    });
  } catch (error) {
    console.error('Error getting comment:', error);
    throw error;
  }
}
