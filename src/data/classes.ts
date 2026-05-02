export interface Skill {
  id: string;
  name: string;
  nameEn: string;
  type: 'Basic' | 'Special' | 'Passive';
  description: string;
  descriptionEn: string;
  range?: string;
  maxUsesPerBattle?: number;
}

export interface SkillTree {
  namePl: string;
  nameEn: string;
  icon: string;
  skills: Skill[];
}

export interface GameClass {
  id: string;
  namePl: string;
  nameEn: string;
  descriptionPl: string;
  descriptionEn: string;
  icon: string;
  color: string;
  baseStats: {
    strength: number;
    maxHealth: number;
    speed: number;
    dexterity: number;
    knowledge: number;
    vitality: number;
    armor: number;
  };
  trees: SkillTree[];
}

export const classes: GameClass[] = [
  {
    id: 'warrior',
    namePl: 'Wojownik',
    nameEn: 'Warrior',
    descriptionPl: 'Niezłomny mąż z drużyny, mistrz tarczy i miecza. Jego wola życia czyni go niemal niezniszczalnym.',
    descriptionEn: 'Steadfast frontliner, master of shield and sword. His will to live makes him almost indestructible.',
    icon: '⚔️',
    color: '#b22222',
    baseStats: { strength: 6, maxHealth: 16, speed: 4, dexterity: 2, knowledge: 1, vitality: 4, armor: 1 },
    trees: [
      {
        namePl: 'Tarcza i Honor',
        nameEn: 'Shield & Honour',
        icon: '🛡',
        skills: [
          { id: 'blok-tarcza', name: 'Blok Tarczą', nameEn: 'Shield Block', type: 'Special', description: 'Aktywny blok następnego ataku. Wymaga tarczy.', descriptionEn: 'Active block of the next incoming attack. Requires a shield.', range: 'self', maxUsesPerBattle: 1 },
          { id: 'riposta', name: 'Riposta', nameEn: 'Riposte', type: 'Passive', description: 'Po aktywnym bloku wykonujesz kontratak w zwarciu.', descriptionEn: 'After a successful block, perform a melee counter-attack.' },
          { id: 'boska-ochrona', name: 'Boska Ochrona', nameEn: 'Divine Guard', type: 'Special', description: 'Neguje następną otrzymaną instancję obrażeń.', descriptionEn: 'Negates the next damage instance you receive.', range: 'self', maxUsesPerBattle: 1 },
          { id: 'drwina', name: 'Drwina', nameEn: 'Taunt', type: 'Special', description: 'Wrogowie AI priorytetują ten cel. Zyskujesz +1 pancerza.', descriptionEn: 'AI enemies prioritize this target. Gain +1 armour.', range: 'self', maxUsesPerBattle: 1 },
          { id: 'uderzenie-tarcza', name: 'Uderzenie Tarczą', nameEn: 'Shield Bash', type: 'Special', description: 'Atak tarczą ogłuszający cel. Wymaga tarczy.', descriptionEn: 'A shield strike that stuns the target. Requires a shield.', range: '1', maxUsesPerBattle: 1 },
        ],
      },
      {
        namePl: 'Wirtuoz Miecza',
        nameEn: 'Blade Virtuoso',
        icon: '⚔️',
        skills: [
          { id: 'pchnięcie', name: 'Pchnięcie', nameEn: 'Thrust', type: 'Basic', description: 'Zadaj celowi obrażenia równe punktom siły.', descriptionEn: 'Deal damage equal to your Strength.', range: '1' },
          { id: 'szeroki-zamach', name: 'Szeroki Zamach', nameEn: 'Wide Swing', type: 'Special', description: 'Atakujesz trzy pobliskie pola w linii. Obrażenia równe sile.', descriptionEn: 'Attack three adjacent fields in a line. Damage equals Strength.', range: '1', maxUsesPerBattle: 1 },
          { id: 'mlynek', name: 'Młynek', nameEn: 'Whirlwind', type: 'Special', description: 'Atak wszystkich pobliskich pól. Obrażenia równe sile.', descriptionEn: 'Attack all adjacent fields. Damage equals Strength.', range: '1', maxUsesPerBattle: 1 },
          { id: 'fala-uderzeniowa', name: 'Fala Uderzeniowa', nameEn: 'Shockwave', type: 'Special', description: 'Potężny atak z efektem fali odpychającej wrogów.', descriptionEn: 'Powerful attack with a knock-back wave effect.', range: '1', maxUsesPerBattle: 1 },
          { id: 'egzekucja', name: 'Egzekucja', nameEn: 'Execution', type: 'Special', description: 'Zadaje ogromne obrażenia wrogowi poniżej połowy HP.', descriptionEn: 'Deals massive damage to an enemy below half HP.', range: '1', maxUsesPerBattle: 1 },
        ],
      },
      {
        namePl: 'Berserk',
        nameEn: 'Berserker',
        icon: '🔥',
        skills: [
          { id: 'ofiara', name: 'Ofiara', nameEn: 'Sacrifice', type: 'Special', description: 'Tracisz 5 PZ i aktywujesz stan ofiary (lifesteal w następnej turze).', descriptionEn: 'Lose 5 HP and activate Sacrifice (lifesteal next turn).', range: 'self', maxUsesPerBattle: 1 },
          { id: 'szal-bitewny', name: 'Szał Bitewny', nameEn: 'Battle Frenzy', type: 'Passive', description: 'Aktywuje się we Wrotach Śmierci: +1 Siła, +1 Szybkość. Zabicie wroga przywraca 3 PZ.', descriptionEn: 'Triggers at Death\'s Gate: +1 Str, +1 Spd. Killing an enemy restores 3 HP.' },
          { id: 'bitewny-trans', name: 'Bitewny Trans', nameEn: 'Battle Trance', type: 'Special', description: 'Nakłada Bitewny Trans na sojuszników, wzmacniając ich siłę.', descriptionEn: 'Applies Battle Trance to allies, boosting their Strength.', range: 'self', maxUsesPerBattle: 1 },
          { id: 'doskok', name: 'Doskok', nameEn: 'Leap Strike', type: 'Special', description: 'Skaczysz ruchem skoczka szachowego (8 pól). Zepchnięcie jeśli pole zajęte.', descriptionEn: 'Jump in a knight\'s chess move (8 squares). Push if occupied.', range: '1', maxUsesPerBattle: 1 },
          { id: 'masakra', name: 'Masakra', nameEn: 'Massacre', type: 'Special', description: 'Obrażenia od siły i podwójne krwawienie.', descriptionEn: 'Strength damage and double bleeding stacks.', range: '1', maxUsesPerBattle: 1 },
        ],
      },
    ],
  },
  {
    id: 'hunter',
    namePl: 'Łowczyni',
    nameEn: 'Huntress',
    descriptionPl: 'Zwinny strzelec z cieni. Mistrzyni zasadzki i trucizny, razi z dystansu zanim wróg zdąży zareagować.',
    descriptionEn: 'Swift shadow archer. Master of ambush and poison, striking from range before enemies can react.',
    icon: '🏹',
    color: '#2d7a2d',
    baseStats: { strength: 3, maxHealth: 12, speed: 6, dexterity: 7, knowledge: 3, vitality: 2, armor: 0 },
    trees: [
      {
        namePl: 'Łucznictwo',
        nameEn: 'Archery',
        icon: '🏹',
        skills: [
          { id: 'wystrzal', name: 'Wystrzał', nameEn: 'Arrow Shot', type: 'Basic', description: 'Zadaj celowi obrażenia równe punktom zręczności.', descriptionEn: 'Deal damage equal to your Dexterity.', range: '1-3' },
          { id: 'przebijajaca-strzala', name: 'Przebijająca Strzała', nameEn: 'Piercing Arrow', type: 'Special', description: 'Strzała przebija pierwszą zbroję i uderza cel za zręczność.', descriptionEn: 'Arrow pierces armour and hits target for Dexterity.', range: '1-4', maxUsesPerBattle: 1 },
          { id: 'wielostrzal', name: 'Wielostrzał', nameEn: 'Multishot', type: 'Special', description: 'Wystrzeliwujesz trzy strzały w stożku ataku.', descriptionEn: 'Fire three arrows in a cone.', range: '1-3', maxUsesPerBattle: 1 },
          { id: 'strzal-w-glowe', name: 'Strzał w Głowę', nameEn: 'Headshot', type: 'Special', description: 'Bardzo wysoka celność. Podwójne obrażenia przy trafieniu krytycznym.', descriptionEn: 'High accuracy. Double damage on critical hit.', range: '1-4', maxUsesPerBattle: 1 },
          { id: 'czarna-strzala', name: 'Czarna Strzała', nameEn: 'Black Arrow', type: 'Special', description: 'Strzała z magicznym ładunkiem. Nakłada stos spopielenia.', descriptionEn: 'Magically charged arrow. Applies an Ash stack.', range: '1-3', maxUsesPerBattle: 1 },
        ],
      },
      {
        namePl: 'Cień',
        nameEn: 'Shadow',
        icon: '🌑',
        skills: [
          { id: 'zasadzka', name: 'Zasadzka', nameEn: 'Ambush', type: 'Special', description: 'Jeśli atakujesz z ukrycia, podwajasz obrażenia.', descriptionEn: 'If attacking from stealth, deal double damage.', range: '1-3', maxUsesPerBattle: 1 },
          { id: 'postac-cienia', name: 'Postać Cienia', nameEn: 'Shadow Form', type: 'Special', description: 'Stajesz się niewidzialna dla AI przez 1 turę.', descriptionEn: 'Become invisible to AI for 1 turn.', range: 'self', maxUsesPerBattle: 1 },
          { id: 'odskok', name: 'Odskok', nameEn: 'Backstep', type: 'Special', description: 'Natychmiastowy odskok o 2 pola. Zużywa akcję ruchu.', descriptionEn: 'Instant backstep 2 squares. Uses movement action.', range: 'self', maxUsesPerBattle: 1 },
          { id: 'poziome-ciecie', name: 'Poziome Cięcie', nameEn: 'Horizontal Slash', type: 'Special', description: 'Szybkie cięcie w zwarciu z efektem krwawienia.', descriptionEn: 'Quick melee slash with bleeding effect.', range: '1', maxUsesPerBattle: 1 },
          { id: 'lasso', name: 'Lasso', nameEn: 'Lasso', type: 'Special', description: 'Unieruchamia cel na 1 turę z dystansu.', descriptionEn: 'Immobilizes the target for 1 turn from range.', range: '1-3', maxUsesPerBattle: 1 },
        ],
      },
      {
        namePl: 'Alchemia',
        nameEn: 'Alchemy',
        icon: '⚗️',
        skills: [
          { id: 'trujaca-strzala', name: 'Trująca Strzała', nameEn: 'Poison Arrow', type: 'Special', description: 'Strzała nakłada 3 stosy trucizny na cel.', descriptionEn: 'Arrow applies 3 poison stacks to the target.', range: '1-3', maxUsesPerBattle: 1 },
          { id: 'petarda-z-prochu-strzelniczego', name: 'Petarda Prochowa', nameEn: 'Powder Bomb', type: 'Special', description: 'Wybuch w obszarze 3x3. Obrażenia ignorują pancerz.', descriptionEn: 'Area explosion 3x3. Damage ignores armour.', range: '1-3', maxUsesPerBattle: 1 },
          { id: 'petarda-hukowa', name: 'Petarda Hukowa', nameEn: 'Flashbang', type: 'Special', description: 'Ogłuszenie wrogów w pobliżu wybuchu na 1 turę.', descriptionEn: 'Stuns nearby enemies for 1 turn.', range: '1-3', maxUsesPerBattle: 1 },
          { id: 'adrenalina', name: 'Adrenalina', nameEn: 'Adrenaline', type: 'Special', description: 'Przywraca akcję ruchu i dodaje +2 do zręczności na turę.', descriptionEn: 'Restores movement action and +2 Dexterity for the turn.', range: 'self', maxUsesPerBattle: 1 },
          { id: 'rzut-bola', name: 'Rzut Bola', nameEn: 'Bola Throw', type: 'Special', description: 'Unieruchamia cel na 1 turę splątanymi linami.', descriptionEn: 'Entangles the target, immobilizing for 1 turn.', range: '1-3', maxUsesPerBattle: 1 },
        ],
      },
    ],
  },
  {
    id: 'mage',
    namePl: 'Mag',
    nameEn: 'Mage',
    descriptionPl: 'Mistrz arkanicznych sił. Panuje nad ogniem, lodem i tajemnymi znamieniami, niszcząc wrogów zaklęciami o wielkim zasięgu.',
    descriptionEn: 'Master of arcane forces. Commands fire, ice and mystical marks, destroying enemies with wide-range spells.',
    icon: '✨',
    color: '#4a2d8a',
    baseStats: { strength: 2, maxHealth: 10, speed: 5, dexterity: 2, knowledge: 8, vitality: 2, armor: 0 },
    trees: [
      {
        namePl: 'Ogień',
        nameEn: 'Fire',
        icon: '🔥',
        skills: [
          { id: 'kula-ognia', name: 'Kula Ognia', nameEn: 'Fireball', type: 'Special', description: 'Potężny pocisk ognisty zadający obrażenia od wiedzy.', descriptionEn: 'Powerful fire projectile dealing Knowledge damage.', range: '1-4', maxUsesPerBattle: 1 },
          { id: 'podpalenie', name: 'Podpalenie', nameEn: 'Ignite', type: 'Special', description: 'Nakłada Spopielenie — nie redukowane z turą.', descriptionEn: 'Applies Ash — stacks do not reduce each turn.', range: '1-3', maxUsesPerBattle: 1 },
          { id: 'ognisty-podmuch', name: 'Ognisty Podmuch', nameEn: 'Flame Breath', type: 'Special', description: 'Stożek ognia atakujący kilka celów.', descriptionEn: 'Cone of flame hitting multiple targets.', range: '1-2', maxUsesPerBattle: 1 },
          { id: 'eksplozja-mocy', name: 'Eksplozja Mocy', nameEn: 'Power Surge', type: 'Special', description: 'Ogromny wybuch magiczny w obszarze wokół maga.', descriptionEn: 'Massive magic explosion around the mage.', range: '1', maxUsesPerBattle: 1 },
          { id: 'inkantacja-i', name: 'Inkantacja I', nameEn: 'Incantation I', type: 'Special', description: 'Kanalizacja zaklęcia wzmacniająca następny atak magiczny.', descriptionEn: 'Channelling that empowers the next magic attack.', range: 'self', maxUsesPerBattle: 1 },
        ],
      },
      {
        namePl: 'Lód',
        nameEn: 'Ice',
        icon: '❄️',
        skills: [
          { id: 'lodowy-pocisk', name: 'Lodowy Pocisk', nameEn: 'Ice Bolt', type: 'Basic', description: 'Zadaj obrażenia od wiedzy i spowolnij cel.', descriptionEn: 'Deal Knowledge damage and slow the target.', range: '1-3' },
          { id: 'mrozny-krag', name: 'Mroźny Krąg', nameEn: 'Frost Ring', type: 'Special', description: 'Zamraża obszar wokół maga na 1 turę.', descriptionEn: 'Freezes the area around the mage for 1 turn.', range: '1', maxUsesPerBattle: 1 },
          { id: 'lodowa-bariera', name: 'Lodowa Bariera', nameEn: 'Ice Barrier', type: 'Special', description: 'Tworzy tarczę lodową pochłaniającą obrażenia.', descriptionEn: 'Creates an ice shield absorbing incoming damage.', range: 'self', maxUsesPerBattle: 1 },
          { id: 'uspienie', name: 'Uśpienie', nameEn: 'Sleep', type: 'Special', description: 'Usypia cel na 1 turę. Budzi się przy ataku.', descriptionEn: 'Puts target to sleep for 1 turn. Woken by damage.', range: '1-3', maxUsesPerBattle: 1 },
          { id: 'przeladowanie', name: 'Przeładowanie', nameEn: 'Overload', type: 'Special', description: 'Przywraca użycie jednej specjalnej umiejętności.', descriptionEn: 'Restores one use of a special skill.', range: 'self', maxUsesPerBattle: 1 },
        ],
      },
      {
        namePl: 'Mag Bojowy',
        nameEn: 'Battle Mage',
        icon: '⚡',
        skills: [
          { id: 'magiczny-pocisk', name: 'Magiczny Pocisk', nameEn: 'Magic Missile', type: 'Basic', description: 'Szybki magiczny atak z dystansu. Obrażenia od wiedzy.', descriptionEn: 'Quick ranged magic attack. Knowledge damage.', range: '1-4' },
          { id: 'teleportacja', name: 'Teleportacja', nameEn: 'Teleport', type: 'Special', description: 'Błyskawiczne teleportowanie na wybraną pozycję.', descriptionEn: 'Instant teleport to a chosen position.', range: '1-5', maxUsesPerBattle: 1 },
          { id: 'absorpcja', name: 'Absorpcja', nameEn: 'Absorption', type: 'Passive', description: 'Przy śmierci wroga absorbuje część jego energii życiowej.', descriptionEn: 'On enemy death, absorb part of their life energy.' },
          { id: 'magiczna-tarcza', name: 'Magiczna Tarcza', nameEn: 'Magic Shield', type: 'Special', description: 'Tarcza magiczna absorbująca 3 obrażenia.', descriptionEn: 'Magic shield absorbing 3 damage.', range: 'self', maxUsesPerBattle: 1 },
          { id: 'zaczarowane-ostrze', name: 'Zaczarowane Ostrze', nameEn: 'Enchanted Blade', type: 'Special', description: 'Wzmacnia broń magią — następny atak w zwarciu zadaje obrażenia od wiedzy.', descriptionEn: 'Enchant weapon — next melee attack deals Knowledge damage.', range: 'self', maxUsesPerBattle: 1 },
        ],
      },
    ],
  },
];
