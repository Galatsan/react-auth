import React, { useState } from 'react'
import TabsNavItem from './TabsNavItem/TabsNavItem'
import TabsNav from './TabsNav/TabsNav'
import TabsContent from './TabsContent/TabsContent'
import './Tabs.css'

type Content = {
  [key: string]: JSX.Element
}

type Props = {
  content: Content,
  nav: string[],
}

const Tabs: React.FC<Props> = ({
  content = {},
  nav = []
}) => {
  const [activeTab, setActiveTab] = useState(nav[0])
  const activeContent = content[activeTab]
  return (
    <div className="Tabs">
      <TabsNav>
        {nav.map(navItem => (
          <TabsNavItem
            key={navItem}
            active={activeTab === navItem}
            onClick={() => setActiveTab(navItem)}>
            {navItem}
          </TabsNavItem>
        ))}
      </TabsNav>
      <TabsContent>
        {activeContent}
      </TabsContent>
    </div>
  )
}


export default Tabs
