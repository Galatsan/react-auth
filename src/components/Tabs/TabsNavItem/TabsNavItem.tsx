import React from 'react'
import './TabsNavItem.css'

type Props = {
  active: boolean,
  children: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const TabsNavItem: React.FC<Props> = ({
  active = false,
  children,
  onClick = () => {}
}) => (
  <button
    className={`TabsNavItem ${active ? 'active' : ''}`}
    onClick={onClick}>
     {children}
  </button>
)


export default TabsNavItem