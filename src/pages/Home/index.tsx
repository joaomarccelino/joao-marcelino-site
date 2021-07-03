import './styles.scss'

import { study } from '../../utils/texts'
import { useSwitch } from '../../contexts/SwitchContexts'
import { VscChromeRestore, VscChromeClose, VscChromeMinimize } from 'react-icons/vsc'
import { Dots } from '../../components/Dots'

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
                    <div className='techs'><a href="https://nextjs.org/"><h2>{'<nextjs />'}</h2></a><Dots /></div>
                    <div className='techs'><a href="https://pt-br.reactjs.org/"><h2>{'<react />'}</h2></a><Dots /></div>
                    <div className='techs'><a href="https://reactnative.dev/"><h2>{'<react-native />'}</h2></a><Dots /></div>                    
                    <div className='techs'><a href="https://firebase.google.com/"><h2>{'<firebase />'}</h2></a><Dots /></div>                    
                </div>
                <div className="courses">
                    <div className="certification-area">
                        <div className="header">
                            <VscChromeMinimize color={'black'} />
                            <VscChromeRestore color={'black'}/>
                            <VscChromeClose color={'black'}/>
                        </div>
                        <div className="certifications">
                            <p className="cert-title"><strong>const</strong> certifications <span>= [</span> </p>
                            <p className="indent">{"{ course:"} <span className="yellow">{"'react+redux'"}</span> {", by: "} <a href="https://www.cod3r.com.br">'cod3r'</a>{"},"}</p>
                            <p className="indent">{"{ course:"} <span className="yellow">{"'react-native'"}</span> {", by: "} <a href="https://www.cod3r.com.br">'cod3r'</a>{"},"}</p>
                            <p className="indent">{"{ course:"} <span className="yellow">{"'nlw4'"}</span> {", by: "}  <a href="https://rocketseat.com.br/">'rocketseat'</a>{"},"}</p>
                            <p className="indent">{"{ course:"} <span className="yellow">{"'nlwtogether'"}</span> {", by: "} <a href="https://rocketseat.com.br/">'rocketseat'</a>{"},"}</p>
                            <p>]</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}