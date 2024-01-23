import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer(props) {
  return (
    <>
      <div className="free-white-space"></div>
      <div className="footer--container">
        <div className="footer-top--container">
          <div className="footer-top-left--container">
            <div className="footer-top-left-top--container">LuxeTick</div>
            <div className="footer-top-left-bottom--container">
              LuxeTick is a portfolio project and is not a real E-Commerce website. 
              Prices, names, and ratings may be invalid.
              For this project's source code, visit <a className="link-tree--link" href="https://github.com/NikAfz/watch-shop">here </a> 
              and don't forget to star the repo {":)"}
            </div>
          </div>

          <div className="footer-top-right--container">
            <div className="link-tree">
              <p className="link-tree--name">Nik Afz</p>
              <a target="_blank" href="https://github.com/NikAfz" className="link-tree--link"> <GitHubIcon/> github</a>
              <a target="_blank" href="https://www.linkedin.com/in/nik-afz-4a0618268/" className="link-tree--link"> <LinkedInIcon/> Linked In</a>
              <a target="_blank" href="mailto:nikafz980@gmail.com" className="link-tree--link"> <EmailIcon/> Email</a>
              {/* <a href="" className="link-tree--link">github</a> */}
            </div>
            <div className="link-tree">
              <p className="link-tree--name">Pages</p>
              <Link to="/watch-shop/" className="link-tree--link">home</Link>
              <Link to="/watch-shop/cart" className="link-tree--link">cart</Link>
              <Link to="/watch-shop/fav" className="link-tree--link">favorit</Link>
              <Link to="/watch-shop/products/all" className="link-tree--link">all products</Link>
            </div>
          </div>
        </div>
        <div className="footer--hr" > <hr></hr> </div>
        <div className="footer-bottom-container">&copy; 2024 &#183; NikAfz All rights reserved</div>
      </div>
    </>
  )
};

export default Footer;
