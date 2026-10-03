@startuml
title Flujo principal del MVP - AquaChile
skinparam monochrome false
skinparam shadowing false
skinparam ActivityBackgroundColor #E8F1FA
skinparam ActivityBorderColor #1F5F99
skinparam ArrowColor #1F5F99
skinparam DefaultFontName Arial

start

:Ingresar credenciales de acceso;
note right: Interfaz: Login / Acceso

while (¿Credenciales válidas?) is (No)
  :Mostrar mensaje de error;
  :Ingresar credenciales de acceso;
endwhile (Sí)

:Supervisor selecciona centro de cultivo
y faena activa;
note right: Interfaz: Menú / Selección de Faena

:Buzo y supervisor completan
encuesta de salud y checklist de equipos;
note right: Interfaz: Formulario Checklist

if (¿Hay fallas en los equipos?) then (Sí)
  :Supervisor registra observaciones
  y adjunta fotos de respaldo;
  note right: Interfaz: Registro de Observaciones
else (No)
endif

:Buzo y supervisor firman digitalmente
el AST y la bitácora de la faena;
note right: Interfaz: Firma Digital

if (¿Hay conexión al servidor central?) then (Sí)
  :Enviar datos al servidor central;
else (No)
  :Almacenar datos localmente
  (modo offline);
endif

:Mostrar Resumen e Historial;
note right: Interfaz: Resumen e Historial

stop
@enduml
