import axios from "axios";

class AgentApi {
  URL = `https://www.any-api`;
  static getAgentData = async () => await axios.get(URL);
}
export default AgentApi;
