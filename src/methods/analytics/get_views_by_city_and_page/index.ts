import axios, { AxiosResponse } from 'axios';
import { ViewsByCityAndPageResponse } from '../../../models/views_by_city_and_page_response';

/**
 * Fetches views data by city and page from the analytics API.
 * #### Note : By default fetches data for last 30 days 
 *
 * @public
 * @async
 * @function
 * @param {string} apiKey - The API key for authentication.
 * @returns {Promise<ViewsByCityAndPageResponse[]>} - A Promise resolving to an array of ViewsByCityAndPageResponse objects.
 *
 * @throws {Error} Throws an error if the request fails or if the response does not have the expected format.
 *
 * @example
 * // Using the function to fetch views by city and page
 * try {
 *   const apiKey = 'your-api-key';
 *   const viewsByCityAndPageData = await getViewsByCityAndPage(apiKey);
 *   console.log(viewsByCityAndPageData);
 * } catch (error) {
 *   console.error(`Error fetching views by city and page: ${error.message}`);
 * }
 */
async function getViewsByCityAndPage(apiKey: string): Promise<ViewsByCityAndPageResponse[]> {
  try {
    // Define the API endpoint URL
    const apiUrl = 'https://asia-south1-esgedu-740d2.cloudfunctions.net/analytics-api?type=views-by-city-and-page';

    // Set up headers
    const headers = {
      apiKey,
    };

    // Make a POST request to the API
    const response: AxiosResponse<ViewsByCityAndPageResponse[]> = await axios.post(apiUrl, { apiKey }, { headers });

    // Check if the response has the expected format
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    throw new Error(`Failed to fetch views by city and page: ${error}`);
  }
}

export default getViewsByCityAndPage;
