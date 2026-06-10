/**
 * SchedulaCore — demo data (single file)
 * Loaded by package-demo.html via a <script> tag, so it works offline
 * (double-click the HTML, no server needed). Shape: { Resources: [ { Items: [] } ] }
 * Offset = start in minutes from settings.date; Width = duration in minutes (1440 = 1 day).
 */
window.SCHEDULA_DEMO_DATA = {
  Resources: [
    { Id: "1", Name: "Alice", Group: 1, Items: [
      { Id: "t1", Text: "Design phase", Description: "wireframes & specs", Offset: 8640,     Width: 5760, Color1: "#2043D9", Completion: 100 },
      { Id: "t2", Text: "Development",   Description: "core build",        Offset: 14400,  Width: 5760, Color1: "#006BF7", Completion: 60 }
    ]},
    { Id: "2", Name: "Bob", Group: 1, Items: [
      { Id: "t3", Text: "API integration", Offset: 10080, Width: 4320, Color1: "#00AAB5", Completion: 40 }
    ]},
    { Id: "3", Name: "Carol", Group: 2, Items: [
      { Id: "t4", Text: "Testing", Description: "QA pass", Offset: 15840,  Width: 2880, Color1: "#7C3AED", Completion: 10 },
      { Id: "t5", Text: "Docs",                            Offset: 18720, Width: 1440, Color1: "#0EA5E9" }
    ]},
    { Id: "4", Name: "Dave", Group: 2, Items: [
      { Id: "t6", Text: "Deployment", Description: "release v1", Offset: 20160, Width: 2880, Color1: "#16A34A" }
    ]},
    { Id: "5", Name: "Erin", Group: 2, Items: [
      { Id: "t7", Text: "Review", Offset: 21600, Width: 2880, Color1: "#F59E0B", Completion: 0 }
    ]}
  ]
};
