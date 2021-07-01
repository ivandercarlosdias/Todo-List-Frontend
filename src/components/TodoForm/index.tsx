import './style.scss'

export default function TodoForm(props: any): JSX.Element {
    const { description, handleChange, handleAdd } = props

    return (
        <div role="form" className="todo-form">
            <input value={description} onChange={handleChange} placeholder="Adicionar uma tarefa..." />
            <button onClick={handleAdd}>Adicionar</button>
        </div>
    )
}
