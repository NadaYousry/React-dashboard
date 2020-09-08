export const RequestApiAgent = "RequestApiAgent";
export const ResponseFromApiAgent = "ResponseFromApiAgent";

export const requestOutput = (data) => {
  return {
    type: ResponseFromApiAgent,
    data,
  };
};
