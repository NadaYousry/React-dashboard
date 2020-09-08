import React, { Component } from "react";
import { Button } from "@material-ui/core";
export class SubmitButton extends Component {
  render() {
    return (
      <Button
        type={this.props.type}
        variant="contained"
        color="primary"
        size="large"
        fullWidth
      >
        Submit
      </Button>
    );
  }
}
