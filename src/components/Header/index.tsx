import { IHeaderProps } from './type'

import './style.scss'

export default function Header(props: IHeaderProps): JSX.Element {
    return <header>{props.children}</header>
}
