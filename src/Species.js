import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import human from './img/human.png';
import highelf from './img/elf.png';
import forestelf from './img/forest-elf.png';
import darkelf from './img/dark-elf.png';
import mountaindwarf from './img/mountain-dwarf.png';
import dwarf from './img/dwarf.png';
import lightfoot from './img/halfling.png';
import stout from './img/halfling-stout.png';
import tiefling from './img/tiefling.png';
import dragonborn from './img/dragonborn.png';
import forestgnome from './img/gnome.png';
import rockgnome from './img/rock-gnome.png';
import halforc from './img/half-orc.png';
import halfelf from './img/half-elf.png';


class Species extends React.Component {
    SPECIES = ['Human', 'High Elf', 'Forest Elf', 'Drow - Dark Elf', 'Mountain Dwarf', 'Hill Dwarf','Halfling - Lightfoot', 'Halfling - Stout','Tiefling','Dragonborn', 'Forest Gnome', 'Rock Gnome', 'Half-Orc','Half-Elf'];
    constructor(props) {
        super(props);

        this.state = {
            picked: '',
        }

        this.handleData = this.handleData.bind(this);
    }
    

    handleData(e, species) {
        // let classes = 'species_box';
        let els = document.getElementsByClassName('species_box active');
        if(els){
            while (els[0]) {
                els[0].classList.remove('active')
            }
        }
     
        // // e.target.className = classes.replace('species_box','species_box active');
        let el = e.target.parentNode;
        el.classList.add('active');
        console.log(el);
        this.props.handleData('species',species)
        this.setState({picked: species});
        this.props.buttonState('clicked');

    }


    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
            return (<></>)
        }

        return (
            
            <>
             {/* <FormControl className="classic">
                 <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick Your Species</InputLabel>
                <Select 
                    onChange={this.handleData}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value= {this.state.picked}
                    placeholer="human"
                    style={{color: "#fff"}}
                >
                      
                    {this.SPECIES.map((species,index) => (
                        <MenuItem  key={index} value={species}>{species}</MenuItem>
                    ))}
                </Select>
            </FormControl> */}

            <h2>Pick Your Species</h2>            
            <div className="species_boxes">
                <div class="species_box" onClick={(e) => this.handleData(e, 'Human')}>
                    <p>Human</p>
                    <img src={human} className="species_img" alt="human" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'High Elf')}>
                    <p>High Elf</p>
                    <img src={highelf} className="species_img" alt="high elf" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'Forest Elf')}>
                    <p>Forest Elf</p>
                    <img src={forestelf} className="species_img" alt="forest elf" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'Drow - Dark Elf')}>
                    <p>Drow - Dark Elf</p>
                    <img src={darkelf} className="species_img" alt="dark elf" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'Mountain Dwarf')}>
                    <p>Mountain Dwarf</p>
                    <img src={mountaindwarf} className="species_img" alt="mountain dwarf" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'Hill Dwarf')}>
                    <p>Hill Dwarf</p>
                    <img src={dwarf} className="species_img" alt="hill dwarf" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'Halfling - Lightfoot')}>
                    <p>Halfling - Lightfoot</p>
                    <img src={lightfoot} className="species_img" alt="halfling lightfoot" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'Halfling - Stout')}>
                    <p>Halfling - Stout</p>
                    <img src={stout} className="species_img" alt="halfling stout" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'Tiefling')}>
                    <p>Tiefling</p>
                    <img src={tiefling} className="species_img" alt="tiefling" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'Dragonborn')}>
                    <p>Dragonborn</p>
                    <img src={dragonborn} className="species_img" alt="dragonborn" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'Forest Gnome')}>
                    <p>Forest Gnome</p>
                    <img src={forestgnome} className="species_img" alt="forest gnome" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'Rock Gnome')}>
                    <p>Rock Gnome</p>
                    <img src={rockgnome} className="species_img" alt="rock gnome" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'Half-Orc')}>
                    <p>Half Orc</p>
                    <img src={halforc} className="species_img" alt="half orc" />
                </div>
                <div class="species_box" onClick={(e) => this.handleData(e, 'Half-Elf')}>
                    <p>Half Elf</p>
                    <img src={halfelf} className="species_img" alt="half elf" />
                </div>
            </div>
           
           </> 
        )
    }


}

export default Species;