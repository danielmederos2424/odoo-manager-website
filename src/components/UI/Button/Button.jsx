import React from 'react'
import { motion } from 'framer-motion'
import styles from './Button.module.css'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  href,
  download,
  className = '',
  icon: Icon,
  ...props 
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`
  
  const buttonProps = {
    className: buttonClass,
    onClick,
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
    ...props
  }

  const content = (
    <>
      {Icon && <Icon className={styles.icon} />}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        {...buttonProps}
        target={download ? '_self' : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button {...buttonProps}>
      {content}
    </motion.button>
  )
}

export default Button