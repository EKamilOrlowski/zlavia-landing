export interface Monster {
  id: string;
  namePl: string;
  nameEn: string;
  descriptionPl: string;
  descriptionEn: string;
  icon: string;
  lore: string;
  loreEn: string;
  stats: {
    strength: number;
    maxHealth: number;
    speed: number;
    dexterity: number;
    knowledge: number;
    vitality: number;
    armor: number;
  };
  abilities: { namePl: string; nameEn: string; descPl: string; descEn: string }[];
  threat: 'low' | 'medium' | 'high' | 'deadly';
}

export const monsters: Monster[] = [
  {
    id: 'akolita-welesa',
    namePl: 'Akolita Welesa',
    nameEn: 'Acolyte of Veles',
    descriptionPl: 'Sługa boga zaświatów. Potrafi przywoływać duchy i rzucać klątwy rozkładu.',
    descriptionEn: 'Servant of the god of the underworld. Can summon spirits and cast decay curses.',
    icon: '💀',
    lore: 'Weles wziął go pod swoje skrzydła, gdy ten sprzedał duszę w zamian za moc nad śmiercią.',
    loreEn: 'Veles took him under his wing when he sold his soul in exchange for power over death.',
    stats: { strength: 5, maxHealth: 18, speed: 4, dexterity: 2, knowledge: 6, vitality: 4, armor: 2 },
    abilities: [
      { namePl: 'Dotyk Śmierci', nameEn: 'Touch of Death', descPl: 'Atak oparty o siłę.', descEn: 'Strength-based melee attack.' },
      { namePl: 'Klątwa Rozkładu', nameEn: 'Curse of Decay', descPl: 'Nakłada 3 stosy trucizny z dystansu.', descEn: 'Applies 3 poison stacks from range.' },
      { namePl: 'Rytuał Przyzwania', nameEn: 'Summoning Ritual', descPl: 'Przywołuje wilki gdy HP spada do połowy.', descEn: 'Summons wolves when HP drops to half.' },
    ],
    threat: 'high',
  },
  {
    id: 'bagienna-baba',
    namePl: 'Bagienna Baba',
    nameEn: 'Swamp Hag',
    descriptionPl: 'Starożytna wiedźma zamieszkująca trzęsawiska. Jej śpiew mrozi krew w żyłach.',
    descriptionEn: 'Ancient witch dwelling in bogs. Her song chills blood in veins.',
    icon: '🧙',
    lore: 'Nikt nie pamięta, kiedy Bagienna Baba zamieszkała w bagnach. Mówią, że była tu zanim przyszli ludzie.',
    loreEn: 'No one remembers when the Swamp Hag came to the bogs. They say she was there before the people came.',
    stats: { strength: 2, maxHealth: 12, speed: 2, dexterity: 1, knowledge: 2, vitality: 3, armor: 0 },
    abilities: [
      { namePl: 'Trująca Maź', nameEn: 'Toxic Ooze', descPl: 'Atak w zwarciu + podwójne zatrucie.', descEn: 'Melee attack + double poison.' },
      { namePl: 'Przerażający Skowyt', nameEn: 'Terrifying Shriek', descPl: 'Nakłada strach na cel.', descEn: 'Applies Fear to target.' },
    ],
    threat: 'medium',
  },
  {
    id: 'albast',
    namePl: 'Albast',
    nameEn: 'Albast',
    descriptionPl: 'Duch niepogrzebanych — błąka się po świecie żywych, siejąc terror i szaleństwo.',
    descriptionEn: 'Spirit of the unburied — wanders the land of the living, sowing terror and madness.',
    icon: '👻',
    lore: 'Albast nie może zaznać spokoju dopóki jego kości nie zostaną należycie pochowane.',
    loreEn: 'Albast cannot rest until its bones are properly buried.',
    stats: { strength: 4, maxHealth: 10, speed: 3, dexterity: 2, knowledge: 4, vitality: 3, armor: 0 },
    abilities: [
      { namePl: 'Dotyk Śmierci', nameEn: 'Touch of Death', descPl: 'Atak w zwarciu oparty o siłę.', descEn: 'Strength melee attack.' },
      { namePl: 'Spętanie', nameEn: 'Binding', descPl: 'Unieruchamia cel na 1 turę.', descEn: 'Immobilizes target for 1 turn.' },
      { namePl: 'Terror', nameEn: 'Terror', descPl: 'Nakłada terror — cel musi uciec.', descEn: 'Applies terror — target must flee.' },
    ],
    threat: 'medium',
  },
  {
    id: 'bagniak',
    namePl: 'Bagniak',
    nameEn: 'Bog Creature',
    descriptionPl: 'Masywna istota z bagien, powolna lecz nieugięta. Jej ciało jest jak skała.',
    descriptionEn: 'Massive bog creature, slow but unyielding. Its body is like stone.',
    icon: '🐊',
    lore: 'Bagniak wyrasta z samego bagna — jakby ziemia sama uformowała potwora by bronić swego terytorium.',
    loreEn: 'The Bog Creature rises from the bog itself — as if the earth formed a monster to defend its territory.',
    stats: { strength: 4, maxHealth: 16, speed: 1, dexterity: 1, knowledge: 1, vitality: 4, armor: 0 },
    abilities: [
      { namePl: 'Pchnięcie', nameEn: 'Thrust', descPl: 'Prosty atak w zwarciu.', descEn: 'Simple melee thrust.' },
      { namePl: 'Terror', nameEn: 'Terror', descPl: 'Przerażający ryk dezorientujący wrogów.', descEn: 'Terrifying roar disorienting enemies.' },
    ],
    threat: 'low',
  },
  {
    id: 'wilk',
    namePl: 'Wilk',
    nameEn: 'Wolf',
    descriptionPl: 'Szybkie i bezwzględne zwierzę. Groźniejszy w stadzie niż sam.',
    descriptionEn: 'Fast and relentless predator. More dangerous in a pack than alone.',
    icon: '🐺',
    lore: 'Wilki z lasów Slavii są większe od tych znanych na zachodzie. Mówią, że Perun je pobłogosławił.',
    loreEn: 'Wolves from the Zlavia forests are larger than those known in the west. They say Perun blessed them.',
    stats: { strength: 1, maxHealth: 2, speed: 5, dexterity: 2, knowledge: 0, vitality: 1, armor: 0 },
    abilities: [
      { namePl: 'Rozdarcie', nameEn: 'Rend', descPl: 'Szybki atak pazurami nakładający krwawienie.', descEn: 'Quick claw attack applying bleeding.' },
    ],
    threat: 'low',
  },
];
