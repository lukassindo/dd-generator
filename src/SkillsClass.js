import React from 'react';
import {data} from './data/data.js';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const SkillsClass = (props) => {
    const profession= props.profession
    return (
        <>
        <h4>As {profession} You can pick {data.class_char[profession].skills_pick} additional skills.</h4>  
            <div>
            <FormControl className="classic" style={{marginTop: '16px'}}>
                <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick {data.class_char[profession].skills_pick} skills</InputLabel>
                <Select 
                onChange={(e) => props.getValue('classSkills', e)}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{color: "#fff"}}
                required="true"
            >
                    
                    {data.class_char[profession].skills.map((skill,index) => (
                    <MenuItem  key={index} value={skill}>{skill}</MenuItem>
                ))}
                </Select>
            </FormControl>
        </div> 
        </>
    )
}

export default SkillsClass;