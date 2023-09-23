import React from 'react';
import "./footer.css";
import fb from './Socials/fb.png';
import insta from './Socials/insta.png';
import linkedin from './Socials/linkedin.png';
import twitter from './Socials/twitter.png';

const Footer = () => {
  return (
    <div className="footer">
        <div className="sb__footer section__padding">
            <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                    <h4>Software Engineers</h4>
                    <a target="_blank" href="https://www.linkedin.com/in/atmichaelvan/">
                        <p>Michael Van</p>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/colin-sampey/">
                        <p>Colin Sampey</p>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/ubermensch/">
                        <p>Ian Olmstead</p>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/benjamin-j-burnham">
                        <p>Benjamin Burnham</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Academic Sponsors</h4>
                    <a target="_blank" href="https://engineering.uiowa.edu/">
                        <p>College of Engineering</p>
                    </a>
                    <a target="_blank" href="https://tippie.uiowa.edu/">
                        <p>Tippie College of Business</p>
                    </a>
                    <a target="_blank" href="https://iowajpec.org/">
                        <p>John Pappajohn Entrepreneurial Center</p>
                    </a>
                    <a target="_blank" href="https://engineering.uiowa.edu/ece">
                        <p>Electrical and Computer Engineering</p>
                    </a>
                    <a target="_blank" href="https://engineering.uiowa.edu/departments/industrial-and-systems-engineering">
                        <p>Industrial and Systems Engineering</p>
                    </a>
                    <a target="_blank" href="https://stat.uiowa.edu/">
                        <p>Department of Statistics and Actualial Science</p>
                    </a>
                    <a target="_blank" href="https://its.uiowa.edu/">
                        <p>Information Technology Services</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Industry Sponsors</h4>
                    <a target="_blank" href="https://cs.uiowa.edu/scholarships">
                        <p>Jason and Leslie Weber Scholarship</p>
                    </a>
                    <a target="_blank" href="https://www.deere.com/en/">
                        <p>John Deere</p>
                    </a>
                    <a target="_blank" href="https://www.leepfrog.com/careers/">
                        <p>Leepfrog</p>
                    </a>
                    <a target="_blank" href="https://www.statefarm.com/">
                        <p>State Farm</p>
                    </a>
                    <a target="_blank" href="https://mlh.io/seasons/2024/events">
                        <p>Major League Hacking</p>
                    </a>
                    <a target="_blank" href="https://www.standoutstickers.com/?utm_campaign=events-league-organizers-fall2023&utm_medium=email&utm_source=customerio-zoho_creator_-_standout_sticker_intro">
                        <p>Stand Out Stickers</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Partners & Supporters</h4>
                    <a target="_blank" href="https://www.iihr.uiowa.edu/">
                        <p>IOWA IIHR—Hydroscience & Engineering</p>
                    </a>
                    <a target="_blank" href="https://cs.uiowa.edu/">
                        <p>IOWA Department of Computer Science</p>
                    </a>
                    <a target="_blank" href="https://engineering.uiowa.edu/cee">
                        <p>IOWA Civil and Environmental Engineering</p>
                    </a>
                    <a target="_blank" href="https://physics.uiowa.edu/">
                        <p>IOWA Department of Physics and Astronomy</p>
                    </a>
                    <a target="_blank" href="https://www.rockwellcollins.com/">
                        <p>Collins Aerospace</p>
                    </a>
                    <a target="_blank" href="https://www.kirkwood.edu/">
                        <p>Kirkwood Community College</p>
                    </a>
                </div>

                <div className="sb__footer-links_div">
                    <h4>Social Media</h4>
                    <div className="socialmedia">
                        <p><img className="socialIcon" src={fb} alt="" /></p>
                        <p><img className="socialIcon" src={twitter} alt="" /></p>
                        <p><img className="socialIcon" src={linkedin} alt="" /></p>
                        <p><img className="socialIcon" src={insta} alt="" /></p>
                    </div>
                </div>
            </div>

        <hr></hr>

        <div className="sb__footer-below">
            <div className="sb__footer-copyright">
                <p>
                    @{new Date().getFullYear()} Explosive Shells. All right reserved.
                </p>
            </div>
            <div className="sb__footer-below-links">
                <a><div><p>Terms & Conditions</p></div></a>
                <a><div><p>Privacy</p></div></a>
                <a><div><p>Security</p></div></a>
                <a><div><p>Cookie Declaration</p></div></a>
            </div>
        </div>

        </div>
    </div>
  );
};

export default Footer;
