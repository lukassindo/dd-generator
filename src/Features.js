import React from 'react';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import serviceRoll from './services/roll';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fade from '@material-ui/core/Fade';
import AbilityCells from './AbilityCells';
import Bonus from './Bonus';
import FinalValues from './FinalValues';
import HalfElfBonus from './HalfElfBonus';
import DataContext from './contexts/DataContext';
import {data} from './data/data.js';



class Features extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            abilities: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
            features:[],
            rolled: false,
            featuresUse: [],
            defaultPicked: false,
            numbersToShow: [],
            final: false,
        }

        this.rollMethod = this.rollMethod.bind(this);
        this.useDefault = this.useDefault.bind(this);
        this.confirmMethod = this.confirmMethod.bind(this);
    }

    rollMethod() {
        const features = serviceRoll.roll();
        let pickable = [...features]
        pickable.unshift('empty');
        this.setState({numbersToShow: features, featuresUse: pickable, rolled: true}, this.context.update({rolled: pickable, defaultRolled: pickable}) );
    }

    useDefault() {
        const defaultNumbers = [15, 14, 13, 12, 10, 8];
        let pickable = [...defaultNumbers];
        pickable.unshift('empty');
        this.setState({numbersToShow: defaultNumbers, features: pickable , rolled: true, defaultPicked: true});
    }

    confirmMethod() {
        let state = [...this.context.actualState]
        let bonus;
        if(this.props.species === 'Half-Elf') {
             bonus = [... this.context.half_elf_bonus];
        } else {
             bonus =  [...data.speciesBonus[this.props.species]];
        }
        
        for(let i=0; i < state.length; i++) {
            if(bonus[i] === parseInt(bonus[i], 10)) state[i] += bonus[i]
        }
        this.props.buttonState('clicked');
        this.setState({final: true}, this.context.update({finalValues: state, final: true}) );
    }

    
    render() {
        console.log(this.context);
   
       
        const rollsResults = (
            <>
                <h4 style={{marginBottom: 0}}>Young {this.props.profession}, Please assign these numbers for Your abilities: {this.state.numbersToShow.toString()}</h4>
                {(this.props.species === 'Half-Elf') && <p className="halfbonus">and pick two bonuses</p>}
                <Fade in={true}>
                <TableContainer >
                    <Table className="abilities" id="abilities" style={{marginTop: 25}}> 
                        <TableHead>
                            <TableRow> 
                                <TableCell>Strength</TableCell>
                                <TableCell>Dexterity</TableCell>
                                <TableCell>Constitution</TableCell>
                                <TableCell>Intelligence</TableCell>
                                <TableCell>Wisdom</TableCell>
                                <TableCell>Charisma</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            
                            <TableRow id="values">
                                <AbilityCells  abilities={this.state.abilities} default={this.state.features} features={this.state.featuresUse} defaultPicked={this.state.defaultPicked}/>  
                            </TableRow>
                            <TableRow>
                                {(this.props.species !== 'Half-Elf') 
                                ? 
                                <Bonus species ={this.props.species}/>
                                :
                                <HalfElfBonus abilities={this.state.abilities}/>
                                }
                                 
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                
                </Fade> 
                 <Button 
                    onClick={this.confirmMethod} 
                    disabled={this.context.notConfirmed}
                    variant="contained" 
                    color="secondary"  
                    style={{marginTop: "26px"}}
                    >
                        Confirm - One way ticket!
                    </Button>                   
                
            </>
        )
        
        const rolling = (
            <>
                <h2>Roll Dices to set Your abilities!!</h2>
                <Button 
                    onClick={this.rollMethod}
                    variant="contained" 
                    color="secondary"
                    disabled={this.state.rolled}
                >
                    Roll! 
                </Button>
                <p className="big">or</p>
                <h3>Use default numbers (15, 14, 13, 12, 10, 8)</h3>
                <Button 
                    onClick={this.useDefault}
                    variant="contained" 
                    color="primary"
                    disabled={this.state.rolled}
                >
                    Use Default
                </Button>
            </>
        )

        
        if (this.props.currentStep !== 3) { 
            return null
        } else if(!this.state.final) {
            return this.state.rolled ? rollsResults : rolling      
        } else {
            return (<FinalValues abilities = {this.state.abilities} species={this.props.species} profession={this.props.profession}/>)
        }             
       
    }
    
}
Features.contextType=DataContext;
export default Features;