import brand from '../config/brand';
import Logo from './Logo';

export default function Hero() {
  return (
    <div className="hero" id="top">
      <div className="w hero-grid">
        <div>
          <h1>
            <span className="line"><span>Modern websites</span></span>
            <span className="line"><span>that make</span></span>
            <span className="line"><span>business sense.</span></span>
          </h1>
          <p className="lead">
            {brand.name} designs and builds clear, fast, mobile-friendly websites that help businesses look professional and get contacted.
          </p>
          <div className="cta">
            <a className="btn" href="#work">View my work</a>
            <a className="btn outline" href="#contact">Let's talk</a>
          </div>
          <div className="scroll"><i />Scroll to explore</div>
        </div>

        <div className="mock" aria-hidden="true">
          <div className="dots"><i /><i /><i /></div>
          <div className="screen">
            <div className="mini-nav">
              <Logo size={18} />
              <span>Home</span><span>Services</span><span>Contact</span>
            </div>
            <div className="mini-title">Your business, online.</div>
            <div className="mini-text">Clear, fast and easy to contact.</div>
            <span className="mini-btn">Get in touch</span>
            <div className="tiles"><i>Design</i><i>Build</i><i>Launch</i></div>
          </div>
        </div>
      </div>
    </div>
  );
}