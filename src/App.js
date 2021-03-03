import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const list=[{LastName:"Ionescu", FirstName:"Ion",Phone:"072121311"},{LastName:"Popescu",FirstName:"Vlad",Phone:"07622222"}]

class App  extends React.Component {
    constructor() {
        super()
        this.state = {
            Persons:[...list]
        }
    }

    render(){
            //const classes = useStyles();

            return (
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Surname</TableCell>
                      <TableCell >Name</TableCell>
                      <TableCell align="right">Phone</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.Persons.map((person) => (
                      <TableRow key={person.name}>
                        <TableCell component="th" scope="row">
                          {person.FirstName}
                        </TableCell>
                        <TableCell>{person.LastName}</TableCell>
                        <TableCell align="right">{person.Phone}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
        )
    }
}

export default App;
