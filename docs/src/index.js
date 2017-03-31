import 'renimbus/public/css/app.css'
import React from 'react'
import {render} from 'react-dom'

import { HelloWorld, Header } from 'renimbus'

render(
  <div>
    <Header />
    <h1>コンポーネントテスト</h1>
    <HelloWorld />
  </div>,
  document.querySelector('#root')
)