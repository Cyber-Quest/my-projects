import crud_form_projects_types from "./panel-projects.types"; 
import projectsAPI from "core/services/api";

export const postImportUrlProject = ( params) => async (dispatch) => {
  dispatch({ type: crud_form_projects_types.POST_PROJECT_IMPORT_URL });
   
  try { 
 
    const {data} = await projectsAPI.post(`image-upload`,params); 
    
    dispatch({
      type: crud_form_projects_types.SUCCESS_POST_PROJECT_IMPORT_URL,
      payload: data
    }); 

    return data;
  } catch (err) {
    
    await dispatch({
      type: crud_form_projects_types.FAIL_POST_PROJECT_IMPORT_URL,
    });
    
    let fail_response = "Erro inesperado!";

    if (err.response)
      if (err.response.data)
        if(err.response.data.message)
          fail_response = err.response.data.message;

    return fail_response;
  }
}; 

export const postNewProject = (params, id) => async (dispatch) => {   
  try {
    dispatch({
      type: crud_form_projects_types.POST_NEW_PROJECT,
      params: params
    });
    const { data } = await projectsAPI.post(`create-new-project/${id}`, params); 

    dispatch({
      type: crud_form_projects_types.SUCCESS_POST_NEW_PROJECT,
      payload: data,
    });

    return true;
  } catch (e) {
    dispatch({
      type: crud_form_projects_types.FAIL_POST_NEW_PROJECT,
    });

    let fail_response = "Erro inesperado!";

    if (e.response) if (e.response.data) fail_response = e.response.data.error;

    return fail_response;
  }
}; 

export const getProjects = (params) => (dispatch) => {
  dispatch({
    type: crud_form_projects_types.GET_PROJECT,
    payload: params,
  });
};
