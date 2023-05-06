import React from 'react';
import Same from './Same';
import homeimg from '../Images/homepageimg.avif';
import '../Css/HomeAbout.css';

const Home = () => {
  return (
    <>
      <Same
        title="Learning made easy"
        text="Welcome to our course app, where learning is made easy! Our courses are designed to provide you with the knowledge and skills you need to succeed in today's fast-paced world. We understand that learning can be a challenging and time-consuming process, which is why we've created a platform that makes it easy and accessible for students of all levels. With our user-friendly interface, personalized instruction, and engaging curriculum, you can take control of your learning journey and achieve your goals with ease. Join us today and discover the exciting world of web development, front-end design, and full-stack development!."
        imgsrc={homeimg}
        btn="Read More"
      />
    </>
  );
};

export default Home;
