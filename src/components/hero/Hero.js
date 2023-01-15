import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Hero = () => {
  const transition ={ duration: 3, type: "spring" }
  return (
    <div className={css.container}>
        <div className={css.wrapper}>
            <motion.div 
                initial={{bottom:'2rem'}}
                whileInView={{bottom:'0rem'}}
                className={css.blueCircle}
                transition={transition}
            ></motion.div>
            <motion.img 
                initial={{bottom:"-2rem"}}
                whileInView={{bottom:"0rem"}}
                transition={transition}
                src={HeroImg} 
                alt="" 
                width={600} 
            />
            <motion.div 
                initial={{right:"-8%"}}
                whileInView={{right:"-10%"}}
                transition={transition}
                className={css.cart}>
                <RiShoppingBagFill />
                <div className={css.signup}>
                    <span>Best Signup Offer</span>
                    <div>
                        <BsArrowRight />
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero