/**
 * Represents the response returned by `getViewsByPage` method .
 *
 * @public
 * @class
 */
class ViewsByPageResponse {
    /**
     * The name of the page.
     *
     * @public
     * @type {string}
     * @memberof ViewsByPageResponse
     * @instance
     */
    public page_name: string;
  
    /**
     * The number of views for the page.
     *
     * @public
     * @type {string}
     * @memberof ViewsByPageResponse
     * @instance
     */
    public views: string;
  
    /**
     * Initializes a new instance of the ViewsByPageResponse class.
     *
     * @public
     * @constructor
     * @param {IViewsByPageResponse} param - The parameters to initialize the instance.
     * @returns {ViewsByPageResponse} - A new instance of ViewsByPageResponse.
     *
     * @example
     * // Initializing ViewsByPageResponse
     * const response = new ViewsByPageResponse({ page_name: "HomePage", views: "1000" });
     */
    constructor(param: IViewsByPageResponse) {
      this.page_name = param.page_name;
      this.views = param.views;
    }
  }
  
  /**
   * Interface for ViewsByPageResponse.
   *
   * @public
   * @interface
   * @description
   * This interface is used for type checking and ensuring that the structure
   * of objects conforms to the ViewsByPageResponse model.
   */
  interface IViewsByPageResponse {
    /**
     * The name of the page.
     *
     * @public
     * @type {string}
     */
    page_name: string;
  
    /**
     * The number of views for the page.
     *
     * @public
     * @type {string}
     */
    views: string;
  }
  
  export { ViewsByPageResponse, IViewsByPageResponse };
  