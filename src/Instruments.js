import React from 'react';
import {data} from './data/data.js';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DataContext from './contexts/DataContext';

class Instruments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const profession = this.props.profession;
        return (
            <div className="instruments pick">
               {profession === "Bard" && <h4>You are musician! Pick your three best instruments</h4>}
                <FormControl className="classic" style={{marginTop: '16px'}}>
                    <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">{profession === 'Bard' ? 'Pick three instruments' : 'Pick one instrument'}</InputLabel>
                    <Select 
                        onChange={(e) => this.props.getValue('instruments', e.target.value)}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{color: "#fff"}}
                    
                    >
                        
                        {data.class_char[profession].instruments.map((tool,index) => (
                        <MenuItem  key={index} value={tool}>{tool}</MenuItem>
                    ))}
                </Select>
                </FormControl>
                {(this.context.person.instruments.length !== 0) && <h4>You've picked {this.context.person.instruments.toString()}</h4>}
            </div>
        )
    }

}

Instruments.contextType=DataContext;
export default Instruments;