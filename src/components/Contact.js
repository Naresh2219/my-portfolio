import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact" style={{ padding: '30px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px', fontSize: '2rem', color: '#333' }}>Contact</h2>
            <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: '#555' }}>You can reach me via the following channels:</p>
            <div className="contact-links" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
            }}>
                <a href="mailto:your.cn818280@gmail.com" className="contact-link" style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '18px',
                    fontWeight: '500',
                    transition: 'color 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#d44638'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
                >
                    <FaEnvelope style={{ marginRight: '10px', color: '#d44638' }} />
                    Email
                </a>
                <a href="https://www.linkedin.com/in/naresh-challa-012b62191" target="_blank" rel="noopener noreferrer" className="contact-link" style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '18px',
                    fontWeight: '500',
                    transition: 'color 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0077b5'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
                >
                    <FaLinkedin style={{ marginRight: '10px', color: '#0077b5' }} />
                    LinkedIn
                </a>
                <a href="https://github.com/Naresh2219" target="_blank" rel="noopener noreferrer" className="contact-link" style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '18px',
                    fontWeight: '500',
                    transition: 'color 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#333'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
                >
                    <FaGithub style={{ marginRight: '10px', color: '#333' }} />
                    GitHub
                </a>
                <a href="https://wa.me/+917095432678" target="_blank" rel="noopener noreferrer" className="contact-link" style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '18px',
                    fontWeight: '500',
                    transition: 'color 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#25D366'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
                >
                    <FaWhatsapp style={{ marginRight: '10px', color: '#25D366' }} />
                    WhatsApp
                </a>
            </div>
        </section>
    );
}

export default Contact;
