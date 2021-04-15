import React from 'react';
import {data} from './data/data.js';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


class Ranger extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const profession = this.props.profession;
        return (
            <div className="enemy pick">
               <h4>Ranger! Pick your best enemy</h4>
                <FormControl className="classic" style={{marginTop: '16px'}}>
                    <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick one enemy</InputLabel>
                    <Select 
                        onChange={(e) => this.props.getValue('enemy', e.target.value)}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{color: "#fff"}}
                    
                    >  
                        {data.class_char[profession].enemy.map((enemy,index) => (
                        <MenuItem  key={index} value={enemy}>{enemy}</MenuItem>
                    ))}
                </Select>
                </FormControl>

                <h4>Pick your favorite type of terrain for rangering</h4>
                <FormControl className="classic" style={{marginTop: '16px'}}>
                    <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick one type of land</InputLabel>
                    <Select 
                        onChange={(e) => this.props.getValue('terrain', e.target.value)}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{color: "#fff"}}
                    
                    >  
                        {data.class_char[profession].terrain.map((terrain,index) => (
                        <MenuItem  key={index} value={terrain}>{terrain}</MenuItem>
                    ))}
                </Select>
                </FormControl>
              
            </div>
        )
    }

}


export default Ranger;