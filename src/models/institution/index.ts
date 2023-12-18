
<<<<<<< HEAD
/**
 * Represents an institution with properties related to an institution.
 * @interface
 */
export interface IInstitutionModel {
  /**
   * The timestamp when the institution was created.
   * @type {Date}
   */
  created_at: Date;

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
  established_in?: Date | null;

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
}

/**
 * Represents an institution with properties related to an institution.
 * @class
 * @implements {IInstitutionModel}
 */
export class InstitutionModel implements IInstitutionModel {
  /**
   * The timestamp when the institution was created.
   * @type {Date}
   */
  created_at: Date;

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
  established_in?: Date | null;

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
   * Creates an instance of InstitutionModel.
   * @param {IInstitutionModel} data - The data to initialize the institution model.
   */
  constructor(data: IInstitutionModel) {
    this.created_at = data.created_at;
    this.name = data.name;
    this.city = data.city;
    this.email = data.email;
    this.phone_number = data.phone_number || null;
    this.address = data.address || null;
    this.established_in = data.established_in || null;
    this.website = data.website || null;
    this.employee_size = data.employee_size || null;
    this.id = data.id;
    this.handler_id = data.handler_id || null;
  }

  // You can add additional methods or properties as needed
}

/**
 * Represents an institution initializer with properties related to initializing an institution.
 * @interface
 */
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
   * @type {Date | null}
   */
  established_in?: Date | null;

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
}

/**
 * Represents an institution initializer with properties related to initializing an institution.
 * @class
 * @implements {IInstitutionInitializer}
 */
export class InstitutionInitializer implements IInstitutionInitializer {
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
  established_in?: Date | null;

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
    this.id = data.id;
    this.handler_id = data.handler_id || null;
  }
}
=======
// /**
//  * Represents an institution with properties related to an institution.
//  * @interface
//  */
// export interface IInstitutionModel {
//   /**
//    * The timestamp when the institution was created.
//    * @type {Date}
//    */
//   created_at: Date;

//   /**
//    * The name of the institution.
//    * @type {string}
//    */
//   name: string;

//   /**
//    * The city where the institution is located.
//    * @type {string}
//    */
//   city: string;

//   /**
//    * The email address of the institution.
//    * @type {string}
//    */
//   email: string;

//   /**
//    * The phone number of the institution.
//    * @type {string | null}
//    */
//   phone_number?: string | null;

//   /**
//    * The address of the institution.
//    * @type {string | null}
//    */
//   address?: string | null;

//   /**
//    * The date when the institution was established.
//    * @type {Date | null}
//    */
//   established_in?: Date | null;

//   /**
//    * The website URL of the institution.
//    * @type {string | null}
//    */
//   website?: string | null;

//   /**
//    * The employee size of the institution.
//    * @type {number | null}
//    */
//   employee_size?: number | null;

//   /**
//    * The unique identifier of the institution.
//    * @type {string}
//    */
//   id: string;

//   /**
//    * The unique identifier of the user handling the institution.
//    * @type {string | null}
//    */
//   handler_id?: string | null;
// }

// /**
//  * Represents an institution with properties related to an institution.
//  * @class
//  * @implements {IInstitutionModel}
//  */
// export class InstitutionModel implements IInstitutionModel {
//   /**
//    * The timestamp when the institution was created.
//    * @type {Date}
//    */
//   created_at: Date;

//   /**
//    * The name of the institution.
//    * @type {string}
//    */
//   name: string;

//   /**
//    * The city where the institution is located.
//    * @type {string}
//    */
//   city: string;

//   /**
//    * The email address of the institution.
//    * @type {string}
//    */
//   email: string;

//   /**
//    * The phone number of the institution.
//    * @type {string | null}
//    */
//   phone_number?: string | null;

//   /**
//    * The address of the institution.
//    * @type {string | null}
//    */
//   address?: string | null;

//   /**
//    * The date when the institution was established.
//    * @type {Date | null}
//    */
//   established_in?: Date | null;

//   /**
//    * The website URL of the institution.
//    * @type {string | null}
//    */
//   website?: string | null;

//   /**
//    * The employee size of the institution.
//    * @type {number | null}
//    */
//   employee_size?: number | null;

//   /**
//    * The unique identifier of the institution.
//    * @type {string}
//    */
//   id: string;

//   /**
//    * The unique identifier of the user handling the institution.
//    * @type {string | null}
//    */
//   handler_id?: string | null;

//   /**
//    * Creates an instance of InstitutionModel.
//    * @param {IInstitutionModel} data - The data to initialize the institution model.
//    */
//   constructor(data: IInstitutionModel) {
//     this.created_at = data.created_at;
//     this.name = data.name;
//     this.city = data.city;
//     this.email = data.email;
//     this.phone_number = data.phone_number || null;
//     this.address = data.address || null;
//     this.established_in = data.established_in || null;
//     this.website = data.website || null;
//     this.employee_size = data.employee_size || null;
//     this.id = data.id;
//     this.handler_id = data.handler_id || null;
//   }

//   // You can add additional methods or properties as needed
// }

// /**
//  * Represents an institution initializer with properties related to initializing an institution.
//  * @interface
//  */
// export interface IInstitutionInitializer {
//   /**
//    * The name of the institution.
//    * @type {string}
//    */
//   name: string;

//   /**
//    * The city where the institution is located.
//    * @type {string}
//    */
//   city: string;

//   /**
//    * The email address of the institution.
//    * @type {string}
//    */
//   email: string;

//   /**
//    * The phone number of the institution.
//    * @type {string | null}
//    */
//   phone_number?: string | null;

//   /**
//    * The address of the institution.
//    * @type {string | null}
//    */
//   address?: string | null;

//   /**
//    * The date when the institution was established.
//    * @type {Date | null}
//    */
//   established_in?: Date | null;

//   /**
//    * The website URL of the institution.
//    * @type {string | null}
//    */
//   website?: string | null;

//   /**
//    * The employee size of the institution.
//    * @type {number | null}
//    */
//   employee_size?: number | null;

//   /**
//    * The unique identifier of the institution.
//    * @type {string}
//    */
//   id: string;

//   /**
//    * The unique identifier of the user handling the institution.
//    * @type {string | null}
//    */
//   handler_id?: string | null;
// }

// /**
//  * Represents an institution initializer with properties related to initializing an institution.
//  * @class
//  * @implements {IInstitutionInitializer}
//  */
// export class InstitutionInitializer implements IInstitutionInitializer {
//   /**
//    * The name of the institution.
//    * @type {string}
//    */
//   name: string;

//   /**
//    * The city where the institution is located.
//    * @type {string}
//    */
//   city: string;

//   /**
//    * The email address of the institution.
//    * @type {string}
//    */
//   email: string;

//   /**
//    * The phone number of the institution.
//    * @type {string | null}
//    */
//   phone_number?: string | null;

//   /**
//    * The address of the institution.
//    * @type {string | null}
//    */
//   address?: string | null;

//   /**
//    * The date when the institution was established.
//    * @type {Date | null}
//    */
//   established_in?: Date | null;

//   /**
//    * The website URL of the institution.
//    * @type {string | null}
//    */
//   website?: string | null;

//   /**
//    * The employee size of the institution.
//    * @type {number | null}
//    */
//   employee_size?: number | null;

//   /**
//    * The unique identifier of the institution.
//    * @type {string}
//    */
//   id: string;

//   /**
//    * The unique identifier of the user handling the institution.
//    * @type {string | null}
//    */
//   handler_id?: string | null;

//   /**
//    * Creates an instance of InstitutionInitializer.
//    * @param {IInstitutionInitializer} data - The data to initialize the institution initializer.
//    */
//   constructor(data: IInstitutionInitializer) {
//     this.name = data.name;
//     this.city = data.city;
//     this.email = data.email;
//     this.phone_number = data.phone_number || null;
//     this.address = data.address || null;
//     this.established_in = data.established_in || null;
//     this.website = data.website || null;
//     this.employee_size = data.employee_size || null;
//     this.id = data.id;
//     this.handler_id = data.handler_id || null;
//   }
// }
>>>>>>> a2626bf5cabbbb7cfe51b43e5507ce4944d89787
