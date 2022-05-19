​const currency1 = (n, to) => {
  let USD = 1;
  let CAD = 1.26;
  let CNY = 6.46;
  let GH = 6.05;
  let GBP = 0.91;
  let oneusd = (n / GH);
  // console.log(oneusd);
  if (to === "CAD") {
    // CAD
    const result = (CAD * oneusd);
    return result.toFixed(2);
  } else if (to === "USD") {
    // GH
    const result = oneusd;
    return result.toFixed(2);
  } else if (to === "CNY") {
    // CNY
    const result = CNY * oneusd;
    return result.toFixed(2);
  } else if (to === "GBP") {
    // GBP
    const result = GBP * oneusd;
    return result.toFixed(2);
  } else {
    return "error";
  }
};
​
module.exports = currency1;