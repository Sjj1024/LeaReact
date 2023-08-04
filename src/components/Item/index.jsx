import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        const { id, name, isDone } = this.props
        return (
            <div className="item-box">
                <div className="item-i">
                    <span>{id}</span>
                    <input type="checkbox" defaultChecked={isDone}/>
                    <span>{name}</span>
                </div>
                <button className="del-btn">删除内容</button>
            </div>
        )
    }
}
