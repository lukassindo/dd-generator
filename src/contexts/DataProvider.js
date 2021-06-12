import React from 'react'
import DataContext from './DataContext'

class DataProvider extends React.Component {

	constructor(props) {
		super(props)
		this.updateState = this.updateState.bind(this);
        this.addPersonData = this.addPersonData.bind(this);
        this.addValue = this.addValue.bind(this);
        this.cleanValue = this.cleanValue.bind(this);
		this.state = {
           defaultStatic : ['empty',15, 14, 13, 12, 10, 8],
           default : ['empty',15, 14, 13, 12, 10, 8],
           rolled: [],
           defaultRolled: [],
           actualState: ['','','','','',''],
		   notConfirmed: true,
           finalValues: [],
           final: false,
           step_four: false,
            person: {
                name: '',
                gender: '',
                alignment: '',
                languages: [],
                tricks: [],
                tools:[],
                dragons: [],
                skills: [],
                equip1: [],
                equip2: [],
                equip3: [],
                equip4: [],
                prof: [],
                mods: [],
                spells: [], 
                classSkills: [],
                classTricks: [],
                classSpells: [],
                instruments: [],
                domain: '',
                armour: [],
                deityTricks: [],
                deityProf: [],
                addLang: [],
                enemy: '',
                terrain: '',
                patron: '',
                fight_style: '',
                past: '',
                past_lang: [],
                past_instruments: [],
                past_tools: [],
                traits: '',
                ideals: '',
                bonds: '',
                flaws: '',

            },
            update: this.updateState,
            updatePerson: this.addPersonData,
            addValue: this.addValue,
            cleanValue: this.cleanValue,
		}
	}

	updateState(values) {
		this.setState(values)
	}

    addPersonData(key, value, pick) {
        let personData = {...this.state.person};
        let goodKey = personData[key];
        let len = goodKey.length;
        if (key === 'languages' || key === 'tricks' || key === 'tools' || key === 'dragons' || key === 'equip1' || key === 'equip2' || key === 'equip3' || key === 'equip4'  ) {
            if(len <= 1 && key !== 'languages' && key !== 'tools') {
                goodKey.splice(0,1,value)
            } else if (len <= 1) {
                goodKey.push(value);
            } else {
                goodKey.splice(1,2, value);
            } 
        } else if (key === 'skills' || key === 'classSkills' || key === 'instruments' || key === 'classTricks' || key === 'spells' || key === 'deityProf' || key === 'addLang' || key === 'past_lang') {
           
            if (value === 'empty') { goodKey.splice(0, goodKey.length)
            } else if(goodKey.length <= pick) {
                goodKey.push(value); 
            } else {
                goodKey.splice(0,1,value);
            }
        } else {
                personData[key] = value;
        }
      
        this.setState({person: personData});
    }


    addValue(key, value1, value2, key2, value3, value4) {
        let personData = {...this.state.person};
        let data = personData[key];
        let data2 = personData[key2];
        if(data.length < 2) {
            data.push(value1, value2);
            if(typeof data2 !== 'undefined')
           
            data2.push(value3);
            if(typeof value4 !== 'undefined') data2.push(value4);
        } else {
            data.splice(0,2);
            data.push(value1, value2);
            if(typeof value4 !== 'undefined') {
                data2.splice(0,2);
                data2.push(value3);
                if(typeof value4 !== 'undefined') data2.push(value4);
            }
        }
        this.setState({person: personData});
    }
    
    cleanValue(key) {
        let personData = {...this.state.person};
        let array = personData[key];
        if(key==='tools') {
            array.splice(1,1);
        } else {array.length = [];}
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