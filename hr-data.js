var hrSchedulerData = {
    Resources: [
        {
            Id: "EMP001",
            Name: "Mary",
            Group: 1,   // Sviluppo Software
            Position: "Senior Developer",
            Department: "IT",
            Image: "images/employee1.jpg",
            Items: [
                {
                    Id: "TASK-101",
                    Text: "Sviluppo modulo CRM",
                    Description: "Implementazione nuove features per cliente AXA\nStima: 5 giorni",
                    Width: 4320, // 3 giorni
                    Offset: 1440, // 1 giorno dall'inizio
                    Classes: "dev-task",
                    Data: {
                        Project: "AXA Modernization",
                        Priority: "High",
                        Status: "In Progress"
                    },
                    Icons: [{Name: "code"}, {Name: "urgent"}]
                },
                {
                    Id: "TASK-102",
                    Text: "Code Review",
                    Description: "Revisione pull request team",
                    Width: 1440, // 1 giorno
                    Offset: 7200, // 5 giorni dall'inizio
                    Classes: "review-task"
                }
            ],
            Data: {
                HireDate: "2020-05-15",
                Skills: ["Java", "React", "SQL"],
                Workload: "85%"
            }
        },
        {
            Id: "EMP002",
            Name: "Laura",
            Group: 2,   // Design
            Position: "UX Designer",
            Department: "Creative",
            Items: [
                {
                    Id: "TASK-201",
                    Text: "UI Redesign",
                    Description: "Nuovo layout dashboard admin",
                    Width: 7200, // 5 giorni
                    Offset: 2880, // 2 giorni dall'inizio
                    Classes: "design-task",
                    Completion: 40
                }
            ],
            Data: {
                HireDate: "2021-02-10",
                Skills: ["Figma", "User Research", "Prototyping"],
                Workload: "70%"
            }
        },
        {
            Id: "EMP003",
            Name: "John",
            Group: 3,   // Marketing
            Position: "Digital Marketing",
            Department: "Commercial",
            Items: [
                {
                    Id: "TASK-301",
                    Text: "Campagna Q2",
                    Description: "Pianificazione campagna estiva",
                    Width: 5760, // 4 giorni
                    Offset: 8640, // 6 giorni dall'inizio
                    Classes: "marketing-task",
                    Icons:[{Name:"bookmark"}]

                },
                {
                    Id: "TASK-302",
                    Text: "Analisi SEO",
                    Description: "Report performance keywords",
                    Width: 2880, // 2 giorni
                    Offset: 14400, // 10 giorni dall'inizio
                    Classes: "analysis-task"
                }
            ]
        },
        {
            Id: "EMP004",
            Name: "Anna",
            Group: 4,   // Risorse Umane
            Position: "HR Specialist",
            Department: "HR",
            Items: [
                {
                    Id: "TASK-401",
                    Text: "Onboarding",
                    Description: "Inserimento 2 nuovi assunti",
                    Width: 4320, // 3 giorni
                    Offset: 10080, // 7 giorni dall'inizio
                    Classes: "hr-task",
                    Color1: '#8E2DE2' // Colore specifico solo per questo task
                }
            ]
        },
        {
            Id: "EMP005",
            Name: "Marc",
            Group: 1,   // Sviluppo Software
            Position: "Junior Developer",
            Department: "IT",
            Items: [
                {
                    Id: "TASK-501",
                    Text: "Testing",
                    Description: "Esecuzione test unitari",
                    Width: 2880, // 2 giorni
                    Offset: 15840, // 11 giorni dall'inizio
                    Classes: "test-task"
                }
            ]
        },
        {
            Id: "EMP006",
            Name: "Sofia",
            Group: 5,   // Vendite
            Position: "Account Manager",
            Department: "Sales",
            Items: [
                {
                    Id: "TASK-601",
                    Text: "Client Meeting",
                    Description: "Presentazione nuovo prodotto",
                    Width: 720, // 12 ore
                    Offset: 17280, // 12 giorni dall'inizio
                    Classes: "meeting-task"
                }
            ]
        }
    ],

    Calendar: {
        Exceptions: [
            {
                Date: "2023-05-01",
                Name: "Festa del Lavoro",
                Recurrent: true,
                Color: "#ff0000"
            },
            {
                Date: "2023-06-02",
                Name: "Festa della Repubblica",
                Recurrent: true,
                Color: "#ff0000"
            }
        ],
    },
    
    Events: [
        {
            Id: "HR-EVT-1",
            Description: "Training sicurezza",
            Offset: 21600, // 15 giorni
            Width: 1440, // 1 giorno
            Classes: "training-event",
            Color: "#4b6cb7"
        },
        {
            Id: "HR-EVT-2",
            Description: "Valutazioni performance",
            Offset: 23040, // 16 giorni
            Width: 2880, // 2 giorni
            Classes: "evaluation-event"
        }
    ],
    
    HrInfo: {
        Company: "TechSolutions S.p.A.",
        HRManager: "Dr. Elena Russo",
        Departments: ["IT", "Creative", "Commercial", "HR", "Sales"],
        TotalEmployees: 125,
        ActiveProjects: 18
    }
};