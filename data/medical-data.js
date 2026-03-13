var clinicSchedulerData = {
    Resources: [
        {
            Id: "DR001",
            Name: "Dr. Rossi — Cardiologia",
            Group: 1,
            Items: [
                { Id: "AP1001", Text: "Visita Bianchi M.", Description: "Prima visita\nECG + ecocardiogramma", Width: 60, Offset: 480, Color1: "#3d7bd1", Classes: "visit", Completion: 100 },
                { Id: "AP1002", Text: "Visita Esposito F.", Description: "Controllo post-intervento\n3 mesi", Width: 60, Offset: 600, Color1: "#3d7bd1", Classes: "visit", Completion: 100 },
                { Id: "AP1003", Text: "Visita Ferrari G.", Description: "Ipertensione arteriosa\nMonitoraggio", Width: 30, Offset: 690, Color1: "#3dacd1", Classes: "checkup" },
                { Id: "AP1004", Text: "Visita Conti L.", Description: "Aritmia\nHolter 24h prescritto", Width: 60, Offset: 780, Color1: "#3d7bd1", Classes: "visit" },
                { Id: "AP1005", Text: "Visita Mancini P.", Description: "Scompenso cardiaco\nTerapia diuretica", Width: 60, Offset: 900, Color1: "#3dacd1", Classes: "visit" },
                { Id: "AP1006", Text: "Visita Lombardi A.", Description: "Follow-up pace-maker\nBatteria 85%", Width: 30, Offset: 1020, Color1: "#3d7bd1", Classes: "checkup" }
            ]
        },
        {
            Id: "DR002",
            Name: "Dr.ssa Marino — Ortopedia",
            Group: 1,
            Items: [
                { Id: "AP2001", Text: "Visita Ricci S.", Description: "Lombalgia cronica\nRX lombosacrale", Width: 60, Offset: 480, Color1: "#3dd187", Classes: "visit", Completion: 100 },
                { Id: "AP2002", Text: "Visita De Luca R.", Description: "Protesi anca sinistra\nControllo 6 mesi", Width: 60, Offset: 570, Color1: "#3dd1a0", Classes: "checkup", Completion: 100 },
                { Id: "AP2003", Text: "Visita Gallo N.", Description: "Lesione menisco\nValutazione chirurgica", Width: 60, Offset: 690, Color1: "#3dd187", Classes: "visit" },
                { Id: "AP2004", Text: "Visita Fontana C.", Description: "Spalla destra\nRuptura parziale cuffia", Width: 60, Offset: 810, Color1: "#3dd1a0", Classes: "visit" },
                { Id: "AP2005", Text: "Visita Greco T.", Description: "Artrite reumatoide\nInfliximab — revisione", Width: 30, Offset: 930, Color1: "#3dd187", Classes: "checkup" }
            ]
        },
        {
            Id: "DR003",
            Name: "Dr. Ferrari — Neurologia",
            Group: 1,
            Items: [
                { Id: "AP3001", Text: "Visita Bruno V.", Description: "Cefalea cronica\nRisonanza prescritta", Width: 60, Offset: 510, Color1: "#ac3dd1", Classes: "visit", Completion: 100 },
                { Id: "AP3002", Text: "Visita Serra M.", Description: "Sclerosi multipla\nControllo annuale", Width: 60, Offset: 630, Color1: "#b93dd1", Classes: "visit" },
                { Id: "AP3003", Text: "Visita Costa E.", Description: "Parkinson stadio 2\nAggiustamento terapia", Width: 60, Offset: 750, Color1: "#ac3dd1", Classes: "visit" },
                { Id: "AP3004", Text: "Visita Martini F.", Description: "Epilessia\nEEG — revisione referto", Width: 30, Offset: 870, Color1: "#b93dd1", Classes: "checkup" },
                { Id: "AP3005", Text: "Visita Rinaldi O.", Description: "Neuropatia periferica\nElettro-miografia", Width: 60, Offset: 960, Color1: "#ac3dd1", Classes: "visit" }
            ]
        },
        {
            Id: "DR004",
            Name: "Dr.ssa Conti — Pediatria",
            Group: 1,
            Items: [
                { Id: "AP4001", Text: "Vaccino — Sala A", Description: "Esavalente 3a dose\nPaz. 4 mesi", Width: 30, Offset: 480, Color1: "#d1b93d", Classes: "vaccine", Completion: 100 },
                { Id: "AP4002", Text: "Visita Luca B. (5a)", Description: "Controllo sviluppo\nBilancio 5 anni", Width: 60, Offset: 540, Color1: "#d1a03d", Classes: "checkup", Completion: 100 },
                { Id: "AP4003", Text: "Visita Sara M. (8a)", Description: "Otite media ricorrente\nAudiometria", Width: 30, Offset: 660, Color1: "#d1b93d", Classes: "visit" },
                { Id: "AP4004", Text: "Vaccino — Sala A", Description: "MPR richiamo\nPaz. 6 anni", Width: 30, Offset: 750, Color1: "#d1c53d", Classes: "vaccine" },
                { Id: "AP4005", Text: "Visita Marco T. (3a)", Description: "Asma bronchiale\nSpirometria basale", Width: 60, Offset: 840, Color1: "#d1a03d", Classes: "visit" },
                { Id: "AP4006", Text: "Visita Emma R. (12a)", Description: "Scoliosi idiopatica\nRx colonna", Width: 60, Offset: 960, Color1: "#d1b93d", Classes: "visit" }
            ]
        },
        {
            Id: "DR005",
            Name: "Dr. Russo — Dermatologia",
            Group: 1,
            Items: [
                { Id: "AP5001", Text: "Visita Moretti G.", Description: "Psoriasi a placche\nFototerapia UVB", Width: 30, Offset: 480, Color1: "#d1493d", Classes: "visit", Completion: 100 },
                { Id: "AP5002", Text: "Visita Pellegrini A.", Description: "Melanoma sospetto\nDermoscopia digitale", Width: 60, Offset: 540, Color1: "#d1623d", Classes: "visit urgent" },
                { Id: "AP5003", Text: "Asportazione neo", Description: "Ambulatoriale\nAnestesia locale", Width: 60, Offset: 660, Color1: "#d1493d", Classes: "procedure" },
                { Id: "AP5004", Text: "Visita Santoro L.", Description: "Acne nodulo-cistica\nIsotretinoina", Width: 30, Offset: 780, Color1: "#d1623d", Classes: "visit" },
                { Id: "AP5005", Text: "Visita Caruso M.", Description: "Dermatite atopica\nBiologico — follow-up", Width: 60, Offset: 870, Color1: "#d1493d", Classes: "checkup" }
            ]
        },
        {
            Id: "OR001",
            Name: "Sala Operatoria 1",
            Group: 2,
            Items: [
                { Id: "SG6001", Text: "Artroscopia ginocchio", Description: "Chirurgo: Dr. Marino\nPaz: Gallo N. — Menisco sx", Width: 180, Offset: 480, Color1: "#3dd1c5", Classes: "surgery", Completion: 100 },
                { Id: "SG6002", Text: "Ernioplastica inguinale", Description: "Chirurgo: Dr. Esposito\nPaz: Valli R. — Laparoscopica", Width: 120, Offset: 720, Color1: "#3dacd1", Classes: "surgery" },
                { Id: "SG6003", Text: "Colecistectomia", Description: "Chirurgo: Dr. Esposito\nPaz: Neri C. — Laparoscopica", Width: 150, Offset: 900, Color1: "#3dd1c5", Classes: "surgery" }
            ]
        },
        {
            Id: "OR002",
            Name: "Sala Operatoria 2",
            Group: 2,
            Items: [
                { Id: "SG7001", Text: "Protesi ginocchio dx", Description: "Chirurgo: Dr. Marino\nPaz: De Luca R.", Width: 240, Offset: 480, Color1: "#3dd187", Classes: "surgery major" },
                { Id: "SG7002", Text: "Tiroidectomia totale", Description: "Chirurgo: Dr. Ricci\nPaz: Ferri G. — Nodulo 3cm", Width: 180, Offset: 780, Color1: "#3dd1a0", Classes: "surgery" }
            ]
        },
        {
            Id: "LAB01",
            Name: "Laboratorio Analisi",
            Group: 3,
            Items: [
                { Id: "LB8001", Text: "Prelievi mattutini", Description: "42 prelievi in agenda\nA digiuno", Width: 180, Offset: 420, Color1: "#d13d7b", Classes: "lab", Completion: 100 },
                { Id: "LB8002", Text: "Colture batteriche", Description: "Urinocoltura + emocoltura\n18 campioni", Width: 240, Offset: 660, Color1: "#d13da0", Classes: "lab" },
                { Id: "LB8003", Text: "Prelievi pomeridiani", Description: "12 prelievi urgenti\nReparto degenza", Width: 120, Offset: 960, Color1: "#d13d7b", Classes: "lab" }
            ]
        },
        {
            Id: "RAD01",
            Name: "Radiologia / RMN",
            Group: 3,
            Items: [
                { Id: "RD9001", Text: "RMN colonna lombare", Description: "Paz: Ricci S.\nMdc con gadolinio", Width: 60, Offset: 480, Color1: "#623dd1", Classes: "radiology", Completion: 100 },
                { Id: "RD9002", Text: "TAC torace", Description: "Paz: Ferretti A.\nStaging neoplastico", Width: 30, Offset: 570, Color1: "#873dd1", Classes: "radiology urgent" },
                { Id: "RD9003", Text: "Eco addome", Description: "Paz: Galli M.\nFegato + colecisti", Width: 30, Offset: 660, Color1: "#623dd1", Classes: "radiology" },
                { Id: "RD9004", Text: "RMN encefalo", Description: "Paz: Bruno V.\nDemielinizzazione sospetta", Width: 60, Offset: 750, Color1: "#873dd1", Classes: "radiology" },
                { Id: "RD9005", Text: "Rx torace", Description: "Paz: Longo P.\nControllo polmonite", Width: 15, Offset: 870, Color1: "#623dd1", Classes: "radiology" },
                { Id: "RD9006", Text: "Eco tiroide", Description: "Paz: Ferri G.\nPre-operatoria", Width: 30, Offset: 930, Color1: "#873dd1", Classes: "radiology" }
            ]
        }
    ],
    Groups: [
        { Id: 1, Name: "Ambulatori" },
        { Id: 2, Name: "Sale Operatorie" },
        { Id: 3, Name: "Diagnostica" }
    ]
};
