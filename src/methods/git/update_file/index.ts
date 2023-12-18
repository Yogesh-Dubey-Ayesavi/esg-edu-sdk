import axios, { AxiosResponse } from 'axios';
import { FileContent } from "../../../models/file_content";

const BASE_URL = 'https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api';

/**
 * Updates a file with the specified content at the given path.
 * @param {FileContent} file - The file content parameters.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file update was successful.
 */
export default async function updateFile(file: FileContent): Promise<boolean> {
  try {
    const url = `${BASE_URL}/update?type=update&path=${file.path}.mdx&sha=${file.sha}`;
    const requestBody = {
      content: file.content
    };

    const response: AxiosResponse<FileContent> = await axios.post(url, requestBody);

  
    // Assuming the update is considered successful if the SHA property is present
    return Boolean(response.status == 200);
  } catch (error) {
    console.error('Error updating file:', error);
    throw new Error('File update failed'); // You can customize the error message as needed
  }
}
