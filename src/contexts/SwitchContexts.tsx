import { useContext } from "react"
import { createContext, ReactNode, useEffect } from "react"
import usePersistedState from "../utils/usePersistedState"

type SwitchContextType = {
    lang: string;
    theme: string;
    handleLang(): void;
    handleNight(): void;
}

type SwitchContextProps = {
    children: ReactNode;
}

export const SwitchContext = createContext({} as SwitchContextType)

export function SwitchContextProvider({children}: SwitchContextProps) {
    const [lang, setLang] = usePersistedState<string>('lang', 'pt-br')
    const [theme, setTheme] = usePersistedState<string>('theme', 'dark')  

    useEffect(() => {
        if (theme === 'dark'){
          document.body.classList.add('dark-mode')
        } else {
          document.body.classList.remove('dark-mode')
        }
      }, [theme])    
  
    function handleLang() {
      setLang(lang === 'pt-br' ? 'en' : 'pt-br')
      console.log(lang)
    }
    function handleNight() {
      setTheme(theme === 'dark' ? 'light': 'dark')
    }

    return (
        <SwitchContext.Provider value={{lang, theme, handleLang, handleNight}}>
            {children}
        </SwitchContext.Provider>
    )
}

export const useSwitch = () => {
    return useContext(SwitchContext)
}