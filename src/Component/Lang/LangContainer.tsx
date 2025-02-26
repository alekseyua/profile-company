import React, { useContext, useState } from 'react';
import Lang from './Lang';
import { setLocalStore } from '../../helpers/helper';
import { LangContext } from '../../App';

export interface IListLang {
  id: number;
  title: string;
  active: boolean;
  code: string;
}
interface LangContainer {
}

const LangContainer: React.FC<LangContainer> = ({ }: LangContainer) => {
  const context = useContext(LangContext);
  const [isShowDropDownLang, setIsShowDropDownLang] = useState<boolean>(false);
  const [listLang, setListLang] = useState<IListLang[]>([
    {
      id: 0,
      title: 'en',
      active: true,
      code: 'en- Us',
    },
    {
      id: 1,
      title: 'ru',
      active: false,
      code:'ru - Ru',
    },
    {
      id: 2,
      title: 'ua',
      active: false,
      code:'ua - Ua',
    },
    {
      id: 3,
      title: 'pl',
      active: false,
      code:'pl - Pl',
    },
  ]);

  const handleSwitchLang = (id: number, code: string) => {
    setListLang((state: IListLang[]) => state.map((item: IListLang) => item.id === id ? { ...item, active: true } : { ...item, active: false }).sort((a:IListLang,b:IListLang) => +b.active - +a.active));
    setLocalStore('lang',code);
    context?.handleChangeCode && context?.handleChangeCode(code)
  }

  const handleMenuLang = (status: boolean) => {
    setIsShowDropDownLang(status);
  }

  console.log({context})
  return (
    <Lang
      listLang={listLang}
      handleMenuLang={handleMenuLang}
      handleSwitchLang={handleSwitchLang}
      isShowDropDownLang={isShowDropDownLang}
    />
  )
}

export default LangContainer;