/**
 * Represents a initiative comment model with properties related to a comment.
 * @interface
 */
export interface IFileComment {
    /**
     * The IP address associated with the comment.
     * @type {string | undefined}
     */
    ip_address?: string;
  
    /**
     * The text content of the comment.
     * @type {string}
     */
    text: string;
  
    /**
     * The ID of the comment.
     * @type {string}
     */
    id: string;
  
    /**
     * The timestamp of the comment.
     * @type {string}
     */
    time: string;
  
    /**
     * The page ID associated with the comment.
     * @type {string}
     */
    page_id: string;
  }
  
  /**
   * Represents a initiative comment model with properties related to a comment.
   * @class
   * @implements {IFileComment}
   */
  export class FileComment implements IFileComment {
    /**
     * The IP address associated with the comment.
     * @type {string | undefined}
     */
    ip_address?: string;
  
    /**
     * The text content of the comment.
     * @type {string}
     */
    text: string;
  
    /**
     * The ID of the comment.
     * @type {string}
     */
    id: string;
  
    /**
     * The timestamp of the comment.
     * @type {string}
     */
    time: string;
  
    /**
     * The page ID associated with the comment.
     * @type {string}
     */
    page_id: string;
  
    /**
     * Creates an instance of FileComment.
     * @param {IFileComment} data - The data to initialize the initiative comment model.
     */
    constructor(data: IFileComment) {
      this.ip_address = data.ip_address;
      this.text = data.text;
      this.id = data.id;
      this.time = data.time;
      this.page_id = data.page_id;
    }
  }
  