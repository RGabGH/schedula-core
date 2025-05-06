var hotelSchedulerData = {
    Resources: [
        {
            Id: "101",
            Name: "Room 101 - Deluxe Suite",
            Group: 1,   // Group 1: Deluxe Rooms
            Image: "images/deluxe-room.jpg",
            Data: {
                Beds: "1 King Bed",
                Capacity: 2,
                Amenities: "Ocean View, Jacuzzi, Mini Bar",
                Rate: "$350/night"
            },
            Icons: ["wifi", "hot-tub", "wine-glass"],
            Items: [
                {
                    Id: "booking1011",
                    Text: "Smith Family",
                    Description: "Check-in: 14:00, Check-out: 11:00\nSpecial requests: Extra towels, late checkout",
                    Width: 14400, // 10 days
                    Offset: 0,
                    Color1: '#3a7bd5',
                    Classes: "booking",
                    Data: {
                        GuestId: "GUEST12345",
                        Status: "Confirmed",
                        Payment: "Credit Card",
                        Total: "$3,500"
                    },
                    Icons: [{Name: "user"}, {Name: "credit-card"}]
                },
                {
                    Id: "booking1012",
                    Text: "Johnson",
                    Description: "Business stay - VIP guest",
                    Width: 7200, // 5 days
                    Offset: 21600, // 15 days from start
                    Color1: '#00d2ff',
                    Classes: "booking vip",
                    Link: "GUEST98765"
                }
            ]
        },
        {
            Id: "102",
            Name: "Room 102 - Deluxe Suite",
            Group: 1,
            Image: "images/deluxe-room.jpg",
            Data: {
                Beds: "2 Queen Beds",
                Capacity: 4,
                Amenities: "Ocean View, Balcony",
                Rate: "$320/night"
            },
            Icons: ["wifi", "smoking", "swimming-pool"],
            Items: [
                {
                    Id: "booking1021",
                    Text: "Wedding Party",
                    Description: "Bridal suite - Do Not Disturb",
                    Width: 2880, // 2 days
                    Offset: 7200, // 5 days from start
                    Color1: '#ff7e5f',
                    Classes: "booking event",
                    ViewInfo: true
                }
            ]
        },
        {
            Id: "201",
            Name: "Room 201 - Executive",
            Group: 2,   // Group 2: Executive Rooms
            Data: {
                Beds: "1 King Bed",
                Capacity: 2,
                Amenities: "City View, Work Desk",
                Rate: "$250/night"
            },
            Icons: ["wifi", "coffee", "business-time"],
            Items: [
                {
                    Id: "booking2011",
                    Text: "Tech Conference",
                    Description: "Corporate block booking - 5 rooms",
                    Width: 4320, // 3 days
                    Offset: 14400, // 10 days from start
                    Color1: '#a8ff78',
                    Classes: "booking corporate"
                }
            ]
        },
        {
            Id: "202",
            Name: "Room 202 - Executive",
            Group: 2,
            Data: {
                Beds: "2 Twin Beds",
                Capacity: 2,
                Amenities: "City View",
                Rate: "$230/night"
            },
            Icons: ["wifi", "no-smoking"],
            Items: []
        },
        {
            Id: "301",
            Name: "Room 301 - Standard",
            Group: 3,   // Group 3: Standard Rooms
            Data: {
                Beds: "1 Queen Bed",
                Capacity: 2,
                Amenities: "Garden View",
                Rate: "$180/night"
            },
            Icons: ["wifi"],
            Items: [
                {
                    Id: "booking3011",
                    Text: "Maintenance",
                    Description: "Room under renovation - not available",
                    Width: 28800, // 20 days
                    Offset: 0,
                    Color1: '#ff416c',
                    Classes: "maintenance",
                    Completion: 35
                }
            ]
        },
        {
            Id: "302",
            Name: "Room 302 - Standard",
            Group: 3,
            Data: {
                Beds: "2 Twin Beds",
                Capacity: 2,
                Amenities: "Garden View",
                Rate: "$160/night"
            },
            Icons: ["wifi", "accessible"],
            Items: [
                {
                    Id: "booking3021",
                    Text: "Walker",
                    Description: "Accessible room requested",
                    Width: 1440, // 1 day
                    Offset: 2880, // 2 days from start
                    Color1: '#f9d423',
                    Classes: "booking"
                }
            ]
        },
        {
            Id: "401",
            Name: "Presidential Suite",
            Group: 4,   // Group 4: Luxury Suites
            Image: "images/presidential-suite.jpg",
            Data: {
                Beds: "1 King Bed + 1 Queen Bed",
                Capacity: 4,
                Amenities: "Private Pool, Butler Service, Panoramic Views",
                Rate: "$1,200/night"
            },
            Icons: ["crown", "concierge-bell", "champagne-glasses"],
            Items: [
                {
                    Id: "booking4011",
                    Text: "Celebrity Guest",
                    Description: "High-profile - Strict privacy required",
                    Width: 7200, // 5 days
                    Offset: 14400, // 10 days from start
                    Color1: '#8E2DE2',
                    Classes: "booking vip",
                    ViewInfo: true
                }
            ]
        },
        {
            Id: "501",
            Name: "Conference Room A",
            Group: 5,   // Group 5: Event Spaces
            Data: {
                Capacity: 50,
                Amenities: "Projector, Sound System, Catering Available",
                Rate: "$500/day"
            },
            Icons: ["chalkboard", "microphone", "utensils"],
            Items: [
                {
                    Id: "event5011",
                    Text: "Tech Symposium",
                    Description: "Day 1: Keynotes and Panels\nCatering: Lunch for 45",
                    Width: 1440, // 1 day
                    Offset: 7200, // 5 days from start
                    Color1: '#4b6cb7',
                    Classes: "event"
                },
                {
                    Id: "event5012",
                    Text: "Wedding Reception",
                    Description: "Evening event - 6pm to midnight",
                    Width: 720, // 12 hours
                    Offset: 14400, // 10 days from start
                    Color1: '#f857a6',
                    Classes: "event"
                }
            ]
        },
        {
            Id: "502",
            Name: "Poolside Cabana",
            Group: 5,
            Data: {
                Capacity: 8,
                Amenities: "Private Bar, Lounge Area",
                Rate: "$300/day"
            },
            Icons: ["umbrella-beach", "cocktail"],
            Items: [
                {
                    Id: "event5021",
                    Text: "Birthday Party",
                    Description: "Private celebration - decorations needed",
                    Width: 720, // 12 hours
                    Offset: 21600, // 15 days from start
                    Color1: '#f46b45',
                    Classes: "event"
                }
            ]
        }
    ],

    Calendar: {
        Exceptions: [
            {
                Date: "2023-12-25",
                Name: "Christmas Day",
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
                Color: "#ff0000"
            },
            {
                Date: "2023-11-23",
                Name: "Thanksgiving",
                Recurrent: true,
                Color: "#ff9900"
            }
        ],
    },
    
    Events: [
        {
            Id: "hotelEvent1",
            Description: "Annual Maintenance - Reduced Staff",
            Offset: 21600, // 15 days from start
            Width: 2880, // 2 days
            Color: "#ff9966",
            Opacity: 0.3,
            Classes: "hotel-event"
        },
        {
            Id: "hotelEvent2",
            Description: "Music Festival in Town - High Occupancy Expected",
            Offset: 14400, // 10 days from start
            Width: 4320, // 3 days
            Color: "#cc99ff",
            Opacity: 0.3,
            Classes: "hotel-event"
        },
        {
            Id: "hotelEvent3",
            Description: "Seasonal Rate Increase",
            Offset: 0,
            Width: 7200, // 5 days
            Color: "#99cc00",
            Opacity: 0.2,
            Classes: "rate-change"
        }
    ],
    
    // Additional hotel-specific data
    HotelInfo: {
        Name: "Grand Horizon Resort",
        Location: "Miami Beach, FL",
        TotalRooms: 120,
        Contact: {
            Phone: "+1 (305) 555-1234",
            Email: "reservations@grandhorizon.com"
        },
        Amenities: [
            "Spa",
            "3 Restaurants",
            "Infinity Pool",
            "24/7 Room Service",
            "Fitness Center"
        ]
    }
};