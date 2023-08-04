import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    state = {
        name: '王思聪',
        homes: ['上海', '北京', '深圳'],
        info: {
            father: '王健林',
            car: '宝马',
        },
    }

    handleWang = (e) => {
        console.log('handleWang-', e)
    }

    render() {
        return (
            <>
                <div className="foot-box">
                    <input type="checkbox" />
                    <span>已完成0</span>/<span>全部3</span>
                    <button className="del-done">删除内容</button>
                </div>
                <div>
                    <input type="text" onChange={this.handleWang} />
                </div>
            </>
        )
    }
}
