/**
 * Validate teacher info -- all we're doing is check for simple mistakes in the email
 *
 * @param email
 * @returns {boolean}
 */
module.exports = (email) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  const test = email.match(emailRegex);
  return !!test;
};
