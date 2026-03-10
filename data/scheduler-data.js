var schedulerData = {
    Resources: [{
        Id: "1",
        Name: "RESOURCE 1",
        Group: 1,
        Items: [{
            Id: "125487",
            Text: "MEETING 1",
            Description: "meeting short description",
            Width: 2880,
            Offset: 2880,
            Color1: '#2531B1',
            Classes: "rect",

        }, {
            Id: "875496",
            Text: "TASK 2",
            Description: "product review",
            Width: 4320,
            Offset: 18000,
            Color1: '#77B125',
            Link: "I1011"
        }, {
            Id: "raf",

            ViewInfo: true,

            Width: 4320,
            Text: "TASK with Icons",
            Group: 1,
            Icons: [{ Name: "comments" }, { Name: "bell" }],
            Offset: 8640,
            Link: "provalink"

        }],
        Data: {
            Campo1: 'adfasf',
            Campo2: 'RTUTR'
        },
        Buttons: [{
            Text: "prova",
            Color: "red",
            Id: "butid"
        }],

    },

    {
        Id: "2",
        Name: "RESOURCE 2",
        Group: 1,
        Classes: "bg-green",
        Icons: [{
            Name: "calendar",
            Classes: ""
        }, {
            Name: "bell"
        }],
        Items: [{
            Id: "I10",

            Text: "ACTIVITY ID",
            Description: "activity short description",
            Width: 11460,
            Color1: '#77B125',
            Classes: '',
            Group: 1,
            Offset: 21600,
            Completion: 70,
            Property: false,
            Icons: [{ Name: "bell" }],
        }, {
            Id: "I20",


            Width: 4320,
            Text: "456-89-56",
            Description: "production order 9856",
            Group: 1,
            Data: {
                Campo1: 'adfasf',
                Campo2: 'RTUTR'
            },
            Offset: 1440,
            Property: false,
        }],
        Data: {
            Campo1: 'adfasf',
            Campo2: 'RTUTR'
        }
    },

    {
        Id: "3",
        Name: "RESOURCE 3",
        Group: 1,
        Items: [{
            Id: "I1011",
            Classes: "",
            Text: "488-23-34",
            Description: "production order 1234",
            Width: 11460,
            Color1: '#B12531',

            Group: 1,
            Offset: 21600,
            Property: false,
        }]
    },

    {
        Id: "4",
        Name: "RESOURCE 4",
        Group: 2,
        Items: [{
            Id: "784512",
            Text: "WEB COMPONENT FOR SCHEDULING",
            Description: "Add in your projects our modern web component",
            Completion: 70,
            Link: "provalink",
            ViewInfo: true,
            Classes: "round-rect",
            Color1: '#77B125',
            Offset: 14400,
            Width: 14400,
        }]


    }, {
        Id: "201",
        Name: "RESOURCE 5",
        Group: 2

    }, {
        Id: "202",
        Name: "RESOURCE 6",
        Group: 2

    }, {
        Id: "204",
        Name: "RESOURCE 7",
        Group: 2

    }, {
        Id: "205",
        Name: "RESOURCE 8",
        Group: 2

    }, {
        Id: "206",
        Name: "RESOURCE 9",
        Group: 2

    }, {
        Id: "301",
        Name: "RESOURCE 10",
        Group: 3

    }, {
        Id: "302",
        Name: "RESOURCE 11",


    }, {
        Id: "303",
        Name: "RESOURCE 12",
        Group: 3

    },

    {
        Id: "401",
        Name: "RESOURCE 13",
        Group: 4

    }, {
        Id: "402",
        Name: "RESOURCE 14",
        Group: 4

    }, {
        Id: "403",
        Name: "RESOURCE 15",
        Group: 4

    }, {
        Id: "404",
        Name: "RESOURCE 16",
        Group: 4

    }, {
        Id: "405",
        Name: "RESOURCE 17",
        Group: 4

    }, {
        Id: "406",
        Name: "RESOURCE 18",
        Group: 4

    }, {
        Id: "10",
        Name: "RESOURCE 19",
        Group: 3,
        Items: []
    },

    {
        Id: "11",
        Name: "RESOURCE 20",
        Group: 3,
        Items: []
    }
    ],

    Calendar: {
        Items: [
            { Day: 0, Capacity: 0 },
            { Day: 6, Capacity: 0 },
            { Day:1, Capacity: 0 , ResourceId:"1", DateFrom:"2026-03-15", DateTo:"2026-03-30"}
        ]
    },
    Events: [{
        Id: "EVENT 1",
        Description: "CALENDAR EVENT 3gg",
        Offset: 7200,
        Width: 2880,
        Classes: "",
        Color: "#66cc99",
        Opacity: 1
    }, {
        Id: "EVENT 2",
        Description: "Calendar Event description",
        Offset: 34580,
        Width: 7200,
        Color: "lightblue",
        Opacity: 0.2
    },],

};

var schedulerData2 = {
    Resources: [{
        Id: "1",
        Name: "RESOURCE 1",
        Group: 1,
        Items: [{
            Id: "125487",
            Text: "MEETING 1",
            Description: "meeting short description",
            Width: 2880,
            Offset: 2880,
            Color1: '#2531B1',
            Link: "I10"

        }, {
            Id: "875496",
            Text: "Gabrielli Raffaele",
            Description: "R&D Software Developer",
            Icons: ["images/laptop-code.svg"],
            Width: 4320,
            Offset: 18000,
            ViewInfo: true,
            Color1: '#b12531'

        }, {
            Id: "raf",

            ViewInfo: true,

            Width: 4320,
            Text: "325-85-96",
            Group: 1,

            Offset: 8640,

        }],
        Icons: ["circle-check", "bell", "address-book"],
        Data: {
            Campo1: 'adfasf',
            Campo2: 'RTUTR'
        },
        Buttons: [{
            Text: "prova",
            Color: "red",
            Id: "butid"
        }]
    },

    {
        Id: "2",
        Name: "RESOURCE 2",
        Group: 1,
        Classes: "bg-green",
        Items: [{
            Id: "I10",

            Text: "",
            Description: "",
            Width: 11460,
            Color1: '#77B125',
            Classes: '',
            Group: 1,
            Offset: 21600,
            Completion: 99,
            Property: false,
        }, {
            Id: "I20",


            Width: 4320,
            Text: "456-89-56",
            Description: "production order 9856",
            Group: 1,
            Data: {
                Campo1: 'adfasf',
                Campo2: 'RTUTR'
            },
            Offset: 1440,
            Property: false,
        }],
        Data: {
            Campo1: 'adfasf',
            Campo2: 'RTUTR'
        }
    },

    {
        Id: "3",
        Name: "RESOURCE 3",
        Group: 1,
        Items: [{
            Id: "I1011",
            Classes: "circle",
            Text: "488-23-34",
            Description: "production order 1234",
            Width: 11460,
            Color1: '#B12531',

            Group: 1,
            Offset: 21600,
            Property: false,
        }, {
            Id: "784512",
            Text: "WEB COMPONENT FOR SCHEDULING",
            Description: "Add in your projects our modern web component",
            Completion: 70,
            ViewInfo: true,
            Classes: "arrow",
            Color1: '#77B125',
            Offset: 14400,
            Width: 4320,

        }]
    },

    {
        Id: "4",
        Name: "RESOURCE 4",
        Group: 2

    }, {
        Id: "201",
        Name: "RESOURCE 5",
        Group: 2

    }, {
        Id: "202",
        Name: "RESOURCE 6",
        Group: 2

    }


    ],

    Calendar: {
        Denominator: 60000,
        Reference:1440,
        Exceptions: [{
            Date: "2023-03-25",
            Name: "Christmas",
            Recurrent: true
        }, {
            Date: "2024-01-01",
            Name: "New Year",
            Recurrent: true
        }],
    },
    Events: [{
        Id: "EVENT 1",
        Description: "CALENDAR EVENT 3gg",
        Offset: 100,
        Width: 2880,
        Classes: "",
        Color: "#66cc99",
        Opacity: 1
    }, {
        Id: "EVENT 2",
        Description: "Calendar Event description",
        Offset: 34580,
        Width: 1440,
        Color: "lightblue",
        Opacity: 0.2
    },],

};


var schedulerData3 = {
    Resources: [{
        Id: "1",
        Name: "RESOURCE 1",
        Group: 1,
        Items: [{
            Id: "125487",
            Text: "MEETING 1",
            Description: "meeting short description",
            Width: 2880,
            Offset: 2880,
            Color1: '#2531B1',
            Classes: "rect",

        }, {
            Id: "875496",
            Text: "TASK 2",
            Description: "product review",
            Width: 4320,
            Offset: 18000,
            Color1: '#77B125',
            Link: "I1011"
        }, {
            Id: "raf",

            ViewInfo: true,

            Width: 4320,
            Text: "TASK ",
            Group: 1,
            Icons: [],
            Offset: 8640,
            Link: "provalink"

        }],
        Data: {
            Campo1: 'adfasf',
            Campo2: 'RTUTR'
        },
        Buttons: [{
            Text: "prova",
            Color: "red",
            Id: "butid"
        }],

    },

    {
        Id: "2",
        Name: "RESOURCE 2",
        Group: 1,
        Classes: "bg-green",
        Icons: ["bell"],
        Items: [{
            Id: "I10",

            Text: "ACTIVITY ID",
            Description: "activity short description",
            Width: 11460,
            Color1: '#77B125',
            Classes: '',
            Group: 1,
            Offset: 21600,
            Completion: 70,
            Property: false,
        }, {
            Id: "I20",


            Width: 4320,
            Text: "456-89-56",
            Description: "production order 9856",
            Group: 1,
            Data: {
                Campo1: 'adfasf',
                Campo2: 'RTUTR'
            },
            Offset: 1440,
            Property: false,

        }],
        Data: {
            Campo1: 'adfasf',
            Campo2: 'RTUTR'
        }
    },

    {
        Id: "3",
        Name: "RESOURCE 3",
        Group: 1,
        Items: [{
            Id: "I1011",
            Classes: "",
            Text: "488-23-34",
            Description: "production order 1234",
            Width: 11460,
            Color1: '#B12531',

            Group: 1,
            Offset: 21600,
            Property: false,
        }]
    },

    {
        Id: "4",
        Name: "RESOURCE 4",
        Group: 2,
        Items: [{
            Id: "784512",
            Text: "text 1",
            Description: "TEXT 2",
            Completion: 70,
            Link: "provalink",
            ViewInfo: true,
            Classes: "round-rect",
            Color1: '#77B125',
            Offset: 14400,
            Width: 14400,
        }]


    }, {
        Id: "201",
        Name: "RESOURCE 5",
        Group: 2

    }, {
        Id: "202",
        Name: "RESOURCE 6",
        Group: 2

    }, {
        Id: "204",
        Name: "RESOURCE 7",
        Group: 2

    }, {
        Id: "205",
        Name: "RESOURCE 8",
        Group: 2

    }, {
        Id: "206",
        Name: "RESOURCE 9",
        Group: 2

    }, {
        Id: "301",
        Name: "RESOURCE 10",
        Group: 3

    }, {
        Id: "302",
        Name: "RESOURCE 11",


    }, {
        Id: "303",
        Name: "RESOURCE 12",
        Group: 3

    },

    {
        Id: "401",
        Name: "RESOURCE 13",
        Group: 4

    }, {
        Id: "402",
        Name: "RESOURCE 14",
        Group: 4

    }, {
        Id: "403",
        Name: "RESOURCE 15",
        Group: 4

    }, {
        Id: "404",
        Name: "RESOURCE 16",
        Group: 4

    }, {
        Id: "405",
        Name: "RESOURCE 17",
        Group: 4

    }, {
        Id: "406",
        Name: "RESOURCE 18",
        Group: 4

    }, {
        Id: "10",
        Name: "RESOURCE 19",
        Group: 3,
        Items: []
    },

    {
        Id: "11",
        Name: "RESOURCE 20",
        Group: 3,
        Items: []
    }
    ],

    Calendar: {
        Exceptions: [{
            Date: "2023-03-25",
            Name: "Christmas",
            Recurrent: true
        }, {
            Date: "2024-01-01",
            Name: "New Year",
            Recurrent: true
        }],
    },
    Events: [{
        Id: "EVENT 1",
        Description: "CALENDAR EVENT 3gg",
        Offset: 7200,
        Width: 2880,
        Classes: "",
        Color: "#66cc99",
        Opacity: 1
    }, {
        Id: "EVENT 2",
        Description: "Calendar Event description",
        Offset: 34580,
        Width: 7200,
        Color: "lightblue",
        Opacity: 0.2
    },],

};
