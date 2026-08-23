export interface ProductTranslation {
  name: string
  overview: string
  capabilities?: string[]
  workflow?: string[]
  securityCompliance?: string
  hostingDeployment?: string
  performanceDeployment?: string
  techHighlights?: string[]
  typicalUseCases?: string
  roadmap?: string[]
}

export const productTranslations: Record<string, { fr: ProductTranslation; ar: ProductTranslation }> = {
  "intelligent-conversational-agents": {
    fr: {
      name: "Agents Conversationnels Intelligents (Agents Intelligents)",
      overview:
        "Nos solutions d'IA conversationnelle de pointe permettent aux organisations des secteurs e-commerce, centres de services gouvernementaux et immobilier de livrer un engagement client personnalisé et fluide. Conçus pour une communication omnicanale véritable, ces agents opèrent sans effort sur des plateformes incluant WhatsApp, Instagram et Facebook Messenger. Alimentés par des modèles de langage avancés OpenAI et Anthropic, ils s'intègrent de manière sécurisée avec toute API REST ou GraphQL, permettant l'accès en temps réel aux informations produits, statuts de commandes et gestion de cas.",
      capabilities: [
        "Support multilingue (Darija arabe, français, anglais, arabe classique, espagnol, et plus)",
        "Recherche dynamique de produits et services avec carrousels interactifs",
        "Recherches sécurisées de statuts de commandes et cas via API",
        "Flux conditionnels sophistiqués et remplissage de créneaux",
        "Transfert vers agent humain via tableaux de bord en temps réel",
        "Analyses complètes sur les sessions utilisateur, satisfaction et métriques de conversion",
      ],
      workflow: [
        "Le client initie une conversation sur la plateforme de son choix",
        "L'agent IA analyse l'intention et le contexte grâce à un NLP avancé",
        "Le système récupère les données pertinentes via des connexions API sécurisées",
        "L'agent fournit une réponse personnalisée avec des informations exploitables",
        "L'historique des conversations et les analyses sont enregistrés pour une amélioration continue",
      ],
      securityCompliance: "Clés API étendues par client, conforme RGPD, avec options de résidence de données EU-Central.",
      hostingDeployment: "Hébergé sur un runtime cloud sécurisé, facilement intégrable sur les sites clients.",
      techHighlights: [
        "SLA de disponibilité de 99,9 % avec systèmes de basculement redondants",
        "Temps de réponse inférieur à 200 ms pour une expérience utilisateur optimale",
        "Support multilingue incluant l'arabe et le français",
        "Analyse de sentiment avancée et détection des émotions",
      ],
      typicalUseCases:
        "Automatisation du support client, Qualification des prospects, Suivi des commandes, Prise de rendez-vous, Gestion des FAQ",
      roadmap: [
        "Capacités de traitement d'images pour reçus et pièces d'identité",
        "Export d'analyses en libre-service",
      ],
    },
    ar: {
      name: "الوكلاء المحادثون الأذكياء (الوكلاء الأذكياء)",
      overview:
        "حلول الذكاء الاصطناعي المحادثة المتطورة لدينا تمكن المنظمات عبر قطاعات التجارة الإلكترونية ومراكز الخدمات الحكومية والعقارات من تقديم تفاعل عملاء شخصي وسلس. مصممة للتواصل الشامل عبر القنوات، هذه الوكلاء تعمل بسهولة على منصات تشمل واتساب وإنستغرام وفيسبوك ماسنجر. مدعومة بنماذج لغة متقدمة من OpenAI وAnthropic، تتكامل بأمان مع أي REST أو GraphQL API، مما يتيح الوصول في الوقت الفعلي لمعلومات المنتجات وحالات الطلبات وإدارة الحالات.",
      capabilities: [
        "دعم متعدد اللغات (الدارجة المغربية، الفرنسية، الإنجليزية، العربية الفصحى، الإسبانية، والمزيد)",
        "بحث ديناميكي للمنتجات والخدمات مع دوارات تفاعلية",
        "عمليات بحث آمنة لحالات الطلبات والحالات عبر API",
        "تدفقات شرطية متطورة وملء الفتحات",
        "تسليم للوكيل البشري عبر لوحات المعلومات في الوقت الفعلي",
        "تحليلات شاملة لجلسات المستخدمين والرضا ومقاييس التحويل",
      ],
      workflow: [
        "يبدأ العميل محادثة على المنصة المفضلة لديه",
        "يحلل وكيل الذكاء الاصطناعي النية والسياق باستخدام معالجة لغة طبيعية متقدمة",
        "يسترجع النظام البيانات ذات الصلة عبر اتصالات API آمنة",
        "يقدم الوكيل ردًا شخصيًا مع معلومات قابلة للتنفيذ",
        "يتم تسجيل سجل المحادثات والتحليلات لتحسين مستمر",
      ],
      securityCompliance: "مفاتيح API محددة النطاق لكل عميل، متوافقة مع GDPR، مع خيارات إقامة البيانات في الاتحاد الأوروبي المركزي.",
      hostingDeployment: "مستضافة على بيئة تشغيل سحابية آمنة، سهلة التضمين في مواقع العملاء.",
      techHighlights: [
        "اتفاقية مستوى خدمة بنسبة توفر 99.9% مع أنظمة تبديل احتياطي زائدة",
        "زمن استجابة أقل من 200 ميلي ثانية لتجربة مستخدم مثالية",
        "دعم متعدد اللغات يشمل العربية والفرنسية",
        "تحليل متقدم للمشاعر وكشف الانفعالات",
      ],
      typicalUseCases: "أتمتة دعم العملاء، تأهيل العملاء المحتملين، تتبع الطلبات، جدولة المواعيد، إدارة الأسئلة الشائعة",
      roadmap: ["قدرات معالجة الصور للإيصالات والهويات", "تصدير التحليلات بالخدمة الذاتية"],
    },
  },

  "personal-ai-assistant": {
    fr: {
      name: "Assistant IA Personnel",
      overview:
        "Notre infrastructure d'assistant IA de niveau entreprise est personnalisée par organisation, configurant des profils distincts adaptés à des employés ou rôles spécifiques selon les besoins commerciaux. Ce système multi-agents automatise les fonctions clés du lieu de travail, rationalisant les flux de travail et améliorant la productivité.",
      capabilities: [
        "Lecture et étiquetage des emails",
        "Traitement de documents et données structurées",
        "Rédaction et envoi de messages Gmail et Outlook",
        "Planification de réunions et gestion de calendriers, incluant Google Calendar et Google Meet",
        "Automatise les appels vocaux entrants et sortants",
        "Chat contextuel accessible via une infrastructure configurée spécifiquement pour votre organisation",
        "Intégration avec Notion et Sheets pour la gestion des tâches et données",
        "Fonctionnalités de recherche web et résumé",
      ],
      workflow: [
        "L'employé s'authentifie via l'intégration SSO",
        "L'assistant IA charge le profil et les permissions personnalisés",
        "L'utilisateur demande de l'aide via chat, email ou interface vocale",
        "Le système traite la demande en utilisant les modèles IA et sources de données appropriés",
        "L'assistant fournit une réponse et enregistre l'interaction à des fins de conformité",
      ],
      securityCompliance:
        "Google OAuth avec portées de moindre privilège, coffres de données chiffrés, et SSO SAML de niveau entreprise optionnel.",
      performanceDeployment:
        "Exécution de tâches à faible latence avec options de déploiement évolutives, auto-hébergées et en marque blanche.",
      techHighlights: [
        "Intégration transparente avec Microsoft 365 et Google Workspace",
        "Réglage fin de modèles IA personnalisés pour des tâches spécifiques à l'organisation",
        "Fonctionnalités de collaboration en temps réel avec les membres de l'équipe",
        "Analyses avancées et insights de productivité",
      ],
      typicalUseCases:
        "Planification de réunions, Résumé de documents, Rédaction d'emails, Analyse de données, Assistance à la gestion de projets",
      roadmap: [
        "Rétention de contexte à long terme via mémoire vectorielle",
        "Application web progressive mobile",
        "Mode d'interaction vocal uniquement",
      ],
    },
    ar: {
      name: "المساعد الشخصي بالذكاء الاصطناعي",
      overview:
        "بنية المساعد بالذكاء الاصطناعي على مستوى المؤسسة مخصصة لكل منظمة، تكوين ملفات تعريف مميزة مصممة خصيصًا لموظفين أو أدوار محددة بناءً على احتياجات العمل. هذا النظام متعدد الوكلاء يؤتمت وظائف مكان العمل الرئيسية، مما يبسط سير العمل ويعزز الإنتاجية.",
      capabilities: [
        "قراءة وتصنيف رسائل البريد الإلكتروني",
        "معالجة الوثائق والبيانات المنظمة",
        "صياغة وإرسال رسائل Gmail وOutlook",
        "جدولة الاجتماعات وإدارة التقاويم، بما في ذلك Google Calendar وGoogle Meet",
        "أتمتة المكالمات الصوتية الواردة والصادرة",
        "دردشة واعية بالسياق يمكن الوصول إليها عبر بنية تحتية مكونة خصيصًا لمؤسستك",
        "التكامل مع Notion وSheets لإدارة المهام والبيانات",
        "وظائف البحث على الويب والتلخيص",
      ],
      workflow: [
        "يصادق الموظف عبر تكامل SSO",
        "يحمّل المساعد الذكي الملف الشخصي والصلاحيات المخصصة",
        "يطلب المستخدم المساعدة عبر الدردشة أو البريد الإلكتروني أو الواجهة الصوتية",
        "يعالج النظام الطلب باستخدام نماذج الذكاء الاصطناعي ومصادر البيانات المناسبة",
        "يقدم المساعد ردًا ويسجل التفاعل لأغراض الامتثال",
      ],
      securityCompliance: "Google OAuth مع نطاقات أقل امتياز، خزائن بيانات مشفرة، وSSO SAML على مستوى المؤسسة اختياري.",
      performanceDeployment: "تنفيذ مهام بزمن استجابة منخفض مع خيارات نشر قابلة للتطوير ومستضافة ذاتيًا وبعلامة بيضاء.",
      techHighlights: [
        "تكامل سلس مع Microsoft 365 وGoogle Workspace",
        "ضبط دقيق لنماذج الذكاء الاصطناعي المخصصة للمهام الخاصة بالمنظمة",
        "ميزات تعاون في الوقت الفعلي مع أعضاء الفريق",
        "تحليلات متقدمة ورؤى حول الإنتاجية",
      ],
      typicalUseCases: "جدولة الاجتماعات، تلخيص المستندات، صياغة رسائل البريد الإلكتروني، تحليل البيانات، المساعدة في إدارة المشاريع",
      roadmap: [
        "الاحتفاظ بالسياق طويل المدى عبر الذاكرة الشعاعية",
        "تطبيق ويب تقدمي للهاتف المحمول",
        "وضع التفاعل الصوتي فقط",
      ],
    },
  },

  "personalized-b2b-outreach": {
    fr: {
      name: "Automatisation de Prospection B2B Personnalisée",
      overview:
        "Notre plateforme complète de génération de leads et de prospection rationalise l'ensemble du cycle de campagne—du scraping intelligent de leads et enrichissement, à la création d'ouvertures d'emails hyper-personnalisées et l'exécution de campagnes séquencées utilisant des boîtes mail réchauffées. Construite pour une haute délivrabilité et conformité, cette solution accélère les efforts de développement commercial avec une précision basée sur les données.",
      capabilities: [
        "Génération intelligente de leads et enrichissement des données",
        "Génération de contenu d'email personnalisé alimentée par l'IA",
        "Séquences d'emails automatisées avec un timing intelligent",
        "Optimisation de la délivrabilité avec protocoles de préchauffage",
      ],
      workflow: [
        "Intégration avec LinkedIn Sales Navigator pour le sourcing de leads",
        "Processus de vérification et validation d'emails",
        "Messages personnalisés générés par IA",
        "Réchauffement automatique de campagnes et séquençage",
        "Analyses en temps réel avec tableaux de bord personnalisables optionnels",
      ],
      securityCompliance: "Conforme CAN-SPAM, traitement des données conforme au RGPD, protocoles d'authentification des emails",
      hostingDeployment: "Infrastructure basée sur le cloud avec réseaux mondiaux de livraison d'emails",
      performanceDeployment: "Taux de délivrabilité des emails de 99,8 %, évolutif jusqu'à des milliers d'emails par mois",
      techHighlights: [
        "Personnalisation IA avancée avec des taux de réponse supérieurs de 40 % et plus",
        "Optimisation intelligente de l'heure d'envoi basée sur le comportement du destinataire",
        "Surveillance de la délivrabilité en temps réel et gestion de la réputation",
        "Capacités de tests A/B pour une optimisation continue",
      ],
      typicalUseCases:
        "Campagnes de génération de leads, Prospection commerciale, Développement de partenariats, Promotion d'événements, Lancements de produits",
      roadmap: [
        "Intégration CRM",
        "Prospection multicanale incluant les DM LinkedIn",
        "Modèles de personnalisation spécifiques aux langues",
      ],
    },
    ar: {
      name: "أتمتة التواصل B2B الشخصي",
      overview:
        "منصة توليد العملاء المحتملين والتواصل الشاملة لدينا تبسط دورة الحملة بأكملها—من كشط العملاء المحتملين الذكي والإثراء، إلى صياغة فتحات بريد إلكتروني فائقة الشخصية وتنفيذ حملات متسلسلة باستخدام صناديق بريد مُحمّاة. مبنية للتسليم العالي والامتثال، هذا الحل يسرع جهود تطوير الأعمال بدقة مدفوعة بالبيانات.",
      capabilities: [
        "توليد ذكي للعملاء المحتملين وإثراء البيانات",
        "توليد محتوى بريد إلكتروني شخصي مدعوم بالذكاء الاصطناعي",
        "تسلسلات بريد إلكتروني آلية بتوقيت ذكي",
        "تحسين قابلية التسليم عبر بروتوكولات الإحماء",
      ],
      workflow: [
        "التكامل مع LinkedIn Sales Navigator لمصادر العملاء المحتملين",
        "عمليات التحقق من البريد الإلكتروني والتحقق من الصحة",
        "رسائل شخصية مولدة بالذكاء الاصطناعي",
        "إحماء الحملة التلقائي والتسلسل",
        "تحليلات في الوقت الفعلي مع لوحات معلومات قابلة للتخصيص اختيارية",
      ],
      securityCompliance: "متوافق مع CAN-SPAM، معالجة بيانات متوافقة مع GDPR، بروتوكولات مصادقة البريد الإلكتروني",
      hostingDeployment: "بنية تحتية سحابية مع شبكات عالمية لتسليم البريد الإلكتروني",
      performanceDeployment: "معدل تسليم بريد إلكتروني بنسبة 99.8%، قابل للتوسع إلى آلاف الرسائل شهريًا",
      techHighlights: [
        "تخصيص متقدم بالذكاء الاصطناعي مع معدلات استجابة أعلى بنسبة تفوق 40%",
        "تحسين ذكي لوقت الإرسال بناءً على سلوك المستلم",
        "مراقبة قابلية التسليم في الوقت الفعلي وإدارة السمعة",
        "إمكانيات اختبار A/B للتحسين المستمر",
      ],
      typicalUseCases:
        "حملات توليد العملاء المحتملين، التنقيب عن المبيعات، التواصل من أجل الشراكات، الترويج للفعاليات، إطلاق المنتجات",
      roadmap: [
        "تكامل CRM",
        "التواصل متعدد القنوات بما في ذلك رسائل LinkedIn المباشرة",
        "نماذج الشخصية الخاصة باللغة",
      ],
    },
  },

  "saas-web-dashboards": {
    fr: {
      name: "Sites Web SaaS et Tableaux de Bord Personnalisés",
      overview:
        "Nous nous spécialisons dans la livraison d'infrastructure numérique évolutive et haute performance pour les entreprises SaaS et les grandes entreprises. Nos solutions incluent des sites web marketing, portails clients et tableaux de bord d'analyses en temps réel construits avec des composants React personnalisés et des architectures backend sécurisées. Conçues pour la robustesse, la sécurité et une expérience utilisateur exceptionnelle, nos plateformes supportent l'intégration transparente et l'agilité opérationnelle.",
      capabilities: [
        "Applications React/Next.js personnalisées avec UI/UX moderne",
        "API backend évolutives avec architecture microservices",
        "Fonctionnalités de sécurité et de conformité de niveau entreprise",
        "Tableaux de bord d'analyses et de business intelligence en temps réel",
      ],
      workflow: [
        "Recueil des besoins et planification de l'architecture technique",
        "Conception UI/UX et développement de prototypes",
        "Développement frontend avec React/Next.js et création d'API backend",
        "Intégration avec des services tiers et bases de données",
        "Tests, déploiement et support de maintenance continue",
      ],
      securityCompliance: "Conformité SOC 2, normes de sécurité OWASP, chiffrement des données, authentification sécurisée",
      hostingDeployment: "Déploiement cloud-natif sur AWS, Azure ou Google Cloud Platform",
      performanceDeployment: "Infrastructure à mise à l'échelle automatique, intégration CDN, SLA de disponibilité de 99,9 %",
      techHighlights: [
        "Fondations de sécurité solides : contrôle d'accès aux données au niveau des lignes, chiffrement TLS, conformité RGPD et régionale",
        "Pipelines de construction robustes avec intégration et déploiement continus",
        "UI pixel-perfect créée avec Tailwind CSS",
        "Backend alimenté par PostgreSQL avec authentification complète, contrôle d'accès basé sur les rôles, et modules de facturation intégrés",
        "Visualisations de données interactives intégrées avec Chart.js et Recharts",
      ],
      typicalUseCases:
        "Pages d'atterrissage, panneaux d'administration SaaS, portails partenaires, tableaux de bord KPI et opérationnels.",
      roadmap: [
        "Blocs de rédaction alimentés par IA en un clic",
        "Thématisation multi-locataire",
        "Options d'hébergement certifiées ISO 27001",
      ],
    },
    ar: {
      name: "مواقع SaaS ولوحات المعلومات المخصصة",
      overview:
        "نتخصص في تقديم بنية تحتية رقمية قابلة للتطوير وعالية الأداء لشركات SaaS والمؤسسات. حلولنا تشمل مواقع التسويق وبوابات العملاء ولوحات تحليلات الوقت الفعلي المبنية بمكونات React مخصصة وهياكل خلفية آمنة. مصممة للقوة والأمان وتجربة مستخدم استثنائية، منصاتنا تدعم التكامل السلس والرشاقة التشغيلية.",
      capabilities: [
        "تطبيقات React/Next.js مخصصة بواجهة مستخدم وتجربة مستخدم حديثة",
        "واجهات برمجة تطبيقات خلفية قابلة للتوسع بمعمارية microservices",
        "ميزات أمان وامتثال على مستوى المؤسسات",
        "لوحات معلومات تحليلية وذكاء أعمال في الوقت الفعلي",
      ],
      workflow: [
        "جمع المتطلبات وتخطيط البنية التقنية",
        "تصميم واجهة المستخدم وتطوير النماذج الأولية",
        "تطوير الواجهة الأمامية باستخدام React/Next.js وإنشاء واجهات برمجة الخلفية",
        "التكامل مع خدمات وقواعد بيانات خارجية",
        "الاختبار والنشر ودعم الصيانة المستمرة",
      ],
      securityCompliance: "الامتثال لمعيار SOC 2، معايير أمان OWASP، تشفير البيانات، مصادقة آمنة",
      hostingDeployment: "نشر سحابي أصلي على AWS أو Azure أو Google Cloud Platform",
      performanceDeployment: "بنية تحتية ذاتية التوسع، تكامل CDN، اتفاقية مستوى خدمة بنسبة توفر 99.9%",
      techHighlights: [
        "أسس أمنية قوية: التحكم في الوصول للبيانات على مستوى الصف، تشفير TLS، امتثال GDPR والإقليمي",
        "خطوط بناء قوية مع التكامل والنشر المستمر",
        "واجهة مستخدم مثالية البكسل مصنوعة بـ Tailwind CSS",
        "خلفية مدعومة بـ PostgreSQL مع مصادقة شاملة، التحكم في الوصول القائم على الأدوار، ووحدات الفوترة المتكاملة",
        "تصورات بيانات تفاعلية مدمجة باستخدام Chart.js وRecharts",
      ],
      typicalUseCases: "صفحات الهبوط، لوحات إدارة SaaS، بوابات الشركاء، لوحات معلومات KPI والتشغيلية.",
      roadmap: [
        "كتل الكتابة المدعومة بالذكاء الاصطناعي بنقرة واحدة",
        "تصميم متعدد المستأجرين",
        "خيارات استضافة معتمدة ISO 27001",
      ],
    },
  },

  "voice-agent": {
    fr: {
      name: "Agent Vocal",
      overview:
        "Solutions vocales avancées alimentées par l'IA qui permettent des conversations naturelles et humaines via des appels téléphoniques et des interfaces vocales. Nos agents vocaux gèrent les demandes clients, la planification de rendez-vous et les tâches de support avec des capacités sophistiquées de reconnaissance vocale et de traitement du langage naturel, offrant des expériences vocales fluides dans diverses industries.",
      capabilities: [
        "Reconnaissance et synthèse vocale naturelle",
        "Gestion de conversation en temps réel",
        "Planification et gestion automatisées des rendez-vous",
        "Support vocal multilingue",
        "Analyses d'appels et indicateurs de performance",
        "Intégration avec les systèmes CRM et métier existants",
      ],
      workflow: [
        "L'appel entrant est acheminé vers l'agent vocal IA",
        "Conversion parole-texte avec traitement en temps réel",
        "Reconnaissance d'intention et compréhension du contexte",
        "Génération de réponse avec synthèse vocale appropriée",
        "Exécution de l'action ou transfert humain selon la complexité",
      ],
      securityCompliance:
        "Enregistrement d'appels conforme au RGPD, transmission chiffrée des données vocales, et intégrations API sécurisées",
      performanceDeployment:
        "Traitement vocal à faible latence avec infrastructure cloud évolutive et intégration téléphonique",
      techHighlights: [
        "Annulation avancée du bruit et traitement audio",
        "Intelligence émotionnelle avec analyse de sentiment",
        "Intégration avec les systèmes CRM et métier",
        "Analyses d'appels en temps réel et suivi des performances",
      ],
      typicalUseCases:
        "Appels de support client, Prise de rendez-vous, Prise de commandes, Collecte d'enquêtes, Qualification des prospects",
      roadmap: [
        "Détection avancée des émotions dans la voix",
        "Interactions multimodales voix et texte",
        "Protocoles de sécurité renforcés pour les conversations sensibles",
      ],
    },
    ar: {
      name: "الوكيل الصوتي",
      overview:
        "حلول صوتية متقدمة مدعومة بالذكاء الاصطناعي تمكن المحادثات الطبيعية والشبيهة بالبشر عبر المكالمات الهاتفية وواجهات الصوت. وكلاؤنا الصوتيون يتعاملون مع استفسارات العملاء وجدولة المواعيد ومهام الدعم بقدرات متطورة في التعرف على الكلام ومعالجة اللغة الطبيعية، مما يوفر تجارب صوتية سلسة عبر صناعات مختلفة.",
      capabilities: [
        "تعرف وتوليف طبيعي للكلام",
        "إدارة المحادثات في الوقت الفعلي",
        "جدولة وإدارة آلية للمواعيد",
        "دعم صوتي متعدد اللغات",
        "تحليلات المكالمات ومقاييس الأداء",
        "التكامل مع أنظمة CRM والأنظمة التجارية الحالية",
      ],
      workflow: [
        "يتم توجيه المكالمة الواردة إلى الوكيل الصوتي بالذكاء الاصطناعي",
        "تحويل الكلام إلى نص بمعالجة في الوقت الفعلي",
        "التعرف على النية وفهم السياق",
        "توليد الرد مع توليف صوتي مناسب",
        "تنفيذ الإجراء أو التحويل إلى موظف بشري حسب التعقيد",
      ],
      securityCompliance: "تسجيل مكالمات متوافق مع GDPR، نقل بيانات صوتية مشفرة، وتكاملات API آمنة",
      performanceDeployment: "معالجة صوتية بزمن استجابة منخفض مع بنية تحتية سحابية قابلة للتوسع وتكامل مع أنظمة الاتصال الهاتفي",
      techHighlights: [
        "إلغاء ضوضاء متقدم ومعالجة صوتية",
        "ذكاء عاطفي مع تحليل المشاعر",
        "التكامل مع أنظمة CRM والأنظمة التجارية",
        "تحليلات مكالمات في الوقت الفعلي ومراقبة الأداء",
      ],
      typicalUseCases: "مكالمات دعم العملاء، جدولة المواعيد، تلقي الطلبات، جمع الاستبيانات، تأهيل العملاء المحتملين",
      roadmap: [
        "كشف متقدم للانفعالات في الصوت",
        "تفاعلات صوتية ونصية متعددة الوسائط",
        "بروتوكولات أمان معززة للمحادثات الحساسة",
      ],
    },
  },

  "custom-ai-solution": {
    fr: {
      name: "Solution IA Personnalisée",
      overview:
        "Des solutions d'intelligence artificielle sur mesure conçues spécifiquement pour vos besoins commerciaux uniques. Notre approche de développement IA sur mesure garantit que chaque solution est conçue pour répondre à vos défis spécifiques, s'intègre parfaitement à vos systèmes existants et évolue avec la croissance de votre entreprise. Du concept au déploiement, nous travaillons en étroite collaboration avec vous pour créer des solutions IA qui produisent des résultats mesurables.",
      capabilities: [
        "Architecture IA entièrement personnalisable",
        "Intégration transparente avec les systèmes existants",
        "Solutions évolutives et adaptables",
        "Sécurité et conformité de niveau entreprise",
        "Analyses et rapports personnalisés",
        "Options de déploiement multiplateforme",
      ],
      workflow: [
        "Phase de découverte pour comprendre les exigences et contraintes spécifiques",
        "Analyse de faisabilité technique et conception de l'architecture de la solution",
        "Développement et entraînement de modèles IA personnalisés avec les données du client",
        "Tests d'intégration avec les systèmes et flux de travail existants",
        "Déploiement, surveillance et support d'optimisation continue",
      ],
      securityCompliance:
        "Protocoles de sécurité adaptés selon les exigences de votre secteur et les normes de conformité",
      performanceDeployment:
        "Options de déploiement flexibles incluant des solutions sur site, cloud ou hybrides avec SLA personnalisés",
      techHighlights: [
        "Capacités de recherche et développement IA de pointe",
        "Développement de pipelines de données personnalisés pour des performances de modèle optimales",
        "Fonctionnalités d'IA explicable pour la conformité réglementaire",
        "Systèmes d'apprentissage continu et d'amélioration des modèles",
      ],
      typicalUseCases:
        "Assistance au diagnostic médical, Évaluation des risques financiers, Contrôle qualité industriel, Optimisation de la chaîne d'approvisionnement, Automatisation de la recherche scientifique",
      roadmap: [
        "Capacités d'apprentissage et d'adaptation continus",
        "Traitement avancé du langage naturel",
        "Optimisation et réglage automatisés des performances",
      ],
    },
    ar: {
      name: "حل الذكاء الاصطناعي المخصص",
      overview:
        "حلول ذكاء اصطناعي مصممة خصيصًا لتلبية احتياجات عملك الفريدة. نهجنا في تطوير الذكاء الاصطناعي المخصص يضمن أن كل حل مصمم لمعالجة تحدياتك المحددة، ويتكامل بسلاسة مع أنظمتك الحالية، ويتوسع مع نمو عملك. من الفكرة إلى النشر، نعمل بشكل وثيق معك لإنشاء حلول ذكاء اصطناعي تحقق نتائج قابلة للقياس.",
      capabilities: [
        "بنية ذكاء اصطناعي قابلة للتخصيص بالكامل",
        "تكامل سلس مع الأنظمة الحالية",
        "حلول قابلة للتوسع والتكيف",
        "أمان وامتثال على مستوى المؤسسات",
        "تحليلات وتقارير مخصصة",
        "خيارات نشر متعددة المنصات",
      ],
      workflow: [
        "مرحلة الاستكشاف لفهم المتطلبات والقيود المحددة",
        "تحليل الجدوى التقنية وتصميم بنية الحل",
        "تطوير وتدريب نماذج ذكاء اصطناعي مخصصة باستخدام بيانات العميل",
        "اختبار التكامل مع الأنظمة وسير العمل الحالية",
        "النشر والمراقبة ودعم التحسين المستمر",
      ],
      securityCompliance: "بروتوكولات أمان مصممة خصيصًا وفقًا لمتطلبات قطاعك ومعايير الامتثال",
      performanceDeployment: "خيارات نشر مرنة تشمل حلولاً محلية أو سحابية أو هجينة مع اتفاقيات مستوى خدمة مخصصة",
      techHighlights: [
        "قدرات بحث وتطوير متطورة في الذكاء الاصطناعي",
        "تطوير خطوط بيانات مخصصة لأداء نموذج أمثل",
        "ميزات ذكاء اصطناعي قابل للتفسير للامتثال التنظيمي",
        "أنظمة تعلم مستمر وتحسين النماذج",
      ],
      typicalUseCases:
        "المساعدة في التشخيص الطبي، تقييم المخاطر المالية، مراقبة جودة التصنيع، تحسين سلسلة التوريد، أتمتة البحث العلمي",
      roadmap: [
        "قدرات تعلم وتكيف مستمرة",
        "معالجة متقدمة للغة الطبيعية",
        "تحسين وضبط أداء آليين",
      ],
    },
  },
}
