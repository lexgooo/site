import * as React from 'react'
import './styles/App.scss'

import FullPageSlider from './widgets/FullPageSlider'
import Introduction from './pages/Introduction'
import Skills from './pages/Skills'
import Works from './pages/Works'

export default class App extends React.Component {
    state = {
        pagePadding: '15px'
    }
    render() {
        return (
            <FullPageSlider>
                <Introduction bgColor='#ececec' padding={this.state.pagePadding} key={0}/>
                <Skills bgColor='#595959' padding={this.state.pagePadding} key={1}/>
                <Works bgColor="#ececec" padding={this.state.pagePadding} key={2}/>
            </FullPageSlider>
        )
    }
}