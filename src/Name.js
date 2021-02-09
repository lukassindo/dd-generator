import React from 'react';
import 'fontsource-roboto';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

class Name extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <>
                <TextField id="standard-basic" label="Standard" />
               
            </>
        )
    }


}

export default Name;