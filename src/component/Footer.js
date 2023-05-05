import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Css/FooterStyle.css';
const Footer=()=>{
    return(
        <>
    <footer>
        <div className="container container-flex" >
            <div className="icons">
                <GitHubIcon className="icon"/>
            </div>
            <div className="line">
                <hr/>
                <hr/>
            </div>
            <div className="copyright">
                <p>All rights reserved &copy;</p>
            </div>
        </div>       
    </footer>
        </>
    )
}
export default Footer;