import '../../Css/Footer.css'
import MyLogo from "../../assets/LogoBlack.svg"
const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-brand">
        <img src={MyLogo} alt="" />
      <h4>Alberto Watch company</h4>
      <p>Discover timeless elegance with our curated collection of watches designed for every occasion.</p>
    </div>

    {/* <!-- Navigation Links --> */}
    <div className="footer-links">
      <h5>Quick Links</h5>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/faq">FAQs</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>

    {/* <!-- Policies --> */}
    <div className="footer-policies">
      <h5>Policies</h5>
      <ul>
        <li><a href="/shipping">Shipping Policy</a></li>
        <li><a href="/returns">Return Policy</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
      </ul>
    </div>

    {/* <!-- Social Media Links --> */}
    <div className="footer-social">
      <h5>Follow Us</h5>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  </div>

  {/* <!-- Footer Bottom --> */}
  <div className="footer-bottom">
    <p>&copy; 2024 Alberto Watch Company. All Rights Reserved.</p>
  </div>
</footer>

  )
}

export default Footer
