import { SupabaseClient } from "@supabase/supabase-js";
import { Administrator } from "../../../../../src/models/administrator";
import { UserRole } from "../../../../models/enumerations";


/**
 * Retrieves a list of administrators from the Supabase "administrators" table.
 *
 * @param {SupabaseClient} supabase - The Supabase client instance.
 * @returns {Promise<Administrator[] | []>} A promise that resolves to an array of Administrator objects if successful, or an empty array if there are no administrators.
 * @throws {Error} Throws an error if there is an issue with retrieving the administrators.
 */
export default async function getAdmins(supabase:SupabaseClient):Promise<Administrator[] | []> {
   const {data,error} = await supabase.from("users").select("*").or(`role.eq.${UserRole.SuperAdmin},role.eq.${UserRole.InitiativeReviewer},role.eq.${UserRole.InitiativeWriter},role.eq.${UserRole.CertificateReviewer}`)
   if(error){

    throw error;
   }else{
    return data.map((e)=>new Administrator({
            created_at :e.created_at,name:e.name,avatar_url:e.avatar_url,id:  e.id,role:e.role
        }))
   }
}