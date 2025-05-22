import React from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  cogOutline, 
  serverOutline, 
  logoDocker, 
  terminalOutline, 
  colorPaletteOutline, 
  desktopOutline,
  checkmarkOutline
} from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import Card from '../UI/Card/Card'
import { useI18n, FadeText } from '../../hooks/useI18n'
import styles from './Features.module.css'

const Features = () => {
  // Use framer-motion's useInView hook directly instead of our custom hook
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1,
    margin: "0px 0px -10% 0px"
  })
  const { translations } = useI18n()
  const t = translations.features

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  }
  
  const cardVariants = {
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

  return (
    <section id="features" className={`${styles.features} section-padding`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
          >
            <FadeText>
              <span dangerouslySetInnerHTML={{ __html: t.title }} />
            </FadeText>
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          >
            <FadeText>{t.description}</FadeText>
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.cards.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              custom={index}
            >
              <Card className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <IonIcon icon={[
                    cogOutline,
                    serverOutline,
                    logoDocker,
                    terminalOutline,
                    colorPaletteOutline,
                    desktopOutline
                  ][index]} />
                </div>
                <h3 className={styles.cardTitle}><FadeText>{feature.title}</FadeText></h3>
                <p className={styles.cardDescription}><FadeText>{feature.description}</FadeText></p>
                <ul className={styles.highlights}>
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className={styles.highlight}>
                      <span className={styles.highlightIcon}>
                        <IonIcon icon={checkmarkOutline} />
                      </span>
                      <FadeText>{highlight}</FadeText>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features