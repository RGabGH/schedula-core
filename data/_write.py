
filepath = r'C:\Users\RaffaeleGabrielli\smartscheduler\smartscheduler\data\production-data.js'
import os

content = (
'var productionSchedulerData = {\n'
'    Resources: [\n'
'        {\n'
'            Id: "M001", Name: "Pressa PX-200", Group: 1, Status: "Operativa",\n'
'            Items: [\n'
'                { Id: "ORD-4578", Text: "LAM-4578", Description: "Laminati settore auto\nAcciaio INOX 2mm\nQty: 1200 pz", Width: 5760, Offset: 1440, Color1: "#3a7bd5", Classes: "production-order", Completion: 80 },\n'
'                { Id: "ORD-4579", Text: "LAM-4579", Description: "Laminati elettrodomestici\nAlluminio 1.5mm", Width: 4320, Offset: 10080, Color1: "#00d2ff", Classes: "production-order" },\n'
'                { Id: "ORD-4590", Text: "LAM-4590", Description: "Lamiera zincata\nEdilizia industriale\nQty: 800 pz", Width: 2880, Offset: 17280, Color1: "#3a7bd5", Classes: "production-order" }\n'
'            ]\n'
'        },\n'
'    ],\n'
'    ProductionInfo: {\n'
'        Plant: "test"\n'
'    }\n'
'};\n'
)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("ok", os.path.getsize(filepath))
