import React from 'react';
import DataContext from './contexts/DataContext';
import TableCell from '@material-ui/core/TableCell';
import InputLabel from '@material-ui/core/InputLabel';


class Bonus extends React.Component {

constructor(props, context) {
    super(props);
    
  
    const species = this.props.species;
    let bonus = [...context.speciesBonus[species]];
    let values = bonus.map(item =>{
        if(item !== '') item = `Bonus + ${item}`
        return item;
    })
    this.state = {
        bonus, values
    }


}




render() {

    return (
        <>
        {this.state.values.map((bon, index) =>  (
            <TableCell style={{color: "#fff", textAlign: "center", padding: "4px 35px"}} key={index}>{bon}</TableCell>
          ))}
        </>

    )
    
      
        
        
    
}



}

Bonus.contextType=DataContext;
export default Bonus;