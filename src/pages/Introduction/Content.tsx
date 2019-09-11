import * as React from 'react'
import Color from 'color'

interface contentProps {
    marginTop: string
    defaultColor: string
}

export default class Content extends React.Component<contentProps, {}> {
    render() {
        return (
            <div
                style={{
                    marginTop: this.props.marginTop
                }}
            >
                <h1 className="title-line animated fadeIn">On Parenting ——by Kahlil Gibran</h1>
                <p className="animated fadeIn delay-1s" style={{
                    color: Color(this.props.defaultColor).lighten(5).hex(),
                    lineHeight: 1.4,
                    marginTop: '18px'
                }}>
                    Your children are not your children. They are the sons and
                    daughters of Life's longing for itself. They come through
                    you but not from you, And though they are with you, yet they
                    belong not to you. You may give them your love but not
                    thoughts, For they have their own thoughts. You may house
                    their bodies but not their souls, For their souls dwell in
                    the house of tomorrow, which you cannot visit, not even in
                    your dreams. You may strive to be like them, but seek not to
                    make them like you, Make them like you. For life goes not
                    backward nor tarries with Yesterday. You are the bows from
                    which your children as living arrows are sent forth. The
                    archer sees the mark upon the path of the infinite, and He
                    bends you with His might that His arrows might go swift and
                    far. Let your bending in the archer's hand be for gladness;
                    For even as He loves the arrow that flies, So He loves also
                    the bo w that is stable.
                </p>
            </div>
        )
    }
}
