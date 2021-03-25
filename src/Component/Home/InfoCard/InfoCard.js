import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../InfoCard/InfoCard.css';
const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white pt-4">
            <div className={`d-flex info-container d-flex justify-content-center info-${info.bg}`}>
                 
                    <div className="px-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                    </div>
                    
                    <div>
                        <h5>{info.title}</h5>
                        <small>{info.des}</small>
                    </div>

            </div>
            
        </div>
    );
};

export default InfoCard;