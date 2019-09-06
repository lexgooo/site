import * as React from 'react'
import Color from 'color'

interface titleProps {
    title: string
    bgColor: string
}

export default class VerticalTitle extends React.Component<titleProps, {}> {
    render() {
        return (
            <h1 style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                padding: '0 96px',
                color: Color(this.props.bgColor).negate().hex()
            }}>
                {this.props.title.toUpperCase()} ————
            </h1>
        )
    }
}