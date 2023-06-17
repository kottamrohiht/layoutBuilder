import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRigthNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-container">
          <h1 className="config-heading"> Layout </h1>
          <div className="input-container">
            <input
              defaultChecked={showContent}
              onChange={onChangeContent}
              type="checkbox"
              id="content"
              value="content"
            />
            <label className="label" htmlFor="content">
              content{' '}
            </label>
          </div>

          <div className="input-container">
            <input
              defaultChecked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
              type="checkbox"
              id="leftNavbar"
              value="content"
            />
            <label className="label" htmlFor="leftNavbar">
              {' '}
              Left Navbar{' '}
            </label>
          </div>

          <div className="input-container">
            <input
              defaultChecked={showRightNavbar}
              onChange={onChangeRigthNavbar}
              type="checkbox"
              id="rightNavbar"
              value="content"
            />
            <label className="label" htmlFor="rightNavbar">
              {' '}
              Right Navbar{' '}
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
