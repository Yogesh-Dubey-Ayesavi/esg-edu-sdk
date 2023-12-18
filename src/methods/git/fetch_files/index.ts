import { SupabaseClient } from '@supabase/supabase-js';
import { CompositeFilter } from '../../../models/composite_filter';
import { InitiativeModel } from '../../../models/file_model';

/**
 * Fetches a list of InitiativeModel instances from the specified API endpoint.
 * @param {SupabaseClient} supabase - The Supabase client instance.
 * @param {string} dir - The directory parameter for the API endpoint. Must be one of 'environment', 'social', 'governance'.
 * @returns {Promise<InitiativeModel[]>} - A Promise that resolves to an array of InitiativeModel instances.
 */
export default async function fetchFiles(supabase: SupabaseClient, dir: string): Promise<InitiativeModel[]> {
  try {
    // const url = `https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api/?list=${dir}`;
    // const response: AxiosResponse<InitiativeModel[]> = await axios.post(url);
    const { data, error } = await supabase.from("pages").select();
    
    if (error) {
      throw error;
    } else {
      return data.map((e) => {
        let map = e;
        map.dateOfCompletion = e.doc;
        return new InitiativeModel(map);
      });
    }
  } catch (error) {
    // Handle errors here (e.g., log, throw, etc.)
    console.error('Error fetching initiative models:', error);
    throw error;
  }
}

/**
 * Searches and retrieves a list of InitiativeModel instances based on the provided composite filter.
 * @param {SupabaseClient} supabase - The Supabase client instance.
 * @param {string} dir - The directory parameter for the API endpoint. Must be one of 'environment', 'social', 'governance'.
 * @param {CompositeFilter | undefined} compositeFilter - The composite filter to apply to the search.
 * @returns {Promise<InitiativeModel[]>} - A Promise that resolves to an array of InitiativeModel instances matching the search criteria.
 */
export async function searchFiles(supabase: SupabaseClient, dir: string, compositeFilter?: CompositeFilter): Promise<InitiativeModel[]> {
  try {
    // const url = `https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api/?list=${dir}`;
    // const response: AxiosResponse<InitiativeModel[]> = await axios.post(url);
    const { data, error } = await supabase.from("pages").select().ilike(`${compositeFilter?.field_name ?? ""}`, `%${compositeFilter?.key ?? "name"}%`);
    
    if (error) {
      throw error;
    } else {
      return data.map((e) => {
        let map = e;
        map.dateOfCompletion = e.doc;
        return new InitiativeModel(map);
      });
    }
  } catch (error) {
    // Handle errors here (e.g., log, throw, etc.)
    console.error('Error fetching initiative models:', error);
    throw error;
  }
}
