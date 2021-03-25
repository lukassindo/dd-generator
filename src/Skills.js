import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DataContext from './contexts/DataContext';
import {data} from './data/data.js';

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        const species = this.props.species;
        return (
            
            <>
         
             <h4>As Half Elf You can pick two skills in which You`ll have proficiences</h4>  
             <div>
             <FormControl className="classic" style={{marginTop: '16px'}}>
                 <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick two skills</InputLabel>
                <Select 
                    onChange={(e) => this.props.getValue('skills', e)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{color: "#fff"}}
                >
                      
                      {data.species_char[species].skills.map((skill,index) => (
                        <MenuItem  key={index} value={skill}>{skill}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            </div> 
            {(this.context.person.skills.length !== 0) && <h4>You've picked {this.context.person.skills.toString()}</h4>}
           </> 
        )
    }


}

Skills.contextType=DataContext;
export default Skills;