export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_DATE = "SORT_BY_DATE";

export const sortByNameActionCreator = (payload) => ({
  type: SORT_BY_NAME,
  payload,
});
export const sortByDateActionCreator = (payload) => ({
  type: SORT_BY_DATE,
  payload,
});
