var hotelSchedulerData = {
    Resources: [
        // ==================== SUITE DELUXE ====================
        {
            Id: "DLX-101",
            Name: "Suite Deluxe 101 - Oceano",
            Group: 1,
            Data: {
                Beds: "1 King Bed",
                Amenities: ["Ocean View", "Jacuzzi", "Balcony"],
                Rate: 450
            },
            Items: [
                { Id: "BK101-1", Text: "Smith Family", Description: "2 adults + 1 child | All inclusive", Width: 4320, Offset: 0, Color1: "#3a7bd5", Classes: "booking", Completion: 100 },
                { Id: "BK101-2", Text: "Johnson M.", Description: "VIP | Honeymoon", Width: 2880, Offset: 5760, Color1: "#00d2ff", Classes: "booking vip" },
                { Id: "BK101-3", Text: "Williams", Description: "Business trip", Width: 1440, Offset: 10080, Color1: "#ff6b6b", Classes: "booking corporate" },
                { Id: "BK101-4", Text: "Brown", Description: "Family reunion", Width: 7200, Offset: 12960, Color1: "#feca57", Classes: "booking" },
                { Id: "BK101-5", Text: "Jones", Description: "Anniversary", Width: 2160, Offset: 21600, Color1: "#48dbfb", Classes: "booking" },
                { Id: "BK101-6", Text: "Garcia", Description: "2 adults", Width: 4320, Offset: 25200, Color1: "#1dd1a1", Classes: "booking" },
                { Id: "BK101-7", Text: "Miller", Description: "Late check-in", Width: 2880, Offset: 30240, Color1: "#ff9ff3", Classes: "booking" }
            ]
        },
        {
            Id: "DLX-102",
            Name: "Suite Deluxe 102 - Giardino",
            Group: 1,
            Data: {
                Beds: "2 Queen Beds",
                Amenities: ["Garden View", "Mini Bar"],
                Rate: 380
            },
            Items: [
                { Id: "BK102-1", Text: "Davis", Description: "2 adults + 2 kids", Width: 5760, Offset: 1440, Color1: "#f368e0", Classes: "booking" },
                { Id: "BK102-2", Text: "Rodriguez", Description: "Wedding guests", Width: 2160, Offset: 8640, Color1: "#3a7bd5", Classes: "booking event" },
                { Id: "BK102-3", Text: "Martinez", Description: "Business", Width: 2880, Offset: 11520, Color1: "#00d2ff", Classes: "booking corporate" },
                { Id: "BK102-4", Text: "Hernandez", Description: "Family", Width: 4320, Offset: 15840, Color1: "#ff6b6b", Classes: "booking" },
                { Id: "BK102-5", Text: "Lopez", Description: "Couple", Width: 2160, Offset: 21600, Color1: "#feca57", Classes: "booking" },
                { Id: "BK102-6", Text: "Gonzalez", Description: "Extended stay", Width: 10080, Offset: 24480, Color1: "#48dbfb", Classes: "booking" },
                { Id: "BK102-7", Text: "Wilson", Description: "Tourist", Width: 1440, Offset: 36000, Color1: "#1dd1a1", Classes: "booking" },
                { Id: "BK102-8", Text: "Anderson", Description: "Late booking", Width: 2880, Offset: 38880, Color1: "#ff9ff3", Classes: "booking" }
            ]
        },
        {
            Id: "DLX-103",
            Name: "Suite Deluxe 103 - Angolare",
            Group: 1,
            Data: {
                Beds: "1 King Bed + Sofa",
                Amenities: ["Panoramic View", "Jacuzzi"],
                Rate: 520
            },
            Items: [
                { Id: "BK103-1", Text: "Thomas", Description: "VIP | Corporate", Width: 4320, Offset: 720, Color1: "#00d2ff", Classes: "booking vip" },
                { Id: "BK103-2", Text: "Taylor", Description: "Family", Width: 5760, Offset: 6480, Color1: "#3a7bd5", Classes: "booking" },
                { Id: "BK103-3", Text: "Moore", Description: "Honeymoon", Width: 2880, Offset: 12960, Color1: "#ff6b6b", Classes: "booking vip" },
                { Id: "BK103-4", Text: "Jackson", Description: "Business", Width: 2160, Offset: 17280, Color1: "#feca57", Classes: "booking corporate" },
                { Id: "BK103-5", Text: "Martin", Description: "Tourists", Width: 5040, Offset: 20160, Color1: "#48dbfb", Classes: "booking" },
                { Id: "BK103-6", Text: "Lee", Description: "Conference", Width: 3600, Offset: 25920, Color1: "#1dd1a1", Classes: "booking event" }
            ]
        },

        // ==================== EXECUTIVE ====================
        {
            Id: "EXC-201",
            Name: "Executive 201",
            Group: 2,
            Data: {
                Beds: "1 King Bed",
                Amenities: ["City View", "Work Desk"],
                Rate: 300
            },
            Items: [
                { Id: "BK201-1", Text: "Perez", Description: "Business trip", Width: 2880, Offset: 2160, Color1: "#ff6b6b", Classes: "booking corporate" },
                { Id: "BK201-2", Text: "Thompson", Description: "Conference", Width: 4320, Offset: 6480, Color1: "#3a7bd5", Classes: "booking event" },
                { Id: "BK201-3", Text: "White", Description: "Solo traveler", Width: 1440, Offset: 12240, Color1: "#00d2ff", Classes: "booking" },
                { Id: "BK201-4", Text: "Harris", Description: "Couple", Width: 3600, Offset: 15120, Color1: "#feca57", Classes: "booking" },
                { Id: "BK201-5", Text: "Sanchez", Description: "Extended stay", Width: 8640, Offset: 20160, Color1: "#48dbfb", Classes: "booking" },
                { Id: "BK201-6", Text: "Clark", Description: "Business", Width: 2160, Offset: 30240, Color1: "#1dd1a1", Classes: "booking corporate" },
                { Id: "BK201-7", Text: "Ramirez", Description: "Tourist", Width: 2880, Offset: 33840, Color1: "#ff9ff3", Classes: "booking" },
                { Id: "BK201-8", Text: "Lewis", Description: "Last minute", Width: 1440, Offset: 38160, Color1: "#f368e0", Classes: "booking" }
            ]
        },
        {
            Id: "EXC-202",
            Name: "Executive 202",
            Group: 2,
            Data: {
                Beds: "2 Queen Beds",
                Amenities: ["City View"],
                Rate: 280
            },
            Items: [
                { Id: "BK202-1", Text: "Robinson", Description: "Family", Width: 5040, Offset: 0, Color1: "#3a7bd5", Classes: "booking" },
                { Id: "BK202-2", Text: "Walker", Description: "Business partners", Width: 2160, Offset: 6480, Color1: "#00d2ff", Classes: "booking corporate" },
                { Id: "BK202-3", Text: "Young", Description: "Couple", Width: 2880, Offset: 10080, Color1: "#ff6b6b", Classes: "booking" },
                { Id: "BK202-4", Text: "Allen", Description: "Conference", Width: 3600, Offset: 14400, Color1: "#feca57", Classes: "booking event" },
                { Id: "BK202-5", Text: "King", Description: "Tourists", Width: 4320, Offset: 19440, Color1: "#48dbfb", Classes: "booking" },
                { Id: "BK202-6", Text: "Wright", Description: "Extended", Width: 7200, Offset: 25200, Color1: "#1dd1a1", Classes: "booking" },
                { Id: "BK202-7", Text: "Scott", Description: "Solo", Width: 1440, Offset: 33840, Color1: "#ff9ff3", Classes: "booking" },
                { Id: "BK202-8", Text: "Torres", Description: "Business", Width: 2880, Offset: 36720, Color1: "#f368e0", Classes: "booking corporate" }
            ]
        },
        {
            Id: "EXC-203",
            Name: "Executive 203",
            Group: 2,
            Data: {
                Beds: "1 King Bed",
                Amenities: ["Partial Ocean View"],
                Rate: 320
            },
            Items: [
                { Id: "BK203-1", Text: "Nguyen", Description: "Honeymoon", Width: 4320, Offset: 1440, Color1: "#ff6b6b", Classes: "booking vip" },
                { Id: "BK203-2", Text: "Hill", Description: "Business", Width: 2160, Offset: 7200, Color1: "#3a7bd5", Classes: "booking corporate" },
                { Id: "BK203-3", Text: "Flores", Description: "Family", Width: 5760, Offset: 10800, Color1: "#00d2ff", Classes: "booking" },
                { Id: "BK203-4", Text: "Green", Description: "Conference", Width: 2880, Offset: 18000, Color1: "#feca57", Classes: "booking event" },
                { Id: "BK203-5", Text: "Adams", Description: "Couple", Width: 2160, Offset: 22320, Color1: "#48dbfb", Classes: "booking" },
                { Id: "BK203-6", Text: "Nelson", Description: "Extended", Width: 6480, Offset: 25920, Color1: "#1dd1a1", Classes: "booking" },
                { Id: "BK203-7", Text: "Baker", Description: "Tourist", Width: 2880, Offset: 33840, Color1: "#ff9ff3", Classes: "booking" }
            ]
        },

        // ==================== STANDARD ====================
        {
            Id: "STD-301",
            Name: "Standard 301",
            Group: 3,
            Data: {
                Beds: "1 Queen Bed",
                Amenities: ["Garden View"],
                Rate: 180
            },
            Items: [
                { Id: "BK301-1", Text: "Hall", Description: "Solo traveler", Width: 2160, Offset: 2880, Color1: "#3a7bd5", Classes: "booking" },
                { Id: "BK301-2", Text: "Rivera", Description: "Couple", Width: 2880, Offset: 6480, Color1: "#00d2ff", Classes: "booking" },
                { Id: "BK301-3", Text: "Campbell", Description: "Business", Width: 1440, Offset: 10800, Color1: "#ff6b6b", Classes: "booking corporate" },
                { Id: "BK301-4", Text: "Mitchell", Description: "Family", Width: 5040, Offset: 13680, Color1: "#feca57", Classes: "booking" },
                { Id: "BK301-5", Text: "Carter", Description: "Tourists", Width: 3600, Offset: 20160, Color1: "#48dbfb", Classes: "booking" },
                { Id: "BK301-6", Text: "Roberts", Description: "Extended", Width: 5760, Offset: 25200, Color1: "#1dd1a1", Classes: "booking" },
                { Id: "BK301-7", Text: "Gomez", Description: "Last minute", Width: 1440, Offset: 32400, Color1: "#ff9ff3", Classes: "booking" },
                { Id: "BK301-8", Text: "Phillips", Description: "Solo", Width: 2160, Offset: 35280, Color1: "#f368e0", Classes: "booking" },
                { Id: "BK301-9", Text: "Evans", Description: "Couple", Width: 2880, Offset: 38880, Color1: "#3a7bd5", Classes: "booking" }
            ]
        },
        {
            Id: "STD-302",
            Name: "Standard 302",
            Group: 3,
            Data: {
                Beds: "2 Twin Beds",
                Amenities: ["City View"],
                Rate: 160
            },
            Items: [
                { Id: "BK302-1", Text: "Turner", Description: "Friends", Width: 2160, Offset: 720, Color1: "#00d2ff", Classes: "booking" },
                { Id: "BK302-2", Text: "Diaz", Description: "Business", Width: 2880, Offset: 4320, Color1: "#ff6b6b", Classes: "booking corporate" },
                { Id: "BK302-3", Text: "Parker", Description: "Tourists", Width: 3600, Offset: 8640, Color1: "#feca57", Classes: "booking" },
                { Id: "BK302-4", Text: "Cruz", Description: "Family", Width: 5040, Offset: 13680, Color1: "#48dbfb", Classes: "booking" },
                { Id: "BK302-5", Text: "Edwards", Description: "Solo", Width: 1440, Offset: 20160, Color1: "#1dd1a1", Classes: "booking" },
                { Id: "BK302-6", Text: "Collins", Description: "Extended", Width: 6480, Offset: 23040, Color1: "#ff9ff3", Classes: "booking" },
                { Id: "BK302-7", Text: "Reyes", Description: "Couple", Width: 2880, Offset: 30960, Color1: "#f368e0", Classes: "booking" },
                { Id: "BK302-8", Text: "Morris", Description: "Business", Width: 2160, Offset: 35280, Color1: "#3a7bd5", Classes: "booking corporate" }
            ]
        },
        {
            Id: "STD-303",
            Name: "Standard 303",
            Group: 3,
            Data: {
                Beds: "1 Queen Bed",
                Amenities: ["Courtyard View"],
                Rate: 170
            },
            Items: [
                { Id: "BK303-1", Text: "Stewart", Description: "Solo", Width: 2160, Offset: 1440, Color1: "#ff6b6b", Classes: "booking" },
                { Id: "BK303-2", Text: "Morales", Description: "Couple", Width: 2880, Offset: 5040, Color1: "#00d2ff", Classes: "booking" },
                { Id: "BK303-3", Text: "Murphy", Description: "Business", Width: 3600, Offset: 9360, Color1: "#feca57", Classes: "booking corporate" },
                { Id: "BK303-4", Text: "Rivera", Description: "Family", Width: 4320, Offset: 14400, Color1: "#48dbfb", Classes: "booking" },
                { Id: "BK303-5", Text: "Cook", Description: "Tourists", Width: 2880, Offset: 20160, Color1: "#1dd1a1", Classes: "booking" },
                { Id: "BK303-6", Text: "Rogers", Description: "Extended", Width: 5760, Offset: 24480, Color1: "#ff9ff3", Classes: "booking" },
                { Id: "BK303-7", Text: "Morgan", Description: "Last minute", Width: 1440, Offset: 31680, Color1: "#f368e0", Classes: "booking" },
                { Id: "BK303-8", Text: "Peterson", Description: "Couple", Width: 2160, Offset: 34560, Color1: "#3a7bd5", Classes: "booking" }
            ]
        },

        // ==================== PRESIDENTIAL ====================
        {
            Id: "PRS-401",
            Name: "Presidential Suite 401",
            Group: 4,
            Data: {
                Beds: "1 King Bed + 2 Queen Beds",
                Amenities: ["Private Pool", "Butler Service", "Terrace", "Ocean Front"],
                Rate: 1200
            },
            Items: [
                { Id: "BK401-1", Text: "Celebrity Guest", Description: "Strict privacy required", Width: 4320, Offset: 2880, Color1: "#8E2DE2", Classes: "booking vip", Data: { Privacy: true } },
                { Id: "BK401-2", Text: "Corporate CEO", Description: "Business retreat", Width: 3600, Offset: 8640, Color1: "#4A00E0", Classes: "booking vip corporate" },
                { Id: "BK401-3", Text: "Wedding Party", Description: "Bridal suite", Width: 2880, Offset: 14400, Color1: "#e52e71", Classes: "booking event" }
            ]
        },
        {
            Id: "PRS-402",
            Name: "Presidential Suite 402",
            Group: 4,
            Data: {
                Beds: "2 King Beds",
                Amenities: ["Private Terrace", "Jacuzzi", "Sauna"],
                Rate: 1100
            },
            Items: [
                { Id: "BK402-1", Text: "Royal Family", Description: "VIP treatment", Width: 7200, Offset: 0, Color1: "#ff758c", Classes: "booking vip" },
                { Id: "BK402-2", Text: "Tech Exec", Description: "Conference", Width: 4320, Offset: 10080, Color1: "#f7b733", Classes: "booking corporate" },
                { Id: "BK402-3", Text: "Anniversary", Description: "Special occasion", Width: 2160, Offset: 15840, Color1: "#fc4a1a", Classes: "booking vip" }
            ]
        },

        // ==================== SUITE FAMILIARE ====================
        {
            Id: "FAM-501",
            Name: "Family Suite 501",
            Group: 5,
            Data: {
                Beds: "2 Queen Beds + Bunk Beds",
                Amenities: ["Connecting Rooms", "Kitchenette"],
                Rate: 650
            },
            Items: [
                { Id: "BK501-1", Text: "The Johnsons", Description: "2 adults + 3 kids", Width: 7200, Offset: 1440, Color1: "#3a7bd5", Classes: "booking" },
                { Id: "BK501-2", Text: "The Smiths", Description: "Family reunion", Width: 5760, Offset: 10080, Color1: "#00d2ff", Classes: "booking" },
                { Id: "BK501-3", Text: "The Garcias", Description: "2 families", Width: 8640, Offset: 17280, Color1: "#ff6b6b", Classes: "booking" },
                { Id: "BK501-4", Text: "The Millers", Description: "Vacation", Width: 4320, Offset: 27360, Color1: "#feca57", Classes: "booking" },
                { Id: "BK501-5", Text: "The Browns", Description: "Extended family", Width: 5040, Offset: 33120, Color1: "#48dbfb", Classes: "booking" }
            ]
        },
        {
            Id: "FAM-502",
            Name: "Family Suite 502",
            Group: 5,
            Data: {
                Beds: "3 Queen Beds",
                Amenities: ["Play Area", "Kitchenette"],
                Rate: 600
            },
            Items: [
                { Id: "BK502-1", Text: "The Williamses", Description: "Multi-gen", Width: 6480, Offset: 2880, Color1: "#1dd1a1", Classes: "booking" },
                { Id: "BK502-2", Text: "The Joneses", Description: "2 adults + 2 kids", Width: 4320, Offset: 10800, Color1: "#ff9ff3", Classes: "booking" },
                { Id: "BK502-3", Text: "The Davises", Description: "Family vacation", Width: 5760, Offset: 16560, Color1: "#f368e0", Classes: "booking" },
                { Id: "BK502-4", Text: "The Rodriguezes", Description: "Holiday", Width: 5040, Offset: 23760, Color1: "#3a7bd5", Classes: "booking" },
                { Id: "BK502-5", Text: "The Martinezes", Description: "Summer trip", Width: 7200, Offset: 30240, Color1: "#00d2ff", Classes: "booking" }
            ]
        }
    ],

    // ==================== CALENDARIO FERIALE ====================
    Calendar: {
        Exceptions: [
            { Date: "2024-12-24", Name: "Christmas Eve", Recurrent: true, Color: "#ff0000", Type: "holiday" },
            { Date: "2024-12-25", Name: "Christmas Day", Recurrent: true, Color: "#ff0000", Type: "holiday" },
            { Date: "2024-12-31", Name: "New Year's Eve", Recurrent: true, Color: "#ff9900", Type: "holiday" },
            { Date: "2025-01-01", Name: "New Year's Day", Recurrent: true, Color: "#ff0000", Type: "holiday" },
            { Date: "2024-07-04", Name: "Independence Day", Recurrent: true, Color: "#0000ff", Type: "holiday" }
        ],
        Seasons: [
            { Name: "High Season", Start: "2024-12-15", End: "2025-01-15", Multiplier: 1.5 },
            { Name: "Low Season", Start: "2024-11-01", End: "2024-12-14", Multiplier: 0.8 }
        ]
    },

    // ==================== EVENTI DELL'HOTEL ====================
    Events: [
        {
            Id: "HOTEL-EVENT-1",
            Description: "Annual Maintenance - Pool closed",
            Offset: 43200, // 30 giorni
            Width: 2880,    // 2 giorni
            Color: "#ff9966",
            Opacity: 0.3,
            AffectedAreas: ["Pool", "Spa"]
        },
        {
            Id: "HOTEL-EVENT-2",
            Description: "International Tech Conference - Full occupancy expected",
            Offset: 57600, // 40 giorni
            Width: 4320,    // 3 giorni
            Color: "#cc99ff",
            Opacity: 0.2,
            AffectedAreas: ["Conference Center"]
        },
        {
            Id: "HOTEL-EVENT-3",
            Description: "Restaurant Renovation - Breakfast in ballroom",
            Offset: 8640,   // 6 giorni
            Width: 10080,   // 7 giorni
            Color: "#99cc99",
            Opacity: 0.3,
            AffectedAreas: ["Main Restaurant"]
        },
        {
            Id: "HOTEL-EVENT-4",
            Description: "Wedding Expo",
            Offset: 25920,  // 18 giorni
            Width: 1440,    // 1 giorno
            Color: "#ff99cc",
            Opacity: 0.2
        }
    ],

    // ==================== STATISTICHE ====================
    Statistics: {
        OccupancyRate: 78.5,
        AverageStay: 3.2,
        TopMarkets: ["USA", "UK", "Germany", "Italy"],
        RevenueYTD: 2450000,
        ArrivalsToday: 23,
        DeparturesToday: 18
    },

    // ==================== INFORMAZIONI HOTEL ====================
    HotelInfo: {
        Name: "Grand Horizon Resort & Spa",
        Location: "Miami Beach, FL 33139",
        TotalRooms: 12, // Mostrate nel planner
        TotalRoomsActual: 250, // Totali reali
        Rating: 5,
        Amenities: [
            "Infinity Pool",
            "World-class Spa",
            "3 Gourmet Restaurants",
            "Rooftop Bar",
            "Private Beach Access",
            "24/7 Concierge",
            "Fitness Center",
            "Tennis Courts"
        ],
        Contact: {
            Phone: "+1 (305) 555-1234",
            Email: "reservations@grandhorizon.com",
            Website: "www.grandhorizon.com"
        },
        Management: {
            GeneralManager: "Robert Anderson",
            FrontOfficeManager: "Maria Garcia",
            RevenueManager: "David Chen"
        }
    },

    // ==================== NOTE ====================
    Notes: [
        { Date: "2024-12-01", Text: "Christmas decoration setup", Color: "#00ff00" },
        { Date: "2024-12-15", Text: "Staff holiday party", Color: "#ff00ff" },
        { Date: "2025-01-05", Text: "Inventory count - limited housekeeping", Color: "#ffff00" }
    ]
};