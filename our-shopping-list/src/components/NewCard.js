import React, { Component } from 'react'
import request from 'superagent'

export default class NewCard extends Component {

    state = {
        pos: 'top'
    }

    componentDidMount(){
        this.setState({update: true})
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.listId !== this.state.idList){
            this.setState({idList: this.props.match.params.listId})
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        request.post(`https://api.trello.com/1/cards?key=${process.env.REACT_APP_APIKEY}&token=${process.env.REACT_APP_TOKEN}`)
        .set('accept', 'application/json')    
        .send(this.state)
        .then(res => console.log(res))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Card name:
                    <input type='text' name='name' onChange={this.handleChange}/>
                </label>
                <label>Card description:
                    <input type='text' name='desc' onChange={this.handleChange}/>
                </label>
                <label>
                    <input type='submit' />
                </label>
            </form>
        )
    }
}
