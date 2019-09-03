import * as React from 'react'

interface SliderProps {
    children: JSX.Element[]
}

export default class FullPageSlider extends React.Component<SliderProps, {}> {
    constructor(props:SliderProps) {
        super(props);
        this.state = {
            length: 0,
            activeKey: 0
        }
    }
    componentDidMount() {
        this.setState({
            length: this.props.children.length
        })
    }
    children(): JSX.Element[] {
        return this.props.children.map((item, index) => {
            debugger
            return item
        })
    }
    render () {
        return (
            <div>
                {this.children()}
            </div>
        )
    }
}