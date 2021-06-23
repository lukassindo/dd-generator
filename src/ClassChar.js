import React from 'react';
import 'fontsource-roboto';
import DataContext from './contexts/DataContext';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {data} from './data/data.js';
import modificatorService from './services/modificator';
import {ClassSkills} from './Skills';
import Equip from './Equip';
import Instruments from './Instruments';
import ClassTricks from './ClassTricks';
import SpellsPick from './SpellsPick';
import Button from '@material-ui/core/Button';
import Domain from './Domain';
import Ranger from './Ranger';
import ToolsPick from './ToolsPick';
import Fighter from './Fighter';

class ClassChar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classSkills: [],
            instruments: [],
            classTricks: [],
            spells: [],
            warlock: false,
            warlock_spells: [],
            domain: '',
            deityTricks:[],
            deityProf:[],
            addLang: [],
            equip1: [],
            equip2: [],
            equip3: [],
            equip4: [],
            enemy: '',
            terrain: '',
            patron: '',
            monk_instr: false,
            monk_tools: false,
            tools: [],
            fight_style: '',
        }

        this.getValue = this.getValue.bind(this);
        this.handleData = this.handleData.bind(this);
        this.setPatron = this.setPatron.bind(this);
        this.setChoice = this.setChoice.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        let atr = this.state;
        const profession = this.props.profession;
        const deity = this.context.person.domain;
        if(prevProps.currentStep !== this.props.currentStep) {
        const mods = modificatorService.modificator(this.props.finals);
        this.context.updatePerson('mods', mods);
        }
        if(prevProps.profession !== profession) {
           if(prevProps.profession === 'Druid') this.context.cleanValue('languages');
           if(profession === 'Druid') this.context.updatePerson('languages', 'Druidic');
        }
        if(prevState.classSkills !== atr.classSkills) {
            this.context.updatePerson('classSkills', atr.classSkills, data.class_char[profession].skills_pick - 1);
        }
        if(prevState.equip1 !== atr.equip1) {
            this.context.updatePerson('equip1', atr.equip1);
        }
        if(prevState.equip2 !== atr.equip2) {
            this.context.updatePerson('equip2', atr.equip2);
        }
        if(prevState.equip3 !== atr.equip3) {
            this.context.updatePerson('equip3', atr.equip3);
        }
        if(prevState.equip4 !== atr.equip4) {
            this.context.updatePerson('equip4', atr.equip4);
        }
        if(prevState.instruments !== atr.instruments) {
            this.context.updatePerson('instruments', atr.instruments, (profession === 'Bard') ? 2 : 0); 
        }
        if(prevState.classTricks !== atr.classTricks) {
            
            this.context.updatePerson('classTricks', atr.classTricks, (deity === 'Light') ? 3 : data.class_char[profession].tricks_pick - 1); 
        }
        if(prevState.spells !== atr.spells) {
            this.context.updatePerson('spells', atr.spells, data.class_char[profession].spells_pick - 1); 
        }
        if(prevState.domain !== atr.domain) {
            this.context.updatePerson('domain', atr.domain); 
        }
        if(prevState.deityTricks !== atr.deityTricks) {
            this.context.updatePerson('deityTricks', atr.deityTricks); 
        }
        if(prevState.deityProf !== atr.deityProf) {
            this.context.updatePerson('deityProf', atr.deityProf, data.class_char[profession][deity].pick - 1); 
        }
        if(prevState.addLang !== atr.addLang) {
            this.context.updatePerson('addLang', atr.addLang, data.class_char[profession].lang_pick - 1); 
        }
        if(prevState.enemy !== atr.enemy) {
            this.context.updatePerson('enemy', atr.enemy); 
        }
        if(prevState.terrain !== atr.terrain) {
            this.context.updatePerson('terrain', atr.terrain); 
        }
        if(prevState.patron !== atr.patron) {
            this.context.updatePerson('patron', atr.patron); 
        }
        if(prevState.tools !== atr.tools) {
            this.context.updatePerson('tools', atr.tools); 
        }
        if(prevState.fight_style !== atr.fight_style) {
            this.context.updatePerson('fight_style', atr.fight_style); 
        }

    }

    getValue(key, event) {
        if(key === 'tools') {
            this.setState({[key]: event.target.value}, this.handleData);
        } else {
            this.setState({[key]: event}, this.handleData);
        }
        
    }

    handleData() {
        let atr = this.state;
        const prof = this.props.profession;
        if(atr.classSkills.length !== 0 && atr.equip1.length !== 0 && atr.equip2.length !== 0) {
            if(prof === 'Barbarian') {
                this.props.buttonState('clicked');
            }
            if(prof === 'Bard' && atr.equip3.length !== 0 && atr.instruments.length !== 0 && atr.spells.length !== 0 && atr.classTricks.length !== 0) {
                this.props.buttonState('clicked');
            }
            if((prof === 'Warlock' || prof === 'Wizard' || prof === 'Sorcerer') && atr.equip3.length !== 0 && atr.spells.length !== 0 && atr.classTricks.length !== 0) {
                this.props.buttonState('clicked');
            }
            if((prof === 'Druid') && atr.classTricks.length !== 0) {
                this.props.buttonState('clicked');
            }
            if((prof === 'Cleric') && atr.equip3.length !== 0 && atr.equip4.length !== 0 && atr.classTricks.length !== 0 && atr.domain.length !== 0) {
                this.props.buttonState('clicked');
            }
            if((prof === 'Rogue' || prof === 'Paladin') && atr.equip3.length !== 0) {
                this.props.buttonState('clicked');
            }
            if((prof === 'Ranger') && atr.equip3.length !== 0 && atr.enemy.length !== 0 && atr.terrain.length !== 0) {
                this.props.buttonState('clicked');
            }
            if((prof === 'Monk') && (atr.tools.length !== 0 || atr.instruments.length !== 0 )) {
                this.props.buttonState('clicked');
            }
            if((prof === 'Fighter') && atr.equip3.length !== 0 && atr.equip4.length !== 0 && atr.fight_style.length !== 0) {
                this.props.buttonState('clicked');
            }
            
            
        }
    }

    setPatron(patron) {
        let spells = [...data.class_char['Warlock'].spells];
        if(patron === 'arcyfey') {
            spells.push('Faerie Fire', 'Sleep')
        } else if(patron === 'fiend') {
            spells.push('Burning hands', 'Command')
        } else {
            spells.push('Bane', 'False life')
        }
        
        this.setState({warlock_spells: spells, warlock: true, patron}, this.handleData)
    }

    setChoice(choice) {
        if(choice === 'tools') {
            this.context.cleanValue('instruments');
            this.setState({monk_instr: false, monk_tools: true})
        } else {
            this.context.cleanValue('tools');
            this.setState({monk_instr: true, monk_tools: false})
        }
    }

    render() {
        
        console.log(this.state);
        const profession = this.props.profession;
  
        if (this.props.currentStep !== 5) { 
            return (<></>)
        }
        return (
            <>
            <div className="classAtr"><h2>Brave {this.context.person.name}!</h2>
            <h3>As {profession}:</h3>
            <p><strong>Your class proficiencies are:</strong> {data.class_char[profession].proficiency.toString()}</p>
            <p><strong>You have fighting proficiency in:</strong></p>
                <ul>
                    {(data.class_char[profession].armor.length > 0) && <li><strong>Armour:</strong> {data.class_char[profession].armor.toString()}</li>}
                    <li><strong>Weapon:</strong> {data.class_char[profession].weapons.toString()}</li>
                    {(profession !== 'Bard' && profession !== 'Monk') && data.class_char[profession].tools.length !== 0 ?
                    <p><strong>You have tools proficiency in:</strong> {data.class_char[profession].tools.toString()}</p>
                    : <></>}
                    
                </ul>
          
            <p>Your HitDice is: {data.class_char[profession].hit_dice}</p>
            <p>Your current Hit Points are: {data.class_char[profession].hit_points + this.context.person.mods[2]}</p>
            <ClassSkills profession={this.props.profession} getValue={this.getValue}/>
            <Equip profession={this.props.profession} getValue={this.getValue}/>
            {(profession === 'Bard') && <Instruments profession={profession} getValue={this.getValue} step={this.props.currentStep}/>}
            {(profession === 'Bard' || profession === 'Warlock' || profession === 'Druid' || profession === 'Cleric' || profession === 'Wizard' || profession === 'Sorcerer') && <ClassTricks profession={profession} mainpick={true} getValue={this.getValue}/>}
            {(profession === 'Bard' || profession === 'Wizard' || profession === 'Sorcerer') && <SpellsPick profession={profession} getValue={this.getValue}/>}

            {(profession === 'Warlock') &&
                <div className="patrons">
                    <h4>Pick Your Otherworldly Patron</h4>
                    <Button variant="contained" color="secondary" onClick={()=>this.setPatron('arcyfey')}>Arcyfey</Button>
                    <Button variant="contained" color="secondary" onClick={()=>this.setPatron('fiend')}>The Fiend</Button>
                    <Button variant="contained" color="secondary" onClick={()=>this.setPatron('undead')}>The Undead</Button>
                </div>
            }
            {(profession === 'Warlock' && this.state.warlock) && <SpellsPick profession={profession} getValue={this.getValue} spells={this.state.warlock_spells}/>}
            {(profession === 'Cleric') && <Domain profession={profession} getValue={this.getValue} step={this.props.currentStep}/>}
            {(profession === 'Ranger') && <div><Ranger profession={profession} getValue={this.getValue}/></div>}
            {(profession === 'Monk') &&
                <div className="patrons">
                    <h4>Pick one tool or one intrument</h4>
                    <Button variant="contained" color="secondary" onClick={()=>this.setChoice('tools')}>Pick tool</Button>
                    <Button variant="contained" color="secondary" onClick={()=>this.setChoice('instrument')}>Pick instrument</Button>
                </div>
            }
             {(this.state.monk_tools) && <ToolsPick profession = {profession} getValue={this.getValue} step={this.props.currentStep}/>}
             {(this.state.monk_instr) && <Instruments profession = {profession} getValue={this.getValue} step={this.props.currentStep}/>}   
             {(profession === 'Fighter') && <div><Fighter profession={profession} getValue={this.getValue}/></div>}
            </div>
            </>
        )
    }


}
ClassChar.contextType=DataContext;
export default ClassChar;