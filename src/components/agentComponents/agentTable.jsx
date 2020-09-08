import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import { TableBody, TableFooter } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
export class AgentTable extends Component {
  state = {
    columns: [
      { id: "id", label: "ID" },
      { id: "agentName", label: "Agent Name" },
      { id: "agentAge", label: "Agent Age" },
      { id: "jobTitle", label: "Job Title" },
    ],
    rows: [
      {
        id: "1",
        agentName: "nada yousry",
        agentAge: "25",
        jobTitle: "front-end developer",
      },
      {
        id: "2",
        agentName: "mai mohamed",
        agentAge: "26",
        jobTitle: "front-end developer",
      },
      {
        id: "3",
        agentName: "omnia Ahmed",
        agentAge: "26",
        jobTitle: "front-end developer",
      },
      {
        id: "4",
        agentName: "nada yousry",
        agentAge: "25",
        jobTitle: "front-end developer",
      },
      {
        id: "5",
        agentName: "nada yousry",
        agentAge: "25",
        jobTitle: "front-end developer",
      },
      {
        id: "6",
        agentName: "mai mohamed",
        agentAge: "26",
        jobTitle: "front-end developer",
      },
      {
        id: "7",
        agentName: "omnia Ahmed",
        agentAge: "26",
        jobTitle: "front-end developer",
      },
      {
        id: "8",
        agentName: "nada yousry",
        agentAge: "25",
        jobTitle: "front-end developer",
      },
      {
        id: "9",
        agentName: "nada yousry",
        agentAge: "25",
        jobTitle: "front-end developer",
      },
      {
        id: "10",
        agentName: "nada yousry",
        agentAge: "25",
        jobTitle: "front-end developer",
      },
      {
        id: "11",
        agentName: "mai mohamed",
        agentAge: "26",
        jobTitle: "front-end developer",
      },
      {
        id: "12",
        agentName: "omnia Ahmed",
        agentAge: "26",
        jobTitle: "front-end developer",
      },
      {
        id: "13",
        agentName: "nada yousry",
        agentAge: "25",
        jobTitle: "front-end developer",
      },
    ],
    page: 0,
    rowsPerPage: 5,
  };

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: +event.target.value });
    this.setState({ page: 0 });
    console.log(this.state.page);
  };
  render() {
    return (
      <div className="container">
        <Paper className="">
          <TableContainer className="container">
            <Table aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {this.state.columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rows
                  .slice(
                    this.state.page * this.state.rowsPerPage,
                    this.state.page * this.state.rowsPerPage +
                      this.state.rowsPerPage
                  )
                  .map((row) => {
                    return (
                      <TableRow tabIndex={-1} key={row.id}>
                        {this.state.columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "id"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[{ label: "All", value: -1 }]}
                    colSpan={4}
                    count={this.state.rows.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    );
  }
}
