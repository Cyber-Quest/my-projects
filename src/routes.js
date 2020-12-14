import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Spin } from "antd";

const HomePage = lazy(() =>
  import("./modules/homepage/pages/homepage.component")
);

const loadingSpinner = (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Spin size="large" />
  </div>
);

const Routes = ({ user, drawer, onCloseDrawer }) => { 
  return (
    <Suspense fallback={loadingSpinner}>
         <Switch>
            <Route exact
                path="/"
                render={() => <HomePage/> }> 
            </Route> 
            <Redirect to={"/"} />
        </Switch>
    </Suspense>
  )
}

export default Routes;