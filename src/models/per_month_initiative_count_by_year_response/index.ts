// Define the interface
export interface IPerMonthIntiativeCountByYearResponse {
    month: number;
    initiative_count: number;
  }
  
  // Define the model class
export default  class PerMonthIntiativeCountByYearResponseModel implements IPerMonthIntiativeCountByYearResponse {
    month: number;
    initiative_count: number;
  
    constructor(param:IPerMonthIntiativeCountByYearResponse) {
      this.month = param.month;
      this.initiative_count = param.initiative_count;
    }
  }
  