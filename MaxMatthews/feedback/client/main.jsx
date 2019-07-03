import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
// import App from "/imports/ui/App";
import { renderRoutes } from "../imports/ui/Routes.jsx";
import "../imports/startup/accounts-config";

Meteor.startup(() => {
	render(renderRoutes(), document.getElementById("react-target"));
});
