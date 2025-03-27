import en from './en.json';
import ru from './ru.json';
import ua from './ua.json';
import pl from './pl.json';


export const localDefalult = 'en-Us';

export const local: {
    [key: string]: typeof en;
} = {
    'en-Us': en,
    'ru-Ru': ru,
    'ua-Ua': ua,
    'pl-Pl': pl,
}