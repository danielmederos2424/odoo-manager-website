import React from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  logoGithub, 
  logoTwitter, 
  logoLinkedin, 
  heartOutline,
  logoInstagram,
  logoFacebook
} from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import { useI18n, FadeText } from '../../hooks/useI18n'
import styles from './Footer.module.css'

const Footer = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.05
  })
  
  const { translations } = useI18n()
  const t = translations.footer
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: t.product, href: '#features' },
      { name: 'Screenshots', href: '#screenshots' },
      { name: 'Downloads', href: '#downloads' },
      { name: 'Documentation', href: 'https://github.com/danielmederos2424/odoo-manager#readme' }
    ],
    support: [
      { name: t.support, href: 'https://github.com/danielmederos2424/odoo-manager/issues' },
      { name: 'Bug Reports', href: 'https://github.com/danielmederos2424/odoo-manager/issues/new?template=bug_report.md' },
      { name: 'Feature Requests', href: 'https://github.com/danielmederos2424/odoo-manager/issues/new?template=feature_request.md' },
      { name: 'Discussions', href: 'https://github.com/danielmederos2424/odoo-manager/discussions' }
    ],
    company: [
      { name: t.company, href: 'https://www.webgraphix.online' },
      { name: 'Contact', href: 'mailto:info@webgraphix.online' }
    ]
  }

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/danielmederos2424', icon: logoGithub },
    { name: 'Twitter', href: 'https://x.com/mederos_dev', icon: logoTwitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/danielmederos2424', icon: logoLinkedin },
    { name: 'Instagram', href: 'https://instagram.com/webgraphix.online', icon: logoInstagram },
    { name: 'Facebook', href: 'https://facebook.com/webgraphix.online', icon: logoFacebook }
  ]

  return (
    <footer className={styles.footer} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className={styles.brand}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.logo}>
              <img src="/logo.svg" alt="Odoo Manager" />
              <h3 className={styles.brandName}>Odoo Manager</h3>
            </div>
            <p className={styles.brandDescription}>
              <FadeText>{t.brandDesc}</FadeText>
            </p>
            <div className={styles.social}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.socialIcon}>
                    <IonIcon icon={social.icon} />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className={styles.links}>
            <motion.div 
              className={styles.linkSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className={styles.linkTitle}><FadeText>{t.product}</FadeText></h4>
              <ul className={styles.linkList}>
                {links.product.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                  >
                    <a
                      href={link.href}
                      className={styles.link}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <FadeText>{link.name}</FadeText>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className={styles.linkSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className={styles.linkTitle}><FadeText>{t.support}</FadeText></h4>
              <ul className={styles.linkList}>
                {links.support.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                  >
                    <a
                      href={link.href}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FadeText>{link.name}</FadeText>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className={styles.linkSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className={styles.linkTitle}><FadeText>{t.company}</FadeText></h4>
              <ul className={styles.linkList}>
                {links.company.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + (index * 0.05) }}
                  >
                    <a
                      href={link.href}
                      className={styles.link}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <FadeText>{link.name}</FadeText>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.bottom}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className={styles.copyright}>
            <p>
              &copy; {currentYear} WebGraphix. <FadeText>{t.copyright}</FadeText>
            </p>
            <p className={styles.attribution}>
              <FadeText>{t.attribution}</FadeText>
            </p>
          </div>
          <div className={styles.credits}>
            <p><FadeText>{t.credits.replace('<0/>', '♥')}</FadeText></p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer