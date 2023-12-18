import axios, { AxiosResponse } from 'axios';
import { InitiativeContent } from "../../../models/file_content";

const BASE_URL = 'https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api';

/**
 * Updates a initiative with the specified content at the given path.
 * @param {InitiativeContent} initiative - The initiative content parameters.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the initiative update was successful.
 */
export default async function updateFile(initiative: InitiativeContent): Promise<boolean> {
  try { 
    const url = `${BASE_URL}/update?type=update&path=${initiative.path}.mdx&sha=${initiative.sha}`;
    const requestBody = {
      content: initiative.content
    };

    const response: AxiosResponse<InitiativeContent> = await axios.post(url, requestBody);

  
    // Assuming the update is considered successful if the SHA property is present
    return Boolean(response.status == 200);
  } catch (error) {
    console.error('Error updating initiative:', error);
    throw new Error('File update failed'); // You can customize the error message as needed
  }
}
