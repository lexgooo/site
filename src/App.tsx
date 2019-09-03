import * as React from 'react'
import './App.scss'

import FullPageSlider from './widgets/FullPageSlider'
import Introduction from './pages/Introduction'
import Skills from './pages/Skills'
import Works from './pages/Works'

export default class App extends React.Component {
    render() {
        return (
            <FullPageSlider>
                <Introduction key={0} />
                <Skills  key={1} />
                <Works  key={2} />
            </FullPageSlider>
        )
    }
}