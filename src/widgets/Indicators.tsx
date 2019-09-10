import * as React from 'react'
import Color from 'color'

interface IndicatorsProps {
    keys: any[]
    activeKey: any
    onClick: any
    currentBgColor: string
}

export default class Indicators extends React.Component <IndicatorsProps, {}> {
    setColor(): {active: string; default: string} {
        const currentBgColor = this.props.currentBgColor || '#fff'
        const color = Color(`${currentBgColor}`)
        const isLight = color.isLight()
        return {
            active: color.negate().hex(),
            default: isLight ? color.darken(0.2).hex() : color.lighten(0.2).hex()
        }
    }
    render() {
        return (
            <div style={{
                position: "fixed",
                right: '15px',
                top: '0',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                {this.props.keys.map(item => {
                    return <span key={item} style={{
                        width: '18px',
                        height: '2px',
                        borderRadius: '1px',
                        background: item === this.props.activeKey ? this.setColor().active : this.setColor().default,
                        marginBottom: '15px'
                    }} onClick={() => this.props.onClick(item)}></span>
                })}
            </div>
        )
    }
}