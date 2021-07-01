import { ITaskProps } from '../../modules/Todo/types'

export interface ITodoListProps {
    list: ITaskProps[]
    handleRemove(task: ITaskProps): void
    handleMarkAsDone(task: ITaskProps): void
    handleMarkAsPending(task: ITaskProps): void
}
