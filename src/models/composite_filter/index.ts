/**
 * Represents a composite filter with key and field_name.
 * @class
 */
export class CompositeFilter {
    /**
     * The key of the composite filter, against which you will be searching for.
     * @type {string}
     */
    key: string;
  
    /**
     * The field name of the composite filter.
     * @type {string}
     */
    field_name: 'name'|'description'|'location';
  
    /**
     * Creates an instance of CompositeFilter.
     * @param {string} key - The key of the composite filter.
     * @param {string} field_name - The field name of the composite filter must be one from name, description, location.
     */
    constructor(key: string, field_name: 'name'|'description'|'location') {
      this.key = key;
      this.field_name = field_name;
    }
  }
  