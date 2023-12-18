import axios, { AxiosResponse } from 'axios';
import { InitiativeContent } from "../../../models/file_content";
/**
 * Fetches a list of InitiativeContent instances from the specified API endpoint.
 * @param {string} dir - The directory parameter, Must be one of environment, social, governance.
 * @param {string} fileId - The id of the initiative for which you are fetching content
 * @returns {Promise<InitiativeContent>} - A Promise that resolves to an array of InitiativeContent instances.
 */
export default async function getInitiativeContent(dir: string, fileId:string): Promise<InitiativeContent> {
    try {
      const url = `https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api?get_content=${dir}/${fileId}.mdx`;
      const response: AxiosResponse<InitiativeContent> = await axios.post(url);
  
      // Assuming the API returns an array of InitiativeContent-like objects
      return response.data;
    } catch (error) {
      // Handle errors here (e.g., log, throw, etc.)
      console.error('Error fetching initiative contents:', error);
      throw error;
    }
  }