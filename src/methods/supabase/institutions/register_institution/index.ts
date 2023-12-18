import { SupabaseClient } from "@supabase/supabase-js";
import { InstitutionModel } from "src/models/institution";

/**
 * Registers an institution in the Supabase database.
 *
 * @param {SupabaseClient} supabase - The Supabase client instance.
 * @param {InstitutionModel} params - The parameters containing information about the institution.
 * @returns {Promise<InstitutionModel>} - A Promise that resolves to the registered institution model.
 * @throws {Error} - Throws an error if there is an issue with the Supabase query or registration process.
 * @example
 * const esgSDK = EsgSDK.initialize("your-analytics-api-key");
 * const institutionData = {
 *   created_at: new Date(),
 *   name: "Example Institution",
 *   city: "City Name",
 *   email: "institution@example.com",
 *   // ... other parameters
 *   id: "example-institution-id",
 *   handler_id: "example-handler-id"
 * };
 * const registeredInstitution = await esgSDK.registerInstitution(institutionData);
 * console.log("Registered Institution:", registeredInstitution);
 */
async function registerInstitution(
    supabase: SupabaseClient,
    params: InstitutionModel
  ): Promise<InstitutionModel> {
    try {
      const { data, error } = await supabase.from("institutions").insert(params).select();
  
      if (error) {
        throw error;
      }
  
      return new InstitutionModel(data[0]);
    } catch (error) {
      // Handle errors here (e.g., log, throw, etc.)
      console.error('Error registering institution:', error);
      throw error;
    }
  }
  