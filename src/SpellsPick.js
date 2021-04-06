import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DataContext from './contexts/DataContext';
import Fade from '@material-ui/core/Fade';
import {data} from './data/data.js';

class SpellsPick extends React.Component {
    constructor(props) {
        super(props);

    }



    

    render() {
        const prof = this.props.profession;
        return (
            
            <>
            <div className="spells pick">
                <h4>As {prof} You can pick {data.class_char[prof].spells_pick} spells</h4>   
             <FormControl className="classic" style={{marginTop: '16px'}}>
                <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick {data.class_char[prof].spells_pick} spells</InputLabel>
                
                <Select 
                    onChange={(e) => this.props.getValue('spells', e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{color: "#fff"}}
                >  
                {(prof === 'Warlock') ? 
                    this.props.spells.map((spell,index) => (
                        <MenuItem  key={index} value={spell}>{spell}</MenuItem>
                    ))
                  : data.class_char[prof].spells.map((spell,index) => (
                    <MenuItem  key={index} value={spell}>{spell}</MenuItem>
                ))

                }
                </Select>
            </FormControl>
            {(this.context.person.spells.length !== 0) && <h4>You've picked {this.context.person.spells.toString()}</h4>}
           </div>
           
           </> 
        )
    }


}

SpellsPick.contextType=DataContext;
export default SpellsPick;