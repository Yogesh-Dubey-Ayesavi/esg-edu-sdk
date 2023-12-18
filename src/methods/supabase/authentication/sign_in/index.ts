import { SupabaseClient, AuthChangeEvent, Session, User } from '@supabase/supabase-js';
/**
 * Function type for a void callback.
 */
type VoidCallback = (user : User | undefined, session : Session | null) => void;

/**
 * Sign in with Google using Supabase authentication.
 * @param {SupabaseClient} supabaseInstance - The Supabase client instance.
 * @returns {Promise<Boolean>} - The signed-in user information or null if there was an error.
 */
export default async function signIn(supabaseInstance: SupabaseClient, authListen : VoidCallback): Promise<Boolean> {
  try {
    const { data, error } = await supabaseInstance.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      throw error;
    }

    // Subscribe to auth changes to get the latest user information
    const { data: authListenerData } = supabaseInstance.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        authListen(session?.user, session);
        // You can perform additional actions on auth state change if needed
        console.log('Auth state change:', event);
      }
    );

    // Return the signed-in user information
    return Boolean(true);
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
}
