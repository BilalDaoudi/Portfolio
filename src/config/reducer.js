var informations = {
  
  langue: "fr",
  
  menu: {
    fr: ["Accueil", "À Propos", "Projets", "Contact"],
    en: ["Home", "About", "Projects", "Contact"],
    de: ["Startseite", "Über mich", "Projekte", "Kontakt"],
  },
  
  home: {
    
    fr: [
      "Bienvenue dans mon portfolio",
      
      "Je suis Bilal DAOUDI.",
      
      "Développeur Web Full Stack",
      
      "Plus informations",
      
    ],
    
    en: [
      "Welcome to my portfolio",
      "I am  Bilal DAOUDI.",
      "Web Full Stack Developer",
      "More informations",
    ],
    de: [
      "Willkommen in mein Portfolio",
      "Ich bin  Bilal DAOUDI.",
      "Web Full Stack Developer",
      "Mehr Informationen",
    ],
  },
  about: {
    fr: [
      "INFORMATIONS PRINCIPALES",
      "À PROPOS DE MOI",
      "Salut! Je suis Bilal DAOUDI,",
      " un développeur web full-stack passionné, axé sur des applications efficaces et conviviales. Mon parcours a commencé avec une fascination pour la transformation des idées en expériences numériques interactives. Spécialisé dans le développement front-end et back-end, je crée des interfaces engageantes et une logique robuste pour répondre aux besoins des utilisateurs et aux objectifs commerciaux. J'adore explorer de nouvelles technologies, expérimenter le design et collaborer sur des projets. Consultez mon portfolio pour un aperçu de mon travail. Restons en contact !",
      "CV en anglais",
      "CV en français",
      "Projets",
      "Contactez-moi",
      "Compétences",
      "Éducation",
      "Expériences",
    ],
    en: [
      "MAIN INFORMATION",
      "ABOUT ME",
      "Hello! I am  Bilal DAOUDI,",
      " a web full-stack developer passionate, focused on effective and enjoyable applications. My career started with a fascination for the transformation of ideas into interactive digital experiences. Specialized in front-end and back-end development, I create engaging and robust interfaces that respond to user needs and commercial objectives. I love exploring new technologies, experimenting with design and collaborating on projects. Check out my portfolio for a preview of my work. Stay in touch!",
      "CV in English",
      "CV in French",
      "Projects",
      "Contact me",
      "Skills",
      "Education",
      "Experiences",
    ],
    de: [
      "WICHTIGSTE INFORMATIONEN",
      "ÜBER MICH",
      "Hallo! Ich bin  Bilal DAOUDI,",
      " ein web full-stack developer passionierter, fokussiert auf effektive und lehrreiche Anwendungen. Mein Karriere startete mit einer Fascination für die Transformation von Ideen in interaktive digitale Erlebnisse. Spezialisiert in front-end und back-end Entwicklung, erstelle ich engagierende und robuste Interfaces, die auf Nutzerbedürfnisse und kommerziellen Zielen reagieren. Ich mag es, neue Technologien zu erkunden, Design zu experimentieren und Projekte zu kollaborieren. Überprüfen Sie mein Portfolio für einen Vorschau meiner Arbeit. Stay in touch!",
      "Lebenslauf auf Englisch",
      "Lebenslauf auf Französisch",
      "Projekte",
      "Kontaktieren Sie mich",
      "Fähigkeiten",
      "Bildung",
      "Erfahrungen",
    ],
  },
  contact: {
    fr: [
      "Contact",
      "CONTACTEZ-MOI",
      "Téléphone",
      "E-Mail",
      "Addresse",
      "Nom",
      "Adresse e-mail",
      "Sujet",
      "message",
    ],
    en: [
      "Contact",
      "CONTACT ME",
      "Phone",
      "E-Mail",
      "Address",
      "Name",
      "E-mail address",
      "Subject",
      "message",
    ],
    de: [
      "Kontakt",
      "KONTAKTIERE MICH",
      "Telefon",
      "E-Mail",
      "Adresse",
      "Name",
      "E-mail-Adresse",
      "Betreff",
      "Nachricht",
    ],
  },
  projects: [
    {
      id: 20,
      titre: {
        fr: "Système de transport des colis",
        en: "System of money exchange",
        de: "System des Geldwechsels",
      },
      thumb: "/img/projects/Transport/1.png",
      images: [
        "/img/projects/Transport/0.png",
        "/img/projects/Transport/8.png",
        "/img/projects/Transport/9.png",
        "/img/projects/Transport/10.png",
        "/img/projects/Transport/11.png",
        "/img/projects/Transport/12.png",
        "/img/projects/Transport/1.png",
        "/img/projects/Transport/2.png",
        "/img/projects/Transport/3.png",
        "/img/projects/Transport/4.png",
        "/img/projects/Transport/5.png",
        "/img/projects/Transport/6.png",
        "/img/projects/Transport/7.png",
      ],
      description: {
        fr: "L'application web de gestion de transport de colis permet à un administrateur de gérer efficacement les clients et les agences. Chaque client peut être associé à une ou plusieurs agences, chacune ayant une date de début et de fin d'abonnement. Si l'abonnement d'une agence expire, celle-ci ne peut plus accéder à l'application avant de contacter l'administrateur. Cependant, si une agence décide de ne pas renouveler son abonnement, elle peut toujours consulter ses données sans possibilité d'effectuer d'actions. Les agences peuvent gérer leurs colis en créant et en envoyant des colis, et en suivant leur acheminement. Elles ont également la possibilité de visualiser les colis envoyés par d'autres agences et de valider leur réception.",
        de: "Die Webanwendung für das Transportmanagement ermöglicht einem Administrator, Kunden und Agenturen effizient zu verwalten. Jeder Kunde kann einer oder mehreren Agenturen zugeordnet werden, wobei jede Agentur ein Anfangs- und Enddatum des Abonnements hat. Wenn das Abonnement einer Agentur abläuft, kann diese nicht mehr auf die Anwendung zugreifen, bevor sie den Administrator kontaktiert. Entscheidet sich eine Agentur jedoch, ihr Abonnement nicht zu verlängern, kann sie weiterhin ihre Daten einsehen, jedoch ohne die Möglichkeit, Aktionen durchzuführen. Die Agenturen können ihre Pakete verwalten, indem sie Pakete erstellen, versenden und deren Versand verfolgen. Sie haben auch die Möglichkeit, die von anderen Agenturen versendeten Pakete einzusehen und deren Empfang zu bestätigen.",
        en: "The web application for parcel transport management allows an administrator to efficiently manage clients and agencies. Each client can be associated with one or more agencies, each having a start and end subscription date. If an agency's subscription expires, it cannot access the application until it contacts the administrator. However, if an agency decides not to renew its subscription, it can still view its data without being able to perform any actions. Agencies can manage their parcels by creating, sending, and tracking parcels. They also have the ability to view parcels sent by other agencies and confirm their receipt.",
      },
      Tools:
        "MVC, PHP, MYSQL, HTML5, CSS3, Bootstrap, JavaScript, AJAX, JQuery",
      siteweb: "",
      codesource: "",
      type: "Dynamic",
    },
    {
      id: 1,
      titre: {
        fr: "Système d'échange d'argent",
        en: "System of money exchange",
        de: "System des Geldwechsels",
      },
      thumb: "/img/projects/operation_argents/1.png",
      images: [
        "/img/projects/operation_argents/1.png",
        "/img/projects/operation_argents/2.png",
        "/img/projects/operation_argents/3.png",
        "/img/projects/operation_argents/4.png",
        "/img/projects/operation_argents/5.png",
        "/img/projects/operation_argents/6.png",
        "/img/projects/operation_argents/7.png",
        "/img/projects/operation_argents/8.png",
        "/img/projects/operation_argents/9.png",
        "/img/projects/operation_argents/10.png",
      ],
      description: {
        fr: "Le système de gestion financière offre une solution professionnelle et sécurisée pour les administrateurs et les comptables, leur permettant de gérer efficacement les opérations financières de l'entreprise. Accessible par les administrateurs ou les comptables autorisés, l'application permet la gestion des clients, des devises et des opérations financières avec une grande flexibilité. Les administrateurs peuvent facilement gérer leur portefeuille de clients et leurs devises, ainsi que suivre et filtrer les opérations avec les clients, avec la possibilité d'imprimer des rapports détaillés pour une meilleure analyse. De plus, le système permet la gestion du stock de devises, offrant une visibilité complète sur les avoirs financiers de l'entreprise. Les administrateurs ont également accès à des statistiques détaillées sur les transactions de chaque client, facilitant ainsi la prise de décision éclairée. Les administrateurs peuvent également voir les comptables qui se connectent au système, ce qui permet de suivre les activités et d'assurer la conformité et la sécurité des opérations. Les comptables, quant à eux, peuvent gérer les opérations financières des clients assignés, en effectuant des actions telles que l'ajout, la modification ou la suppression, soumises à la confirmation de l'administrateur pour garantir la sécurité et la précision des données. De plus, pour assurer la sécurité des informations, l'application se déconnecte automatiquement après cinq minutes d'inactivité. En résumé, le système de gestion financière offre une solution complète et sécurisée pour la gestion des opérations financières de l'entreprise, offrant une efficacité accrue et une meilleure gestion des risques.",
        de : "Das Finanzverwaltungssystem bietet eine professionelle und sichere Lösung für Administratoren und Buchhalter, die ihnen ermöglicht, die Finanzoperationen des Unternehmens effizient zu verwalten. Zugänglich für autorisierte Administratoren oder Buchhalter, erlaubt die Anwendung die Verwaltung von Kunden, Währungen und Finanzoperationen mit großer Flexibilität. Administratoren können ihr Kundenportfolio und ihre Währungen leicht verwalten sowie Operationen mit Kunden verfolgen und filtern, mit der Möglichkeit, detaillierte Berichte für eine bessere Analyse auszudrucken. Darüber hinaus ermöglicht das System die Verwaltung des Währungsbestands, wodurch eine vollständige Sicht auf die finanziellen Vermögenswerte des Unternehmens gewährleistet wird. Administratoren haben auch Zugang zu detaillierten Statistiken über die Transaktionen jedes Kunden, was fundierte Entscheidungen erleichtert. Administratoren können auch die Buchhalter sehen, die sich in das System einloggen, was die Aktivitätsverfolgung ermöglicht und die Einhaltung und Sicherheit der Operationen gewährleistet. Buchhalter können ihrerseits die Finanzoperationen der zugewiesenen Kunden verwalten und Aktionen wie das Hinzufügen, Ändern oder Löschen durchführen, die der Bestätigung durch den Administrator unterliegen, um die Datensicherheit und -genauigkeit zu gewährleisten. Darüber hinaus meldet sich die Anwendung zur Sicherheit der Informationen nach fünf Minuten Inaktivität automatisch ab. Zusammenfassend bietet das Finanzverwaltungssystem eine umfassende und sichere Lösung für die Verwaltung der Finanzoperationen des Unternehmens, die eine erhöhte Effizienz und ein besseres Risikomanagement ermöglicht.",
        en : "The financial management system offers a professional and secure solution for administrators and accountants, enabling them to efficiently manage the company's financial operations. Accessible by authorized administrators or accountants, the application allows the management of clients, currencies, and financial operations with great flexibility. Administrators can easily manage their client portfolio and currencies, as well as track and filter operations with clients, with the ability to print detailed reports for better analysis. Additionally, the system allows the management of the currency stock, providing complete visibility of the company's financial assets. Administrators also have access to detailed statistics on each client's transactions, facilitating informed decision-making. Administrators can also see the accountants who log into the system, allowing for activity tracking and ensuring compliance and security of operations. Accountants, on the other hand, can manage the financial operations of assigned clients, performing actions such as adding, modifying, or deleting, subject to administrator confirmation to ensure data security and accuracy. Furthermore, to ensure information security, the application automatically logs out after five minutes of inactivity. In summary, the financial management system offers a comprehensive and secure solution for managing the company's financial operations, providing increased efficiency and better risk management.",
      },
      Tools:
        "MVC, PHP (Laravel), MYSQL, HTML5, CSS3, Bootstrap, JavaScript, AJAX, JQuery",
      siteweb: "",
      codesource: "",
      type: "Dynamic",
    },
    {
      id: 2,
      titre: {
        fr: "Système de Gestion des Bibliothèques",
        en: "Library Management System",
        de: "System der Bibliothek",
      },
      thumb: "/img/projects/bibliotheque/dashboard.png",
      images: [
        "/img/projects/bibliotheque/dashboard.png",
        "/img/projects/bibliotheque/categories.png",
        "/img/projects/bibliotheque/articles.png",
        "/img/projects/bibliotheque/ventes.png",
        "/img/projects/bibliotheque/addvente.png",
        "/img/projects/bibliotheque/addrecuperation.png",
        "/img/projects/bibliotheque/archivages.png",
        "/img/projects/bibliotheque/charges.png",
        "/img/projects/bibliotheque/impression_vente.png",
        "/img/projects/bibliotheque/impression_recuperation.png",
        "/img/projects/bibliotheque/profile.png",
      ],
      description: {
        fr: "L'application web de gestion de bibliothèque offre une solution complète et intuitive pour répondre aux besoins spécifiques des utilisateurs des bibliothèques. Elle permet une gestion efficace des articles en stock, en organisant ces derniers par catégories pour une recherche aisée. Avec la possibilité de gérer les ventes selon deux modalités - en prix gros ou à tempérament - ainsi que de gérer les récupérations d'articles après vente, l'application garantit une traçabilité optimale des transactions. De plus, elle simplifie la gestion des charges de la bibliothèque et assure la génération automatisée de tickets thermiques pour les factures de vente et de récupération. La fonctionnalité d'archivage sécurisé des catégories, articles, ventes et récupérations assure une gestion efficiente des données, même après leur suppression. En offrant un tableau de bord complet, l'application permet un suivi précis des statistiques clés telles que le nombre d'articles, de ventes, de récupérations, les montants totaux de vente et de récupération, ainsi que le chiffre d'affaires et le chiffre d'affaires net, facilitant ainsi l'analyse et la prise de décision. Avec la possibilité de recherche par période, cette application web offre un outil puissant pour une gestion transparente et efficace des opérations de la bibliothèque.",
        en: "The library management web application offers a complete and intuitive solution to meet the specific needs of library users. It enables efficient management of stock items by organizing them into categories for easy searching. With the ability to manage sales in two modes - wholesale or installment - as well as handle the recovery of items after sale, the application ensures optimal traceability of transactions. Additionally, it simplifies the management of library expenses and ensures the automated generation of thermal tickets for sales and recovery invoices. The secure archiving functionality for categories, items, sales, and recoveries ensures efficient data management even after deletion. By offering a comprehensive dashboard, the application allows precise tracking of key statistics such as the number of items, sales, recoveries, total sales and recovery amounts, as well as gross and net revenue, thereby facilitating analysis and decision-making. With the option to search by period, this web application provides a powerful tool for transparent and efficient library operations management.",
        de: "Die Webanwendung zur Bibliotheksverwaltung bietet eine vollständige und intuitive Lösung, um den spezifischen Bedürfnissen der Bibliotheksbenutzer gerecht zu werden. Sie ermöglicht eine effiziente Verwaltung der Bestandsartikel, indem sie diese in Kategorien organisiert, um eine einfache Suche zu ermöglichen. Mit der Möglichkeit, Verkäufe in zwei Modi - Großhandel oder Ratenzahlung - zu verwalten sowie die Rückführung von Artikeln nach dem Verkauf zu handhaben, gewährleistet die Anwendung eine optimale Nachverfolgbarkeit von Transaktionen. Darüber hinaus vereinfacht sie die Verwaltung der Bibliothekskosten und sorgt für die automatisierte Erstellung von Thermotickets für Verkaufs- und Rückführungsrechnungen. Die sichere Archivierungsfunktion für Kategorien, Artikel, Verkäufe und Rückführungen sorgt auch nach der Löschung für eine effiziente Datenverwaltung. Durch das Angebot eines umfassenden Dashboards ermöglicht die Anwendung eine präzise Verfolgung wichtiger Statistiken wie der Anzahl der Artikel, Verkäufe, Rückführungen, der Gesamtbeträge für Verkäufe und Rückführungen sowie des Brutto- und Nettoumsatzes, was die Analyse und Entscheidungsfindung erleichtert. Mit der Möglichkeit der periodischen Suche bietet diese Webanwendung ein leistungsstarkes Werkzeug für eine transparente und effiziente Verwaltung der Bibliotheksoperationen.",
      },
      Tools: "MVC,PHP,MYSQL,HTML5,CSS3,Bootstrap,JavaScript,AJAX,JQuery",
      siteweb: "",
      codesource: "",
      type: "Dynamic",
    },
    {
      id: 3,
      titre: {
        fr: "Système de Gestion CMC à Nador",
        en: "CMC Management System at Nador",
        de: "CMC Management System in Nador",
      },
      thumb: "/img/projects/CMC/login.png",
      images: [
        "/img/projects/CMC/login.png",
        "/img/projects/CMC/admin_absence_formateur.png",
        "/img/projects/CMC/admin_absence_stagiaires.png",
        "/img/projects/CMC/admin_affectations_groupes.png",
        "/img/projects/CMC/admin_affectations.png",
        "/img/projects/CMC/admin_avancement.png",
        "/img/projects/CMC/admin_consulter_absence_formateur.png",
        "/img/projects/CMC/admin_consulter_absence_stagiaires.png",
        "/img/projects/CMC/admin_dashboard.png",
        "/img/projects/CMC/admin_emploi_archiver.png",
        "/img/projects/CMC/admin_emploi_brouillon_groupes.png",
        "/img/projects/CMC/admin_emploi_brouillon.png",
        "/img/projects/CMC/admin_emploi_formateurs.png",
        "/img/projects/CMC/admin_emploi_reel.png",
        "/img/projects/CMC/admin_emploi_salles.png",
        "/img/projects/CMC/admin_formateurs.png",
        "/img/projects/CMC/admin_modules.png",
        "/img/projects/CMC/admin_profile.png",
        "/img/projects/CMC/admin_salles.png",
        "/img/projects/CMC/admin_stagiaires.png",
        "/img/projects/CMC/admin_tauxavencement.png",
        "/img/projects/CMC/chef_secteur.png",
        "/img/projects/CMC/formateur_gestion_efm.png",
        "/img/projects/CMC/formateur_normale.png",
        "/img/projects/CMC/formateur_valider_efm.png",
      ],

      description: {
        fr: "L'application de gestion pour la Cité des Métiers et des Compétences (CMC) à Nador est le fruit d'une collaboration entre moi-même et mon collègue Khalil GHANAM, réalisée lors de notre deuxième année d'études à l'Institut Spécialisé en Technologies Appliquées de Nador, sous la supervision du Professeur Ali AZAOUAGH. Conçue pour simplifier le travail des administrateurs de l'établissement, cette application offre une interface conviviale et des fonctionnalités adaptées aux différents rôles au sein de la CMC. Avec cinq types d'utilisateurs distincts - Admin, Surveillant, Chef Secteur, Chef Filière et Formateur - l'application permet une gestion efficace des ressources et des activités de l'établissement. Les administrateurs bénéficient de fonctionnalités étendues, leur permettant de gérer divers aspects de l'établissement tels que les formateurs, les salles, les secteurs, les filières, les modules, les stagiaires, les groupes, les niveaux, ainsi que les emplois du temps. Ils peuvent également suivre et gérer les absences des stagiaires et des formateurs, ainsi que l'avancement des affectations de modules. Les Chefs Secteurs ont des privilèges similaires aux administrateurs, mais limités à leur secteur spécifique, leur permettant ainsi une gestion plus ciblée et efficace. Les surveillants ont accès à des fonctionnalités leur permettant de consulter les emplois du temps, de gérer les stagiaires et leurs absences, ainsi que de gérer les absences des formateurs. Les formateurs peuvent consulter leur emploi du temps, leur tableau de service, gérer les absences de leurs stagiaires et superviser les examens finaux des modules pour validation par le Chef Filière. Enfin, les Chefs Filères agissent à la fois en tant que formateurs et valident les examens finaux des modules. Cette application offre ainsi une solution complète et adaptée aux besoins spécifiques de la CMC à Nador, facilitant la gestion quotidienne de l'établissement et contribuant à son efficacité et à sa réussite.",
        en: "The management application for the Cité des Métiers et des Compétences (CMC) in Nador is the result of a collaboration between myself and my colleague Khalil GHANAM, undertaken during our second year of studies at the Institut Spécialisé en Technologies Appliquées of Nador, under the supervision of Professor Ali AZAOUAGH. Designed to simplify the work of the establishment’s administrators, this application offers a user-friendly interface and features tailored to the various roles within the CMC. With five distinct types of users - Admin, Supervisor, Sector Head, Department Head, and Trainer - the application enables efficient management of the institution's resources and activities.Administrators benefit from extensive features, allowing them to manage various aspects of the establishment such as trainers, rooms, sectors, departments, modules, trainees, groups, levels, as well as schedules. They can also track and manage the absences of trainees and trainers, as well as the progress of module assignments. Sector Heads have privileges similar to administrators but limited to their specific sector, thus enabling more focused and efficient management. Supervisors have access to features allowing them to consult schedules, manage trainees and their absences, and manage trainers' absences. Trainers can consult their schedules, service table, manage trainee absences, and oversee the final module exams for validation by the Department Head. Finally, Department Heads act both as trainers and validate the final module exams.This application thus offers a comprehensive solution tailored to the specific needs of the CMC in Nador, facilitating the daily management of the establishment and contributing to its efficiency and success.",
        de: "Die Verwaltungsanwendung für die Cité des Métiers et des Compétences (CMC) in Nador ist das Ergebnis einer Zusammenarbeit zwischen mir und meinem Kollegen Khalil GHANAM, die im zweiten Studienjahr am Institut Spécialisé en Technologies Appliquées von Nador unter der Aufsicht von Professor Ali AZAOUAGH durchgeführt wurde. Diese Anwendung wurde entwickelt, um die Arbeit der Administratoren der Einrichtung zu vereinfachen und bietet eine benutzerfreundliche Oberfläche sowie Funktionen, die auf die verschiedenen Rollen innerhalb der CMC zugeschnitten sind. Mit fünf verschiedenen Benutzerarten - Admin, Aufseher, Sektorleiter, Fachbereichsleiter und Ausbilder - ermöglicht die Anwendung eine effiziente Verwaltung der Ressourcen und Aktivitäten der Einrichtung.Administratoren profitieren von umfangreichen Funktionen, die es ihnen ermöglichen, verschiedene Aspekte der Einrichtung zu verwalten, wie z.B. Ausbilder, Räume, Sektoren, Fachbereiche, Module, Auszubildende, Gruppen, Niveaus sowie Zeitpläne. Sie können auch die Abwesenheiten von Auszubildenden und Ausbildern nachverfolgen und verwalten sowie den Fortschritt der Modulzuweisungen überwachen. Sektorleiter haben ähnliche Rechte wie Administratoren, jedoch auf ihren spezifischen Sektor beschränkt, was eine gezieltere und effizientere Verwaltung ermöglicht. Aufseher haben Zugriff auf Funktionen, die es ihnen ermöglichen, Zeitpläne einzusehen, Auszubildende und deren Abwesenheiten zu verwalten sowie die Abwesenheiten von Ausbildern zu verwalten. Ausbilder können ihre Zeitpläne, ihren Dienstplan einsehen, die Abwesenheiten ihrer Auszubildenden verwalten und die Abschlussprüfungen der Module zur Validierung durch den Fachbereichsleiter überwachen. Schließlich fungieren die Fachbereichsleiter sowohl als Ausbilder als auch als Prüfer der Abschlussprüfungen der Module.Diese Anwendung bietet somit eine umfassende Lösung, die auf die spezifischen Bedürfnisse der CMC in Nador zugeschnitten ist, erleichtert die tägliche Verwaltung der Einrichtung und trägt zu ihrer Effizienz und ihrem Erfolg bei.",
      },
      Tools: "MVC,PHP,MYSQL,HTML5,CSS3,Bootstrap,JavaScript,AJAX,JQuery",
      siteweb: "",
      codesource: "",
      type: "Dynamic",
    },
    {
      id: 6,
      titre: {
        fr: "Tierra Y Mar Moto",
        en: "Tierra Y Mar Moto",
        de: "Tierra Y Mar Moto",
      },
      thumb: "/img/projects/TierraYMarMoto/home.png",
      images: [
        "/img/projects/TierraYMarMoto/home.png",
        "/img/projects/TierraYMarMoto/about.png",
        "/img/projects/TierraYMarMoto/services.png",
        "/img/projects/TierraYMarMoto/tourn.png",
        "/img/projects/TierraYMarMoto/footer.png",
      ],

      description: {
        fr: "Le site web de Tierra Y Mar Moto présente de manière professionnelle les services de vente, de location et de tours en moto. Une flotte diversifiée de motos de haute qualité est proposée, répondant aux besoins tant des motards expérimentés que des débutants. Les options de location sont flexibles et adaptées à toutes les durées, permettant à chacun de vivre l'expérience de la route selon ses préférences. De plus, les tours guidés offrent une opportunité unique d'explorer des paysages époustouflants en toute sécurité, accompagnés par des professionnels passionnés et compétents. Tierra Y Mar Moto s'engage à fournir un service exceptionnel, alliant expertise, passion et dévouement pour garantir une expérience inoubliable à tous les clients.",
        en: "The Tierra Y Mar Moto website professionally presents the services of motorcycle sales, rentals, and tours. A diverse fleet of high-quality motorcycles is offered, meeting the needs of both experienced riders and beginners. The rental options are flexible and suitable for all durations, allowing everyone to experience the road according to their preferences. Additionally, the guided tours provide a unique opportunity to explore breathtaking landscapes safely, accompanied by passionate and skilled professionals. Tierra Y Mar Moto is committed to providing exceptional service, combining expertise, passion, and dedication to ensure an unforgettable experience for all customers.",
        de: "Die Website von Tierra Y Mar Moto präsentiert professionell die Dienstleistungen im Bereich Motorradverkauf, -vermietung und -touren. Eine vielfältige Flotte von hochwertigen Motorrädern wird angeboten, die sowohl den Bedürfnissen erfahrener Fahrer als auch von Anfängern gerecht wird. Die Mietoptionen sind flexibel und für alle Zeiträume geeignet, sodass jeder die Straße nach seinen Vorlieben erleben kann. Darüber hinaus bieten die geführten Touren eine einzigartige Gelegenheit, atemberaubende Landschaften sicher zu erkunden, begleitet von leidenschaftlichen und kompetenten Fachleuten. Tierra Y Mar Moto verpflichtet sich, einen außergewöhnlichen Service zu bieten, der Fachwissen, Leidenschaft und Engagement vereint, um allen Kunden ein unvergessliches Erlebnis zu garantieren.",
      },
      Tools: "HTML5, CSS3, JavaScript",
      siteweb: "https://tierraymarmoto.netlify.app/",
      codesource: "https://github.com/BilalDaoudi/Tierra-Y-Mar-Moto",
      type: "Static",
    },
    {
      id: 7,
      titre: {
        en: "School Management Web Application",
        fr: "Application Web de gestion scolaire",
        de: "Schulmanagement Web-Anwendung",
      },
      thumb: "img/projects/ENSAH/admin_formateur.png",
      images: [
        "/img/projects/ENSAH/login.png",
        "/img/projects/ENSAH/admin_formateur.png",
        "/img/projects/ENSAH/absences_etudiant_formateur.png",
        "/img/projects/ENSAH/admin_departement.png",
        "/img/projects/ENSAH/admin_filiere.png",
        "/img/projects/ENSAH/admin_profile.png",
        "/img/projects/ENSAH/choisir_role.png",
        "/img/projects/ENSAH/emploi_formateur_responsable.png",
        "/img/projects/ENSAH/etudiant_formateur.png",
        "/img/projects/ENSAH/login_formateur.png",
        "/img/projects/ENSAH/module_formateur_enseignes.png",
        "/img/projects/ENSAH/notes_formateur.png",
        "/img/projects/ENSAH/profile_formateur.png",
      ],

      description: {
        fr: "L'application de gestion académique offre une plateforme robuste et sécurisée permettant aux administrateurs, départements, filières et formateurs de collaborer de manière transparente et efficace. Les administrateurs ont un accès privilégié pour gérer les différents départements, filières et formateurs, en attribuant des rôles et en assurant une supervision efficace. Chaque département et filière est supervisé par un formateur, garantissant une structure hiérarchique claire et une responsabilité définie. Les formateurs, quant à eux, ont un accès personnalisé selon leur rôle et leurs responsabilités, avec une authentification sécurisée par matricule et mot de passe. Les fonctionnalités disponibles pour les formateurs incluent la consultation des emplois du temps, la gestion des modules enseignés, l'accès aux informations sur les étudiants, la gestion des absences et des notes, ainsi que la gestion de leur profil personnel. Cette application offre ainsi une solution complète pour la gestion académique, favorisant une communication fluide et une gestion efficace des ressources éducatives.",
        en: "The academic management application provides a robust and secure platform that allows administrators, departments, programs, and instructors to collaborate seamlessly and efficiently. Administrators have privileged access to manage various departments, programs, and instructors, assigning roles and ensuring effective supervision. Each department and program is overseen by an instructor, ensuring a clear hierarchical structure and defined accountability. Instructors, in turn, have personalized access according to their roles and responsibilities, with secure authentication through ID and password. Features available to instructors include viewing schedules, managing taught modules, accessing student information, managing absences and grades, as well as managing their personal profile. This application thus offers a comprehensive solution for academic management, promoting smooth communication and efficient management of educational resources.",
        de: "Die akademische Verwaltungsanwendung bietet eine robuste und sichere Plattform, die es Administratoren, Abteilungen, Studiengängen und Lehrkräften ermöglicht, nahtlos und effizient zusammenzuarbeiten. Administratoren haben privilegierten Zugriff, um verschiedene Abteilungen, Studiengänge und Lehrkräfte zu verwalten, Rollen zuzuweisen und eine effektive Überwachung zu gewährleisten. Jede Abteilung und jeder Studiengang wird von einem Lehrenden betreut, was eine klare hierarchische Struktur und definierte Verantwortlichkeiten sicherstellt. Die Lehrkräfte haben je nach Rolle und Verantwortungsbereich personalisierten Zugriff mit sicherer Authentifizierung durch Matrikelnummer und Passwort. Zu den verfügbaren Funktionen für Lehrkräfte gehören die Einsicht in Zeitpläne, die Verwaltung der unterrichteten Module, der Zugriff auf Studierendeninformationen, die Verwaltung von Abwesenheiten und Noten sowie die Verwaltung des eigenen Profils. Diese Anwendung bietet somit eine umfassende Lösung für das akademische Management, fördert eine reibungslose Kommunikation und eine effiziente Verwaltung der Bildungsressourcen.",
      },
      Tools: "PHP,MYSQL,HTML5,CSS3,Bootstrap,JavaScript,AJAX,JQuery",
      siteweb: "",
      codesource: "",
      type: "Dynamic",
    },
    {
      id: 10,
      titre: {
        en: "Automobile Repair Management System",
        fr: "Système de Gestion des Réparations Automobiles",
        de: "System zur Verwaltung von Kfz-Reparaturen",
      },
      thumb: "img/projects/maintenance_voiture/réparations.png",
      images: [
        "/img/projects/maintenance_voiture/réparations.png",
        "/img/projects/maintenance_voiture/entreprise.png",
        "/img/projects/maintenance_voiture/clients.png",
        "/img/projects/maintenance_voiture/voitures.png",
        "/img/projects/maintenance_voiture/articles.png",
        "/img/projects/maintenance_voiture/articles_devis.png",
        "/img/projects/maintenance_voiture/devis.png",
        "/img/projects/maintenance_voiture/facture_client.png",
        "/img/projects/maintenance_voiture/facture_speciale.png",
        "/img/projects/maintenance_voiture/importer.png",
        "/img/projects/maintenance_voiture/impression.png",
      ],
      description: {
        fr: "Le système de gestion pour entreprise offre une plateforme professionnelle et conviviale, accessible aux administrateurs pour une gestion efficace des opérations liées aux clients et à leurs véhicules. Les administrateurs peuvent facilement gérer la base de données des clients, ainsi que les détails de leurs véhicules, en enregistrant les informations pertinentes telles que les marques, modèles et numéros de série. En outre, le système permet une gestion transparente des réparations automobiles, offrant la possibilité de générer des documents tels que des factures clients, des bons de livraison et des devis, garantissant ainsi une communication claire et précise tout au long du processus de réparation. De plus, les administrateurs peuvent importer facilement les données à partir de feuilles de calcul Excel dans la base de données du système, facilitant ainsi la mise à jour et la synchronisation des informations. Enfin, une fonctionnalité importante du système est la gestion des devis avant les réparations, permettant aux administrateurs d'estimer avec précision les coûts et d'obtenir l'approbation du client avant de commencer les travaux. En résumé, le système de gestion pour entreprise offre une solution complète et efficace pour optimiser les opérations liées à la gestion des clients, des véhicules et des réparations automobiles.",
        en: "The enterprise management system provides a professional and user-friendly platform, accessible to administrators for efficient management of operations related to customers and their vehicles. Administrators can easily manage the customer database and details of their vehicles, recording relevant information such as brands, models, and serial numbers. Additionally, the system enables transparent management of automotive repairs, offering the ability to generate documents such as customer invoices, delivery notes, and quotes, ensuring clear and precise communication throughout the repair process. Moreover, administrators can easily import data from Excel spreadsheets into the system database, facilitating information updates and synchronization. Finally, a key feature of the system is the management of quotes before repairs, allowing administrators to accurately estimate costs and obtain client approval before commencing work. In summary, the enterprise management system offers a comprehensive and efficient solution to optimize operations related to customer management, vehicle information, and automotive repairs.",
        de: "Das Unternehmensmanagementsystem bietet eine professionelle und benutzerfreundliche Plattform, die Administratoren einen effizienten Betrieb im Zusammenhang mit Kunden und ihren Fahrzeugen ermöglicht. Administratoren können die Kundendatenbank und die Details ihrer Fahrzeuge leicht verwalten, indem sie relevante Informationen wie Marken, Modelle und Seriennummern erfassen. Darüber hinaus ermöglicht das System eine transparente Verwaltung von Kfz-Reparaturen und bietet die Möglichkeit, Dokumente wie Kundenrechnungen, Lieferscheine und Angebote zu generieren, um eine klare und präzise Kommunikation während des Reparaturprozesses sicherzustellen. Darüber hinaus können Administratoren Daten aus Excel-Tabellen problemlos in die Systemdatenbank importieren, was die Aktualisierung und Synchronisierung von Informationen erleichtert. Eine wichtige Funktion des Systems ist die Angebotsverwaltung vor Reparaturen, die es Administratoren ermöglicht, die Kosten genau zu schätzen und die Zustimmung des Kunden vor Beginn der Arbeiten einzuholen. Zusammenfassend bietet das Unternehmensmanagementsystem eine umfassende und effiziente Lösung zur Optimierung der Betriebsabläufe im Zusammenhang mit der Verwaltung von Kunden, Fahrzeugen und Kfz-Reparaturen.",
      },
      Tools: "MVC,PHP,MYSQL,HTML5,CSS3,Bootstrap,JavaScript,AJAX,JQuery",
      siteweb: "",
      codesource: "",
      type: "Dynamic",
    },
    {
      id: 11,

      titre: {
        en: "Gym Room Management System",
        fr: "Système de Gestion des Salles d'Entraînement",
        de: "System zur Verwaltung von Fitnessräumen",
      },
      thumb: "/img/projects/salles_entrainement/dashboard.png",
      images: [
        "/img/projects/salles_entrainement/categories.png",
        "/img/projects/salles_entrainement/clients.png",
        "/img/projects/salles_entrainement/paiments.png",
        "/img/projects/salles_entrainement/profile.png",
      ],
      description: {
        fr: "Le système de gestion des salles d'entraînement offre une solution professionnelle et complète pour les administrateurs de salles d'entraînement. À travers une application accessible par les administrateurs, ce système permet la gestion efficace des différentes catégories d'entraînement, telles que le Boxing, le KickBoxing, le Taekwondo, et la GYM, entre autres. Les administrateurs peuvent facilement gérer la base de données des clients de la salle, enregistrant leurs informations et suivant leurs activités dans les différentes catégories d'entraînement. De plus, le système permet aux clients de s'inscrire à plusieurs catégories d'entraînement, offrant ainsi une flexibilité accrue. En ce qui concerne les paiements, les administrateurs peuvent gérer les transactions financières des clients, en enregistrant les dates de début et de fin des abonnements ainsi que les prix convenus. Une fonctionnalité spécifique du système est la possibilité pour les administrateurs de visualiser rapidement les clients ayant séjourné moins de trois jours dans la salle, grâce à un tableau de bord intuitif et facile à utiliser. En résumé, le système de gestion des salles d'entraînement offre une solution robuste et efficace pour optimiser la gestion des activités et des finances au sein de votre salle.",
        en: "The gym room management system offers a professional and comprehensive solution for gym administrators. Through an application accessible to administrators, this system enables efficient management of various training categories such as Boxing, KickBoxing, Taekwondo, and GYM, among others. Administrators can easily manage the gym's customer database, recording their information and tracking their activities across different training categories. Moreover, the system allows customers to enroll in multiple training categories, offering increased flexibility. Regarding payments, administrators can handle customer financial transactions, recording subscription start and end dates along with agreed-upon prices. A specific feature of the system is the ability for administrators to quickly view customers who have stayed less than three days in the gym, using an intuitive and user-friendly dashboard. In summary, the gym room management system provides a robust and efficient solution to optimize activity and financial management within your gym.",
        de: "Das System zur Verwaltung von Fitnessräumen bietet eine professionelle und umfassende Lösung für Fitnessraum-Administratoren. Über eine Anwendung, die Administratoren zugänglich ist, ermöglicht dieses System eine effiziente Verwaltung verschiedener Trainingskategorien wie Boxen, Kickboxen, Taekwondo und Fitness, unter anderem. Administratoren können leicht die Kunden-Datenbank des Fitnessraums verwalten, indem sie deren Informationen erfassen und deren Aktivitäten in verschiedenen Trainingskategorien verfolgen. Darüber hinaus können Kunden sich für mehrere Trainingskategorien anmelden, was eine erhöhte Flexibilität bietet. In Bezug auf Zahlungen können Administratoren finanzielle Transaktionen der Kunden verwalten, indem sie Start- und Enddaten der Abonnements sowie vereinbarte Preise aufzeichnen. Eine spezifische Funktion des Systems ist die Möglichkeit für Administratoren, Kunden, die weniger als drei Tage im Fitnessraum verbracht haben, schnell zu identifizieren, dank eines intuitiven und benutzerfreundlichen Dashboards. Zusammenfassend bietet das System zur Verwaltung von Fitnessräumen eine robuste und effiziente Lösung zur Optimierung der Aktivitäts- und Finanzverwaltung in Ihrem Fitnessraum.",
      },
      Tools: "MVC,PHP,MYSQL,HTML5,CSS3,Bootstrap,JavaScript,AJAX,JQuery",
      siteweb: "",
      codesource: "",
      type: "Dynamic",
    },
    {
      id: 12,

      titre: {
        en: "Daoudi Shop",
        fr: "Daoudi Shop",
        de: "Daoudi Shop",
      },
      thumb: "/img/projects/Boutiqueenligne/client_acheter.png",
      images: [
        "/img/projects/Boutiqueenligne/home.png",
        "/img/projects/Boutiqueenligne/login.png",
        "/img/projects/Boutiqueenligne/inscription.png",
        "/img/projects/Boutiqueenligne/categories.png",
        "/img/projects/Boutiqueenligne/produits1.png",
        "/img/projects/Boutiqueenligne/produits2.png",
        "/img/projects/Boutiqueenligne/commandes.png",
        "/img/projects/Boutiqueenligne/users.png",
        "/img/projects/Boutiqueenligne/client_acheter.png",
        "/img/projects/Boutiqueenligne/client_acheter_filter.png",
        "/img/projects/Boutiqueenligne/client_panier.png",
        "/img/projects/Boutiqueenligne/client_mescommandes.png",
      ],

      description: {
        fr: "L'application de commerce électronique que nous avons développée offre une plateforme robuste et intuitive pour la vente de produits en ligne. Conçue pour répondre aux besoins tant des administrateurs que des clients, elle permet une gestion efficace des transactions et des interactions au sein de l'écosystème commercial. Les utilisateurs peuvent s'inscrire facilement, accéder à une gamme diversifiée de produits, passer des commandes en toute simplicité et suivre leur historique d'achats. Les administrateurs bénéficient quant à eux d'un ensemble d'outils puissants pour gérer les catégories de produits, les stocks, les commandes en attente, ainsi que la base de données clients. Avec un accent particulier sur la convivialité et la sécurité, notre application garantit une expérience fluide et sécurisée pour tous les acteurs impliqués dans le processus d'achat et de vente en ligne.",
        en: "The e-commerce application we have developed offers a robust and intuitive platform for selling products online. Designed to meet the needs of both administrators and customers, it enables efficient management of transactions and interactions within the commercial ecosystem. Users can easily sign up, access a diverse range of products, place orders seamlessly, and track their purchase history. Administrators, on the other hand, have a powerful set of tools to manage product categories, stocks, pending orders, and the customer database. With a focus on user-friendliness and security, our application ensures a smooth and secure experience for all stakeholders involved in the online buying and selling process.",
        de: "Die von uns entwickelte E-Commerce-Anwendung bietet eine robuste und intuitive Plattform für den Online-Verkauf von Produkten. Sie wurde entwickelt, um den Bedürfnissen von Administratoren und Kunden gerecht zu werden und ermöglicht eine effiziente Verwaltung von Transaktionen und Interaktionen innerhalb des kommerziellen Ökosystems. Benutzer können sich einfach registrieren, auf eine vielfältige Produktpalette zugreifen, Bestellungen nahtlos aufgeben und ihren Kaufverlauf verfolgen. Administratoren hingegen verfügen über ein leistungsstarkes Set von Tools zur Verwaltung von Produktkategorien, Beständen, ausstehenden Bestellungen und der Kundendatenbank. Mit einem Fokus auf Benutzerfreundlichkeit und Sicherheit gewährleistet unsere Anwendung ein reibungsloses und sicheres Erlebnis für alle Beteiligten im Prozess des Online-Kaufs und -Verkaufs.",
      },
      Tools: "Laravel,MYSQL,HTML5,CSS3,Bootstrap,JavaScript,AJAX,JQuery",
      siteweb: "",
      codesource: "",
      type: "Dynamic",
    },
    {
      id: 5,

      titre: {
        fr: "PCZone",
        en: "PCZone",
        de: "PCZone",
      },
      thumb: "img/projects/PCZone/thumb.jpg",
      images: [
        "/img/projects/PCZone/thumb.jpg",
        "/img/projects/PCZone/1.jpg",
        "/img/projects/PCZone/2.jpg",
        "/img/projects/PCZone/3.jpg",
        "/img/projects/PCZone/4.jpg",
        "/img/projects/PCZone/5.jpg",
      ],
      description: {
        fr: "PCZone est une plateforme de commerce électronique dédiée à la vente d'ordinateurs personnels haut de gamme. Notre mission est de fournir à nos clients une expérience d'achat en ligne exceptionnelle, en offrant une sélection soigneusement sélectionnée de PC de qualité supérieure. Que vous soyez un professionnel à la recherche d'une puissance de traitement maximale ou un amateur de jeux en quête de performances graphiques de pointe, PCZone a tout ce dont vous avez besoin. Parcourez notre catalogue pour découvrir une gamme diversifiée de produits, des ordinateurs portables polyvalents aux stations de travail spécialisées. Avec des marques de renom et un service clientèle de premier ordre, nous sommes là pour vous aider à trouver l'ordinateur parfait pour répondre à vos besoins professionnels ou personnels.",
        en: "PCZone is an e-commerce platform dedicated to selling high-end personal computers. Our mission is to provide our customers with an exceptional online shopping experience by offering a carefully curated selection of top-quality PCs. Whether you are a professional seeking maximum processing power or a gaming enthusiast in search of cutting-edge graphics performance, PCZone has everything you need. Browse our catalog to discover a diverse range of products, from versatile laptops to specialized workstations. With renowned brands and top-notch customer service, we are here to help you find the perfect computer to meet your professional or personal needs.",
        de: "PCZone ist eine E-Commerce-Plattform, die sich dem Verkauf von High-End-PCs widmet. Unsere Mission ist es, unseren Kunden ein außergewöhnliches Online-Einkaufserlebnis zu bieten, indem wir eine sorgfältig ausgewählte Auswahl an hochwertigen PCs anbieten. Egal, ob Sie ein Profi sind, der maximale Rechenleistung sucht, oder ein Gaming-Enthusiast auf der Suche nach modernster Grafikleistung – PCZone hat alles, was Sie brauchen. Durchstöbern Sie unseren Katalog, um eine vielfältige Produktpalette zu entdecken, von vielseitigen Laptops bis hin zu spezialisierten Workstations. Mit renommierten Marken und erstklassigem Kundenservice sind wir hier, um Ihnen zu helfen, den perfekten Computer zu finden, der Ihren beruflichen oder persönlichen Bedürfnissen entspricht.",
      },
      Tools: "HTML5, CSS3 , Bootstrap5, React.js, Redux.js",
      siteweb: "https://pczone.netlify.app",
      codesource: "https://github.com/BilalDaoudi/PCZone",
      type: "Static",
    },
    {
      id: 4,
      titre: {
        fr: "Défi de Puzzle Glissant",
        en: "Sliding Puzzle Challenge",
        de: "Schiebepuzzle-Herausforderung",
      },
      thumb: "/img/projects/Taquin/thumb.jpg",
      images: ["/img/projects/Taquin/thumb.jpg"],
      description: {
        fr: "Faites travailler votre cerveau avec notre puzzle glissant interactif mettant en vedette les chiffres de 1 à 8. Réorganisez les tuiles pour résoudre le puzzle tout en améliorant vos compétences spatiales. Juste votre stratégie et votre logique. Enjoy the brain-teasing experience built using HTML5, CSS3, and JavaScript..",
        en: "Exercise your brain with our interactive sliding puzzle featuring numbers 1 through 8. Rearrange the tiles to solve the puzzle while improving your spatial skills. Test your strategy and logic. Enjoy the brain-teasing experience built using HTML5, CSS3, and JavaScript.",
        de: "Fordern Sie Ihr Gehirn mit unserem interaktiven Schiebepuzzle heraus, das die Zahlen 1 bis 8 zeigt. Ordnen Sie die Kacheln neu an, um das Puzzle zu lösen und Ihre räumlichen Fähigkeiten zu verbessern. Testen Sie Ihre Strategie und Logik. Genießen Sie das knifflige Erlebnis, das mit HTML5, CSS3 und JavaScript erstellt wurde.",
      },
      Tools: "HTML5, CSS3, JavaScript",
      siteweb: "https://taquin.netlify.app",
      codesource: "https://github.com/BilalDaoudi/Taquin",
      type: "Static",
    },
    // {
    //   id: 13,
    //   titre: {
    //     en: "Stopwatch",
    //     fr: "Chronomètre",
    //     de: "Stoppuhr",
    //   },
    //   thumb: "img/projects/Chronometre/thumb.jpg",
    //   images: [
    //     "/img/projects/Chronometre/thumb.jpg",
    //     "/img/projects/Chronometre/1.jpg",
    //     "/img/projects/Chronometre/2.jpg",
    //   ],

    //   description: {
    //     fr: "Découvrez notre chronomètre numérique pour une mesure précise du temps. Que ce soit pour les séances d'entraînement, la cuisine ou la productivité, notre chronomètre convivial, construit avec HTML5, CSS3 et JavaScript, vous aide à gérer le temps efficacement. Commencez à suivre le temps sans effort !",
    //     en: "Discover our digital stopwatch for precise time measurement. Whether for workouts, cooking, or productivity, our user-friendly stopwatch, built with HTML5, CSS3, and JavaScript, helps you manage time efficiently. Start tracking time effortlessly.",
    //     de: "Entdecken Sie unsere digitale Stoppuhr für eine präzise Zeitmessung. Ob für Workouts, Kochen oder Produktivität – unsere benutzerfreundliche Stoppuhr, entwickelt mit HTML5, CSS3 und JavaScript, hilft Ihnen, die Zeit effizient zu verwalten. Beginnen Sie mühelos mit der Zeitverfolgung.",
    //   },
    //   Tools: "HTML5, CSS3, JavaScript",
    //   siteweb: "https://daoudichrono.netlify.app",
    //   codesource: "https://github.com/BilalDaoudi/Stopwatch",
    //   type: "Static",
    // },
    {
      id: 8,

      titre: {
        en: "Sudoku Challenge",
        fr: "Défi Sudoku",
        de: "Sudoku-Herausforderung",
      },
      thumb: "/img/projects/sudoku/1.png",
      images: ["/img/projects/sudoku/1.png", "/img/projects/sudoku/2.png"],

      description: {
        fr: "Le site web propose une expérience de jeu de Sudoku captivante, offrant trois niveaux de difficulté : facile, moyen et difficile. Doté d'un chronomètre et de cinq chances de modification, ce jeu vous permet de défier vos compétences et votre agilité mentale à votre propre rythme. Plongez-vous dans des grilles de Sudoku soigneusement conçues et mettez-vous au défi de résoudre chaque puzzle dans les délais impartis. Avec une interface conviviale et des fonctionnalités interactives, notre site garantit une expérience de jeu immersive et stimulante. Relevez le défi dès maintenant et testez vos compétences de résolution de problèmes avec le Sudoku ",
        en: "The website offers an engaging Sudoku gaming experience, featuring three levels of difficulty: easy, medium, and hard. Equipped with a timer and five chances to make modifications, this game allows you to challenge your skills and mental agility at your own pace. Immerse yourself in carefully crafted Sudoku grids and challenge yourself to solve each puzzle within the allotted time. With a user-friendly interface and interactive features, our site guarantees an immersive and stimulating gaming experience. Take on the challenge now and test your problem-solving skills with Sudoku.",
        de: "Die Website bietet ein fesselndes Sudoku-Spielerlebnis mit drei Schwierigkeitsgraden: leicht, mittel und schwer. Ausgestattet mit einem Timer und fünf Änderungsmöglichkeiten, ermöglicht dieses Spiel Ihnen, Ihre Fähigkeiten und geistige Beweglichkeit in Ihrem eigenen Tempo herauszufordern. Tauchen Sie ein in sorgfältig gestaltete Sudoku-Gitter und fordern Sie sich selbst heraus, jedes Rätsel innerhalb der vorgegebenen Zeit zu lösen. Mit einer benutzerfreundlichen Oberfläche und interaktiven Funktionen garantiert unsere Seite ein immersives und anregendes Spielerlebnis. Nehmen Sie die Herausforderung jetzt an und testen Sie Ihre Problemlösungsfähigkeiten mit Sudoku.",
      },
      Tools: "HTML5, CSS3, JavaScript",
      siteweb: "https://gamesudoku.netlify.app",
      codesource: "https://github.com/BilalDaoudi/Sudoku-game",
      type: "Static",
    },
    {
      id: 9,

      titre: {
        en: "Text to Speech",
        fr: "Texte à la voix",
        de: "Text zu Sprache",
      },
      thumb: "img/projects/text/thumb.jpg",
      images: ["/img/projects/text/thumb.jpg", "/img/projects/text/1.jpg"],
      description: {
        fr: "Expérience interactive de conversion texte en voix sur notre plateforme. Transformez aisément vos écrits en une expérience auditive, offrant une restitution fluide tant en français qu'en anglais. Notre site propose une interface intuitive et performante, exploitant les dernières technologies pour une communication harmonieuse. Explorez une gamme de voix authentiques et adaptées à chaque contexte, pour une expérience utilisateur immersive. Que vous recherchiez la simplicité d'utilisation ou la personnalisation avancée, notre plateforme est votre partenaire idéal dans votre communication multilingue.",
        en: "Interactive text-to-speech experience on our platform. Easily transform your written text into an auditory experience, offering smooth playback in both French and English. Our website features an intuitive and high-performance interface, leveraging the latest technologies for seamless communication. Explore a range of authentic voices tailored to each context, ensuring an immersive user experience. Whether you seek ease of use or advanced customization, our platform is your ideal partner in multilingual communication.",
        de: "Interaktive Text-zu-Sprache-Erfahrung auf unserer Plattform. Verwandeln Sie Ihre geschriebenen Texte einfach in ein auditives Erlebnis, das flüssige Wiedergabe sowohl auf Französisch als auch auf Englisch bietet. Unsere Website verfügt über eine intuitive und leistungsstarke Benutzeroberfläche, die die neuesten Technologien für nahtlose Kommunikation nutzt. Entdecken Sie eine Auswahl authentischer Stimmen, die für jeden Kontext maßgeschneidert sind und ein immersives Benutzererlebnis gewährleisten. Ob Sie Benutzerfreundlichkeit oder fortgeschrittene Anpassung suchen, unsere Plattform ist Ihr idealer Partner für multilinguale Kommunikation.",
      },
      Tools: "HTML5, CSS3, JavaScript",
      siteweb: "https://textintovoice.netlify.app",
      codesource: "https://github.com/BilalDaoudi/Text-to-Speech",
      type: "Static",
    },
    {
      id: 14,
      titre: {
        en: "Tic Tac Toe",
        fr: "Tic Tac Toe",
        de: "Tic Tac Toe",
      },
      thumb: "img/projects/TicTacToe/thumb.jpg",
      images: [
        "/img/projects/TicTacToe/1.jpg",
        "/img/projects/TicTacToe/thumb.jpg",
      ],

      description: {
        fr: "Découvrez une expérience de jeu captivante avec notre plateforme de Morpion en ligne, conçue pour des duels en tête-à-tête. Plongez-vous dans un univers de stratégie et de divertissement, où chaque coup compte. Invitez un ami ou un membre de votre famille pour des parties compétitives et amusantes. Notre site offre une interface conviviale et réactive, rendant la navigation fluide et l'expérience de jeu immersive. Profitez de la simplicité du Morpion classique combinée à la modernité des technologies web, avec une compatibilité totale avec HTML5, CSS3 et JavaScript. Rejoignez-nous pour des heures de plaisir et de défis !",
        en: "Discover an engaging gaming experience with our online Tic Tac Toe platform, designed for head-to-head duels. Immerse yourself in a world of strategy and entertainment, where every move counts. Invite a friend or family member for competitive and fun matches. Our site offers a user-friendly and responsive interface, ensuring smooth navigation and an immersive gaming experience. Enjoy the simplicity of classic Tic Tac Toe combined with the modernity of web technologies, fully compatible with HTML5, CSS3, and JavaScript. Join us for hours of fun and challenges!",
        de: "Entdecken Sie ein fesselndes Spielerlebnis mit unserer Online-Tic-Tac-Toe-Plattform, die für Duelle Kopf-an-Kopf konzipiert ist. Tauchen Sie ein in eine Welt der Strategie und Unterhaltung, in der jeder Zug zählt. Laden Sie einen Freund oder ein Familienmitglied zu wettbewerbsorientierten und unterhaltsamen Spielen ein. Unsere Website bietet eine benutzerfreundliche und reaktionsschnelle Oberfläche, die eine reibungslose Navigation und ein immersives Spielerlebnis gewährleistet. Genießen Sie die Einfachheit des klassischen Tic Tac Toe, kombiniert mit der Modernität der Webtechnologien, die vollständig mit HTML5, CSS3 und JavaScript kompatibel sind. Schließen Sie sich uns an für stundenlangen Spaß und Herausforderungen!",
      },
      Tools: "HTML5, CSS3, JavaScript",
      siteweb: "https://jeuxo.netlify.app",
      codesource: "https://github.com/BilalDaoudi/Tic-Tac-Toe",
      type: "Static",
    },
  ],

  skills: [
    { titre: "HTML", percentage: "95%" },
    { titre: "CSS / Bootstrap", percentage: "85%" },
    { titre: "JavaScript", percentage: "80%" },
    { titre: "React.js", percentage: "90%" },
    { titre: "PHP", percentage: "90%" },
    { titre: "Laravel", percentage: "80%" },
    { titre: "MySQL", percentage: "95%" },
    { titre: "MongoDB", percentage: "85%" },
    { titre: "Pyton (basic)", percentage: "70%" },
    { titre: "Git / Github", percentage: "80%" },
    { titre: "WordPress", percentage: "60%" },
    { titre: "UML", percentage: "85%" },
    { titre: "Gantt Project", percentage: "85%" },
  ],
  educations: {
    fr: [
      {
        date: "2021 - 2023",
        titre: "Diplôme en développement digitale",
        description:
          "Diplôme de technicien spécialisé en développement digitale, option web full stack, délivré par l'Institut Spécialisé de Technologie Appliquée (ISTA) à Nador.",
      },
      {
        date: "2020-2021",
        titre: "Économie Générale",
        description:
          "Étudiant à la Faculté Multidisciplinaire de Nador, avec une spécialisation en Économie Générale.",
      },
      {
        date: "2019-2020",
        titre: "Baccalauréat",
        description:
          "Baccalauréat en Sciences de la Vie et de la Terre du Lycée Taha Houssein à Jaadar Zegangan, Nador.",
      },
    ],
    en: [
      {
        date: "2021 - 2023",
        titre: "Digital Development Certificate",
        description:
          "Web Full Stack Digital Development Certificate, option web full stack, delivered by the Institute of Applied Technology (ISTA) in Nador.",
      },
      {
        date: "2020-2021",
        titre: "General Economics",
        description:
          "Student at the Multidisciplinary Faculty of Nador, with a specialization in General Economics.",
      },
      {
        date: "2019-2020",
        titre: "High School Diploma",
        description:
          "High School Diploma in Sciences of Life and Earth of Lycée Taha Houssein Jaadar Zegangan, Nador.",
      },
    ],
    de: [
      {
        date: "2021 - 2023",
        titre: "Zertifikat für digitale Entwicklung",
        description:
          "Web Full Stack Digital Development Certificate, Option Web Full Stack, ausgestellt vom Institute of Applied Technology (ISTA) in Nador.",
      },
      {
        date: "2020-2021",
        titre: "Volkswirtschaftslehre",
        description:
          "Student an der Multidisziplinären Fakultät von Nador mit Spezialisierung in Volkswirtschaftslehre.",
      },
      {
        date: "2019-2020",
        titre: "Abitur",
        description:
          "Abitur in den Natur- und Geowissenschaften vom Lycée Taha Houssein Jaadar Zegangan in Nador.",
      },
    ],
  },
  experiences: {
    fr: [
      {
        date: "01 Sept. 2023 - 01 Nov 2023",
        titre: "Stage en CMC Nador ( 2 mois )",
        description:
          "Amélioration et installation d'une application web de gestion de l'ISTA, intégrant des fonctionnalités accrues.",
      },
      {
        date: "25 Juil. 2023 - 25 Aug. 2023",
        titre: "Stage en Ass. Sportive Al Qods ( 1 mois ) ",
        description:
          "Création d'une application web pour la gestion des salles d'entraînement, simplifiant le suivi des clients, des catégories sportives et des paiements.",
      },
      {
        date: "01 Juil. 2023 - 20 Juil. 2023",
        titre: "Stage en ClassAuto Express Nador ( 20 J ) ",
        description:
          "Optimisation et maintenance continue de l'application de l'entreprise.",
      },
      {
        date: "20 Avr. 2023 - 20 Mai 2023",
        titre: " Stage fin d’études ( 1 mois )",
        description:
          "Création d'une application web de gestion des réparations automobiles pour Auto SARL Réparation Automobile à Nador.",
      },
    ],
    en: [
      {
        date: "September 1, 2023 - November 1, 2023",
        titre: "Internship at CMC Nador (2 months)",
        description:
          "Improvement and installation of a web management application for ISTA, integrating enhanced features.",
      },
      {
        date: "July 25, 2023 - August 25, 2023",
        titre: "Internship at Ass. Sportive Al Qods (1 month) ",
        description:
          "Creation of a web application for managing training rooms, simplifying the tracking of clients, sports categories, and payments.",
      },
      {
        date: "July 1, 2023 - July 20, 2023",
        titre: "Internship at ClassAuto Express Nador (20 days) ",
        description:
          "Optimization and continuous maintenance of the company's application.",
      },
      {
        date: "April 20, 2023 - May 20, 2023",
        titre: "End-of-studies internship (1 month)",
        description:
          "Creation of a web application for managing automotive repairs for Auto SARL Réparation Automobile in Nador.",
      },
    ],
    de: [
      {
        date: "01. September 2023 - 01. November 2023",
        titre: "Praktikum bei CMC Nador (2 Monate)",
        description:
          "Verbesserung und Installation einer Webanwendung zur Verwaltung des ISTA mit erweiterten Funktionen.",
      },
      {
        date: "25. Juli 2023 - 25. August 2023",
        titre: "Praktikum bei Ass. Sportive Al Qods (1 Monat) ",
        description:
          "Erstellung einer Webanwendung zur Verwaltung von Trainingsräumen, zur Vereinfachung der Kundenverfolgung, der Sportkategorien und der Zahlungen.",
      },
      {
        date: "01. Juli 2023 - 20. Juli 2023",
        titre: "Praktikum bei ClassAuto Express Nador (20 Tage) ",
        description:
          "Optimierung und kontinuierliche Wartung der Unternehmensanwendung.",
      },
      {
        date: "20. April 2023 - 20. Mai 2023",
        titre: " Abschlusspraktikum (1 Monat)",
        description:
          "Erstellung einer Webanwendung zur Verwaltung von Kfz-Reparaturen für Auto SARL Réparation Automobile in Nador.",
      },
    ],
  },
};

const reducer = (state = informations, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        langue: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
