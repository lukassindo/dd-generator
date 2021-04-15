import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DataContext from './contexts/DataContext';
import Fade from '@material-ui/core/Fade';
import {data} from './data/data.js';

class AddLang extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        const prof = this.props.profession;
        return (
            
            <>
            <h4>You can pick {data.class_char[prof].lang_pick} languages</h4>
             <FormControl className="classic" style={{marginTop: '16px'}}>
                 <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Additional Language</InputLabel>
                <Select 
                    onChange={(e) => this.props.getValue('addLang', e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{color: "#fff"}}
                >   
                      {data.class_char[prof].languages.map((lang,index) => (
                        <MenuItem  key={index} value={lang}>{lang}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {(this.context.person.addLang.length !== 0) && <h4>You've picked {this.context.person.addLang.toString()}</h4>}
           
           </> 
        )
    }

}

AddLang.contextType=DataContext;
export default AddLang;