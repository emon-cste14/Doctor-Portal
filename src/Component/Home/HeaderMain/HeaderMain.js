import React from 'react';
import chair from '../../../images/Mask Group 1.png'
const HeaderMain = () => {
    return (
        <main> 
            <div style={{height:'600px'}} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1 pt-5">
                     <h1 style={{color:'#3A4256'}}>Your New Smile <br /> Starts Here</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis animi id illum explicabo cum rem, ab molestias repellendus adipisci doloremque tempore reprehenderit necessitatibus, recusandae debitis aliquam? Iste, quisquam magni?</p>
                     <button className="btn btn-primary">GET APPOINTMENT</button>
                </div>
                <div className="col-md-6 pt-5">
                   <img src={chair} alt="" className="img-fluid"/>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;