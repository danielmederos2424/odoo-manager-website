import React from 'react'
import { motion } from 'framer-motion'
import { I18nProvider } from './hooks/useI18n'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Screenshots from './components/Screenshots/Screenshots'
import Downloads from './components/Downloads/Downloads'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
  return (
    <I18nProvider>
      <motion.div 
        className={styles.app}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <Features />
        <Screenshots />
        <Downloads />
        <Footer />
      </motion.div>
    </I18nProvider>
  )
}

export default App