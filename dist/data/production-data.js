var productionSchedulerData = {
    Resources: [
        {
            Id: "M001",
            Name: "Pressa PX-200",
            Group: 1,
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-4578",
                    Text: "LAM-4578",
                    Description: "Laminati settore auto\nAcciaio INOX 2mm\nQty: 1200 pz",
                    Width: 5760,
                    Offset: 1440,
                    Color1: "#3a7bd5",
                    Classes: "production-order",
                    Completion: 80
                },
                {
                    Id: "ORD-4579",
                    Text: "LAM-4579",
                    Description: "Laminati elettrodomestici\nAlluminio 1.5mm\nQty: 2200 pz",
                    Width: 4320,
                    Offset: 10080,
                    Color1: "#00d2ff",
                    Classes: "production-order"
                },
                {
                    Id: "ORD-4590",
                    Text: "LAM-4590",
                    Description: "Lamiera zincata\nEdilizia industriale\nQty: 800 pz",
                    Width: 2880,
                    Offset: 17280,
                    Color1: "#3a7bd5",
                    Classes: "production-order"
                }
            ]
        },
        {
            Id: "M002",
            Name: "Pressa PX-201",
            Group: 1,
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-4601",
                    Text: "LAM-4601",
                    Description: "Componenti automotive\nAcciaio DP 600\nQty: 3500 pz",
                    Width: 7200,
                    Offset: 0,
                    Color1: "#ff6b6b",
                    Classes: "production-order",
                    Completion: 45
                },
                {
                    Id: "ORD-4602",
                    Text: "LAM-4602",
                    Description: "Scocche elettronica\nAlluminio 0.8mm\nQty: 5000 pz",
                    Width: 5040,
                    Offset: 8640,
                    Color1: "#feca57",
                    Classes: "production-order"
                }
            ]
        },
        {
            Id: "M003",
            Name: "Pressa PX-202",
            Group: 1,
            Status: "Manutenzione",
            Items: [
                {
                    Id: "ORD-4610",
                    Text: "LAM-4610",
                    Description: "Pannelli fotovoltaici\nAcciaio zincato\nQty: 600 pz",
                    Width: 4320,
                    Offset: 2880,
                    Color1: "#48dbfb",
                    Classes: "production-order"
                }
            ]
        },
        {
            Id: "M004",
            Name: "Fresatrice CNC-50",
            Group: 2,
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-4701",
                    Text: "FRS-101",
                    Description: "Stampo per iniezione\nAcciaio temprato\nQty: 1 pz",
                    Width: 10080,
                    Offset: 0,
                    Color1: "#ff9ff3",
                    Classes: "production-order",
                    Completion: 30
                },
                {
                    Id: "ORD-4702",
                    Text: "FRS-102",
                    Description: "Componenti meccanici\nAlluminio 7075\nQty: 150 pz",
                    Width: 5760,
                    Offset: 11520,
                    Color1: "#f368e0",
                    Classes: "production-order"
                },
                {
                    Id: "ORD-4703",
                    Text: "FRS-103",
                    Description: "Telaio robot\nAcciaio strutturale\nQty: 10 pz",
                    Width: 7200,
                    Offset: 18720,
                    Color1: "#ff6b6b",
                    Classes: "production-order"
                }
            ]
        },
        {
            Id: "M005",
            Name: "Tornio TL-30",
            Group: 2,
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-4801",
                    Text: "TOR-201",
                    Description: "Alberi motore\nAcciaio C40\nQty: 200 pz",
                    Width: 4320,
                    Offset: 1440,
                    Color1: "#1dd1a1",
                    Classes: "production-order",
                    Completion: 95
                },
                {
                    Id: "ORD-4802",
                    Text: "TOR-202",
                    Description: "Flange personalizzate\nAlluminio 6061\nQty: 80 pz",
                    Width: 2880,
                    Offset: 7200,
                    Color1: "#feca57",
                    Classes: "production-order"
                },
                {
                    Id: "ORD-4803",
                    Text: "TOR-203",
                    Description: "Boccole bronzine\nBronzo fosforoso\nQty: 500 pz",
                    Width: 3600,
                    Offset: 11520,
                    Color1: "#00d2ff",
                    Classes: "production-order"
                }
            ]
        },
        {
            Id: "M006",
            Name: "Centro di lavoro MC-100",
            Group: 2,
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-4901",
                    Text: "MC-301",
                    Description: "Carter protezione\nAcciaio INOX 1.5mm\nQty: 60 pz",
                    Width: 5040,
                    Offset: 0,
                    Color1: "#3a7bd5",
                    Classes: "production-order"
                },
                {
                    Id: "ORD-4902",
                    Text: "MC-302",
                    Description: "Supporti motore\nGhisa sferoidale\nQty: 120 pz",
                    Width: 6480,
                    Offset: 7200,
                    Color1: "#ff6b6b",
                    Classes: "production-order",
                    Completion: 20
                }
            ]
        },
        {
            Id: "M007",
            Name: "Linea assemblaggio A1",
            Group: 3,
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-5001",
                    Text: "ASS-401",
                    Description: "Assemblaggio pompe idrauliche\nQty: 300 pz",
                    Width: 5760,
                    Offset: 0,
                    Color1: "#feca57",
                    Classes: "production-order"
                },
                {
                    Id: "ORD-5002",
                    Text: "ASS-402",
                    Description: "Gruppi frizione\nQty: 450 pz",
                    Width: 7200,
                    Offset: 7200,
                    Color1: "#48dbfb",
                    Classes: "production-order"
                },
                {
                    Id: "ORD-5003",
                    Text: "ASS-403",
                    Description: "Valvole di sicurezza\nQty: 600 pz",
                    Width: 4320,
                    Offset: 15840,
                    Color1: "#1dd1a1",
                    Classes: "production-order",
                    Completion: 60
                }
            ]
        },
        {
            Id: "M008",
            Name: "Robot saldatura RS-7",
            Group: 3,
            Status: "Fermo",
            Items: [
                {
                    Id: "ORD-5101",
                    Text: "WEL-501",
                    Description: "Telai in acciaio\nQty: 80 pz",
                    Width: 4320,
                    Offset: 2880,
                    Color1: "#ff9ff3",
                    Classes: "production-order"
                }
            ]
        },
        {
            Id: "M009",
            Name: "Stampante 3D SP-1",
            Group: 4,
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-5201",
                    Text: "3DP-601",
                    Description: "Prototipi funzionali\nNylon PA12\nQty: 25 pz",
                    Width: 10080,
                    Offset: 0,
                    Color1: "#f368e0",
                    Classes: "production-order",
                    Completion: 15
                },
                {
                    Id: "ORD-5202",
                    Text: "3DP-602",
                    Description: "Staffe personalizzate\nABS\nQty: 150 pz",
                    Width: 5760,
                    Offset: 11520,
                    Color1: "#00d2ff",
                    Classes: "production-order"
                }
            ]
        },
        {
            Id: "M010",
            Name: "Taglio laser TL-500",
            Group: 2,
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-5301",
                    Text: "LAS-701",
                    Description: "Lamierini elettrici\nAcciaio al silicio\nQty: 5000 pz",
                    Width: 7200,
                    Offset: 0,
                    Color1: "#3a7bd5",
                    Classes: "production-order"
                },
                {
                    Id: "ORD-5302",
                    Text: "LAS-702",
                    Description: "Profili architettonici\nAcciaio corten\nQty: 200 pz",
                    Width: 5040,
                    Offset: 8640,
                    Color1: "#ff6b6b",
                    Classes: "production-order"
                },
                {
                    Id: "ORD-5303",
                    Text: "LAS-703",
                    Description: "Particolari di precisione\nOttone\nQty: 1000 pz",
                    Width: 3600,
                    Offset: 15120,
                    Color1: "#feca57",
                    Classes: "production-order"
                }
            ]
        },
        {
            Id: "M011",
            Name: "Piegatrice PG-20",
            Group: 2,
            Status: "Operativa",
            Items: [
                {
                    Id: "ORD-5401",
                    Text: "PIE-801",
                    Description: "Scatolari in lamiera\nAcciaio S235\nQty: 350 pz",
                    Width: 4320,
                    Offset: 2160,
                    Color1: "#1dd1a1",
                    Classes: "production-order"
                },
                {
                    Id: "ORD-5402",
                    Text: "PIE-802",
                    Description: "Supporti a L\nAlluminio 3mm\nQty: 800 pz",
                    Width: 2880,
                    Offset: 7920,
                    Color1: "#48dbfb",
                    Classes: "production-order",
                    Completion: 100
                }
            ]
        },
        {
            Id: "M012",
            Name: "Linea verniciatura LV-2",
            Group: 4,
            Status: "Manutenzione",
            Items: [
                {
                    Id: "ORD-5501",
                    Text: "VER-901",
                    Description: "Verniciatura telai\nRAL 9010\nQty: 150 pz",
                    Width: 5760,
                    Offset: 0,
                    Color1: "#ff9ff3",
                    Classes: "production-order"
                },
                {
                    Id: "ORD-5502",
                    Text: "VER-902",
                    Description: "Trattamento anticorrosione\nComponenti auto\nQty: 400 pz",
                    Width: 4320,
                    Offset: 7200,
                    Color1: "#f368e0",
                    Classes: "production-order"
                }
            ]
        }
    ],
    ProductionInfo: {
        Plant: "Stabilimento Centrale"
    }
};
