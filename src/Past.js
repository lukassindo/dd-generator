import React from 'react';
import {data} from './data/data.js';
import DataContext from './contexts/DataContext';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import AddLang from './AddLang';
import Instruments from './Instruments';
import ToolsPick from './ToolsPick.js';
import Button from '@material-ui/core/Button';

class Past extends React.Component {
    BACKGROUND = ['Acolyte', 'Entertainer','Folk Hero','Sailor','Sage','Outlander','Criminal / Spy','Hermit','Guild Artisan','Charlatan','Noble','Urchin','Soldier'];
    constructor(props) {
        super(props);

        this.state = {
            past: '',
            traits: '',
            ideals: '',
            bonds: '',
            flaws: '',
            addLang: [],
            instruments: [],
            tools: [],
            go: false,
        }

        this.getValue = this.getValue.bind(this);
        this.createSheet = this.createSheet.bind(this);
        
    }

    componentDidUpdate(prevProps, prevState) {
        let past = this.state;
        if(prevState.past !== past.past) {
            this.context.updatePerson('past', past.past);
        }
        if(prevState.traits !== past.traits) {
            this.context.updatePerson('traits', past.traits);
        }
        if(prevState.ideals !== past.ideals) {
            this.context.updatePerson('ideals', past.ideals);
        }
        if(prevState.bonds !== past.bonds) {
            this.context.updatePerson('bonds', past.bonds);
        }
        if(prevState.flaws !== past.flaws) {
            this.context.updatePerson('flaws', past.flaws);
        }
        if(prevState.addLang !== past.addLang) {
            this.context.updatePerson('past_lang', past.addLang, data.past[past.past].lang_pick -1 );
        }
        if(prevState.instruments !== past.instruments) {
            this.context.updatePerson('past_instruments', past.instruments);
        }
        if(prevState.tools !== past.tools) {
            this.context.updatePerson('past_tools', past.tools);
        }
    }
    
    getValue(key, event) {
        if(key === 'tools') {
            this.setState({[key]: event.target.value});
        } else {
            this.setState({[key]: event});
        }
        
    }

    createSheet() {
        this.props.lastStep();
    }



    render() {
        console.log(this.state);
        const past = this.state.past;
        if (this.props.currentStep !== 6) { 
            return (<></>)
        }
        


        return (
            <>
                <h2>Tell us about Your personality and your past.</h2>
                <FormControl>
                <TextField
                    id="standard-multiline-static"
                    label="Your Personality Traits"
                    multiline
                    rows={5}
                    onChange={(e) => this.getValue('traits', e.target.value)}
                />
                <TextField
                    id="standard-multiline-static"
                    label="Your Ideals"
                    multiline
                    rows={5}
                    onChange={(e) => this.getValue('ideals', e.target.value)}
                />
                <TextField
                    id="standard-multiline-static"
                    label="Your life bonds"
                    multiline
                    rows={5}
                    onChange={(e) => this.getValue('bonds', e.target.value)}
                />
                <TextField
                    id="standard-multiline-static"
                    label="Your Flaws"
                    multiline
                    rows={5}
                    onChange={(e) => this.getValue('flaws', e.target.value)}
                />

                </FormControl>

                <h3>Pick Your background</h3>
                <FormControl className="classic">
                 <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick Your background </InputLabel>
                    <Select 
                        onChange={(e) => this.getValue('past', e.target.value)}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{color: "#fff"}}
                    >
                        
                        {this.BACKGROUND.map((past,index) => (
                            <MenuItem  key={index} value={past}>{past}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {(past === 'Acolyte' || past === 'Sage' || past === 'Outlander' || past === 'Hermit' || past === 'Guild Artisan' || past === 'Noble') && <div><AddLang past = {this.state.past} getValue={this.getValue} step={this.props.currentStep} profession={this.props.profession}/></div>}            
                {(past === 'Entertainer' || past === 'Outlander') && <div><Instruments past = {this.state.past} getValue={this.getValue} step={this.props.currentStep} profession={this.props.profession}/></div>}   
                {(past === 'Folk Hero' || past === 'Guild Artisan') && <div><ToolsPick past = {this.state.past} getValue={this.getValue} step={this.props.currentStep} profession={this.props.profession}/></div>}             
                {(this.state.past !== '' && this.state.traits !== '' &&  this.state.ideals !== '' && this.state.bonds !== '' && this.state.flaws !== '') &&
                <Button 
                    className="createSheet"
                    onClick={this.createSheet}
                    variant="contained" 
                    color="primary"
                >
                    Create Your Character Sheet!
                </Button>  }         
            </>
        )
    }

}


Past.contextType=DataContext;
export default Past;