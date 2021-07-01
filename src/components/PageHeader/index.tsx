import { IPageHeaderProps } from './types'

import './style.scss'

export default function PageHeader(props: IPageHeaderProps): JSX.Element {
    const { title, subtitle } = props

    return (
        <div className="page-header">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}
