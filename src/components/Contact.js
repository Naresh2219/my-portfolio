import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact" style={{ padding: '30px', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Contact</h2>
            <p style={{ marginBottom: '20px' }}>You can reach me via the following channels:</p>
            <div className="contact-links" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
            }}>
                <a href="mailto:your.cn818280@gmail.com" className="contact-link" style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '16px',
                    fontWeight: '500'
                }}>
                    <FaEnvelope style={{ marginRight: '8px', color: '#d44638' }} />
                    Email
                </a>
                <a href="https://www.linkedin.com/in/naresh-challa-012b62191" target="_blank" rel="noopener noreferrer" className="contact-link" style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '16px',
                    fontWeight: '500'
                }}>
                    <FaLinkedin style={{ marginRight: '8px', color: '#0077b5' }} />
                    LinkedIn
                </a>
                <a href="https://github.com/Naresh2219" target="_blank" rel="noopener noreferrer" className="contact-link" style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '16px',
                    fontWeight: '500'
                }}>
                    <FaGithub style={{ marginRight: '8px', color: '#333' }} />
                    GitHub
                </a>
                <a href="https://wa.me/+917095432678" target="_blank" rel="noopener noreferrer" className="contact-link" style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '16px',
                    fontWeight: '500'
                }}>
                    <FaWhatsapp style={{ marginRight: '8px', color: '#25D366' }} />
                    WhatsApp
                </a>
            </div>
        </section>
    );
}

export default Contact;
