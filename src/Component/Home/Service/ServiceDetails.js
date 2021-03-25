import React from 'react';

const ServiceDetails = ({res}) => {
    return (
        <div className="col-md-4">
            <img src={res.img} alt="" style={{height:'200px'}} className="img-fluid py-5"/>
            <h3>{res.name}</h3>
            <p>{res.des}</p>
            
        </div>
    );
};

export default ServiceDetails;