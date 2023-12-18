import { UserRole } from "../enumerations/user_role";

/**
 * Represents an administrator with properties related to an admin user.
 * @interface
 */
export interface IAdministrator {
    /**
     * The name of the administrator.
     * @type {string}
     */
    name: string;
  
    /**
     * The avatar URL of the administrator.
     * @type {string}
     */
    avatar_url: string;
  
    /**
     * The ID of the administrator.
     * @type {string}
     */
    id: string;
  
    /**
     * The creation timestamp of the administrator.
     * @type {string}
     */
    created_at: string;
  
     /**
     * Defines the user role.
     * @type {UserRole}
     */
     role: UserRole;
  }
  
  /**
   * Represents an administrator with properties related to an admin user.
   * @class
   * @implements {IAdministrator}
   */
  export class Administrator implements IAdministrator {
    /**
     * The name of the administrator.
     * @type {string}
     */
    name: string;
  
    /**
     * The avatar URL of the administrator.
     * @type {string}
     */
    avatar_url: string;
  
    /**
     * The ID of the administrator.
     * @type {string}
     */
    id: string;
  
    /**
     * The creation timestamp of the administrator.
     * @type {string}
     */
    created_at: string;
  
    /**
     * Defines the user role.
     * @type {UserRole}
     */
    role: UserRole;
  
    /**
     * Creates an instance of Administrator.
     * @param {IAdministrator} data - The data to initialize the administrator model.
     */
    constructor(data: IAdministrator) {
      this.name = data.name;
      this.avatar_url = data.avatar_url;
      this.id = data.id;
      this.created_at = data.created_at;
      this.role = data.role;
    }
  }
  