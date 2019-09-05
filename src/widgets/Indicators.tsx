import * as React from 'react'

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
                    return <span key={item} style={{
                        width: '25px',
                        height: '5px',
                        borderRadius: '2.5px',
                        background: item === this.props.activeKey ? '#3f3f3f' : '#f3f3f3',
                        marginBottom: '15px'
                    }} onClick={() => this.props.onClick(item)}></span>
                })}
            </div>
        )
    }
}