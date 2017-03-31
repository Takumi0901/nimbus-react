import 'renimbus/public/css/app.css'
import React from 'react'
import {render} from 'react-dom'

import {
  Alert,
  AlertStrongText
} from 'renimbus'

render(
  <div className="l-wrapper">
    <div className="c-container">
      <h1>コンポーネントテスト</h1>
      <Alert>
        <AlertStrongText>Sed ut perspiciatis</AlertStrongText> unde omnis iste natus error sit voluptatem
      </Alert>
    </div>
  </div>,
  document.querySelector('#root')
)