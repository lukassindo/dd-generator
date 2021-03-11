import React from 'react'
import DataContext from './DataContext'

class DataProvider extends React.Component {

	constructor(props) {
		super(props)
		this.updateState = this.updateState.bind(this);
        this.addPersonData = this.addPersonData.bind(this);
		this.state = {
            speciesBonus: {
                'Human': [1, 1, 1, 1, 1, 1],
                'High Elf': ['', 2,'',1,'',''],
                'Forest Elf': ['',2, '', '', 1, ''],
                'Drow - Dark Elf': ['',2,'','','',1],
                'Mountain Dwarf': [2,'' ,2,'','',''],
                'Hill Dwarf': ['','',2,'',1,''],
                'Halfling - Lightfoot': ['',2,'','','',1],
                'Halfling - Stout': ['', 2, 1, '', '','' ],
                'Forest Gnome': ['',1,'',2, '',''],
                'Rock Gnome': ['','',1,2,'',''],
                'Tiefling': ['','','',1, '',2],
                'Dragonborn': [2, '','','','',1],
                'Half-Elf': ['',2,'','','',2],
                'Half-Orc': [2, '',1, '','',''],
            },
           defaultStatic : ['empty',15, 14, 13, 12, 10, 8],
           default : ['empty',15, 14, 13, 12, 10, 8],
           rolled: [],
           defaultRolled: [],
           actualState: ['','','','','',''],
		   notConfirmed: true,
           finalValues: [],
           final: false,
           step_four: false,
           class_char: {
            'Barbarian': {
                hit_dice: '1k12',
                armor: ['light armor'],
                weapons: ['simple weapons','hand crossbows','longswords','rapiers','shortswords'],
                saving_throws: ['Dexterity', 'Charisma'],
                skills_pick: 2,
                skills: ['empty','Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival'],
                equip: ['An explorer’s pack and four javelins', ['(a) a greataxe', '(b) any martial melee weapon'], ['(a) two handaxes', '(b) any simple weapon']],
                proficiency: ['Rage', 'Unarmored Defense']
            },
            'Bard': {
                hit_dice: '1k8',
                armor: ['light armor','medium armor','shields'],
                weapons: ['simple weapons','martial weapons'],
                saving_throws: ['Strength', 'Constitution'],
                skills_pick: 3,
                skills: ['empty','Athletics','Acrobatics','Sleight of Hand','Stealth','Arcana','History','Investigation','Nature','Religion','Animal Handling','Insight','Medicine','Perception','Survival','Deception','Intimidation','Performance','Persuasion'],
                tools: 'Three musical instruments of your choice',
                equip: ['Leather armor and a dagger', ['(a) a rapier', '(b) a longsword', '(c) any simple weapon'], ['(a) a diplomat’s pack', '(b) an entertainer’s pack'], ['(a) a lute', '(b) any other musical instrument']],
                proficiency: ['Spellcasting','Bardic Inspiration']
            },
            'Warlock': {
                hit_dice: '1k8',
                armor: ['light armor'],
                weapons: ['simple weapons'],
                saving_throws: ['Wisdom', 'Charisma'],
                skills_pick: 2,
                skills: ['empty','Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion'],
                equip: ['Leather armor, any simple weapon, and two daggers', ['(a) a light crossbow and 20 bolts', '(b) any simple weapon'], ['(a) a component pouch', '(b) an arcane focus'], ['(a) a scholar’s pack', '(b) a dungeoneer’s pack']],
                proficiency: ['Otherworldly Patron','Pact Magic']
            },
            'Druid': {
                hit_dice: '1k8',
                armor: ['light armor','medium armor','shields'],
                weapons: ['Clubs', 'daggers', 'darts', 'javelins', 'maces', 'quarterstaffs', 'scimitars', 'sickles', 'slings', 'spears'],
                saving_throws: ['Wisdom', 'Intelligence'],
                skills_pick: 2,
                skills: ['empty','Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival'],
                tools: ['Herbalism kit'],
                equip: ['Leather armor, an explorer’s pack, and a druidic focus', ['(a) a wooden shield', '(b) any simple weapon'], ['(a) a scimitar', '(b) any simple melee weapon']],
                proficiency: ['Druidic','Spellcasting']
            },
            'Cleric': {
                hit_dice: '1k8',
                armor: ['light armor','medium armor','shields'],
                weapons: ['simple weapons'],
                saving_throws: ['Wisdom', 'Charisma'],
                skills_pick: 2,
                skills: ['empty','History', 'Insight', 'Medicine', 'Persuasion', 'Religion'],
                tools: [],
                equip: ['A shield and a holy symbol', ['(a) a mace', 'a warhammer (if proficient)'], ['(a) scale mail', '(b) leather armor', '(c) chain mail (if proficient)'], ['(a) a light crossbow and 20 bolts', '(b) any simple weapon'], ['(a) a priest’s pack', '(b) an explorer’s pack']],
                proficiency: ['Spellcasting','Divine Domain']
            },
            'Rogue': {
                hit_dice: '1k8',
                armor: ['light armor'],
                weapons: ['simple weapons','hand crossbows', 'longswords', 'rapiers', 'shortswords'],
                saving_throws: ['Wisdom', 'Charisma'],
                skills_pick: 4,
                skills: ['empty','Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand','Stealth'],
                tools: ['Thieves’ tools'],
                equip: ['Leather armor, two daggers, and thieves’ tools', ['(a) a rapier', 'a shortsword'], ['(a)a shortbow and quiver of 20 arrows', '(b) a shortsword'], ['(a) a burglar’s pack', '(b) a dungeoneer’s pack','(c) an explorer’s pack']],
                proficiency: ['Expertise','Sneak Attack','Thieves’ Cant']
            },
            'Ranger': {
                hit_dice: '1k10',
                armor: ['light armor','medium armor','shields'],
                weapons: ['simple weapons','martial weapons'],
                saving_throws: ['Strength', 'Dexterity'],
                skills_pick: 3,
                skills: ['empty','Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth'],
                tools: [],
                equip: ['A longbow and a quiver of 20 arrows', ['(a) scale mail', 'leather armor'], ['(a)two shortswords', '(b) two simple melee weapons'], ['(a) a dungeoneer’s pack', '(b) an explorer’s pack']],
                proficiency: ['Favored Enemy','Natural Explorer']
            },
           },
           species_char : {
               'Human': {
                   gender: ['female','male'],
                   alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral','Lawful evil','Neutral evil','Chaotic evil'],
                   speed: '9m',
                   basic_languages: 'Common',
                   languages: ['Elvish','Dwarvish','Giant','Gnomish','Goblin','Halfling','Orc','Draconic', 'Infernal'],
                   proficiency: [],
               },
               'Forest Elf': {
                    gender: ['female','male'],
                    alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral'],
                    speed: '10,5m',
                    basic_languages: 'Elvish & Common',
                    proficiency: ['Darkvision - 18m','Fey Ancestry', 'Trance','Mask of the Wild', 'Martial Arts'],
                    weapons: ['shortbow', 'longbow', 'long sword', 'short sword'],
                },
                'High Elf': {
                    gender: ['female','male'],
                    alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral'],
                    speed: '9m',
                    basic_languages: 'Elvish & Common',
                    proficiency: ['Darkvision - 18m','Fey Ancestry', 'Trance','Magic Trick', 'Martial Arts'],
                    languages: ['Dwarvish','Giant','Gnomish','Goblin','Halfling','Orc','Draconic', 'Infernal'],
                    weapons: ['shortbow', 'longbow', 'long sword', 'short sword'],
                    tricks: ['Dancing Lights','Light', 'Mage Hand', 'Message','Mending','Resistance','Acid Splash','Ray of Frost','Fire Bolt','Minor Illusion','Shocking Grasp','True Strike','Poison Spray','Prestidigitation','Chill Touch','Friendship']
                },
                'Drow - Dark Elf': {
                    gender: ['female','male'],
                    alignment: ['Lawful evil','Neutral evil','Chaotic evil'],
                    speed: '9m',
                    basic_languages: 'Elvish & Common',
                    proficiency: ['Superior Darkvision - 36m','Fey Ancestry', 'Trance','Sunlight Sensitivity','Drow Magic', 'Drow Weapon Training'],
                    weapons: ['rapier', 'hand crossbow', 'short sword'],
                    tricks: ['Dancing Lights'],
                },
                'Mountain Dwarf': {
                    gender: ['female','male'],
                    alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral','Lawful evil','Neutral evil','Chaotic evil'],
                    speed: '7,5m',
                    basic_languages: 'Dwarvish & Common',
                    proficiency: ['Darkvision - 18m','Dwarven Resilience', 'Dwarven Combat Training','Stonecunning', 'Dwarven Armor Training', 'Tool Proficiency'],
                    weapons: ['battleaxe','handaxe','light hammer','warhammer','light armor','medium armor'],
                    tools: ['smith’s tools','brewer’s supplies','mason’s tools']
                },
                'Hill Dwarf': {
                    gender: ['female','male'],
                    alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral','Lawful evil','Neutral evil','Chaotic evil'],
                    speed: '7,5m',
                    basic_languages: 'Dwarvish & Common',
                    proficiency: ['Darkvision - 18m','Dwarven Resilience', 'Dwarven Combat Training','Stonecunning', 'Dwarven Toughness','Tool Proficiency'],
                    weapons: ['battleaxe','handaxe','light hammer','warhammer'],
                    tools: ['smith’s tools','brewer’s supplies','mason’s tools']
                },
                'Halfling - Lightfoot': {
                    gender: ['female','male'],
                    alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral','Lawful evil','Neutral evil','Chaotic evil'],
                    speed: '7,5m',
                    basic_languages: 'Halfling & Common',
                    proficiency: ['Lucky', 'Brave','Halfling Nimbleness','Naturally Stealthy'],
                },
                'Halfling - Stout': {
                    gender: ['female','male'],
                    alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral','Lawful evil','Neutral evil','Chaotic evil'],
                    speed: '7,5m',
                    basic_languages: 'Halfling & Common',
                    proficiency: ['Lucky', 'Brave','Halfling Nimbleness','Stout Resilience'],
                },
                'Tiefling': {
                    gender: ['female','male'],
                    alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral','Lawful evil','Neutral evil','Chaotic evil'],
                    speed: '9m',
                    basic_languages: 'Infernal & Common',
                    proficiency: ['Darkvision - 18m', 'Hellish Resistance','Infernal Legacy','Stout Resilience'],
                    tricks: ['thaumaturgy'],
                },
                'Dragonborn': {
                    gender: ['female','male'],
                    alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral','Lawful evil','Neutral evil','Chaotic evil'],
                    speed: '9m',
                    basic_languages: 'Draconic & Common',
                    proficiency: ['Draconic Ancestry', 'Breath Weapon','Damage Resistance'],
                    dragons: ['Black','Blue','Brass','Bronze','Copper','Gold','Green','Red','Silver','White'],
                },
                'Forest Gnome': {
                    gender: ['female','male'],
                    alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral','Lawful evil','Neutral evil','Chaotic evil'],
                    speed: '7,5m',
                    basic_languages: 'Gnomish & Common',
                    proficiency: ['Darkvision - 18m', 'Gnome Cunning','Natural Illusionist','Speak with Small Beasts'],
                    tricks: ['Minor Illusion']
                },
                'Rock Gnome': {
                    gender: ['female','male'],
                    alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral','Lawful evil','Neutral evil','Chaotic evil'],
                    speed: '7,5m',
                    basic_languages: 'Gnomish & Common',
                    proficiency: ['Darkvision - 18m', 'Gnome Cunning','Artificer’s Lore','Tinker'],
                    tools: ['tinker`s tools']
                },
                'Half-Orc': {
                    gender: ['female','male'],
                    alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral','Lawful evil','Neutral evil','Chaotic evil'],
                    speed: '9m',
                    basic_languages: 'Orc & Common',
                    proficiency: ['Darkvision - 18m', 'Menacing','Relentless Endurance','Savage Attacks'],
                    skills: ['Persuasion']
                },
                'Half-Elf': {
                    gender: ['female','male'],
                    alignment: ['Lawful good','Neutral good','Chaotic good','Lawful neutral','(True) neutral','Chaotic neutral','Lawful evil','Neutral evil','Chaotic evil'],
                    speed: '9m',
                    basic_languages: 'Orc & Common',
                    proficiency: ['Darkvision - 18m', 'Fey Ancestry','Skill Versatility','Savage Attacks'],
                    languages: ['Dwarvish','Giant','Gnomish','Goblin','Halfling','Orc','Draconic', 'Infernal'],
                    skills: ['empty','Athletics','Acrobatics','Sleight of Hand','Stealth','Arcana','History','Investigation','Nature','Religion','Animal Handling','Insight','Medicine','Perception','Survival','Deception','Intimidation','Performance','Persuasion']
                }
            },
            person: {
                name: '',
                gender: '',
                alignment: '',
                languages: [],
                tricks: [],
                tools:[],
                dragons: [],
                skills: [],
                equip: [],
                prof: [],
                
            },
            update: this.updateState,
            updatePerson: this.addPersonData,
         
		}
	}

	updateState(values) {
		this.setState(values)
	}
    addPersonData(key, value) {
        let personData = {...this.state.person};
        let filled = personData.filled;
        filled += 1;
        personData.filled = filled;
        if (key === 'languages' || key === 'tricks' || key === 'tools' || key === 'dragons') {
            let goodKey = personData[key];
            goodKey.splice(0,1,value);
        } else if (key === 'skills') {
            let goodKey = personData[key];
            if (value === 'empty') { goodKey.splice(0, goodKey.length)
            } else if(goodKey.length <= 1) {
                goodKey.push(value); 
            } else {
                goodKey.splice(0,1,value);
            }

        } else {
            personData[key] = value;
        }
      
        this.setState({person: personData});
    }

	render() {
		return (
			<DataContext.Provider value={this.state}>
				{this.props.children}
			</DataContext.Provider>
		)
	}
}

export default DataProvider