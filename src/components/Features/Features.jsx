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
import styles from './Features.module.css'

const Features = () => {
  // Use framer-motion's useInView hook directly instead of our custom hook
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1,
    margin: "0px 0px -10% 0px"
  })

  const features = [
    {
      icon: cogOutline,
      title: 'Comprehensive Instance Management',
      description: 'Create, start, stop, and delete Odoo instances with a few clicks. Support for both Community and Enterprise editions with multiple Odoo versions.',
      highlights: ['Multiple Odoo versions (14-18)', 'Community & Enterprise editions', 'Port mapping & database settings']
    },
    {
      icon: serverOutline,
      title: 'PostgreSQL Database Management',
      description: 'Create and manage PostgreSQL database instances with secure credential management and automatic linking to Odoo instances.',
      highlights: ['Secure credential management', 'Automatic instance linking', 'Multi-database support']
    },
    {
      icon: logoDocker,
      title: 'Docker Integration',
      description: 'Seamless Docker Compose orchestration with automatic network configuration, volume management, and container log access.',
      highlights: ['Automatic network setup', 'Volume management', 'Container logs with filtering']
    },
    {
      icon: terminalOutline,
      title: 'Developer-Friendly Features',
      description: 'Direct access to configurations, custom module directories, persistent data storage, and enterprise addons support.',
      highlights: ['Custom module mapping', 'Persistent data storage', 'Enterprise addons support']
    },
    {
      icon: colorPaletteOutline,
      title: 'Modern User Experience',
      description: 'Intuitive interface with smooth animations, dark/light themes, real-time monitoring, and multi-language support.',
      highlights: ['Smooth animations', 'Theme support', 'Multi-language (EN/ES)']
    },
    {
      icon: desktopOutline,
      title: 'Cross-Platform Support',
      description: 'Built with Electron for seamless operation across Windows, macOS, and Linux with native performance.',
      highlights: ['Windows, macOS, Linux', 'Native performance', 'Consistent experience']
    }
  ]

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
            Powerful Features for <span className="text-gradient">Odoo Development</span>
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          >
            Everything you need to manage your Odoo instances efficiently and professionally
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              custom={index}
            >
              <Card className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <IonIcon icon={feature.icon} />
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
                <ul className={styles.highlights}>
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className={styles.highlight}>
                      <span className={styles.highlightIcon}>
                        <IonIcon icon={checkmarkOutline} />
                      </span>
                      {highlight}
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