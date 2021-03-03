import React, {useContext} from 'react';
import DataContext from './contexts/DataContext'; 
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

function FinalValues(props) {
    const data = useContext(DataContext);

    return (
        <>
        <h3>Your species: {props.species}</h3>
        <h3>Your profession: {props.profession}</h3>
        <h3>Your abilities:</h3>
        <TableContainer >
            <Table className="abilities" id="finalValues"> 
                <TableHead>
                    <TableRow> 
                        {props.abilities.map((ability, index) => (
                            <TableCell key={index}>{ability}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow  id="values">
                        {data.finalValues.map((value, index) => (
                            <TableCell key={index}>{value}</TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
} 


export default FinalValues;