import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import App from "components/App";

function WaitingComponent(Component) {
  // eslint-disable-next-line react/display-name
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default (
  <Switch>
    <Route path={`/`} component={WaitingComponent(App)} />
  </Switch>
);
