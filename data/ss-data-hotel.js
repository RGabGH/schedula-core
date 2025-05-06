var hotelSchedulerData = {
  Resources: [
      // SEZIONE SUITE DELUXE (15 stanze)
      {
          Id: "DLX-101",
          Name: "Suite Deluxe 101",
          Group: 1,
          Image: "images/suite1.jpg",
          Data: {
              Beds: "1 King Bed",
              Amenities: ["Ocean View", "Jacuzzi", "Mini Bar"],
              Rate: 450
          },
          Items: [
              {
                  Id: "BK101-1",
                  Text: "Smith Family",
                  Description: "2 adults + 1 child | Late checkout",
                  Width: 14400, // 10 giorni
                  Offset: 0,
                  Color1: "#3a7bd5",
                  Classes: "booking confirmed",
                  Data: {
                      GuestId: "GUEST-4587",
                      Payment: "Credit Card",
                      SpecialRequests: "Extra towels"
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
          Name: "Suite Deluxe 102",
          Group: 1,
          Image: "images/suite2.jpg",
          Data: {
              Beds: "2 Queen Beds",
              Amenities: ["Ocean View", "Balcony", "Mini Bar"],
              Rate: 400
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
              }
          ]
      },
      // ... Altre 13 suite deluxe (DLX-103 a DLX-115) ...

      // SEZIONE EXECUTIVE (20 stanze)
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
              {
                  Id: "BK201-1",
                  Text: "TechCorp Inc.",
                  Description: "Executive retreat (3 rooms)",
                  Width: 4320, // 3 giorni
                  Offset: 14400,
                  Color1: "#a8ff78",
                  Classes: "booking corporate"
              }
          ]
      },
      // ... Altre 19 executive rooms (EXC-202 a EXC-220) ...

      // SEZIONE STANDARD (10 stanze)
      {
          Id: "STD-301",
          Name: "Standard 301",
          Group: 3,
          Data: {
              Beds: "1 Queen Bed",
              Amenities: ["Garden View"],
              Rate: 200
          },
          Items: [
              {
                  Id: "BK301-1",
                  Text: "Maintenance",
                  Description: "Room refurbishment",
                  Width: 28800, // 20 giorni
                  Offset: 0,
                  Color1: "#ff416c",
                  Classes: "maintenance",
                  Completion: 35
              }
          ]
      },
      // ... Altre 9 standard rooms (STD-302 a STD-310) ...

      // SEZIONE PRESIDENTIAL (5 suite)
      {
          Id: "PRS-401",
          Name: "Presidential Suite",
          Group: 4,
          Image: "images/presidential.jpg",
          Data: {
              Beds: "1 King Bed + 2 Queen Beds",
              Amenities: ["Private Pool", "Butler Service", "Terrace"],
              Rate: 1200
          },
          Items: [
              {
                  Id: "BK401-1",
                  Text: "Celebrity Guest",
                  Description: "Strict privacy required",
                  Width: 7200, // 5 giorni
                  Offset: 14400,
                  Color1: "#8E2DE2",
                  Classes: "booking vip",
                  ViewInfo: true
              }
          ]
      }
      // ... Altre 4 presidential suites (PRS-402 a PRS-405) ...
  ],

  Calendar: {
      Exceptions: [
          {
              Date: "2023-12-25",
              Name: "Christmas",
              Recurrent: true,
              Color: "#ff0000"
          },
          {
              Date: "2024-01-01",
              Name: "New Year",
              Recurrent: true,
              Color: "#ff0000"
          }
      ]
  },

  Events: [
      {
          Id: "HOTEL-EVENT-1",
          Description: "Annual Maintenance - Reduced staff",
          Offset: 21600,
          Width: 2880,
          Color: "#ff9966",
          Opacity: 0.3
      },
      {
          Id: "HOTEL-EVENT-2",
          Description: "International Conference - High occupancy",
          Offset: 14400,
          Width: 4320,
          Color: "#cc99ff",
          Opacity: 0.3
      }
  ],

  HotelInfo: {
      Name: "Grand Horizon Resort",
      Location: "Miami Beach, FL",
      TotalRooms: 50,
      Amenities: [
          "Spa",
          "3 Restaurants",
          "Infinity Pool",
          "24/7 Room Service"
      ],
      Contact: {
          Phone: "+1 (305) 555-1234",
          Email: "reservations@grandhorizon.com"
      }
  }
};