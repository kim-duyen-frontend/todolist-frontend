export type TResponseError = {
  message: string;
  status: ErrorStatusCode;
};
export type ErrorStatusCode = 400 | 401 | 402 | 403 | 500;
