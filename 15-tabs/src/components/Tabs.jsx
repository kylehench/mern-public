import React from 'react'
// import style from './style.module.css'
import { useState } from 'react'

const Tabs = (props) => {
  const [tabIndex, setTabIndex] = useState(0)
  const selectTab = (index) => setTabIndex(index)
  const tabStyle = (index) =>
    index === tabIndex ? 'currentTab' : 'regTab'

  return (
    <>
      <div className='tabContainer'>{ props.tabs.map( (tab, index) => (
          <div
            className={`tab ${ tabStyle(index) }`}
            key={index}
            onClick={(e) => selectTab(index)}>
              Tab {tab.label}
          </div>
        ))}
      </div>
      <div className='content'>{ props.tabs[tabIndex].content }</div>
    </>
  )
}

export default Tabs