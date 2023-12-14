import { SupabaseClient } from "@supabase/supabase-js";

/**
 * Checks the authorization status of the current user using a Supabase stored procedure.
 *
 * @param {SupabaseClient} supabase - The Supabase client instance.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the user is authorized, and `false` otherwise.
 * @throws {Error} Throws an error if there is an issue with checking the authorization status.
 */
export default async function checkAuthorization(supabase: SupabaseClient): Promise<boolean> {
  /**
   * Checks the authorization status of the current user using a Supabase stored procedure.
   *
   * @param {SupabaseClient} supabase - The Supabase client instance.
   * @returns {Promise<boolean>} A promise that resolves to `true` if the user is authorized, and `false` otherwise.
   * @throws {Error} Throws an error if there is an issue with checking the authorization status.
   */
  const userId = (await supabase.auth.getUser()).data.user?.id;
  const { data, error } = await supabase.rpc("get_authorization", {
    "uid": userId
  });

  if (error) {
    throw error;
  } else {
    return data;
  }
}
