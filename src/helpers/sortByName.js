export const sortByName = (array) => {
  array.sort((a, b) => {
    if (a.editorValue[0].children[0].text > b.editorValue[0].children[0].text) {
      return 1;
    }
    if (a.editorValue[0].children[0].text < b.editorValue[0].children[0].text) {
      return -1;
    } else {
      return 0;
    }
  });
};
