import React from 'react'
import './text-animation.scss'

import { Spring } from 'react-spring/renderprops'

export default function TextAnimation({ titles: {title, title2, delay, duration}}) {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: delay, duration: duration}}
    >
      { props => (
        <div style={props}>
          <div className="text-animation">
            <h1 className="text">{title}<br/>{title2}</h1>
          </div>
        </div>
      )}
    </Spring>
  )
}