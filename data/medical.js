var medicaldata = {
    Resources: [
        {
            Id: "CARD1", Name: "Dott. Bianchi Luigi", Group: 1,
            Items: [
                { Id: "C101", Text: "Turno Mattina", Description: "Cardiologia - Visite ECG\n8:00-13:00", Width: 480, Offset: 0, Color1: "#ff6b6b", Classes: "appointment" },
                { Id: "C102", Text: "Ecocardiogrammi", Description: "Paz: A.Verdi\nSospetta insuff. mitralica", Width: 720, Offset: 2880, Color1: "#feca57", Classes: "examination", Completion: 70 },
                { Id: "C103", Text: "Guardia Notturna", Description: "Turno 20:00-8:00", Width: 720, Offset: 7200, Color1: "#ff9ff3", Classes: "guard" },
                { Id: "C104", Text: "Ambulatorio", Description: "Visite post-intervento\n9:00-12:00", Width: 480, Offset: 10080, Color1: "#ff6b6b", Classes: "appointment" }
            ]
        },
        {
            Id: "CARD2", Name: "Dott.ssa Ferri Anna", Group: 1,
            Items: [
                { Id: "C201", Text: "Holter Cardiaco", Description: "Monitoraggio 48h\nPaz: M. Russo", Width: 720, Offset: 1440, Color1: "#ff6b6b", Classes: "examination" },
                { Id: "C202", Text: "Consulenza urgente", Description: "PS - Fibri. atriale\nPaz: G. Mori", Width: 240, Offset: 4320, Color1: "#ee5a24", Classes: "urgent", Completion: 100 },
                { Id: "C203", Text: "Turno Pomeriggio", Description: "Cardiologia clinica\n14:00-19:00", Width: 480, Offset: 8640, Color1: "#feca57", Classes: "appointment" },
                { Id: "C204", Text: "ECG stress test", Description: "Paz: L. Greco 52a\nTest da sforzo", Width: 360, Offset: 17280, Color1: "#ff6b6b", Classes: "examination" }
            ]
        },
        {
            Id: "ORTO1", Name: "Dott. Mancini Paolo", Group: 2,
            Items: [
                { Id: "O101", Text: "Protesi anca", Description: "Chirurgia sostitutiva\nSala 3 - Paz: G. Conti", Width: 720, Offset: 720, Color1: "#48dbfb", Classes: "surgery" },
                { Id: "O102", Text: "Ambulatorio ortopedico", Description: "Visite di controllo\n12 pazienti programmati", Width: 720, Offset: 2880, Color1: "#00d2ff", Classes: "appointment" },
                { Id: "O103", Text: "Visita post-op", Description: "Follow-up - Paz: G. Conti", Width: 240, Offset: 8640, Color1: "#0abde3", Classes: "appointment", Completion: 60 },
                { Id: "O104", Text: "Artroscopia ginocchio", Description: "Lesione meniscale\nSala 2", Width: 480, Offset: 17280, Color1: "#48dbfb", Classes: "surgery" }
            ]
        },
        {
            Id: "ORTO2", Name: "Dott. Galli Sergio", Group: 2,
            Items: [
                { Id: "O201", Text: "Fissazione vertebrale", Description: "Carcinoma + fissazione\nSala 1 - Paz: F. Esposito", Width: 960, Offset: 0, Color1: "#00d2ff", Classes: "surgery" },
                { Id: "O202", Text: "Ambulatorio spine", Description: "Patologie colonna\nLombalgie croniche - 8 paz", Width: 720, Offset: 4320, Color1: "#48dbfb", Classes: "appointment" },
                { Id: "O203", Text: "Supervisione fisio", Description: "Riabilitazione post-op\n5 pazienti", Width: 480, Offset: 10080, Color1: "#0abde3", Classes: "appointment", Completion: 40 }
            ]
        },
        {
            Id: "NEUR1", Name: "Dott.ssa Leone Francesca", Group: 3,
            Items: [
                { Id: "N101", Text: "EEG diagnostico", Description: "Epilessia sospetta\nPaz: L. Martini", Width: 480, Offset: 480, Color1: "#a29bfe", Classes: "examination" },
                { Id: "N102", Text: "Visita neurologica", Description: "Consulenza alzheimer\nPaz: G. Bruni 78a", Width: 360, Offset: 2160, Color1: "#6c5ce7", Classes: "appointment", Completion: 80 },
                { Id: "N103", Text: "Giro visita reparto", Description: "15 pazienti ricoverati\nNeurologia - pomeriggio", Width: 720, Offset: 7680, Color1: "#a29bfe", Classes: "ward" },
                { Id: "N104", Text: "Refertazione RM", Description: "6 risonanze encefalo\nUrgenza", Width: 480, Offset: 14400, Color1: "#6c5ce7", Classes: "examination" }
            ]
        },
        {
            Id: "PED1", Name: "Dott.ssa Marini Chiara", Group: 4,
            Items: [
                { Id: "P101", Text: "Bilanci di salute", Description: "Pediatria 0-3 anni\n8 pazienti programmati", Width: 720, Offset: 0, Color1: "#1dd1a1", Classes: "appointment" },
                { Id: "P102", Text: "Urgenza pediatrica", Description: "Bambino 4a febbre alta\nPS pediatrico", Width: 180, Offset: 3600, Color1: "#00b894", Classes: "urgent" },
                { Id: "P103", Text: "Giro visita reparto", Description: "8 bambini ricoverati\nMattina", Width: 720, Offset: 10080, Color1: "#1dd1a1", Classes: "ward", Completion: 50 },
                { Id: "P104", Text: "Vaccini calendario", Description: "12 bambini 6-18 mesi\nScheduale vaccinale", Width: 480, Offset: 17280, Color1: "#55efc4", Classes: "appointment" }
            ]
        },
        {
            Id: "PED2", Name: "Dott. Costa Andrea", Group: 4,
            Items: [
                { Id: "P201", Text: "Neonatologia", Description: "Reparto neonati\nControlli quotidiani", Width: 960, Offset: 1440, Color1: "#00b894", Classes: "ward" },
                { Id: "P202", Text: "Cardiologia pediatrica", Description: "Paz: M. Parisi 2a\nVisita specialistica", Width: 360, Offset: 5760, Color1: "#1dd1a1", Classes: "examination", Completion: 90 },
                { Id: "P203", Text: "Guardia pediatrica", Description: "Turno guardia 24h", Width: 1440, Offset: 14400, Color1: "#55efc4", Classes: "guard" }
            ]
        },
        {
            Id: "CHIR1", Name: "Dott. Russo Marco", Group: 5,
            Items: [
                { Id: "CH101", Text: "Appendicectomia", Description: "Laparoscopia\nSala 4 - Paz: A. Ferretti", Width: 480, Offset: 720, Color1: "#ffd32a", Classes: "surgery", Completion: 100 },
                { Id: "CH102", Text: "Colecistectomia", Description: "Calcoli biliari\nApproccio laparoscopico", Width: 480, Offset: 2880, Color1: "#f9ca24", Classes: "surgery" },
                { Id: "CH103", Text: "Ernia inguinale dx", Description: "Riparazione con mesh\nSala 4", Width: 360, Offset: 8640, Color1: "#ffd32a", Classes: "surgery" },
                { Id: "CH104", Text: "Pre-ricovero", Description: "Visita chirurgica\n4 pazienti pianificati", Width: 720, Offset: 14400, Color1: "#f9ca24", Classes: "appointment" }
            ]
        },
        {
            Id: "CHIR2", Name: "Dott. De Luca Antonio", Group: 5,
            Items: [
                { Id: "CH201", Text: "Resezione intestinale", Description: "Ca colon - Sala 1\nPaz: C. Moretti", Width: 960, Offset: 0, Color1: "#f9ca24", Classes: "surgery" },
                { Id: "CH202", Text: "Guardia chirurgica", Description: "Reperibilità 20:00-8:00", Width: 720, Offset: 4320, Color1: "#f0932b", Classes: "guard", Completion: 70 },
                { Id: "CH203", Text: "Gastroscopia x3", Description: "Diagnosi endoscopica\n3 pazienti programmati", Width: 360, Offset: 10080, Color1: "#ffd32a", Classes: "examination" }
            ]
        },
        {
            Id: "DERM1", Name: "Dott.ssa Riva Elisa", Group: 6,
            Items: [
                { Id: "D101", Text: "Screening nevi", Description: "10 pazienti\nDiagnosi precoce melanoma", Width: 720, Offset: 1440, Color1: "#a29bfe", Classes: "examination" },
                { Id: "D102", Text: "Biopsia cutanea", Description: "Lesione sospetta\nPaz: P. Bassi", Width: 240, Offset: 4320, Color1: "#6c5ce7", Classes: "procedure" },
                { Id: "D103", Text: "Fototerapia UVB", Description: "Trattamento psoriasi\nNarrowband UVB", Width: 480, Offset: 8640, Color1: "#a29bfe", Classes: "treatment", Completion: 25 },
                { Id: "D104", Text: "Ambulatorio dermatologico", Description: "Visite generali\n10 pazienti", Width: 720, Offset: 14400, Color1: "#6c5ce7", Classes: "appointment" }
            ]
        },
        {
            Id: "ENDO1", Name: "Dott. Savini Giorgio", Group: 6,
            Items: [
                { Id: "E101", Text: "Diabetologia", Description: "Controllo HbA1c\n12 pazienti diabetici", Width: 720, Offset: 0, Color1: "#74b9ff", Classes: "appointment" },
                { Id: "E102", Text: "Ecografia tiroide", Description: "Eco + agoaspirato\nPaz: L. Sorrentino", Width: 360, Offset: 2880, Color1: "#0984e3", Classes: "examination", Completion: 60 },
                { Id: "E103", Text: "Day hospital", Description: "Monitoraggio insulinico\nPompa infusione continua", Width: 960, Offset: 10080, Color1: "#74b9ff", Classes: "ward" },
                { Id: "E104", Text: "Follow-up post-tiroidectomia", Description: "4 pazienti\nControllo ormoni tiroidei", Width: 480, Offset: 17280, Color1: "#0984e3", Classes: "appointment" }
            ]
        },
        {
            Id: "GIN1", Name: "Dott.ssa Poli Valentina", Group: 6,
            Items: [
                { Id: "G101", Text: "Ecografia ostetrica", Description: "Controllo gravidanze\n8 paz - 10-13 settimane", Width: 720, Offset: 1440, Color1: "#fd79a8", Classes: "examination" },
                { Id: "G102", Text: "Parto cesareo", Description: "Paz: M. Tosi 38sett\nSala parto 2", Width: 360, Offset: 4320, Color1: "#e84393", Classes: "surgery", Completion: 100 },
                { Id: "G103", Text: "Ambulatorio ginecologico", Description: "Pap test + visite\n6 pazienti programmati", Width: 720, Offset: 10080, Color1: "#fd79a8", Classes: "appointment" },
                { Id: "G104", Text: "Guardia ostetricia", Description: "Turno notte 22:00-6:00", Width: 480, Offset: 14880, Color1: "#ff7675", Classes: "guard" }
            ]
        }
    ],
    MedicalInfo: {
        Hospital: "Ospedale Regionale",
        Department: "Polispecialistico"
    }
};
