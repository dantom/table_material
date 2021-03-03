import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    {field: 'id',headername: 'ID', width:70},
    {field: 'FirstName', headerName: 'First name', width: 130 },
    {field: 'LastName', headerName: 'Last name', width: 130 },
    {field: 'Phone', headerName: 'Phone', width: 130 }
]



const list=[{id:"1", LastName:"Ionescu", FirstName:"Ion",Phone:"072121311"},{id:"2",LastName:"Popescu",FirstName:"Vlad",Phone:"07622222"}]

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
                <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={this.state.Persons} columns={columns} pageSize={5} checkboxSelection />
              </div>
            )
    }
}

export default App;
