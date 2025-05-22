import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const translations = {
  en: {
    hero: {
      title: 'Odoo Manager',
      subtitle: 'A Modern Desktop Application for Managing Odoo Instances with Docker',
      description: 'Simplify the creation, management, and maintenance of Odoo instances using Docker Compose. Perfect for developers, system administrators, and businesses who want to run multiple Odoo instances locally without dealing with complex Docker commands. Ideal for Odoo development and testing environments.',
      download: 'Download Now',
      github: 'View on GitHub',
      features: [
        { icon: 'logoDocker', label: 'Docker Integration' },
        { icon: 'serverOutline', label: 'PostgreSQL Management' },
        { icon: 'desktopOutline', label: 'Cross-Platform' }
      ]
    },
    features: {
      title: 'Powerful Features for <span class="text-gradient">Running Multiple Odoo Instances Locally</span>',
      description: 'Everything you need to run multiple Odoo instances locally and manage them efficiently and professionally',
      cards: [
        {
          title: 'Comprehensive Instance Management',
          description: 'Create, start, stop, and delete Odoo instances with a few clicks. Support for both Community and Enterprise editions with multiple Odoo versions.',
          highlights: ['Multiple Odoo versions (14-18)', 'Community & Enterprise editions', 'Port mapping & database settings']
        },
        {
          title: 'PostgreSQL Database Management',
          description: 'Create and manage PostgreSQL database instances with secure credential management and automatic linking to Odoo instances.',
          highlights: ['Secure credential management', 'Automatic instance linking', 'Multi-database support']
        },
        {
          title: 'Docker Integration',
          description: 'Seamless Docker Compose orchestration with automatic network configuration, volume management, and container log access.',
          highlights: ['Automatic network setup', 'Volume management', 'Container logs with filtering']
        },
        {
          title: 'Developer-Friendly Features',
          description: 'Direct access to configurations, custom module directories, persistent data storage, and enterprise addons support.',
          highlights: ['Custom module mapping', 'Persistent data storage', 'Enterprise addons support']
        },
        {
          title: 'Modern User Experience',
          description: 'Intuitive interface with smooth animations, dark/light themes, real-time monitoring, and multi-language support.',
          highlights: ['Smooth animations', 'Theme support', 'Multi-language (EN/ES)']
        },
        {
          title: 'Cross-Platform Support',
          description: 'Built with Electron for seamless operation across Windows, macOS, and Linux with native performance.',
          highlights: ['Windows, macOS, Linux', 'Native performance', 'Consistent experience']
        }
      ]
    },
    screenshots: {
      title: 'See <span class="text-gradient">Odoo Manager</span> in Action',
      description: 'Explore the intuitive interface designed to make Odoo instance management effortless',
      items: [
        {
          title: 'Main Dashboard',
          description: 'Overview of all your Odoo and PostgreSQL instances with quick actions and status monitoring.'
        },
        {
          title: 'Instance Creation',
          description: 'Easy-to-use interface for creating new Odoo instances with comprehensive configuration options.'
        },
        {
          title: 'Container Logs',
          description: 'Real-time container logs with filtering options for debugging and monitoring.'
        },
        {
          title: 'Settings & Customization',
          description: 'Personalize your experience with theme options, language settings, and preferences.'
        }
      ]
    },
    downloads: {
      title: 'Download <span class="text-gradient">Odoo Manager</span>',
      description: 'Get started with Odoo Manager on your preferred platform. All downloads include automatic updates.',
      button: 'Download for',
      requirementsTitle: 'System Requirements',
      requirements: [
        { title: 'Docker', description: 'Docker Desktop or Docker Engine installed and running' },
        { title: 'Docker Compose', description: 'Docker Compose for container orchestration' },
        { title: 'Storage', description: 'At least 2GB free disk space for instances' },
        { title: 'Permissions', description: 'Administrator/sudo access for Docker operations' }
      ],
      openSourceTitle: 'Open Source',
      openSourceDesc: 'Odoo Manager is open source software. View the code, contribute, or report issues on GitHub.',
      openSourceBtn: 'View Source Code',
      supportTitle: 'Need Help?',
      supportDesc: 'Check our documentation or reach out to the community for support and questions.',
      supportBtn: 'Get Support'
    },
    footer: {
      brandDesc: 'Simplifying Odoo instance management with modern tools and intuitive design.',
      product: 'Product',
      support: 'Support',
      company: 'WebGraphix',
      copyright: 'All rights reserved.',
      attribution: 'Odoo is a trademark of Odoo S.A. This tool is not officially associated with Odoo S.A.',
      credits: 'Made with <0/> for the Odoo community'
    }
  },
  es: {
    hero: {
      title: 'Odoo Manager',
      subtitle: 'Una aplicación de escritorio moderna para gestionar instancias de Odoo con Docker',
      description: 'Simplifica la creación, gestión y mantenimiento de instancias de Odoo usando Docker Compose. Perfecto para desarrolladores, administradores de sistemas y empresas que desean ejecutar múltiples instancias de Odoo localmente sin lidiar con comandos complejos de Docker. Ideal para entornos de desarrollo y pruebas de Odoo.',
      download: 'Descargar ahora',
      github: 'Ver en GitHub',
      features: [
        { icon: 'logoDocker', label: 'Integración con Docker' },
        { icon: 'serverOutline', label: 'Gestión de PostgreSQL' },
        { icon: 'desktopOutline', label: 'Multiplataforma' }
      ]
    },
    features: {
      title: 'Potentes funciones para <span class="text-gradient">ejecutar múltiples instancias de Odoo localmente</span>',
      description: 'Todo lo que necesitas para ejecutar múltiples instancias de Odoo localmente y gestionarlas de forma eficiente y profesional',
      cards: [
        {
          title: 'Gestión integral de instancias',
          description: 'Crea, inicia, detén y elimina instancias de Odoo con unos pocos clics. Soporte para ediciones Community y Enterprise con múltiples versiones de Odoo.',
          highlights: ['Múltiples versiones de Odoo (14-18)', 'Ediciones Community y Enterprise', 'Mapeo de puertos y configuración de base de datos']
        },
        {
          title: 'Gestión de bases de datos PostgreSQL',
          description: 'Crea y administra instancias de bases de datos PostgreSQL con gestión segura de credenciales y vinculación automática a instancias de Odoo.',
          highlights: ['Gestión segura de credenciales', 'Vinculación automática de instancias', 'Soporte multi-base de datos']
        },
        {
          title: 'Integración con Docker',
          description: 'Orquestación sencilla con Docker Compose, configuración automática de red, gestión de volúmenes y acceso a logs de contenedores.',
          highlights: ['Configuración automática de red', 'Gestión de volúmenes', 'Logs de contenedores con filtrado']
        },
        {
          title: 'Funciones para desarrolladores',
          description: 'Acceso directo a configuraciones, directorios de módulos personalizados, almacenamiento persistente y soporte para addons enterprise.',
          highlights: ['Mapeo de módulos personalizados', 'Almacenamiento persistente', 'Soporte para addons enterprise']
        },
        {
          title: 'Experiencia de usuario moderna',
          description: 'Interfaz intuitiva con animaciones suaves, temas claro/oscuro, monitoreo en tiempo real y soporte multilenguaje.',
          highlights: ['Animaciones suaves', 'Soporte de temas', 'Multilenguaje (EN/ES)']
        },
        {
          title: 'Soporte multiplataforma',
          description: 'Construido con Electron para funcionar en Windows, macOS y Linux con rendimiento nativo.',
          highlights: ['Windows, macOS, Linux', 'Rendimiento nativo', 'Experiencia consistente']
        }
      ]
    },
    screenshots: {
      title: 'Mira <span class="text-gradient">Odoo Manager</span> en acción',
      description: 'Explora la interfaz intuitiva diseñada para facilitar la gestión de instancias Odoo',
      items: [
        {
          title: 'Panel principal',
          description: 'Vista general de todas tus instancias de Odoo y PostgreSQL con acciones rápidas y monitoreo de estado.'
        },
        {
          title: 'Creación de instancias',
          description: 'Interfaz fácil de usar para crear nuevas instancias de Odoo con opciones de configuración completas.'
        },
        {
          title: 'Logs de contenedores',
          description: 'Logs de contenedores en tiempo real con opciones de filtrado para depuración y monitoreo.'
        },
        {
          title: 'Ajustes y personalización',
          description: 'Personaliza tu experiencia con opciones de tema, idioma y preferencias.'
        }
      ]
    },
    downloads: {
      title: 'Descarga <span class="text-gradient">Odoo Manager</span>',
      description: 'Comienza con Odoo Manager en tu plataforma preferida. Todas las descargas incluyen actualizaciones automáticas.',
      button: 'Descargar para',
      requirementsTitle: 'Requisitos del sistema',
      requirements: [
        { title: 'Docker', description: 'Docker Desktop o Docker Engine instalado y en ejecución' },
        { title: 'Docker Compose', description: 'Docker Compose para orquestación de contenedores' },
        { title: 'Almacenamiento', description: 'Al menos 2GB de espacio libre para instancias' },
        { title: 'Permisos', description: 'Acceso de administrador/sudo para operaciones Docker' }
      ],
      openSourceTitle: 'Código abierto',
      openSourceDesc: 'Odoo Manager es software de código abierto. Consulta el código, contribuye o reporta problemas en GitHub.',
      openSourceBtn: 'Ver código fuente',
      supportTitle: '¿Necesitas ayuda?',
      supportDesc: 'Consulta la documentación o contacta a la comunidad para soporte y preguntas.',
      supportBtn: 'Obtener soporte'
    },
    footer: {
      brandDesc: 'Simplificando la gestión de instancias Odoo con herramientas modernas y diseño intuitivo.',
      product: 'Producto',
      support: 'Soporte',
      company: 'WebGraphix',
      copyright: 'Todos los derechos reservados.',
      attribution: 'Odoo es una marca registrada de Odoo S.A. Esta herramienta no está asociada oficialmente con Odoo S.A.',
      credits: 'Hecho con <0/> para la comunidad Odoo'
    }
  }
}

const I18nContext = createContext()

export function I18nProvider({ children }) {
  const getDefaultLang = () => {
    const lang = navigator.language || navigator.userLanguage
    return lang.startsWith('es') ? 'es' : 'en'
  }
  const [lang, setLang] = useState(getDefaultLang)

  useEffect(() => {
    setLang(getDefaultLang())
  }, [])

  const value = useMemo(() => ({
    lang,
    setLang,
    t: (section, key) => translations[lang][section][key],
    translations: translations[lang],
    raw: translations
  }), [lang])

  return React.createElement(
    I18nContext.Provider,
    { value },
    children
  )
}

export function useI18n() {
  return useContext(I18nContext)
}

export function FadeText({ children, ...props }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={children}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.span>
    </AnimatePresence>
  )
}
