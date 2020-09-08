import React, { Component } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import SideBar from "../components/shared/sidebar";
import CompanyProfile from "../components/companyProfileComponents/companyProfile.jsx";
import { AgentTable } from "../components/agentComponents/agentTable.jsx";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <SideBar />
          <Container maxWidth="md">
            <Route exact path="/" component={AgentTable} />
            <Route exact path="/company-profile" component={CompanyProfile} />
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
