import axios, { AxiosResponse } from 'axios';
import { FileContent } from "../../models/file_content";
/**
 * Fetches a list of FileContent instances from the specified API endpoint.
 * @param {string} dir - The directory parameter, Must be one of environment, social, governance.
 * @param {string} fileName - The name of the file without extension.
 * @returns {Promise<FileContent>} - A Promise that resolves to an array of FileContent instances.
 */
export default async function getFileContent(dir: string, fileName: string): Promise<FileContent> {
    try {
      const url = `https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api?get_content=${dir}/${fileName}.mdx`;
      const response: AxiosResponse<FileContent> = await axios.post(url);
  
      // Assuming the API returns an array of FileContent-like objects
      return response.data;
    } catch (error) {
      // Handle errors here (e.g., log, throw, etc.)
      console.error('Error fetching file contents:', error);
      throw error;
    }
  }