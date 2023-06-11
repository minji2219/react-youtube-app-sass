import React,{ createContext, useState } from "react";

export const SidebarContext = createContext()

export const SidebarContextProvier = (props)=>{
  const [isToggled,setIsToggled] = useState(true)

  const handleToggleSidebar = ()=>{
    setIsToggled(!isToggled)
  }
  return(
    <SidebarContext.Provider
      value={{isToggled,setIsToggled,handleToggleSidebar}}
      {...props}
    />
  )
}