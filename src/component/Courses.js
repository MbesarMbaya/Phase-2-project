import React from 'react';
import '../Css/CoursesStyle.css'
import Card from './Card';
import Data from './Data';
const Courses=()=>{
    return(
        <>
    <h1>Our Courses</h1>
    <div className="courses">
        {Data.map((values)=>{
            return(
                <Card
                    title1={values.ctitle}
                    imgsource={values.imgsrc}
                    desc1={values.desc1}
                    btncourses={values.btncourses}
                />
            )
        })}
        
    </div>
        </>
    )
}
export default Courses;