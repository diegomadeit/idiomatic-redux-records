import { ActionTypes } from "./index";

export const visitRelease = releaseId => ({
  type: ActionTypes.VISIT_RELEASE,
  releaseId
});
