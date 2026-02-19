var clinicSchedulerData = {
    Resources: [
        {
            Id: "D001",
            Name: "Dott. Rossi Mario",
            Group: 1, // Cardiologia
            Status: "In servizio",
            Items: [
                {
                    Id: "VIS-1001",
                    Text: "VISITA CARDIO",
                    Description: "Paziente: Luigi Bianchi\nEtà: 58\nMotivo: dolore toracico\nECG da refertare",
                    Width: 30,         // durata in minuti
                    Offset: 480,        // inizio alle 8:00 (480 minuti dalla mezzanotte)
                    Color1: "#ff6b6b",
                    Classes: "appointment",
                    Completion: 100      // completata
                },
                {
                    Id: "VIS-1002",
                    Text: "ECOCARDIO",
                    Description: "Paziente: Anna Verdi\nEtà: 62\nSospetta insufficienza mitralica",
                    Width: 45,
                    Offset: 540,         // 9:00
                    Color1: "#feca57",
                    Classes: "examination",
                    Completion: 70
                },
                {
                    Id: "VIS-1003",
                    Text: "VISITA CONTROLLO",
                    Description: "Paziente: Giovanni Neri\nEtà: 55\nFollow-up post intervento",
                    Width: 20,
                    Offset: 630,         // 10:30
                    Color1: "#48dbfb",
                    Classes: "appointment"
                }
            ]
        },
        {
            Id: "D002",
            Name: "Dott.ssa Laura Esposito",
            Group: 1, // Cardiologia
            Status: "In servizio",
            Items: [
                {
                    Id: "VIS-1004",
                    Text: "VISITA CARDIO",
                    Description: "Paziente: Marco Ferrara\nEtà: 47\nIpertensione arteriosa",
                    Width: 30,
                    Offset: 510,         // 8:30
                    Color1: "#ff6b6b",
                    Classes: "appointment"
                },
                {
                    Id: "ECO-1005",
                    Text: "ECOCARDIO",
                    Description: "Paziente: Elena Russo\nEtà: 71\nControllo protesi valvolare",
                    Width: 45,
                    Offset: 600,         // 10:00
                    Color1: "#feca57",
                    Classes: "examination",
                    Completion: 30
                }
            ]
        },
        {
            Id: "RAD001",
            Name: "TAC 64 strati",
            Group: 2, // Radiologia
            Status: "Operativo",
            Items: [
                {
                    Id: "TAC-2001",
                    Text: "TAC CRANIO",
                    Description: "Paziente: Sofia Conti\nEtà: 45\nTrauma cranico lieve",
                    Width: 20,
                    Offset: 495,         // 8:15
                    Color1: "#1dd1a1",
                    Classes: "radiology"
                },
                {
                    Id: "TAC-2002",
                    Text: "TAC ADDOME",
                    Description: "Paziente: Antonio Gallo\nEtà: 63\nDolore addominale",
                    Width: 25,
                    Offset: 570,         // 9:30
                    Color1: "#00d2ff",
                    Classes: "radiology"
                },
                {
                    Id: "TAC-2003",
                    Text: "TAC TORACE",
                    Description: "Paziente: Paola De Luca\nEtà: 58\nSospetta neoplasia",
                    Width: 25,
                    Offset: 660,         // 11:00
                    Color1: "#3a7bd5",
                    Classes: "radiology",
                    Completion: 50
                }
            ]
        },
        {
            Id: "RAD002",
            Name: "Risonanza Magnetica 1.5T",
            Group: 2, // Radiologia
            Status: "Manutenzione",
            Items: [
                {
                    Id: "RMN-3001",
                    Text: "RMN COLONNA",
                    Description: "Paziente: Francesco Riva\nEtà: 52\nLombalgia cronica",
                    Width: 40,
                    Offset: 540,         // 9:00
                    Color1: "#ff9ff3",
                    Classes: "radiology"
                }
            ]
        },
        {
            Id: "ORL001",
            Name: "Ambulatorio Ortopedia",
            Group: 3, // Ortopedia
            Status: "In servizio",
            Items: [
                {
                    Id: "ORT-4001",
                    Text: "VISITA ORTOPEDICA",
                    Description: "Paziente: Luca Barbieri\nEtà: 34\nDistorsione ginocchio",
                    Width: 25,
                    Offset: 495,         // 8:15
                    Color1: "#f368e0",
                    Classes: "appointment",
                    Completion: 100
                },
                {
                    Id: "ORT-4002",
                    Text: "RADIOLOGIA",
                    Description: "Paziente: Sara Monti\nEtà: 27\nRx mano per frattura",
                    Width: 15,
                    Offset: 570,         // 9:30
                    Color1: "#00d2ff",
                    Classes: "xray"
                },
                {
                    Id: "ORT-4003",
                    Text: "VISITA CONTROLLO",
                    Description: "Paziente: Giorgio Fontana\nEtà: 61\nProtesi anca",
                    Width: 20,
                    Offset: 630,         // 10:30
                    Color1: "#ff6b6b",
                    Classes: "appointment"
                }
            ]
        },
        {
            Id: "ORL002",
            Name: "Dott. Fabio Martini",
            Group: 3, // Ortopedia
            Status: "In servizio",
            Items: [
                {
                    Id: "ORT-4004",
                    Text: "VISITA ORTOPEDICA",
                    Description: "Paziente: Elena Villa\nEtà: 48\nDolore spalla",
                    Width: 25,
                    Offset: 510,         // 8:30
                    Color1: "#f368e0",
                    Classes: "appointment"
                },
                {
                    Id: "ORT-4005",
                    Text: "ECOGRAFIA",
                    Description: "Paziente: Roberto Sala\nEtà: 39\nSospetta lesione menisco",
                    Width: 30,
                    Offset: 585,         // 9:45
                    Color1: "#48dbfb",
                    Classes: "ultrasound"
                }
            ]
        },
        {
            Id: "PS001",
            Name: "Pronto Soccorso - Medico 1",
            Group: 4, // Emergenza
            Status: "In servizio",
            Items: [
                {
                    Id: "PS-5001",
                    Text: "CODICE GIALLO",
                    Description: "Paziente: sconosciuto\nTrauma stradale\nInstabile",
                    Width: 60,
                    Offset: 465,         // 7:45
                    Color1: "#e84118",
                    Classes: "emergency",
                    Completion: 80
                },
                {
                    Id: "PS-5002",
                    Text: "CODICE VERDE",
                    Description: "Paziente: Maria Rocca\nFebbre alta\nAttesa referti",
                    Width: 30,
                    Offset: 570,         // 9:30
                    Color1: "#fbc531",
                    Classes: "emergency"
                }
            ]
        },
        {
            Id: "PS002",
            Name: "Pronto Soccorso - Medico 2",
            Group: 4, // Emergenza
            Status: "In servizio",
            Items: [
                {
                    Id: "PS-5003",
                    Text: "CODICE ROSSO",
                    Description: "Paziente: anziano\nInfarto in corso\nTrasferimento in UTIC",
                    Width: 90,
                    Offset: 480,         // 8:00
                    Color1: "#c23616",
                    Classes: "emergency",
                    Completion: 45
                }
            ]
        },
        {
            Id: "AMB001",
            Name: "Ambulatorio Oculistica",
            Group: 5, // Oculistica
            Status: "In servizio",
            Items: [
                {
                    Id: "OCU-6001",
                    Text: "VISITA OCULISTICA",
                    Description: "Paziente: Chiara Fabbri\nEtà: 22\nControllo miopia",
                    Width: 20,
                    Offset: 495,         // 8:15
                    Color1: "#9c88ff",
                    Classes: "appointment"
                },
                {
                    Id: "OCU-6002",
                    Text: "FONDO OCULARE",
                    Description: "Paziente: Valerio Neri\nEtà: 68\nGlaucoma sospetto",
                    Width: 30,
                    Offset: 570,         // 9:30
                    Color1: "#8c7ae6",
                    Classes: "examination"
                },
                {
                    Id: "OCU-6003",
                    Text: "VISITA CONTROLLO",
                    Description: "Paziente: Giulia Moretti\nEtà: 45\nPost intervento cataratta",
                    Width: 15,
                    Offset: 660,         // 11:00
                    Color1: "#487eb0",
                    Classes: "appointment",
                    Completion: 100
                }
            ]
        },
        {
            Id: "AMB002",
            Name: "Ambulatorio Dermatologia",
            Group: 6, // Dermatologia
            Status: "In servizio",
            Items: [
                {
                    Id: "DER-7001",
                    Text: "VISITA DERMATOLOGICA",
                    Description: "Paziente: Alessandro Bianchi\nEtà: 35\nControllo nei",
                    Width: 20,
                    Offset: 510,         // 8:30
                    Color1: "#e1b12c",
                    Classes: "appointment"
                },
                {
                    Id: "DER-7002",
                    Text: "DERMOSCOPIA",
                    Description: "Paziente: Marta Sala\nEtà: 28\nLesione sospetta",
                    Width: 25,
                    Offset: 585,         // 9:45
                    Color1: "#f5cd79",
                    Classes: "examination"
                }
            ]
        },
        {
            Id: "CHIR001",
            Name: "Sala Operatoria 1",
            Group: 7, // Chirurgia
            Status: "Occupata",
            Items: [
                {
                    Id: "CH-8001",
                    Text: "INTERVENTO",
                    Description: "Paziente: Giuseppe Romano\nColecistectomia\nDurata prevista 90min",
                    Width: 90,
                    Offset: 510,         // 8:30
                    Color1: "#f97f51",
                    Classes: "surgery",
                    Completion: 60
                }
            ]
        },
        {
            Id: "CHIR002",
            Name: "Sala Operatoria 2",
            Group: 7, // Chirurgia
            Status: "Libera",
            Items: [
                {
                    Id: "CH-8002",
                    Text: "INTERVENTO",
                    Description: "Paziente: Sonia Ferri\nRiduzione frattura femore",
                    Width: 120,
                    Offset: 600,         // 10:00
                    Color1: "#ea868f",
                    Classes: "surgery"
                }
            ]
        }
    ],
    ClinicInfo: {
        Hospital: "Ospedale San Giovanni",
        Date: "2026-02-19"
    }
};