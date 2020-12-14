import { connect } from "react-redux";

import Header from "./header.component"; 
import {logoutUser} from "../../redux/crud-user/crud-user.actions";

const mapStateToProps = (state) => {
  return {
    user: state.default.user, 
  };
};

const mapDispatchToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);