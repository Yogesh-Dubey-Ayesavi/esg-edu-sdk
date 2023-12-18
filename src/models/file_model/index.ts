/**
 * Represents a initiative model with properties related to a initiative.
 * @interface
 */
export interface IInitiativeModel {
  /**
   * The SHA hash of the initiative.
   * @type {string}
   */
  sha: string | undefined;

  /**
   * The path of the initiative, including filename without extension
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
   * The description of the initiative.
   * @type {string | undefined}
   */
  description?: string;

  /**
   * The ID of the initiative.
   * @type {string}
   */
  id: string;

  /**
   * The creation date of the initiative.
   * @type {Date}
   */
  created_at: Date;

  /**
   * The creator of the initiative.
   * @type {string}
   */
  created_by: string;

  /**
   * The date of completion for the initiative.
   * @type {Date}
   */
  dateOfCompletion: Date;

  /**
   * The location of the initiative.
   * @type {string}
   */
  location: string;
 /**
   * last time the initiative was updated at.
   * @type {string}
   */
 updated_at: string|undefined;

   /**
   * The status of the initiative.
   * @type {('completed' | 'undergoing' | 'stopped' | 'delayed' | 'neverending')}
   */
   status: 'completed' | 'undergoing' | 'stopped' | 'delayed' | 'neverending';

   /**
   * The date the initiative was closed at.
   * @type {string | undefined}
   */
   closed_at?: string;

}

/**
 * Represents a initiative model with properties related to a initiative.
 * @class
 * @implements {IInitiativeModel}
 */
export class InitiativeModel implements IInitiativeModel {
  /**
   * The SHA hash of the initiative.
   * @type {string}
   */
  sha: string | undefined;

  /**
      * The path of the initiative, including the initiative name without extension
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
   * The description of the initiative.
   * @type {string | undefined}
   */
  description?: string;

  /**
   * The ID of the initiative.
   * @type {string}
   */
  id: string;

  /**
   * The creation date of the initiative.
   * @type {Date}
   */
  created_at: Date;

  /**
   * The creator of the initiative.
   * @type {string}
   */
  created_by: string;

  /**
   * The date of completion for the initiative.
   * @type {Date}
   */
  dateOfCompletion: Date;

  /**
   * The location of the initiative.
   * @type {string}
   */
  location: string;


  /**
   * last time the initiative was updated at.
   * @type {string}
   */
  updated_at: string|undefined;

  /**
   * Creates an instance of InitiativeModel.
   * @param {IInitiativeModel} data - The data to initialize the initiative model.
   */

    /**
   * The status of the initiative.
   * @type {('completed' | 'undergoing' | 'stopped' | 'delayed' | 'neverending')}
   */
    status: 'completed' | 'undergoing' | 'stopped' | 'delayed' | 'neverending';



    /**
   * The date the initiative was closed.
   * @type {string | undefined}
   */
  closed_at: string | undefined;


  constructor(data: IInitiativeModel) {
    this.sha = data.sha;
    this.path = data.path;
    this.name = data.name;
    this.type = data.type;
    this.description = data.description;
    this.id = data.id;
    this.updated_at = data.updated_at;
    this.status = data.status;
    this.created_at = data.created_at;
    this.created_by = data.created_by;
    this.dateOfCompletion = data.dateOfCompletion;
    this.location = data.location;
    this.closed_at = data.closed_at;
  }

  toSupaJson(): Object {
      return {
         path :this.path,
         closed_at: this.closed_at,
         name:this.name,
         id:this.id,
         status:this.status,
         created_at:this.created_at,
          created_by:this.created_by,
          doc:this.dateOfCompletion,
          location:this.location,
          description:this.description, 
      }
      
  }

   /**
   * Creates a new instance of InitiativeModel with specified changes.
   * @param {Partial<IInitiativeModel>} changes - The changes to apply to the initiative model.
   * @returns {InitiativeModel} - A new instance of InitiativeModel with the specified changes.
   */
   copyWith(changes: Partial<IInitiativeModel>): InitiativeModel {
    return new InitiativeModel({
      status:changes.status !== undefined ? changes.status:this.status,
      updated_at:changes.updated_at !== undefined ? changes.updated_at:this.updated_at,
      sha: changes.sha !== undefined ? changes.sha : this.sha,
      closed_at: changes.closed_at !== undefined ? changes.closed_at : this.closed_at,
      path: changes.path !== undefined ? changes.path : this.path,
      name: changes.name !== undefined ? changes.name : this.name,
      type: changes.type !== undefined ? changes.type : this.type,
      description: changes.description !== undefined ? changes.description : this.description,
      id: changes.id !== undefined ? changes.id : this.id,
      created_at: changes.created_at !== undefined ? changes.created_at : this.created_at,
      created_by: changes.created_by !== undefined ? changes.created_by : this.created_by,
      dateOfCompletion: changes.dateOfCompletion !== undefined ? changes.dateOfCompletion : this.dateOfCompletion,
      location: changes.location !== undefined ? changes.location : this.location,
    });
  }


}



