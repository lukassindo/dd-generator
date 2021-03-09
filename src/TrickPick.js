import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DataContext from './contexts/DataContext';
import Fade from '@material-ui/core/Fade';

class TrickPick extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        const species = this.props.species;
        return (
            
            <>
            <Fade in={true}>
             <FormControl className="classic" style={{marginTop: '16px'}}>
                 <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick One magic trick</InputLabel>
                <Select 
                    onChange={(e) =>this.context.updatePerson('tricks', e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{color: "#fff"}}
                >
                      
                      {this.context.species_char[species].tricks.map((trick,index) => (
                        <MenuItem  key={index} value={trick}>{trick}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            </Fade>
           
           </> 
        )
    }


}

TrickPick.contextType=DataContext;
export default TrickPick;