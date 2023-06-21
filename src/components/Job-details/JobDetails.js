import React from 'react';
import {useParams,Link} from "react-router-dom";
import jobs from "../../data/data";
const JobDetails = () =>
{
    const {position} = useParams()
     const job =jobs.find(job => job.position === position)


    return <section>

        <div className="container">
            
                <div className="details__top">
                <div className='logo-wrapper'>
                <img src={job.logo} alt='' />
                    <div className='name-wrapper'>
                        <h1>{job.company}</h1>
                        <p>{job.companySite}</p>
                        </div>
                    </div>

                    <button className='btn site'>
                        <Link to={job.companySite}>Company Site</Link>
                    </button>
                </div>
                <div className="details__wrapper">
                <div className="job__details">
                    <div className="about__job">
                        <div>
                            <p>{job.postedAt} . {job.contract}</p>
                            <h1>{job.position}</h1>
                            <h6>{job.location}</h6>
                        </div>
                        <button className='btn'>Apply Now</button>
                    </div>
                    <p className='job__desc'>{job.desc}</p>
                    <div className='requirements'>
                    <h2>Requirements</h2>
                    <p>{job.requirements.reqTitle}</p>

                    <ul className='requirement__item'>
                        {
                            job.requirements.reqItem.map((item,index) =>(
                                <li key={index}>{item}</li>
                            ))
                        }

                    </ul>

                    </div>


                    <div className='responsibility'>
                    <h2>What you will do?</h2>
                    <p>{job.responsibility.resTitle}</p>

                    <ol className='responsibility__item'>
                        {
                            job.responsibility.resItem.map((item,index) =>(
                                <li key={index}>{item}</li>
                            ))
                        }

                    </ol>

                    </div>


                </div>
            </div>
            <footer className='footer'>
                    <div className='name-comp'>
                        <h2>{job.position}</h2>
                        <p>{job.company}</p>
                    </div>
                    <button className='btn Apply-footer'>Apply Now</button>
                </footer>
        </div>

    </section>
}
export default JobDetails;