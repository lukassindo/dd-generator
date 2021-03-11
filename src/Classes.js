import React from 'react';
import 'fontsource-roboto';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


class Classes extends React.Component {
    CLASSES = ['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Warlock','Wizard'];
    constructor(props) {
        super(props);
        this.state = {
            picked: '',
        }

        this.handleData = this.handleData.bind(this);
    }
    

    handleData(event) {
        this.props.handleData('profession',event.target.value)
        this.setState({picked: event.target.value});
        this.props.buttonState('clicked');
    }


    render() {
        if (this.props.currentStep !== 2) { 
            return (<></>)
        }

        return (
            
            <>
             <FormControl className="classic">
                 <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick Your Class </InputLabel>
                <Select 
                    onChange={this.handleData}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value= {this.state.picked}
                    style={{color: "#fff"}}
                >
                      
                    {this.CLASSES.map((prof,index) => (
                        <MenuItem  key={index} value={prof}>{prof}</MenuItem>
                    ))}
                </Select>
            </FormControl>
           
           </> 
        )
    }


}

export default Classes;