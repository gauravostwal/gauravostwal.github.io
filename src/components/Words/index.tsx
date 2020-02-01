import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { registerWord } from 'src/constants/words';
import './words.scss';
import Axios from 'axios';

export interface IWordsProps {

}
export interface IWordsState {
    registerWord: any,
    words: any
}
export class Words extends React.Component<IWordsProps, IWordsState> {
    state = {
        registerWord: registerWord,
        words: []
    }
    async componentWillMount(){
        document.body.style.backgroundColor = "white";
        const { data } = await Axios.get('http://localhost:8000/api/words/words')
        this.setState({ words: data })
    }
    handleSubmit = async(e) => {
        const {registerWord} = this.state
        e.preventDefault()
        console.log(registerWord)
        const requestObj = {
            wordName: registerWord.wordName.value,
            meaning: registerWord.meaning.value,
            mnemonic: registerWord.mnemonic.value,
            example: [registerWord.example.value]
        }
        const response = await Axios.post('http://localhost:8000/api/words/register', requestObj)
        const { data } = await Axios.get('http://localhost:8000/api/words/words')
        this.setState({ words: data })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        let { registerWord } = this.state
        registerWord[name].value = value
        this.setState({
            registerWord
        })
    }
    renderCards = () => {
        const {words} = this.state
        console.log(words)
        return (
            <div className="row">
                {(words || []).map(word => 
                <div className="col-md-3 card">
                    <div className="word">{word.wordName}</div>
                    <div className="meaning">{word.meaning}</div>
                    <div className="meaning">{word.mnemonic}</div>
                    <div className="meaning">{word.example[0]}</div>
                </div>)}
            </div>
        );
    }
    render() {
        const {registerWord} = this.state
        const formKeys = Object.keys(registerWord)
        return (
            <div>
                <form autoComplete="off" onSubmit={this.handleSubmit} className="word-container">
                    <div>
                        {formKeys.map(key => {
                            return (
                                <TextField
                                    required
                                    fullWidth
                                    id="filled-required"
                                    label={registerWord[key].label}
                                    name={registerWord[key].name}
                                    value={registerWord[key].value}
                                    onChange={(event) => { this.handleChange(event) }}
                                    variant="outlined"
                                />
                            )
                        })}
                        
                        {/* <TextField
                            required
                            fullWidth
                            id="filled-required"
                            label="Meaning"
                            name={registerWord.meaning.name}
                            value={registerWord.meaning.value}
                            onChange={(event) => { this.handleChange(event) }}
                            variant="outlined"
                        /> */}
                    </div>
                    <div className="button">
                    <Button variant="contained" color="primary" type="submit" size="large">
                        Add
                    </Button>
                    </div>                
                </form>
                {this.renderCards()}
            </div>
        )
    }
}