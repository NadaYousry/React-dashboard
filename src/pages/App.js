import React, { Component } from "react";
import "./App.css";
import SideBar from "../components/shared/sidebar";
import { CompanyProfile } from "../components/companyProfileComponents/companyProfile.jsx";
import { AgentTable } from "../components/agentComponents/agentTable.jsx";
class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <CompanyProfile />
        <AgentTable />
      </div>
    );
  }
}

export default App;
