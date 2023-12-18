import { SupabaseClient } from "@supabase/supabase-js";
import { InstitutionModel } from "../../../../models/institution";

export default async function fetchInstitutionsByHandlerId(
    supabase: SupabaseClient,
  
  ): Promise<InstitutionModel[]> {
    try {
    let handlerId = (await supabase.auth.getUser()).data.user?.id;
      const { data, error } = await supabase
        .from('institutions')
        .select()
        .eq('handler_id', handlerId);
  
      if (error) {
        throw new Error(`Error fetching institutions: ${error.message}`);
      }
  
      return data || [];
    } catch (error) {
      throw new Error(`Error fetching institutions: ${error}`);
    }
  }