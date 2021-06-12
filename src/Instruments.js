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
        const prof = this.props.profession;
        const step = this.props.step;
        let instr;
        let pick;
        if (step === 6) {
            pick = data.past[this.props.past].instruments;
            instr =  this.context.person.past_instruments;
        } else {  
            pick = data.class_char[prof].instruments;
            instr =  this.context.person.instruments;
        }
        return (
            <div className="instruments pick">
               {(prof === "Bard" && step !== 6) && <h4>You are musician! Pick your three best instruments</h4>}
                <FormControl className="classic" style={{marginTop: '16px'}}>
                    <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">{(prof === 'Bard' && step !== 6) ? 'Pick three instruments' : 'Pick one instrument'}</InputLabel>
                    <Select 
                        onChange={(e) => this.props.getValue('instruments', e.target.value)}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{color: "#fff"}}
                    >
                        
                        {pick.map((tool,index) => (
                        <MenuItem  key={index} value={tool}>{tool}</MenuItem>
                    ))}
                </Select>
                </FormControl>
                {(instr.length !== 0) && <h4>You've picked {instr.toString()}</h4>}
            </div>
        )
    }

}

Instruments.contextType=DataContext;
export default Instruments;