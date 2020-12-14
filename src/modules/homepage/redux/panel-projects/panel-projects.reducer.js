import crud_form_project_types from "./panel-projects.types";

const INITIAL_STATE = {
  loading: true,
  items: {},
  error: false, 
};

const crud_form_project_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) { 
    case crud_form_project_types.LOADING_GET_PROJECT:
      return {
        ...state,
        loading: true,
        items: {}, 
      };

    case crud_form_project_types.SUCCESS_GET_PROJECT:
      return {
        ...state,
        loading: false,
        items: action.payload, 
      };

    case crud_form_project_types.FAIL_GET_PROJECT:
      return {
        ...state,
        loading: false,
        items: null, 
      }; 

    default:
      return state;
  }
};

export default crud_form_project_reducer;