import './style.scss'

export default function TodoForm(): JSX.Element {
    return (
        <div role="form" className="todo-form">
            <input placeholder="Adicionar uma tarefa..." />
            <button>Adicionar</button>
        </div>
    )
}
