import axios from "axios";

class companyApi {
  URL = `https://www.any-api`;
  static addCompanyData = async (companyDataObj) =>
    await axios.post(URL, companyDataObj);
}

export default companyApi;
