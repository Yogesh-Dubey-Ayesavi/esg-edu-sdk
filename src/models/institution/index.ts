import { v4 as uuidv4 } from 'uuid';
export interface IInstitutionInitializer {
  /**
   * The name of the institution.
   * @type {string}
   */
  name: string;


  

  /**
   * The city where the institution is located.
   * @type {string}
   */
  city: string;

  /**
   * The email address of the institution.
   * @type {string}
   */
  email: string;

  /**
   * The phone number of the institution.
   * @type {string | null}
   */
  phone_number?: string | null;

  /**
   * The address of the institution.
   * @type {string | null}
   */
  address?: string | null;

  /**
   * The date when the institution was established.
   * @type { | null}
   */
  established_in?: string | null;

  /**
   * The website URL of the institution.
   * @type {string | null}
   */
  website?: string | null;

  /**
   * The employee size of the institution.
   * @type {number | null}
   */
  employee_size?: number | null;

  /**
   * The unique identifier of the institution.
   * @type {string}
   */
  id?: string;

  /**
   * The unique identifier of the user handling the institution.
   * @type {string | null}
   */
  handler_id?: string | null;


  /**
   *When the instituion was created.
   * @type {string | null}
   */
  created_at?: string | null;
}

/**
 * Represents an institution initializer with properties related to initializing an institution.
 * @class
 * @implements {IInstitutionInitializer}
 */
export  class InstitutionModel implements IInstitutionInitializer {
  /**
   * The name of the institution.
   * @type {string}
   */
  name: string;

  /**
   * The city where the institution is located.
   * @type {string}
   */
  city: string;

  /**
   * The email address of the institution.
   * @type {string}
   */
  email: string;

  /**
   * The phone number of the institution.
   * @type {string | null}
   */
  phone_number?: string | null;

  /**
   * The address of the institution.
   * @type {string | null}
   */
  address?: string | null;

  /**
   * The date when the institution was established.
   * @type {Date | null}
   */
  established_in?: string | null;

  /**
   * The website URL of the institution.
   * @type {string | null}
   */
  website?: string | null;

  /**
   * The employee size of the institution.
   * @type {number | null}
   */
  employee_size?: number | null;

  /**
   * The unique identifier of the institution.
   * @type {string}
   */
  id: string;

  /**
   * The unique identifier of the user handling the institution.
   * @type {string | null}
   */
  handler_id?: string | null;

/**
   * When the instituion was created 
   * @type {string | null}
   */
created_at?: string | null;

  /**
   * Creates an instance of InstitutionInitializer.
   * @param {IInstitutionInitializer} data - The data to initialize the institution initializer.
   */
  constructor(data: IInstitutionInitializer) {
    this.name = data.name;
    this.city = data.city;
    this.email = data.email;
    this.phone_number = data.phone_number || null;
    this.address = data.address || null;
    this.established_in = data.established_in || null;
    this.website = data.website || null;
    this.employee_size = data.employee_size || null;
    this.id = data.id ?? uuidv4();
    this.created_at = data.created_at || new Date().toISOString();
    this.handler_id = data.handler_id || null;
  }
}
