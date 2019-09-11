import * as React from 'react'
import Color from 'color'

import VerticalTitle from '../../widgets/VerticalTitle'
import Content from './Content'

export default class Introduction extends React.Component <{bgColor: string; padding: string; topGap: string}, {}> {
    render () {
        return (
            <section className="full-page" style={{
                background: this.props.bgColor,
                color: Color(this.props.bgColor).negate().hex(),
                padding: this.props.padding,
                display: 'flex'
            }}>
                <div className="content" style={{flex: '1', display: 'flex', alignItems: 'flex-start'}}>
                    <VerticalTitle title="my introduction" bgColor={this.props.bgColor} marginTop={this.props.topGap}/>
                    <Content marginTop={this.props.topGap} defaultColor={Color(this.props.bgColor).negate().hex()}  />
                </div>
                <div className="img" style={{flex: '1'}}></div>
            </section>
        )
    }
}