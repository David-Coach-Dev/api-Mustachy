import { apiResponse } from "#lib/apiRespond";
import { getStart } from "#api/start";

export const start = async (req, res) => {
  try {
    const startResponse = await getStart();
    apiResponse(res, 200, "start", startResponse);
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
};
