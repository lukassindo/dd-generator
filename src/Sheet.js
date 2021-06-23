import React from 'react';
import info from './data/data.js';
import DataContext from './contexts/DataContext';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import skillsService from './services/skillsMods';

class Sheet extends React.Component {
    SKILLSARR = [
        'Acrobatics (Dex)',
        'Animal Handling (Wis)',
        'Arcana (Int)',
        'Athletics (Str)',
        'Deception (Cha)',
        'History (Int)',
        'Insight (Wis)',
        'Intimidation (Cha)',
        'Investigation (Int)',
        'Medicine (Wis)',
        'Nature (Int)',
        'Perception (Wis)',
        'Performance (Cha)',
        'Persuasion (Cha)',
        'Religion (Int)',
        'Sleight of Hand (Dex)',
        'Stealth (Dex)',
        'Survival (Wis)'
    ];
    constructor(props) {
        super(props);
        
       

        this.state = {
            skillsMod: [],
            perception: false,
        }
    }

    componentDidMount() {
        const mods = this.context.person.mods;
        const species = this.props.species;
        const prof = this.props.profession;
        const background = this.context.person.past;
        const pastSkills = info.past[background].proficiency;
        const allSkills = this.context.person.classSkills.concat(this.context.person.skills, pastSkills ,this.context.person.deityProf, info.species_char[species].skillsStatic);
        const skills = skillsService.skillsMods(allSkills, mods);
        this.setState({skillsMod: skills});
        allSkills.forEach((skill)=>{
            if(skill === 'Perception') this.setState({perception: true});
        });
    }




   

    render() {
        if (this.props.currentStep !== 7) { 
            return (<></>)
        }  
        console.log(this.context);
        const species = this.props.species;
        const prof = this.props.profession;
        const background = this.context.person.past;
        const saving1 = info.class_char[prof].saving_throws[0];
        const saving2 = info.class_char[prof].saving_throws[1];
        const mods = this.context.person.mods;
        let allLang =  info.species_char[species].basic_languages.concat(this.context.person.languages, this.context.person.addLang, this.context.person.past_lang);
        allLang = allLang.toString();
        allLang = allLang.replace(/,/g, ", ");
        let weapons = info.class_char[prof].weapons.toString();
        weapons = weapons.replace(/,/g, ", ");
        let armor = info.class_char[prof].armor.toString();
        armor = armor.replace(/,/g, ", ");
        let allInstr = this.context.person.instruments.concat(this.context.person.past_instruments).toString();
        allInstr = allInstr.replace(/,/g, ", ");
        let allTools = this.context.person.tools.concat(this.context.person.past_tools, info.past[background].tool_prof).toString();
        allTools = allTools.replace(/,/g, ", ");
        let allEquip = info.past[background].equip.concat(this.context.person.equip1, this.context.person.equip2, this.context.person.equip3, this.context.person.equip4);
        const allProf = info.species_char[species].proficiency.concat(info.class_char[prof].proficiency);
        if(prof !== 'Fighter') allEquip.push(info.class_char[prof].equip[0]);
        let allTricks = this.context.person.tricks.concat(this.context.person.classTricks, this.context.person.deityTricks,info.species_char[species].tricksStatic).toString();
        allTricks = allTricks.replace(/,/g, ", ");
        let allSpells = this.context.person.spells.concat(this.context.person.classSpells).toString();
        allSpells = allSpells.replace(/,/g, ", ");
        console.log(allTricks.length);
        console.log(allSpells.length);
        return (
            <Document>
            <Page 
            size="A4" 
            id="sheet" wrap>
                    <View className="background-img">
                        <View className="leftColumn">
                            <Text>{this.context.person.name}</Text>
                        </View>
                        <View className="rightColumn">
                            <View className="innerCol">
                                <Text className="headerText">{this.props.profession}</Text>
                                <Text className="headerText">{this.context.person.past}</Text>
                                <Text className="headerText"></Text>
                            </View>
                            <View className="innerCol">
                                <Text className="headerText">{this.props.species}</Text>
                                <Text className="headerText">{this.context.person.alignment}</Text>
                                <Text className="headerText"></Text>
                            </View>
                        </View>
                    </View>
                    <View id="main">
                        <View className="col1">
                            <View className="mods">
                                <View className="featuresCol" style={{flexGrow:1}}>
                                    <View className="featureBox">
                                        <Text>Strength</Text>
                                        <Text>{(this.context.person.mods[0] > 0) ? `+${this.context.person.mods[0]}` : this.context.person.mods[0]}</Text>
                                        <Text>{this.context.finalValues[0]}</Text>
                                    </View>
                                    <View className="featureBox">
                                        <Text>Dexterity</Text>
                                        <Text>{(this.context.person.mods[1] > 0) ? `+${this.context.person.mods[1]}` : this.context.person.mods[1]}</Text>
                                        <Text>{this.context.finalValues[1]}</Text>
                                    </View>
                                    <View className="featureBox">
                                        <Text>Constitution</Text>
                                        <Text>{(this.context.person.mods[2] > 0) ? `+${this.context.person.mods[2]}` : this.context.person.mods[2] }</Text>
                                        <Text>{this.context.finalValues[2]}</Text>
                                    </View>
                                    <View className="featureBox">
                                        <Text>Intelligence</Text>
                                        <Text>{(this.context.person.mods[3] > 0) ? `+${this.context.person.mods[3]}` : this.context.person.mods[3]}</Text>
                                        <Text>{this.context.finalValues[3]}</Text>
                                    </View>
                                    <View className="featureBox">
                                        <Text>Wisdom</Text>
                                        <Text>{(this.context.person.mods[4] > 0) ? `+${this.context.person.mods[4]}` : this.context.person.mods[4]}</Text>
                                        <Text>{this.context.finalValues[4]}</Text>
                                    </View>
                                    <View className="featureBox">
                                        <Text>Charisma</Text>
                                        <Text>{(this.context.person.mods[5] > 0) ? `+${this.context.person.mods[5]}` : this.context.person.mods[5]}</Text>
                                        <Text>{this.context.finalValues[5]}</Text>
                                    </View>
                                </View>
                                <View className="skillsCol" style={{flexGrow:3}}>
                                    <View>
                                        <Text></Text>
                                        <Text>Inspiration</Text>
                                    </View>
                                    <View>
                                        <Text>+2</Text>
                                        <Text>Proficiency Bonus</Text>
                                    </View>
                                    <View className="saving">
                                        <View className={(saving1 === 'Strength' || saving2 === 'Strength') && "profi"}>
                                            <Text>
                                                {(saving1 === 'Strength' || saving2 === 'Strength') ? (2 + this.context.person.mods[0] > 0 ? `+${2 + this.context.person.mods[0]}` : 2 + this.context.person.mods[0]) : (this.context.person.mods[0] > 0 ? `+${this.context.person.mods[0]}` : this.context.person.mods[0]) }
                                            </Text>
                                            <Text>Strength</Text>
                                        </View>
                                        <View className={(saving1 === 'Dexterity' || saving2 === 'Dexterity') && "profi"}>
                                            <Text>{(saving1 === 'Dexterity' || saving2 === 'Dexterity') ? (2 + this.context.person.mods[1] > 0 ? `+${2 + this.context.person.mods[1]}` : 2 + this.context.person.mods[1]) : (this.context.person.mods[1] > 0 ? `+${this.context.person.mods[1]}` : this.context.person.mods[1]) }</Text>
                                            <Text>Dexterity</Text>
                                        </View>
                                        <View className={(saving1 === 'Constitution' || saving2 === 'Constitution') && "profi"}>
                                            <Text>{(saving1 === 'Constitution' || saving2 === 'Constitution') ? (2 + this.context.person.mods[2] > 0 ? `+${2 + this.context.person.mods[2]}` : 2 + this.context.person.mods[2]) : (this.context.person.mods[2] > 0 ? `+${this.context.person.mods[2]}` : this.context.person.mods[2]) }</Text>
                                            <Text>Constitution</Text>
                                        </View>
                                        <View className={(saving1 === 'Intelligence' || saving2 === 'Intelligence') && "profi"}>
                                            <Text>{(saving1 === 'Intelligence' || saving2 === 'Intelligence') ? (2 + this.context.person.mods[3] > 0 ? `+${2 + this.context.person.mods[3]}` : 2 + this.context.person.mods[3]) : (this.context.person.mods[3] > 0 ? `+${this.context.person.mods[3]}` : this.context.person.mods[3]) }</Text>
                                            <Text>Intelligence</Text>
                                        </View>
                                        <View className={(saving1 === 'Wisdom' || saving2 === 'Wisdom') && "profi"}>
                                            <Text>{(saving1 === 'Wisdom' || saving2 === 'Wisdom') ? (2 + this.context.person.mods[4] > 0 ? `+${2 + this.context.person.mods[4]}` : 2 + this.context.person.mods[4]) : (this.context.person.mods[4] > 0 ? `+${this.context.person.mods[4]}` : this.context.person.mods[4]) }</Text>
                                            <Text>Wisdom</Text>
                                        </View>
                                        <View className={(saving1 === 'Charisma' || saving2 === 'Charisma') && "profi"}>
                                            <Text>{(saving1 === 'Charisma' || saving2 === 'Charisma') ? (2 + this.context.person.mods[5] > 0 ? `+${2 + this.context.person.mods[5]}` : 2 + this.context.person.mods[5]) : (this.context.person.mods[5] > 0 ? `+${this.context.person.mods[5]}` : this.context.person.mods[5]) }</Text>
                                            <Text>Charisma</Text>
                                        </View>
                                        <View>
                                            <Text>Saving Throws</Text>
                                        </View>
                                    </View>
                                    <View className="saving">
                                        {(this.state.skillsMod.length > 0) &&
                                        this.SKILLSARR.map((skill, i) => (
                                            <View className={(this.state.skillsMod[i][1]) && "profi"}>
                                                <Text>{(this.state.skillsMod[i][0] > 0) ? `+${this.state.skillsMod[i][0]}` : this.state.skillsMod[i][0]}</Text> 
                                                <Text>{skill}</Text>
                                            </View>

                                        ))}
                                        <View>
                                            <Text>Skills</Text>
                                        </View>
                                    </View>
                                    
                                </View>
                            </View>
                            <View className="wisdom">
                                <Text>{(this.state.perception) ? (12 + mods[4]) : 10 + mods[4]}</Text>
                                <Text>Passive Wisdom (Perception)</Text>
                            </View>
                            <View className="block">
                                    <Text>{`Languages - ${allLang}`}</Text>   
                                    <Text>{`Weapons - ${weapons}`}</Text> 
                                    <Text>{(armor.length !== 0) && `Armor - ${armor}`}</Text> 
                                    <Text>{(allInstr.length !== 0) && `Instruments - ${allInstr}`}</Text> 
                                    <Text>{(allTools.length !== 0) && `Tools - ${allTools}`}</Text> 
                                    <Text>Other Proficiencies & Languages</Text>            
                            </View>
                        </View>
                        <View className="col2">
                            <View class="background-armor">
                                <View>
                                    <Text></Text>
                                </View>
                                <View>
                                    <Text>{(this.context.person.mods[1] > 0) ? `+${this.context.person.mods[1]}` : this.context.person.mods[1]}</Text>
                                </View>
                                <View>
                                    <Text>{info.species_char[species].speed}</Text>
                                </View>
                            </View>
                            <View class="two-blocks">
                                <Text>Hit Point Maximum<span>{info.class_char[prof].hit_points + mods[2]}</span></Text>
                                <Text></Text>
                                <Text>Current Hit Points</Text>
                            </View>
                            <View class="hitpoints">
                                <Text>Temporary Hit Points</Text>
                            </View>
                            <View class="hitdice">
                                <View class="dice">
                                    <Text>Total<span></span></Text>
                                    <Text>{info.class_char[prof].hit_dice}</Text>
                                    <Text>Hitdice</Text>
                                </View>
                                <View class="deaths">
                                    <Text>
                                        <span class="text">Successes</span>
                                        <div class="radio"></div>
                                        <div class="radio"></div>
                                        <div class="radio"></div>
                                    </Text>
                                    <Text>
                                        <span class="text">Failures</span>
                                        <div class="radio"></div>
                                        <div class="radio"></div>
                                        <div class="radio"></div>
                                    </Text>
                                    <Text>Death saves</Text>
                                </View>
                            </View>
                            <View className="weapons saving">
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Atk Bonus</th>
                                        <th>Damage/Type</th>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                                <Text>Attacs & Spellcasting</Text>
                            </View>
                            <View className="equip">
                                <View>
                                    <View>
                                        <View class="currency">
                                            <Text>CP</Text>
                                        </View>
                                        <View className='octagonWrap'>
                                            <Text></Text>
                                            <span className='left'></span>
                                            <span className='right'></span>
                                        </View>        
                                    </View>
                                    <View>
                                        <View class="currency">
                                            <Text>SP</Text>
                                        </View>
                                        <View className='octagonWrap'>
                                            
                                            <Text></Text>
                                            <span className='left'></span>
                                            <span className='right'></span>
                                        </View>        
                                    </View>
                                    <View>
                                        <View class="currency">
                                            <Text>EP</Text>
                                        </View>
                                        <View className='octagonWrap'>
                                            
                                            <Text></Text>
                                            <span className='left'></span>
                                            <span className='right'></span>
                                        </View>        
                                    </View>
                                    <View>
                                        <View class="currency">
                                            <Text>GP</Text>
                                        </View>
                                        <View className='octagonWrap'>
                                            
                                            <Text className="basic-money">{info.past[background].money.toString()}</Text>
                                            <span className='left'></span>
                                            <span className='right'></span>
                                        </View>        
                                    </View>
                                    
                                    <View>
                                        <View class="currency">
                                            <Text>PP</Text>
                                        </View>
                                        <View className='octagonWrap'>
                                            
                                            <Text></Text>
                                            <span className='left'></span>
                                            <span className='right'></span>
                                        </View>        
                                    </View>
                                </View>
                                <View>
                                        {allEquip.map((equip, index) => (
                                            <Text key={index}>--{equip}</Text>
                                        ))}

                                </View>
                                <Text>Equipment</Text>
                            </View>                        

                        </View>
                        <View className="col3">
                            <View class="personality">
                                <View>
                                    <Text>{this.context.person.traits.toString()}</Text>
                                    <Text>Personality Traits</Text>
                                </View>
                                <View>
                                    <Text>{this.context.person.ideals}</Text>
                                    <Text>Ideals</Text>
                                </View>   
                                <View>
                                    <Text>{this.context.person.bonds}</Text>
                                    <Text>Bonds</Text>
                                </View>  
                                <View>
                                    <Text>{this.context.person.flaws}</Text>
                                    <Text>Flaws</Text>
                                </View>                
                            </View>
                            <View class="features">
                                {allProf.map((prof) => (
                                    <Text class="prof">{prof}</Text>
                                ))}
                                <Text>{(this.context.person.domain !== '') && `Your Divine Domain: ${this.context.person.domain}`}</Text>
                                <Text>{(this.context.person.fight_style !== '') && `Your fight style: ${this.context.person.fight_style}`}</Text>
                                <Text>{(this.context.person.patron !== '') && `Your patron: ${this.context.person.patron}`}</Text>
                                <Text>{(this.context.person.dragons.length > 0) && `Your Draconic Ancestry: ${this.context.person.dragons.toString()}`}</Text>
                                <Text>{(this.context.person.enemy.length > 0) && `Your favorite enemy: ${this.context.person.enemy}`}</Text>
                                <Text>{(this.context.person.terrain.length > 0) && `Your favorite terrain: ${this.context.person.terrain}`}</Text>
                                <Text>Features & Traits</Text>              
                            </View>
                        </View>            
                    </View>
                    {((allTricks.length > 0) || (allSpells.length > 0)) && 
                        <View className="magic">
                            <Text>{(allTricks.length > 0) && `Tricks`}</Text>
                            <Text>{(allTricks.length > 0) && `Tricks You know: ${allTricks}`}</Text>
                            <Text>{(allSpells.length > 0) && `Spells`}</Text>
                            <Text>{(allSpells.length > 0) && `Spells You know: ${allSpells}`}</Text>
                        </View>
                    }
                    

                   
                    
                </Page>
            </Document>
        );
    }
}
Sheet.contextType=DataContext;
export default Sheet;