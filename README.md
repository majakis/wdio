# Upute za postavljanje: Visual Studio Code, GitHub Desktop i Node.js

Ovaj vodič pruža korak-po-korak upute za postavljanje radnog okruženja, forkanje repozitorija, izmjene i pokretanje automatskih testova.

---

## Preduvjeti

### Instalacija potrebnog softvera
1. **Visual Studio Code**  
   Preuzmite i instalirajte Visual Studio Code s [ovog linka](https://code.visualstudio.com/download).  

2. **GitHub Desktop**  
   Preuzmite i instalirajte GitHub Desktop s [ovog linka](https://desktop.github.com/).  

3. **Node.js**  
   Provjerite je li Node.js instaliran na vašem računalu. Možete ga preuzeti s [službene stranice Node.js](https://nodejs.org/).

---

## Koraci za početak rada

### 1. Prijavite se u GitHub Desktop  
Prijavite se u GitHub Desktop aplikaciju pomoću svog postojećeg GitHub računa ili kreirajte novi ako ga još nemate.

### 2. Forkajte repozitorij  
1. Otvorite repozitorij u pregledniku: [https://github.com/majakis/wdio](https://github.com/majakis/wdio).  
2. Kliknite na gumb **Fork** kako biste stvorili vlastitu kopiju repozitorija.

### 3. Klonirajte forkani repozitorij  
1. U GitHub Desktop aplikaciji kliknite **File > Clone Repository**.  
2. Kliknite na **URL** i zalijepite URL svog forkanog repozitorija (možete ga pronaći klikom na zeleni gumb **Code** u svom forku).  
3. U aplikaciji **Finder** (ili File Exploreru na Windowsu) kreirajte novi folder u direktoriju **Documents** s vašim imenom i prezimenom te ga odaberite kao destinaciju za kloniranje.

### 4. Kreirajte novi branch  
U GitHub Desktop aplikaciji kreirajte novi branch:  
1. Kliknite **Branch > New Branch**.  
2. Imenujte svoj branch na prikladan način (npr. feature/izmjene-readme).  

---

## Uređivanje i spremanje promjena

1. Otvorite klonirani repozitorij u aplikaciji **Visual Studio Code**.  
2. U datoteci **README.md** napravite bilo kakvu promjenu (npr. ispravite nešto u postojećim uputama ili se samo potpišite).  
3. Spremite svoje promjene.  
4. U GitHub Desktop aplikaciji, **commitajte** spremljene promjene.

---

## Pokretanje automatskih testova

1. Otvorite terminal.  
2. Pokrenite sljedeće naredbe:  
   - `npm i`  
   - `npm run test`  

---

Uživajte u radu! 😊
