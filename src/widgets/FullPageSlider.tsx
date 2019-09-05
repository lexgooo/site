import * as React from 'react'
import Indicators from './Indicators'

interface SliderProps {
    children: JSX.Element[]
}
interface SliderState {
    length: number
    prevKey: any
    activeKey: any
    keys: any[]
}

export default class FullPageSlider extends React.Component<
    SliderProps,
    SliderState
> {
    constructor(props: SliderProps) {
        super(props)
        this.state = {
            length: 0,
            prevKey: 0,
            activeKey: 0,
            keys: []
        }
    }
    componentDidMount() {
        const length = this.props.children.length
        const keys = this.props.children.map(item => item.key)
        const activeKey = keys[0]
        this.setState({
            length,
            keys,
            activeKey
        })
    }
    handleClick = (key:any):void => {
        this.setState({
            prevKey: this.state.activeKey
        })
        this.setState({
            activeKey: key
        })
    }
    children(): JSX.Element[] | any {
        const activeKey = this.state.activeKey
        return this.props.children.map((item: JSX.Element) => {
            if (item.key === activeKey) {
                item = this.show(item)
            } else {
                item = this.hidden(item)
            }
            return item
        })
    }
    show(item: JSX.Element): JSX.Element {
        const keys = this.state.keys
        const prevKey = this.state.prevKey
        const activeKey = this.state.activeKey
        const prevKeyIndex = keys.findIndex(i => i === prevKey)
        const activeKeyIndex = keys.findIndex(i => i === activeKey)
        const upToDown = (activeKeyIndex > prevKeyIndex)
        const animateClass = upToDown ? 'slideInUp' : 'slideInDown'
        return (
            <div className={`animated ${animateClass}`} style={{display: 'block'}} key={activeKey}>
                {item}
            </div>
        )
    }
    hidden(item: JSX.Element | any): JSX.Element {
        const keys = this.state.keys
        const prevKey = this.state.prevKey
        const activeKey = this.state.activeKey
        const prevKeyIndex = keys.findIndex(i => i === prevKey)
        const activeKeyIndex = keys.findIndex(i => i === activeKey)
        const downToUp = prevKeyIndex < activeKeyIndex
        const animateClass = downToUp ? 'slideOutUp' : 'slideOutDown'
        return (
            <div className={(item.key === prevKey) ? `animated ${animateClass}` : ''} style={{display: 'none'}} key={item.key}>
                {item}
            </div>
        )
    }
    render() {
        return (
            <main>
                <section>
                    {this.children()}
                </section>
                <Indicators keys={this.state.keys} activeKey={this.state.activeKey} onClick={this.handleClick} />
            </main>
        )
    }
}
