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
import DataContext from './contexts/DataContext';

class Equip extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.context);
        const profession = this.props.profession;
       
        console.log(this.state);
        const standard = (
            <>
                <h1>Your equipment.</h1>
                <h4>and weapons</h4>
                <h5>and money</h5>
                {data.class_char[profession].equip.map((item, index) => {
                    if(typeof item === "string") {
                        return (
                            <p>You have {item} in your equipment. Pick the rest.</p>
                        )
                    } else {
                        let eq;
                        if(profession === 'Fighter') {
                            eq = `equip${index+1}`;
                        } else {eq = `equip${index}`;}
                        
                        return (
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Pick one from these:</FormLabel>
                                    <RadioGroup aria-label="equipment" name={eq} onChange={(e)=> this.props.getValue(eq, e.target.value)}>
                                        {item.map((el,i) => (
                                            <FormControlLabel key={i}  value={el} control={<Radio />} label={el}/>     
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

Equip.contextType=DataContext;
export default Equip;
