// import Switch from 'react-switch'
import logo from '../../assets/images/logoalt.svg'
import { useSwitch } from '../../contexts/SwitchContexts'
import { useLocation } from 'react-router'
import Switch from '@material-ui/core/Switch'

import './styles.scss'


export function Header() {
    const { lang, theme, handleLang, handleNight } = useSwitch()

    const location = useLocation()

    const { pathname } = location

    const splitLocation = pathname.split("/");

    return (
        <div className="headerComponent">
            <header>
                <div className="content">
                    <a className={splitLocation[1] === '' ? "active" : ""} href="/"><img src={logo} alt="Logo" /></a>
                    <a className={splitLocation[1] === 'about' ? "active" : ""} href="/about">{lang === 'pt-br' ? 'sobre mim' : 'about me'}</a>
                    <a className={splitLocation[1] === 'my-work' ? "active" : ""} href="/my-work">{lang === 'pt-br' ? 'meus trabalhos' : 'my work'}</a>
                    <div className="switch-area">
                        <strong>language</strong>
                        <div className="switch">
                            <span>en</span>
                            <Switch
                                checked={lang === 'pt-br'}
                                onChange={handleLang}
                                color={'default'}
                            /><span>pt</span>
                        </div>
                        <strong>nightmode</strong>
                        <div className="switch">
                            <span>off</span>
                            <Switch
                                checked={theme === 'dark'}
                                onChange={handleNight}
                                color={'primary'}
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