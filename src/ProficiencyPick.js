import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DataContext from './contexts/DataContext';
import Fade from '@material-ui/core/Fade';
import {data} from './data/data.js';

class ProficiencyPick extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        const prof = this.props.profession;
        const domain = this.context.person.domain;
        return (
            
            <>
            <div className="spells pick">
                <h4>As {domain} Cleric You can pick {data.class_char[prof][domain].pick} additional skill(s)</h4>   
             <FormControl className="classic" style={{marginTop: '16px'}}>
                <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick {data.class_char[prof][domain].pick} skill(s)</InputLabel>
                
                <Select 
                    onChange={(e) => this.props.getValue('deityProf', e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{color: "#fff"}}
                >  
                {data.class_char[prof][domain].prof.map((skill,index) => (
                    <MenuItem  key={index} value={skill}>{skill}</MenuItem>
                ))

                }
                </Select>
            </FormControl>
            {(this.context.person.deityProf.length !== 0) && <h4>You've picked {this.context.person.deityProf.toString()}</h4>}
           </div>
           
           </> 
        )
    }


}

ProficiencyPick.contextType=DataContext;
export default ProficiencyPick;