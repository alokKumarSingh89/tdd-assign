export const add = (data) => {
  if (data.length == 0) return 0;
  else if (data.length == 1) return parseInt(data);
  else {
    const regex = /[-]{0,1}[\d]*/g;
    let nums = data
      .match(regex)
      .map((num) => parseInt(num))
      .filter((num) => !isNaN(num));
    let negativeNumber = nums.filter((num) => num < 0);
    if (negativeNumber.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumber.join(",")}`
      );
    }
    return nums.reduce((num, sum) => {
      return num + sum;
    }, 0);
  }
};
