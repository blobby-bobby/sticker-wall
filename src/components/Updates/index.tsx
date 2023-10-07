import './styles.scss'
import { FunctionComponent } from 'react';
import { UpdatesType } from '@/shared/types';

const Updates: FunctionComponent<UpdatesType> = (props) => {


  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/${name}`, import.meta.url).href
  }

  return (
        <div className='update-row'>
          <img className='framed-img' src={getImageUrl(props.image)} alt={props.title} />
          <div className='update-row__txt'>
            <h3>{props.day} ::: {props.title}</h3>
            <p>{props.description}</p>
            <p>Et pour la suite ?</p>
            <ul>
              {props.next.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
      </div>
      )
}

export default Updates