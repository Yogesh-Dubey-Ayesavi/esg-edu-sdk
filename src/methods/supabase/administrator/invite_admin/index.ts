import { SupabaseClient } from "@supabase/supabase-js";
  

/**
 * Invites a user to become an administrator by calling a Supabase stored procedure.
 *
 * @param {SupabaseClient} supabase - The Supabase client instance.
 * @param {string} email - The email address of the user to be invited as an administrator.
 * @returns {Promise<void>} A promise that resolves if the invitation is sent successfully.
 * @throws {Error} Throws an error if there is an issue with the invitation process.
 */
export default async function inviteAdmin(supabase:SupabaseClient,email:String):Promise<void> {
   const {data,error} = await supabase.rpc("invite_administrator",{
    "email":email
   });
   if(error){
    throw error;
   }
}