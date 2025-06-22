import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../../hooks/useI18n'
import styles from './Sponsors.module.css'

const Sponsors = () => {
  const { t } = useI18n()

  return (
    <section className={styles.sponsors}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>{t('sponsors', 'title')}</h2>
          <div className={styles.sponsorsList}>
            <div className={styles.sponsor}>
              <img 
                src="/termius-icon-1024.png" 
                alt="Termius" 
                className={styles.sponsorLogo}
              />
              <p className={styles.sponsorDescription}>
                <a 
                  href="https://termius.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.sponsorLink}
                >
                  Termius
                </a>{' '}
                {t('sponsors', 'termius').description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sponsors