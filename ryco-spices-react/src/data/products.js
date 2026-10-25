export const products = [
  {
    id: 'nutmeg',
    name: 'Indonesian Nutmeg Whole',
    scientific: 'Myristica fragrans',
    category: 'Nutmeg',
    badge: 'Flagship',
    image: '/images/nutmeg_whole.webp',
    shortDesc: 'High essential oil content whole nutmeg seeds, sun-dried and hand-picked from the historic Maluku and Banda Neira volcanic soils.',
    origin: 'Banda Neira & Ambon (Maluku), North Sulawesi',
    specifications: [
      { label: 'Botanical Name', value: 'Myristica fragrans Houtt.' },
      { label: 'Moisture Content', value: 'Max 10.0% (Typically 8.5% – 9.2%)' },
      { label: 'Volatile Essential Oil', value: 'Min 7.0% (Grade A runs 9.5% – 11.8%)' },
      { label: 'Aflatoxin (B1 + Total)', value: 'Strictly complies with EU 2023/915 (< 5 ppb B1, < 10 ppb total)' },
      { label: 'Foreign Matter', value: 'Max 0.5% (Hand-sorted)' },
      { label: 'Extraneous Matter', value: 'Virtually Free (< 0.2%)' },
      { label: 'Available Grades', value: 'ABCD (Sound), Grade B, FAQ, CG1' },
      { label: 'Packaging', value: '25kg / 50kg food-grade multi-wall paper bags or export jute bags with poly-liner' }
    ],
    grades: [
      {
        code: 'ABCD',
        title: 'Grade A (ABCD Sound)',
        badgeClass: 'grade-a',
        badgeText: 'Grade A Premium',
        features: [
          'Sound whole kernels without shell or holes',
          'Heavy density: 110–130 nuts per lb',
          'Volatile oil content: > 9.0%',
          'Zero insect infestation or internal mould',
          'Preferred for premium whole retail & pharma extraction'
        ]
      },
      {
        code: 'B',
        title: 'Grade B (Sound B)',
        badgeClass: 'grade-b',
        badgeText: 'Grade B Export',
        features: [
          'Intact sound whole nutmeg with minor surface wrinkles',
          'Density: 130–160 nuts per lb',
          'Volatile oil content: > 7.5%',
          'Strictly moisture-controlled under 10%',
          'Ideal for commercial food processors & spice blends'
        ]
      },
      {
        code: 'FAQ',
        title: 'Grade FAQ / BWP',
        badgeClass: 'grade-faq',
        badgeText: 'Industrial / FAQ',
        features: [
          'Fair Average Quality / Broken Wormy Punky sorted',
          'Sound pieces and light kernel halves',
          'High oil yield for steam distillation',
          'Fumigated & tested negative for contaminants',
          'Economical grade for essential oil and oleoresin distillers'
        ]
      }
    ]
  },
  {
    id: 'mace',
    name: 'Mace (Bunga Pala)',
    scientific: 'Myristica fragrans aril',
    category: 'Mace',
    badge: 'Available',
    image: '/images/mace.webp',
    shortDesc: 'The brilliant crimson-orange aril surrounding the nutmeg shell. Highly aromatic with sweet, refined citrus-pine warmth.',
    origin: 'Banda Neira (Maluku), Siau Island (North Sulawesi)',
    specifications: [
      { label: 'Botanical Source', value: 'Dried aril of Myristica fragrans' },
      { label: 'Moisture Content', value: 'Max 10.0% (Average 8.0% – 9.0%)' },
      { label: 'Volatile Essential Oil', value: 'Min 8.0% – 12.0%' },
      { label: 'Color Profile', value: 'Bright yellowish-red to rich orange-amber' },
      { label: 'Broken Pieces', value: '< 5% for Grade 1 Whole Flowers' },
      { label: 'Foreign Matter', value: 'Max 0.5%' },
      { label: 'Packaging', value: '10kg / 20kg export cartons with double sealed polyethylene inner liners' }
    ],
    grades: [
      {
        code: 'HP1',
        title: 'Banda Hand-Picked Whole Flower (HP1)',
        badgeClass: 'grade-a',
        badgeText: 'Grade 1 Premium',
        features: [
          'Complete intact whole double blades/flowers',
          'Luminous red-orange hue with intense fragrance',
          'Essential oil concentration: 10%–12%',
          'Sorted piece-by-piece for zero dark discolored blades',
          'Premium culinary grade for European gourmet markets'
        ]
      },
      {
        code: 'STD',
        title: 'Standard Whole & Large Broken',
        badgeClass: 'grade-b',
        badgeText: 'Grade B Standard',
        features: [
          'Clean large mace fragments and whole pieces',
          'Natural amber-gold coloration',
          'Essential oil concentration: 8%–10%',
          'Free from dust and foreign organic matter',
          'Widely used in deli meat curing and seasoning salts'
        ]
      },
      {
        code: 'BM',
        title: 'Broken Mace (Siftings / Distillation Grade)',
        badgeClass: 'grade-faq',
        badgeText: 'Distillation Grade',
        features: [
          'Uniform clean flakes and coarse pieces',
          'Rich volatile aroma profile',
          'Moisture stabilized under 9.5%',
          'Cost-effective high-yield source for spice extracts',
          'Designed for oleoresin manufacturing'
        ]
      }
    ]
  },
  {
    id: 'cloves',
    name: 'Indonesian Cloves (Cengkeh)',
    scientific: 'Syzygium aromaticum',
    category: 'Cloves',
    badge: 'Available',
    image: '/images/cloves.webp',
    shortDesc: 'Aromatic unopened flower buds with plump heads, deep reddish-brown color, and exceptional natural eugenol concentration.',
    origin: 'Sulawesi Highlands, Maluku, East Java',
    specifications: [
      { label: 'Botanical Name', value: 'Syzygium aromaticum (L.) Merr. & L.M.Perry' },
      { label: 'Moisture Content', value: 'Max 11.0% – 12.0%' },
      { label: 'Eugenol / Volatile Oil', value: 'Min 18.0% – 20.0% (Natural potency)' },
      { label: 'Headless Cloves', value: 'Max 2.0% (Lalpari) / Max 5.0% (Standard)' },
      { label: 'Stems / Mother Cloves', value: 'Max 1.0% / Max 0.5%' },
      { label: 'Foreign Matter', value: '< 0.5%' },
      { label: 'Packaging', value: '25kg / 50kg polypropylene or jute bags with moisture barrier' }
    ],
    grades: [
      {
        code: 'LP',
        title: 'Lalpari Hand-Picked Grade A',
        badgeClass: 'grade-a',
        badgeText: 'Lalpari Grade 1',
        features: [
          'Uniform reddish-brown color with intact whole flower heads',
          'Highest natural eugenol content (> 19%)',
          'Headless buds strictly restricted under 2%',
          'Zero baby cloves or extraneous stems',
          'Top choice for international confectionary and tobacco blending'
        ]
      },
      {
        code: 'FAQ-C',
        title: 'FAQ Export Grade',
        badgeClass: 'grade-b',
        badgeText: 'FAQ Grade',
        features: [
          'Sound dried flower buds with strong pungent aroma',
          'Headless buds under 5%',
          'Volatile oil content: > 17%',
          'Cleaned and sifted to remove dust and stems',
          'Reliable bulk spice for food seasonings & pickling'
        ]
      },
      {
        code: 'CG1',
        title: 'Clove Stems & Distillation Flakes',
        badgeClass: 'grade-faq',
        badgeText: 'Distillation Cut',
        features: [
          'Clean dried clove stems and sorted bud remnants',
          'High residual eugenol yield for essential oil distillation',
          'Cleaned and packed dry to prevent fungal growth',
          'Exported in standard 50kg press bales or bags',
          'Raw material for pharmaceutical clove oil producers'
        ]
      }
    ]
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon / Cassia Vera',
    scientific: 'Cinnamomum burmannii',
    category: 'Cinnamon',
    badge: 'Available',
    image: '/images/cinnamon.webp',
    shortDesc: 'Korintje cinnamon quills and cut sticks celebrated worldwide for sweet woody fragrance, smooth oils, and deep reddish color.',
    origin: 'Kerinci (Sumatra), Padang, West Java',
    specifications: [
      { label: 'Botanical Name', value: 'Cinnamomum burmannii (Nees & T.Nees) Blume' },
      { label: 'Moisture Content', value: 'Max 12.0% – 13.5%' },
      { label: 'Volatile Essential Oil', value: 'Min 2.0% – 3.5%' },
      { label: 'Cinnamaldehyde Content', value: 'High purity sweet-aromatic profile (> 80% of oil)' },
      { label: 'Stick Length', value: '8cm, 10cm, or 15cm custom clean cut sticks (AA Grade)' },
      { label: 'Thickness', value: '1.0mm – 2.5mm' },
      { label: 'Packaging', value: '10kg / 25kg export master cartons or tight tied bundles' }
    ],
    grades: [
      {
        code: 'AA',
        title: 'Cassia Vera AA Sticks (8cm / 10cm)',
        badgeClass: 'grade-a',
        badgeText: 'Grade AA Quills',
        features: [
          'Double rolled hollow quills scraped clean of outer bark',
          'Uniform length (8cm, 10cm, or 15cm) with clean cuts',
          'Moisture strictly stabilized under 12%',
          'Vibrant reddish-brown interior and exterior',
          'Premium display spice for retail jars and high-end tea blends'
        ]
      },
      {
        code: 'A-SPLIT',
        title: 'Cassia Vera A Splits & Cut',
        badgeClass: 'grade-b',
        badgeText: 'Grade A Splits',
        features: [
          'Single rolled or cleanly broken thick bark quills',
          'Clean scraped with high sweetness and warmth',
          'Volatile oil content: > 2.5%',
          'Free from mold, rot, or extraneous bark',
          'Ideal for bakery ingredients and ground cinnamon processors'
        ]
      },
      {
        code: 'KB',
        title: 'Broken Cassia (Kaastock / Distillation Cut)',
        badgeClass: 'grade-faq',
        badgeText: 'Broken / Milling',
        features: [
          'Clean broken bark pieces for industrial milling',
          'Intense aroma with high cinnamaldehyde concentration',
          'Double magnet-cleaned and sifted for stone free quality',
          'Economic bulk format for extraction & industrial bakeries',
          'Supplied in 25kg / 50kg woven poly bags'
        ]
      }
    ]
  }
];

export const packagingOptions = [
  {
    title: 'Woven Jute & Poly Bags',
    icon: 'bi-bag-check',
    items: [
      'Traditional 25kg and 50kg breathable natural jute sacks',
      'Food-grade polyethylene (PE) inner liner for moisture insulation',
      'Tamper-evident stitched seals with waterproof shipping labels',
      'Optimal for bulk maritime container stowage'
    ]
  },
  {
    title: 'Heavy Duty Master Cartons',
    icon: 'bi-box-seam',
    items: [
      '5-ply corrugated export cartons (10kg, 15kg, 20kg, 25kg)',
      'Double hermetic inner bag or vacuum seal for delicate mace flowers',
      'Palletized with stretch wrap and corner protectors for air freight',
      'Custom buyer branding and barcodes available upon request'
    ]
  },
  {
    title: 'Controlled Container Loading',
    icon: 'bi-truck',
    items: [
      '20ft FCL (10–14 MT) and 40ft High Cube FCL (20–25 MT)',
      'Cargo-safe container desiccants to prevent container sweat',
      'Pre-shipment Methyl Bromide or Phosphine fumigation with certificate',
      'Direct drayage to Jakarta (Tanjung Priok) or Surabaya ports'
    ]
  }
];
