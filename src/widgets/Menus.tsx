import * as React from 'react'
import Color from 'color'

interface MenusProps {
    currentBgColor: string
}
export default class Menus extends React.Component<MenusProps, {}> {
    iconStyle(): {} {
        const border_size: string = '3px'
        const border_gap: string = '5px'
        const currentBgColor = this.props.currentBgColor || '#fff'
        const color = Color(currentBgColor)
            .negate()
            .hex()
        const border = `${border_size} solid ${color}`
        return {
            display: 'block',
            position: 'relative',
            width: '24px',
            height: border_size,
            padding: `${border_gap} 0`,
            backgroundColor: color,
            backgroundClip: 'content-box',
            borderTop: border,
            borderBottom: border
        }
    }
    render() {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: '15px',
                    right: '15px'
                }}
            >
                <span style={this.iconStyle()}></span>
            </div>
        )
    }
}
