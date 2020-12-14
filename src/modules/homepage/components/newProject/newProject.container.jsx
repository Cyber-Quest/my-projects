import { connect } from "react-redux";

import newProject from "./newProject.component";

import { postNewProject, postImportUrlProject} from "../../redux/panel-projects/panel-projects.actions";

const mapStateToProps = () => {};

const mapDispatchToProps = {
  postNewProject,
  postImportUrlProject
};

export default connect(mapStateToProps, mapDispatchToProps)(newProject);