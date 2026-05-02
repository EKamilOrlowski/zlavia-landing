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

1. YouTube video IDs w src/components/VideoSection.astro
2. Linki Ko-fi i social media w src/components/EmailSection.astro
3. Adres email w src/pages/feedback.astro (zmienna CONTACT_EMAIL)

## Praca z AI w kolejnych iteracjach

Ta sekcja pozwala prowadzic zmiany tak, aby nie psuc deployu i szybciej wracac do kontekstu projektu.

### Zasada pracy

1. Jedna iteracja = jeden cel biznesowy.
2. Kazda iteracja konczy sie buildem lokalnym.
3. Kazda iteracja konczy sie osobnym commit.
4. Nie wrzucaj placeholderow bez oznaczenia TODO.

### Sugerowany cykl

1. Opisz AI dokladnie cel i kryteria akceptacji.
2. Popros AI o zmiany w kodzie i aktualizacje README, jesli zmienia sie proces.
3. Uruchom lokalnie:
   npm run build
4. Wypchnij zmiany na main albo przez branch feature.
5. Sprawdz wynik deployu w GitHub Actions.

### Template promptu do kolejnych zmian

Skopiuj i uzupelnij:

```text
Cel biznesowy:
- ...

Zakres zmian:
- ...

Poza zakresem:
- ...

Wymagania techniczne:
- Astro SSG
- GitHub Pages
- PL/EN bez regresji

Definition of Done:
- npm run build przechodzi lokalnie
- brak regresji w sekcjach: Nav, Hero, Classes, Bestiary, HexMap, Email
- README zaktualizowany, jesli proces lub konfiguracja sie zmienila
```

### Definition of Done dla kazdego PR/commitu

1. Build przechodzi: npm run build.
2. Deploy workflow istnieje i jest zielony po pushu.
3. Nie ma zepsutych linkow anchor i switchera jezyka.
4. Mobile nav otwiera i zamyka sie poprawnie.
5. README ma aktualne instrukcje wdrozenia.

### Strategia branchy

Bezpieczniej dla wiekszych zmian:

```bash
git checkout -b feat/nazwa-zmiany
git add .
git commit -m "feat: krotki opis"
git push -u origin feat/nazwa-zmiany
```

Potem PR do main. Dla malych poprawek mozna commitowac bezposrednio do main.

### Szybki rollback

Jesli po pushu deploy sie wylozy:

1. Cofnij ostatni commit bez przepisywania historii:

```bash
git revert HEAD
git push
```

2. Napraw blad na nowym commicie.

### Miejsca, ktore najczesciej wymagaja podmiany danych

1. src/components/EmailSection.astro
2. src/components/VideoSection.astro
3. astro.config.mjs
4. .github/workflows/deploy.yml
