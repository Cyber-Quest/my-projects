import { connect } from "react-redux";

import Login from "./login.component";

import { postLogin } from "../../redux/crud-user/crud-user.actions";

const mapStateToProps = (state) => {};

const mapDispatchToProps = {
  postLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);