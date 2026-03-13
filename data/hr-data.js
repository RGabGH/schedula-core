var hrSchedulerData = {
    Resources: [
        {
            Id: "EMP001", Name: "Marco Rossi", Group: 1, Position: "Senior Developer", Department: "IT",
            Items: [
                { Id: "T101", Text: "Sviluppo modulo CRM", Description: "Implementazione features\nCliente AXA - Stima: 5 giorni", Width: 7200, Offset: 1440, Classes: "dev-task", Color1: "#3d7bd1", Completion: 60 },
                { Id: "T102", Text: "Code Review", Description: "Revisione pull request\nPR #142, #143, #145", Width: 2880, Offset: 10080, Classes: "review-task", Color1: "#3d93d1" },
                { Id: "T103", Text: "Sprint Planning", Description: "Pianificazione sprint Q1\nStima backlog items", Width: 1440, Offset: 17280, Classes: "meeting-task", Color1: "#3d62d1" },
                { Id: "T104", Text: "Deploy produzione", Description: "Release v2.4.1\nTest regressione completati", Width: 2880, Offset: 21600, Classes: "dev-task", Color1: "#3d7bd1" }
            ]
        },
        {
            Id: "EMP002", Name: "Giulia Bianchi", Group: 1, Position: "UI/UX Designer", Department: "IT",
            Items: [
                { Id: "T201", Text: "Design sistema CRM", Description: "Wireframes e mockup\nFigma - sprint 3", Width: 5760, Offset: 0, Classes: "design-task", Color1: "#3dacd1", Completion: 80 },
                { Id: "T202", Text: "User Testing", Description: "Test usabilità con utenti\n5 sessioni pianificate", Width: 2880, Offset: 8640, Classes: "testing-task", Color1: "#3dc5d1" },
                { Id: "T203", Text: "Presentazione design", Description: "Review con stakeholder\nSlide deck finale", Width: 1440, Offset: 14400, Classes: "meeting-task", Color1: "#3dacd1" },
                { Id: "T204", Text: "Design system v2", Description: "Aggiornamento componenti\nAccessibilità WCAG 2.1", Width: 4320, Offset: 18720, Classes: "design-task", Color1: "#3dc5d1" }
            ]
        },
        {
            Id: "EMP003", Name: "Luca Ferrari", Group: 2, Position: "Art Director", Department: "Creative",
            Items: [
                { Id: "T301", Text: "Brand Identity", Description: "Restyling brand cliente\nLogotype + palette colori", Width: 8640, Offset: 0, Classes: "design-task", Color1: "#b93dd1", Completion: 45 },
                { Id: "T302", Text: "Social Media Kit", Description: "Template Instagram\n20 grafiche corporate", Width: 4320, Offset: 10080, Classes: "design-task", Color1: "#c53dd1" },
                { Id: "T303", Text: "Revisione cliente", Description: "Meeting feedback campagna", Width: 1440, Offset: 17280, Classes: "meeting-task", Color1: "#ac3dd1" }
            ]
        },
        {
            Id: "EMP004", Name: "Elena Conti", Group: 2, Position: "Graphic Designer", Department: "Creative",
            Items: [
                { Id: "T401", Text: "Brochure aziendale", Description: "Layout 12 pagine\nStampa offset", Width: 4320, Offset: 2880, Classes: "design-task", Color1: "#d13da0", Completion: 90 },
                { Id: "T402", Text: "Packaging prodotto", Description: "Design scatola premium\nClientex 3D mock", Width: 5760, Offset: 8640, Classes: "design-task", Color1: "#d13db9" },
                { Id: "T403", Text: "Newsletter Q1", Description: "Template HTML email\nMailchimp responsive", Width: 2880, Offset: 17280, Classes: "design-task", Color1: "#d13da0" }
            ]
        },
        {
            Id: "EMP005", Name: "Roberto Esposito", Group: 3, Position: "Marketing Manager", Department: "Marketing",
            Items: [
                { Id: "T501", Text: "Strategia Q1 2026", Description: "Piano marketing annuale\nBudget + KPI definiti", Width: 2880, Offset: 0, Classes: "planning-task", Color1: "#3dd187", Completion: 100 },
                { Id: "T502", Text: "Campagna Google Ads", Description: "Lancio campagna SEM\nBudget: 15.000 EUR\nROAS target: 3.5", Width: 7200, Offset: 4320, Classes: "campaign-task", Color1: "#3dd1a0" },
                { Id: "T503", Text: "Analisi competitor", Description: "Benchmark settore\nReport Q1 2026", Width: 2880, Offset: 14400, Classes: "analysis-task", Color1: "#3dd187" },
                { Id: "T504", Text: "Budget H1 review", Description: "Revisione allocazione budget\nH1 2026", Width: 1440, Offset: 21600, Classes: "planning-task", Color1: "#3dd1a0" }
            ]
        },
        {
            Id: "EMP006", Name: "Martina Romano", Group: 3, Position: "Content Strategist", Department: "Marketing",
            Items: [
                { Id: "T601", Text: "Calendario editoriale", Description: "Piano contenuti Feb-Mar\nBlog + Social", Width: 2880, Offset: 1440, Classes: "planning-task", Color1: "#3dd1ac", Completion: 70 },
                { Id: "T602", Text: "Articoli SEO", Description: "5 articoli per blog\nKW research completata", Width: 5760, Offset: 5760, Classes: "content-task", Color1: "#3dd1c5" },
                { Id: "T603", Text: "Case Study cliente", Description: "Testimonianza Rossi SpA\nSuccess story", Width: 2880, Offset: 14400, Classes: "content-task", Color1: "#3dd1ac" }
            ]
        },
        {
            Id: "EMP007", Name: "Alessia Marino", Group: 4, Position: "HR Manager", Department: "HR",
            Items: [
                { Id: "T701", Text: "Onboarding developer", Description: "Nuovo assunto: P. Mancini\nOrientamento + contratto", Width: 2880, Offset: 0, Classes: "hr-task", Color1: "#d1a03d", Completion: 80 },
                { Id: "T702", Text: "Performance Review", Description: "Valutazioni annuali\n15 dipendenti IT", Width: 5760, Offset: 4320, Classes: "hr-task", Color1: "#d1ac3d" },
                { Id: "T703", Text: "Politiche welfare", Description: "Revisione benefits\nFlexible work policy", Width: 2880, Offset: 12960, Classes: "hr-task", Color1: "#d1943d" },
                { Id: "T704", Text: "Recruiting attivo", Description: "3 posizioni aperte\nSenior Dev + Designer", Width: 4320, Offset: 18720, Classes: "recruiting-task", Color1: "#d1a03d" }
            ]
        },
        {
            Id: "EMP008", Name: "Francesco Ricci", Group: 4, Position: "Recruiter", Department: "HR",
            Items: [
                { Id: "T801", Text: "Colloqui tecnici", Description: "6 candidati Senior Dev\nInterviste tecnica", Width: 4320, Offset: 1440, Classes: "hr-task", Color1: "#d1b93d", Completion: 50 },
                { Id: "T802", Text: "Screening CV", Description: "120 candidature ricevute\nFiltro LinkedIn", Width: 2880, Offset: 8640, Classes: "hr-task", Color1: "#d1c53d" },
                { Id: "T803", Text: "Job Description", Description: "Aggiornamento schede profilo\nBacheca interna", Width: 1440, Offset: 17280, Classes: "admin-task", Color1: "#d1b93d" }
            ]
        },
        {
            Id: "EMP009", Name: "Davide Vitale", Group: 5, Position: "Sales Manager", Department: "Sales",
            Items: [
                { Id: "T901", Text: "Trattativa BancaEst", Description: "Contratto 250K annuo\nIn negoziazione", Width: 4320, Offset: 0, Classes: "sales-task", Color1: "#d1493d", Completion: 65 },
                { Id: "T902", Text: "Demo TechCorp", Description: "Presentazione prodotto\n3 decision maker", Width: 1440, Offset: 5760, Classes: "sales-task", Color1: "#d1563d" },
                { Id: "T903", Text: "Pipeline review Q1", Description: "Revisione opportunita\nForecast 1.2M EUR", Width: 1440, Offset: 10080, Classes: "planning-task", Color1: "#d1493d" },
                { Id: "T904", Text: "Report Q4 chiusura", Description: "Analisi risultati Q4\nPresentazione board", Width: 2880, Offset: 18720, Classes: "analysis-task", Color1: "#d1623d" }
            ]
        },
        {
            Id: "EMP010", Name: "Chiara Greco", Group: 5, Position: "Account Executive", Department: "Sales",
            Items: [
                { Id: "T1001", Text: "Upsell RetailGroup", Description: "Upgrade piano 30K a 80K\nIn corso", Width: 2880, Offset: 2880, Classes: "sales-task", Color1: "#d16e3d", Completion: 40 },
                { Id: "T1002", Text: "Onboarding Logistica srl", Description: "Setup account + training\nNuovo cliente", Width: 4320, Offset: 8640, Classes: "sales-task", Color1: "#d17b3d" },
                { Id: "T1003", Text: "Rinnovo Farmacoop", Description: "Scadenza contratto Feb\nRinnovo 2 anni", Width: 2880, Offset: 15840, Classes: "sales-task", Color1: "#d16e3d" }
            ]
        },
        {
            Id: "EMP011", Name: "Matteo Bruno", Group: 6, Position: "Operations Manager", Department: "Operations",
            Items: [
                { Id: "T1101", Text: "Audit processi interni", Description: "Revisione workflow\nOttimizzazione tempi", Width: 5760, Offset: 0, Classes: "ops-task", Color1: "#3dc5d1", Completion: 30 },
                { Id: "T1102", Text: "Meeting fornitori", Description: "Revisione SLA\nRinnovo contratti", Width: 2880, Offset: 7200, Classes: "meeting-task", Color1: "#3db9d1" },
                { Id: "T1103", Text: "Piano continuita", Description: "Business continuity plan\nRischio operativo", Width: 4320, Offset: 14400, Classes: "planning-task", Color1: "#3dd1d1" },
                { Id: "T1104", Text: "Report KPI mensile", Description: "Dashboard operativa\nEfficienza +12%", Width: 1440, Offset: 21600, Classes: "analysis-task", Color1: "#3dc5d1" }
            ]
        },
        {
            Id: "EMP012", Name: "Sara Fontana", Group: 6, Position: "Project Coordinator", Department: "Operations",
            Items: [
                { Id: "T1201", Text: "Progetto ERP", Description: "Implementazione SAP\nGo-live Marzo 2026", Width: 7200, Offset: 1440, Classes: "ops-task", Color1: "#3d93d1", Completion: 55 },
                { Id: "T1202", Text: "Formazione team SAP", Description: "Training moduli\nFinance + Logistica", Width: 2880, Offset: 10080, Classes: "training-task", Color1: "#3d87d1" },
                { Id: "T1203", Text: "Test sistema UAT", Description: "Fase 2 - Integrazione dati\nTest accettazione", Width: 4320, Offset: 17280, Classes: "testing-task", Color1: "#3da0d1" }
            ]
        }
    ],
    HRInfo: {
        Company: "Azienda S.p.A.",
        Period: "Q1 2026"
    }
};
