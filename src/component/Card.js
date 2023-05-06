import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      <div className="card">
        <h2>{props.title1}</h2>
        <img src={props.imgsource} alt="course1" className="coursesImg" />
        <p>{props.desc1}</p>
        <div className="btnBox">
          <div className="btn">
            <NavLink to="/about" className="readmore">
              {props.btncourses}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
