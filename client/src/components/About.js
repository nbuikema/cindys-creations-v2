import React from 'react';

const About = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>About Me</h1>
            <div className='row mt-3'>
                <div className='col-sm-12 col-md-6'>
                    <p>Hello! My name is Cindy Roach and I have been sewing and quilting for over 34 years. All of my creations are made with high-quality fabrics in a smoke-free and pet-free environment. I am passionate about coming up with unique designs that can be used as gifts for others, or even for yourself!. Feel free to have a look at my creations, or contact me with any questions or concerns.</p>
                </div>
                <div className='col-sm-12 col-md-6 align-self-center'>
                    <img className='about-img' src='/imgs/cindy.jpeg' alt='' />
                </div>
            </div>
        </div>
    );
};

export default About;