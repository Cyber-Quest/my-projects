
import { takeLatest, put } from "redux-saga/effects";

import crud_form_user_types from "./crud-user.types";
 
export function* logoutUserAsync() {
  try {
    localStorage.setItem("login_token", JSON.stringify('')); 
    yield put({
      type: crud_form_user_types.SUCCESS_LOGOUT_USER
    }); 
  } catch (err) {
    yield put({ type: crud_form_user_types.FAIL_LOGOUT });
  }
}

export function* authUser() { 
  yield takeLatest(crud_form_user_types.LOGOUT_USER, logoutUserAsync); 
}