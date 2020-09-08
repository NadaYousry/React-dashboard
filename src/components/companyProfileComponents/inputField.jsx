import React, { Component } from "react";
import { TextField } from "@material-ui/core";

export class Inputs extends Component {
  render() {
    return (
      <TextField
        fullWidth
        name={this.props.name}
        label={this.props.label}
        type={this.props.type}
        InputLabelProps={this.props.inputLabelProps}
      />
    );
  }
}
