import SimpleImageSlider from "react-simple-image-slider";
import { useSwitch } from "../../contexts/SwitchContexts";
import useWindowDimensions from "../../utils/useWindowDimensios";

import './styles.scss'

type WorkCardProps = {
    title: string;
    images: {url: string}[];
    gitLink: string;
}


export function WorkCard({title, images, gitLink}: WorkCardProps) {
   
    const { height, width } = useWindowDimensions();

    const {lang} = useSwitch()
    return(
        <div className={'workcard'}>
            <div className="title-container">
                <h1>{title}</h1>
            </div>
            <div className="content">
                <SimpleImageSlider
                    width={width > height? width*0.6 :width * 0.8}
                    height={width > height? height*0.7: height * 0.3}
                    images={images}
                    showBullets
                    showNavs                    
                />
            </div>
            <div className="about">
                <a href={gitLink}><strong>{lang === 'pt-br' ? 'Link para o projeto' : 'Link to the project'}</strong></a>
            </div>
        </div>
    )
}