
/**
 * Represents a initiative content model with properties related to a initiative.
 * @interface
 */
export interface IInitiativeContent {
    /**
     * The SHA hash of the initiative.
     * @type {string}
     */
    sha: string;
  
    /**
     * The path of the initiative, including the initiative name.
     * @type {string}
     */
    path: string;
  
    /**
     * The name of the initiative.
     * @type {string}
     */
    name: string;
  
    /**
     * The type of the initiative.
     * @type {string}
     */
    type: string;
  
    /**
     * The content of the initiative.
     * @type {string}
     */
    content: string;
  }
  
  /**
   * Represents a initiative content model with properties related to a initiative.
   * @class
   * @implements {IInitiativeContent}
   /**
 * Example usage:
 *
 * const fileContentData: IInitiativeContent = {
 *   sha: "abc123",
 *   path: "docs/environment/file1.mdx",
 *   name: "file1.md",
 *   type: "initiative",
 *   content: "content string"
 * };
 *
 * const fileContentInstance = new InitiativeContent(fileContentData);
 *
 * // Accessing properties
 * console.log(fileContentInstance.sha);      // Output: abc123
 * console.log(fileContentInstance.path);     // Output: docs/environment/file1.mdx
 * console.log(fileContentInstance.name);     // Output: file1.md
 * console.log(fileContentInstance.type);     // Output: initiative
 * console.log(fileContentInstance.content);  // Output: content string
 */

  export class InitiativeContent implements IInitiativeContent {
    /**
     * The SHA hash of the initiative.
     * @type {string}
     */
    sha: string;
  
    /**
     * The path of the initiative, including the initiative name without extension.
     * @type {string}
     */
    path: string;
  
    /**
     * The name of the initiative without extension.
     * @type {string}
     */
    name: string;
  
    /**
     * The type of the initiative.
     * @type {string}
     */
    type: string;
  
    /**
     * The content of the initiative.
     * @type {string}
     */
    content: string;
  
     /**
      * 
      *   * Creates an instance of InitiativeContent.
     * @param {IInitiativeContent} data - The data to initialize the initiative content model.
     * 
     * #### Note : While creating a new initiative provide `SHA` as `""`. 
     * #### `SHA` hash is mandatory when updating or deleting a initiative
    
    Example usage:
    ```javascript
 
  const fileContentData: IInitiativeContent = {
    sha: "abc123",
    path: "docs/environment/file1",
    name: "file1.md",
    type: "file",
    content: "content string"
  };
    ```
     */
    constructor(data: IInitiativeContent) {
      this.sha = data.sha;
      this.path = data.path;
      this.name = data.name;
      this.type = data.type ?? "file";
      this.content = data.content;
    }
  }
  