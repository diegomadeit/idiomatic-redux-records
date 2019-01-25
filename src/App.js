import React from "react";
import Routes from "./routes";
import withLayout from "./containers/withLayout";
import "./App.css";

const App = () => <Routes />;

export default withLayout(App);
