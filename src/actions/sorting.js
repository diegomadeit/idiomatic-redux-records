import { ActionTypes } from "./index";

export const sortCollection = sortType => ({
  type: ActionTypes.SORT_COLLECTION,
  sortType
});

export const SortTypes = {
  DEFAULT: "DEFAULT",
  BY_ARTIST: "BY_ARTIST",
  BY_YEAR: "BY_YEAR"
};
