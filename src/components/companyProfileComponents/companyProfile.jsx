import React, { Component } from "react";
import { Inputs } from "./inputField";
import { SubmitButton } from "./submitButton";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  FormGroup,
  Typography,
  InputLabel,
  Grid,
  FormControl,
} from "@material-ui/core";
import { SelectField } from "./selectField";
export class CompanyProfile extends Component {
  renderCompanyProfileForm = (formikProps) => {
    return (
      <form
        onSubmit={formikProps.handleSubmit}
        onChange={formikProps.handleChange}
      >
        <FormGroup>
          <Box mb={5}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Inputs type="text" name="companyName" label="Company Name" />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="selectLabel">Company Feild</InputLabel>
                  <SelectField />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Inputs
                  type="date"
                  name="CompanyStartDate"
                  label="Company Start Date"
                  inputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Inputs
                  type="text"
                  name="CompanySlogan"
                  label="Company Slogan"
                />
              </Grid>
            </Grid>
          </Box>
          <SubmitButton type="submit" />
        </FormGroup>
      </form>
    );
  };
  render() {
    return (
      <Formik>
        {(formikProps) => this.renderCompanyProfileForm(formikProps)}
      </Formik>
    );
  }
}
