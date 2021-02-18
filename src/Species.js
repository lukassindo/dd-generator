import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';



class Species extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            species : ['Human', 'High Elf', 'Forest Elf', 'Drow - Dark Elf', 'Mountain Dwarf', 'Hill Dwarf','Halfling - Lightfoot', 'Halfling - Stout','Tiefling','Dragonborn', 'Forest Gnome', 'Rock Gnome', 'Half-Orc','Half-Elf'],
            picked: '',
            
        }

        this.handleData = this.handleData.bind(this);
    }
    

    handleData(event) {
        this.props.handleData('species',event.target.value)
        this.setState({picked: event.target.value});
        this.props.buttonState('clicked')

    }


    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
            return null
        }

        return (
            
            <>
             <FormControl className="classic">
                 <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick Your Species</InputLabel>
                <Select 
                    onChange={this.handleData}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value= {this.state.picked}
                    placeholer="human"
                    style={{color: "#fff"}}
                >
                      
                    {this.state.species.map((species,index) => (
                        <MenuItem  key={index} value={species}>{species}</MenuItem>
                    ))}
                </Select>
            </FormControl>
           
           </> 
        )
    }


}

export default Species;