import { SupabaseClient } from "@supabase/supabase-js";
import signIn from "../../authentication/sign_in";

/**
 * Accepts an invitation for a user, validates the access token, signs in the user,
 * and assigns the "administrator" role by inserting a record into the "administrators" table.
 *
 * @param {SupabaseClient} supabase - The Supabase client instance.
 * @param {string} accessToken - The access token associated with the user's invitation.
 * @returns {Promise<boolean>} A boolean indicating the success of the operation.
 * @throws {string | Error} Throws an error if validation fails or role assignment is unsuccessful.
 */
export default async function acceptInvitation(supabase:SupabaseClient,accessToken:string):Promise<Boolean>{
      if(  (await supabase.rpc("validate_token",{
            "access_token":accessToken
        })).data){
         if ( await signIn(supabase,(a,b)=>{})){
          await supabase.from("administrators").insert({
            "user_id":(await supabase.auth.getUser()).data.user?.id
          });
          return Boolean(true);
         }else{
            throw "Unable to assign role"
         }
        }else {
            throw Error("Access Token either expired, Either Wrong");
        }
}

