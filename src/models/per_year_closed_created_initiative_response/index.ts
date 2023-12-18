// Define the interface
export interface IPerYearCreatedClosedInitiativeCount {
    closed_initiatives: number;
    created_initiatives: number;
  }
  
  // Define the model class
export default   class PerYearCreatedClosedInitiativeCount implements IPerYearCreatedClosedInitiativeCount {
    closed_initiatives: number;
    created_initiatives: number;
  
    constructor(params:IPerYearCreatedClosedInitiativeCount) {
      this.closed_initiatives = params.closed_initiatives;
      this.created_initiatives = params.created_initiatives;
    }
  }