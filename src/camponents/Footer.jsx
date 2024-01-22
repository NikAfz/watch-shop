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
              <a href="" className="link-tree--link">github</a>
              <a href="" className="link-tree--link">Linked In</a>
              <a href="" className="link-tree--link">E-mail</a>
              {/* <a href="" className="link-tree--link">github</a> */}
            </div>
            <div className="link-tree">
              <p className="link-tree--name">Pages</p>
              <a href="" className="link-tree--link">home</a>
              <a href="" className="link-tree--link">cart</a>
              <a href="" className="link-tree--link">favorit</a>
              <a href="" className="link-tree--link">all products</a>
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
