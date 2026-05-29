# Neon Defense — App Store Publishing Guide

## Filer i detta paket

| Fil | Syfte |
|---|---|
| `tower-defense.html` | Spelet (kopieras till www/index.html) |
| `package.json` | Node.js projekt med Capacitor-beroenden |
| `capacitor.config.ts` | Capacitor-konfiguration |
| `app-icon.svg` | App-ikon (konvertera till PNG 1024×1024) |
| `privacy-policy.html` | Privacy policy (krävs av App Store) |
| `BUILD-GUIDE.md` | Denna fil |

---

## Steg 1: Förutsättningar

```bash
# Installera dessa om du inte har dem:
# 1. Node.js 18+ → https://nodejs.org
# 2. Xcode 15+ → Mac App Store (gratis)
# 3. Apple Developer Program → https://developer.apple.com ($99/år)
# 4. CocoaPods → sudo gem install cocoapods
```

## Steg 2: Skapa projektet

```bash
mkdir neon-defense && cd neon-defense

# Kopiera filerna hit:
# - package.json
# - capacitor.config.ts
# - tower-defense.html

# Installera beroenden
npm install

# Skapa www-mappen och kopiera spelet
mkdir -p www
cp tower-defense.html www/index.html

# Initiera Capacitor (om inte redan gjort via config)
npx cap init "Neon Defense" com.dittnamn.neondefense --web-dir=www

# Lägg till iOS-plattform
npx cap add ios

# Synka
npx cap sync
```

## Steg 3: App-ikon

```bash
# Konvertera SVG till PNG (1024x1024):
# Alternativ 1: Öppna app-icon.svg i webbläsaren, ta screenshot
# Alternativ 2: Använd Inkscape CLI:
inkscape app-icon.svg --export-filename=AppIcon.png -w 1024 -h 1024

# Alternativ 3: Använd online-verktyg som makeappicon.com
# Ladda upp 1024x1024 PNG → ladda ner alla storlekar

# Kopiera ikoner till Xcode:
# ios/App/App/Assets.xcassets/AppIcon.appiconset/
```

**Ikonstorlekar som behövs (Xcode 15+):**
- 1024×1024 (App Store)
- Xcode genererar automatiskt resten från 1024×1024 single size

## Steg 4: Öppna i Xcode

```bash
npx cap open ios
```

I Xcode:
1. Välj **App** i sidofältet
2. Under **Signing & Capabilities** → välj ditt Team
3. Ändra **Bundle Identifier** till `com.dittnamn.neondefense`
4. Sätt **Deployment Target** till iOS 16.0
5. Under **General** → **Device Orientation** → bara **Portrait**
6. Dra din 1024×1024 ikon till AppIcon i Assets

## Steg 5: Testa

```bash
# I Xcode: välj en simulator (iPhone 15 Pro) → ▶ Run
# Eller anslut en riktig enhet via USB
```

**Testa dessa saker:**
- [ ] Splash screen → Guard-val → gameplay funkar
- [ ] Ljud fungerar (shoot, kill, boss warning)
- [ ] Torn kan byggas, uppgraderas, flyttas, säljas
- [ ] Boss dyker upp vid wave 10 med varning
- [ ] Boss kan dödas
- [ ] High score sparas
- [ ] Inställningar (ljud, haptics) sparas
- [ ] Inga krascher vid wave 1–30

## Steg 6: Förbered för App Store

### Screenshots (krävs)
Ta screenshots i Xcode Simulator:
- **6.7" (iPhone 15 Pro Max)**: minst 3 screenshots
- **5.5" (iPhone 8 Plus)**: minst 3 screenshots (om du stödjer äldre)

**Rekommenderade screenshots:**
1. Splash screen med logotyp
2. Gameplay med torn + fiender
3. Boss-fight med "BOSS INCOMING"
4. Torn-menyn med alla 10 torn
5. Guard-val

### App Store Metadata

**App Name:** `Neon Defense`

**Subtitle:** `Cyberpunk Tower Defense`

**Category:** Games → Strategy

**Keywords:** (max 100 tecken)
```
tower defense,strategy,neon,cyberpunk,turret,boss,waves,defense game,td
```

**Description:**
```
Defend your base against waves of cybernetic enemies in this
fast-paced neon tower defense game!

FEATURES:
• 10 unique turrets: Blaster, Mortar, Cryo, Acid, Arc, Rail, 
  Laser, Missile, Flame, and EMP
• 3 upgrade levels per turret with increasing power
• Move turrets to adapt your strategy mid-battle
• 5 distinct enemy types: Drones, Speeders, Mechs, Gliders, Medbots
• Epic boss battles every 10 waves with unique mechanics
• Choose your Combat Bot: Shield Bot, Sniper Bot, or Pulse Bot
• 100 waves of increasing challenge
• Stunning neon cyberpunk visuals
• Synthesized sound effects
• No ads. No in-app purchases. Pure strategy.

Can you survive all 100 waves and defeat the OMEGA?
```

**Promotional Text:** (kan ändras utan ny granskning)
```
New cyberpunk tower defense — 10 turrets, epic bosses, zero ads!
```

**What's New:** (för v1.0)
```
Initial release! 10 turrets, 100 waves, 10 bosses, 3 combat bots.
```

**Age Rating:** 9+ (Infrequent/Mild Cartoon or Fantasy Violence)

**Price:** Free (eller valfritt pris)

**Privacy Policy URL:** Ladda upp privacy-policy.html till en webbhost
och länka till den (t.ex. GitHub Pages, Netlify)

## Steg 7: Bygg & Ladda upp

```bash
# I Xcode:
# 1. Välj "Any iOS Device" som build target (inte simulator)
# 2. Product → Archive
# 3. Vänta på att det bygger...
# 4. Window → Organizer (öppnas automatiskt)
# 5. Välj din archive → "Distribute App"
# 6. Välj "App Store Connect" → "Upload"
# 7. Följ wizard → Upload
```

## Steg 8: App Store Connect

1. Gå till https://appstoreconnect.apple.com
2. "My Apps" → "+" → "New App"
3. Fyll i:
   - Platform: iOS
   - Name: Neon Defense
   - Primary Language: English
   - Bundle ID: com.dittnamn.neondefense
   - SKU: neondefense001
4. Under "App Information":
   - Category: Games → Strategy
   - Privacy Policy URL: din URL
5. Under "Pricing and Availability":
   - Välj pris (Free eller valt pris)
   - Välj tillgänglighet (alla länder)
6. Under "1.0 Prepare for Submission":
   - Ladda upp screenshots
   - Fyll i description, keywords, support URL
   - Välj build (den du laddade upp i steg 7)
   - Fyll i age rating
   - App Review Information: kontaktuppgifter
7. Klicka "Submit for Review"

## Steg 9: Granskning

- Apple granskar vanligtvis inom **24–48 timmar**
- Du får email när den godkänns/avslås
- Om avslag: läs feedbacken, fixa, ladda upp igen

### Vanliga avslag och lösningar

| Avslag | Lösning |
|---|---|
| "Minimum functionality" | Se till att ljud, highscore, splash screen, settings finns |
| "Broken links" | Kontrollera att privacy policy URL fungerar |
| "Metadata rejected" | Ändra screenshots/text, skicka in igen (snabbare) |
| "Crashes" | Testa noggrant på riktig enhet innan upload |

## Android (Bonus)

```bash
npx cap add android
npx cap sync
npx cap open android

# I Android Studio:
# Build → Generate Signed Bundle → ladda upp till Google Play Console
# Google Play konto: $25 engångsavgift
```

---

## Checklista före submission

- [ ] App-ikon 1024×1024 i Assets
- [ ] Bundle ID korrekt
- [ ] Signing Team valt
- [ ] Testat på riktig enhet
- [ ] Privacy policy live på en URL
- [ ] Screenshots tagna (6.7")
- [ ] Description ifyllt
- [ ] Keywords ifyllt
- [ ] Age rating ifyllt
- [ ] Build uploadad via Xcode
- [ ] Ljud fungerar
- [ ] Inga krascher
