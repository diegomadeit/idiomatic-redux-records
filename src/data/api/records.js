import { makeFetch } from "./utils";

const USER = "dmartinezvelasco";
const PUBLIC_FOLDER = "0";

export const fetchRecords = (opts = {}) =>
  makeFetch(
    `/users/${USER}/collection/folders/${PUBLIC_FOLDER}/releases`,
    opts
  );
export const fetchRecord = id => makeFetch(`/releases/${id}`);
export const fetchArtist = id => makeFetch(`/artists/${id}`);
