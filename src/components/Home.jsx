import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,
        AiFillAmazonCircle,
        AiFillYoutube,
        AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return ( 
    <>
          <div className="home" id="home">
            <main>
                <h1>TechnoMinds</h1>
                <p>Solution to all Your Problems</p>
            </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics"/>

                <div>
                    <p>
                        we are your one and only solution to the tech Problems
                        you face
                        every day. we are leading tech company whose aim is to 
                        increase the 
                        problems sovling ability in children..
                    </p>
                </div>
            </div>

            <div className='home3' id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>A tech consultant, often referred to as an IT consultant, specializes in evaluating, implementing, and managing technology solutions for businesses. These professionals leverage their deep understanding of both business operations and technological trends to advise clients on how to optimize their IT infrastructure, implement new systems, or transition to advanced digital solutions. Whether it's integrating a new software platform, bolstering cybersecurity, migrating to the cloud, or digital transformation at large, tech consultants play a pivotal role. Their insights often bridge the gap between a company's current operations and its potential for innovation, ensuring that technology is not just an addition, but an enhancer of business strategy and growth. In an age of rapid technological advancements, the expertise of tech consultants remains invaluable, helping businesses navigate the complexities of the digital world and remain competitive.</p>
                </div>
            </div>

            <div className='home4' id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay:"0.3s",
                        }}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay:"0.5s",
                        }}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay:"0.7s",
                        }}>
                            <AiFillYoutube/>
                            <p>Youtune</p>
                        </div>

                        <div style={{
                            animationDelay:"0.1s",
                        }}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>

                    </article>
                </div>
            </div>
    </>
  );
}

export default Home ;