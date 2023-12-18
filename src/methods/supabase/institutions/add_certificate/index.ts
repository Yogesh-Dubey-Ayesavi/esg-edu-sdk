import { SupabaseClient } from "@supabase/supabase-js";
import { CertificateModel } from "../../../../models/certificate";

export default async function addCertificatesToDatabase(
    supabase: SupabaseClient,
    certificates:CertificateModel[]
  ): Promise<Boolean> {
    try {
      const { data, error } = await supabase
        .from('certifications')
        .upsert([certificates]);
  
      if (error) {
        throw new Error(`Error adding certificate: ${error.message}`);
      }
  
      if (!data) {
        throw new Error('Failed to add certificate to the database.');
      }
  
      return data != null;
    } catch (error) {
      throw new Error(`Error adding certificate: ${error}`);
    }
  }