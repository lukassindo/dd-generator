import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import DataContext from './contexts/DataContext';


class AbilityCells extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            default: props.default,
            features: props.features,
        }

        this.changeValue = this.changeValue.bind(this);
    }


    changeValue(index, event) {
        let data = event.target.value;
        let actualState = [...this.context.actualState];
        console.log(actualState);
        let copy;
        if(this.props.defaultPicked) {
            copy = [...this.context.default];
        } else { 
            copy = [...this.context.rolled];
        }
        for( let i = 0; i < copy.length; i++){ 
            if ( copy[i] === data && data === parseInt(data, 10)) { 
                copy.splice(i, 1); 
                break;
            }
        }
        if(actualState[index] === parseInt(actualState[index], 10)) copy.push(actualState[index])
            actualState[index] = data;
        if (actualState.every(value => value === parseInt(value, 10))) {
            if(this.props.defaultPicked) this.context.update({default: copy, notConfirmed: false, actualState});
                this.context.update({rolled: copy, notConfirmed: false, actualState});
        } else {
            if(this.props.defaultPicked) this.context.update({default: copy, notConfirmed: true, actualState});
                this.context.update({rolled: copy, notConfirmed: true, actualState});
        }

    }


    render() {     
        return (
            <>

                {this.props.abilities.map((ability, index) => (
                    <TableCell key={index}>
                        <FormControl >
                            <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Value</InputLabel>
                            <Select 
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                style={{color: "#fff"}}
                                onChange={(e) => this.changeValue(index,e)}
                                
                            >
                                
                                {
                                this.props.defaultPicked ?
                                this.context.default.map((def,index) => (
                                    <MenuItem className="option" key={index} value={def}>{def}</MenuItem>
                                )) :
                                this.context.rolled.map((feature,index) => (
                                    <MenuItem  className="option" key={index} value={feature}>{feature}</MenuItem>
                                )) 
                                }
                            </Select> 
                        </FormControl>        
                    </TableCell>
                ))}
            </>
        )
    }


}

AbilityCells.contextType=DataContext;
export default AbilityCells; 