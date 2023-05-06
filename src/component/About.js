import React from 'react';
import Same from './Same';
import aboutusimg from '../Images/aboutus.avif';

const About = () => {
  return (
    <>
      <Same
        title="Know More About Us"
        text="Welcome to our course app! We are a team of experienced developers and educators who are passionate about teaching the latest skills in web development, front-end design, and full-stack development. Our courses are designed to provide students with the knowledge and expertise they need to succeed in the fast-paced world of tech.

        We believe that learning should be a personalized experience that meets the unique needs of each student. That's why we offer customized instruction and support to help you achieve your goals, whether you're a beginner or an experienced coder. Our expert instructors will guide you through each course, providing you with the tools and resources you need to master new skills and advance your career.
        
        To get started with our courses, simply contact us to learn more about our offerings and how we can help you achieve your goals. Our team is dedicated to providing you with the support and guidance you need to succeed, and we are committed to ensuring that our courses are accessible, engaging, and effective.
        
        Thank you for considering our course app as your partner in learning. We look forward to hearing from you soon!"
        imgsrc={aboutusimg}
        btn="Know More"
      />
    </>
  );
};

export default About;
