/**
 * Enum representing different roles for users in the system.
 */
export enum UserRole {
  /**
   * Super Admin role with full system privileges.
   */
  SuperAdmin = 'super_admin',

  /**
   * Initiative Reviewer role responsible for reviewing initiatives.
   */
  InitiativeReviewer = 'initiative_reviewer',

  /**
   * Certificate Reviewer role responsible for reviewing certificates.
   */
  CertificateReviewer = 'certificate_reviewer',

  /**
   * Institution role representing an institution user.
   */
  Institution = 'institution',

  /**
   * Corporate role representing a corporate user.
   */
  Corporate = 'corporate',

  /**
   * Initiative Writer role responsible for writing initiatives.
   */
  InitiativeWriter = 'initiative_writer',
}

/**
 * Example usage:
 * ```typescript
 * const userRole: UserRole = UserRole.SuperAdmin;
 * ```
 */
