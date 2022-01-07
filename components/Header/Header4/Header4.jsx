export default function Header4(props) {
  return(
    <header>
    <section className="top-nav">
      <div className="container">
        <div className="top-nav__groupa">
          <div className="top-nav__groupa-link">
            <i className="fas fa-globe-americas"></i>
            <span className="top-nav__groupa-linktext">Ship to: United States</span>
          </div>
          <div className="top-nav__groupa-link">
            <i className="far fa-question-circle"></i>
            <span className="top-nav__groupa-linktext">Can we help you?</span>
          </div>
          <div className="top-nav__groupa-link">
            <i className="fas fa-mobile-alt"></i>
            <span className="top-nav__groupa-linktext">+1.866.VUITTON</span>
          </div>
          <div className="top-nav__groupa-link">
            <span className="top-nav__groupa-linktext">Sustainability</span>
          </div>
        </div>
        <div className="top-nav__groupb">
          <a href="#" className="top-nav__groupb-icon">
            <i className="fas fa-map-marker-alt"></i>
          </a>
          <a href="#" className="top-nav__groupb-icon">
            <i className="far fa-heart"></i>
          </a>
          <a href="#" className="top-nav__groupb-icon">
            <i className="far fa-user"></i>
          </a>
          <a href="#" className="top-nav__groupb-icon">
            <i className="fas fa-shopping-cart"></i>
            
          </a>
        </div>
      </div>
    </section>
    <section className="top-menu">
      <div className="container">
        <div className="top-menu__groupa">
          <div className="top-menu__groupa-logo">
            {props.storeName}
          </div>
          <div className="top-menu__groupa-links">
            <a href="#" className="top-menu__groupa-link">
              New
            </a>
            <a href="#" className="top-menu__groupa-link">
              Women
            </a>
            <a href="#" className="top-menu__groupa-link">
              Men
            </a>
            <a href="#" className="top-menu__groupa-link">
              Art of Living
            </a>
            <a href="#" className="top-menu__groupa-link">
              Magazine
            </a>
            <a href="#" className="top-menu__groupa-link">
              Holiday
            </a>
          </div>

        </div>
        <div className="top-menu__groupb">
          <div href="#" className="top-menu__groupb-input">
            <i className="fas fa-search"></i>
            <input type="text" className="top-menu__groupb-search" />
          </div>
        </div>
      </div>
    </section>
    <section className="mega-menu">
      <div className="mega-menu__child">
        <a href="#" className="mega-menu__link">Gifts</a>
        <a href="#" className="mega-menu__link">Highlights</a>
        <a href="#" className="mega-menu__link">Handbags</a>
        <a href="#" className="mega-menu__link">Small Leather Goods</a>
        <a href="#" className="mega-menu__link">Fragrances</a>
        <a href="#" className="mega-menu__link">Accessories</a>
        <a href="#" className="mega-menu__link">Ready-To-Wear</a>
        <a href="#" className="mega-menu__link">Jewelry</a>
        <a href="#" className="mega-menu__link">Watches</a>
        <a href="#" className="mega-menu__link">Personalizations</a>
        <a href="#" className="mega-menu__link">Fashion Shows</a>
      </div>
      <div className="mega-menu__grand">
        <a href="#" className="mega-menu__link">Gift Shop For Her</a>
        <a href="#" className="mega-menu__link">Vivienne Holiday Collection</a>
        <a href="#" className="mega-menu__link">Best Sellers</a>
        <a href="#" className="mega-menu__link">Personalization</a>
      </div>
      <div className="mega-menu__gallery">
        <img src="/img/pexels-photo-10459948-small.jpeg" className="mega-menu__gallery-img" />
      </div>
    </section>
  </header>
  )
}