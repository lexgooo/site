import * as React from 'react'
import './style.scss'

interface IndicatorsProps {
    keys: any[],
    activeKey: any,
    onClick: any
}

export default class Indicators extends React.Component <IndicatorsProps, {}> {
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
                    return <span className={item === this.props.activeKey  ? 'active' : 'default'} key={item} style={{
                        width: '15px',
                        height: '3px',
                        borderRadius: '2.5px',
                        marginBottom: '15px'
                    }} onClick={() => this.props.onClick(item)}></span>
                })}
            </div>
        )
    }
}