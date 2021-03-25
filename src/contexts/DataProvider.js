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
                equip: [],
                prof: [],
                mods: [],
                
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
        // let filled = personData.filled;
        // filled += 1;
        // personData.filled = filled;
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