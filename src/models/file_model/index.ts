/**
 * Represents a file model with properties related to a file.
 * @interface
 */
export interface IFileModel {
    /**
     * The SHA hash of the file.
     * @type {string}
     */
    sha: string;
  
    /**
     * The path of the file, including the file name.
     * @type {string}
     */
    path: string;
  
    /**
     * The name of the file.
     * @type {string}
     */
    name: string;
  
    /**
     * The type of the file.
     * @type {string}
     */
    type: string;
  }
  
  /**
   * Represents a file model with properties related to a file.
   * @class
   * @implements {IFileModel}
   */
  export class FileModel implements IFileModel {
    /**
     * The SHA hash of the file.
     * @type {string}
     */
    sha: string;
  
    /**
     * The path of the file, including the file name without extension.
     * @type {string}
     */
    path: string;
  
    /**
     * The name of the file without extension.
     * @type {string}
     */
    name: string;
  
    /**
     * The type of the file.
     * @type {string}
     */
    type: string;
  
    /**
     * Creates an instance of FileModel.
     * @param {IFileModel} data - The data to initialize the file model.
     */
    constructor(data: IFileModel) {
      this.sha = data.sha;
      this.path = data.path;
      this.name = data.name;
      this.type = data.type;
    }
  }
