var productionSchedulerData = {
    Resources: [
        {
            Id: "M001",
            Name: "Press PX-200",
            Group: 1,   // Macchine a stampaggio
            Image: "images/hydraulic-press.jpg",
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-4578",
                    Text: "LAM-4578",
                    Description: "Laminati per settore auto\nMateriale: Acciaio INOX\nSpessore: 2mm",
                    Width: 5760, // 4 giorni
                    Offset: 1440, // 1 giorno dall'inizio
                    Color1: '#3a7bd5',
                    Classes: "production-order",
                    Data: {
                        Client: "AutoCorp",
                        Priority: "Alta",
                        Quantity: 1200,
                        Operator: "Mario Rossi"
                    },
                    Icons: [{Name: "industry"}, {Name: "clock"}]
                },
                {
                    Id: "ORD-4579",
                    Text: "LAM-4579",
                    Description: "Laminati per elettrodomestici\nMateriale: Alluminio",
                    Width: 4320, // 3 giorni
                    Offset: 8640, // 6 giorni dall'inizio
                    Color1: '#00d2ff',
                    Classes: "production-order",
                    Link: "ORD-4580"
                }
            ],
            Data: {
                Manutenzione: "2023-06-15",
                Produttività: "92%",
                UltimaRevisione: "2023-01-10"
            },
            Buttons: [{
                Text: "Manutenzione",
                Color: "orange",
                Id: "btn-maint-M001"
            }]
        },
        {
            Id: "M002",
            Name: "CNC T-450",
            Group: 2,   // Macchine a controllo numerico
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-4580",
                    Text: "AS-4580",
                    Description: "Alberi motore\nTolleranza: ±0.01mm\nFinitura: Rettificata",
                    Width: 7200, // 5 giorni
                    Offset: 7200, // 5 giorni dall'inizio
                    Color1: '#a8ff78',
                    Classes: "production-order critical"
                }
            ],
            Data: {
                Manutenzione: "2023-05-20",
                Produttività: "88%",
                UltimaRevisione: "2022-11-15"
            }
        },
        {
            Id: "M003",
            Name: "Line LA-10",
            Group: 3,   // Linee di assemblaggio
            Status: "In manutenzione",
            Items: [
                {
                    Id: "ORD-4581",
                    Text: "KIT-4581",
                    Description: "Kit componenti elettronici\nQuantità: 2500\nScadenza: 2023-04-30",
                    Width: 14400, // 10 giorni
                    Offset: 14400, // 10 giorni dall'inizio
                    Color1: '#ff416c',
                    Classes: "production-order delayed",
                    Completion: 35
                }
            ],
            Data: {
                Manutenzione: "In corso",
                Produttività: "75%",
                UltimaRevisione: "2023-03-01"
            }
        },
        {
            Id: "M004",
            Name: "Machine F-3000",
            Group: 2,
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-4582",
                    Text: "FR-4582",
                    Description: "Fresature complesse\nMateriale: Titanio\nDisegno: TC-7845",
                    Width: 2880, // 2 giorni
                    Offset: 21600, // 15 giorni dall'inizio
                    Color1: '#f9d423',
                    Classes: "production-order"
                }
            ]
        },
        {
            Id: "M005",
            Name: "Robot SR-200",
            Group: 4,   // Robot industriali
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-4583",
                    Text: "SAL-4583",
                    Description: "Saldature strutturali\nProcesso: MIG\nStandard: ISO 3834",
                    Width: 4320, // 3 giorni
                    Offset: 18000, // 12.5 giorni dall'inizio
                    Color1: '#8E2DE2',
                    Classes: "production-order"
                }
            ]
        },
        {
            Id: "M006",
            Name: "Owen FT-800",
            Group: 5,   // Trattamenti termici
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-4584",
                    Text: "TT-4584",
                    Description: "Tempra acciai\nCiclo: 12 ore\nTemperatura: 850°C",
                    Width: 1440, // 1 giorno (12 ore)
                    Offset: 23040, // 16 giorni dall'inizio
                    Color1: '#4b6cb7',
                    Classes: "production-order"
                }
            ]
        },
        {
            Id: "M007",
            Name: "Cut machine LT-500",
            Group: 6,   // Taglio
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-4585",
                    Text: "TAG-4585",
                    Description: "Taglio lamiera\nSpessore: 5mm\nTolleranza: ±0.1mm",
                    Width: 2880, // 2 giorni
                    Offset: 24480, // 17 giorni dall'inizio
                    Color1: '#f857a6',
                    Classes: "production-order"
                }
            ]
        }
    ],

    Calendar: {
        Exceptions: [
            {
                Date: "2023-04-10",
                Name: "Manutenzione programmata",
                Recurrent: false,
                Color: "#ff9966"
            },
            {
                Date: "2023-04-25",
                Name: "Festa Liberazione",
                Recurrent: true,
                Color: "#ff0000"
            },
            {
                Date: "2023-05-01",
                Name: "Festa del Lavoro",
                Recurrent: true,
                Color: "#ff0000"
            }
        ],
    },
    
    Events: [
        {
            Id: "EV-PROD-1",
            Description: "Consegna materiali grezzi",
            Offset: 0,
            Width: 1440, // 1 giorno
            Color: "#66cc99",
            Opacity: 0.7,
            Classes: "logistic-event"
        },
        {
            Id: "EV-PROD-2",
            Description: "Controllo qualità programmato",
            Offset: 10080, // 7 giorni
            Width: 2880, // 2 giorni
            Color: "#ffcc00",
            Opacity: 0.5,
            Classes: "quality-event"
        },
        {
            Id: "EV-PROD-3",
            Description: "Consegna cliente finale",
            Offset: 25920, // 18 giorni
            Width: 1440, // 1 giorno
            Color: "#cc99ff",
            Opacity: 0.7,
            Classes: "delivery-event"
        }
    ],
    
    ProductionInfo: {
        Plant: "Stabilimento Nord",
        Manager: "Ing. Paolo Bianchi",
        Shifts: [
            "06:00-14:00",
            "14:00-22:00"
        ],
        CurrentShift: 1,
        MonthlyTarget: 125000,
        CurrentProduction: 98750
    }
};