import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
    addItems = (event) => {
        console.log('Children----', this)
        const { addTodos } = this.props
        const { target, keyCode } = event
        if (keyCode === 13 && target.value) {
            console.log('添加值', target.value, keyCode)
            addTodos({ id: Math.random(), name: target.value, idDone: false })
            target.value = ''
        }
    }

    render() {
        return (
            <div className="todo-input">
                <input
                    type="text"
                    onKeyDown={this.addItems}
                    placeholder="请输入内容"
                />
                <div>{this.props.children}</div>
            </div>
        )
    }
}
