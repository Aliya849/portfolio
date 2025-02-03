import React from 'react'
import Navbar from './Navbar'

function Education() {
  return (
    <div>
    <Navbar/>
    <section className="education" id="education">
        <h3 className="heading">Here is my Journey of Education</h3> 
            <div className="timeline-items">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                           
                            <h3>BCA</h3>
                            <p>[BACHELOR OF COMPUTER APPLICATIONS]
                                Persuing my Bachelor's Degree from the ICCA[Interface College of Computer Applications] College affilated to DAVANGERE UNIVERSITY.
                            </p>
                        </div>
                    
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">2022</div>
                        <div className="timeline-content">
                            <h3>PUC</h3>
                            <p>[PRE-UNIVERSITY COURSE]
                                Passed PUC in the year 2022 with a percentage of 73% with the combination of PCMB from the St.Aloysius PU COLLEGE, Amaravathi Colony, Harihar.
                            </p>
                        </div>
                 
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"> </div>
                        <div className="timeline-date">2020</div>
                        <div className="timeline-content">
                        <h3>SSLC</h3>
                            <p>[Secondary School Living Certificate]
                                Passed SSLC in the year 2020 with a percentage of 87% in KARNATAKA STATE BOARD from School Sri Giri Raja HIGH SCHOOL,Davangere.
                            </p>
                        </div>
                </div>
            </div>
   
     </section>
    </div>
  )
}

export default Education
