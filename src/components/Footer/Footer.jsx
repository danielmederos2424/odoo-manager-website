import React from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  logoGithub, 
  logoTwitter, 
  logoLinkedin, 
  globeOutline,
  heartOutline,
  logoInstagram,
  logoFacebook
} from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import styles from './Footer.module.css'

const Footer = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.05
  })

  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Screenshots', href: '#screenshots' },
      { name: 'Downloads', href: '#downloads' },
      { name: 'Documentation', href: 'https://github.com/danielmederos2424/odoo-manager#readme' }
    ],
    support: [
      { name: 'GitHub Issues', href: 'https://github.com/danielmederos2424/odoo-manager/issues' },
      { name: 'Bug Reports', href: 'https://github.com/danielmederos2424/odoo-manager/issues/new?template=bug_report.md' },
      { name: 'Feature Requests', href: 'https://github.com/danielmederos2424/odoo-manager/issues/new?template=feature_request.md' },
      { name: 'Discussions', href: 'https://github.com/danielmederos2424/odoo-manager/discussions' }
    ],
    company: [
      { name: 'WebGraphix', href: 'https://www.webgraphix.online' },
      { name: 'Contact', href: 'mailto:contact@webgraphix.online' },
      { name: 'Privacy Policy', href: 'https://www.webgraphix.online/privacy' },
      { name: 'Terms of Service', href: 'https://www.webgraphix.online/terms' }
    ]
  }

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/danielmederos2424', icon: logoGithub },
    { name: 'Twitter', href: 'https://twitter.com/webgraphix', icon: logoTwitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/webgraphix', icon: logoLinkedin },
    { name: 'Instagram', href: 'https://instagram.com/webgraphix', icon: logoInstagram },
    { name: 'Facebook', href: 'https://facebook.com/webgraphix', icon: logoFacebook },
    { name: 'Website', href: 'https://www.webgraphix.online', icon: globeOutline }
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
              Simplifying Odoo instance management with modern tools and intuitive design.
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
              <h4 className={styles.linkTitle}>Product</h4>
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
                      {link.name}
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
              <h4 className={styles.linkTitle}>Support</h4>
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
                      {link.name}
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
              <h4 className={styles.linkTitle}>Company</h4>
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
                      {link.name}
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
            <p>© 2025 WebGraphix. All rights reserved.</p>
            <p className={styles.attribution}>
              Odoo is a trademark of Odoo S.A. This tool is not officially associated with Odoo S.A.
            </p>
          </div>
          <div className={styles.credits}>
            <p>Made with <IonIcon icon={heartOutline} /> for the Odoo community</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer