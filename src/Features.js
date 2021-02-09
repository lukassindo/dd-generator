import React from 'react';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import serviceRoll from './services/roll';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fade from '@material-ui/core/Fade';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


class Features extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            features:[],
            rolled: false,
            featuresUse: [],
        }

        
        this.rollMethod = this.rollMethod.bind(this);
        this.useDefault = this.useDefault.bind(this);
    }

    rollMethod() {
        const features = serviceRoll.roll();
        this.setState({features, featuresUse: features, rolled: true})
    }
    useDefault() {
        const defaultNumbers = [15, 14, 13, 12, 10, 8];
        this.setState({features: defaultNumbers , rolled: true})
    }


    render() {

        if (this.props.currentStep !== 3) { 
            return null
        }
        console.log(this.state.features);

        const rollsResults = (
            <>
                <h4>Young {this.props.profession}, Please assign these numbers for Your abilities: {this.state.features.toString()}</h4>
                <Fade in={true}>
                <TableContainer >
                    <Table className="abilities">
                        <TableHead>
                            <TableRow> 
                                <TableCell>Strength</TableCell>
                                <TableCell>Dexterity</TableCell>
                                <TableCell>Constitution</TableCell>
                                <TableCell>Intelligence</TableCell>
                                <TableCell>Wisdom</TableCell>
                                <TableCell>Charisma</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key="numbers">
                                <TableCell>
                                    <FormControl >
                                        <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Value</InputLabel>
                                        <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            style={{color: "#fff"}}
                                        >
                                            
                                            {this.state.featuresUse.map((feature,index) => (
                                                <MenuItem key={index} value={feature}>{feature}</MenuItem>
                                            ))}
                                        </Select> 
                                    </FormControl>
                                </TableCell>
                                <TableCell>
                                    <FormControl >
                                        <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Value</InputLabel>
                                        <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            style={{color: "#fff"}}
                                        >
                                            
                                            {this.state.featuresUse.map((feature,index) => (
                                                <MenuItem key={index} value={feature}>{feature}</MenuItem>
                                            ))}
                                        </Select> 
                                    </FormControl>        
                                </TableCell>
                                <TableCell>
                                    <FormControl >
                                        <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Value</InputLabel>
                                        <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            style={{color: "#fff"}}
                                        >
                                            
                                            {this.state.featuresUse.map((feature,index) => (
                                                <MenuItem key={index} value={feature}>{feature}</MenuItem>
                                            ))}
                                        </Select> 
                                    </FormControl>
                                </TableCell>
                                <TableCell>
                                    <FormControl >
                                        <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Value</InputLabel>
                                        <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            style={{color: "#fff"}}
                                        >
                                            
                                            {this.state.featuresUse.map((feature,index) => (
                                                <MenuItem key={index} value={feature}>{feature}</MenuItem>
                                            ))}
                                        </Select> 
                                    </FormControl>                
                                </TableCell>
                                <TableCell>
                                    <FormControl >
                                        <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Value</InputLabel>
                                        <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            style={{color: "#fff"}}
                                        >
                                            
                                            {this.state.featuresUse.map((feature,index) => (
                                                <MenuItem key={index} value={feature}>{feature}</MenuItem>
                                            ))}
                                        </Select> 
                                    </FormControl>                
                                </TableCell>
                                <TableCell>
                                    <FormControl >
                                        <InputLabel style={{color: "#fff"}} id="demo-simple-select-label">Value</InputLabel>
                                        <Select 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            style={{color: "#fff"}}
                                        >
                                            
                                            {this.state.featuresUse.map((feature,index) => (
                                                <MenuItem key={index} value={feature}>{feature}</MenuItem>
                                            ))}
                                        </Select> 
                                    </FormControl>                
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                </Fade>
            </>
        )
        
        const rolling = (
            <>
                <h2>Roll Dices to set Your abilities!!</h2>
                <Button 
                    onClick={this.rollMethod}
                    variant="contained" 
                    color="secondary"
                    disabled={this.state.rolled}
                >
                    Roll! 
                </Button>
                <p className="big">or</p>
                <h3>Use default numbers (15, 14, 13, 12, 10, 8)</h3>
                <Button 
                    onClick={this.useDefault}
                    variant="contained" 
                    color="primary"
                    disabled={this.state.rolled}
                >
                    Use Default
                </Button>
            </>
        )

        return (
            <>
                {this.state.rolled ? rollsResults : rolling}
            </>
        )
    }
    
}

export default Features;