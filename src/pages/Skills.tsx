import * as React from 'react'
import VerticalTitle from '../widgets/VerticalTitle'
import Color from 'color'

export default class Skills extends React.Component<{bgColor: string; padding: string; topGap: string}, {}> {
    render () {
        return (
            <section className="full-page" style={{
                background: this.props.bgColor,
                color: Color(this.props.bgColor).negate().hex(),
                padding: this.props.padding,
                display: 'flex'
            }}>
                <div className="img" style={{flex: '1'}}>
                    <VerticalTitle title="my skills" bgColor={this.props.bgColor} marginTop={this.props.topGap}/>
                </div>
                <div className="content" style={{flex: '1'}}>
                    
                </div>
            </section>
        )
    }
}