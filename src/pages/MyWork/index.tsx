import { WorkCard } from "../../components/WorkCard";
import { works } from "../../data/Works";

import './styles.scss'
export function MyWork() {
    return(
        <div className='my-work'>
            {works.map(work => {
                return (
                    <WorkCard title={work.name} images={work.images} gitLink={work.gitLink} key={work.name} />
                )
            })}
        </div>
    )
}