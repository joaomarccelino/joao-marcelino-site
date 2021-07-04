// import Switch from 'react-switch'
import logo from '../../assets/images/logoalt.svg'
import { useSwitch } from '../../contexts/SwitchContexts'
import { useLocation } from 'react-router'
import Switch from '@material-ui/core/Switch'
import { switchTitle } from '../../utils/texts'
import './styles.scss'
import { FaRegLightbulb } from 'react-icons/fa'

export function Header() {
    const { lang, theme, handleLang, handleNight } = useSwitch()

    const location = useLocation()

    const { pathname } = location

    const splitLocation = pathname.split("/");

    return (
        <div className="headerComponent">
            <header>
                <div className="content">
                    <a href="/"><img src={logo} alt="Logo" /></a>
                    <a className={splitLocation[1] === '' ? "active" : ""} href="/">home</a>
                    <a className={splitLocation[1] === 'about' ? "active" : ""} href="/about">{lang === 'pt-br' ? 'sobre mim' : 'about me'}</a>
                    <a className={splitLocation[1] === 'my-work' ? "active" : ""} href="/my-work">{lang === 'pt-br' ? 'meus trabalhos' : 'my work'}</a>
                    <div className="switch-area">
                        <button onClick={handleNight}>
                            <FaRegLightbulb
                                color={theme === 'dark' ? 'black' : 'yellow'}
                                size={40}
                            />
                        </button>
                        <div className="switch">
                            <strong>{lang === 'pt-br' ? switchTitle.ptLang : switchTitle.enLang}</strong>
                            <div>
                                <span>en</span>
                                <Switch
                                    checked={lang === 'pt-br'}
                                    onChange={handleLang}
                                    color={'default'}
                                />
                                <span>pt</span>
                            </div>
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