import axios, { AxiosResponse } from 'axios';
import { ViewsByDateResponse } from '../../../models/views_by_date_response';
import { errorHandler } from '../../../../src/error_handler';

/**
 * Fetches views data by date from the analytics API.
 * 
 * #### Note : By default fetches data for last 30 days 
 *
 * @public
 * @async
 * @function
 * @param {string} apiKey - The API key for authentication.
 * @returns {Promise<ViewsByDateResponse[]>} - A Promise resolving to an array of ViewsByDateResponse objects.
 *
 * @throws {Error} Throws an error if the request fails or if the response does not have the expected format.
 *
 * @example
 * // Using the function to fetch views by date
 * try {
 *   const apiKey = 'your-api-key';
 *   const viewsByDateData = await getViewsByDate(apiKey);
 *   console.log(viewsByDateData);
 * } catch (error) {
 *   console.error(`Error fetching views by date: ${error.message}`);
 * }
 */
async function getViewsByDate(apiKey: string): Promise<ViewsByDateResponse[]> {
  try {
    // Define the API endpoint URL
    const apiUrl = 'https://asia-south1-esgedu-740d2.cloudfunctions.net/analytics-api?type=views-by-day';

    // Set up headers
    const headers = {
      apiKey,
    };

    // Make a POST request to the API
    const response: AxiosResponse = await axios.post(apiUrl, { apiKey }, { headers });

    // Check if the response has the expected format
    if (Array.isArray(response.data)) {
      return response.data.map((e)=>{
        return new ViewsByDateResponse({
                date : new Date(Date.parse(e.date)), views: e.views
        })
      });
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    throw errorHandler(error);
  }
}

export default getViewsByDate;
