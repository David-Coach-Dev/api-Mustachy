import { statusCodes } from "#lib/data";

const findStatusCode = (code) => {
  if (!Array.isArray(statusCodes)) return null;
  return statusCodes
    .flatMap((item) => item.codes)
    .find((item) => item.code === code.toString());
};

const isValidCode = (code) => {
  return code > 99 && code < 600 && code !== null && code !== undefined;
};

const getRateLimitInfo = (res) => {
  return {
    limit: `You have ${res.get("RateLimit-Limit")} requests every 15 minutes`,
    remaining: `You have ${res.get("RateLimit-Remaining")} remaining requests`,
    reset: `${Math.floor(res.get("RateLimit-Reset") / 60)} minute and ${(res.get("RateLimit-Reset") % 60).toString().padStart(2, "0")} seconds to reset`,
  };
};

const countData= (data) => {
  let count = 0;
  for (const key in data) {
    if (Array.isArray(data[key])) {
      count += data[key].length;
    } else {
      count += 1;
    }
  }
  return count;
};

const generateErrorResponse = (res, code, endPoint,  msg) => {
  return res.status(code).json({
    code: code,
    status: "Error",
    description: "Not found",
    endPoint,
    count: countData(data),
    data: {
      msg: msg,
    },
  });
};

export const apiResponse = (res, code, endPoint, data) => {
  if (isValidCode(code)) {
    const foundData = findStatusCode(code);
    if (foundData) {
      foundData.status = statusCodes[code.toString().slice(0, -2) - 1]?.status;
      const rateLimitInfo = getRateLimitInfo(res);
      return res.status(code).json({
        code: code,
        status: foundData.status,
        description: foundData.description,
        endPoint: endPoint,
        ...rateLimitInfo,
        count: countData(data),
        data: data ?? { message: "no data" },
      });
    } else {
      return generateErrorResponse(res, 404, endPoint, "Unassigned code");
    }
  } else {
    return generateErrorResponse(res, 404, endPoint, "Invalid code");
  }
};
