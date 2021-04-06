import React from 'react';
import 'fontsource-roboto';
import DataContext from './contexts/DataContext';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import LanguagesPick from './LanguagesPick';
import TrickPick from './TrickPick';
import ToolsPick from './ToolsPick';
import Dragons from './Dragons';
import {HalfelfSkills} from './Skills';
import {data} from './data/data.js';

class SpeciesChar extends React.Component {

    constructor(props, context) {
        super(props);
   
        this.state = {
            name: '',
            gender: '',
            alignment: '',
            languages: [],
            tricks: [],
            tools:[],
            dragons: [],
            skills: [],
        }

        this.handleData = this.handleData.bind(this);
        this.getValue = this.getValue.bind(this);
        
    }
    


    componentDidUpdate(prevProps, prevState) {
        let char = this.state;
        // if(prevState.name !== char.name && prevState.gender !== char.gender && prevState.alignment !== char.alignment && prevProps.button === true) this.handleData();
        if(prevState.name !== char.name) {
            this.context.updatePerson('name',char.name);
        }
        if(prevState.gender !== char.gender) {
            this.context.updatePerson('gender',char.gender);
        }
        if(prevState.alignment !== char.alignment) {
            this.context.updatePerson('alignment',char.alignment);
        }
        if(prevState.languages !== char.languages) {
            this.context.updatePerson('languages',char.languages);
        }
        if(prevState.tricks !== char.tricks) {
            this.context.updatePerson('tricks',char.tricks);
        }
        if(prevState.tools !== char.tools) {
            this.context.updatePerson('tools',char.tools);
        }
        if(prevState.dragons !== char.dragons) {
            this.context.updatePerson('dragons',char.dragons);
        }
        if(prevState.skills !== char.skills) {
            this.context.updatePerson('skills',char.skills, 1);
        }
    }

    

    getValue(key, event) {
        const data = event.target.value;
        this.setState({[key]: data}, this.handleData);
    }

    handleData() {
        let char = this.state;
        const species = this.props.species;
        if(char.name !== '' && char.gender !== '' && char.alignment !== '') {
            if(species === 'Drow - Dark Elf' || species === 'Forest Elf' || species === 'Halfling - Lightfoot' || species === 'Halfling - Stout' || species === 'Tiefling' || species === 'Forest Gnome' || species === 'Rock Gnome' || species === 'Half-Orc') {
                this.props.buttonState('clicked');
            }
            if(species === 'Human' && char.languages.length !== 0) {
                this.props.buttonState('clicked');
            }
            if(species === 'Half-Elf' && char.languages.length !== 0 && this.context.person.skills.length === 2) {
                this.props.buttonState('clicked');
            }
            if(species === 'High Elf' && char.languages.length !== 0 && char.tricks.length !== 0) {
                this.props.buttonState('clicked');
            }
            if(species === 'Mountain Dwarf' && char.tools.length !== 0 || species === 'Hill Dwarf' && char.tools.length !== 0) {
                this.props.buttonState('clicked');
            }
            if(species === 'Dragonborn' && char.dragons.length !== 0) {
                this.props.buttonState('clicked');
            }
            
        }
        
        
        
        
    }



    render() {
        const species = this.props.species;
        if (this.props.currentStep !== 4) { 
            return (<></>)
        }
        return (
            <>
            <div><h2>Brave {species}. Tell us more about Yourself</h2></div>
            <form className='charData' noValidate autoComplete="off">
                <TextField onChange={(e) =>this.getValue('name', e)} id="standard-basic" label="Your name" value={this.context.person.name} />
                <TextField onChange={(e) =>this.getValue('gender', e)} id="standard-basic2" label="Your gender" value={this.context.person.gender} />
                <FormControl className="classic">
                 <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick Your Alignment</InputLabel>
                <Select 
                    onChange={(e) => this.getValue('alignment', e)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{color: "#fff"}}
                    value={this.context.person.alignment}
                >
                      
                    {data.species_char[species].alignment.map((align,index) => (
                        <MenuItem  key={index} value={align}>{align}</MenuItem>
                    ))}
                </Select>
                {(this.props.species === 'Human' || this.props.species === 'High Elf' || this.props.species === 'Half-Elf') && <LanguagesPick getValue= {this.getValue} species = {this.props.species}/>}
                {(this.props.species === 'High Elf') && <TrickPick getValue= {this.getValue} species = {this.props.species}/>}
                {(this.props.species === 'Mountain Dwarf' || this.props.species === 'Hill Dwarf') && <ToolsPick getValue= {this.getValue} species = {this.props.species}/>}
                {(this.props.species === 'Dragonborn') && <Dragons getValue= {this.getValue} species = {this.props.species}/>}
                
            </FormControl>
            </form>
                {(this.props.species === 'Half-Elf') && <HalfelfSkills getValue= {this.getValue} species = {this.props.species}/>}        
            {(species !== 'Human') && 
                <h3>As {species}, You have proficiences: <br/>{data.species_char[species].proficiency.toString()}</h3>
            }
          
            

            </>
        )
    }


}
SpeciesChar.contextType=DataContext;
export default SpeciesChar;