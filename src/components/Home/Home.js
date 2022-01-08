import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            {/* banner components */}
            <Banner></Banner>
            {/* Destination components */}
            <Destination></Destination>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;