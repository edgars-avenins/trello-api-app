import React, { Component } from 'react'
import request from 'superagent'
import { Route } from 'react-router-dom'
import Boards from './Boards'
import Board from './Board'
import List from './List'
import Nav from './Nav'
import NewCard from './NewCard'

export default class App extends Component {

  state = {}

  componentDidMount(){
    request.get('/api')
    .then((res) => console.log('pinged',res.body))
    request.get(`https://api.trello.com/1/members/me/boards?key=${process.env.REACT_APP_APIKEY}&token=${process.env.REACT_APP_TOKEN}`)
      .then(res => this.setState({boards: res.body}))
  }

  handleClickBoard = (boardID) => {
    request.get(`https://api.trello.com/1/boards/${boardID}/lists?key=${process.env.REACT_APP_APIKEY}&token=${process.env.REACT_APP_TOKEN}`)
      .then(res => this.setState({board: res.body}))
  }

  handleClickList = (listID) => {
    request.get(`https://api.trello.com/1/lists/${listID}/cards?key=${process.env.REACT_APP_APIKEY}&token=${process.env.REACT_APP_TOKEN}`)
      .then(res => this.setState({list: res.body}))
  }

  renderBoards = (boards) => {
    return (
      <p onClick={this.handleClickBoard} key={boards.id} id={boards.id}>
      {boards.name}
      </p>
    )
  }

  renderLists = (list) => {
    return (
      <p onClick={this.handleClickList} key={list.id} id={list.id}>
        {list.name}
      </p>
    )
  }

  render() {
    return (
      <>
        <Route path='/' component={Nav} /> 
        {/* When using component atribute then the actual component gets access to route props by default but can't pass in props */}
        <Route exact path='/' render={() => <Boards boards={this.state.boards || []} chooseBoard={this.handleClickBoard} />}/>
        <Route exact path='/board' render={() => <Board board={this.state.board || []} chooseList={this.handleClickList} />}/>
        <Route exact path='/board/list' render={() => <List list={this.state.list || []} />} />
        <Route exact path='/board/list/:listId' render={(routeProps) => <NewCard {...routeProps} />} />
        {/* When using render attribute and anonymous component the route props aren't sent by default and must be specified */}
      </>
    )
  }
}
