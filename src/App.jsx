import './App.css'
import React, { Component } from 'react'
import { Input, Table } from 'antd'

const { Search } = Input

export default class App extends Component {
    state = {
        todos: [
            { id: 1, name: '吃饭', isDone: false },
            { id: 2, name: '睡觉', isDone: true },
            { id: 3, name: '写代码啊', isDone: false },
        ],
        columns: [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年纪',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
            },
        ],
        data: [],
    }

    addTodos = (todo) => {
        console.log('添加内容', todo)
        const newTodos = [todo, ...this.state.todos]
        this.setState({ todos: newTodos })
    }

    onSearch = (value) => console.log(value)

    render() {
        return (
            <div className="App">
                <div className="main-box">
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={this.onSearch}
                    />
                    <Table
                        columns={this.state.columns}
                        dataSource={this.state.data}
                    />
                </div>
            </div>
        )
    }
}
