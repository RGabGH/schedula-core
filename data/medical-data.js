var clinicSchedulerData = {
    Resources: [
        // Cardiologia
        {
            Id: "CARD1",
            Name: "Dr. Rossi - Cardiologia",
            Group: 1,
            Specialty: "Cardiologia",
            Items: [
                {
                    Id: "C101",
                    Text: "Bianchi M.",
                    Description: "Controllo pressione\nECG richiesto\nIpertensione",
                    Width: 720, // 1.5h
                    Offset: 1440, // Giorno 1 08:00
                    Color1: '#FF6B6B',
                    Classes: "appointment checkup"
                },
                {
                    Id: "C102",
                    Text: "Verdi L.",
                    Description: "Visita controllo\nPost-operatorio",
                    Width: 480, // 1h
                    Offset: 3600, // Giorno 3 10:00
                    Color1: '#4ECDC4',
                    Classes: "appointment post-op"
                },
                {
                    Id: "C103",
                    Text: "Neri G.",
                    Description: "Palpitazioni\nHolter 24h da valutare",
                    Width: 600, // 1.25h
                    Offset: 7200, // Giorno 5 14:00
                    Classes: "appointment urgent"
                }
            ]
        },

        // Ortopedia
        {
            Id: "ORTO1",
            Name: "Dr. Bianchi - Ortopedia",
            Group: 2,
            Specialty: "Ortopedia",
            Items: [
                {
                    Id: "O201",
                    Text: "Russo P.",
                    Description: "Dolore spalla dx\nRX già eseguito",
                    Width: 720,
                    Offset: 4320,
                    Classes: "appointment urgent"
                },
                {
                    Id: "O202",
                    Text: "Ferrari A.",
                    Description: "Controllo gesso\nGinocchio sx",
                    Width: 480,
                    Offset: 6480,
                    Classes: "appointment checkup"
                },
                {
                    Id: "O203",
                    Text: "Esposito L.",
                    Description: "Prima visita\nLombalgia cronica",
                    Width: 960,
                    Offset: 8640,
                    Classes: "appointment new"
                }
            ]
        },

        // Pediatria
        {
            Id: "PED1",
            Name: "Dr. Verdi - Pediatria",
            Group: 3,
            Specialty: "Pediatria",
            Items: [
                {
                    Id: "P301",
                    Text: "Bambino R. (6 anni)",
                    Description: "Vaccinazione esavalente\nControllo crescita",
                    Width: 480,
                    Offset: 2880,
                    Color1: '#A0E7E5',
                    Classes: "appointment vaccine"
                },
                {
                    Id: "P302",
                    Text: "Bambina M. (4 anni)",
                    Description: "Tosse persistente\nPossibile allergia",
                    Width: 720,
                    Offset: 5040,
                    Classes: "appointment urgent"
                }
            ]
        },

        // Ecografia
        {
            Id: "ECO1",
            Name: "Sala Ecografie",
            Group: 4,
            Type: "Stanza",
            Items: [
                {
                    Id: "E401",
                    Text: "Addome completo",
                    Description: "Paziente: Gialli S.\nDigiuno da 8h",
                    Width: 600,
                    Offset: 2160,
                    Classes: "appointment exam"
                },
                {
                    Id: "E402",
                    Text: "Tiroide",
                    Description: "Paziente: Rossi M.\nRefertazione urgente",
                    Width: 480,
                    Offset: 5760,
                    Classes: "appointment urgent"
                },
                {
                    Id: "E403",
                    Text: "Articolazione ginocchio",
                    Description: "Paziente: Bianchi L.",
                    Width: 480,
                    Offset: 9360,
                    Classes: "appointment exam"
                }
            ]
        },

        // Fisioterapia
        {
            Id: "FISIO1",
            Name: "Sala Fisioterapia",
            Group: 5,
            Type: "Stanza",
            Items: [
                {
                    Id: "F501",
                    Text: "Rieducazione",
                    Description: "Paziente: Neri G.\nPost-operatorio ginocchio",
                    Width: 960,
                    Offset: 3600,
                    Classes: "appointment physio"
                },
                {
                    Id: "F502",
                    Text: "Massoterapia",
                    Description: "Paziente: Viola P.\nCervicalgia",
                    Width: 720,
                    Offset: 6480,
                    Classes: "appointment physio"
                },
                {
                    Id: "F503",
                    Text: "TENS",
                    Description: "Paziente: Rossi A.\nLombosciatalgia",
                    Width: 720,
                    Offset: 7920,
                    Classes: "appointment physio"
                }
            ]
        },

        // Laboratorio Analisi
        {
            Id: "LAB1",
            Name: "Prelievi Laboratorio",
            Group: 6,
            Type: "Stanza",
            Items: [
                {
                    Id: "L601",
                    Text: "Prelievo sangue",
                    Description: "Paziente: Gialli M.\nDigiuno da 12h",
                    Width: 240,
                    Offset: 1800,
                    Classes: "appointment lab"
                },
                {
                    Id: "L602",
                    Text: "Prelievo sangue",
                    Description: "Paziente: Verdi S.\nGravidanza 3° trimestre",
                    Width: 240,
                    Offset: 2880,
                    Classes: "appointment lab"
                },
                {
                    Id: "L603",
                    Text: "Prelievo sangue",
                    Description: "Paziente: Blu R.\nControllo terapia anticoagulante",
                    Width: 240,
                    Offset: 4320,
                    Classes: "appointment lab"
                },
                {
                    Id: "L604",
                    Text: "Test intolleranze",
                    Description: "Paziente: Rossi L.\nPanel 120 alimenti",
                    Width: 480,
                    Offset: 7200,
                    Classes: "appointment lab"
                },
                {
                    Id: "L605",
                    Text: "Prelievo sangue",
                    Description: "Paziente: Bianchi P.",
                    Width: 240,
                    Offset: 8640,
                    Classes: "appointment lab"
                }
            ]
        }
    ],

    Calendar: {
        Exceptions: [
            {
                Date: "2023-12-25",
                Name: "Chiusura Natale",
                Recurrent: true,
                Color: "#FF0000"
            },
            {
                Date: "2023-12-26",
                Name: "Chiusura Santo Stefano",
                Recurrent: true,
                Color: "#FF0000"
            }
        ],
        BusinessHours: {
            Start: 480, // 8:00
            End: 1200   // 20:00
        }
    },

    Events: [
        {
            Id: "PAUSA1",
            Description: "Pausa pranzo",
            Offset: 720, // 12:00
            Width: 120,  // 2h
            Recurrent: "daily",
            Color: "#FFD166",
            Opacity: 0.3
        },
        {
            Id: "PULIZIA1",
            Description: "Sanificazione ambienti",
            Offset: 1140, // 19:00
            Width: 60,    // 1h
            Recurrent: "daily",
            Color: "#06D6A0",
            Opacity: 0.2
        }
    ],

    ClinicInfo: {
        Name: "Poliambulatorio San Marco",
        Address: "Via Roma 123, Milano",
        EmergencyPhone: "02-1234567",
        Departments: ["Cardiologia", "Ortopedia", "Pediatria", "Diagnostica", "Fisioterapia"]
    }
};