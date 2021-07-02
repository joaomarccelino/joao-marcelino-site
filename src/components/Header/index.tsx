import Switch from 'react-switch'
import logo from '../../assets/images/logoalt.svg'
import { useSwitch } from '../../contexts/SwitchContexts'

import './styles.scss'


export function Header() {
    const {lang, theme, handleLang, handleNight} = useSwitch()

    return (
        <div className="headerComponent">
            <header>
                <div className="content">
                    <a href="/"><img src={logo} alt="Logo" /></a>
                    <a href="/about">{lang === 'pt-br' ? 'sobre mim': 'about me'}</a>
                    <a href="/my-work">{lang === 'pt-br' ? 'meu trabalho': 'my work'}</a>
                    <div className="switch-area">
                        <strong>language</strong>
                        <div className="switch">
                            <span>en</span>
                                <Switch 
                                    checked={lang === 'pt-br'} 
                                    onChange={handleLang} 
                                    color={'default'}
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    height={15}
                                    width={40}
                                    handleDiameter={10}
                                /> <span>pt-br</span>
                        </div>
                        <strong>nightmode</strong>
                        <div className="switch">
                            <span>off</span>
                                <Switch checked={theme === 'dark'} 
                                    onChange={handleNight} 
                                    color={'primary'}
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    height={15}
                                    width={40}
                                    handleDiameter={10}
                                />
                            <span>on</span>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div>

                </div>
            </main>
        </div>
    )
}