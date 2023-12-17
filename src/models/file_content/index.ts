
/**
 * Represents a file content model with properties related to a file.
 * @interface
 */
export interface IFileContent {
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
  
    /**
     * The content of the file.
     * @type {string}
     */
    content: string;
  }
  
  /**
   * Represents a file content model with properties related to a file.
   * @class
   * @implements {IFileContent}
   /**
 * Example usage:
 *
 * const fileContentData: IFileContent = {
 *   sha: "abc123",
 *   path: "docs/environment/file1.mdx",
 *   name: "file1.md",
 *   type: "file",
 *   content: "content string"
 * };
 *
 * const fileContentInstance = new FileContent(fileContentData);
 *
 * // Accessing properties
 * console.log(fileContentInstance.sha);      // Output: abc123
 * console.log(fileContentInstance.path);     // Output: docs/environment/file1.mdx
 * console.log(fileContentInstance.name);     // Output: file1.md
 * console.log(fileContentInstance.type);     // Output: file
 * console.log(fileContentInstance.content);  // Output: content string
 */

  export class FileContent implements IFileContent {
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
     * The content of the file.
     * @type {string}
     */
    content: string;
  
     /**
      * 
      *   * Creates an instance of FileContent.
     * @param {IFileContent} data - The data to initialize the file content model.
     * 
     * #### Note : While creating a new file provide `SHA` as `""`. 
     * #### `SHA` hash is mandatory when updating or deleting a file
    
    Example usage:
    ```javascript
 
  const fileContentData: IFileContent = {
    sha: "abc123",
    path: "docs/environment/file1",
    name: "file1.md",
    type: "file",
    content: "content string"
  };
    ```
     */
    constructor(data: IFileContent) {
      this.sha = data.sha;
      this.path = data.path;
      this.name = data.name;
      this.type = data.type ?? "file";
      this.content = data.content;
    }
  }
  