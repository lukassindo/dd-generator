import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DataContext from './contexts/DataContext';
import {data} from './data/data.js';
import HalfElf from './HalfElf';
import SkillsClass from './SkillsClass';


function withSubscription(WrappedComponent, objKey) {
    
    return class Skills extends React.Component {
        constructor(props) {
            super(props);

        }
        
        render() {
        
            return (
                
                <>
                 <WrappedComponent species={this.props.species} getValue= {this.props.getValue} profession={this.props.profession}/>
                {(this.context.person[objKey].length !== 0) && <h4>You've picked {this.context.person[objKey].toString()}</h4>}
               </> 
            )
        }
        
    
    }
    
}

const HalfelfSkills = withSubscription(HalfElf, 'skills');
const ClassSkills = withSubscription(SkillsClass, 'classSkills');
HalfelfSkills.contextType = DataContext;
ClassSkills.contextType = DataContext;


export {
    HalfelfSkills,
    ClassSkills,
}