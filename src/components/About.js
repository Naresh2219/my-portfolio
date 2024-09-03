import React from "react";
import img from "./photos/img1.jpg";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function About() {
    return (
        <section id="About" style={{ backgroundColor: "#f9f9f9", padding: "40px 20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>About</h1>
            <div className="about-container" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                padding: "20px",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}>
                <div className="profile-wrapper" style={{ 
                    position: "relative",
                    flex: "0 0 30%", 
                }}>
                    <img 
                        src={img} 
                        alt="Naresh" 
                        className="profile-pic" 
                        style={{ 
                            width: "300px", 
                            height: "300px", 
                            borderRadius: "50%", 
                            border: "2px solid #007bff", 
                            boxShadow: "0 0 10px rgba(0,0,0,0.5)" 
                        }} 
                    />
                </div>
                <div className="about-text" style={{ 
                    flex: "1", 
                    paddingLeft: "40px", 
                    fontSize: "18px",
                    lineHeight: "1.6",
                    color: "#333",
                }}>
                    <p>Hello! I'm <strong>Naresh</strong>, a passionate <strong>Full Stack Developer</strong> with a strong drive for building dynamic, user-focused web applications.</p>
                    <p>I specialize in both frontend and backend technologies, enabling me to craft seamless and efficient digital experiences.</p>
                    <p>My work is characterized by a commitment to high standards and attention to detail. I strive to stay ahead of industry trends by continuously learning new technologies and refining my skill set. Whether it's designing intuitive interfaces or developing robust backend systems, my goal is to deliver solutions that not only meet technical requirements but also provide exceptional user experiences.</p>
                </div>
            </div>
            <div className="social-media" style={{ marginTop: "40px", textAlign: "center" }}>
                <a 
                    href="https://www.linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon linkedin" 
                    title="LinkedIn" 
                    style={{ 
                        margin: "0 20px", 
                        color: "#0077b5",
                        transition: "color 0.3s, transform 0.3s",
                        display: "inline-block"
                    }}
                >
                    <FaLinkedin size={30} />
                </a>
                <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon github" 
                    title="GitHub" 
                    style={{ 
                        margin: "0 20px", 
                        color: "#333",
                        transition: "color 0.3s, transform 0.3s",
                        display: "inline-block"
                    }}
                >
                    <FaGithub size={30} />
                </a>
                <a 
                    href="https://twitter.com/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon twitter" 
                    title="Twitter" 
                    style={{ 
                        margin: "0 20px", 
                        color: "#1da1f2",
                        transition: "color 0.3s, transform 0.3s",
                        display: "inline-block"
                    }}
                >
                    <FaTwitter size={30} />
                </a>
                <a 
                    href="https://www.instagram.com/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon instagram" 
                    title="Instagram" 
                    style={{ 
                        margin: "0 20px", 
                        color: "#e1306c",
                        transition: "color 0.3s, transform 0.3s",
                        display: "inline-block"
                    }}
                >
                    <FaInstagram size={30} />
                </a>
            </div>
        </section>
    );
}

export default About;
