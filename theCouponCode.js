// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Your function should return true or false

exports.checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  if (currentDate > expirationDate && enteredCode === correctCode) return true;
  return false;
}
