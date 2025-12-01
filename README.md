# 🎲 US AGAINST THE ODDS 🎲
***Plátek, Vedral, Prážáková***
---
*
Us Against the Odds je jednoduchá, ale atmosférická hra odehrávající se na městké pouti. Vaším cílem je získat ***dostatek ticketů*** plněním lehce netypických pouťových ***minihier***.
Nejde však jen o samotné úkoly. Vaše přítelkyně si přeje plyšáka, ale neudělá vám to jednoduché. Během hraní se nebudete soustředit pouze na jednotlivá stanoviště, ale také na ***udržování vztahu***, pozornosti a spokojenosti vaší milované.
Hra vás provede časem na pouti — proti všem překážkám.
*
---
## 🎰 Gameplay & Mini-Games
**MAPY**
Hráč má k dispozici dvě mapy, na kterých se může pohybovat a kde se nachází stanoviště.
Průměrně je na mapě 5 interaktivních stanovišť, ne každé ale obsahuje minihru.

**STANOVIŠTĚ**
Stanoviště je jakkoli interaktivní část mapy, především minihry, kde můžete vydělat tickety.
Nějaká stanoviště slouží pouze pro zábavu a uklidnění potřeb, nachází se na mapě tedy i občestvení.

**ZÁKLADNÍ MECHANIKA**
- Tickety: získávají se úspěšným plněním minihier
- Stamina vztahu: škála zobrazující náladu vaší přítelkyně
- Jídlo + zabavná stanoviště: hráč musí utrácet tickety, vylepšuje staminu
- Pohyb: hráč může opakovat libovolné stanoviště, nemá omezený pohyb mezi mapami
- Cíl: nasbírat dostatek ticketů k zakoupení plyšáka
  
- Databáze: uložení statických dat pro stánky a minihry
- Menu: uživatelská možnost lehkých úprav, restart hry

**MINIHRY**
Určené pro vydělání ticketů, je ale možné, že pro vstup do nějaké minihry budete muset pár ticketů i obětovat.
- Risky Turn: *Napínavá hra náhody, kde hráči riskují vše pro odměnu a zkoušejí své štěstí a odvahu. Inspirované ruskou ruletou.*
- Lucky 21: *Rychlá karetní hra, kde hráč usiluje o hodnotu co nejblíže 21. Pravidla podle známého Black Jacku.*
- Cups & Coins: *Hráči hádají pod kerou nádobkou se nachází skrytý objekt, založeno na štěstí a intuici. Na styl skořápek.*
> Wheel of luck: *Na náhodě a štěstí založená hra, kde můžete díky vyhrát velké odměny, ale i prodělat.* <br>
> Wheel of fortune: *Hra založená na náhodě. Hráč sází na čísla nebo barvy a čeká, kam se zastaví kolo, aby vyhrál tickety, skoro jako při ruletě.* <br>
> Memory Match: *Zábavná paměťová hra, kde hráč obrací karty a hledá dvojice, aby nasbíral co nejvíce ticketů. Jako české pexeso.* <br>
> Lucky Dice: *Strategická hra s kostkami, kde hráč hází s nadějí, že součtem vyhraje nad svým protihráčem.* <br>
> Key dash: *Rychlostní hra, co otestuje vaše reflexy. Co nejpřesněji a nejrychleji musíte trefit zadaný patern.*
---
## 📝 Team members (PVP)
**V. Plátek**
- struktura databází a API: návrh a kód základní funkčnosti databází (jídlo, minihry)
- návhr a funkčnost jídelních stánků
- logika karetních her + karty
- random generator service
- dokončení minihry: změna dat, vyhodnocení, logika ukončení
- minihry: Lucky 21

**L. Vedral**
- struktura projektu: hlavní funčnost gameplaye, pohyb, získávání bodů...
- předloha miniher: preset, minigame info, end, minigame
- načítání dat z databází pro použití ve hře
- menu: možnost restartu, úpravy zvuků...
- lokální ukládání progresu hráče do paměti (cookies / local)
- design: grafika herních detailů a vizuálu stánků
- minihry: Risky Turn

**N. Pražáková**
- design: úvodní sekvence, grafika celé hry
- "účet hráče," ukládání jména do paměti
- úprava responzivity pro menší displeje
- routng: pohyb mezi mapami
- REST endopint, čtení dat pro hru
- minihry: Cups & Coins, Lucky Dice
