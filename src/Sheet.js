import React, {useContext, useEffect, useState} from 'react';
import info from './data/data.js';
import DataContext from './contexts/DataContext';
import header from './img/sheet.png';
import skillsService from './services/skillsMods'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

        const SKILLSARR = [
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
        // Create styles
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                paddingTop: 30,
                paddingLeft: 15,
                '@media max-width: 400': {
                  paddingTop: 10,
                  paddingLeft: 0,
                },
            },

            page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
            },
            section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
            },
            leftColumn: {
            flexGrow: 3,
            position: 'absolute',
            left: 148,
            top: '52%',
            color: '#000',
            fontSize: 17,
            },
            rightColumn: {
            flexGrow: 6,
            position: 'absolute',
            top: '42%',
            color: '#000',
            fontSize: 17,
            width: '47%',
            right: '72px',
            height: '61px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            },
            innerCol: {
                display: 'flex',
                justifyContent: 'space-around',
            },
            headerText: {
                flexGrow: 1,
                textAlign: 'left',
            }
        });
             

const Sheet = (props) => {
            const [skillsMod, setSkillsMod] = useState([]);
            const [perception, setPerception] = useState(false);
            const data = useContext(DataContext);
            const species = props.species;
            const prof = props.profession;
            const background = data.person.past;
            
            console.log(data);
            
            const saving1 = info.class_char[prof].saving_throws[0];
            const saving2 = info.class_char[prof].saving_throws[1];
            const pastSkills = info.past[background].proficiency;

            const allSkills = data.person.classSkills.concat(data.person.skills, pastSkills ,data.person.deityProf, info.species_char[species].skillsStatic);
            const mods = data.person.mods;
            let allLang =  info.species_char[species].basic_languages.concat(data.person.languages, data.person.addLang, data.person.past_lang);
            allLang = allLang.toString();
            allLang = allLang.replace(/,/g, ", ");
            let weapons = info.class_char[prof].weapons.toString();
            weapons = weapons.replace(/,/g, ", ");
            let armor = info.class_char[prof].armor.toString();
            armor = armor.replace(/,/g, ", ");
            const allProf = info.species_char[species].proficiency.concat(info.class_char[prof].proficiency);
            let allInstr = data.person.instruments.concat(data.person.past_instruments).toString();
            allInstr = allInstr.replace(/,/g, ", ");
            let allTools = data.person.tools.concat(data.person.past_tools).toString();
            allTools = allTools.replace(/,/g, ", ");
            useEffect(() => {
                const skills = skillsService.skillsMods(allSkills, mods);
                setSkillsMod(skills);
            }, []);
            useEffect(() => {
                allSkills.forEach((skill)=>{
                    if(skill === 'Perception') setPerception(true);
                })
            },[])
        

            return (

                <>
                <h1>Your Character Sheet</h1>
                
                <Document>
                    <Page size="A4" style={styles.page} id="sheet">
                            <View className="background-img">
                                <View style={styles.leftColumn}>
                                    <Text>{data.person.name}</Text>
                                </View>
                                <View style={styles.rightColumn}>
                                    <View style={styles.innerCol}>
                                        <Text style={styles.headerText}>{props.profession}</Text>
                                        <Text style={styles.headerText}>{data.person.past}</Text>
                                        <Text style={styles.headerText}></Text>
                                    </View>
                                    <View style={styles.innerCol}>
                                        <Text style={styles.headerText}>{props.species}</Text>
                                        <Text style={styles.headerText}>{data.person.alignment}</Text>
                                        <Text style={styles.headerText}></Text>
                                    </View>
                                </View>
                                
                                
                            </View>
                            <View id="main">
                                    <View className="col1">
                                        <View className="mods">
                                            <View className="featuresCol" style={{flexGrow:1}}>
                                                <View className="featureBox">
                                                    <Text>Strength</Text>
                                                    <Text>{(data.person.mods[0] > 0) ? `+${data.person.mods[0]}` : data.person.mods[0]}</Text>
                                                    <Text>{data.finalValues[0]}</Text>
                                                </View>
                                                <View className="featureBox">
                                                    <Text>Dexterity</Text>
                                                    <Text>{(data.person.mods[1] > 0) ? `+${data.person.mods[1]}` : data.person.mods[1]}</Text>
                                                    <Text>{data.finalValues[1]}</Text>
                                                </View>
                                                <View className="featureBox">
                                                    <Text>Constitution</Text>
                                                    <Text>{(data.person.mods[2] > 0) ? `+${data.person.mods[2]}` : data.person.mods[2] }</Text>
                                                    <Text>{data.finalValues[2]}</Text>
                                                </View>
                                                <View className="featureBox">
                                                    <Text>Intelligence</Text>
                                                    <Text>{(data.person.mods[3] > 0) ? `+${data.person.mods[3]}` : data.person.mods[3]}</Text>
                                                    <Text>{data.finalValues[3]}</Text>
                                                </View>
                                                <View className="featureBox">
                                                    <Text>Wisdom</Text>
                                                    <Text>{(data.person.mods[4] > 0) ? `+${data.person.mods[4]}` : data.person.mods[4]}</Text>
                                                    <Text>{data.finalValues[4]}</Text>
                                                </View>
                                                <View className="featureBox">
                                                    <Text>Charisma</Text>
                                                    <Text>{(data.person.mods[5] > 0) ? `+${data.person.mods[5]}` : data.person.mods[5]}</Text>
                                                    <Text>{data.finalValues[5]}</Text>
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
                                                            {(saving1 === 'Strength' || saving2 === 'Strength') ? (2 + data.person.mods[0] > 0 ? `+${2 + data.person.mods[0]}` : 2 + data.person.mods[0]) : (data.person.mods[0] > 0 ? `+${data.person.mods[0]}` : data.person.mods[0]) }
                                                        </Text>
                                                        <Text>Strength</Text>
                                                    </View>
                                                    <View className={(saving1 === 'Dexterity' || saving2 === 'Dexterity') && "profi"}>
                                                        <Text>{(saving1 === 'Dexterity' || saving2 === 'Dexterity') ? (2 + data.person.mods[1] > 0 ? `+${2 + data.person.mods[1]}` : 2 + data.person.mods[1]) : (data.person.mods[1] > 0 ? `+${data.person.mods[1]}` : data.person.mods[1]) }</Text>
                                                        <Text>Dexterity</Text>
                                                    </View>
                                                    <View className={(saving1 === 'Constitution' || saving2 === 'Constitution') && "profi"}>
                                                        <Text>{(saving1 === 'Constitution' || saving2 === 'Constitution') ? (2 + data.person.mods[2] > 0 ? `+${2 + data.person.mods[2]}` : 2 + data.person.mods[2]) : (data.person.mods[2] > 0 ? `+${data.person.mods[2]}` : data.person.mods[2]) }</Text>
                                                        <Text>Constitution</Text>
                                                    </View>
                                                    <View className={(saving1 === 'Intelligence' || saving2 === 'Intelligence') && "profi"}>
                                                        <Text>{(saving1 === 'Intelligence' || saving2 === 'Intelligence') ? (2 + data.person.mods[3] > 0 ? `+${2 + data.person.mods[3]}` : 2 + data.person.mods[3]) : (data.person.mods[3] > 0 ? `+${data.person.mods[3]}` : data.person.mods[3]) }</Text>
                                                        <Text>Intelligence</Text>
                                                    </View>
                                                    <View className={(saving1 === 'Wisdom' || saving2 === 'Wisdom') && "profi"}>
                                                        <Text>{(saving1 === 'Wisdom' || saving2 === 'Wisdom') ? (2 + data.person.mods[4] > 0 ? `+${2 + data.person.mods[4]}` : 2 + data.person.mods[4]) : (data.person.mods[4] > 0 ? `+${data.person.mods[4]}` : data.person.mods[4]) }</Text>
                                                        <Text>Wisdom</Text>
                                                    </View>
                                                    <View className={(saving1 === 'Charisma' || saving2 === 'Charisma') && "profi"}>
                                                        <Text>{(saving1 === 'Charisma' || saving2 === 'Charisma') ? (2 + data.person.mods[5] > 0 ? `+${2 + data.person.mods[5]}` : 2 + data.person.mods[5]) : (data.person.mods[5] > 0 ? `+${data.person.mods[5]}` : data.person.mods[5]) }</Text>
                                                        <Text>Charisma</Text>
                                                    </View>
                                                    <View>
                                                        <Text>Saving Throws</Text>
                                                    </View>
                                                </View>
                                                <View className="saving">
                                                    {(skillsMod.length > 0) &&
                                                    SKILLSARR.map((skill, i) => (
                                                        <View className={(skillsMod[i][1]) && "profi"}>
                                                            <Text>{(skillsMod[i][0] > 0) ? `+${skillsMod[i][0]}` : skillsMod[i][0]}</Text> 
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
                                            <Text>{(perception) ? (12 + mods[4]) : 10 + mods[4]}</Text>
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
                                        <View class="background-armor"></View>
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


                                    </View>
                                    <View className="col3">
                                        <View class="personality">
                                            <View>
                                                <Text>{data.person.traits.toString()}</Text>
                                                <Text>Personality Traits</Text>
                                            </View>
                                            <View>
                                                <Text>{data.person.ideals}</Text>
                                                <Text>Ideals</Text>
                                            </View>   
                                            <View>
                                                <Text>{data.person.bonds}</Text>
                                                <Text>Bonds</Text>
                                            </View>  
                                            <View>
                                                <Text>{data.person.flaws}</Text>
                                                <Text>Flaws</Text>
                                            </View>                
                                        </View>
                                        <View class="features">
                                            {allProf.map((prof) => (
                                                <Text class="prof">{prof}</Text>
                                            ))}
                                            <Text>{(data.person.domain !== '') && `Your Divine Domain: ${data.person.domain}`}</Text>
                                            <Text>{(data.person.fight_style !== '') && `Your fight style: ${data.person.fight_style}`}</Text>
                                            <Text>{(data.person.patron !== '') && `Your patron: ${data.person.patron}`}</Text>
                                            <Text>{(data.person.dragons.length > 0) && `Your Draconic Ancestry: ${data.person.dragons.toString()}`}</Text>
                                            <Text>Features & Traits</Text>              
                                        </View>
                                    </View>
                                </View>
                        
                    </Page>
                </Document>
            
                </>
            )



        
        

        
    
}

Sheet.contextType=DataContext;
export default Sheet;