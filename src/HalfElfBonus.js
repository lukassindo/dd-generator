import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import DataContext from './contexts/DataContext';
import Button from '@material-ui/core/Button';



class HalfElfBonus extends React.Component {
    BONUS = [0, +1];
    constructor(props) {
        super(props);

        this.state = {
            bonus: [0, +1],
            picked: [0, 0, 0, 0, 0, 0],
            twice: 0,
        }

        this.changeValue = this.changeValue.bind(this);
    }


    changeValue(index, event) {
        
        
        let el = event.target.parentNode;
        let added = [...this.state.picked];
        const sum = added.reduce((total, num) => total + num);
        
        if(added[index] === 1) {
            added[index] = 0;
            el.classList.remove('active');
            let buttons = document.querySelectorAll('.MuiButton-containedPrimary:not(.active)');
            buttons.forEach((button) => {
              button.disabled = false;  
            });
            this.setState({picked: added}, this.context.update({half_elf_bonus: added}));
        } else {
            added[index] = 1;
            el.classList.add('active');
            if(sum === 1) {
                console.log('disable it!')
                let buttons = document.querySelectorAll('.MuiButton-containedPrimary:not(.active)');
                buttons.forEach((button) => {
                    button.disabled = true;  
                })
            } 
            this.setState({picked: added}, this.context.update({half_elf_bonus: added}))
           
        }
        
        

        
     

    }


    render() {     
       
        return (
            <>

                {this.props.abilities.map((ability, index) => (
                    <TableCell key={index}>
                        <FormControl >
                            {/* <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Bonus</InputLabel>
                            <Select 
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                style={{color: "#fff"}}
                                onChange={(e) => this.changeValue(index,e)}
                                
                            >
                            {this.state.bonus.map((def,index) => (
                                    <MenuItem className="option" key={index} value={def}>{def}</MenuItem>
                                )) }
                            </Select>  */}
                            <Button
                            onClick={(e) => this.changeValue(index,e)}
                            variant="contained" 
                            color="primary"
                            >Bonus +1</Button>
                        </FormControl>        
                    </TableCell>
                ))}
            </>
        )
    }


}

HalfElfBonus.contextType=DataContext;
export default HalfElfBonus; 