# Client des Sponsoren CRM
[![Build Status](https://travis-ci.org/fcknutwil/sponsorencrm_client.svg?branch=master)](https://travis-ci.org/fcknutwil/sponsorencrm_client)

## Voraussetung
- Installation von [npm](https://www.npmjs.com/)

## Einrichten
### npm Packages installieren
```
npm install
```

## Dev-Server starten
### Online Backend
```
npm start
```
oder
```
npm run server_sandbox
``` 
### Lokales Backend
Backend gemäss [Anleitung](https://github.com/fcknutwil/sponsorencrm_server) starten
```
npm run server_local
``` 

## Applikation starten
Die Applikation ist nun unter [localhost:9000/login](http://localhost:9000/login) erreichbar.
Als Test-User kann **cas** mit Passwort **fee** verwendet werden.

## Live-Server
Der Live Server ist unter [https://sandbox.crmsponsoren.fcknutwil.ch](https://sandbox.crmsponsoren.fcknutwil.ch) erreichbar.  
Als Test-User kann **cas** mit Passwort **fee** verwendet werden.

## "Besondere" Leistungen
- Projekt ohne Angular CLI aufgesetzt
  - Nur das "nötigste" verwendet
- Authorisierung mit Json Web Tokens
- Continuous Deployment mit Travis CI
  - Deployment auf Test- oder Prod-Server
  - Github Release
- Auto-Complete für Auswahl der Ortschaft (bei den Sponsoren)  
