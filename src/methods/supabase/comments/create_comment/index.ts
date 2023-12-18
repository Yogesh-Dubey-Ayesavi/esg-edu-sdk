import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { FileComment } from '../../../../models/file_comment';

/**
 * Inserts a new comment into the 'comments' table.
 * @param {SupabaseClient} supabaseInstance - The Supabase client instance.
 * @param {FileComment} comment - The comment to be inserted.
 * @returns {Promise<FileComment>} - The inserted comment.
 */
async function createComment(supabaseInstance: SupabaseClient, comment: FileComment): Promise<FileComment> {
  try {
    // Use the 'insert' method to add a new row to the 'comments' table
    const { data, error } = await supabaseInstance.from('comments').insert([
      {
        ip_address: comment.ip_address,
        text: comment.text,
        id: comment.id,
        time: comment.time,
        page_id: comment.page_id,
      },
    ]).select();

    if (error) {
      throw error;
    }

    // Return the inserted comment
    return data?.[0] as FileComment;
  } catch (error) {
    console.error('Error inserting comment:', error);
    throw error;
  }
}
