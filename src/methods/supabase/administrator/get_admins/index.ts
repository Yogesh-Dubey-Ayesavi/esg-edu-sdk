import { SupabaseClient } from "@supabase/supabase-js";
import { Administrator } from "../../../../../src/models/administrator";


/**
 * Retrieves a list of administrators from the Supabase "administrators" table.
 *
 * @param {SupabaseClient} supabase - The Supabase client instance.
 * @returns {Promise<Administrator[] | []>} A promise that resolves to an array of Administrator objects if successful, or an empty array if there are no administrators.
 * @throws {Error} Throws an error if there is an issue with retrieving the administrators.
 */
export default async function getAdmins(supabase:SupabaseClient):Promise<Administrator[] | []> {
   const {data,error} = await supabase.from("administrators").select("*,user:users(*)");
   if(error){

    throw error;
   }else{
       return data.map((e)=>new Administrator({
            created_at :e.created_at,name:e.user.name,avatar_url:e.user.avatar_url,id:  e.id,is_admin:e.is_admin
        }))
   }
}