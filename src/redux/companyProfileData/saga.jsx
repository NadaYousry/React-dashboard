import { takeEvery, call, put } from "redux-saga/effects";
import {
  RequestApiCompany,
  ResponseFromApiCompany,
  requestOutput,
} from "./action";
import companyApi from "./api";

export function* getApiData(action) {
  try {
    // const response = yield call(
    //   companyApi.getCompanyData,
    //   action.data.CompanyData
    // );
    // yield put({ type: RequestApiCompany, payload: response.data.items });

    console.log(action.payload);
    yield put({
      type: RequestApiCompany,
      payload: action.payload,
    });
    console.log("company Added successfully");
  } catch (e) {
    console.log(`${e} there is error`);
  }
}

//-------------watchers sagas-------------//
export default function* SagaCompany() {
  yield takeEvery(ResponseFromApiCompany, getApiData);
}
