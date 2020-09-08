import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import { TableBody, TableFooter } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";

class AgentTable extends Component {
  state = {
    columns: [
      { id: "id", label: "ID" },
      { id: "agentName", label: "Agent Name" },
      { id: "agentAge", label: "Agent Age" },
      { id: "jobTitle", label: "Job Title" },
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
    console.log(this.state);
    console.log(this.props);
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
                {this.props.rows
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
                              {column.format ? column.format(value) : value}
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
                    count={this.props.rows.length}
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

function mapStateToProps(state) {
  console.log(state);
  console.log(state.AgentReducer);
  //   set a new state property
  return {
    rows: state.AgentReducer,
  };
}

export default connect(mapStateToProps)(AgentTable);
