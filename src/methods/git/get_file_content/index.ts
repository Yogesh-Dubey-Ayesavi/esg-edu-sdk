import axios, { AxiosResponse } from 'axios';
import { FileContent } from "../../../models/file_content";
import { FileModel } from '../../../models/file_model';
/**
 * Fetches a list of FileContent instances from the specified API endpoint.
 * @param {string} dir - The directory parameter, Must be one of environment, social, governance.
 * @param {FileModel} fileModel - The instance of fileModel class for which you are fetching content
 * @returns {Promise<FileContent>} - A Promise that resolves to an array of FileContent instances.
 */
export default async function getFileContent(dir: string, fileModel: FileModel): Promise<FileContent> {
    try {
      const url = `https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api?get_content=${dir}/${fileModel.id}.mdx`;
      const response: AxiosResponse<FileContent> = await axios.post(url);
  
      // Assuming the API returns an array of FileContent-like objects
      return response.data;
    } catch (error) {
      // Handle errors here (e.g., log, throw, etc.)
      console.error('Error fetching file contents:', error);
      throw error;
    }
  }