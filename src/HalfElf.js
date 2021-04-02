import React from 'react';
import {data} from './data/data.js';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const HalfElf = (props) => {
    return (
        <>
        <h4>As Half Elf You can pick two skills</h4>  
            <div>
            <FormControl className="classic" style={{marginTop: '16px'}}>
                <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick two skills</InputLabel>
                <Select 
                onChange={(e) => props.getValue('skills', e)}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{color: "#fff"}}
            >
                    
                    {data.species_char[props.species].skills.map((skill,index) => (
                    <MenuItem  key={index} value={skill}>{skill}</MenuItem>
                ))}
                </Select>
            </FormControl>
        </div> 
        </>
    )
}

export default HalfElf;