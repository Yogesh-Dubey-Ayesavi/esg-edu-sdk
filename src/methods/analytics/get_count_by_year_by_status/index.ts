import { SupabaseClient } from "@supabase/supabase-js";

/**
 * Gets the count of initiatives within a specified date range and status.
 * If [startFromDate] and [endFromDate] not provided fetches total initiatives until now
 * If {status} not provided fetches total count irrespective of status.
 * @param {SupabaseClient} supabase - The Supabase client instance.
 * @param {Date} startFromDate - The start date of the range.
 * @param {Date} endFromDate - The end date of the range.
 * @param {string | 'undergoing'} status - The status of initiatives to filter (e.g., 'undergoing').
 * @returns {Promise<number>} The count of initiatives within the specified date range and status.
 * @throws {Error} Throws an error if there is an issue with the Supabase query.
 */
export default async function getCountByYearByStatus(supabase: SupabaseClient, startFromDate?: Date, endFromDate?: Date, status?: string |undefined): Promise<number> {
  // Construct the date range for the years
  // Increment by 1 year for inclusive range
  // Query the table
  if(status == undefined){
    const { count, error } = await supabase
    .from("pages")
    .select('*', { count: 'exact', head: true })
    .gt('created_at', startFromDate?.toISOString()?? new  Date(1980,0,1).toISOString())
    .lt('created_at', endFromDate?.toISOString() ?? new Date().toISOString);
  
  if (error) {
    throw error;
  }

  return count ?? 0;
  
  }else{
    const { count, error } = await supabase
    .from("pages")
    .select('*', { count: 'exact', head: true })
    .eq("status", status)
    .gt('created_at', startFromDate?.toISOString()?? new  Date(1980,0,1).toISOString())
    .lt('created_at', endFromDate?.toISOString() ?? new Date().toISOString);
  
  if (error) {
    throw error;
  }

  return count ?? 0;
  }
}

/**
 * Gets the total count of initiatives within a specified date range based on a field.
 * @param {SupabaseClient} supabase - The Supabase client instance.
 * @param {Date} startFromDate - The start date of the range.
 * @param {Date} endFromDate - The end date of the range.
 * @param {string | undefined} field_name - The field name to filter on (e.g., 'created_at').
 * @returns {Promise<number>} The total count of initiatives within the specified date range.
 * @throws {Error} Throws an error if there is an issue with the Supabase query.
 */
export async function getCountTotalIntiatives(supabase: SupabaseClient, startFromDate: Date, endFromDate: Date, field_name: string | undefined): Promise<number> {
  const { count, error } = await supabase
    .from("pages")
    .select('*', { count: 'exact', head: true })
    .gt(field_name ?? 'created_at', startFromDate.toISOString())
    .lt(field_name ?? 'created_at', endFromDate.toISOString());

  if (error) {
    throw error;
  }

  return count ?? 0;
}
