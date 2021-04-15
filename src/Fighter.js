import React from 'react';
import {data} from './data/data.js';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


class Fighter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const profession = this.props.profession;
        return (
            <div className="enemy pick">
               <h4>Fighter! Pick your fighting style!</h4>
                <FormControl className="classic" style={{marginTop: '16px'}}>
                    <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick one fighting style</InputLabel>
                    <Select 
                        onChange={(e) => this.props.getValue('fight_style', e.target.value)}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{color: "#fff"}}
                    
                    >  
                        {data.class_char[profession].fight_styles.map((style,index) => (
                        <MenuItem  key={index} value={style}>{style}</MenuItem>
                    ))}
                </Select>
                </FormControl>
              
            </div>
        )
    }

}


export default Fighter;