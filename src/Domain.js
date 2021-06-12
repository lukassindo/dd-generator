import React from 'react';
import 'fontsource-roboto';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DataContext from './contexts/DataContext';
import Fade from '@material-ui/core/Fade';
import {data} from './data/data.js';
import ClassTricks from './ClassTricks';
import ProficiencyPick from './ProficiencyPick';
import AddLang from './AddLang';

class Domain extends React.Component {

    constructor(props) {
        super(props);
        this.domainEffects = this.domainEffects.bind(this);
        this.getValue = this.getValue.bind(this);
    }


    domainEffects(domain) {
        if(domain === 'Tempest') {
            this.context.addValue('armour','martial weapons','heavy armour','classSpells','Fog Cloud','Thunderwave');
        } else if (domain === 'Nature') {
            this.context.addValue('classSpells','Animal Friendship','Speak with animals','armour','heavy armour');
        } else if (domain === 'Trickery') {
            this.context.addValue('classSpells','Charm Person','Disguise Self');
        } else if (domain === 'Light') {
            this.context.addValue('classSpells','Burning Hands','Faerie Fire','classTricks','Light');
        } else if (domain === 'Knowledge') {
            this.context.addValue('classSpells','Identify','Command','classTricks','Light');
        } else if (domain === 'War') {
            this.context.addValue('classSpells','Divine Favor','Shield of Faith','armour','martial weapons','heavy armour');
        } else if (domain === 'Life') {
            this.context.addValue('classSpells','Cure Wounds','	Bless','armour','heavy armour');
        }
        this.props.getValue('domain', domain);
    }


    getValue(key, event) {
        this.props.getValue(key, event)
    }
    

    render() {
        const prof = this.props.profession;
        const nature = (
            <>
            <ClassTricks profession={'Druid'} mainpick={false} getValue={this.getValue}/>
            <ProficiencyPick profession={'Cleric'} getValue={this.getValue}/>
            </>
        )

        const knowledge = (
            <>
            <ProficiencyPick profession={'Cleric'} getValue={this.getValue}/>
            <AddLang profession={prof} getValue={this.getValue} step = {this.props.step}/>
            </>
        )

        return ( 
            <>
            <div className="spells pick">
                <h4>As Cleric You have to choose one domain related to your deity</h4>   
             <FormControl className="classic" style={{marginTop: '16px'}}>
                <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Pick one domain</InputLabel>
                
                <Select 
                    onChange={(e) => this.domainEffects(e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{color: "#fff"}}
                >  
                {data.class_char['Cleric'].domains.map((domain,index) => (
                    <MenuItem  key={index} value={domain}>{domain}</MenuItem>
                ))
                }
                </Select>
            </FormControl>
            {(this.context.person.domain === 'Nature') && nature}
            {(this.context.person.domain === 'Knowledge') && knowledge}
           </div>
           
           </> 
        )
    }


}

Domain.contextType=DataContext;
export default Domain;