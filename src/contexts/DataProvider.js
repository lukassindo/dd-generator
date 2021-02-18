import React from 'react'
import DataContext from './DataContext'

class DataProvider extends React.Component {

	constructor(props) {
		super(props)
		this.updateState = this.updateState.bind(this)
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
           default : ['',15, 14, 13, 12, 10, 8],
           rolled: this.props.rolled,
           actualState: ['','','','','',''],
		   notConfirmed: true,
           update: this.updateState,
         
		}
	}

	updateState(values) {
		this.setState(values)
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