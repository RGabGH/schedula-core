var hotelData = {
    Resources: [      
        {
            Id: "DLX-101",
            Name: "101 - Deluxe Ocean View ",
            Group: 1,
            Data: { Beds: "1 King", Amenities: ["Ocean View", "Jacuzzi"], Rate: 450, Floor: 1 },
            Items: [
                { Id: "BK1011", Text: "Smith", Description: "Honeymoon", Width: 8640, Offset: 0, Color1: "#3a7bd5" , Color2: "red"},
                { Id: "BK1012", Text: "Johnson", Description: "Anniversary", Width: 4320, Offset: 14400, Effort:4320, Color1: "#00d2ff" }
            ]
        },
        {
            Id: "DLX-102",
            Name: "102 - Deluxe Ocean View ",
            Group: 1,
            Image: "img/deluxe2.jpg",
            Data: { Beds: "2 Queens", Amenities: ["Ocean View", "Balcony"], Rate: 420, Floor: 1 },
            Items: [
                { Id: "BK1021", Text: "Williams", Description: "Family vacation", Width: 10080, Offset: 2880, Color1: "#ff7e5f" }
            ]
        },
    

        // Suite 106-115 (Piano 2)
        {
            Id: "DLX-106",
            Name: "106 - Deluxe Premium ",
            Group: 1,
            Image: "img/deluxe3.jpg",
            Data: { Beds: "1 King", Amenities: ["Ocean View", "Jacuzzi", "Terrace"], Rate: 500, Floor: 2 },
            Items: [
                { Id: "BK1061", Text: "Brown", Description: "Business retreat", Width: 5760, Offset: 7200, Color1: "#a8ff78" },
                { Id: "BK1062", Text: "Davis", Description: "Wedding party", Width: 2880, Offset: 18000, Color1: "#ff416c" }
            ]
        },
        // ... (DLX-107 a DLX-115 con 2 prenotazioni ciascuna) ...

        // ===================== EXECUTIVE (20 stanze) =====================
        // Executive 201-210 (Piano 2)
        {
            Id: "EXC-201",
            Name: "201 - Executive City View ",
            Group: 2,
            Data: { Beds: "1 King", Amenities: ["Work Desk", "Lounge Access"], Rate: 320, Floor: 2 },
            Items: [
                { Id: "BK2011", Text: "Miller", Description: "Corporate meeting", Width: 2880, Offset: 4320, Color1: "#4ECDC4" }
            ]
        },
        {
            Id: "EXC-202",
            Name: "202 - Executive City View ",
            Group: 2,
            Data: { Beds: "2 Twins", Amenities: ["Work Desk"], Rate: 300, Floor: 2 },
            Items: [
                { Id: "BK2021", Text: "Wilson", Description: "Conference attendee", Width: 4320, Offset: 8640, Color1: "#FFD166" },
                { Id: "BK2022", Text: "Taylor", Description: "Extended stay", Width: 14400, Offset: 14400, Color1: "#06D6A0" }
            ]
        },
        // ... (EXC-203 a EXC-210 con 1-2 prenotazioni ciascuna) ...

        // Executive 211-220 (Piano 3)
        {
            Id: "EXC-211",
            Name: "211 - Executive Corner ",
            Group: 2,
            Data: { Beds: "1 King", Amenities: ["Corner Room", "Extra Space"], Rate: 350, Floor: 3 },
            Items: [
                { Id: "BK2111", Text: "Anderson", Description: "Project team", Width: 7200, Offset: 21600, Color1: "#118AB2" }
            ]
        },
        // ... (EXC-212 a EXC-220 con 1-3 prenotazioni ciascuna) ...

        // ===================== STANDARD (10 stanze) =====================
        // Standard 301-310 (Piano 3)
        {
            Id: "STD-301",
            Name: "301 - Standard Garden View ",
            Group: 3,
            Data: { Beds: "1 Queen", Amenities: [], Rate: 220, Floor: 3 },
            Items: [
                { Id: "BK3011", Text: "Maintenance", Description: "Painting", Width: 14400, Offset: 0, Color1: "#EF476F", Classes: "maintenance" }
            ]
        },
        {
            Id: "STD-302",
            Name: "302 - Standard Garden View ",
            Group: 3,
            Data: { Beds: "2 Twins", Amenities: [], Rate: 200, Floor: 3 },
            Items: [
                { Id: "BK3021", Text: "Thomas", Description: "Budget travel", Width: 2880, Offset: 18000, Color1: "#FFD166" },
                { Id: "BK3022", Text: "Jackson", Description: "Weekend stay", Width: 1440, Offset: 23040, Color1: "#06D6A0" }
            ]
        },
        // ... (STD-303 a STD-310 con 1-2 prenotazioni ciascuna) ...

        // ===================== PRESIDENTIAL (5 suite) =====================
        // Presidential 401-405 (Piano 4)
        {
            Id: "PRE-401",
            Name: "401 - Presidential Suite ",
            Group: 4,
            Image: "img/pres1.jpg",
            Data: { Beds: "1 King + 2 Queens", Amenities: ["Private Pool", "Butler"], Rate: 1200, Floor: 4 },
            Items: [
                { Id: "BK4011", Text: "Roberts", Description: "Celebrity VIP", Width: 8640, Offset: 7200, Color1: "#8E2DE2", Classes: "arrow" },
                { Id: "BK4012", Text: "Diplomatic", Description: "Government guest", Width: 4320, Offset: 21600, Color1: "#4B0082", Classes: "vip" }
            ]
        },
        // ... (PRE-402 a PRE-405 con 1-2 prenotazioni VIP ciascuna) ...
    ],
    Calendar: {
    
        Id: 1,
        Name: "Macchine Utensili",
        Description: null,
        Reference: 960,
        Step: 15,
        Denom: 60000,
        Items: [
            {
                Id: 4,
                CalendarId: 1,
                Name: "Sabati",
                Description: null,
                RuleType: 1,
                ItemType: "exception",
                Day: 6,
                Capacity: 0,
                ResourceId: null,
                Reference: null,
                Classes: null,
                Color: null,
                TicksFrom: 28401060,
                TicksTo: 29453699,
                Duration: null,
                OrderIndex: 0,
                DateFrom: "2024-01-01T00:00:00",
                DateTo: "2025-12-31T23:59:59"
            },
            {
                Id: 4,
                CalendarId: 1,
                Name: "Domeniche",
                Description: null,
                RuleType: 1,
                ItemType: "exception",
                Day: 0,
                Capacity: 0,
                ResourceId: null,
                Reference: null,
                Classes: null,
                Color: null,
                TicksFrom: 28401060,
                TicksTo: 29453699,
                Duration: null,
                OrderIndex: 0,
                DateFrom: "2024-01-01T00:00:00",
                DateTo: "2025-12-31T23:59:59"
            },
           
        ],
       
    
  
    },

   

   
};



var hotelData = {
    Resources: [      
        {
            Id: "DLX-101",
            Name: "101 - Deluxe Ocean View ",
            Group: 1,
            Data: { Beds: "1 King", Amenities: ["Ocean View", "Jacuzzi"], Rate: 450, Floor: 1 },
            Items: [
                { Id: "BK1011", Text: "Smith", Description: "Honeymoon", Width: 8640, Offset: 0, Color1: "#3a7bd5" , Color2: "red"},
                { Id: "BK1012", Text: "Johnson", Description: "Anniversary", Width: 4320, Offset: 14400, Effort:4320, Color1: "#00d2ff" }
            ]
        },
        {
            Id: "DLX-102",
            Name: "102 - Deluxe Ocean View ",
            Group: 1,
            Data: { Beds: "2 Queens", Amenities: ["Ocean View", "Balcony"], Rate: 420, Floor: 1 },
            Items: [



                { 
                  Id: "TASK-id", //task id
                  Text: "Task name", //main text
                  Description: "", //small text description
                  Width: 1440, //minutes
                  Offset: 2880, //minutes
                  Color1: "#00d2ff", // only to customize task color
                  Icons:[{Name:"user"},{Name:"book"}], // icons
                  Completion: 40, // progressbar
                  Classes: "myclass" //custom classes to customize task style
                }

                
            ]
        },
    ]};