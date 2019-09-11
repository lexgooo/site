import * as React from 'react'
import Color from 'color'

interface titleProps {
    title: string
    bgColor: string
    marginTop: string
}

export default class VerticalTitle extends React.Component<titleProps, {}> {
    render() {
        return (
            <h1 style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                marginTop: this.props.marginTop,
                padding: '0 96px',
                fontSize: '18px',
                color: Color(this.props.bgColor).negate().hex()
            }}>
                {this.props.title.toUpperCase()} ————
            </h1>
        )
    }
}