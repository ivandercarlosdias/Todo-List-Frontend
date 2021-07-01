import './style.scss'
import { ITodoListProps } from './types'

export default function TodoList(props: ITodoListProps): JSX.Element {
    const { list, handleRemove, handleMarkAsDone, handleMarkAsPending } = props

    return (
        <>
            <h2>Task List</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <td>Descrição</td>
                        <td width="150">Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {list.map((task) => (
                        <tr key={task._id}>
                            <td>
                                <p className={task.done ? 'mark-as-done' : ''}>{task.description}</p>
                            </td>
                            <td>
                                {!task.done ? (
                                    <span
                                        className="button"
                                        title="Marcar como concluído"
                                        onClick={() => handleMarkAsDone(task)}
                                    >
                                        ✅
                                    </span>
                                ) : (
                                    <>
                                        <span
                                            className="button"
                                            title="Marcar como pendente"
                                            onClick={() => handleMarkAsPending(task)}
                                        >
                                            💡
                                        </span>
                                        <span
                                            className="button"
                                            title="Excluir tarefa"
                                            onClick={() => handleRemove(task)}
                                        >
                                            ❌
                                        </span>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
