import * as React from 'react'
import './styles/App.scss'

import FullPageSlider from './widgets/FullPageSlider'
import Introduction from './pages/Introduction/Index'
import Skills from './pages/Skills'
import Works from './pages/Works'

export default class App extends React.Component {
    state = {
        pagePadding: '15px',
        topGap: '38.2vh'
    }
    render() {
        return (
            <FullPageSlider>
                <Introduction bgColor='#ececec' padding={this.state.pagePadding} topGap={this.state.topGap} key={0}/>
                <Skills bgColor='#595959' padding={this.state.pagePadding} topGap={this.state.topGap} key={1}/>
                <Works bgColor="#ececec" padding={this.state.pagePadding} topGap={this.state.topGap} key={2}/>
            </FullPageSlider>
        )
    }
}