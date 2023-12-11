import axios, { AxiosResponse } from 'axios';
import { FileContent } from "../../models/file_content";
/**
 * Deletes a file at the specified path.
 * @param {FileContent} fileContent - The file content model representing the file to be deleted.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file deletion was successful.
 */
export default async function deleteFile(fileContent: FileContent): Promise<boolean> {
    try {
      const url = `https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api?type=delete&path=${fileContent.path}.mdx&sha=${fileContent.sha}`;
      const response: AxiosResponse<boolean> = await axios.post(url);
  
      // Assuming the API returns a boolean indicating success
      return Boolean(response.status);
    } catch (error) {
      // Handle errors here (e.g., log, throw, etc.)
      console.error('Error deleting file:', error);
      throw error;
    }
  }