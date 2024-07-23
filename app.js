export const add = (data) => {
  if (data.length == 0) return 0;
  else if (data.length == 1) return parseInt(data);
  else {
    const regex = /\d+/g;
    let nums = data.match(regex).map((num) => parseInt(num));
    return nums.reduce((num, sum) => {
      return num + sum;
    }, 0);
  }
};
