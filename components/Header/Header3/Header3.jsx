import {useState} from 'react';
import {Link} from '@shopify/hydrogen/client';
import CartToggle from '../../../src/components/CartToggle.client';
import CurrencySelector from '../../../src/components/CurrencySelector.client';
import Navigation from '../../../src/components/Navigation.client';
import MobileNavigation from '../../../src/components/MobileNavigation.client';

export default function Header3({storeName}) {
	return (
		<header className="header header1">
			<div className="header3__logo">
				<a href="/">{storeName}</a>
			</div>

			<ul className="header3__collections-nav">
        <li className="header3__collection-link">
          <a href="/collections/men">
            Men</a>
        </li>
        <li className="header3__collection-link">
          <a href="/collections/women">
            Women</a>
        </li>
				<li className="header3__collection-link">
          <a href="#" >Products<i className="fas fa-chevron-down"></i></a>
          <ul className="collection-link__sub-links">
            <li><a href="/collections/adidas">Adidas</a></li>
            <li><a href="/collections/nike">Nike</a></li>
            <li><a href="/collections/supra">Supra</a></li>
          </ul>
        </li>
				<CartToggle handleClick={() => {if (isMobileNavOpen) setIsMobileNavOpen(false)}} />
			</ul>
		</header>
	);
}
