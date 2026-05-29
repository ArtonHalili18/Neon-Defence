# 🛡️ NEON DEFENSE

**Cyberpunk Tower Defense** — Försvara din bas mot vågor av robotfiender med 14 unika torn och 3 combat bots.

## 🎮 [SPELA NU](https://ditt-användarnamn.github.io/neon-defense/)
> Byt ut `ditt-användarnamn` mot ditt GitHub-användarnamn

---

## Features

- 🔫 **14 torn** med unika former och effekter — från snabba Blasters till den ultimata Omega-kedjeblixten
- ⭐ **4 super-torn** som låses upp vid wave 40, 60, 80 och 100
- 👾 **5 fiendetyper** med unika former: Drones, Speeders, Mechs, Gliders, Medbots
- 👹 **10 bossar** med specialmekaniker (regen, shield, teleport, summon)
- 👾 **Fiende-evolution** — mutationer vid wave 20/40/60/80 (spikar, aura, tentakler, glitch)
- 🛡️ **3 Combat Bots** att välja mellan: Shield Bot, Sniper Bot, Pulse Bot
- 🔄 **Flytta torn** — omplacera strategi mitt i striden
- 🔊 **Ljudeffekter** via Web Audio API (inga externa filer)
- 🏅 **High score** som sparas mellan sessioner
- 📱 **Mobilanpassat** — touch-kontroller i porträttläge
- 🚫 Inga ads, inga in-app-köp, ingen tracking

## Torn

| Torn | Form | Effekt |
|---|---|---|
| 🔫 Blaster | ▲ Triangel | Snabb singel-skott |
| 💥 Mortar | ■ Fyrkant | AOE splash |
| ❄️ Cryo | ◆ Diamant | Saktar fiender |
| ☣️ Acid | ⬠ Pentagon | Damage over time |
| ⚡ Arc | ✡ Stjärna | Kedja-blixt |
| 🎯 Rail | ▮ Rektangel | Extrem räckvidd |
| 🔴 Laser | ● Cirkel | Extremt snabb stråle |
| 🚀 Missile | ▢ Rundad | Stor explosion |
| 🔥 Flame | 🔥 Droppe | Kort AOE runt tornet |
| 📡 EMP | ⬡ Oktagon | Stunnar alla i radie |
| 🌀 Vortex | ◎ Ringar | ⭐ Wave 40: Mega slow |
| ☀️ Nova | ✴ Starburst | ⭐ Wave 60: Träffar ALLA |
| 💎 Quantum | ◇ Kristall | ⭐ Wave 80: Mega singel |
| 🔱 Omega | 👑 Krona | ⭐ Wave 100: Ultimate kedja |

## Hur man spelar

1. Välj din Combat Bot (Shield / Sniper / Pulse)
2. Tryck **START WAVE** för att börja
3. Tryck på en ledig ruta → välj torn att bygga
4. Tryck på ett torn → Upgrade / Move / Sell
5. Stoppa fiender innan de når basen 🏛️
6. Var 10:e wave = **BOSS** — spara energi!

## Tech

- Ren HTML5 Canvas + JavaScript (ingen framework)
- Web Audio API för syntetiserade ljudeffekter
- ~55KB single-file, zero dependencies
- 60 FPS på mid-range mobiler

## Publicera som app

Se [BUILD-GUIDE.md](BUILD-GUIDE.md) för steg-för-steg till App Store och Google Play via Capacitor.

## Licens

MIT
