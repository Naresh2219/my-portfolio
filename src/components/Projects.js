import React from 'react';
import { FaNodeJs, FaJs, FaServer, FaReact, FaCss3Alt, FaCloudSun, FaPlay, FaClock } from 'react-icons/fa';

function Projects() {
    return (
        <section id="projects" style={{ padding: '30px', backgroundColor: '#f5f5f5' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Projects</h2>
            <div className="projects-container" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'space-between'
            }}>
                <div className="project-card" style={{
                    backgroundColor: '#f0f9ff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    flex: '1 1 calc(25% - 20px)',
                    margin: '10px',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <h3>Chat Application</h3>
                    <p>A real-time chat application built with Node.js and Socket.io. Users can join chat rooms and send messages in real time.</p>
                    <div className="project-details">
                        <h4>Technologies Used:</h4>
                        <ul className="tech-icons" style={{
                            listStyle: 'none',
                            padding: 0,
                            display: 'flex',
                            gap: '10px'
                        }}>
                            <li><FaNodeJs style={{ color: '#339933' }} title="Node.js" /></li>
                            <li><FaJs style={{ color: '#F7DF1E' }} title="JavaScript" /></li>
                            <li><FaServer style={{ color: '#1b9690' }} title="Socket.io" /></li>
                        </ul>
                        <a href="https://github.com/Naresh2219/ChatApplication" target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-block',
                            marginTop: '10px',
                            color: '#007bff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0056b3'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#007bff'}
                        >View on GitHub</a>
                    </div>
                </div>
                <div className="project-card" style={{
                    backgroundColor: '#fffbf0',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    flex: '1 1 calc(25% - 20px)',
                    margin: '10px',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <h3>Music Application</h3>
                    <p>A music player with features like play/pause, stop, and playlist management. Designed to resemble Spotify's interface.</p>
                    <div className="project-details">
                        <h4>Technologies Used:</h4>
                        <ul className="tech-icons" style={{
                            listStyle: 'none',
                            padding: 0,
                            display: 'flex',
                            gap: '10px'
                        }}>
                            <li><FaReact style={{ color: '#61DAFB' }} title="React" /></li>
                            <li><FaJs style={{ color: '#F7DF1E' }} title="JavaScript" /></li>
                            <li><FaCss3Alt style={{ color: '#1572B6' }} title="CSS" /></li>
                        </ul>
                        <a href="https://github.com/Naresh2219/MusicApplication" target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-block',
                            marginTop: '10px',
                            color: '#007bff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0056b3'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#007bff'}
                        >View on GitHub</a>
                    </div>
                </div>
                <div className="project-card" style={{
                    backgroundColor: '#f0fff4',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    flex: '1 1 calc(25% - 20px)',
                    margin: '10px',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <h3>Weather Application</h3>
                    <p>A weather application that provides real-time weather updates and forecasts using the OpenWeather API.</p>
                    <div className="project-details">
                        <h4>Technologies Used:</h4>
                        <ul className="tech-icons" style={{
                            listStyle: 'none',
                            padding: 0,
                            display: 'flex',
                            gap: '10px'
                        }}>
                            <li><FaReact style={{ color: '#61DAFB' }} title="React" /></li>
                            <li><FaJs style={{ color: '#F7DF1E' }} title="JavaScript" /></li>
                            <li><FaCloudSun style={{ color: '#FFA500' }} title="API Integration" /></li>
                        </ul>
                        <a href="https://github.com/Naresh2219/WeatherApplication" target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-block',
                            marginTop: '10px',
                            color: '#007bff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0056b3'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#007bff'}
                        >View on GitHub</a>
                    </div>
                </div>
                <div className="project-card" style={{
                    backgroundColor: '#fff0f4',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    flex: '1 1 calc(25% - 20px)',
                    margin: '10px',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <h3>Timer Application</h3>
                    <p>A timer application that allows users to set countdowns, start, pause, and reset timers with a simple interface.</p>
                    <div className="project-details">
                        <h4>Technologies Used:</h4>
                        <ul className="tech-icons" style={{
                            listStyle: 'none',
                            padding: 0,
                            display: 'flex',
                            gap: '10px'
                        }}>
                            <li><FaJs style={{ color: '#F7DF1E' }} title="JavaScript" /></li>
                            <li><FaClock style={{ color: '#1572B6' }} title="CSS" /></li>
                            <li><FaPlay style={{ color: '#FF6347' }} title="User Interface" /></li>
                        </ul>
                        <a href="https://github.com/Naresh2219/TimerApplication" target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-block',
                            marginTop: '10px',
                            color: '#007bff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0056b3'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#007bff'}
                        >View on GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;