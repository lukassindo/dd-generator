import React from 'react';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import DataContext from './contexts/DataContext';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import LanguagesPick from './LanguagesPick';

class SpeciesChar extends React.Component {

    constructor(props) {
        super(props);
        this.handleData = this.handleData.bind(this);
    }


    

    handleData() {
        this.props.buttonState('clicked')
    }



    render() {
        const species = this.props.species;
        if (this.props.currentStep !== 4) { 
            return null
        }
        return (
            <>
            <div><h2>Brave {this.props.species}. Tell us more about Yourself</h2></div>
            <form className='charData' noValidate autoComplete="off">
                <TextField onChange={(e) =>this.context.updatePerson('name', e.target.value)} id="standard-basic" label="Your name" />
                <TextField onChange={(e) =>this.context.updatePerson('gender', e.target.value)} id="standard-basic" label="Your gender" />
                <FormControl className="classic">
                 <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick Your Alignment</InputLabel>
                <Select 
                    onChange={(e) => this.context.updatePerson('alignment',e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{color: "#fff"}}
                >
                      
                    {this.context.species_char[species].alignment.map((align,index) => (
                        <MenuItem  key={index} value={align}>{align}</MenuItem>
                    ))}
                </Select>
                {(this.props.species === 'Human' || this.props.species === 'High Elf') && <LanguagesPick species = {this.props.species}/>}
            </FormControl>
            </form>
            {(species !== 'Human') && 
                <h3>As {species}, You have proficiences: <br/>{this.context.species_char[species].proficiency.toString()}</h3>
            }
          
            

            </>
        )
    }


}
SpeciesChar.contextType=DataContext;
export default SpeciesChar;