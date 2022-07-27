export default class Validator {
  static validateUsername(username) {
    if (!/[\w-_]/.test(username)) {
      return false;
    }
    if (/\d{4}/.test(username)) {
      return false;
    }
    if (/^[\d-_]/.test(username)) {
      return false;
    }
    if (/[\d-_]$/.test(username)) {
      return false;
    }
    return true;
  }
}
