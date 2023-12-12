import { SupabaseClient } from '@supabase/supabase-js';

/**
 * @param {SupabaseClient} supabaseInstance 
 */

export default async function signOut(supabaseInstance: SupabaseClient) {
const { error } = await supabaseInstance.auth.signOut()

}