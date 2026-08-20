// ==========================================
// DICTIONNAIRE DE TRADUCTION
// ==========================================
const translations = {
  fr: {
    "nav.profil": "Profil",
    "nav.experience": "Expérience",
    "nav.projets": "Projets",
    "nav.competences": "Compétences",
    "nav.certificats": "Certificats",
    "nav.formation": "Formation",
    "nav.contact": "Contact",

    "hero.status": "Disponible",
    "hero.subtitle": "Technicien en Maintenance & Développement",
    "hero.description": "Technicien maintenance CNC avec expertise en diagnostic de pannes critiques sur systèmes FANUC, Mitsubishi, Mazatrol, Siemens et HeidenHain. Intervient régulièrement aux côtés des équipes support des fabricants (Mazak, DMG Mori, Trumpf) pour résoudre des défaillances complexes. Combine maintenance industrielle, usinage de précision aéronautique et développement logiciel pour l'Industrie 4.0.",
    "hero.fact.location.label": "Localisation",
    "hero.fact.location.value": "Tunisie — Permis B",
    "hero.fact.experience.label": "Expérience",
    "hero.fact.experience.value": "3+ ans en maintenance & tech",
    "hero.fact.specialty.label": "Spécialité",
    "hero.fact.specialty.value": "CNC · Embarqué · Web/Mobile",
    "hero.fact.contact.label": "Contact",
    "hero.cta.download": "↓ Télécharger CV (PDF)",
    "hero.cta.email": "✉ Contacter par e-mail",

    "section.profil": "Profil",
    "section.experience": "Expérience",
    "section.projets": "Projets",
    "section.competences": "Compétences",
    "section.certificats": "Certificats & Habilitations",
    "section.formation": "Formation",
    "section.contact": "Travaillons Ensemble",

    "profil.specialty.label": "Spécialité :",
    "profil.specialty.text": "Diagnostic et résolution de pannes critiques sur systèmes CNC FANUC, Mitsubishi, Mazatrol, Siemens et HeidenHain. Intervient régulièrement aux côtés des équipes support des fabricants mondiaux pour résoudre des défaillances complexes que les techniciens standards ne trouvent pas. Titulaire d'une licence en technologie de l'informatique, spécialisé en systèmes embarqués.",
    "profil.approach.label": "Approche Unique :",
    "profil.approach.text": "Combine trois domaines d'expertise :(1) Maintenance industrielle avancée — diagnostic électrique/électronique/mécanique/pneumatique/hydraulique ;(2-) Usinage de précision aéronautique — tolérances strictes, métrologie, collaboration méthodes ;(3) Développement logiciel — Python, Django, Flutter, intégration matériel-logiciel, IA/robotique. Capable de passer du diagnostic matériel à la programmation embarquée sans interruption.",
    "profil.machines.label": "Machines & Systèmes :",
    "profil.machines.text": "Expérience directe sur tours CNC, centres d'usinage, presses, plieuses, embarreurs automatiques. Marques : Mazak, Star, Citizen, Miyano, Biglia, Hurco, HartFord, Mori Seiki, Trumpf, DMG Mori. Systèmes embarqués : Arduino, Raspberry Pi, microcontrôleurs, RTOS. Bases de données : SQL, PostgreSQL, MySQL.",

    "job1.title": "Technicien de Maintenance Corrective",
    "job1.context": "Multi-clients | Diagnostic de pannes critiques",
    "job2.title": "Technicien Maintenance & Usinage",
    "job2.context": "Sous-traitance aéronautique ISO 9001 | Environnement haute précision",
    "job3.title": "Stagiaire — Projet de Fin d'Études",
    "job3.context": "Développement full-stack | App mobile + Web | Transport public",
    "job4.title": "Stagiaire Développement Web",
    "job4.context": "Design & Intégration web | Agence créative",

    "project1.date": "2024 — Projet Académique Personnel",
    "project1.title": "Drone Agricole de Désherbage — IA & Laser",
    "project1.desc": "Conception d'un modèle de drone adapté à l'agriculture, utilisant l'intelligence artificielle pour détecter et éliminer les mauvaises herbes au laser. Travail sur systèmes automatisés orientés robotique, combinant IA, capteurs et actionneurs.",
    "project2.date": "2023 — Projet de fin d'études",
    "project2.title": "Plateforme de Gestion des Voyages",
    "project2.desc": "Application full-stack combinant une application mobile et une plateforme web pour optimiser la gestion des voyages et le suivi en temps réel des bus.",
    "project3.date": "2022 — Stage BECREATIVE",
    "project3.title": "Conception Web & Design",
    "project3.desc": "Conception et développement de sites web responsives avec interfaces d'administration conviviales. Maquettes graphiques adaptées aux besoins des clients avec principes modernes de UI/UX.",

    "skills.cnc.title": "Compétences CNC & Industriel",
    "skills.web.title": "Développement Web",
    "skills.mobile.title": "Développement Mobile",
    "skills.data.title": "Gestion de Données & Frameworks",
    "skills.lang.title": "Langages de Programmation",
    "skills.embedded.title": "Systèmes Embarqués & IA",
    "skills.os.title": "Systèmes d'Exploitation",

    "softskills.title": "Compétences Transversales",
    "softskill.1": "Diagnostic Avancé",
    "softskill.2": "Résolution de Pannes Complexes",
    "softskill.3": "Collaboration Technique",
    "softskill.4": "Métrologie & Précision",
    "softskill.5": "Documentation Technique",
    "softskill.6": "Travail en Équipe",
    "softskill.7": "Optimisation de Processus",
    "softskill.8": "Gestion de Projets",

    "interests.title": "Centres d'Intérêt & Vision",
    "languages.title": "Langues",
    "lang.arabic": "Arabe",
    "lang.french": "Français",
    "lang.english": "Anglais",
    "lang.german": "Allemand",

    "cert1.issuer": "Certification Professionnelle",
    "cert1.name": "Habilitation Électrique",
    "cert2.name": "Introduction IoT (Internet Of Things)",
    "cert3.name": "Introduction à la Fabrication Numérique",
    "cert4.name": "Participation à l'Atelier IA (Intelligence Artificielle)",
    "cert5.name": "Microsoft Office Specialist",

    "edu1.title": "Licence Appliquée en Technologie de l'Informatique",
    "edu1.org": "Institut Supérieur des Études Technologiques, Kairouan, Tunisie",
    "edu1.spec.label": "Spécialisation :",
    "edu1.spec.text": "Systèmes Embarqués & Développement Mobile",
    "edu2.title": "Baccalauréat Sciences Techniques",
    "edu2.org": "Lycée Jemmel, Tunisie",

    "contact.desc": "Vous avez un projet, une opportunité ou une question ? N'hésitez pas à me contacter. Je suis toujours intéressé par de nouveaux défis et opportunités.",
    "contact.cta.message": "✉ Envoyer un message",

    "modal.title": "Envoyer un Message",
    "modal.label.name": "Nom Complet",
    "modal.placeholder.name": "Votre nom",
    "modal.label.email": "Votre E-mail",
    "modal.placeholder.email": "votre.email@exemple.com",
    "modal.label.subject": "Sujet",
    "modal.placeholder.subject": "Sujet de votre message",
    "modal.label.message": "Message",
    "modal.placeholder.message": "Votre message...",
    "modal.btn.submit": "Envoyer",
    "modal.btn.cancel": "Annuler"
  },

  en: {
    "nav.profil": "Profile",
    "nav.experience": "Experience",
    "nav.projets": "Projects",
    "nav.competences": "Skills",
    "nav.certificats": "Certificates",
    "nav.formation": "Education",
    "nav.contact": "Contact",

    "hero.status": "Available",
    "hero.subtitle": "Maintenance Technician & Developer",
    "hero.description": "CNC maintenance technician with expertise in diagnosing critical failures on FANUC, Mitsubishi, Mazatrol, Siemens and HeidenHain systems. Works regularly alongside manufacturer support teams (Mazak, DMG Mori, Trumpf) to resolve complex failures. Combines industrial maintenance, aerospace precision machining and software development for Industry 4.0.",
    "hero.fact.location.label": "Location",
    "hero.fact.location.value": "Tunisia — Driver's License B",
    "hero.fact.experience.label": "Experience",
    "hero.fact.experience.value": "3+ years in maintenance & tech",
    "hero.fact.specialty.label": "Specialty",
    "hero.fact.specialty.value": "CNC · Embedded · Web/Mobile",
    "hero.fact.contact.label": "Contact",
    "hero.cta.download": "↓ Download CV (PDF)",
    "hero.cta.email": "✉ Contact by email",

    "section.profil": "Profile",
    "section.experience": "Experience",
    "section.projets": "Projects",
    "section.competences": "Skills",
    "section.certificats": "Certificates & Qualifications",
    "section.formation": "Education",
    "section.contact": "Let's Work Together",

    "profil.specialty.label": "Specialty:",
    "profil.specialty.text": "Diagnosing and resolving critical failures on FANUC, Mitsubishi, Mazatrol, Siemens and HeidenHain CNC systems. Works regularly alongside global manufacturer support teams to resolve complex failures that standard technicians can't find. Holds a bachelor's degree in computer technology, specialized in embedded systems.",
    "profil.approach.label": "Unique Approach:",
    "profil.approach.text": "Combines three areas of expertise: (1) Advanced industrial maintenance — electrical/electronic/mechanical/pneumatic/hydraulic diagnostics; (2) Aerospace precision machining — strict tolerances, metrology, methods collaboration; (3) Software development — Python, Django, Flutter, hardware-software integration, AI/robotics. Able to move seamlessly from hardware diagnostics to embedded programming.",
    "profil.machines.label": "Machines & Systems:",
    "profil.machines.text": "Hands-on experience with CNC lathes, machining centers, presses, bending machines, automatic bar feeders. Brands: Mazak, Star, Citizen, Miyano, Biglia, Hurco, HartFord, Mori Seiki, Trumpf, DMG Mori. Embedded systems: Arduino, Raspberry Pi, microcontrollers, RTOS. Databases: SQL, PostgreSQL, MySQL.",

    "job1.title": "Corrective Maintenance Technician",
    "job1.context": "Multi-client | Critical failure diagnostics",
    "job2.title": "Maintenance & Machining Technician",
    "job2.context": "ISO 9001 aerospace subcontracting | High-precision environment",
    "job3.title": "Intern — Final Year Project",
    "job3.context": "Full-stack development | Mobile + Web app | Public transport",
    "job4.title": "Web Development Intern",
    "job4.context": "Web design & integration | Creative agency",

    "project1.date": "2024 — Personal Academic Project",
    "project1.title": "Agricultural Weeding Drone — AI & Laser",
    "project1.desc": "Design of a drone model adapted to agriculture, using artificial intelligence to detect and eliminate weeds with a laser. Work on robotics-oriented automated systems, combining AI, sensors and actuators.",
    "project2.date": "2023 — Final Year Project",
    "project2.title": "Trip Management Platform",
    "project2.desc": "Full-stack application combining a mobile app and a web platform to optimize trip management and real-time bus tracking.",
    "project3.date": "2022 — BECREATIVE Internship",
    "project3.title": "Web Design & Development",
    "project3.desc": "Design and development of responsive websites with user-friendly admin interfaces. Graphic mockups tailored to client needs following modern UI/UX principles.",

    "skills.cnc.title": "CNC & Industrial Skills",
    "skills.web.title": "Web Development",
    "skills.mobile.title": "Mobile Development",
    "skills.data.title": "Data Management & Frameworks",
    "skills.lang.title": "Programming Languages",
    "skills.embedded.title": "Embedded Systems & AI",
    "skills.os.title": "Operating Systems",

    "softskills.title": "Soft Skills",
    "softskill.1": "Advanced Diagnostics",
    "softskill.2": "Complex Troubleshooting",
    "softskill.3": "Technical Collaboration",
    "softskill.4": "Metrology & Precision",
    "softskill.5": "Technical Documentation",
    "softskill.6": "Teamwork",
    "softskill.7": "Process Optimization",
    "softskill.8": "Project Management",

    "interests.title": "Interests & Vision",
    "languages.title": "Languages",
    "lang.arabic": "Arabic",
    "lang.french": "French",
    "lang.english": "English",
    "lang.german": "German",

    "cert1.issuer": "Professional Certification",
    "cert1.name": "Electrical Authorization",
    "cert2.name": "Introduction to IoT (Internet Of Things)",
    "cert3.name": "Introduction to Digital Manufacturing",
    "cert4.name": "AI (Artificial Intelligence) Workshop Participation",
    "cert5.name": "Microsoft Office Specialist",

    "edu1.title": "Bachelor's Degree in Computer Technology",
    "edu1.org": "Higher Institute of Technological Studies, Kairouan, Tunisia",
    "edu1.spec.label": "Specialization:",
    "edu1.spec.text": "Embedded Systems & Mobile Development",
    "edu2.title": "Technical Sciences Baccalaureate",
    "edu2.org": "Lycée Jemmel, Tunisia",

    "contact.desc": "Have a project, an opportunity or a question? Feel free to get in touch. I'm always interested in new challenges and opportunities.",
    "contact.cta.message": "✉ Send a message",

    "modal.title": "Send a Message",
    "modal.label.name": "Full Name",
    "modal.placeholder.name": "Your name",
    "modal.label.email": "Your Email",
    "modal.placeholder.email": "your.email@example.com",
    "modal.label.subject": "Subject",
    "modal.placeholder.subject": "Subject of your message",
    "modal.label.message": "Message",
    "modal.placeholder.message": "Your message...",
    "modal.btn.submit": "Send",
    "modal.btn.cancel": "Cancel"
  },

  de: {
    "nav.profil": "Profil",
    "nav.experience": "Erfahrung",
    "nav.projets": "Projekte",
    "nav.competences": "Kompetenzen",
    "nav.certificats": "Zertifikate",
    "nav.formation": "Ausbildung",
    "nav.contact": "Kontakt",

    "hero.status": "Verfügbar",
    "hero.subtitle": "Wartungstechniker & Entwickler",
    "hero.description": "CNC-Wartungstechniker mit Expertise in der Diagnose kritischer Störungen an FANUC-, Mitsubishi-, Mazatrol-, Siemens- und HeidenHain-Systemen. Arbeitet regelmäßig mit den Support-Teams der Hersteller (Mazak, DMG Mori, Trumpf) zusammen, um komplexe Störungen zu beheben. Kombiniert industrielle Wartung, präzise Luftfahrtbearbeitung und Softwareentwicklung für Industrie 4.0.",
    "hero.fact.location.label": "Standort",
    "hero.fact.location.value": "Tunesien — Führerschein B",
    "hero.fact.experience.label": "Erfahrung",
    "hero.fact.experience.value": "3+ Jahre in Wartung & Technik",
    "hero.fact.specialty.label": "Spezialität",
    "hero.fact.specialty.value": "CNC · Embedded · Web/Mobile",
    "hero.fact.contact.label": "Kontakt",
    "hero.cta.download": "↓ Lebenslauf herunterladen (PDF)",
    "hero.cta.email": "✉ Per E-Mail kontaktieren",

    "section.profil": "Profil",
    "section.experience": "Erfahrung",
    "section.projets": "Projekte",
    "section.competences": "Kompetenzen",
    "section.certificats": "Zertifikate & Qualifikationen",
    "section.formation": "Ausbildung",
    "section.contact": "Lass uns zusammenarbeiten",

    "profil.specialty.label": "Spezialität:",
    "profil.specialty.text": "Diagnose und Behebung kritischer Störungen an FANUC-, Mitsubishi-, Mazatrol-, Siemens- und HeidenHain-CNC-Systemen. Arbeitet regelmäßig mit globalen Hersteller-Support-Teams zusammen, um komplexe Störungen zu beheben, die Standardtechniker nicht finden. Bachelorabschluss in Informationstechnologie mit Spezialisierung auf eingebettete Systeme.",
    "profil.approach.label": "Einzigartiger Ansatz:",
    "profil.approach.text": "Kombiniert drei Fachgebiete: (1) Fortgeschrittene industrielle Wartung — elektrische/elektronische/mechanische/pneumatische/hydraulische Diagnose; (2) Präzise Luftfahrtbearbeitung — strenge Toleranzen, Metrologie, Methodenzusammenarbeit; (3) Softwareentwicklung — Python, Django, Flutter, Hardware-Software-Integration, KI/Robotik. Kann nahtlos von der Hardwarediagnose zur eingebetteten Programmierung wechseln.",
    "profil.machines.label": "Maschinen & Systeme:",
    "profil.machines.text": "Praktische Erfahrung mit CNC-Drehmaschinen, Bearbeitungszentren, Pressen, Biegemaschinen, automatischen Stangenzuführungen. Marken: Mazak, Star, Citizen, Miyano, Biglia, Hurco, HartFord, Mori Seiki, Trumpf, DMG Mori. Eingebettete Systeme: Arduino, Raspberry Pi, Mikrocontroller, RTOS. Datenbanken: SQL, PostgreSQL, MySQL.",

    "job1.title": "Techniker für Instandsetzung",
    "job1.context": "Mehrere Kunden | Diagnose kritischer Störungen",
    "job2.title": "Wartungs- und Bearbeitungstechniker",
    "job2.context": "ISO 9001 Luftfahrt-Unterauftragnehmer | Hochpräzisionsumgebung",
    "job3.title": "Praktikant — Abschlussprojekt",
    "job3.context": "Full-Stack-Entwicklung | Mobile + Web-App | Öffentlicher Verkehr",
    "job4.title": "Praktikant Webentwicklung",
    "job4.context": "Webdesign & Integration | Kreativagentur",

    "project1.date": "2024 — Persönliches Studienprojekt",
    "project1.title": "Landwirtschaftliche Unkraut-Drohne — KI & Laser",
    "project1.desc": "Entwicklung eines Drohnenmodells für die Landwirtschaft, das künstliche Intelligenz nutzt, um Unkraut zu erkennen und per Laser zu entfernen. Arbeit an automatisierten, robotikorientierten Systemen mit KI, Sensoren und Aktoren.",
    "project2.date": "2023 — Abschlussprojekt",
    "project2.title": "Reiseverwaltungsplattform",
    "project2.desc": "Full-Stack-Anwendung, die eine mobile App und eine Webplattform kombiniert, um die Reiseverwaltung und die Echtzeit-Busverfolgung zu optimieren.",
    "project3.date": "2022 — Praktikum BECREATIVE",
    "project3.title": "Webdesign & Entwicklung",
    "project3.desc": "Entwurf und Entwicklung responsiver Websites mit benutzerfreundlichen Admin-Oberflächen. Grafische Entwürfe, angepasst an Kundenbedürfnisse nach modernen UI/UX-Prinzipien.",

    "skills.cnc.title": "CNC- & Industriekompetenzen",
    "skills.web.title": "Webentwicklung",
    "skills.mobile.title": "Mobile Entwicklung",
    "skills.data.title": "Datenmanagement & Frameworks",
    "skills.lang.title": "Programmiersprachen",
    "skills.embedded.title": "Eingebettete Systeme & KI",
    "skills.os.title": "Betriebssysteme",

    "softskills.title": "Soft Skills",
    "softskill.1": "Fortgeschrittene Diagnose",
    "softskill.2": "Komplexe Fehlerbehebung",
    "softskill.3": "Technische Zusammenarbeit",
    "softskill.4": "Metrologie & Präzision",
    "softskill.5": "Technische Dokumentation",
    "softskill.6": "Teamarbeit",
    "softskill.7": "Prozessoptimierung",
    "softskill.8": "Projektmanagement",

    "interests.title": "Interessen & Vision",
    "languages.title": "Sprachen",
    "lang.arabic": "Arabisch",
    "lang.french": "Französisch",
    "lang.english": "Englisch",
    "lang.german": "Deutsch",

    "cert1.issuer": "Berufliche Zertifizierung",
    "cert1.name": "Elektrische Befähigung",
    "cert2.name": "Einführung in IoT (Internet der Dinge)",
    "cert3.name": "Einführung in die digitale Fertigung",
    "cert4.name": "Teilnahme am KI-Workshop (Künstliche Intelligenz)",
    "cert5.name": "Microsoft Office Specialist",

    "edu1.title": "Bachelorabschluss in Informationstechnologie",
    "edu1.org": "Höheres Institut für Technologiestudien, Kairouan, Tunesien",
    "edu1.spec.label": "Spezialisierung:",
    "edu1.spec.text": "Eingebettete Systeme & Mobile Entwicklung",
    "edu2.title": "Abitur Technische Wissenschaften",
    "edu2.org": "Lycée Jemmel, Tunesien",

    "contact.desc": "Haben Sie ein Projekt, eine Gelegenheit oder eine Frage? Zögern Sie nicht, mich zu kontaktieren. Ich bin immer an neuen Herausforderungen und Möglichkeiten interessiert.",
    "contact.cta.message": "✉ Nachricht senden",

    "modal.title": "Nachricht senden",
    "modal.label.name": "Vollständiger Name",
    "modal.placeholder.name": "Ihr Name",
    "modal.label.email": "Ihre E-Mail",
    "modal.placeholder.email": "ihre.email@beispiel.com",
    "modal.label.subject": "Betreff",
    "modal.placeholder.subject": "Betreff Ihrer Nachricht",
    "modal.label.message": "Nachricht",
    "modal.placeholder.message": "Ihre Nachricht...",
    "modal.btn.submit": "Senden",
    "modal.btn.cancel": "Abbrechen"
  }
};

// ==========================================
// APPLIQUER LA TRADUCTION AU DOM
// ==========================================
function applyTranslations(lang) {
    const dict = translations[lang] || translations.fr;

    // Texte des éléments avec data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Placeholders des champs de formulaire avec data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key]) {
            el.setAttribute("placeholder", dict[key]);
        }
    });
}

// ==========================================
// LANGUAGE SELECTION (sauvegarde + traduction)
// ==========================================
function setLanguage(lang) {
    // 1. Sauvegarder le choix pour la prochaine visite
    localStorage.setItem("selectedLanguage", lang);

    // 2. Mettre à jour le texte du bouton affiché (ex: "FR" -> "EN")
    const current = document.getElementById("languageCurrent");
    if (current) {
        current.textContent = lang.toUpperCase();
    }

    // 3. Marquer visuellement l'option active dans le menu déroulant
    const options = document.getElementById("languageOptions");
    if (options) {
        options.querySelectorAll("button").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.lang === lang);
        });
    }

    // 4. Fermer le menu après sélection
    const selector = document.querySelector(".language-selector");
    if (selector) {
        selector.classList.remove("open");
    }

    // 5. Mettre à jour l'attribut lang du document (bon pour le SEO/accessibilité)
    document.documentElement.lang = lang;

    // 6. Appliquer la traduction sur toute la page
    applyTranslations(lang);
}

// ==========================================
// SCROLL REVEAL
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const revealEls = document.querySelectorAll(".reveal, .reveal-item");

    // Filet de sécurité : si le navigateur ne supporte pas IntersectionObserver,
    // on affiche tout de suite tout le contenu (jamais de page vide).
    if (!("IntersectionObserver" in window)) {
        revealEls.forEach(el => el.classList.add("active"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");

                // Si l'élément révélé contient des barres de langue, on anime leur largeur
                entry.target.querySelectorAll(".language-fill").forEach(bar => {
                    const width = bar.getAttribute("data-width");
                    if (width) {
                        bar.style.width = width + "%";
                    }
                });

                observer.unobserve(entry.target); // ne se joue qu'une fois
            }
        });
    }, {
        threshold: 0,               // se déclenche dès qu'un seul pixel est visible
        rootMargin: "0px 0px -80px 0px" // se déclenche un peu avant que l'élément touche le bas de l'écran
    });

    revealEls.forEach(el => observer.observe(el));
});

// ==========================================
// LANGUAGE DROPDOWN
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const selector =
        document.querySelector(".language-selector");

    const current =
        document.getElementById("languageCurrent");

    const options =
        document.getElementById("languageOptions");

    if (!selector || !current || !options) {
        return;
    }

    // Open / close
    current.addEventListener("click", (event) => {

        event.stopPropagation();

        selector.classList.toggle("open");
    });

    // Select language
    options.querySelectorAll("button").forEach(button => {

        button.addEventListener("click", () => {

            setLanguage(button.dataset.lang);
        });
    });

    // Close when clicking outside
    document.addEventListener("click", () => {

        selector.classList.remove("open");
    });

    // Load saved language
    const savedLanguage =
        localStorage.getItem("selectedLanguage") || "fr";

    setLanguage(savedLanguage);
});
// Modal Functions
function openContactModal() {
  document.getElementById('contactModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeContactModal() {
  document.getElementById('contactModal').classList.remove('active');
  document.getElementById('contactForm').reset();
  document.getElementById('formMessage').textContent = '';
  document.getElementById('formMessage').className = 'form-message';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('contactModal');
  if (event.target === modal) {
    closeContactModal();
  }
}

// Handle form submission with Formspree
function handleContactForm(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const formMessage = document.getElementById('formMessage');
  const submitBtn = event.target.querySelector('.btn-submit');
  
  // Validate form
  if (!name || !email || !subject || !message) {
    formMessage.textContent = 'Veuillez remplir tous les champs.';
    formMessage.className = 'form-message error';
    return;
  }
  
  // Disable submit button
  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours...';
  
  // Send email using Formspree
  fetch('https://formspree.io/f/mnjekgge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message
    })
  })
  .then(response => {
    if (response.ok) {
      // Success
      formMessage.textContent = '✓ Message envoyé avec succès ! Je vous répondrai bientôt.';
      formMessage.className = 'form-message success';
      document.getElementById('contactForm').reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Envoyer';
      
      // Close modal after 3 seconds
      setTimeout(() => {
        closeContactModal();
      }, 3000);
    } else {
      throw new Error('Erreur lors de l\'envoi');
    }
  })
  .catch(error => {
    // Error
    console.error('Erreur:', error);
    formMessage.textContent = '✗ Erreur lors de l\'envoi. Veuillez réessayer.';
    formMessage.className = 'form-message error';
    submitBtn.disabled = false;
    submitBtn.textContent = 'Envoyer';
  });
}
