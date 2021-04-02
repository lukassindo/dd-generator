import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DataContext from './contexts/DataContext';
import {data} from './data/data.js';

class ClassTricks extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        const prof = this.props.profession;
        return (
            <>
            <div className="tricks pick">
                <h4>As {prof} You can pick {data.class_char[prof].tricks_pick} tricks</h4> 
                <FormControl className="classic" style={{marginTop: '16px'}}>
                    <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick {data.class_char[prof].tricks_pick} magic trick(s)</InputLabel>
                    <Select 
                        onChange={(e) => this.props.getValue('classTricks', e)}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{color: "#fff"}}
                    >  
                        {data.class_char[prof].classTricks.map((trick,index) => (
                            <MenuItem  key={index} value={trick}>{trick}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {(this.context.person.classTricks.length !== 0) && <h4>You've picked {this.context.person.classTricks.toString()}</h4>}
            </div>
           
           </> 
        )
    }


}

ClassTricks.contextType=DataContext;
export default ClassTricks;