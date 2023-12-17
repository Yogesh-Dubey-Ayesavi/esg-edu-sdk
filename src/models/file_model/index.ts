/**
 * Represents a file model with properties related to a file.
 * @interface
 */
export interface IFileModel {
  /**
   * The SHA hash of the file.
   * @type {string}
   */
  sha: string | undefined;

  /**
   * The path of the file, including filename without extension
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
   * The description of the file.
   * @type {string | undefined}
   */
  description?: string;

  /**
   * The ID of the file.
   * @type {string}
   */
  id: string;

  /**
   * The creation date of the file.
   * @type {Date}
   */
  created_at: Date;

  /**
   * The creator of the file.
   * @type {string}
   */
  created_by: string;

  /**
   * The date of completion for the file.
   * @type {Date}
   */
  dateOfCompletion: Date;

  /**
   * The location of the file.
   * @type {string}
   */
  location: string;
 /**
   * last time the initiative was updated at.
   * @type {string}
   */
 updated_at: string|undefined;

   /**
   * The status of the file.
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
 * Represents a file model with properties related to a file.
 * @class
 * @implements {IFileModel}
 */
export class FileModel implements IFileModel {
  /**
   * The SHA hash of the file.
   * @type {string}
   */
  sha: string | undefined;

  /**
      * The path of the file, including the file name without extension
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
   * The description of the file.
   * @type {string | undefined}
   */
  description?: string;

  /**
   * The ID of the file.
   * @type {string}
   */
  id: string;

  /**
   * The creation date of the file.
   * @type {Date}
   */
  created_at: Date;

  /**
   * The creator of the file.
   * @type {string}
   */
  created_by: string;

  /**
   * The date of completion for the file.
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
   * Creates an instance of FileModel.
   * @param {IFileModel} data - The data to initialize the file model.
   */

    /**
   * The status of the file.
   * @type {('completed' | 'undergoing' | 'stopped' | 'delayed' | 'neverending')}
   */
    status: 'completed' | 'undergoing' | 'stopped' | 'delayed' | 'neverending';



    /**
   * The date the file was closed.
   * @type {string | undefined}
   */
  closed_at: string | undefined;


  constructor(data: IFileModel) {
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
   * Creates a new instance of FileModel with specified changes.
   * @param {Partial<IFileModel>} changes - The changes to apply to the file model.
   * @returns {FileModel} - A new instance of FileModel with the specified changes.
   */
   copyWith(changes: Partial<IFileModel>): FileModel {
    return new FileModel({
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



