import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <FeaturedService />
            <MakeAppointment />
            <Testimonials></Testimonials>
            <Blogs />
            <Doctors />
            <Contact />

        </div>
    );
};

export default Home;