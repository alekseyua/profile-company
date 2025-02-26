import React from 'react'
import HeaderContainer from '../../Component/Header/HeaderContainer';
import { Outlet } from 'react-router';

interface ILayout{
  handleChangeCode?: (code:string)=>void
}

const Layout: React.FC<ILayout> = ({ ...props }:ILayout) => {
  console.log(props)
  return (
    <div>
        <HeaderContainer />
        <Outlet />
    </div>
  )
}

export default Layout;