import { useState } from 'react'
import { ChangeEvent } from 'react'
import axios from 'axios'

import PageHeader from '../../components/PageHeader'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'

export default function Todo() {
    const API = 'http://localhost:3003/api/todos'

    const [state, setState] = useState({
        description: '',
        list: [],
    })

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setState({
            ...state,
            description: event.target.value,
        })
    }

    function handleAdd() {
        const description = state.description
        axios.post(API, { description }).then((res) => console.log('Funcionou a comunicação com o backend!'))
    }

    return (
        <>
            <PageHeader title="Todo App" subtitle="Lorem ipsum dolor sit amet" />
            <TodoForm handleAdd={handleAdd} description={state.description} handleChange={handleChange} />
            <TodoList />
        </>
    )
}
