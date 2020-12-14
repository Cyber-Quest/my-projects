import { takeLatest, put } from 'redux-saga/effects'
 
import crud_form_project_types from "./panel-projects.types";

import api from 'core/services/api'

export function* getProjectAsync( ){
  yield put({type: crud_form_project_types.LOADING_GET_PROJECT})

  try{
    const {data}= yield api.get('get-projects', {
      headers: {
        'content-type': 'application/json'
      }
    })

    data.map(d => { 
      d['key'] = d.id
      return null
    })

    yield put({
      type: crud_form_project_types.SUCCESS_GET_PROJECT,
      payload: data
    })

   } catch(err){

    yield put({type: crud_form_project_types.FAIL_GET_PROJECT })
  }
}


export function* getProject(){
  yield takeLatest(crud_form_project_types.GET_PROJECT, getProjectAsync);  
}