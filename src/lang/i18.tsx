import React, { memo, useCallback, useEffect, useState } from 'react'
import { local, localDefalult } from '.'
import { IntlProvider } from 'react-intl'
import { getLocalLang, getLocalStore, setLocalStore } from '../helpers/helper'

interface II18 {
    children: (handleChangeCode:(code:string)=>void)=> React.ReactNode
}
const I18: React.FC<II18> = ({children}: II18) => {
    // if(!getLocalStore('lang')) setLocalStore('lang', localDefalult);
    const [code, setCode] = useState( localDefalult);

// console.log(getLocalStore('lang'))
// useEffect(useCallback(()=>{
//     const code: any = getLocalStore('lang')?.toString();
//     setCode(code);
// }, [getLocalStore('lang')]), [getLocalStore('lang')])
    const lang = getLocalLang('lang');
    const handleChangeCode = (code: string) => {
        console.log({code})      
        // setLocalStore('lang', code);
        setCode(code);
    }
  

    return (
        <IntlProvider
            defaultLocale={localDefalult} 
            locale={localDefalult} 
            messages={local[code]}
            >
            {children(handleChangeCode)}
            {/* {children} */}
        </IntlProvider>
    )
}

export default memo(I18)