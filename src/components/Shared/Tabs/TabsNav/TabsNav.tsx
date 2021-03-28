import React from 'react'
import './TabsNav.css'

type Props = {
  children: React.ReactNode,
}

const TabsNav: React.FC<Props> = ({
  children
}) => (
  <div className="TabsNav">{children}</div>
)


export default TabsNav