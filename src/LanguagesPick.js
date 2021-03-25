import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DataContext from './contexts/DataContext';
import Fade from '@material-ui/core/Fade';
import {data} from './data/data.js';

class LanguagesPick extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        const species = this.props.species;
        return (
            
            <>
            <Fade in={true}>
             <FormControl className="classic" style={{marginTop: '16px'}}>
                 <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Additional Language</InputLabel>
                <Select 
                    onChange={(e) => this.props.getValue('languages', e)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{color: "#fff"}}
                >
                      
                      {data.species_char[species].languages.map((lang,index) => (
                        <MenuItem  key={index} value={lang}>{lang}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            </Fade>
           
           </> 
        )
    }


}

LanguagesPick.contextType=DataContext;
export default LanguagesPick;