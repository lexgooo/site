import * as React from 'react'
import VerticalTitle from '../widgets/VerticalTitle'

export default class Skills extends React.Component<{bgColor: string; padding: string}, {}> {
    render () {
        return (
            <section className="full-page" style={{
                background: this.props.bgColor,
                padding: this.props.padding,
                display: 'flex'
            }}>
                <div className="img" style={{flex: '1', paddingTop: '10%'}}>
                    <VerticalTitle title="skills" bgColor={this.props.bgColor}/>
                </div>
                <div className="content" style={{flex: '1', paddingTop: '10%'}}>
                    
                </div>
            </section>
        )
    }
}