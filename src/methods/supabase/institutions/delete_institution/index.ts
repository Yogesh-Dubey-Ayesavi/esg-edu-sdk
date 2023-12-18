import { SupabaseClient } from "@supabase/supabase-js";
import { InstitutionModel } from "../../../../models/institution";

/**
 * Registers an institution in the Supabase database.
 *
 * @param {SupabaseClient} supabase - The Supabase client instance.
 * @param {string} institutionId - The instituion id to be deleted.
 * @returns {Promise<InstitutionModel>} - A Promise that resolves to the registered institution model.
 * @throws {Error} - Throws an error if there is an issue with the Supabase query or registration process.
 * @example
 * const institutionData = {
 *   created_at: new Date(),
 *   name: "Example Institution",
 *   city: "City Name",
 *   email: "institution@example.com",
 *   // ... other parameters
 *   id: "example-institution-id",
 *   handler_id: "example-handler-id"
 * };
 * const registeredInstitution = await esgSDK.deleteInstituion(institutionData.id);
 * console.log("Registered Institution:", registeredInstitution);
 */
export default  async function deleteInstitution(
    supabase: SupabaseClient,
    institutionId:string
  ): Promise<Boolean> {
    try {
      const { data, error } = await supabase.from("institutions").delete().eq('id',institutionId);
  
      if (error) {
        throw error;
      }
  
      return Boolean(true);
    } catch (error) {
      // Handle errors here (e.g., log, throw, etc.)
      console.error('Error registering institution:', error);
      throw error;
    }
  }
  