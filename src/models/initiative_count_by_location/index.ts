// Define the interface
export interface IInitiativeCountByLocation {
    location_name: string;
    total_initiative_count: number;
  }
  
  // Define the model class
 export default class InitiativeCountByLocation implements IInitiativeCountByLocation {
    location_name: string;
    total_initiative_count: number;
  
    constructor(params:IInitiativeCountByLocation) {
      this.location_name =params. location_name;
      this.total_initiative_count = params.total_initiative_count;
    }
  }
  