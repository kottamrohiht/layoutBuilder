import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="leftnav-container">
              <h1 className="leftnav-heading"> Left Navbar Menu </h1>
              <ul className="item-container">
                <li className="item1"> Item1 </li>
                <li className="item1"> Item2 </li>
                <li className="item1"> Item3 </li>
                <li className="item1"> Item4 </li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="leftnav-container body">
              <div className="item-container">
                <h1 className="leftnav-heading"> Content </h1>
                <p className="item1">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do elusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.{' '}
                </p>
              </div>
            </div>
          )}
          {showRightNavbar && (
            <div className="leftnav-container right-nav">
              <div className="item-container">
                <h1 className="leftnav-heading"> Right Navbar </h1>
                <p className="item1 ad1"> Ad 1 </p>
                <p className="item1 ad1"> Ad 2 </p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
