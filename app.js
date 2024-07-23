export const add = (data) => {
  if (data.length == 0) return 0;
  else if (data.length == 1) return parseInt(data);
  else {
    let nums = data.split(",").map((num) => parseInt(num));
    return nums.reduce((num, sum) => {
      return num + sum;
    }, 0);
  }
};
