import { all, call } from "redux-saga/effects";

import { getProject } from "./panel-projects/panel-projects.sagas"; 
import { authUser } from "./crud-user/crud-user.sagas"; 

export default function* rootSaga() {
  yield all([call(getProject), call(authUser)]);
}