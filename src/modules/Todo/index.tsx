import { useState, useEffect } from 'react'
import { ChangeEvent } from 'react'

import { IStateProps, ITaskProps } from './types'

import { api } from '../../services/api'

import PageHeader from '../../components/PageHeader'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'

export default function Todo(): JSX.Element {
    const [state, setState] = useState<IStateProps>({
        description: '',
        list: [],
    })

    useEffect(refresh, []) // eslint-disable-line

    function refresh(): void {
        api.get(`?sort=createdAt`).then((res) =>
            setState({
                ...state,
                description: '',
                list: res.data,
            })
        )
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setState({
            ...state,
            description: event.target.value,
        })
    }

    function handleAdd(): void {
        api.post('/', { description: state.description }).then(refresh)
    }

    function handleRemove(task: ITaskProps): void {
        api.delete(`/${task._id}`).then(refresh)
    }

    function handleMarkAsDone(task: ITaskProps): void {
        api.put(`/${task._id}`, { ...task, done: true }).then(refresh)
    }

    function handleMarkAsPending(task: ITaskProps): void {
        api.put(`/${task._id}`, { ...task, done: false }).then(refresh)
    }

    return (
        <>
            <PageHeader title="Todo App" subtitle="Lorem ipsum dolor sit amet" />
            <TodoForm handleAdd={handleAdd} description={state.description} handleChange={handleChange} />
            <TodoList
                list={state.list}
                handleRemove={handleRemove}
                handleMarkAsDone={handleMarkAsDone}
                handleMarkAsPending={handleMarkAsPending}
            />
        </>
    )
}
