/**
 * Represents the response returned by `getViewsByDate` method.
 *
 * @public
 * @class
 */
class ViewsByDateResponse {
    /**
     * The date for which the views are recorded.
     *
     * @public
     * @type {Date}
     * @memberof ViewsByDateResponse
     * @instance
     */
    public date: Date;
  
    /**
     * The number of views for the specified date.
     *
     * @public
     * @type {string}
     * @memberof ViewsByDateResponse
     * @instance
     */
    public views: string;
  
    /**
     * Initializes a new instance of the ViewsByDateResponse class.
     *
     * @public
     * @constructor
     * @param {IViewsByDateResponse} param - The parameters to initialize the instance.
     * @returns {ViewsByDateResponse} - A new instance of ViewsByDateResponse.
     *
     * @example
     * // Initializing ViewsByDateResponse
     * const response = new ViewsByDateResponse({
     *   date: "2023-12-12",
     *   views: new Date(),
     * });
     */
    constructor(param: IViewsByDateResponse) {
      this.date = param.date;
      this.views = param.views;
    }
  }
  
  /**
   * Interface for ViewsByDateResponse.
   *
   * @public
   * @interface
   * @description
   * This interface is used for type checking and ensuring that the structure
   * of objects conforms to the ViewsByDateResponse model.
   */
  interface IViewsByDateResponse {
    /**
     * The date for which the views are recorded.
     *
     * @public
     * @type {Date}
     */
    date: Date;
  
    /**
     * The number of views for the specified date.
     *
     * @public
     * @type {string}
     */
    views: string;
  }
  
  export { ViewsByDateResponse, IViewsByDateResponse };
  