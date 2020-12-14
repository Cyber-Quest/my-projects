import React from "react";

import {RedirectLinkPanel} from "./redirect-link.styles";

const RedirectLink = ({href, title}) =>{
   return (
    <RedirectLinkPanel title={title} href={href} />
    )
}

export default RedirectLink;