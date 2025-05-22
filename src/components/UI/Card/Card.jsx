import React from 'react'
import { motion } from 'framer-motion'
import styles from './Card.module.css'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  ...props 
}) => {
  const cardClass = `${styles.card} ${glow ? styles.glow : ''} ${className}`
  
  const hoverAnimation = hover ? {
    whileHover: { 
      y: -5,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  } : {}

  return (
    <motion.div
      className={cardClass}
      {...hoverAnimation}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card