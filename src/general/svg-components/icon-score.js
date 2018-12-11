import React from 'react'
import Svg, { Rect } from 'react-native-svg'

const IconScore = props => (
    <Svg
        x="0px"
        y="0px"
        width={17}
        height={14}
        viewBox="0 0 17 14"
        {...props}
    >
        <Rect x={0} width={17} height={2} />
        <Rect x={0} y={4} width={17} height={2} />
        <Rect y={8} width={17} height={2} />
        <Rect y={12} width={17} height={2} />
    </Svg>
)

export default IconScore
