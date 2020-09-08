import { RequestApiCompany } from "./action";
export const CompanyReducer = (state = {}, action) => {
  switch (action.type) {
    case RequestApiCompany:
      // return { ...state, company: action.payload };
      console.log("Data Added Successfully");
    default:
      return state;
  }
};
