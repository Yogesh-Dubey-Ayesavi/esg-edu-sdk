
/**
 * Represents a certification model with properties related to a certification.
 * @interface
 */
export interface ICertificationModel {
  /**
   * The ID of the certification.
   * @type {string}
   */
  id: string;

  /**
   * The creation date of the certification.
   * @type {Date}
   */
  created_at: Date;

  /**
   * The ID of the institution associated with the certification.
   * @type {string}
   */
  institution_id: string;

  /**
   * The name of the certification.
   * @type {string}
   */
  name: string;

  /**
   * The date until the certification is valid.
   * @type {Date | null}
   */
  valid_until: Date | null;

  /**
   * The URI of the certification.
   * @type {string | null}
   */
  uri: string | null;
}

/**
 * Represents a certification model with properties related to a certification.
 * @class
 * @implements {ICertificationModel}
 */
export class CertificateModel implements ICertificationModel {
  /**
   * The ID of the certification.
   * @type {string}
   */
  id: string;

  /**
   * The creation date of the certification.
   * @type {Date}
   */
  created_at: Date;

  /**
   * The ID of the institution associated with the certification.
   * @type {string}
   */
  institution_id: string;

  /**
   * The name of the certification.
   * @type {string}
   */
  name: string;

  /**
   * The date until the certification is valid.
   * @type {Date | null}
   */
  valid_until: Date | null;

  /**
   * The URI of the certification.
   * @type {string | null}
   */
  uri: string | null;

  /**
   * Creates an instance of CertificateModel.
   * @param {ICertificationModel} data - The data to initialize the certification model.
   */
  constructor(data: ICertificationModel) {
    this.id = data.id ;
    this.created_at = data.created_at || new Date();
    this.institution_id = data.institution_id;
    this.name = data.name;
    this.valid_until = data.valid_until || null;
    this.uri = data.uri || null;
  }
}
