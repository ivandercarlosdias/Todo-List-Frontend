import { ChangeEvent } from 'react'

export interface ITodoForm {
    description: string
    handleChange(event: ChangeEvent<HTMLInputElement>): void
    handleAdd(): void
}
