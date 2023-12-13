import { SupabaseClient, AuthChangeEvent, Session, User } from '@supabase/supabase-js';

/**
 * Get the current authenticated user info.
 * @param {SupabaseClient} supabaseInstance - The Supabase client instance.
 * @returns {Promise<User>} - The signed-in user information or null if there was an error.
 */
export default async function getUserInfo(supabaseInstance: SupabaseClient): Promise<User> {
  try {
    const { data, error } = await supabaseInstance.auth.getUser();

    if (error) {
      throw error;
    }

    // Return the signed-in user information
    return data.user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
}
