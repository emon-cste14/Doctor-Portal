import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faPhone,faMapMarker} from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infoData=[
        {
           title:'Opening Hour',
           des:'We are open & days',
           icon:faClock,
           bg:'primary'
        },
        {
            title:'Visit Our Location',
            des:'Mirpur-10,Dhaka-Bangladesh',
            icon:faMapMarker,
            bg:'dark'
         },
         {
            title:'Call us now',
            des:'+8801751552822',
            icon:faPhone,
            bg:'primary'
         }

    ]
    return (
    
        <section className="d-flex justify-content-center">
           <div className="w-75 row">
           {
                infoData.map(info=><InfoCard info={info}></InfoCard>)
            }
           </div>
        </section>
    );
};

export default BusinessInfo;