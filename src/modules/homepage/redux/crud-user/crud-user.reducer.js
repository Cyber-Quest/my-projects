import crud_form_user_types from "./crud-user.types";

const INITIAL_STATE = {
  loading: true,
  items: {},
  error: false,
  is_on: false,
};

const crud_form_customer_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case crud_form_user_types.POST_NEW_USER:
      return {
        ...state,
        loading: true,
        items: { ...state.items },
        error: false,
        is_on: false,
      };

    case crud_form_user_types.SUCCESS_POST_NEW_USER:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: false,
        is_on: true,
      };

    case crud_form_user_types.FAIL_POST_NEW_USER:
      return {
        ...state,
        loading: true,
        items: {},
        error: true,
        is_on: false,
      }; 

    case crud_form_user_types.SUCCESS_LOGOUT_USER:
      return { 
        loading: true,
        items: {},
        error: false,
        is_on: false,
      };
     
    case crud_form_user_types.FAIL_LOGOUT:
      return { 
        loading: true,
        items: {},
        error: false,
        is_on: true,
    };

    default:
      return state;
  }
};

export default crud_form_customer_reducer;