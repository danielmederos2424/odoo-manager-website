import React, { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useI18n, FadeText } from '../../hooks/useI18n'
import styles from './Screenshots.module.css'

const Screenshots = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1,
    margin: "0px 0px -10% 0px"
  })
  
  const [selectedImage, setSelectedImage] = useState(0)
  const { translations } = useI18n()
  const t = translations.screenshots

  const screenshots = [
    {
      src: '/screenshots/main_dashboard.png',
      title: t.items[0].title,
      description: t.items[0].description
    },
    {
      src: '/screenshots/instance_creation.png',
      title: t.items[1].title,
      description: t.items[1].description
    },
    {
      src: '/screenshots/container_logs.png',
      title: t.items[2].title,
      description: t.items[2].description
    },
    {
      src: '/screenshots/settings.png',
      title: t.items[3].title,
      description: t.items[3].description
    }
  ]

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 }, 
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="screenshots" className={`${styles.screenshots} section-padding`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
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
        </div>

        <div className={styles.content}>
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={screenshots[selectedImage].src}
                  alt={screenshots[selectedImage].title}
                  className={styles.mainImage}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div 
            className={styles.thumbnails}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                className={`${styles.thumbnail} ${
                  selectedImage === index ? styles.active : ''
                }`}
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  y: isInView ? 0 : 10 
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut",
                  delay: 0.5 + (index * 0.06) 
                }}
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.title}
                  className={styles.thumbnailImage}
                />
                <div className={styles.thumbnailContent}>
                  <h4 className={styles.thumbnailTitle}><FadeText>{screenshot.title}</FadeText></h4>
                  <p className={styles.thumbnailDescription}>
                    <FadeText>{screenshot.description}</FadeText>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Screenshots