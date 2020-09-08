import React, { Component } from "react";
import { MenuItem, Select, FormControl } from "@material-ui/core";

export class SelectField extends Component {
  state = {
    feild: "",
    menuItems: [
      {
        value: "",
        name: "None",
      },
      {
        value: "software",
        name: "software feild",
      },
      {
        value: "hardware",
        name: "hardware feild",
      },
      {
        value: "marketing",
        name: "marketing feild",
      },
    ],
  };

  handleChange = (event) => {
    this.setState({ feild: event.target.value });
  };
  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };
  render() {
    return (
      <Select
        name="companyFeilds"
        labelId="selectLabel"
        value={this.state.feild}
        onChange={this.handleChange}
      >
        {this.state.menuItems.map((feild) => {
          return (
            <MenuItem key={feild.value} value={feild.value}>
              {feild.name}
            </MenuItem>
          );
        })}
      </Select>
    );
  }
}
