import { IPageHeaderProps } from './type'

export default function PageHeader(props: IPageHeaderProps): JSX.Element {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    )
}
