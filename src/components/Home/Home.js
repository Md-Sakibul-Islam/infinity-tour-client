import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Destination from '../Destination/Destination';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            {/* banner components */}
            <Banner></Banner>
            {/* Destination components */}
            <Destination></Destination>
             {/* WhyChoose components */}
            <WhyChoose></WhyChoose>
             {/* Blog components */}
             <Blog></Blog>
        </div>
    );
};

export default Home;