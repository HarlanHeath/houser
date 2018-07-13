import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import WizardOne from "./component/WizardOne/WizardOne";
import WizardTwo from "./component/WizardTwo/WizardThree";
import WizardThree from "./component/WizardThree/WizardThree";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizardOne" component={WizardOne} />
    <Route path="/wizardTwo" component={WizardTwo} />
    <Route path="/wizardThree" component={WizardThree} />
  </Switch>
);
