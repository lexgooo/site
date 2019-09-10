import * as React from 'react'
// import { CSSTransition } from 'react-transition-group'

import Indicators from './Indicators'
import Menus from './Menus'

import '../styles/animation.scss'

interface SliderProps {
    children: JSX.Element[]
}
interface SliderState {
    length: number
    prevKey: any
    activeKey: any
    keys: any[]
    list: any[]
    scrollAble: boolean
    currentBgColor: string
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
            keys: [],
            list: [],
            scrollAble: true,
            currentBgColor: ''
        }
    }
    componentDidMount() {
        const length = this.props.children.length
        const children = this.props.children
        let currentBgColor: string = this.state.currentBgColor
        const keys = children.map(item => item.key)
        const activeKey = keys[0]
        const list = children.map(item => {
            let i = {
                key: item.key,
                show: false,
                element: item
            }
            if (activeKey === i.key) {
                i.show = true
                currentBgColor = item.props.bgColor
            }
            return i
        })
        this.setState({
            length,
            keys,
            activeKey,
            list,
            currentBgColor
        })
    }
    scrollChange = (key: any): void => {
        const prevKey = this.state.activeKey
        let currentBgColor: string = this.state.currentBgColor
        const list = this.state.list.map(item => {
            if (key === item.key) {
                item.show = true
                currentBgColor = item.element.props.bgColor
            } else {
                item.show = false
            }
            return item
        })
        this.setState({
            activeKey: key,
            prevKey,
            list,
            currentBgColor
        })
        let timer = setTimeout(() => {
            this.setState({
                scrollAble: true
            })
            clearTimeout(timer)
        }, 800)
    }
    handleScroll(e: any) {
        if (this.state.scrollAble && Math.abs(e.deltaY) > 5) {
            this.setState({
                scrollAble: false
            })
            const activeKey = this.state.activeKey
            const list = this.state.list
            const currentKeyIndex = list.findIndex(
                item => item.key === activeKey
            )
            const downKey =
                currentKeyIndex < list.length - 1
                    ? list[currentKeyIndex + 1].key
                    : list[list.length - 1].key
            const upKey =
                currentKeyIndex > 0
                    ? list[currentKeyIndex - 1].key
                    : list[0].key
            const direction: string =
                e.deltaY > 0
                    ? 'down' /** 显示更下面的内容 */
                    : 'up' /** 显示更上面的内容 */
            if (direction === 'up') {
                this.scrollChange(upKey)
            } else {
                this.scrollChange(downKey)
            }
        }
    }
    children(): JSX.Element[] | any {
        return this.state.list.map((item: any) => {
            return (
                <div style={{ width: '100vw', height: '100vh' }} key={item.key}>
                    {item.element}
                </div>
            )
        })
    }
    // animationElement(item: any): JSX.Element {
    //     const keys = this.state.keys
    //     const prevKey = this.state.prevKey
    //     const activeKey = this.state.activeKey
    //     const prevKeyIndex = keys.findIndex(i => i === prevKey)
    //     const activeKeyIndex = keys.findIndex(i => i === activeKey)
    //     const up = activeKeyIndex > prevKeyIndex
    //     const inAnimateClass = up ? 'slide-in-up' : 'slide-in-down'
    //     const outAnimateClass = up ? 'slide-out-up' : 'slide-out-down'
    //     return (
    //         <CSSTransition
    //             in={item.show}
    //             timeout={1000}
    //             unmountOnExit
    //             classNames={{
    //                 // appearActive: inAnimateClass,
    //                 appear: 'animate',
    //                 enterActive: inAnimateClass,
    //                 exit: 'animate',
    //                 exitActive: outAnimateClass
    //             }}
    //             key={item.key}
    //         >
    //             <div style={{ width: '100vw', height: '100vh' }}>
    //                 {item.element}
    //             </div>
    //         </CSSTransition>
    //     )
    // }
    render() {
        return (
            <main
                onWheel={(e: any) => this.handleScroll(e)}
                style={{ overflow: 'hidden', height: '100vh'}}
            >
                <Menus currentBgColor={this.state.currentBgColor} />
                <div style={{
                    transition: 'all 700ms ease 0ms',
                    transform: `translateY(-${this.state.activeKey * 100}vh)`
                }}>{this.children()}</div>
                <Indicators
                    keys={this.state.keys}
                    activeKey={this.state.activeKey}
                    onClick={this.scrollChange}
                    currentBgColor={this.state.currentBgColor}
                />
            </main>
        )
    }
}
