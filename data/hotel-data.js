var hotelData = {
    Resources: [
        // ===================== SUITE DELUXE (15 stanze) =====================
        {
            Id: "DLX-101",
            Name: "Deluxe Suite 101",
            Group: 1,
            Image: "images/deluxe1.jpg",
            Data: {
                Beds: "1 King Bed",
                Amenities: ["Ocean View", "Jacuzzi", "Mini Bar"],
                Rate: 450,
                Floor: "1"
            },
            Items: [
                {
                    Id: "BK101-1",
                    Text: "Smith Family",
                    Description: "2 adults + 1 child | Late checkout requested",
                    Width: 14400, // 10 giorni
                    Offset: 0,
                    Color1: "#3a7bd5",
                    Classes: "booking confirmed",
                    Data: {
                        GuestId: "GUEST-4587",
                        Payment: "Credit Card",
                        SpecialRequests: "Extra towels, baby crib"
                    }
                },
                {
                    Id: "BK101-2",
                    Text: "Johnson M.",
                    Description: "VIP guest | Honeymoon package",
                    Width: 7200, // 5 giorni
                    Offset: 21600, // 15 giorni dopo
                    Color1: "#00d2ff",
                    Classes: "booking vip"
                }
            ]
        },
        {
            Id: "DLX-102",
            Name: "Deluxe Suite 102",
            Group: 1,
            Image: "images/deluxe2.jpg",
            Data: {
                Beds: "2 Queen Beds",
                Amenities: ["Ocean View", "Balcony"],
                Rate: 400,
                Floor: "1"
            },
            Items: [
                {
                    Id: "BK102-1",
                    Text: "Wedding Party",
                    Description: "Bridal suite | Do Not Disturb",
                    Width: 2880, // 2 giorni
                    Offset: 7200,
                    Color1: "#ff7e5f",
                    Classes: "booking event"
                },
                {
                    Id: "BK102-2",
                    Text: "TechCorp",
                    Description: "Executive meeting",
                    Width: 1440, // 1 giorno
                    Offset: 14400,
                    Color1: "#a8ff78",
                    Classes: "booking corporate"
                }
            ]
        },
        // ... (DLX-103 a DLX-115 con 2-3 prenotazioni ciascuna) ...
        {
            Id: "DLX-115",
            Name: "Deluxe Suite 115",
            Group: 1,
            Image: "images/deluxe3.jpg",
            Data: {
                Beds: "1 King Bed",
                Amenities: ["Ocean View", "Jacuzzi", "Mini Bar", "Terrace"],
                Rate: 500,
                Floor: "1"
            },
            Items: [
                {
                    Id: "BK115-1",
                    Text: "Celebrity Guest",
                    Description: "Private security required",
                    Width: 8640, // 6 giorni
                    Offset: 28800,
                    Color1: "#8E2DE2",
                    Classes: "booking vip",
                    ViewInfo: true
                }
            ]
        },

        // ===================== EXECUTIVE (20 stanze) =====================
        {
            Id: "EXC-201",
            Name: "Executive 201",
            Group: 2,
            Data: {
                Beds: "1 King Bed",
                Amenities: ["City View", "Work Desk"],
                Rate: 300,
                Floor: "2"
            },
            Items: [
                {
                    Id: "BK201-1",
                    Text: "Business Summit",
                    Description: "3 rooms blocked",
                    Width: 4320, // 3 giorni
                    Offset: 14400,
                    Color1: "#a8ff78",
                    Classes: "booking corporate"
                }
            ]
        },
        // ... (EXC-202 a EXC-220 con 1-2 prenotazioni ciascuna) ...
        {
            Id: "EXC-220",
            Name: "Executive 220",
            Group: 2,
            Data: {
                Beds: "2 Twin Beds",
                Amenities: ["City View"],
                Rate: 280,
                Floor: "2"
            },
            Items: [
                {
                    Id: "BK220-1",
                    Text: "Airline Crew",
                    Description: "Layover stay",
                    Width: 1440, // 1 giorno
                    Offset: 36000,
                    Color1: "#f9d423",
                    Classes: "booking crew"
                }
            ]
        },

        // ===================== STANDARD (10 stanze) =====================
        {
            Id: "STD-301",
            Name: "Standard 301",
            Group: 3,
            Data: {
                Beds: "1 Queen Bed",
                Amenities: ["Garden View"],
                Rate: 200,
                Floor: "3"
            },
            Items: [
                {
                    Id: "BK301-1",
                    Text: "Maintenance",
                    Description: "Carpet replacement",
                    Width: 28800, // 20 giorni
                    Offset: 0,
                    Color1: "#ff416c",
                    Classes: "maintenance",
                    Completion: 35
                }
            ]
        },
        // ... (STD-302 a STD-310 con 1-3 prenotazioni ciascuna) ...

        // ===================== PRESIDENTIAL (5 suite) =====================
        {
            Id: "PRS-401",
            Name: "Presidential Suite",
            Group: 4,
            Image: "images/presidential1.jpg",
            Data: {
                Beds: "1 King + 2 Queens",
                Amenities: ["Private Pool", "Butler", "Terrace", "Cinema"],
                Rate: 1200,
                Floor: "4"
            },
            Items: [
                {
                    Id: "BK401-1",
                    Text: "Diplomatic Guest",
                    Description: "State visit security",
                    Width: 7200, // 5 giorni
                    Offset: 14400,
                    Color1: "#8E2DE2",
                    Classes: "booking vip",
                    ViewInfo: true
                }
            ]
        }
        // ... (PRS-402 a PRS-405 con 1 prenotazione ciascuna) ...
    ],

    Calendar: {
        Exceptions: [
            {
                Date: "2023-12-25",
                Name: "Christmas Closure",
                Recurrent: true,
                Color: "#ff0000"
            },
            {
                Date: "2024-01-01",
                Name: "New Year's Day",
                Recurrent: true,
                Color: "#ff0000"
            },
            {
                Date: "2023-07-04",
                Name: "Independence Day",
                Recurrent: true,
                Color: "#ff9900"
            }
        ]
    },

    Events: [
        {
            Id: "HOTEL-EVENT-1",
            Description: "Annual Maintenance (Reduced Staff)",
            Offset: 21600, // 15 giorni
            Width: 2880, // 2 giorni
            Color: "#ff9966",
            Opacity: 0.3,
            Classes: "hotel-event"
        },
        {
            Id: "HOTEL-EVENT-2",
            Description: "International Film Festival",
            Offset: 14400, // 10 giorni
            Width: 4320, // 3 giorni
            Color: "#cc99ff",
            Opacity: 0.3,
            Classes: "hotel-event"
        },
        {
            Id: "HOTEL-EVENT-3",
            Description: "Seasonal Rate Adjustment",
            Offset: 0,
            Width: 7200, // 5 giorni
            Color: "#99cc00",
            Opacity: 0.2,
            Classes: "rate-change"
        }
    ],

    HotelInfo: {
        Name: "Grand Horizon Resort & Spa",
        Location: "Miami Beach, FL",
        Stars: 5,
        TotalRooms: 50,
        Amenities: [
            "Infinity Pool",
            "Luxury Spa",
            "3 Gourmet Restaurants",
            "24/7 Room Service",
            "Fitness Center",
            "Private Beach"
        ],
        Contact: {
            Phone: "+1 (305) 555-1234",
            Email: "reservations@grandhorizon.com",
            Website: "www.grandhorizon.com"
        },
        OperationalHours: {
            CheckIn: "15:00",
            CheckOut: "11:00",
            Reception: "24/7"
        }
    }
};