import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {data} from './data/data.js';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

class Equip extends React.Component {
    constructor(props) {
        super(props);



    }


    render() {
        const profession = this.props.profession;
        const equipment = data.class_char[profession].equip;
        const standard = (
            <>
                <h3>Your equipment.</h3>
                {data.class_char[profession].equip.map((item, index) => {
                    if(typeof item === "string") {
                        return (
                            <p>You have {item} in your equipment. Pick the rest.</p>
                        )
                    } else {
                        return (
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Pick one from these:</FormLabel>
                                    <RadioGroup aria-label="equipment" name={`equipment${index}`} onChange={(e)=> this.props.getValue(`equip${index}`,e)}>
                                        {item.map((el,i) => (
                                            <FormControlLabel key={i} value={el} control={<Radio />} label={el}/>     
                                        ))}
                                    </RadioGroup>   
                                </FormControl>  
                        )
                            
                            
                    }
                })}
            </>
        );
        return standard;
    }






}

export default Equip;