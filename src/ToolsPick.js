import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DataContext from './contexts/DataContext';
import Fade from '@material-ui/core/Fade';
import {data} from './data/data.js';

class ToolsPick extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        const prof = this.props.profession;
        const species = this.props.species;
        const step = this.props.step;
        let pick;
        if (step === 6) {
            pick = data.past[this.props.past].tools;
        } else if (step === 4) {  
            pick = data.species_char[species].tools;
        } else {
            pick = data.class_char[prof].tools;
        }

        return (
            
            <>
            <Fade in={true}>
                
             <FormControl className="classic" style={{marginTop: '16px'}}>
                 <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick one artisan`s tool</InputLabel>
                <Select 
                    onChange={(e) => this.props.getValue('tools', e)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{color: "#fff"}}
            
                >
                     
                        {pick.map((tool,index) => (
                        <MenuItem  key={index} value={tool}>{tool}</MenuItem>
                        )) }
                       
                  
                </Select>
            </FormControl>
            </Fade>
           
           </> 
        )
    }


}

ToolsPick.contextType=DataContext;
export default ToolsPick;