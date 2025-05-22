import React from 'react'
import { motion, useInView } from 'framer-motion'
import { logoDocker, serverOutline, desktopOutline, languageOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import Button from '../UI/Button/Button'
import { useI18n, FadeText } from '../../hooks/useI18n'
import styles from './Hero.module.css'

const Hero = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1
  })
  const { lang, setLang, translations } = useI18n()
  const t = translations.hero

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
      
      <div className={styles.languageSwitcher}>
        <div 
          className={`${styles.langButton} ${lang === 'en' ? styles.active : ''}`} 
          onClick={() => setLang('en')}
          aria-label="Switch to English"
        >
          EN
        </div>
        <div 
          className={`${styles.langButton} ${lang === 'es' ? styles.active : ''}`} 
          onClick={() => setLang('es')}
          aria-label="Switch to Spanish"
        >
          ES
        </div>
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
              <FadeText>{t.title}</FadeText>
            </h1>
          </motion.div>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            <FadeText>{t.subtitle}</FadeText>
          </motion.p>

          <motion.p className={styles.description} variants={itemVariants}>
            <FadeText>{t.description}</FadeText>
          </motion.p>

          <motion.div className={styles.buttons} variants={itemVariants}>
            <Button 
              variant="primary" 
              size="large"
              onClick={scrollToDownloads}
            >
              <FadeText>{t.download}</FadeText>
            </Button>
            <Button 
              variant="outline" 
              size="large"
              href="https://github.com/danielmederos2424/odoo-manager"
            >
              <FadeText>{t.github}</FadeText>
            </Button>
          </motion.div>

          <motion.div className={styles.features} variants={itemVariants}>
            {t.features.map((feature, idx) => (
              <div className={styles.feature} key={feature.icon}>
                <div className={styles.featureIcon}>
                  <IonIcon icon={feature.icon === 'logoDocker' ? logoDocker : feature.icon === 'serverOutline' ? serverOutline : desktopOutline} />
                </div>
                <FadeText>{feature.label}</FadeText>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero