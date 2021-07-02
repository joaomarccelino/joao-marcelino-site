import SimpleImageSlider from "react-simple-image-slider";
import { useSwitch } from "../../contexts/SwitchContexts";

import './styles.scss'


const images = [
    { url: "https://raw.githubusercontent.com/joaomarccelino/fit30v1/master/readmeimages/fit301.jpg"},
    { url: "https://raw.githubusercontent.com/joaomarccelino/fit30v1/master/readmeimages/fit302.jpg"},
    { url: "https://raw.githubusercontent.com/joaomarccelino/fit30v1/master/readmeimages/fit303.jpg"},
    { url: "https://raw.githubusercontent.com/joaomarccelino/fit30v1/master/readmeimages/fit304.jpg"},
    { url: "https://raw.githubusercontent.com/joaomarccelino/fit30v1/master/readmeimages/fit305.jpg"},
    { url: "https://raw.githubusercontent.com/joaomarccelino/fit30v1/master/readmeimages/fit306.jpg"},  
]



export function WorkCard() {
    const {lang} = useSwitch()
    return(
        <div className={'workcard'}>
            <div className="title-container">
                <h1>fit30</h1>
            </div>
            <div className="content">
                <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                    showBullets
                    showNavs
                    
                />
            </div>
            <div className="about">
                <a href="https://github.com/joaomarccelino/fit30v1"><strong>{lang === 'pt-br' ? 'Link para o projeto' : 'Link to the project'}</strong></a>
            </div>
        </div>
    )
}