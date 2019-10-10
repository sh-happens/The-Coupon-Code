// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Your function should return true or false

exports.checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  if (enteredCode !== correctCode) return false;
  obj = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
  };
  const newCurr = currentDate.split(' ');
  const newExp = expirationDate.split(' ');

  if (Number(newExp[2]) < Number(newCurr[2])) return false;
  if (obj[newExp[0]] < obj[newCurr[0]]) return false;
  return true;
}
