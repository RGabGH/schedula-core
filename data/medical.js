var medicaldata = {

  Resources: [
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
          Width: 1920,
          Offset: 1440,
          Color1: "#FF6B6B",
          Classes: "appointment checkup",
          From: 29108160,
          To: 29110080,
          Effort: 0,
          Modified: true
        },
        {
          Id: "C102",
          Text: "Verdi L.",
          Description: "Visita controllo\nPost-operatorio",
          Width: 2940,
          Offset: 3600,
          Color1: "#4ECDC4",
          Classes: "appointment post-op",
          From: 29110320,
          To: 29113260,
          Effort: 0,
          Modified: true
        },
        {
          Id: "C103",
          Text: "Neri G.",
          Description: "Palpitazioni\nHolter 24h da valutare",
          Width: 2460,
          Offset: 7200,
          Classes: "appointment urgent",
          From: 29113920,
          To: 29116380,
          Effort: 0,
          Modified: true
        }
      ]
    },
    {
      Id: "ORTO1",
      Name: "Dr. Bianchi - Ortopedia",
      Group: 2,
      Specialty: "Ortopedia",
      Items: [
        {
          Id: "O203",
          Text: "Esposito L.",
          Description: "Prima visita\nLombalgia cronica",
          Width: 2100,
          Offset: 8640,
          Classes: "appointment new",
          From: 29115360,
          To: 29117460,
          Effort: 0,
          Modified: true
        },
        {
          Id: "P301",
          Text: "Bambino R. (6 anni)",
          Description: "Vaccinazione esavalente\nControllo crescita",
          Width: 1440,
          Offset: 2220,
          Color1: "#A0E7E5",
          Classes: "appointment vaccine",
          From: 29108940,
          To: 29110380,
          Effort: 0,
          Modified: true,
          Resource: 1
        },
        {
          Id: "O201",
          Text: "Russo P.",
          Description: "Dolore spalla dx\nRX già eseguito",
          Width: 1980,
          Offset: 4020,
          Classes: "appointment urgent",
          From: 29110740,
          To: 29112720,
          Effort: 0,
          Modified: true,
          Resource: 1
        },
        {
          Id: "O202",
          Text: "Ferrari A.",
          Description: "Controllo gesso\nGinocchio sx",
          Width: 1320,
          Offset: 6000,
          Classes: "appointment checkup",
          Color2: "red",
          From: 29112720,
          To: 29114040,
          Effort: 0,
          Modified: true,
          Resource: 1
        }
      ]
    },
    {
      Id: "PED1",
      Name: "Dr. Verdi - Pediatria",
      Group: 3,
      Specialty: "Pediatria",
      Items: [
        {
          Id: "P302",
          Text: "Bambina M. (4 anni)",
          Description: "Tosse persistente\nPossibile allergia",
          Width: 3480,
          Offset: 4200,
          Classes: "appointment urgent",
          From: 29110920,
          To: 29114400,
          Effort: 0,
          Modified: true,
          Resource: 2
        }
      ]
    },
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
          Width: 1920,
          Offset: 2160,
          Classes: "appointment exam",
          From: 29108880,
          To: 29110800,
          Effort: 0,
          Modified: true
        },
        {
          Id: "E403",
          Text: "Articolazione ginocchio",
          Description: "Paziente: Bianchi L.",
          Width: 2640,
          Offset: 9360,
          Classes: "appointment exam",
          From: 29116080,
          To: 29118720,
          Effort: 0,
          Modified: true
        },
        {
          Id: "E402",
          Text: "Tiroide",
          Description: "Paziente: Rossi M.\nRefertazione urgente",
          Width: 1800,
          Offset: 4800,
          Classes: "appointment urgent",
          From: 29111520,
          To: 29113320,
          Effort: 0,
          Modified: true,
          Resource: 3
        },
        {
          Id: "F502",
          Text: "Massoterapia",
          Description: "Paziente: Viola P.\nCervicalgia",
          Width: 720,
          Offset: 6660,
          Classes: "appointment physio",
          From: 29113380,
          To: 29114100,
          Effort: 0,
          Modified: true,
          Resource: 3
        }
      ]
    },
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
          Width: 2340,
          Offset: 3600,
          Classes: "appointment physio",
          From: 29110320,
          To: 29112660,
          Effort: 0,
          Modified: true
        },
        {
          Id: "F503",
          Text: "TENS",
          Description: "Paziente: Rossi A.\nLombosciatalgia",
          Width: 2640,
          Offset: 7920,
          Classes: "appointment physio",
          From: 29114640,
          To: 29117280,
          Effort: 0,
          Modified: true
        }
      ]
    },
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
          Classes: "appointment lab",
          From: 29108520,
          To: 29108760
        },
        {
          Id: "L602",
          Text: "Prelievo sangue",
          Description: "Paziente: Verdi S.\nGravidanza 3° trimestre",
          Width: 1380,
          Offset: 2880,
          Classes: "appointment lab",
          From: 29109600,
          To: 29110980,
          Effort: 0,
          Modified: true
        },
        {
          Id: "L603",
          Text: "Prelievo sangue",
          Description: "Paziente: Blu R.\nControllo terapia anticoagulante",
          Width: 2160,
          Offset: 4320,
          Classes: "appointment lab",
          From: 29111040,
          To: 29113200,
          Effort: 0,
          Modified: true
        },
        {
          Id: "L604",
          Text: "Test intolleranze",
          Description: "Paziente: Rossi L.\nPanel 120 alimenti",
          Width: 1380,
          Offset: 7200,
          Classes: "appointment lab",
          From: 29113920,
          To: 29115300,
          Effort: 0,
          Modified: true
        },
        {
          Id: "L605",
          Text: "Prelievo sangue",
          Description: "Paziente: Bianchi P.",
          Width: 2280,
          Offset: 8640,
          Classes: "appointment lab",
          From: 29115360,
          To: 29117640,
          Effort: 0,
          Modified: true
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

  },
  Events: [
    {
      Id: "PAUSA1",
      Description: "Pausa pranzo",
      Offset: 720,
      Width: 120,
      Recurrent: "daily",
      Color: "#FFD166",
      Opacity: 0.3
    },
    {
      Id: "PULIZIA1",
      Description: "Sanificazione ambienti",
      Offset: 1140,
      Width: 60,
      Recurrent: "daily",
      Color: "#06D6A0",
      Opacity: 0.2
    }
  ],

}