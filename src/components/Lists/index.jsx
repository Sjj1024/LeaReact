import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'

export default class Lists extends Component {

    constructor(){
      console.log("constructor------");
    }

    render() {
        const { todos } = this.props
        console.log("render---");
        return (
            <div className="list-box">
                {todos.map((val, index) => {
                    return <Item {...val} key={index}></Item>
                })}
            </div>
        )
    }

    componentDidMount(){
      console.log("componentDidMount---");
    }
}

Lists.propTypes = {
    todos: PropTypes.array,
}
