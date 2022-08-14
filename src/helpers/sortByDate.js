export const sortByDate = (array) => {
  array.sort((a, b) => {
    if (a.date.seconds > b.date.seconds) {
      return 1;
    }
    if (a.date.seconds < b.date.seconds) {
      return -1;
    } else {
      return 0;
    }
  });
};
