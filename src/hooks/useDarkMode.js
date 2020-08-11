import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage';


export const useDarkMode = (initialMode) => {
    const [darkModeState, setDarkModeState] = useLocalStorage('darkMode', initialMode);


    useEffect(() => {
        darkModeState === true ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    }, [darkModeState])

    return [darkModeState, setDarkModeState];
}