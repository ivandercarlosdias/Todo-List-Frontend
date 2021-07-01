import './style.scss'
import { ITodoForm } from './types'

export default function TodoForm(props: ITodoForm): JSX.Element {
    const { description, handleChange, handleAdd } = props

    return (
        <div role="form" className="todo-form">
            <input value={description} onChange={handleChange} placeholder="Adicione uma tarefa..." />
            <button onClick={handleAdd}>Adicionar</button>
        </div>
    )
}
