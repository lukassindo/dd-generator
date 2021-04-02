import React from 'react'
import DataContext from './DataContext'

class DataProvider extends React.Component {

	constructor(props) {
		super(props)
		this.updateState = this.updateState.bind(this);
        this.addPersonData = this.addPersonData.bind(this);
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
            },
            update: this.updateState,
            updatePerson: this.addPersonData,
		}
	}

	updateState(values) {
		this.setState(values)
	}

    addPersonData(key, value, pick) {
        let personData = {...this.state.person};
        // let filled = personData.filled;
        // filled += 1;
        // personData.filled = filled;
        if (key === 'languages' || key === 'tricks' || key === 'tools' || key === 'dragons' || key === 'equip1' || key === 'equip2' || key === 'equip3' || key === 'equip4'  ) {
            let goodKey = personData[key];
            goodKey.splice(0,1,value);
        } else if (key === 'skills' || key === 'classSkills' || key === 'instruments' || key === 'classTricks' || key === 'spells') {
            let goodKey = personData[key];
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

	render() {
		return (
			<DataContext.Provider value={this.state}>
				{this.props.children}
			</DataContext.Provider>
		)
	}
}

export default DataProvider