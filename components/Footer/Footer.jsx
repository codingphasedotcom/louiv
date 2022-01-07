export default function Footer(props) {

	const currentYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__title">
					Louis Vuitton
				</div>
				<div className="footer__links">
					<a href="#" className="footer__link">United States</a>
					<a href="#" className="footer__link">Email Sign Up</a>
					<a href="#" className="footer__link">Contact-Us</a>
					<a href="#" className="footer__link">Apps</a>
					<a href="#" className="footer__link">Follow Us</a>
					<a href="#" className="footer__link">California Transparency</a>
					<a href="#" className="footer__link">Legal Notice</a>
					<a href="#" className="footer__link">Careers</a>
					<a href="#" className="footer__link">Sitemap</a>
				</div>
			</div>
		</footer>
	);
}
