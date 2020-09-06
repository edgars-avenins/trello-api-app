import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class List extends Component {

    state = {
    }

    componentDidMount(){
        this.setState({
            list: this.props.list,
        })
    }

    componentDidUpdate(prevProps){
        console.log(prevProps.list, this.props.list)
        if(prevProps.list.length !== this.props.list.length){
            console.log(this.props)
            this.setState({
                list: this.props.list,
                link: this.props.list[0].idList
            })
        }
    }

    renderCards = (card) => {
        return (
            <p key={card.id}>
                {card.name}
            </p>
        )
    }

    render() {
        return (
            <div>
                <Link to={`/board/list/${this.state.link}`}>Add a new card to this board</Link>
                {this.state.list && this.state.list.map(this.renderCards)}
            </div>
        )
    }
}
