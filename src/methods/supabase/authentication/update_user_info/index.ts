import { SupabaseClient, AuthChangeEvent, Session, User } from '@supabase/supabase-js';
import { Administrator } from 'src/models/administrator';

/**
 * Sign in with Google using Supabase authentication.
 * @param {SupabaseClient} supabaseInstance - The Supabase client instance.
 * @returns {Promise<Boolean>} - The signed-in user information or null if there was an error.
 */
export default async function updateUserInfo(supabaseInstance: SupabaseClient, administrator : Administrator): Promise<Boolean> {
  try {
    const { data, error } = await supabaseInstance.auth.updateUser({data : administrator});

    if (error) {
      throw error;
    }

    // Return the signed-in user information
    return Boolean(true);
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
}
