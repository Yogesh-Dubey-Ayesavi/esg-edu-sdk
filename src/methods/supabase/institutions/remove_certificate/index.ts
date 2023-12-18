import { SupabaseClient, PostgrestResponse } from '@supabase/supabase-js';

/**
 * Removes a certificate from the database by its ID.
 * 
 * @param {SupabaseClient} supabase - The Supabase client used for database operations.
 * @param {string} certificateId - The ID of the certificate to be removed.
 * @returns {Promise<void>} - A Promise that resolves when the certificate is successfully removed.
 * @throws {Error} - Throws an error if there is an issue with the database query.
 * 
 * @example
 * // Usage:
 * const certificateId = 'someCertificateId';
 * try {
 *   await removeCertificateById(supabase, certificateId);
 *   console.log('Certificate removed successfully.');
 * } catch (error) {
 *   console.error('Error removing certificate:', error.message);
 * }
 */
export async function removeCertificateById(
  supabase: SupabaseClient,
  certificateId: string
): Promise<void> {
  try {
    const { error } = await supabase
      .from('certifications')
      .delete()
      .eq('id', certificateId);

    if (error) {
      throw new Error(`Error removing certificate: ${error.message}`);
    }
  } catch (error) {
    throw new Error(`Error removing certificate: ${error}`);
  }
}
