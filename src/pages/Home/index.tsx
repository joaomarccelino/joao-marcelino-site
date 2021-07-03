import './styles.scss'

import { study } from '../../utils/texts'
import { useSwitch } from '../../contexts/SwitchContexts'
import { VscChromeRestore, VscChromeClose, VscChromeMinimize } from 'react-icons/vsc'

export function Home() {
    const { lang } = useSwitch()
    return (
        <div className="home">
            <main>
                <div className='tecnologies'>
                    <div className="title">
                        <h1>{lang === 'pt-br' ? study.pt : study.en}</h1>
                        <div className="loader"></div>
                    </div>
                    <a href="https://nextjs.org/"><h2>{'<next />'}</h2></a>
                    <a href="https://pt-br.reactjs.org/"><h2>{'<react />'}</h2></a>
                    <a href="https://reactnative.dev/"><h2>{'<react-native />'}</h2></a>
                    <a href="https://firebase.google.com/"><h2>{'<firebase />'}</h2></a>
                </div>
                <div className="courses">
                    <div className="certification-area">
                        <div className="header">
                            <VscChromeMinimize />
                            <VscChromeRestore />
                            <VscChromeClose />
                        </div>
                        <div className="certifications">
                            <p><strong>const</strong> certifications= [</p>
                            <p className="indent">{"{ course: 'react+redux', by: "} <a href="https://www.cod3r.com.br">'cod3r'</a>{"},"}</p>
                            <p className="indent">{"{course: 'react-native', by: "} <a href="https://www.cod3r.com.br">'cod3r'</a>{"},"}</p>
                            <p className="indent">{"{course: 'nlw4', by: "} <a href="https://rocketseat.com.br/">'rocketseat'</a>{"},"}</p>
                            <p className="indent">{"{course: 'nlwtogether', by: "} <a href="https://rocketseat.com.br/">'rocketseat'</a>{"},"}</p>
                            <p>]</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}