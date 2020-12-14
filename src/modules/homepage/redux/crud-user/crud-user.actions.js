import crud_form_user_types from "./crud-user.types";  
import projectsAPI from "core/services/api";

export const postLogin = (params) => async (dispatch) => {   
  try {
    dispatch({
      type: crud_form_user_types.POST_NEW_USER,
      params: params
    });
    const { data } = await projectsAPI.post(`login`, params);
    const token = data.token;
    localStorage.setItem("login_token", JSON.stringify(token));

    dispatch({
      type: crud_form_user_types.SUCCESS_POST_NEW_USER,
      payload: data,
    });

    return true;
  } catch (e) {
    dispatch({
      type: crud_form_user_types.FAIL_POST_NEW_USER,
    });

    let fail_response = "Erro inesperado!";

    if (e.response) if (e.response.data) fail_response = e.response.data.error;

    return fail_response;
  }
}; 

export const logoutUser = () => async (dispatch) => {  
   return dispatch({ 
    type: crud_form_user_types.LOGOUT_USER
   });  
};