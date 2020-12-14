import { connect } from "react-redux";

import body from "./body.component";

import { getProjects } from "../../redux/panel-projects/panel-projects.actions";

const mapStateToProps = (state) => {
  return {
    projects: state.default.projects, 
  };
};

const mapDispatchToProps = {
 getProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(body);