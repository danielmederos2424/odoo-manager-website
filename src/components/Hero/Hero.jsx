import React from 'react'
import { motion, useInView } from 'framer-motion'
import { logoDocker, serverOutline, desktopOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import Button from '../UI/Button/Button'
import styles from './Hero.module.css'

const Hero = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
        delayChildren: 0.1,    
        when: "beforeChildren"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    }
  }

  const scrollToDownloads = () => {
    document.getElementById('downloads').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero} ref={ref}>
      <div className={styles.background}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.gradient3}></div>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
          <div className={styles.shape4}></div>
        </div>
        <div className={styles.particles}></div>
        <div className={styles.grid}></div>
      </div>
      
      <div className="container">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className={styles.logo} variants={itemVariants}>
            <img src="/logo.svg" alt="Odoo Manager" />
            <h1 className={styles.title}>
              <span className="text-gradient">Odoo Manager</span>
            </h1>
          </motion.div>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            A Modern Desktop Application for Managing Odoo Instances with Docker
          </motion.p>

          <motion.p className={styles.description} variants={itemVariants}>
            Simplify the creation, management, and maintenance of Odoo instances using Docker Compose. 
            Perfect for developers, system administrators, and businesses who want to run multiple 
            Odoo environments locally without dealing with complex Docker commands.
          </motion.p>

          <motion.div className={styles.buttons} variants={itemVariants}>
            <Button 
              variant="primary" 
              size="large"
              onClick={scrollToDownloads}
            >
              Download Now
            </Button>
            <Button 
              variant="outline" 
              size="large"
              href="https://github.com/danielmederos2424/odoo-manager"
            >
              View on GitHub
            </Button>
          </motion.div>

          <motion.div className={styles.features} variants={itemVariants}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <IonIcon icon={logoDocker} />
              </div>
              <span>Docker Integration</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <IonIcon icon={serverOutline} />
              </div>
              <span>PostgreSQL Management</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <IonIcon icon={desktopOutline} />
              </div>
              <span>Cross-Platform</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero