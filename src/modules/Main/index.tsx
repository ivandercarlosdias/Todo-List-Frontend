import { BrowserRouter as Router } from 'react-router-dom'
import Content from '../../components/Content'

import Header from '../../components/Header'
import MainNav from '../../components/MainNav'

export default function Main() {
    return (
        <Router>
            <Header>
                <MainNav />
            </Header>
            <Content />
        </Router>
    )
}
