import React from 'react'

export default class Header extends React.Component{
  render(){
    return(
      <div className="c-bar c-bar--medium c-bar--shadow-bottom c-bar--fixed-top js-header">
        <div className="c-bar__inner">
          <div className="c-grid c-grid--gutters c-grid--between">
            <div className="c-grid__col">
              <h1><img src="image/logo.png" alt="" width="140"/></h1>
            </div>
            <div className="c-grid__col u-d-pc">
              <ul className="c-nav c-nav--medium">
                <li className="c-nav__item"><a href="index.html">Home</a></li>
                <li className="c-nav__item"><a href="start.html">Getting started</a></li>
                <li className="c-nav__item"><a href="base.html">Base</a></li>
                <li className="c-nav__item"><a href="component.html">Component</a></li>
                <li className="c-nav__item"><a href="javascript.html">JavaScript</a></li>
                <li className="c-nav__item"><a href="utility.html">Utility</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}