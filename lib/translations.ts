export type Language = "fr" | "ar" | "en"

export interface Translations {
  // Navigation
  nav: {
    home: string
    about: string
    products: string
    digitalTransformation: string
    csr: string
    contact: string
    clientSpace: string
  }

  // Common
  common: {
    learnMore: string
    getDemo: string
    contact: string
    phone: string
    email: string
    location: string
    readMore: string
    readLess: string
    scheduleConsultation: string
    getStarted: string
    viewAllProducts: string
    sendMessage: string
    loading: string
    sending: string
    subscribe: string
    businessHours: string
    allRightsReserved: string
    newsletter: string
    stayUpdated: string
    enterEmail: string
    quickLinks: string
    contactInfo: string
    name: string
    company: string
    message: string
    required: string
    yourFullName: string
    yourEmail: string
    yourCompany: string
    tellUsAbout: string
    remoteServices: string
    mondayFriday: string
    saturday: string
    sunday: string
    closed: string
    moroccoTime: string
  }

  // Home page
  home: {
    heroTitle: string
    heroSubtitle: string
    heroDescription: string
    heroSlogan: string // Added heroSlogan
    heroEyebrow: string
    heroTitlePrefix: string
    heroTitleHighlight: string
    heroPrimaryCta: string
    heroSecondaryCta: string
    heroCard1Title: string
    heroCard1Description: string
    heroCard2Title: string
    heroCard2Description: string
    heroCard3Title: string
    heroCard3Description: string
    heroCard4Title: string
    heroCard4Description: string
    aiPoweredTitle: string
    aiPoweredDescription: string
    workflowTitle: string
    workflowDescription: string
    madeInMoroccoTitle: string
    madeInMoroccoDescription: string
    blogEyebrow: string
    blogTitleLine1: string
    blogTitleHighlight: string
    blogSubtitle: string
    blogViewAll: string
    blogLatestBadge: string
    blogViewAllArticles: string
    exploreProductsEyebrow: string
    exploreProducts: string
    exploreProductsDescription: string
    aiExcellenceTitle: string
    aiExcellenceDescription: string
    poweredByTitle: string
    ourCoreProducts: string
    trustedByEyebrow: string
    trustedByTitle: string
    founderWordTitle: string
    founderQuote: string
    founderName: string
    founderTitle: string
    founderContext: string
    readyToStart: string
    readyToStartDescription: string
    getFreeConsultation: string
    callUs: string
    callUsDescription: string
    emailUs: string
    emailUsDescription: string
    visitUs: string
    visitUsDescription: string
    partnerForGrowth: string
    learnAboutMainProducts: string
  }

  // About page
  about: {
    title: string
    subtitle: string
    mission: string
    missionDescription: string
    vision: string
    visionDescription: string
    values: string
    valuesDescription: string
    ceoWordTitle: string
    ceoQuote: string
    corePrinciplesTitle: string
    corePrinciplesDescription: string
    flexibleInnovation: string
    flexibleInnovationDescription: string
    culturalRelevance: string
    culturalRelevanceDescription: string
    purposeDrivenTech: string
    purposeDrivenTechDescription: string
    readyToTransform: string
    readyToTransformDescription: string
    getStartedToday: string
    learnAboutTransformation: string
  }

  // Products page
  products: {
    title: string
    subtitle: string
    aiExcellenceTitle: string
    aiExcellenceDescription: string
    readyToElevate: string
    readyToElevateDescription: string
    getPersonalizedConsultation: string

    // New keys for product details
    overview: string
    technicalDetails: string
    keyCapabilities: string
    roadmap: string
    workflow: string
    securityCompliance: string
    performanceDeployment: string
    hostingDeployment: string
    techHighlights: string
    typicalUseCases: string

    // Product 1
    product1Name: string
    product1Overview: string
    product1Capabilities: {
      multilingual: string
      dynamicSearch: string
      secureOrders: string
      conditionalFlows: string
      humanHandoff: string
      analytics: string
    }
    product1Security: string
    product1Hosting: string
    product1Roadmap: {
      imageProcessing: string
      analyticsExport: string
    }
    product1SecurityLabel: string // Added for consistency
    product1HostingLabel: string // Added for consistency

    // Product 2
    product2Name: string
    product2Overview: string
    product2Capabilities: {
      emailLabeling: string
      documentProcessing: string
      draftingEmails: string
      schedulingMeetings: string
      voiceCalls: string
      contextChat: string
      notionIntegration: string
      webSearch: string
    }
    product2Security: string
    product2Performance: string
    product2Roadmap: {
      contextRetention: string
      mobileApp: string
      voiceMode: string
    }
    product2PerformanceLabel: string // Added for consistency

    // Product 3
    product3Name: string
    product3Overview: string
    product3Workflow: string[]
    product3Compliance: string[]
    product3Roadmap: {
      crmIntegration: string
      multichannelOutreach: string
      languagePersonalization: string
    }

    // Product 4
    product4Name: string
    product4Overview: string
    product4TechHighlights: string[]
    product4UseCases: string
    product4Roadmap: {
      aiCopywriting: string
      multiTenantTheming: string
      isoHosting: string
    }
    product4TechHighlightsLabel: string // Added for consistency
    product4UseCasesLabel: string // Added for consistency

    // Product 5 - Voice Agent
    product5Name: string
    product5Overview: string

    // Product 6 - Custom AI Solution
    product6Name: string
    product6Overview: string
  }

  // Digital Transformation page
  digitalTransformation: {
    title: string
    subtitle: string
    startTransformation: string
    learnAboutCTL: string
    flowchartTitle: string
    flowchartDescription: string
    scrollInstruction: string
    learnAboutProcess: string

    phases: {
      phase1: {
        title: string
        items: string[]
      }
      phase2: {
        title: string
        items: {
          heading: string
          content: string
        }[]
      }
      phase3: {
        title: string
        items: {
          heading: string
          content: string
        }[]
      }
      phase4: {
        title: string
        items: {
          heading: string
          content: string
        }[]
      }
      phase5: {
        title: string
        items: {
          heading: string
          content: string
        }[]
      }
      phase6: {
        title: string
        items: {
          heading: string
          content: string
        }[]
      }
      phase7: {
        title: string
        items: {
          heading: string
          content: string
        }[]
      }
    }

    readyToTransform: string
    readyToTransformDescription: string
    scheduleConsultation: string
    morocco2030Title: string
    morocco2030Subtitle: string
    royalVisionTitle: string
    royalVisionDescription: string
    royalQuote: string
    royalQuoteAttribution: string
    royalQuoteFrench: string
    royalQuoteAttributionFrench: string
    strategicAlignmentTitle: string
    alignmentPoints: string[]
    digitalMoroccoVision: string
    digitalMoroccoVisionDescription: string
    nationalObjectives2030: string
    egdiRanking: string
    egdiRankingCurrent: string
    directJobsCreated: string
    gdpContribution: string
    strategicAxes: string
    strategicAxesDescription: string
    digitalizePublicServices: string
    digitalizePublicServicesDescription: string
    dynamizeDigitalEconomy: string
    dynamizeDigitalEconomyDescription: string
    officialDocumentLink: string
    consultOfficialDocument: string
    objective1Title: string
    objective1Description: string
    objective2Title: string
    objective2Description: string
    objective3Title: string
    objective3Description: string
    learnAboutOurAlignment: string
  }

  // CSR page
  csr: {
    title: string
    subtitle: string
    coreBelief: string
    coreBeliefQuote: string
    partnershipTitle: string
    partnershipDescription: string
    foundationName: string
    foundationDescription: string
    contributionsTitle: string
    contributionsDescription: string
    aiEducation: string
    aiEducationDescription: string
    digitalInclusion: string
    digitalInclusionDescription: string
    sustainableImpact: string
    sustainableImpactDescription: string
    futureInitiatives: string
    futureInitiativesDescription: string
    aiInnovationLabs: string
    aiInnovationLabsDescription: string
    mentorshipPrograms: string
    mentorshipProgramsDescription: string
    digitalInfrastructure: string
    digitalInfrastructureDescription: string
    economicEmpowerment: string
    economicEmpowermentDescription: string
    joinMission: string
    joinMissionDescription: string
    partnerWithUs: string
    learnAboutTransformation: string
  }

  // Contact page
  contact: {
    title: string
    subtitle: string
    sendMessage: string
    sendMessageDescription: string
    contactInformation: string
    successMessage: string
    errorMessage: string
  }
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      products: "Produits",
      digitalTransformation: "Transformation Numérique",
      csr: "RSE",
      contact: "Contact",
      clientSpace: "Espace Client",
    },

    common: {
      learnMore: "En savoir plus",
      getDemo: "Obtenir une démo",
      contact: "Contact",
      phone: "Téléphone",
      email: "E-mail",
      location: "Localisation",
      readMore: "Lire plus",
      readLess: "Lire moins",
      scheduleConsultation: "Planifier une consultation",
      getStarted: "Commencer",
      viewAllProducts: "Voir tous les produits",
      sendMessage: "Envoyer le message",
      loading: "Chargement...",
      sending: "Envoi...",
      subscribe: "S'abonner",
      businessHours: "Heures d'ouverture",
      allRightsReserved: "Tous droits réservés",
      newsletter: "Newsletter",
      stayUpdated: "Restez informé de nos dernières innovations IA",
      enterEmail: "Entrez votre email",
      quickLinks: "Liens rapides",
      contactInfo: "Contact",
      name: "Nom",
      company: "Entreprise",
      message: "Message",
      required: "*",
      yourFullName: "Votre nom complet",
      yourEmail: "votre.email@entreprise.com",
      yourCompany: "Nom de votre entreprise",
      tellUsAbout: "Parlez-nous de votre projet ou comment nous pouvons vous aider...",
      remoteServices: "Services à distance disponibles dans le monde entier",
      mondayFriday: "Lundi - Vendredi",
      saturday: "Samedi",
      sunday: "Dimanche",
      closed: "Fermé",
      moroccoTime: "* Tous les horaires sont en heure du Maroc (GMT+1)",
    },

    home: {
      heroTitle: "Votre Partenaire de Transformation Numérique",
      heroSubtitle: "Travaillez moins. Accomplissez plus.",
      heroDescription:
        "CTL développe des solutions basées sur l'IA qui font gagner du temps, augmentent les ventes et vous gardent en avance.",
      heroSlogan: "Travaillez moins. Accomplissez plus.", // French translation for heroSlogan
      heroEyebrow: "INTELLIGENCE THAT TRANSFORMS BUSINESSES",
      heroTitlePrefix: "L'intelligence artificielle au service de",
      heroTitleHighlight: "votre performance.",
      heroPrimaryCta: "Découvrir nos solutions",
      heroSecondaryCta: "Voir nos cas d'usage",
      heroCard1Title: "IA sur mesure",
      heroCard1Description: "Des solutions adaptées à vos enjeux métier.",
      heroCard2Title: "Automatisation intelligente",
      heroCard2Description: "Optimisez vos processus et gagnez en efficacité.",
      heroCard3Title: "Performance mesurable",
      heroCard3Description: "Des résultats concrets, suivis et quantifiés.",
      heroCard4Title: "Impact concret",
      heroCard4Description: "Créez plus de valeur et gardez une longueur d'avance.",
      aiPoweredTitle: "Engagement Client Alimenté par l'IA",
      aiPoweredDescription:
        "Transformez votre interaction avec votre audience. Nos agents conversationnels compatibles Darija offrent des expériences authentiques et localisées tout en s'intégrant parfaitement à vos systèmes existants pour améliorer la rétention et la conversion.",
      workflowTitle: "Orchestration Intelligente des Flux de Travail",
      workflowDescription:
        "Nous concevons et déployons des écosystèmes d'automatisation en temps réel de bout en bout qui rationalisent les processus manuels, réduisent les coûts généraux et libèrent un ROI mesurable. En remplaçant les tâches répétitives par des systèmes évolutifs et basés sur les données, nous aidons votre organisation à atteindre une vitesse, une précision et une rentabilité inégalées.",
      madeInMoroccoTitle: "Fabriqué au Maroc",
      madeInMoroccoDescription:
        "Fièrement construit au Maroc, les solutions CTL combinent une compréhension approfondie des marchés locaux avec des pratiques d'IA mondiales de pointe—garantissant que votre entreprise obtient un avantage concurrentiel tout en restant conforme et prête pour l'avenir.",
      blogEyebrow: "DERNIÈRES ACTUALITÉS",
      blogTitleLine1: "Restez informé avec",
      blogTitleHighlight: "nos derniers articles",
      blogSubtitle:
        "Découvrez nos analyses sur la transformation digitale, les tendances technologiques et les innovations sectorielles.",
      blogViewAll: "Voir tout",
      blogLatestBadge: "Dernier",
      blogViewAllArticles: "Voir tous les articles",
      exploreProductsEyebrow: "NOS SOLUTIONS",
      exploreProducts: "Découvrez Nos Produits",
      exploreProductsDescription:
        "Découvrez notre suite complète de solutions alimentées par l'IA conçues pour transformer vos opérations commerciales et stimuler une croissance sans précédent.",
      aiExcellenceTitle: "L'Excellence IA",
      aiExcellenceDescription:
        "Alimenté par des plateformes d'IA et des technologies de pointe de l'industrie qui stimulent l'innovation",
      poweredByTitle: "Alimenté par des Outils IA de Premier Plan",
      ourCoreProducts: "Nos Produits Principaux",
      trustedByEyebrow: "ILS NOUS FONT CONFIANCE",
      trustedByTitle: "Approuvé par les Leaders Marocains",
      founderWordTitle: "Le Mot du Fondateur",
      founderQuote:
        "La transformation numérique ne concerne pas seulement la technologie — elle vise à libérer le potentiel humain. Chez CTL, nous construisons des solutions réelles, utiles et accessibles. Contribuer à Maroc Digital 2030 est notre façon d'aider à façonner un Maroc plus moderne, connecté et centré sur l'humain.",
      founderName: "Mohamed Hamza Benthami",
      founderTitle: "PDG, CTL",
      founderContext:
        "Extrait de son discours prononcé à la Chambre de Commerce, d'Industrie et de Services de Rabat-Salé-Kénitra",
      readyToStart: "Prêt à Commencer ?",
      readyToStartDescription:
        "Contactez-nous pour une consultation initiale gratuite et découvrez comment l'équipe CTL peut transformer votre entreprise.",
      getFreeConsultation: "Obtenez Votre Consultation Gratuite",
      callUs: "Appelez-nous",
      callUsDescription: "Parlez directement avec nos experts",
      emailUs: "Envoyez-nous un email",
      emailUsDescription: "Envoyez-nous les détails de votre projet",
      visitUs: "Visitez-nous",
      visitUsDescription: "Rencontrez-nous en personne",
      partnerForGrowth: "Votre Partenaire pour la Croissance Alimentée par l'IA",
      learnAboutMainProducts: "En Savoir Plus Sur Nos Principaux Produits IA",
    },

    about: {
      title: "À propos de CTL",
      subtitle:
        "Nous avons pour mission de démocratiser l'IA pour les entreprises, rendant la technologie avancée accessible, abordable et culturellement pertinente.",
      mission: "Notre Mission",
      missionDescription:
        "Autonomiser les entreprises avec des technologies IA adaptables qui respectent leur langue, leur culture et leurs objectifs—tout en offrant un audit IA expert comme option stratégique pour ceux prêts à accélérer l'innovation et l'efficacité.",
      vision: "Notre Vision",
      visionDescription:
        "Être le partenaire IA de confiance en Afrique du Nord et au-delà, reconnu pour livrer des solutions IA culturellement conscientes et multilingues et des services consultatifs qui alimentent une croissance commerciale significative.",
      values: "Nos Valeurs",
      valuesDescription:
        "Nous priorisons l'intégrité, l'innovation et le partenariat—créant de la technologie et des insights qui améliorent la collaboration humaine et autonomisent les organisations à prospérer.",
      ceoWordTitle: "Un Mot de Notre PDG",
      ceoQuote:
        "La transformation numérique transcende la technologie ; elle se concentre sur le déverrouillage du potentiel humain. Chez CTL, nous créons des solutions pratiques et accessibles qui favorisent le progrès. En contribuant à Maroc Digital 2030, nous visons à aider à façonner un Maroc moderne, connecté et centré sur l'humain.",
      corePrinciplesTitle: "Nos Principes Fondamentaux",
      corePrinciplesDescription: "Ces principes guident tout ce que nous faisons chez CTL.",
      flexibleInnovation: "Innovation Flexible",
      flexibleInnovationDescription:
        "Nous offrons des solutions et services qui s'adaptent au rythme et à l'ambition uniques de votre entreprise—des outils IA fondamentaux aux audits avancés et insights stratégiques.",
      culturalRelevance: "Pertinence Culturelle",
      culturalRelevanceDescription:
        "Notre IA comprend et respecte les langues, valeurs et contextes commerciaux des communautés que nous servons.",
      purposeDrivenTech: "Technologie Axée sur le But",
      purposeDrivenTechDescription:
        "Chaque produit et service que nous créons est conçu pour résoudre de vrais défis et livrer une valeur mesurable.",
      readyToTransform: "Prêt à Transformer Votre Entreprise ?",
      readyToTransformDescription:
        "Que vous recherchiez des solutions IA ou souhaitez commencer par un audit IA complet, nous sommes là pour vous aider à réussir.",
      getStartedToday: "Commencez Aujourd'hui",
      learnAboutTransformation: "En Savoir Plus Sur Notre Processus de Transformation Numérique",
    },

    products: {
      title: "Découvrez Nos Produits",
      subtitle:
        "CTL offre une suite de solutions IA et de développement de pointe adaptées pour autonomiser votre entreprise.",
      aiExcellenceTitle: "L'Excellence IA au Cœur",
      aiExcellenceDescription:
        "Nous opérons à l'intersection de l'innovation et de l'exécution — exploitant les principales plateformes d'IA et d'automatisation mondiales pour livrer des solutions intelligentes et à fort impact adaptées à votre entreprise.",
      readyToElevate: "Prêt à Élever Votre Entreprise avec CTL ?",
      readyToElevateDescription:
        "Contactez-nous aujourd'hui pour discuter de vos besoins spécifiques et trouver la solution IA parfaite pour vous.",
      getPersonalizedConsultation: "Obtenez une Consultation Personnalisée",

      // New keys for product details
      overview: "Aperçu",
      technicalDetails: "Détails Techniques",
      keyCapabilities: "Capacités Clés",
      roadmap: "Feuille de Route",
      workflow: "Flux de Travail",
      securityCompliance: "Sécurité et Conformité",
      performanceDeployment: "Performance et Déploiement",
      hostingDeployment: "Hébergement et Déploiement",
      techHighlights: "Points Forts Techniques",
      typicalUseCases: "Cas d'Utilisation Typiques",

      product1Name: "Agents Conversationnels Intelligents (Agents Intelligents)",
      product1Overview:
        "Nos solutions d'IA conversationnelle de pointe permettent aux organisations des secteurs e-commerce, centres de services gouvernementaux et immobilier de livrer un engagement client personnalisé et fluide. Conçus pour une communication omnicanale véritable, ces agents opèrent sans effort sur des plateformes incluant WhatsApp, Instagram et Facebook Messenger. Alimentés par des modèles de langage avancés OpenAI et Anthropic, ils s'intègrent de manière sécurisée avec toute API REST ou GraphQL, permettant l'accès en temps réel aux informations produits, statuts de commandes et gestion de cas.",
      product1Capabilities: {
        multilingual: "Support multilingue (Darija arabe, français, anglais, arabe classique, espagnol, et plus)",
        dynamicSearch: "Recherche dynamique de produits et services avec carrousels interactifs",
        secureOrders: "Recherches sécurisées de statuts de commandes et cas via API",
        conditionalFlows: "Flux conditionnels sophistiqués et remplissage de créneaux",
        humanHandoff: "Transfert vers agent humain via tableaux de bord en temps réel",
        analytics: "Analyses complètes sur les sessions utilisateur, satisfaction et métriques de conversion",
      },
      product1Security: "Clés API étendues par client, conforme RGPD, avec options de résidence de données EU-Central.",
      product1Hosting: "Hébergé sur un runtime cloud sécurisé, facilement intégrable sur les sites clients.",
      product1Roadmap: {
        imageProcessing: "Capacités de traitement d'images pour reçus et pièces d'identité",
        analyticsExport: "Export d'analyses en libre-service",
      },
      product1SecurityLabel: "Sécurité et Conformité",
      product1HostingLabel: "Hébergement et Déploiement",

      product2Name: "Assistant IA Personnel",
      product2Overview:
        "Notre infrastructure d'assistant IA de niveau entreprise est personnalisée par organisation, configurant des profils distincts adaptés à des employés ou rôles spécifiques selon les besoins commerciaux. Ce système multi-agents automatise les fonctions clés du lieu de travail, rationalisant les flux de travail et améliorant la productivité.",
      product2Capabilities: {
        emailLabeling: "Lecture et étiquetage des emails",
        documentProcessing: "Traitement de documents et données structurées",
        draftingEmails: "Rédaction et envoi de messages Gmail et Outlook",
        schedulingMeetings:
          "Planification de réunions et gestion de calendriers, incluant Google Calendar et Google Meet",
        voiceCalls: "Automatise les appels vocaux entrants et sortants",
        contextChat:
          "Chat contextuel accessible via une infrastructure configurée spécifiquement pour votre organisation",
        notionIntegration: "Intégration avec Notion et Sheets pour la gestion des tâches et données",
        webSearch: "Fonctionnalités de recherche web et résumé",
      },
      product2Security:
        "Google OAuth avec portées de moindre privilège, coffres de données chiffrés, et SSO SAML de niveau entreprise optionnel.",
      product2Performance:
        "Exécution de tâches à faible latence avec options de déploiement évolutives, auto-hébergées et en marque blanche.",
      product2Roadmap: {
        contextRetention: "Rétention de contexte à long terme via mémoire vectorielle",
        mobileApp: "Application web progressive mobile",
        voiceMode: "Mode d'interaction vocal uniquement",
      },
      product2PerformanceLabel: "Performance et Déploiement",

      product3Name: "Automatisation de Prospection B2B Personnalisée",
      product3Overview:
        "Notre plateforme complète de génération de leads et de prospection rationalise l'ensemble du cycle de campagne—du scraping intelligent de leads et enrichissement, à la création d'ouvertures d'emails hyper-personnalisées et l'exécution de campagnes séquencées utilisant des boîtes mail réchauffées. Construite pour une haute délivrabilité et conformité, cette solution accélère les efforts de développement commercial avec une précision basée sur les données.",
      product3Workflow: [
        "Intégration avec LinkedIn Sales Navigator pour le sourcing de leads",
        "Processus de vérification et validation d'emails",
        "Messages personnalisés générés par IA",
        "Réchauffement automatique de campagnes et séquençage",
        "Analyses en temps réel avec tableaux de bord personnalisables optionnels",
      ],
      product3Compliance: [
        "Vérifications automatiques SPF, DKIM, DMARC",
        "Mécanismes de désabonnement et d'oubli conformes RGPD",
        "Gestion des rebonds",
      ],
      product3Roadmap: {
        crmIntegration: "Intégration CRM",
        multichannelOutreach: "Prospection multicanale incluant les DM LinkedIn",
        languagePersonalization: "Modèles de personnalisation spécifiques aux langues",
      },

      product4Name: "Sites Web SaaS et Tableaux de Bord Personnalisés",
      product4Overview:
        "Nous nous spécialisons dans la livraison d'infrastructure numérique évolutive et haute performance pour les entreprises SaaS et les grandes entreprises. Nos solutions incluent des sites web marketing, portails clients et tableaux de bord d'analyses en temps réel construits avec des composants React personnalisés et des architectures backend sécurisées. Conçues pour la robustesse, la sécurité et une expérience utilisateur exceptionnelle, nos plateformes supportent l'intégration transparente et l'agilité opérationnelle.",
      product4TechHighlights: [
        "Fondations de sécurité solides : contrôle d'accès aux données au niveau des lignes, chiffrement TLS, conformité RGPD et régionale",
        "Pipelines de construction robustes avec intégration et déploiement continus",
        "UI pixel-perfect créée avec Tailwind CSS",
        "Backend alimenté par PostgreSQL avec authentification complète, contrôle d'accès basé sur les rôles, et modules de facturation intégrés",
        "Visualisations de données interactives intégrées avec Chart.js et Recharts",
      ],
      product4UseCases:
        "Pages d'atterrissage, panneaux d'administration SaaS, portails partenaires, tableaux de bord KPI et opérationnels.",
      product4Roadmap: {
        aiCopywriting: "Blocs de rédaction alimentés par IA en un clic",
        multiTenantTheming: "Thématisation multi-locataire",
        isoHosting: "Options d'hébergement certifiées ISO 27001",
      },
      product4TechHighlightsLabel: "Points Forts Techniques",
      product4UseCasesLabel: "Cas d'Utilisation Typiques",

      product5Name: "Agent Vocal",
      product5Overview:
        "Solutions vocales avancées alimentées par l'IA qui permettent des conversations naturelles et humaines via des appels téléphoniques et des interfaces vocales. Nos agents vocaux gèrent les demandes clients, la planification de rendez-vous et les tâches de support avec des capacités sophistiquées de reconnaissance vocale et de traitement du langage naturel, offrant des expériences vocales fluides dans diverses industries.",

      product6Name: "Solution IA Personnalisée",
      product6Overview:
        "Solutions d'intelligence artificielle sur mesure conçues spécifiquement pour vos exigences commerciales uniques. Notre approche de développement IA sur mesure garantit que chaque solution est conçue pour répondre à vos défis spécifiques, s'intégrer parfaitement à vos systèmes existants et évoluer avec la croissance de votre entreprise. Du concept au déploiement, nous travaillons étroitement avec vous pour créer des solutions IA qui offrent des résultats mesurables.",
    },

    digitalTransformation: {
      title: "Notre Procédure de Transformation Numérique",
      subtitle:
        "Une approche claire, étape par étape pour guider votre entreprise à travers une évolution numérique réussie avec CTL.",
      startTransformation: "Commencez Votre Transformation",
      learnAboutCTL: "En Savoir Plus Sur CTL",
      flowchartTitle: "Organigramme de Transformation Numérique Corporative CTL",
      flowchartDescription:
        "Notre méthodologie éprouvée assure un parcours fluide et efficace du concept initial à la croissance soutenue.",
      scrollInstruction: "Faites défiler vers la droite pour voir l'organigramme complet",
      learnAboutProcess: "En Savoir Plus Sur Notre Processus de Transformation Numérique",

      phases: {
        phase1: {
          title: "Intégration Client & Alignement",
          items: [
            "Proposition de Produit",
            "Recherche d'efficacité globale",
            "IDÉE de produit ou cartographie de transformation",
            "Réunions de lancement & cartographie des parties prenantes",
            "Validation stratégique",
          ],
        },
        phase2: {
          title: "Découverte",
          items: [
            {
              heading: "Entretiens avec les Parties Prenantes",
              content:
                "À travers les départements pour recueillir les points de douleur, besoins et dynamiques internes",
            },
            {
              heading: "Audit des Données & Processus",
              content: "Identifier les inefficacités, redondances, lacunes technologiques, plaintes clients",
            },
            {
              heading: "Cadrage du Problème",
              content: "Synthétiser les résultats en déclarations de défi claires",
            },
          ],
        },
        phase3: {
          title: "Idéation",
          items: [
            {
              heading: "Sprints de Design Thinking",
              content: "Les équipes transfonctionnelles génèrent des solutions potentielles",
            },
            {
              heading: "Révision d'Expert & Vérification de Faisabilité",
              content:
                "→ Évaluer la viabilité technique et opérationnelle\n→ Considérer les systèmes existants, budget, calendrier",
            },
            {
              heading: "Soumission d'Idées Présélectionnées",
              content: "→ Solutions documentées prêtes pour évaluation",
            },
          ],
        },
        phase4: {
          title: "Validation",
          items: [
            {
              heading: "Portée de Solution",
              content: "→ Définir MVP, KPI et exigences de ressources",
            },
            {
              heading: "Identification des Risques Projet (IRP)",
              content:
                "→ Cartographier les risques technologiques, légaux, financiers, gestion du changement possibles",
            },
            {
              heading: "Évaluation des Risques Projet (ERP)",
              content: "→ Prioriser ou affiner basé sur impact/probabilité\n→ Création de business case",
            },
          ],
        },
        phase5: {
          title: "Point de Contrôle Co-Création",
          items: [
            {
              heading: "Révision & Approbation Client",
              content:
                "→ Confirmer l'alignement, engagement des ressources et parrainage\n→ Procéder à la phase de construction",
            },
          ],
        },
        phase6: {
          title: "Déploiement",
          items: [
            {
              heading: "Construction & Déploiement MVP",
              content: "→ Implémentation agile de la solution\n→ Déploiement pilote avec utilisateurs réels",
            },
            {
              heading: "Boucle de Test & Itération",
              content: "→ Collecte de retours utilisateurs\n→ Ajustements avant publication à grande échelle",
            },
          ],
        },
        phase7: {
          title: "CROISSANCE & SURVEILLANCE",
          items: [
            {
              heading: "Suivi de Performance",
              content: "→ Surveiller KPI, utilisation, satisfaction utilisateur\n→ Améliorations continues",
            },
            {
              heading: "Stratégie de Mise à l'Échelle",
              content:
                "Si Interne : Déploiement inter-départemental\nSi Externe : Packaging produit & commercialisation",
            },
            {
              heading: "Transfert de Connaissances & Passation",
              content: "→ Former les équipes internes\n→ Documenter l'apprentissage pour réutilisation future",
            },
          ],
        },
      },

      readyToTransform: "Prêt à Transformer Votre Entreprise ?",
      readyToTransformDescription:
        "Discutons de comment l'approche structurée de CTL peut conduire votre succès numérique.",
      scheduleConsultation: "Planifier une Consultation",
      morocco2030Title: "Alignement avec la Vision Royale Maroc 2030",
      morocco2030Subtitle:
        "La stratégie et le modèle commercial de CTL s'alignent parfaitement avec la vision royale marocaine pour la digitalisation 2030, contribuant activement à faire du Maroc un hub numérique régional.",
      royalVisionTitle: "Vision Royale",
      royalVisionDescription:
        "Sous la haute orientation de Sa Majesté le Roi Mohammed VI, la transformation numérique est devenue une priorité nationale, positionnant le Maroc comme leader régional en matière d'innovation technologique.",
      royalQuote:
        "La technologie numérique est un changement structurel qui façonne le monde, permettant de nouveaux modèles de production et de consommation.",
      royalQuoteAttribution: "Stratégie Nationale Maroc Numérique 2030",
      royalQuoteFrench:
        "La technologie numérique constitue un changement structurel dans la manière d'appréhender le monde qui nous entoure, car elle permet l'émergence de nouveaux schémas de production et de consommation susceptibles d'accroître les opportunités d'investissement et de créer par conséquent plus d'emplois.",
      royalQuoteAttributionFrench: "Message de Sa Majesté Le Roi Mohammed VI, Juillet 2022",
      strategicAlignmentTitle: "Alignement Stratégique CTL",
      alignmentPoints: [
        "Création de produits qui contribuent à la digitalisation des services publics et privés marocains.",
        "Développement de talents numériques qualifiés",
        "Innovation en intelligence artificielle responsable",
        "Contribution à l'économie numérique nationale",
      ],
      digitalMoroccoVision:
        "Faire du Maroc un Hub Digital pour accélérer le développement social et économique du Royaume",
      digitalMoroccoVisionDescription:
        "La Vision éclairée de Sa Majesté le Roi Mohammed VI a placé le numérique au centre des priorités nationales, entérinée par le Nouveau Modèle de Développement qui érige le numérique en véritable levier de développement.",
      nationalObjectives2030: "Objectifs Nationaux 2030",
      egdiRanking: "50e rang mondial EGDI",
      egdiRankingCurrent: "(actuellement 113e)",
      directJobsCreated: "240K emplois directs créés",
      gdpContribution: "100Mds MAD contribution au PIB",
      strategicAxes: "2 Axes Stratégiques",
      strategicAxesDescription:
        "Pour atteindre ces objectifs, Digital Morocco 2030 se base sur 2 axes stratégiques et 3 catalyseurs",
      digitalizePublicServices: "Digitaliser les services publics",
      digitalizePublicServicesDescription: "Pour mieux servir les citoyens et les entreprises (e-Gov)",
      dynamizeDigitalEconomy: "Dynamiser l'économie numérique",
      dynamizeDigitalEconomyDescription: "Pour produire des solutions numériques marocaines et créer de la valeur",
      officialDocumentLink: "Consulter le Document Officiel",
      consultOfficialDocument: 'Consulter le Document Officiel "Digital Morocco 2030"',
      objective1Title: "Hub Numérique Régional",
      objective1Description:
        "Positionner le Maroc comme un centre d'excellence technologique en Afrique du Nord et au Moyen-Orient.",
      objective2Title: "Services Publics Digitalisés",
      objective2Description:
        "Moderniser l'administration pour un accès plus rapide et facile aux services pour les citoyens et entreprises.",
      objective3Title: "Économie Numérique Dynamique",
      objective3Description:
        "Stimuler la création d'emplois et l'innovation dans les secteurs technologiques émergents.",
      learnAboutOurAlignment: "En Savoir Plus Sur Notre Alignement",
    },

    csr: {
      title: "Responsabilité Sociale d'Entreprise",
      subtitle:
        "Chez Charikate Tikniate Lrhade, nous croyons que le pouvoir de la technologie doit s'étendre au-delà des affaires — il doit élever les communautés et créer des opportunités égales pour tous.",
      coreBelief: "Notre Conviction Fondamentale",
      coreBeliefQuote: "La technologie n'est pas seulement pour l'innovation — c'est une responsabilité.",
      partnershipTitle: "Notre Partenariat",
      partnershipDescription:
        "Dans le cadre de notre engagement RSE, nous collaborons fièrement avec la Fondation Al-Salam pour le Développement Social – Branche de Meknès, une organisation à but non lucratif marocaine dédiée au soutien des orphelins, familles défavorisées et communautés rurales.",
      foundationName: "Fondation Al-Salam",
      foundationDescription:
        "Une organisation à but non lucratif marocaine dédiée à créer un changement positif dans la vie des orphelins, familles défavorisées et communautés rurales à travers le Maroc.",
      contributionsTitle: "Nos Contributions",
      contributionsDescription:
        "À travers ce partenariat, nous contribuons à des initiatives significatives qui créent un impact durable.",
      aiEducation: "Accès à l'Éducation IA",
      aiEducationDescription:
        "Organisation d'ateliers d'introduction et de formation pratique en intelligence artificielle pour les jeunes dans les zones reculées, rendant la technologie de pointe accessible aux communautés défavorisées.",
      digitalInclusion: "Inclusion Numérique",
      digitalInclusionDescription:
        "Fournir des ressources, mentorat et outils de littératie numérique pour combler le fossé technologique et assurer un accès égal aux opportunités numériques pour tous les membres de la communauté.",
      sustainableImpact: "Impact Durable",
      sustainableImpactDescription:
        "Autonomiser les individus avec des compétences prêtes pour l'avenir pour débloquer des opportunités économiques et une croissance à long terme, créant des voies durables vers la prospérité.",
      futureInitiatives: "Initiatives Futures",
      futureInitiativesDescription:
        "Nous élargissons continuellement nos programmes d'impact social pour atteindre plus de communautés et créer un changement plus important.",
      aiInnovationLabs: "Laboratoires d'Innovation IA",
      aiInnovationLabsDescription:
        "Établir des centres d'apprentissage IA permanents dans les zones rurales pour fournir une éducation et un soutien continus pour l'adoption technologique.",
      mentorshipPrograms: "Programmes de Mentorat",
      mentorshipProgramsDescription:
        "Créer des opportunités de mentorat à long terme connectant les professionnels technologiques urbains avec les jeunes ruraux intéressés par les carrières technologiques.",
      digitalInfrastructure: "Infrastructure Numérique",
      digitalInfrastructureDescription:
        "Soutenir le développement d'infrastructure numérique dans les zones mal desservies pour améliorer la connectivité et l'accès aux ressources en ligne.",
      economicEmpowerment: "Autonomisation Économique",
      economicEmpowermentDescription:
        "Développer des programmes qui aident les membres de la communauté à exploiter les compétences technologiques pour l'entrepreneuriat et l'indépendance économique.",
      joinMission: "Rejoignez Notre Mission",
      joinMissionDescription:
        "Partenariez avec nous pour étendre le pouvoir de la technologie au-delà des affaires et créer un changement significatif dans les communautés à travers le Maroc.",
      partnerWithUs: "Partenariez Avec Nous",
      learnAboutTransformation: "En Savoir Plus Sur Notre Processus de Transformation Numérique",
    },

    contact: {
      title: "Contactez-nous",
      subtitle:
        "Prêt à transformer votre entreprise ? Discutons de comment CTL peut vous aider à atteindre vos objectifs numériques.",
      sendMessage: "Envoyez-nous un Message",
      sendMessageDescription: "Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.",
      contactInformation: "Informations de Contact",
      successMessage: "Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.",
      errorMessage: "Désolé, il y a eu une erreur lors de l'envoi de votre message. Veuillez réessayer.",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "حولنا",
      products: "المنتجات",
      digitalTransformation: "التحول الرقمي",
      csr: "المسؤولية الاجتماعية",
      contact: "اتصل بنا",
      clientSpace: "مساحة العميل",
    },

    common: {
      learnMore: "اعرف المزيد",
      getDemo: "احصل على عرض توضيحي",
      contact: "اتصل بنا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      location: "الموقع",
      readMore: "اقرأ المزيد",
      readLess: "اقرأ أقل",
      scheduleConsultation: "حدد موعد استشارة",
      getStarted: "ابدأ الآن",
      viewAllProducts: "عرض جميع المنتجات",
      sendMessage: "إرسال الرسالة",
      loading: "جاري التحميل...",
      sending: "جاري الإرسال...",
      subscribe: "اشترك",
      businessHours: "ساعات العمل",
      allRightsReserved: "جميع الحقوق محفوظة",
      newsletter: "النشرة الإخبارية",
      stayUpdated: "ابق على اطلاع بأحدث ابتكاراتنا في الذكاء الاصطناعي",
      enterEmail: "أدخل بريدك الإلكتروني",
      quickLinks: "روابط سريعة",
      contactInfo: "معلومات الاتصال",
      name: "الاسم",
      company: "الشركة",
      message: "الرسالة",
      required: "*",
      yourFullName: "اسمك الكامل",
      yourEmail: "your.email@company.com",
      yourCompany: "اسم شركتك",
      tellUsAbout: "أخبرنا عن مشروعك أو كيف يمكننا مساعدتك...",
      remoteServices: "الخدمات عن بُعد متاحة في جميع أنحاء العالم",
      mondayFriday: "الاثنين - الجمعة",
      saturday: "السبت",
      sunday: "الأحد",
      closed: "مغلق",
      moroccoTime: "* جميع الأوقات بتوقيت المغرب (GMT+1)",
    },

    home: {
      heroTitle: "شريكك في التحول الرقمي",
      heroSubtitle: "اعمل أقل. حقق أكثر.",
      heroDescription: "تبني CTL حلول مدعومة بالذكاء الاصطناعي توفر الوقت وتزيد المبيعات وتبقيك في المقدمة.",
      heroSlogan: "اعمل أقل. حقق أكثر.", // Arabic translation for heroSlogan
      heroEyebrow: "ذكاء اصطناعي يحوّل الأعمال",
      heroTitlePrefix: "الذكاء الاصطناعي في خدمة",
      heroTitleHighlight: "أدائك.",
      heroPrimaryCta: "اكتشف حلولنا",
      heroSecondaryCta: "شاهد حالات الاستخدام",
      heroCard1Title: "ذكاء اصطناعي مخصص",
      heroCard1Description: "حلول مصممة خصيصًا لتحديات عملك.",
      heroCard2Title: "أتمتة ذكية",
      heroCard2Description: "حسّن عملياتك واكسب المزيد من الكفاءة.",
      heroCard3Title: "أداء قابل للقياس",
      heroCard3Description: "نتائج ملموسة، متابَعة ومُقاسة.",
      heroCard4Title: "أثر ملموس",
      heroCard4Description: "أنشئ قيمة أكبر وحافظ على تقدمك.",
      aiPoweredTitle: "تفاعل العملاء المدعوم بالذكاء الاصطناعي",
      aiPoweredDescription:
        "حوّل طريقة تفاعلك مع جمهورك. وكلاؤنا المحادثون المتوافقون مع الدارجة يقدمون تجارب أصيلة ومحلية بينما يتكاملون بسلاسة مع أنظمتك الحالية لتعزيز الاحتفاظ والتحويل.",
      workflowTitle: "تنسيق ذكي لسير العمل",
      workflowDescription:
        "نصمم وننشر أنظمة أتمتة شاملة في الوقت الفعلي تبسط العمليات اليدوية وتقلل التكاليف العامة وتحرر عائد استثمار قابل للقياس. من خلال استبدال المهام المتكررة بأنظمة قابلة للتطوير ومدفوعة بالبيانات، نساعد مؤسستك على تحقيق سرعة ودقة وربحية لا مثيل لها.",
      madeInMoroccoTitle: "صنع في المغرب",
      madeInMoroccoDescription:
        "مبنية بفخر في المغرب، حلول CTL تجمع بين فهم عميق للأسواق المحلية وممارسات الذكاء الاصطناعي العالمية المتطورة—مما يضمن حصول عملك على ميزة تنافسية مع البقاء متوافقًا وجاهزًا للمستقبل.",
      blogEyebrow: "آخر الأخبار",
      blogTitleLine1: "ابق على اطلاع مع",
      blogTitleHighlight: "أحدث مقالاتنا",
      blogSubtitle: "اكتشف رؤانا حول التحول الرقمي واتجاهات التكنولوجيا وابتكارات القطاع.",
      blogViewAll: "عرض الكل",
      blogLatestBadge: "الأحدث",
      blogViewAllArticles: "عرض جميع المقالات",
      exploreProductsEyebrow: "حلولنا",
      exploreProducts: "استكشف منتجاتنا",
      exploreProductsDescription: "تقدم CTL مجموعة من حلول الذكاء الاصطناعي والتطوير المتطورة المصممة لتمكين عملك.",
      aiExcellenceTitle: "التميز في الذكاء الاصطناعي في الصميم",
      aiExcellenceDescription:
        "نعمل في تقاطع الابتكار والتنفيذ — نستفيد من منصات الذكاء الاصطناعي والأتمتة الرائدة عالميًا لتقديم حلول ذكية وعالية التأثير مصممة خصيصًا لعملك.",
      poweredByTitle: "مدعوم بأدوات الذكاء الاصطناعي الرائدة في الصناعة",
      ourCoreProducts: "منتجاتنا الأساسية",
      trustedByEyebrow: "يثقون بنا",
      trustedByTitle: "موثوق به من قبل القادة المغاربة",
      founderWordTitle: "كلمة المؤسس",
      founderQuote:
        "التحول الرقمي لا يقتصر على التكنولوجيا فحسب — بل يتعلق بإطلاق العنان للإمكانات البشرية. في CTL، نبني حلولًا حقيقية ومفيدة ومتاحة. مساهمتنا في المغرب الرقمي 2030 هي طريقتنا للمساعدة في تشكيل مغرب أكثر حداثة واتصالًا وتركيزًا على الإنسان.",
      founderName: "محمد حمزة بنثامي",
      founderTitle: "الرئيس التنفيذي، CTL",
      founderContext: "مقتطف من خطابه الذي ألقاه في غرفة التجارة والصناعة والخدمات لجهة الرباط-سلا-القنيطرة",
      readyToStart: "مستعد للبدء؟",
      readyToStartDescription: "اتصل بنا للحصول على استشارة أولية مجانية واكتشف كيف يمكن لفريق CTL تحويل عملك.",
      getFreeConsultation: "احصل على استشارتك المجانية",
      callUs: "اتصل بنا",
      callUsDescription: "تحدث مباشرة مع خبرائنا",
      emailUs: "راسلنا",
      emailUsDescription: "أرسل لنا تفاصيل مشروعك",
      visitUs: "زرنا",
      visitUsDescription: "قابلنا شخصيًا",
      partnerForGrowth: "شريكك للنمو المدعوم بالذكاء الاصطناعي",
      learnAboutMainProducts: "تعرف على منتجاتنا الرئيسية للذكاء الاصطناعي",
    },

    about: {
      title: "حول CTL",
      subtitle:
        "نحن في مهمة لإضفاء الطابع الديمقراطي على الذكاء الاصطناعي للشركات، مما يجعل التكنولوجيا المتقدمة في متناول الجميع وبأسعار معقولة وذات صلة ثقافية.",
      mission: "مهمتنا",
      missionDescription:
        "تمكين الشركات بتقنيات الذكاء الاصطناعي القابلة للتكيف التي تحترم لغتهم وثقافتهم وأهدافهم—مع تقديم تدقيق الذكاء الاصطناعي الخبير كخيار استراتيجي لأولئك المستعدين لتسريع الابتكار والكفاءة.",
      vision: "رؤيتنا",
      visionDescription:
        "أن نكون الشريك الموثوق للذكاء الاصطناعي في شمال أفريقيا وما وراءها، معترف بنا لتقديم حلول الذكاء الاصطناعي الواعية ثقافيًا ومتعددة اللغات والخدمات الاستشارية التي تغذي النمو التجاري المعنوي.",
      values: "قيمنا",
      valuesDescription:
        "نعطي الأولوية للنزاهة والابتكار والشراكة—إنشاء التكنولوجيا والرؤى التي تعزز التعاون البشري ��تمكن المنظمات من الازدهار.",
      ceoWordTitle: "كلمة من رئيسنا التنفيذي",
      ceoQuote:
        "التحول الرقمي يتجاوز التكنولوجيا؛ إنه يركز على إطلاق العنان للإمكانات البشرية. في CTL، نبتكر حلولًا عملية ومتاحة تدفع التقدم. من خلال المساهمة في المغرب الرقمي 2030، نهدف إلى المساعدة في تشكيل مغرب حديث، متصل، ومتمحور حول الإنسان.",
      corePrinciplesTitle: "مبادئنا الأساسية",
      corePrinciplesDescription: "هذه المبادئ توجه كل ما نفعله في CTL.",
      flexibleInnovation: "الابتكار المرن",
      flexibleInnovationDescription:
        "نقدم حلولاً وخدمات تتناسب مع وتيرة وطموح عملك الفريد—من أدوات الذكاء الاصطناعي الأساسية إلى التدقيقات المتقدمة والرؤى الاستراتيجية.",
      culturalRelevance: "الصلة الثقافية",
      culturalRelevanceDescription:
        "ذكاؤنا الاصطناعي يفهم ويحترم اللغات والقيم والسياقات التجارية للمجتمعات التي نخدمها.",
      purposeDrivenTech: "التكنولوجيا الموجهة بالهدف",
      purposeDrivenTechDescription: "كل منتج وخدمة ننشئها مصممة لحل التحديات الحقيقية وتقديم قيمة قابلة للقياس.",
      readyToTransform: "مستعد لتحويل عملك؟",
      readyToTransformDescription:
        "سواء كنت تبحث عن حلول الذكاء الاصطناعي أو تريد البدء بتدقيق شامل للذكاء الاصطناعي، نحن هنا لمساعدتك على النجاح.",
      getStartedToday: "ابدأ اليوم",
      learnAboutTransformation: "تعرف على عملية التحول الرقمي لدينا",
    },

    products: {
      title: "استكشف منتجاتنا",
      subtitle: "تقدم CTL مجموعة من حلول الذكاء الاصطناعي والتطوير المتطورة المصممة لتمكين عملك.",
      aiExcellenceTitle: "التميز في الذكاء الاصطناعي في الصميم",
      aiExcellenceDescription:
        "نعمل في تقاطع الابتكار والتنفيذ — نستفيد من منصات الذكاء الاصطناعي والأتمتة الرائدة عالميًا لتقديم حلول ذكية وعالية التأثير مصممة خصيصًا لعملك.",
      readyToElevate: "مستعد لرفع مستوى عملك مع CTL؟",
      readyToElevateDescription: "اتصل بنا اليوم لمناقشة احتياجاتك المحددة والعثور على حل الذكاء الاصطناعي المثالي لك.",
      getPersonalizedConsultation: "احصل على استشارة شخصية",

      // New keys for product details
      overview: "نظرة عامة",
      technicalDetails: "التفاصيل التقنية",
      keyCapabilities: "القدرات الرئيسية",
      roadmap: "خارطة الطريق",
      workflow: "سير العمل",
      securityCompliance: "الأمان والامتثال",
      performanceDeployment: "الأداء والنشر",
      hostingDeployment: "الاستضافة والنشر",
      techHighlights: "أبرز التقنيات",
      typicalUseCases: "حالات الاستخدام النموذجية",

      product1Name: "الوكلاء المحادثون الأذكياء (الوكلاء الأذكياء)",
      product1Overview:
        "حلول الذكاء الاصطناعي المحادثة المتطورة لدينا تمكن المنظمات عبر قطاعات التجارة الإلكترونية ومراكز الخدمات الحكومية والعقارات من تقديم تفاعل عملاء شخصي وسلس. مصممة للتواصل الشامل عبر القنوات، هذه الوكلاء تعمل بسهولة على منصات تشمل واتساب وإنستغرام وفيسبوك ماسنجر. مدعومة بنماذج لغة متقدمة من OpenAI وAnthropic، تتكامل بأمان مع أي REST أو GraphQL API، مما يتيح الوصول في الوقت الفعلي لمعلومات المنتجات وحالات الطلبات وإدارة الحالات.",
      product1Capabilities: {
        multilingual: "دعم متعدد اللغات (الدارجة المغربية، الفرنسية، الإنجليزية، العربية الفصحى، الإسبانية، والمزيد)",
        dynamicSearch: "بحث ديناميكي للمنتجات والخدمات مع دوارات تفاعلية",
        secureOrders: "عمليات بحث آمنة لحالات الطلبات والحالات عبر API",
        conditionalFlows: "تدفقات شرطية متطورة وملء الفتحات",
        humanHandoff: "تسليم للوكيل البشري عبر لوحات المعلومات في الوقت الفعلي",
        analytics: "تحليلات شاملة لجلسات المستخدمين والرضا ومقاييس التحويل",
      },
      product1Security:
        "مفاتيح API محددة النطاق لكل عميل، متوافقة مع GDPR، مع خيارات إقامة البيانات في الاتحاد الأوروبي المركزي.",
      product1Hosting: "مستضافة على بيئة تشغيل سحابية آمنة، سهلة التضمين في مواقع العملاء.",
      product1Roadmap: {
        imageProcessing: "قدرات معالجة الصور للإيصالات والهويات",
        analyticsExport: "تصدير التحليلات بالخدمة الذاتية",
      },
      product1SecurityLabel: "الأمان والامتثال",
      product1HostingLabel: "الاستضافة والنشر",

      product2Name: "المساعد الشخصي بالذكاء الاصطناعي",
      product2Overview:
        "بنية المساعد بالذكاء الاصطناعي على مستوى المؤسسة مخصصة لكل منظمة، تكوين ملفات تعريف مميزة مصممة خصيصًا لموظفين أو أدوار محددة بناءً على احتياجات العمل. هذا النظام متعدد الوكلاء يؤتمت وظائف مكان العمل الرئيسية، مما يبسط سير العمل ويعزز الإنتاجية.",
      product2Capabilities: {
        emailLabeling: "قراءة وتصنيف رسائل البريد الإلكتروني",
        documentProcessing: "معالجة الوثائق والبيانات المنظمة",
        draftingEmails: "صياغة وإرسال رسائل Gmail وOutlook",
        schedulingMeetings: "جدولة الاجتماعات وإدارة التقاويم، بما في ذلك Google Calendar وGoogle Meet",
        voiceCalls: "أتمتة المكالمات الصوتية الواردة والصادرة",
        contextChat: "دردشة واعية بالسياق يمكن الوصول إليها عبر بنية تحتية مكونة خصيصًا لمؤسستك",
        notionIntegration: "التكامل مع Notion وSheets لإدارة المهام والبيانات",
        webSearch: "وظائف البحث على الويب والتلخيص",
      },
      product2Security: "Google OAuth مع نطاقات أقل امتياز، خزائن بيانات مشفرة، وSSO SAML على مستوى المؤسسة اختياري.",
      product2Performance: "تنفيذ مهام بزمن استجابة منخفض مع خيارات نشر قابلة للتطوير ومستضافة ذاتيًا وبعلامة بيضاء.",
      product2Roadmap: {
        contextRetention: "الاحتفاظ بالسياق طويل المدى عبر ا��ذاكرة الشعاعية",
        mobileApp: "تطبيق ويب تقدمي للهاتف المحمول",
        voiceMode: "وضع التفاعل الصوتي فقط",
      },
      product2PerformanceLabel: "الأداء والنشر",

      product3Name: "أتمتة التواصل B2B الشخصي",
      product3Overview:
        "منصة توليد العملاء المحتملين والتواصل الشاملة لدينا تبسط دورة الحملة بأكملها—من كشط العملاء المحتملين الذكي والإثراء، إلى صياغة فتحات بريد إلكتروني فائقة الشخصية وتنفيذ حملات متسلسلة باستخدام صناديق بريد مُحمّاة. مبنية للتسليم العالي والامتثال، هذا الحل يسرع جهود تطوير الأعمال بدقة مدفوعة بالبيانات.",
      product3Workflow: [
        "التكامل مع LinkedIn Sales Navigator لمصادر العملاء المحتملين",
        "عمليات التحقق من البريد الإلكتروني والتحقق من الصحة",
        "رسائل شخصية مولدة بالذكاء الاصطناعي",
        "إحماء الحملة التلقائي والتسلسل",
        "تحليلات في الوقت الفعلي مع لوحات معلومات قابلة للتخصيص اختيارية",
      ],
      product3Compliance: [
        "فحوصات SPF وDKIM وDMARC التلقائية",
        "آليات إلغاء الاشتراك والنسيان المتوافقة مع GDPR",
        "إدارة الارتداد",
      ],
      product3Roadmap: {
        crmIntegration: "تكامل CRM",
        multichannelOutreach: "التواصل متعدد القنوات بما في ذلك رسائل LinkedIn المباشرة",
        languagePersonalization: "نماذج الشخصية الخاصة باللغة",
      },

      product4Name: "مواقع SaaS ولوحات المعلومات المخصصة",
      product4Overview:
        "نتخصص في تقديم بنية تحتية رقمية قابلة للتطوير وعالية الأداء لشركات SaaS والمؤسسات. حلولنا تشمل مواقع التسويق وبوابات العملاء ولوحات تحليلات الوقت الفعلي المبنية بمكونات React مخصصة وهياكل خلفية آمنة. مصممة للقوة والأمان وتجربة مستخدم استثنائية، منصاتنا تدعم التكامل السلس والرشاقة التشغيلية.",
      product4TechHighlights: [
        "أسس أمنية قوية: التحكم في الوصول للبيانات على مستوى الصف، تشفير TLS، امتثال GDPR والإقليمي",
        "خطوط بناء قوية مع التكامل والنشر المستمر",
        "واجهة مستخدم مثالية البكسل مصنوعة بـ Tailwind CSS",
        "خلفية مدعومة بـ PostgreSQL مع مصادقة شاملة، التحكم في الوصول القائم على الأدوار، ووحدات الفوترة المتكاملة",
      ],
      product4UseCases: "صفحات الهبوط، لوحات إدارة SaaS، بوابات الشركاء، لوحات معلومات KPI والتشغيلية.",
      product4Roadmap: {
        aiCopywriting: "كتل الكتابة المدعومة بالذكاء الاصطناعي بنقرة واحدة",
        multiTenantTheming: "تصميم متعدد المستأجرين",
        isoHosting: "خيارات استضافة معتمدة ISO 27001",
      },
      product4TechHighlightsLabel: "أبرز التقنيات",
      product4UseCasesLabel: "حالات الاستخدام النموذجية",

      product5Name: "الوكيل الصوتي",
      product5Overview:
        "حلول صوتية متقدمة مدعومة بالذكاء الاصطناعي تمكن المحادثات الطبيعية والشبيهة بالبشر عبر المكالمات الهاتفية وواجهات الصوت. وكلاؤنا الصوتيون يتعاملون مع استفسارات العملاء وجدولة المواعيد ومهام الدعم بقدرات متطورة في التعرف على الكلام ومعالجة اللغة الطبيعية، مما يوفر تجارب صوتية سلسة عبر صناعات مختلفة.",

      product6Name: "حل الذكاء الاصطناعي المخصص",
      product6Overview:
        "حلول ذكاء اصطناعي مصممة خصيصًا لمتطلبات عملك الفريدة. نهج تطوير الذكاء الاصطناعي المخصص لدينا يضمن أن كل حل مصمم لمعالجة تحدياتك المحددة، والتكامل بسلاسة مع أنظمتك الحالية، والنمو مع نمو عملك. من المفهوم إلى النشر، نعمل بشكل وثيق معك لإنشاء حلول ذكاء اصطناعي تحقق نتائج قابلة للقياس.",
    },

    digitalTransformation: {
      title: "إجراء التحول الرقمي لدينا",
      subtitle: "نهج واضح خطوة بخطوة لتوجيه عملك من خلال تطور رقمي ناجح مع CTL.",
      startTransformation: "ابدأ تحولك",
      learnAboutCTL: "تعرف على CTL",
      flowchartTitle: "مخطط التحول الرقمي المؤسسي CTL",
      flowchartDescription: "منهجيتنا المثبتة تضمن رحلة سلسة وفعالة من المفهوم الأولي إلى النمو المستدام.",
      scrollInstruction: "مرر يمينًا لعرض المخطط الكامل",
      learnAboutProcess: "تعرف على عملية التحول الرقمي لدينا",

      phases: {
        phase1: {
          title: "إدماج العميل والمواءمة",
          items: [
            "اقتراح المنتج",
            "البحث عن الكفاءة الشاملة",
            "فكرة المنتج أو رسم خريطة التحول",
            "اجتماعات البدء ورسم خريطة أصحاب المصلحة",
            "التحقق الاستراتيجي",
          ],
        },
        phase2: {
          title: "الاستكشاف",
          items: [
            {
              heading: "مقابلات أصحاب المصلحة",
              content: "عبر الأقسام لجمع نقاط الألم والاحتياجات والديناميكيات الداخلية",
            },
            {
              heading: "تدقيق البيانات والعمليات",
              content: "تحديد عدم الكفاءة والتكرار وثغرات التكنولوجيا وشكاوى العملاء",
            },
            {
              heading: "تأطير المشكلة",
              content: "تجميع النتائج في بيانات تحدي واضحة",
            },
          ],
        },
        phase3: {
          title: "الإبداع",
          items: [
            {
              heading: "سباقات التفكير التصميمي",
              content: "الفرق متعددة الوظائف تولد حلولاً محتملة",
            },
            {
              heading: "مراجعة الخبراء وفحص الجدوى",
              content: "← تقييم الجدوى التقنية والتشغيلية\n← النظر في الأنظمة الحالية والميزانية والجدول الزمني",
            },
            {
              heading: "تقديم الأفكار المختارة",
              content: "← حلول موثقة جاهزة للتقييم",
            },
          ],
        },
        phase4: {
          title: "التحقق",
          items: [
            {
              heading: "تحديد نطاق الحل",
              content: "← تحديد MVP وKPI ومتطلبات الموارد",
            },
            {
              heading: "تحديد مخاطر المشروع (TMP)",
              content: "← رسم خريطة المخاطر التقنية والقانونية والمالية وإدارة التغيير المحتملة",
            },
            {
              heading: "تقييم مخاطر المشروع (TMP)",
              content: "← إعطاء الأولوية أو التحسين بناءً على التأثير/الاحتمالية\n← إنشاء حالة عمل",
            },
          ],
        },
        phase5: {
          title: "نقطة تفتيش الإبداع المشترك",
          items: [
            {
              heading: "مراجعة العميل والموافقة",
              content: "← تأكيد المواءمة والتزام الموارد والرعاية\n← المتابعة إلى مرحلة البناء",
            },
          ],
        },
        phase6: {
          title: "النشر",
          items: [
            {
              heading: "بناء ونشر MVP",
              content: "← تنفيذ رشيق للحل\n← نشر تجريبي مع مستخدمين حقيقيين",
            },
            {
              heading: "حلقة الاختبار والتكرار",
              content: "← جمع ملاحظات المستخدمين\n← تعديلات قبل الإصدار على نطاق واسع",
            },
          ],
        },
        phase7: {
          title: "النمو والمراقبة",
          items: [
            {
              heading: "تتبع الأداء",
              content: "← مراقبة KPI والاستخدام ورضا المستخدمين\n← تحسينات مستمرة",
            },
            {
              heading: "استراتيجية التوسع",
              content: "إذا كان داخليًا: نشر عبر الأقسام\nإذا كان خارجيًا: تغليف المنتج والتسويق",
            },
            {
              heading: "نقل المعرفة والتسليم",
              content: "← تدريب الفرق الداخلية\n← توثيق التعلم لإعادة الاستخدام المستقبلية",
            },
          ],
        },
      },

      readyToTransform: "مستعد لتحويل عملك؟",
      readyToTransformDescription: "دعنا نناقش كيف يمكن لنهج CTL المنظم أن يقود نجاحك الرقمي.",
      scheduleConsultation: "حدد موعد استشارة",
      morocco2030Title: "التوافق مع الرؤية الملكية المغرب 2030",
      morocco2030Subtitle:
        "تتماشى استراتيجية ونموذج أعمال CTL تماماً مع الرؤية الملكية المغربية للرقمنة 2030، مساهمة بفعالية في جعل المغرب مركزاً رقمياً إقليمياً.",
      royalVisionTitle: "الرؤية الملكية",
      royalVisionDescription:
        "تحت التوجيه السامي لجلالة الملك محمد السادس، أصبح التحول الرقمي أولوية وطنية، مما يضع المغرب كرائد إقليمي في الابتكار التكنولوجي.",
      royalQuote: "التكنولوجيا الرقمية تغيير هيكلي يشكل العالم، مما يتيح نماذج إنتاج واستهلاك جديدة.",
      royalQuoteAttribution: "الاستراتيجية الوطنية المغرب الرقمي 2030",
      royalQuoteFrench:
        "التكنولوجيا الرقمية تشكل تغييراً هيكلياً في طريقة فهم العالم من حولنا، حيث تتيح ظهور أنماط إنتاج واستهلاك جديدة قادرة على زيادة فرص الاستثمار وخلق المزيد من فرص العمل نتيجة لذلك.",
      royalQuoteAttributionFrench: "رسالة جلالة الملك محمد السادس، يوليو 2022",
      strategicAlignmentTitle: "التوافق الاستراتيجي لـ CTL",
      alignmentPoints: [
        "إنشاء منتجات تساهم في رقمنة الخدمات العامة والخاصة المغربية.",
        "تطوير المواهب الرقمية المؤهلة",
        "الابتكار في الذكاء الاصطناعي المسؤول",
        "المساهمة في الاقتصاد الرقمي الوطني",
      ],
      digitalMoroccoVision: "جعل المغرب مركزاً رقمياً لتسريع التنمية الاجتماعية والاقتصادية للمملكة",
      digitalMoroccoVisionDescription:
        "الرؤية المستنيرة لجلالة الملك محمد السادس وضعت الرقمنة في مركز الأولويات الوطنية، والتي أقرها النموذج التنموي الجديد الذي يجعل من الرقمنة رافعة حقيقية للتنمية.",
      nationalObjectives2030: "الأهداف الوطنية 2030",
      egdiRanking: "المرتبة 50 عالمياً في EGDI",
      egdiRankingCurrent: "(حالياً المرتبة 113)",
      directJobsCreated: "240 ألف فرصة عمل مباشرة",
      gdpContribution: "100 مليار درهم مساهمة في الناتج المحلي الإجمالي",
      strategicAxes: "محوران استراتيجيان",
      strategicAxesDescription: "لتحقيق هذه الأهداف، يعتمد المغرب الرقمي 2030 على محورين استراتيجيين و3 محفزات",
      digitalizePublicServices: "رقمنة الخدمات العامة",
      digitalizePublicServicesDescription: "لخدمة أفضل للمواطنين والشركات (الحكومة الإلكترونية)",
      dynamizeDigitalEconomy: "تنشيط الاقتصاد الرقمي",
      dynamizeDigitalEconomyDescription: "لإنتاج حلول رقمية مغربية وخلق القيمة",
      officialDocumentLink: "استشر الوثيقة الرسمية",
      consultOfficialDocument: 'استشر الوثيقة الرسمية "المغرب الرقمي 2030"',
      objective1Title: "مركز رقمي إقليمي",
      objective1Description: "وضع المغرب كمركز للتميز التكنولوجي في شمال أفريقيا والشرق الأوسط.",
      objective2Title: "خدمات عامة رقمية",
      objective2Description: "تحديث الإدارة لوصول أسرع وأسهل للخدمات للمواطنين والشركات.",
      objective3Title: "اقتصاد رقمي ديناميكي",
      objective3Description: "تحفيز خلق فرص العمل والابتكار في القطاعات التكنولوجية الناشئة.",
      learnAboutOurAlignment: "اعرف المزيد عن توافقنا",
    },

    csr: {
      title: "المسؤولية الاجتماعية للشركات",
      subtitle:
        "في شركة التقنيات الحديثة، نؤمن أن قوة التكنولوجيا يجب أن تمتد إلى ما وراء الأعمال — يجب أن ترفع المجتمعات وتخلق فرصًا متساوية للجميع.",
      coreBelief: "اعتقادنا الأساسي",
      coreBeliefQuote: "التكنولوجيا ليست فقط للابتكار — إنها مسؤولية.",
      partnershipTitle: "شراكتنا",
      partnershipDescription:
        "كجزء من التزامنا بالمسؤولية الاجتماعية للشركات، نتعاون بفخر مع مؤسسة السلام للتنمية الاجتماعية – فرع مكناس، منظمة مغربية غير ربحية مكرسة لدعم الأيتام والأسر المحرومة والمجتمعات الريفية.",
      foundationName: "مؤسسة السلام",
      foundationDescription:
        "منظمة مغربية غير ربحية مكرسة لخلق تغيير إيجابي في حياة الأيتام والأسر المحرومة والمجتمعات الريفية في جميع أنحاء المغرب.",
      contributionsTitle: "مساهماتنا",
      contributionsDescription: "من خلال هذه الشراكة، نساهم في مبادرات ذات مغزى تخلق تأثيرًا دائمًا.",
      aiEducation: "الوصول إلى تعليم الذكاء الاصطناعي",
      aiEducationDescription:
        "تنظيم ورش عمل تمهيدية وتدريب عملي في الذكاء الاصطناعي للشباب في المناطق النائية، مما يجعل التكنولوجيا المتطورة في متناول المجتمعات المحرومة.",
      digitalInclusion: "الشمول الرقمي",
      digitalInclusionDescription:
        "توفير الموارد والإرشاد وأدوات محو الأمية الرقمية لسد الفجوة التكنولوجية وضمان الوصول المتساوي للفرص الرقمية لجميع أعضاء المجتمع.",
      sustainableImpact: "التأثير المستدام",
      sustainableImpactDescription:
        "تمكين الأفراد بمهارات جاهزة للمستقبل لفتح الفرص الاقتصادية والنمو طويل الأجل، وخلق مسارات مستدامة للازدهار.",
      futureInitiatives: "المبادرات المستقبلية",
      futureInitiativesDescription:
        "نوسع باستمرار برامج تأثيرنا الاجتماعي للوصول إلى المزيد من المجتمعات وخلق تغيير أكبر.",
      aiInnovationLabs: "مختبرات الابتكار بالذكاء الاصطناعي",
      aiInnovationLabsDescription:
        "إنشاء مراكز تعلم الذكاء الاصطناعي الدائمة في المناطق الريفية لتوفير التعليم والدعم المستمر لاعتماد التكنولوجيا.",
      mentorshipPrograms: "برامج الإرشاد",
      mentorshipProgramsDescription:
        "إنشاء فرص إرشاد طويلة المدى تربط المهنيين التقنيين الحضريين بالشباب الريفي المهتم بالمهن التقنية.",
      digitalInfrastructure: "البنية التحتية الرقمية",
      digitalInfrastructureDescription:
        "دعم تطوير البنية التحتية الرقمية في المناطق المحرومة لتحسين الاتصال والوصول إلى الموارد عبر الإنترنت.",
      economicEmpowerment: "التمكين الاقتصادي",
      economicEmpowermentDescription:
        "تطوير برامج تساعد أعضاء المجتمع على الاستفادة من المهارات التقنية لريادة الأعمال والاستقلال الاقتصادي.",
      joinMission: "انضم إلى مهمتنا",
      joinMissionDescription:
        "شارك معنا لتوسيع قوة التكنولوجيا إلى ما وراء الأعمال وخلق تغيير ذي مغزى في المجتمعات في جميع أنحاء المغرب.",
      partnerWithUs: "شارك معنا",
      learnAboutTransformation: "تعرف على عملية التحول الرقمي لدينا",
    },

    contact: {
      title: "اتصل بنا",
      subtitle: "مستعد لتحويل عملك؟ دعنا نناقش كيف يمكن لـ CTL مساعدتك في تحقيق أهدافك الرقمية.",
      sendMessage: "أرسل لنا رسالة",
      sendMessageDescription: "املأ النموذج أدناه وسنعود إليك خلال 24 ساعة.",
      contactInformation: "معلومات الاتصال",
      successMessage: "شكرًا! تم إرسال رسالتك بنجاح. سنعود إليك قريبًا.",
      errorMessage: "عذرًا، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      digitalTransformation: "Digital Transformation",
      csr: "CSR",
      contact: "Contact",
      clientSpace: "Client Space",
    },

    common: {
      learnMore: "Learn More",
      getDemo: "Get a Demo",
      contact: "Contact",
      phone: "Phone",
      email: "Email",
      location: "Location",
      readMore: "Read More",
      readLess: "Read Less",
      scheduleConsultation: "Schedule a Consultation",
      getStarted: "Get Started",
      viewAllProducts: "View All Products",
      sendMessage: "Send Message",
      loading: "Loading...",
      sending: "Sending...",
      subscribe: "Subscribe",
      businessHours: "Business Hours",
      allRightsReserved: "All rights reserved",
      newsletter: "Newsletter",
      stayUpdated: "Stay updated with our latest AI innovations",
      enterEmail: "Enter your email",
      quickLinks: "Quick Links",
      contactInfo: "Contact",
      name: "Name",
      company: "Company Name",
      message: "Message",
      required: "*",
      yourFullName: "Your full name",
      yourEmail: "your.email@company.com",
      yourCompany: "Your company name",
      tellUsAbout: "Tell us about your project or how we can help...",
      remoteServices: "Remote services available worldwide",
      mondayFriday: "Monday - Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
      moroccoTime: "* All times are in Morocco Standard Time (GMT+1)",
    },

    home: {
      heroTitle: "Your Digital Transformation Partner",
      heroSubtitle: "Work less. Achieve more.",
      heroDescription: "CTL builds AI-driven solutions that save time, boost sales, and keep you ahead.",
      heroSlogan: "Work Less. Achieve More.", // English translation for heroSlogan
      heroEyebrow: "INTELLIGENCE THAT TRANSFORMS BUSINESSES",
      heroTitlePrefix: "Artificial intelligence in service of",
      heroTitleHighlight: "your performance.",
      heroPrimaryCta: "Discover our solutions",
      heroSecondaryCta: "See our use cases",
      heroCard1Title: "Tailored AI",
      heroCard1Description: "Solutions adapted to your business challenges.",
      heroCard2Title: "Smart automation",
      heroCard2Description: "Optimize your processes and gain efficiency.",
      heroCard3Title: "Measurable performance",
      heroCard3Description: "Concrete results, tracked and quantified.",
      heroCard4Title: "Real impact",
      heroCard4Description: "Create more value and stay ahead of the curve.",
      aiPoweredTitle: "AI-Powered Customer Engagement",
      aiPoweredDescription:
        "Transform how you interact with your audience. Our Darija-enabled conversational agents deliver authentic, localized experiences while seamlessly integrating with your existing systems to boost retention and conversion.",
      workflowTitle: "Intelligent Workflow Orchestration",
      workflowDescription:
        "We architect and deploy real-time, end-to-end automation ecosystems that streamline manual processes, reduce overhead, and unlock measurable ROI. By replacing repetitive human-driven tasks with scalable, data-driven systems, we help your organization achieve unmatched speed, accuracy, and profitability.",
      madeInMoroccoTitle: "Made in Morocco",
      madeInMoroccoDescription:
        "Proudly built in Morocco, CTL solutions combine a deep understanding of local markets with cutting-edge global AI practices—ensuring your business gains a competitive advantage while staying compliant and future-ready.",
      blogEyebrow: "LATEST INSIGHTS",
      blogTitleLine1: "Stay Updated With",
      blogTitleHighlight: "Our Latest Stories",
      blogSubtitle: "Discover insights on digital transformation, technology trends, and industry innovations.",
      blogViewAll: "View All",
      blogLatestBadge: "Latest",
      blogViewAllArticles: "View All Articles",
      exploreProductsEyebrow: "OUR SOLUTIONS",
      exploreProducts: "Explore Our Products",
      exploreProductsDescription:
        "CTL offers a suite of cutting-edge AI and development solutions tailored to empower your business.",
      aiExcellenceTitle: "AI Excellence",
      aiExcellenceDescription:
        "We operate at the intersection of innovation and execution — leveraging the world's leading AI and automation platforms to deliver intelligent, high-impact solutions tailored to your business.",
      poweredByTitle: "Powered by Industry-Leading AI Tools",
      ourCoreProducts: "Our Core Products",
      trustedByEyebrow: "TRUSTED BY",
      trustedByTitle: "Trusted by Moroccan Leaders",
      founderWordTitle: "A Word From Our Founder",
      founderQuote:
        "Digital transformation is not just about technology — it's about unlocking human potential. At CTL, we build real, useful, and accessible solutions. Contributing to Morocco Digital 2030 is our way of helping shape a more modern, connected, and human-centered Morocco.",
      founderName: "Mohamed Hamza Benthami",
      founderTitle: "CEO, CTL",
      founderContext:
        "Excerpt from his speech delivered at the Chamber of Commerce, Industry and Services of Rabat-Salé-Kénitra",
      readyToStart: "Ready to Get Started?",
      readyToStartDescription:
        "Contact us for a free initial consultation and discover how the CTL team can transform your business.",
      getFreeConsultation: "Get Your Free Consultation",
      callUs: "Call Us",
      callUsDescription: "Speak directly with our experts",
      emailUs: "Email Us",
      emailUsDescription: "Send us your project details",
      visitUs: "Visit Us",
      visitUsDescription: "Meet us in person",
      partnerForGrowth: "Your Partner for AI-Powered Growth",
      learnAboutMainProducts: "Learn About Our Main AI Products",
    },

    about: {
      title: "About CTL",
      subtitle:
        "We're on a mission to democratize AI for businesses, making advanced technology accessible, affordable, and culturally relevant.",
      mission: "Our Mission",
      missionDescription:
        "To empower businesses with adaptable AI technologies that respect their language, culture, and goals—while offering expert AI auditing as a strategic option for those ready to accelerate innovation and efficiency.",
      vision: "Our Vision",
      visionDescription:
        "To be the trusted AI partner in North Africa and beyond, recognized for delivering culturally-aware, multilingual AI solutions and advisory services that fuel meaningful business growth.",
      values: "Our Values",
      valuesDescription:
        "We prioritize integrity, innovation, and partnership—creating technology and insights that enhance human collaboration and empower organizations to thrive.",
      ceoWordTitle: "A Word from Our CEO",
      ceoQuote:
        "Digital transformation transcends technology; it focuses on unlocking human potential. At CTL, we create practical, accessible solutions that drive progress. By contributing to Morocco Digital 2030, we aim to help shape a modern, connected, and human-centered Morocco.",
      corePrinciplesTitle: "Our Core Principles",
      corePrinciplesDescription: "These principles guide everything we do at CTL.",
      flexibleInnovation: "Flexible Innovation",
      flexibleInnovationDescription:
        "We offer solutions and services that fit your business's unique pace and ambition—from foundational AI tools to advanced audits and strategic insights.",
      culturalRelevance: "Cultural Relevance",
      culturalRelevanceDescription:
        "Our AI understands and respects the languages, values, and business contexts of the communities we serve.",
      purposeDrivenTech: "Purpose-Driven Technology",
      purposeDrivenTechDescription:
        "Every product and service we create is designed to solve real challenges and deliver measurable value.",
      readyToTransform: "Ready to Transform Your Business?",
      readyToTransformDescription:
        "Whether you're looking for AI solutions or want to start with a comprehensive AI audit, we're here to help you succeed.",
      getStartedToday: "Get Started Today",
      learnAboutTransformation: "Learn About Our Digital Transformation Process",
    },

    products: {
      title: "Explore Our Products",
      subtitle: "CTL offers a suite of cutting-edge AI and development solutions tailored to empower your business.",
      aiExcellenceTitle: "AI Excellence at the Core",
      aiExcellenceDescription:
        "We operate at the intersection of innovation and execution — leveraging the world's leading AI and automation platforms to deliver intelligent, high-impact solutions tailored to your business.",
      readyToElevate: "Ready to Elevate Your Business with CTL?",
      readyToElevateDescription:
        "Contact us today to discuss your specific needs and find the perfect AI solution for you.",
      getPersonalizedConsultation: "Get a Personalized Consultation",

      // New keys for product details
      overview: "Overview",
      technicalDetails: "Technical Details",
      keyCapabilities: "Key Capabilities",
      roadmap: "Roadmap",
      workflow: "Workflow",
      securityCompliance: "Security & Compliance",
      performanceDeployment: "Performance & Deployment",
      hostingDeployment: "Hosting & Deployment",
      techHighlights: "Tech Highlights",
      typicalUseCases: "Typical Use-Cases",

      product1Name: "Intelligent Conversational Agents (Smart Agents)",
      product1Overview:
        "Our cutting-edge conversational AI solutions empower organizations across e-commerce, government service centers, and real estate sectors to deliver seamless, personalized customer engagement. Designed for true omnichannel communication, these agents operate effortlessly on platforms including WhatsApp, Instagram, and Facebook Messenger. Powered by advanced OpenAI and Anthropic language models, they integrate securely with any REST or GraphQL API, enabling real-time access to product information, order statuses, and case management.",
      product1Capabilities: {
        multilingual: "Multilingual support (Arabic Darija, French, English, Arabic Classic, Spanish, and more)",
        dynamicSearch: "Dynamic product and service search with interactive carousels",
        secureOrders: "Secure order and case status look-ups via API",
        conditionalFlows: "Sophisticated conditional flows and slot filling",
        humanHandoff: "Human-agent handoff via real-time dashboards",
        analytics: "Comprehensive analytics on user sessions, satisfaction, and conversion metrics",
      },
      product1Security: "API keys scoped per client, GDPR-compliant, with options for EU-Central data residency.",
      product1Hosting: "Hosted on a secure cloud runtime, easily embedded on client sites.",
      product1Roadmap: {
        imageProcessing: "Image processing capabilities for receipts and IDs",
        analyticsExport: "Self-service analytics export",
      },
      product1SecurityLabel: "Security & Compliance",
      product1HostingLabel: "Hosting & Deployment",

      product2Name: "Personal AI Assistant",
      product2Overview:
        "Our enterprise-grade AI assistant infrastructure is customized per organization, configuring distinct profiles tailored to specific employees or roles based on business needs. This multi-agent system automates key workplace functions, streamlining workflows and enhancing productivity.",
      product2Capabilities: {
        emailLabeling: "Reading and labeling emails",
        documentProcessing: "Processing documents and structured data",
        draftingEmails: "Drafting and sending Gmail and Outlook messages",
        schedulingMeetings: "Scheduling meetings and managing calendars, including Google Calendar and Google Meet",
        voiceCalls: "Automates inbound and outbound voice calls",
        contextChat:
          "Context-aware chat accessible via an infrastructure configured specifically for your organization",
        notionIntegration: "Integration with Notion and Sheets for task and data management",
        webSearch: "Web search and summarization functionalities",
      },
      product2Security:
        "Google OAuth with least-privilege scopes, encrypted data vaults, and optional enterprise-grade SAML SSO.",
      product2Performance: "Low latency task execution with scalable, self-hosted and white-label deployment options.",
      product2Roadmap: {
        contextRetention: "Long-term context retention via vector memory",
        mobileApp: "Mobile progressive web app",
        voiceMode: "Voice-only interaction mode",
      },
      product2PerformanceLabel: "Performance & Deployment",

      product3Name: "Personalized B2B Outreach Automation",
      product3Overview:
        "Our comprehensive lead generation and outreach platform streamlines the entire campaign lifecycle—from intelligent lead scraping and enrichment, to crafting hyper-personalized email openers and executing sequenced campaigns using warmed-up mailboxes. Built for high deliverability and compliance, this solution accelerates business development efforts with data-driven precision.",
      product3Workflow: [
        "Integration with LinkedIn Sales Navigator for lead sourcing",
        "Email verification and validation processes",
        "AI-generated personalized messaging",
        "Automated campaign warm-up and sequencing",
        "Real-time analytics with optional customizable dashboards",
      ],
      product3Compliance: [
        "Automatic SPF, DKIM, DMARC checks",
        "GDPR-compliant unsubscribe and forget-me mechanisms",
        "Bounce management",
      ],
      product3Roadmap: {
        crmIntegration: "CRM integration",
        multichannelOutreach: "Multichannel outreach including LinkedIn DMs",
        languagePersonalization: "Language-specific personalization models",
      },

      product4Name: "SaaS Web Sites & Custom Dashboards",
      product4Overview:
        "We specialize in delivering scalable, high-performance digital infrastructure for SaaS companies and enterprises. Our solutions include marketing websites, client portals, and real-time analytics dashboards built with custom React components and secure backend architectures. Designed for robustness, security, and exceptional user experience, our platforms support seamless integration and operational agility.",
      product4TechHighlights: [
        "Strong security foundations: row-level data access control, TLS encryption, GDPR and regional compliance",
        "Robust build pipelines with continuous integration and deployment",
        "Pixel-perfect UI crafted with Tailwind CSS",
        "Backend powered by PostgreSQL with comprehensive authentication, role-based access control, and integrated billing modules",
      ],
      product4UseCases: "Landing pages, SaaS administration panels, partner portals, KPI and operational dashboards.",
      product4Roadmap: {
        aiCopywriting: "One-click AI-powered copywriting blocks",
        multiTenantTheming: "Multi-tenant theming",
        isoHosting: "ISO 27001 certified hosting options",
      },
      product4TechHighlightsLabel: "Tech Highlights",
      product4UseCasesLabel: "Typical Use-Cases",

      product5Name: "Voice Agent",
      product5Overview:
        "Advanced AI-powered voice solutions that enable natural, human-like conversations through phone calls and voice interfaces. Our voice agents handle customer inquiries, appointment scheduling, and support tasks with sophisticated speech recognition and natural language processing capabilities, providing seamless voice-first experiences across various industries.",

      product6Name: "Custom AI Solution",
      product6Overview:
        "Tailored artificial intelligence solutions designed specifically for your unique business requirements. Our bespoke AI development approach ensures that every solution is crafted to address your specific challenges, integrate seamlessly with your existing systems, and scale with your business growth. From concept to deployment, we work closely with you to create AI solutions that deliver measurable results.",
    },

    digitalTransformation: {
      title: "Our Digital Transformation Procedure",
      subtitle: "A clear, step-by-step approach to guide your business through successful digital evolution with CTL.",
      startTransformation: "Start Your Transformation",
      learnAboutCTL: "Learn About CTL",
      flowchartTitle: "CTL Corporate Digital Transformation Flowchart",
      flowchartDescription:
        "Our proven methodology ensures a smooth and effective journey from initial concept to sustained growth.",
      scrollInstruction: "Scroll right to view the full flowchart",
      learnAboutProcess: "Learn About Our Digital Transformation Process",

      phases: {
        phase1: {
          title: "Client On-boarding & alignment",
          items: [
            "Product Proposal",
            "Overall efficiency seeking",
            "Product IDEA or Transformation mapping",
            "Kickoff Meetings & Stakeholder mapping",
            "Strategic Validation",
          ],
        },
        phase2: {
          title: "Discovery",
          items: [
            {
              heading: "Stakeholder Interviews",
              content: "Across departments to gather pain points, needs, and internal dynamics",
            },
            {
              heading: "Data & Process Audit",
              content: "Identify inefficiencies, redundancies, tech gaps, customer complaints",
            },
            {
              heading: "Problem Framing",
              content: "Synthesize findings into clear challenge statements",
            },
          ],
        },
        phase3: {
          title: "Ideation",
          items: [
            {
              heading: "Design Thinking Sprints",
              content: "Cross-functional teams generate potential solutions",
            },
            {
              heading: "Expert Review & Feasibility Check",
              content: "→ Evaluate technical & operational viability\n→ Consider existing systems, budget, timeline",
            },
            {
              heading: "Submission of Shortlisted Ideas",
              content: "→ Documented solutions ready for assessment",
            },
          ],
        },
        phase4: {
          title: "Validation",
          items: [
            {
              heading: "Solution Scoping",
              content: "→ Define MVP, KPIs, and resource requirements",
            },
            {
              heading: "Project Risk Identification (PRI)",
              content: "→ Map possible tech, legal, financial, change management",
            },
            {
              heading: "Project Risk Assessment (PRA)",
              content: "→ Prioritize or refine based on impact/probability\n→ Business case creation",
            },
          ],
        },
        phase5: {
          title: "Co-Creation Checkpoint",
          items: [
            {
              heading: "Client Review & Approval",
              content: "→ Confirm alignment, resource commitment, and sponsorship\n→ Proceed to build phase",
            },
          ],
        },
        phase6: {
          title: "Deployment",
          items: [
            {
              heading: "MVP Build & Rollout",
              content: "→ Agile implementation of solution\n→ Pilot deployment with real users",
            },
            {
              heading: "Testing & Iteration Loop",
              content: "→ User feedback collection\n→ Adjustments before full-scale release",
            },
          ],
        },
        phase7: {
          title: "GROWTH & MONITORING",
          items: [
            {
              heading: "Performance Tracking",
              content: "→ Monitor KPIs, usage, user satisfaction\n→ Continuous improvements",
            },
            {
              heading: "Scaling Strategy",
              content: "If Internal: Cross-department rollout\nIf External: Product packaging & commercialization",
            },
            {
              heading: "Knowledge Transfer & Handover",
              content: "→ Train internal teams\n→ Document learning for future reuse",
            },
          ],
        },
      },

      readyToTransform: "Ready to Transform Your Business?",
      readyToTransformDescription: "Let's discuss how CTL's structured approach can drive your digital success.",
      scheduleConsultation: "Schedule a Consultation",
      morocco2030Title: "Alignment with Royal Vision Morocco 2030",
      morocco2030Subtitle:
        "CTL's strategy and business model perfectly align with Morocco's royal vision for digitalization 2030, actively contributing to positioning Morocco as a regional digital hub.",
      royalVisionTitle: "Royal Vision",
      royalVisionDescription:
        "Under the high guidance of His Majesty King Mohammed VI, digital transformation has become a national priority, positioning Morocco as a regional leader in technological innovation.",
      royalQuote:
        "Digital technology is a structural change shaping the world, enabling new production and consumption models.",
      royalQuoteAttribution: "National Strategy Digital Morocco 2030",
      royalQuoteFrench:
        "Digital technology constitutes a structural change in the way we understand the world around us, as it enables the emergence of new production and consumption patterns capable of increasing investment opportunities and consequently creating more jobs.",
      royalQuoteAttributionFrench: "Message from His Majesty King Mohammed VI, July 2022",
      strategicAlignmentTitle: "CTL Strategic Alignment",
      alignmentPoints: [
        "Creation of products that contribute to digitalizing public and private Moroccan services.",
        "Development of qualified digital talents",
        "Innovation in responsible artificial intelligence",
        "Contribution to the national digital economy",
      ],
      digitalMoroccoVision:
        "Make Morocco a Digital Hub to accelerate the social and economic development of the Kingdom",
      digitalMoroccoVisionDescription:
        "The enlightened Vision of His Majesty King Mohammed VI has placed digital at the center of national priorities, endorsed by the New Development Model which establishes digital as a true lever for development.",
      nationalObjectives2030: "National Objectives 2030",
      egdiRanking: "50th global EGDI ranking",
      egdiRankingCurrent: "(currently 113th)",
      directJobsCreated: "240K direct jobs created",
      gdpContribution: "100Bn MAD GDP contribution",
      strategicAxes: "2 Strategic Axes",
      strategicAxesDescription:
        "To achieve these objectives, Digital Morocco 2030 is based on 2 strategic axes and 3 catalysts",
      digitalizePublicServices: "Digitalize public services",
      digitalizePublicServicesDescription: "To better serve citizens and businesses (e-Gov)",
      dynamizeDigitalEconomy: "Dynamize the digital economy",
      dynamizeDigitalEconomyDescription: "To produce Moroccan digital solutions and create value",
      officialDocumentLink: "Consult Official Document",
      consultOfficialDocument: 'Consult the Official Document "Digital Morocco 2030"',
      objective1Title: "Regional Digital Hub",
      objective1Description:
        "Position Morocco as a center of technological excellence in North Africa and the Middle East.",
      objective2Title: "Digitalized Public Services",
      objective2Description:
        "Modernize administration for faster and easier access to services for citizens and businesses.",
      objective3Title: "Dynamic Digital Economy",
      objective3Description: "Stimulate job creation and innovation in emerging technology sectors.",
      learnAboutOurAlignment: "Learn More About Our Alignment",
    },

    csr: {
      title: "Corporate Social Responsibility",
      subtitle:
        "At Charikate Tikniate Lrhade, we believe that the power of technology must be extended beyond business — it must uplift communities and create equal opportunities for all.",
      coreBelief: "Our Core Belief",
      coreBeliefQuote: "Technology is not just for innovation — it's a responsibility.",
      partnershipTitle: "Our Partnership",
      partnershipDescription:
        "As part of our CSR commitment, we proudly collaborate with Al-Salam Foundation for Social Development – Meknes Branch, a Moroccan non-profit organization dedicated to supporting orphans, underserved families, and rural communities.",
      foundationName: "Al-Salam Foundation",
      foundationDescription:
        "A dedicated Moroccan non-profit organization committed to creating positive change in the lives of orphans, underserved families, and rural communities across Morocco.",
      contributionsTitle: "Our Contributions",
      contributionsDescription:
        "Through this partnership, we contribute to meaningful initiatives that create lasting impact.",
      aiEducation: "AI Education Access",
      aiEducationDescription:
        "Organizing introductory workshops and hands-on training in artificial intelligence for youth in remote areas, making cutting-edge technology accessible to underserved communities.",
      digitalInclusion: "Digital Inclusion",
      digitalInclusionDescription:
        "Providing resources, mentorship, and digital literacy tools to bridge the technology gap and ensure equal access to digital opportunities for all community members.",
      sustainableImpact: "Sustainable Impact",
      sustainableImpactDescription:
        "Empowering individuals with future-ready skills to unlock economic opportunities and long-term growth, creating sustainable pathways to prosperity.",
      futureInitiatives: "Future Initiatives",
      futureInitiativesDescription:
        "We're continuously expanding our social impact programs to reach more communities and create greater change.",
      aiInnovationLabs: "AI Innovation Labs",
      aiInnovationLabsDescription:
        "Establishing permanent AI learning centers in rural areas to provide ongoing education and support for technology adoption.",
      mentorshipPrograms: "Mentorship Programs",
      mentorshipProgramsDescription:
        "Creating long-term mentorship opportunities connecting urban tech professionals with rural youth interested in technology careers.",
      digitalInfrastructure: "Digital Infrastructure",
      digitalInfrastructureDescription:
        "Supporting the development of digital infrastructure in underserved areas to improve connectivity and access to online resources.",
      economicEmpowerment: "Economic Empowerment",
      economicEmpowermentDescription:
        "Developing programs that help community members leverage technology skills for entrepreneurship and economic independence.",
      joinMission: "Join Our Mission",
      joinMissionDescription:
        "Partner with us to extend the power of technology beyond business and create meaningful change in communities across Morocco.",
      partnerWithUs: "Partner With Us",
      learnAboutTransformation: "Learn About Our Digital Transformation Process",
    },

    contact: {
      title: "Get in Touch",
      subtitle: "Ready to transform your business? Let's discuss how CTL can help you achieve your digital goals.",
      sendMessage: "Send us a Message",
      sendMessageDescription: "Fill out the form below and we'll get back to you within 24 hours.",
      contactInformation: "Contact Information",
      successMessage: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      errorMessage: "Sorry, there was an error sending your message. Please try again.",
    },
  },
}
