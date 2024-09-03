import React from 'react';

function Experience() {
    return (
        <section id="experience" style={{ padding: '30px', backgroundColor: '#f5f5f5' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Experience</h2>
            <div className="experience-container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <div className="experience-item" style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    <h3>Full Stack Internship</h3>
                    <p>Completed a 6-month full stack internship focusing on Java development. Received certification for the internship.</p>
                    <p><strong>Duration:</strong> 6 months (Internship)</p>
                </div>
                <div className="experience-item" style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    <h3>AWS Coaching</h3>
                    <p>Completed 3 months of AWS coaching and received certification. Gained knowledge in AWS services and cloud infrastructure.</p>
                    <p><strong>Duration:</strong> 3 months (Certification)</p>
                </div>
                <div className="experience-item" style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    <h3>Associate at Wipro</h3>
                    <p>Currently working as an Associate at Wipro. Contributing to various projects and involved in both frontend and backend development.</p>
                    <p><strong>Duration:</strong> 3 months (Current)</p>
                </div>
            </div>
        </section>
    );
}

export default Experience;
