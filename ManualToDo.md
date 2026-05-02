# Lista zadań przed wdrożeniem na produkcję

Poniższe zadania wymagają ręcznej konfiguracji — nie mogą być wykonane automatycznie przez AI, bo wymagają założenia kont lub posiadania prawdziwych danych.

---

## 1. Adres e-mail dla formularzy (feedback.astro)

**Plik:** `src/pages/feedback.astro` — linia z `const CONTACT_EMAIL`

**Krok po kroku:**
1. Otwórz plik `src/pages/feedback.astro`.
2. Zmień:
   ```
   const CONTACT_EMAIL = 'twoj@email.com';
   ```
   na swój prawdziwy adres e-mail.
3. Po wdrożeniu wyślij testowe zgłoszenie z każdego z 4 formularzy.
4. Na podany adres przyjdzie e-mail weryfikacyjny od Formsubmit.co — kliknij link potwierdzający.
5. Od tej chwili formularze będą działać bez żadnej rejestracji ani opłat.

> **Uwaga:** Do czasu potwierdzenia weryfikacji zgłoszenia nie są dostarczane.

---

## 2. Newsletter — konto Brevo i formularz zapisu

**Plik:** `src/components/EmailSection.astro`

Brevo (dawniej Sendinblue): **darmowe do 2 000 kontaktów i 300 maili/dzień**.

**Krok po kroku:**
1. Załóż konto na [https://app.brevo.com](https://app.brevo.com) (bezpłatne).
2. Przejdź do: **Contacts → Forms → Create a form**.
3. Skonfiguruj formularz:
   - Typ: **Embedded**
   - Lista kontaktów: utwórz nową listę, np. „ZLAVIA Newsletter"
   - Pola: tylko `email` (opcjonalnie `imię`)
4. Kliknij **Share & Embed** → skopiuj cały blok HTML z tagiem `<script>`.
5. W pliku `src/components/EmailSection.astro` znajdź komentarz:
   ```
   <!-- TODO: Wklej tutaj embed formularza Brevo ... -->
   ```
   i zastąp cały blok `<div style="background:rgba...">...</div>` (placeholder) wklejonym kodem Brevo.
6. Usuń lub zaktualizuj komentarz w bloku `<script is:inline>` pod spodem.
7. Uruchom `npm run build` i sprawdź lokalnie.

---

## 3. Ko-fi — link do wsparcia

**Pliki:**
- `src/components/EmailSection.astro` — przycisk „☕ Postaw kawę"
- `src/pages/feedback.astro` — sekcja wsparcia na dole strony Feedback

**Krok po kroku:**
1. Załóż konto na [https://ko-fi.com](https://ko-fi.com) (bezpłatne).
2. Znajdź swój profil URL, np. `https://ko-fi.com/twojlogin`.
3. W obu plikach zastąp `https://ko-fi.com` swoim prawdziwym linkiem Ko-fi.

---

## 4. Linki do mediów społecznościowych

**Plik:** `src/components/EmailSection.astro` — sekcja z linkami YouTube, Instagram, Discord.

Znajdź trzy tagi `<a href="#">` z etykietami YouTube / Instagram / Discord i podmień `#` na prawdziwe adresy profili.

---

## 5. YouTube — wideo na stronie głównej

**Plik:** `src/components/VideoSection.astro`

Znajdź ID wideo YouTube (część URL po `v=`, np. `dQw4w9WgXcQ`) i podmień w pliku placeholder na prawdziwe ID.

---

## 6. Weryfikacja po każdej zmianie

Po każdej podmiance:
```bash
npm run build
git add .
git commit -m "chore: podmiana danych przed live"
git push
```
Sprawdź wynik deployu w zakładce Actions na GitHubie.

---

## Podsumowanie — skrócona checklista

| #  | Zadanie                             | Plik                                | Status |
|----|-------------------------------------|-------------------------------------|--------|
| 1  | Ustaw CONTACT_EMAIL                 | `src/pages/feedback.astro`          | ⬜     |
| 2  | Zweryfikuj adres w Formsubmit.co    | (e-mail po pierwszym zgłoszeniu)    | ⬜     |
| 3  | Załóż konto Brevo                   | https://app.brevo.com               | ⬜     |
| 4  | Wklej embed Brevo                   | `src/components/EmailSection.astro` | ⬜     |
| 5  | Podaj link Ko-fi                    | `EmailSection.astro` + `feedback.astro` | ⬜ |
| 6  | Podaj linki social media            | `src/components/EmailSection.astro` | ⬜     |
| 7  | Podaj ID wideo YouTube              | `src/components/VideoSection.astro` | ⬜     |
