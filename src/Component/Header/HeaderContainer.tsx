import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useLocation } from 'react-router';

export interface IStateMenu {
  id: number,
  title: string,
  href: string,
  active: boolean
}
const HeaderContainer = () => {
  const location = useLocation();
  const { pathname } = location;
  const [listMenu, setListMenu ] = useState<IStateMenu[]>([
    { id: 1, title: 'Home', href: 'home', active: true },
    { id: 2, title: 'About', href: 'about', active: false },
    { id: 3, title: 'Contact', href: 'contact', active: false },
  ])

  const handleClickMenu = (id: number) => {
    setListMenu(listMenu.map(
      (m: IStateMenu) => 
        m.id === id
          ? {...m, active: true } 
          : {...m, active: false })
    );
  }
  
  useEffect(() =>
    setListMenu( 
      ( prevMenu:any ) => 
          prevMenu.map(
            (m: IStateMenu) => pathname.includes(m.href.toLowerCase()) 
              ? { ...m, active: true } 
              : {...m, active: false } 
          )
    ), [pathname] 
  );

  return (
    <Header
      listMenu={listMenu}
      handleClickMenu={handleClickMenu}
    />
  )
}

export default HeaderContainer 