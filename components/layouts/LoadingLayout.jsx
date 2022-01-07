import CartIcon from '../../src/components/CartIcon';

export default function LoadingLayout() {
  return (
    <>
      <header className="header header1">
        <div className="header3__logo">
          <a href="/">CPLUX</a>
        </div>

        <ul className="header3__collections-nav">
          <li className="header3__collection-link">
            <a href="/collections/men">Men</a>
          </li>
          <li className="header3__collection-link">
            <a href="/collections/women">Women</a>
          </li>
          <li className="header3__collection-link">
            <a href="#">
              Products<i className="fas fa-chevron-down"></i>
            </a>
            <ul className="collection-link__sub-links">
              <li>
                <a href="/collections/adidas">Adidas</a>
              </li>
              <li>
                <a href="/collections/nike">Nike</a>
              </li>
              <li>
                <a href="/collections/supra">Supra</a>
              </li>
            </ul>
          </li>
          <CartIcon />
        </ul>
      </header>
      <main role="main" id="mainContent" className="relative bg-gray-50">
        <div className="loadingState">
          <div className="loadingContainer">
            <div className='skeleton'></div>
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        </div>
      </main>
    </>
  );
}
