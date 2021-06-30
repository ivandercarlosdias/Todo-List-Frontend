import { Link } from 'react-router-dom'

import './style.scss'

export default function MainNav(): JSX.Element {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Todo</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}
