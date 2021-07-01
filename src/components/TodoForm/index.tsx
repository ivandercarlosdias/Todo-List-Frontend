import './style.scss'
import { ITodoForm } from './types'

export default function TodoForm(props: ITodoForm): JSX.Element {
    const { description, handleChange, handleAdd } = props

    return (
        <div role="form" className="todo-form">
            <input value={description} onChange={handleChange} placeholder="Adicione uma tarefa..." required />
            <button onClick={handleAdd} disabled={description.length ? false : true}>
                Adicionar
            </button>
        </div>
    )
}
