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

class ClassChar extends React.Component {

    constructor(props) {
        super(props);
   

        this.getValue = this.getValue.bind(this);
        
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.currentStep !== this.props.currentStep) {
        const mods = modificatorService.modificator(this.props.finals);
        this.context.updatePerson('mods', mods);
        }
    }

    getValue(key, event) {
        const data = event.target.value;
        this.setState({[key]: data}, this.handleData);
    }




    render() {
        console.log(this.context.person.mods)
        const profession = this.props.profession;
        if (this.props.currentStep !== 5) { 
            return (<></>)
        }
        return (
            <>
            <div><h2>Brave {this.context.person.name}!</h2></div>
            <p>As {profession}:</p>
            <p>Your HitDice is: {data.class_char[profession].hit_dice}</p>
            <p>Your current Hit Points are: {data.class_char[profession].hit_points + this.context.person.mods[2]}</p>
            

            </>
        )
    }


}
ClassChar.contextType=DataContext;
export default ClassChar;