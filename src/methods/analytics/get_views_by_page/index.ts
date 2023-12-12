import axios, { AxiosResponse } from 'axios';
import { ViewsByPageResponse } from '../../../models/views_by_page_response';

/**
 * Fetches per-page views data from the analytics API.
 * #### Note : By default fetches data for last 30 days 
 *
 * @public
 * @async
 * @function
 * @param {string} apiKey - The API key for authentication.
 * @returns {Promise<ViewsByPageResponse[]>} - A Promise resolving to an array of ViewsByPageResponse objects.
 *
 * @throws {Error} Throws an error if the request fails or if the response does not have the expected format.
 *
 * @example
 * // Using the function to fetch per-page views
 * try {
 *   const apiKey = 'your-api-key';
 *   const perPageViewsData = await getViewsByPage(apiKey);
 *   console.log(perPageViewsData);
 * } catch (error) {
 *   console.error(`Error fetching per-page views: ${error.message}`);
 * }
 */
async function getViewsByPage(apiKey: string): Promise<ViewsByPageResponse[]> {
  try {
    // Define the API endpoint URL
    const apiUrl = 'https://asia-south1-esgedu-740d2.cloudfunctions.net/analytics-api?type=per-page-views';

    // Set up headers
    const headers = {
      apiKey,
    };

    // Make a POST request to the API
    const response: AxiosResponse<ViewsByPageResponse[]> = await axios.post(apiUrl, { apiKey }, { headers });

    // Check if the response has the expected format
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    throw new Error(`Failed to fetch per-page views: ${error}`);
  }
}

export default getViewsByPage;
