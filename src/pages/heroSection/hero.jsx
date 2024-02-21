import React, { useEffect } from 'react'
import './hero.css'
import CountUp from "react-countup";
import { motion, useInView, useAnimation } from 'framer-motion'

const Hero = () => {
    // const ref = useRef()
    return (
        <section className="hero-wrapper">
            <div className="hero-container">
                <div className=" hero-left">
                    <motion.div className="hero-title"
                        variants={{
                            hidden: { opacity: 0, x: -300 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 2 }}
                    >
                        <div className="orange-circle" />
                        <div className="blue-circle" />
                        <h1 className='discover'>Discover <br />Most Suitable <br />Products For You!</h1>
                    </motion.div>
                    <div className="flexColStart hero-desc">
                        <motion.p
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 3 }}
                        >
                            Find a variety of products that you want very easilty <br />
                            Forget all difficulties in finding the item for you.</motion.p>
                    </div>

                    <motion.div className="stats" style={{ padding: '2rem' }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 3 }}
                    >
                        <div className="stat">
                            <div>
                                <CountUp start={900} end={8982} duration={3} />
                                <h4> &nbsp;+</h4>
                            </div>
                            <span>Premium Products</span>
                        </div>
                        <div className="stat">
                            <div>
                                <CountUp start={1523} end={2579} duration={3} />
                                <h4> &nbsp;+</h4>
                            </div>
                            <span >Happy Customers</span>
                        </div>
                        <div className="stat">
                            <div>
                                <CountUp start={1} end={28} duration={3} />
                                <h4> &nbsp;+</h4>
                            </div>
                            <span >Award Winning</span>
                        </div>
                    </motion.div>

                </div >

                <div className="hero-right">
                    <motion.div className="image-container"
                        variants={{
                            hidden: { opacity: 0, x: 500 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.5 }}
                    >
                        <img src="hero-image.png" alt="" />
                    </motion.div>
                </div>

            </div >
        </section >
    )
}

export default Hero
