# Portfolio Website

Dieses Repository ist die Grundlage fuer deine Portfolio-Seite auf GitHub Pages und nutzt Angular als Frontend-Framework.

## Lokale Entwicklung

```bash
npm install
npm start
```

Die App laeuft dann standardmaessig unter `http://localhost:4200/`.

## Build

```bash
npm run build
```

Der Produktions-Build landet unter `dist/gegner-io/browser`.

## GitHub Pages

Das Repo ist fuer Deployment per GitHub Actions vorbereitet. Die Workflow-Datei baut Angular und deployed das Ergebnis auf GitHub Pages.

Wichtig in den Repository-Einstellungen:

```text
Settings > Pages > Build and deployment > Source = GitHub Actions
```

## Naechste sinnvolle Schritte

- Platzhaltertexte in `src/app/app.ts` durch deine echten Inhalte ersetzen.
- Weitere Sektionen oder Komponenten fuer Projekte, About, Kontakt und CV anlegen.
- Eigene Icons, Bilder und Open Graph Assets in `public/` ablegen.
