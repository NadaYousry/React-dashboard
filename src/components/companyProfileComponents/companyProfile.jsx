import React, { Component } from "react";
import { Inputs } from "./inputField";
import { SubmitButton } from "./submitButton";
import * as Yup from "yup";
import { Formik } from "formik";

import { requestOutput } from "./../../redux/companyProfileData/action";
import { connect } from "react-redux";
import {
  Box,
  FormGroup,
  Typography,
  InputLabel,
  Grid,
  FormControl,
} from "@material-ui/core";
import { SelectField } from "./selectField";
class CompanyProfile extends Component {
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

                {formikProps.errors.companyName && (
                  <Typography color="secondary">
                    {formikProps.errors.companyName}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="selectLabel">Company Feild</InputLabel>
                  <SelectField name="companyFeilds" />
                </FormControl>

                {formikProps.errors.companyFeilds && (
                  <Typography color="secondary">
                    {formikProps.errors.companyFeilds}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6}>
                <Inputs
                  type="date"
                  name="companyStartDate"
                  label="Company Start Date"
                  inputLabelProps={{
                    shrink: true,
                  }}
                />

                {formikProps.errors.companyStartDate && (
                  <Typography color="secondary">
                    {formikProps.errors.companyStartDate}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6}>
                <Inputs
                  type="text"
                  name="companySlogan"
                  label="Company Slogan"
                />

                {formikProps.errors.companySlogan && (
                  <Typography color="secondary">
                    {formikProps.errors.companySlogan}
                  </Typography>
                )}
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
      <Formik
        initialValues={{
          companyName: "",
          companyFeilds: "",
          companyStartDate: "",
          companySlogan: "",
        }}
        onSubmit={(data) => {
          console.log("submitted", data);
          this.props.requestOutput(data);
        }}
        validationSchema={Yup.object().shape({
          companyName: Yup.string()
            .max(30, "Name is too long")
            .required("Please Write a company Name"),
          companyFeilds: Yup.string(),
          //   .required("Please select company feild"),
          companyStartDate: Yup.string().required(
            "Please Write a company start date"
          ),
          companySlogan: Yup.string()
            .max(10, "Slogan is too long")
            .required("Please Write a company slogan"),
        })}
      >
        {(formikProps) => this.renderCompanyProfileForm(formikProps)}
      </Formik>
    );
  }
}
export default connect(null, { requestOutput })(CompanyProfile);
