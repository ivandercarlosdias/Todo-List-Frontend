export interface IStateProps {
    description: string
    list: ITaskProps[]
}

export interface ITaskProps {
    _id: string
    createdAt: Date
    description: string
    done: boolean
}
