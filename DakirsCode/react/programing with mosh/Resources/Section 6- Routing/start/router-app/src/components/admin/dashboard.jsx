import React from "react";
import SideBar from "./SideBar";
import { Route, Redirect } from "react-router-dom";
import Posts from "./posts";
import Users from "./users";
const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />

      <Route path="/admin/posts" component={Posts} />
      <Route path="/admin/users" component={Users} />
    </div>
  );
};

export default Dashboard;
