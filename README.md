# 🎲 US AGAINST THE ODDS 🎲
***Plátek, Vedral, Prážáková***

Us Against the Odds je jednoduchá, ale atmosférická hra odehrávající se na městké pouti. Vaším cílem je získat *dostatek ticketů* plněním lehce netypických pouťových *minihier*.
Nejde však jen o samotné úkoly, vaše přítelkyně si přeje plyšáka, ale neudělá vám to jednoduché. Během hraní se nebudete soustředit pouze na jednotlivá stanoviště, ale také na *udržování vztahu*, pozornosti a spokojenosti vaší milované.
Hra vás provede časem na pouti, i přes všechny přákažky.

---
## 🎰 Gameplay & Mini-Games
**MAPY**
Hráč má k dispozici dvě mapy, na kterých se může pohybovat a kde se nachází stanoviště.
Průměrně je na mapě 5 interaktivních stanovišť, ne každé ale obsahuje minihru.

**STANOVIŠTĚ**
Stanoviště jsou interaktivní části mapy, především minihry, kde můžete vydělat tickety.
Nějaká stanoviště slouží pouze pro zábavu a uklidnění potřeb, nachází se na mapě tedy i občestvení a obchod.

**ZÁKLADNÍ MECHANIKA**
- Tickety: získávají se úspěšným plněním minihier
- Stamina vztahu: škála zobrazující náladu vaší přítelkyně
- Jídlo + zabavná stanoviště: hráč musí utrácet tickety, vylepšuje staminu
- Pohyb: hráč může opakovat libovolné stanoviště, nemá omezený pohyb mezi mapami
- Cíl: nasbírat dostatek ticketů k zakoupení plyšák
- Ukončení: hra končí zakoupením medvěda, nebo klesnutím jakoukoli ze statistik, má tedy mnoho dorbých i špatných konců
  
- Databáze: uložení statických dat pro stánky a minihry
- Menu: uživatelská možnost lehkých úprav, restart hry

**STATISTIKY**
- stamina vztahu: nadšení slečny, dlouho se ji nevěnujete, nebo se vám nedaří získávat tickety, doplňuje se dárky nebo zábavou
- žízen (hráč + Anastasia): musíme postupně kupovat nápoje a nenchat hladinu klesnout, doplňuje se oběma naráz
- hlad (hráč + Anastasia): musíme postupně kupovat jídla a nenchat hladinu klesnout, doplňuje se oběma naráz
- opilost: při moc velké konzumaci nápojů s obsahem alkoholu se hráči začne motat pohled
- tickety: počet vašich vyhraných ticketů, používáte je v obchodech i při vstupech do miniher

**MINIHRY**
Určené pro vydělání ticketů, je ale možné, že pro vstup do nějaké minihry budete muset pár ticketů i obětovat.
- Risky Turn: *Napínavá hra náhody, kde hráči riskují vše pro odměnu a zkoušejí své štěstí a odvahu. Inspirované ruskou ruletou.*
- Lucky 21: *Rychlá karetní hra, kde hráč usiluje o hodnotu co nejblíže 21. Pravidla podle známého Black Jacku.*
- Feeling Lucky?: *Hráči hádají pod kerou nádobkou se nachází skrytý objekt, založeno na štěstí a intuici. Na styl skořápek.*
- Wheel of luck: *Na náhodě a štěstí založená hra, kde můžete díky vyhrát velké odměny, ale i prodělat.*
- Memory Match: *Zábavná paměťová hra, kde hráč obrací karty a hledá dvojice, aby nasbíral co nejvíce ticketů. Jako české pexeso.*
- Whack a mole: *Rychlostní hra, co otestuje vaše reflexy. Co nejrychleji musíte trefit vyskakující zvířátka.*
- Darts: *Hra na přesnost. Pomocí dvou os házíte na terč a snažíte se trefit střed.*

**DESIGN**
- Ručně kreslená pixel art grafika
- Barevná paleta: teplé odstsíny fialové (#322947) a oranžové (#E36956)
- [Grafický návrh + assety](https://www.figma.com/design/wy3CPMltE5aFAPMANV31xf/UsAgainstTheOdds?node-id=107-9&t=1VjDRt4hhgT5BtYp-1)
  
---
## 📝 Team members (PVP)
**V. Plátek**
- struktura databází a API: návrh a kód základní funkčnosti databází (jídlo, minihry)
- návrh a funkčnost jídelních stánků
- logika dokončení celé hry, možnost výhry
- random generator service
- minigame preset: změna dat, vyhodnocení, logika ukončení
- minihry: Lucky 21, Whack a Mole

**L. Vedral**
- struktura projektu: hlavní funčnost gameplaye, pohyb, získávání bodů...
- předloha miniher: preset, minigame info, end, minigame
- načítání dat z databází pro použití ve hře, úprava dat
- menu: možnost restartu, úpravy zvuků...
- lokální ukládání progresu hráče do paměti (cookies / local)
- minihry: Lucky Shot, Darts, Lucky Roll

**N. Pražáková**
- design: úvodní sekvence, pixel art grafika celé hry
- cutscene, načítání, error page
- úprava responzivity pro menší displeje
- routing: pohyb mezi mapami
- REST endopint, čtení dat pro hru, úprava dat
- minihry: Feeling Lucky, Memory Match
