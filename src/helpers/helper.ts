import { localDefalult } from "../lang";

export const setLocalStore = (key: string, value: string| number | boolean): boolean => {
    try {
        window.localStorage.setItem(key, value.toString());
        return true
    } catch (error) {        
        return false
    }
}

export const getLocalStore = (key: string) : string | undefined | null | boolean => {
    const res = window.localStorage.getItem(key);
    switch (res) {
        case 'true':
            return true;
        case 'false':
            return false;
        case 'null':
            return null;
        case 'undefined':
            return undefined;        
        default:
            return res;
    }
}

export const getLocalLang = (key: string) : string => {
    const res = window.localStorage.getItem(key);
    return res ?? localDefalult;
}