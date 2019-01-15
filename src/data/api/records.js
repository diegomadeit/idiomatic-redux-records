import { makeFetch } from "./utils";

const USER = "dmartinezvelasco";
const PUBLIC_FOLDER = "0";

export const fetchRecords = () =>
  makeFetch(`/users/${USER}/collection/folders/${PUBLIC_FOLDER}/releases`);
