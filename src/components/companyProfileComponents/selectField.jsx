import React, { Component } from "react";
import { MenuItem, Select } from "@material-ui/core";

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
    console.log(this.state.feild);
    console.log(this.props);
  };
  render() {
    return (
      <Select
        name={this.props.name}
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
