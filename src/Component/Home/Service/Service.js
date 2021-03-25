import React from 'react';
import dental from '../../../images/001-dental.png'
import tooth1 from '../../../images/tooth1.png'
import tooth2 from '../../../images/tooth2.png'
import ServiceDetails from './ServiceDetails';
const Service = () => {
    const Ser=[
        {
            img:dental,
            name:'Fluoride Treatment',
            des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ab? Aperiam sed laboriosam nemo optio.'
        },
        {
            img:tooth1,
            name:'Cavity Filling',
            des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ab? Aperiam sed laboriosam nemo optio.'
        },
        {
            img:tooth2,
            name:'Teeth Whitening',
            des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ab? Aperiam sed laboriosam nemo optio.'
        }
    ]
    return (
       <section>
             <div className="text-center pt-5 mt-5">
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h2 style={{color:'#3E4558'}}>Services We Provide</h2>
             </div>
             <div className="d-flex justify-content-center">
             <div className="row w-75 py-5">
                     {
                         Ser.map(res=><ServiceDetails res={res}></ServiceDetails>)
                     }
             </div>
            </div>
       </section>
    );
};

export default Service;