import { takeEvery, put } from "redux-saga/effects";
import { RequestApiAgent, ResponseFromApiAgent } from "./action";
import AgentApi from "./api";

export function* getApiData(action) {
  try {
    //   if their is api
    // const response = yield call(AgentApi.getAgentData, action.data.AgentData);
    // yield put({ type: RequestApiAgent, payload: response.data.items });
    //   if their is no api

    console.log(action.payload);
    yield put({
      type: RequestApiAgent,
      payload: action.payload,
    });
    console.log("get Agent Data Success");
  } catch (e) {
    console.log(`${e} there is error`);
  }
}

//-------------watchers sagas-------------//
export default function* SagaAgent() {
  yield takeEvery(ResponseFromApiAgent, getApiData);
}
