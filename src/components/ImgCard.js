import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ImgCard(props) {
    return(
        <div className='imgcard-container card'>
            <div className={`imgcard-icon ${props.name}`}>
                <FontAwesomeIcon icon={props.imgSrc} size='4x' />
            </div>
            <div>
                <h2 className='imgcard-title'>{props.title}</h2>
                <h4 className='imgcard-description'>{props.description}</h4>
            </div>
        </div>
    );
}