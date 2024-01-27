import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabDetails, onChangeTabItem, isTabActive} = this.props
    const {tabId, displayText} = tabDetails

    const onClickTabItem = () => {
      onChangeTabItem(tabId)
    }

    const activeClassName1 = isTabActive ? 'active-tab-item' : ''
    const activeClassName2 = isTabActive ? 'active-tab-button' : ''

    return (
      <li className={`tab-item ${activeClassName1}`} onClick={onClickTabItem}>
        <button className={`tab-button ${activeClassName2}`} type="button">
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
