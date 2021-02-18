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

import DataContext from './contexts/DataContext';



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
        }

        this.rollMethod = this.rollMethod.bind(this);
        this.useDefault = this.useDefault.bind(this);
        this.confirmMethod = this.confirmMethod.bind(this);
    }

    rollMethod() {
        const features = serviceRoll.roll();
        let pickable = [...features]
        pickable.unshift(' ');
        this.setState({numbersToShow: features, featuresUse: pickable, rolled: true}, this.context.update({rolled: pickable}) );
    }

    useDefault() {
        const defaultNumbers = [15, 14, 13, 12, 10, 8];
        let pickable = [...defaultNumbers];
        pickable.unshift(' ');
        this.setState({numbersToShow: defaultNumbers, features: pickable , rolled: true, defaultPicked: true});
    }

    confirmMethod() {
        console.log(this.context.actualState);
    }

    
    render() {
        if (this.props.currentStep !== 3) { 
            return null
        }
       
        const rollsResults = (
            <>
                <h4>Young {this.props.profession}, Please assign these numbers for Your abilities: {this.state.numbersToShow.toString()}</h4>
               
                <Fade in={true}>
                <TableContainer >
                    <Table className="abilities" id="abilities"> 
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
                            
                            <TableRow key="numbers" id="values">
                                <AbilityCells  abilities={this.state.abilities} default={this.state.features} features={this.state.featuresUse} defaultPicked={this.state.defaultPicked}/>  
                            </TableRow>
                            <TableRow>
                                <Bonus species ={this.props.species}/> 
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

        return (
            <>
                {this.state.rolled ? rollsResults : rolling}
            </>
        )
    }
    
}
Features.contextType=DataContext;
export default Features;