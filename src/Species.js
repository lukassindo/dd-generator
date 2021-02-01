import React from 'react';

class Species extends React.Component {
    constructor(props) {
        super();

        this.state = {
            species : ['human', 'elf', 'dwarf'],
        }
    }


    render() {

        return (
            <div className="species">
                
                <select onChange={this.handleSelectData}>
                        <option>Pick up Your species</option>
                    {this.state.species.map((species,index) => (
                        <option key={index} value={species}>{species}</option>
                    ))}
                </select>
            </div>
        )
    }


}

export default Species;