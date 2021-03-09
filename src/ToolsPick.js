import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DataContext from './contexts/DataContext';
import Fade from '@material-ui/core/Fade';

class ToolsPick extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        const species = this.props.species;
        return (
            
            <>
            <Fade in={true}>
                
             <FormControl className="classic" style={{marginTop: '16px'}}>
                 <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick one artisan`s tool</InputLabel>
                <Select 
                    onChange={(e) =>this.context.updatePerson('tools', e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{color: "#fff"}}
                >
                      
                      {this.context.species_char[species].tools.map((tool,index) => (
                        <MenuItem  key={index} value={tool}>{tool}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            </Fade>
           
           </> 
        )
    }


}

ToolsPick.contextType=DataContext;
export default ToolsPick;