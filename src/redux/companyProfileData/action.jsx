export const RequestApiCompany = "RequestApiCompany";
export const ResponseFromApiCompany = "ResponseFromApiCompany";

export const requestOutput = (data) => {
  return {
    type: ResponseFromApiCompany,
    payload: data,
  };
};
export const requestInput = (data) => {
  return {
    type: RequestApiCompany,
    payload: data,
  };
};
