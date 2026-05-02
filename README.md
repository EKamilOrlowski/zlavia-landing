# ZLAVIA Landing

Landing page gry ZLAVIA zbudowany w Astro (SSG) i gotowy do deployu na GitHub Pages.

## Uruchomienie lokalne

1. Zainstaluj zaleznosci:
   npm install
2. Start dev serwera:
   npm run dev
3. Build produkcyjny:
   npm run build

## Deploy na GitHub Pages (GitHub Actions)

Workflow jest w pliku [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

### 1. Utworz repozytorium na GitHub

1. Nazwa repo: zalecane zlavia-landing.
2. Wypchnij kod do brancha main.

Przyklad komend:

```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin https://github.com/TWOJ_LOGIN/zlavia-landing.git
git push -u origin main
```

### 2. Wlacz GitHub Pages

1. Wejdz w Settings > Pages.
2. W sekcji Build and deployment ustaw Source: GitHub Actions.

### 3. Konfiguracja Astro

Konfiguracja w [astro.config.mjs](astro.config.mjs) automatycznie pobiera owner i nazwe repo z GitHub Actions:

- site: https://OWNER.github.io
- base: /REPO

Lokalny fallback:

- owner: your-username
- repo: zlavia-landing

### 4. Publikacja

Kazdy push do main uruchomi workflow deploy.
Po sukcesie strona bedzie pod adresem:

https://TWOJ_LOGIN.github.io/NAZWA_REPO/

## Wymagane podmiany przed live

1. Formspree ID w src/components/EmailSection.astro
2. YouTube video IDs w src/components/VideoSection.astro
3. Linki Ko-fi i social media w src/components/EmailSection.astro
