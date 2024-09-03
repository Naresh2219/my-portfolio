import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaJava, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiMysql, SiJenkins } from 'react-icons/si';

function Skills() {
    return (
        <section id="skills" style={{ padding: '40px 0', backgroundColor: '#3457' }}>
            <div className="skills-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Skills</h2>
                <div className="skills-content" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    <div className="skill-category" style={{ flex: '1 1 calc(25% - 20px)', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}><FaCode /> Frontend</h3>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FaHtml5 style={{ color: '#E34F26' }} />
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>HTML</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FaCss3Alt style={{ color: '#1572B6' }} />
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>CSS</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FaJs style={{ color: '#F7DF1E' }} />
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>JavaScript</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FaReact style={{ color: '#61DAFB' }} />
                                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>React</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FaAngular style={{ color: '#DD0031' }} />
                                <a href="https://angular.io/docs" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Angular</a>
                            </li>
                        </ul>
                    </div>
                    <div className="skill-category" style={{ flex: '1 1 calc(25% - 20px)', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}><FaServer /> Backend</h3>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FaNodeJs style={{ color: '#339933' }} />
                                <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Node.js</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <SiSpringboot style={{ color: '#6cc24a' }} />
                                <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Express</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FaJava style={{ color: '#007396' }} />
                                <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Java</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <SiSpringboot style={{ color: '#6DB33F' }} />
                                <a href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>SpringBoot</a>
                            </li>
                        </ul>
                    </div>
                    <div className="skill-category" style={{ flex: '1 1 calc(25% - 20px)', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}><FaDatabase /> Databases</h3>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <SiMongodb style={{ color: '#47A248' }} />
                                <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>MongoDB</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FaDatabase style={{ color: '#00758F' }} />
                                <a href="https://docs.microsoft.com/en-us/sql/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>SQL</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <SiMysql style={{ color: '#F29111' }} />
                                <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>MySQL</a>
                            </li>
                        </ul>
                    </div>
                    <div className="skill-category" style={{ flex: '1 1 calc(25% - 20px)', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}><FaTools /> Tools</h3>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FaGitAlt style={{ color: '#F05032' }} />
                                <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Git</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FaDocker style={{ color: '#2496ED' }} />
                                <a href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Docker</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <SiJenkins style={{ color: '#D24939' }} />
                                <a href="https://www.jenkins.io/doc/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Jenkins</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
