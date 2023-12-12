/**
 * Represents the response returned by `getViewsByCityAndPage`
 *
 * @public
 * @class
 */
class ViewsByCityAndPageResponse {
    /**
     * The name of the city.
     *
     * @public
     * @type {string}
     * @memberof ViewsByCityAndPageResponse
     * @instance
     */
    public city_name: string;
  
    /**
     * The name of the page.
     *
     * @public
     * @type {string}
     * @memberof ViewsByCityAndPageResponse
     * @instance
     */
    public page_name: string;
  
    /**
     * The number of views for the specified city and page.
     *
     * @public
     * @type {string}
     * @memberof ViewsByCityAndPageResponse
     * @instance
     */
    public views: string;
  
    /**
     * Initializes a new instance of the ViewsByCityAndPageResponse class.
     *
     * @public
     * @constructor
     * @param {IViewsByCityAndPageResponse} param - The parameters to initialize the instance.
     * @returns {ViewsByCityAndPageResponse} - A new instance of ViewsByCityAndPageResponse.
     *
     * @example
     * // Initializing ViewsByCityAndPageResponse
     * const response = new ViewsByCityAndPageResponse({
     *   city_name: "New York",
     *   page_name: "HomePage",
     *   views: "1000",
     * });
     */
    constructor(param: IViewsByCityAndPageResponse) {
      this.city_name = param.city_name;
      this.page_name = param.page_name;
      this.views = param.views;
    }
  }
  
  /**
   * Interface for ViewsByCityAndPageResponse.
   *
   * @public
   * @interface
   * @description
   * This interface is used for type checking and ensuring that the structure
   * of objects conforms to the ViewsByCityAndPageResponse model.
   */
  interface IViewsByCityAndPageResponse {
    /**
     * The name of the city.
     *
     * @public
     * @type {string}
     */
    city_name: string;
  
    /**
     * The name of the page.
     *
     * @public
     * @type {string}
     */
    page_name: string;
  
    /**
     * The number of views for the specified city and page.
     *
     * @public
     * @type {string}
     */
    views: string;
  }
  
  export { ViewsByCityAndPageResponse, IViewsByCityAndPageResponse };
  