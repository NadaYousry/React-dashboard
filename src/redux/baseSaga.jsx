import { fork, all } from "redux-saga/effects";
import SagaCompany from "./companyProfileData/saga";
import SagaAgent from "./agentData/saga";

export default function* BaseSaga() {
  yield all([fork(SagaAgent), fork(SagaCompany)]);
}
