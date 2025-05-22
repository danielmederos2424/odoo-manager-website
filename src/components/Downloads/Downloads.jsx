import React from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import { 
  logoWindows, 
  logoApple, 
  logoTux, 
  logoDocker, 
  buildOutline, 
  saveOutline, 
  constructOutline 
} from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import styles from './Downloads.module.css'

const Downloads = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.05,
    margin: "0px 0px -10% 0px"
  })
  
  const downloads = [
    {
      platform: 'Windows',
      icon: logoWindows,
      version: 'Windows 10/11',
      size: '~85 MB',
      format: '.exe',
      url: 'https://github.com/webgraphix/odoo-manager/releases/latest/download/odoo-manager-win.exe',
      description: 'Native Windows installer with automatic updates'
    },
    {
      platform: 'macOS',
      icon: logoApple,
      version: 'macOS 10.14+',
      size: '~92 MB',
      format: '.dmg',
      url: 'https://github.com/webgraphix/odoo-manager/releases/latest/download/odoo-manager-mac.dmg',
      description: 'Universal binary supporting Intel and Apple Silicon'
    },
    {
      platform: 'Linux',
      icon: logoTux,
      version: 'Ubuntu 18.04+',
      size: '~88 MB',
      format: '.AppImage',
      url: 'https://github.com/webgraphix/odoo-manager/releases/latest/download/odoo-manager-linux.AppImage',
      description: 'Portable AppImage that runs on most Linux distributions'
    }
  ]

  const requirements = [
    {
      icon: logoDocker,
      title: 'Docker',
      description: 'Docker Desktop or Docker Engine installed and running'
    },
    {
      icon: buildOutline,
      title: 'Docker Compose',
      description: 'Docker Compose for container orchestration'
    },
    {
      icon: saveOutline,
      title: 'Storage',
      description: 'At least 2GB free disk space for instances'
    },
    {
      icon: constructOutline,
      title: 'Permissions',
      description: 'Administrator/sudo access for Docker operations'
    }
  ]

  return (
    <section id="downloads" className={`${styles.downloads} section-padding`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Download <span className="text-gradient">Odoo Manager</span>
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get started with Odoo Manager on your preferred platform. All downloads include automatic updates.
          </motion.p>
        </div>

        <div className={styles.downloadGrid}>
          {downloads.map((download, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                y: isInView ? 0 : 10 
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + (index * 0.15) 
              }}
            >
              <Card className={styles.downloadCard} glow>
                <div className={styles.cardHeader}>
                  <div className={styles.platformIcon}>
                    <IonIcon icon={download.icon} />
                  </div>
                  <div className={styles.platformInfo}>
                    <h3 className={styles.platformName}>{download.platform}</h3>
                    <p className={styles.platformVersion}>{download.version}</p>
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>{download.description}</p>
                  
                  <div className={styles.downloadDetails}>
                    <span className={styles.downloadSize}>{download.size}</span>
                    <span className={styles.downloadFormat}>{download.format}</span>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <Button 
                    variant="primary" 
                    size="large"
                    href={download.url}
                    download
                    className={styles.downloadButton}
                  >
                    Download for {download.platform}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className={styles.requirements}>
          <motion.h3 
            className={styles.requirementsTitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            System Requirements
          </motion.h3>
          <motion.div 
            className={styles.requirementsGrid}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {requirements.map((req, index) => (
              <motion.div 
                key={index} 
                className={styles.requirement}
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 1 + (index * 0.1) }}
              >
                <div className={styles.requirementIcon}>
                  <IonIcon icon={req.icon} />
                </div>
                <div className={styles.requirementContent}>
                  <h4 className={styles.requirementTitle}>{req.title}</h4>
                  <p className={styles.requirementDescription}>{req.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className={styles.additionalInfo}>
          <motion.div 
            className={styles.infoCard}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Card className={styles.sourceCard}>
              <h4 className={styles.sourceTitle}>Open Source</h4>
              <p className={styles.sourceDescription}>
                Odoo Manager is open source software. View the code, contribute, or report issues on GitHub.
              </p>
              <Button 
                variant="outline" 
                href="https://github.com/danielmederos2424/odoo-manager"
                className={styles.sourceButton}
              >
                View Source Code
              </Button>
            </Card>
          </motion.div>
          
          <motion.div 
            className={styles.infoCard}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Card className={styles.supportCard}>
              <h4 className={styles.supportTitle}>Need Help?</h4>
              <p className={styles.supportDescription}>
                Check our documentation or reach out to the community for support and questions.
              </p>
              <Button 
                variant="outline" 
                href="https://github.com/danielmederos2424/odoo-manager/issues"
                className={styles.supportButton}
              >
                Get Support
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Downloads