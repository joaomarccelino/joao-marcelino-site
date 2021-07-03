import ProfilePic from '../../assets/images/joao.png'
import { FaLinkedin, FaInstagram, FaFacebook, FaGithubSquare } from 'react-icons/fa'


import { ptBr, en } from '../../utils/texts'

import './styles.scss'
import { useSwitch } from '../../contexts/SwitchContexts'

export function About() {
    const { lang } = useSwitch()
    return (
        <div className="about">
            <div className="image-section">
                <div className="decoration">
                </div>
                <img src={ProfilePic} alt="" />
            </div>
            <div className="text-section">
                <div className="title-container">
                    <h1>{lang === 'pt-br' ? ptBr.about : en.about}</h1>
                </div>
                <div className="text-container">
                    <p>{lang === 'pt-br' ? ptBr.p1 : en.p1}</p>
                    <p>{lang === 'pt-br' ? ptBr.p2 : en.p2}</p>
                    <p>{lang === 'pt-br' ? ptBr.p3 : en.p3}</p>
                </div>
                <a href="mailto:joao.marcelino.esc@gmail.com">
                    <button>
                        mail-me
                    </button>
                </a>

                <div className="icons-container">
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-marcelino-075961190/"><FaLinkedin size={50} /></a>
                    <a href="https://www.instagram.com/joaomarccelino/"><FaInstagram size={50} /></a>
                    <a href="https://www.facebook.com/joaomarccelino"><FaFacebook size={50} /></a>
                    <a href="https://github.com/joaomarccelino"><FaGithubSquare size={50} /></a>
                </div>
            </div>
        </div>
    )
}