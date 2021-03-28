import React from 'react'
import './TabsContent.css'

type Props = {
  children: React.ReactNode,
}

const TabsContent: React.FC<Props> = ({
  children,
}) => (
  <div className={"TabsContent"}>
     {children}
  </div>
)


export default TabsContent