/**
 * Custom error class
 *
 * @type {ChemistryError}
 */
module.exports = class ChemistryError extends Error {
  constructor(message="ChemistryError") {
    super(message);
    this.name = 'ChemistryError';
  }
}
