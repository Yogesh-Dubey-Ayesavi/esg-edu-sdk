import axios, { AxiosResponse } from 'axios';
import { FileModel } from '../../../models/file_model';
/**
 * Fetches a list of FileModel instances from the specified API endpoint.
 * @param {string} dir - The directory parameter for the API endpoint, Must be one of **environment**, **social**, **governance**.
 * @returns {Promise<FileModel[]>} - A Promise that resolves to an array of FileModel instances.
 */
export default async function fetchFiles(dir: string): Promise<FileModel[]> {
    try {
      const url = `https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api/?list=${dir}`;
      const response: AxiosResponse<FileModel[]> = await axios.post(url);
  
      // Assuming the API returns an array of FileModel-like objects
      return response.data.map((fileData) => new FileModel(fileData));
    } catch (error) {
      // Handle errors here (e.g., log, throw, etc.)
      console.error('Error fetching file models:', error);
      throw error;
    }
  }
  