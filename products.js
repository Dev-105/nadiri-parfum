/* ==========================================================================
   ملف المنتجات والباقات وعطور النيش (products.js)
   يتم ربطه مباشرة أو استضافته على GitHub Raw
   ========================================================================== */

// 1. عطور النيش الفاخرة (PARFUMS DE NICHE)
// يبدأ بالمعرف 0 كمرجع، إذا جعلت المصفوفة فارغة [] يختفي القسم بالكامل من الموقع
window.nichePerfumes = [
  { 
    id: 0, 
    name: "Baccarat Rouge 540 Extrait", 
    des: "عطر النخبة العالمي، نفحات فاخرة من العنبر والياسمين والزعفران المركز بفوحان وثبات أسطوري.", 
    price: 340, 
    price10ml: 340, 
    price5ml: 180, 
    rate: 5, 
    gender: "unisex", 
    type: "all-season", 
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 101, 
    name: "Aventus Creed", 
    des: "ملك عطور النيش الرجالية، افتتاحية أناناس دخانية فاخرة تمنحك إطلالة القادة والشخصيات الرفيعة.", 
    price: 320, 
    price10ml: 320, 
    price5ml: 170, 
    rate: 5, 
    gender: "homme", 
    type: "all-season", 
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 102, 
    name: "Oud Maracujá Maison Crivelli", 
    des: "تحفة نيش ساحرة تدمج بين فاكهة الباشن فروت الاستوائية والعود النقي الفخم بأداء نفاث واستثنائي.", 
    price: 350, 
    price10ml: 350, 
    price5ml: 190, 
    rate: 5, 
    gender: "unisex", 
    type: "winter", 
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 103, 
    name: "Grand Soir Maison Francis Kurkdjian", 
    des: "عطر الليالي الملكية، مزيج العنبر الدافئ والفانيليا الفاخرة لإحساس لا يُنسى من الرقي والفخامة.", 
    price: 310, 
    price10ml: 310, 
    price5ml: 165, 
    rate: 5, 
    gender: "unisex", 
    type: "winter", 
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80" 
  }
];

// 2. قائمة العطور العادية الأساسية والجديدة (تباع كعينات Decant 5ml و 10ml + Old Spice الأصلي)
window.perfumes = [
  { id: 1, name: "Stronger With You Intensely", des: "A warm, sweet and intense fragrance with a rich and seductive character.", price: 120, price10ml: 120, price5ml: 70, rate: 5, gender: "homme", type: "winter" },
  { id: 2, name: "Paradise Garden", des: "A fresh and elegant fragrance with a tropical and captivating character.", price: 135, price10ml: 135, price5ml: 80, rate: 4.5, gender: "homme", type: "summer" },
  { id: 3, name: "Azzaro Wanted By Night", des: "A warm and spicy fragrance with a powerful and sophisticated character.", price: 120, price10ml: 120, price5ml: 70, rate: 5, gender: "homme", type: "winter" },
  { id: 4, name: "Le Beau Le Parfum", des: "A sensual and fresh fragrance with an exotic and elegant character.", price: 135, price10ml: 135, price5ml: 80, rate: 4.5, gender: "homme", type: "summer" },
  { id: 5, name: "Y Eau de Parfum", des: "A fresh, aromatic and modern fragrance with a confident masculine character.", price: 125, price10ml: 125, price5ml: 70, rate: 4.5, gender: "homme", type: "all-season" },
  { id: 6, name: "9 PM Rebel", des: "A sweet and energetic fragrance with a youthful and attractive character.", price: 70, price10ml: 70, price5ml: 40, rate: 4, gender: "homme", type: "winter" },
  { id: 7, name: "Valentino Born In Roma Intense", des: "An intense and elegant fragrance with a warm, modern and sophisticated character.", price: 130, price10ml: 130, price5ml: 80, rate: 5, gender: "homme", type: "winter" },
  { id: 8, name: "Le Male Le Parfum", des: "A warm, spicy and elegant fragrance with a luxurious masculine character.", price: 135, price10ml: 135, price5ml: 80, rate: 5, gender: "homme", type: "winter" },
  { id: 9, name: "Le Male Elixir", des: "A sweet, warm and powerful fragrance with an addictive character.", price: 135, price10ml: 135, price5ml: 80, rate: 5, gender: "homme", type: "winter" },
  { id: 10, name: "Sauvage Eau de Parfum", des: "A fresh, spicy and powerful fragrance with a timeless masculine character.", price: 130, price10ml: 130, price5ml: 70, rate: 5, gender: "homme", type: "all-season" },
  { id: 11, name: "Divine Gaultier", des: "An elegant and sensual fragrance with a distinctive and luxurious character.", price: 120, price10ml: 120, price5ml: 70, rate: 4.5, gender: "femme", type: "all-season" },
  { id: 12, name: "La Belle Paradise Garden", des: "A floral, sweet and feminine fragrance with an elegant tropical character.", price: 150, price10ml: 150, price5ml: 80, rate: 5, gender: "femme", type: "summer" },
  { id: 13, name: "Vulcan Feu", des: "A fresh and vibrant fragrance with a modern and energetic character.", price: 50, price10ml: 50, price5ml: 30, rate: 4, gender: "homme", type: "summer" },
  { id: 14, name: "Burberry Her", des: "A sweet, fruity and feminine fragrance with an elegant and playful character.", price: 120, price10ml: 120, price5ml: 70, rate: 4.5, gender: "femme", type: "all-season" },
  { id: 15, name: "Light Blue", des: "A fresh, citrusy and clean fragrance perfect for warm and sunny days.", price: 95, price10ml: 95, price5ml: 50, rate: 4.5, gender: "femme", type: "summer" },
  { id: 16, name: "Prada Paradoxe", des: "A floral and elegant fragrance with a modern, feminine and sophisticated character.", price: 135, price10ml: 135, price5ml: 70, rate: 5, gender: "femme", type: "all-season" },
  { id: 17, name: "Khamrah Qahwa", des: "A rich, warm and sweet fragrance with coffee, spices and an addictive character.", price: 50, price10ml: 50, price5ml: 30, rate: 5, gender: "unisex", type: "winter" },
  
  // الإضافات الجديدة
  { id: 18, name: "Herch Lahab", des: "A fiery and captivating oriental fragrance with a bold, smoky character.", price: 80, price10ml: 80, price5ml: 50, rate: 4.5, gender: "homme", type: "winter" },
  { id: 19, name: "Freez in Flames", des: "A thrilling contrast of icy freshness and warm aromatic spicy notes.", price: 70, price10ml: 70, price5ml: 40, rate: 4.5, gender: "homme", type: "all-season" },
  { id: 20, name: "9 PM Night Out", des: "An enchanting and magnetic evening scent crafted for unforgettable nights.", price: 80, price10ml: 80, price5ml: 50, rate: 5, gender: "homme", type: "winter" },
  
  // مزيل العرق Old Spice الأصلي المعتمد بسعر 90 DH (يقرأ صورته 99.jpg من مجلد parfums)
  { 
    id: 99, 
    name: "Old Spice Original Deodorant Stick", 
    des: "Classic fresh masculine deodorant for 24h ultimate protection.", 
    price: 90, 
    price10ml: 90, 
    price5ml: 90, 
    rate: 5, 
    gender: "homme", 
    type: "all-season", 
    isDeo: true,
    image: "./parfums/99.jpg" 
  }
].map(p => ({
  ...p,
  image: p.image || `./parfums/${p.id}.jpg`
}));

// 3. باقات التوفير الحصرية (PACKS)
// تم حساب مجاميع أسعار الـ 10ml تلقائياً مع تسعيرة Old Spice الجديدة (90 DH)
window.perfumePacks = [
  {
    id: "pack-1",
    gender: "homme",
    title: "Pack Royal: Stronger With You + Valentino + Old Spice",
    itemIds: [1, 7, 99], // 120 + 130 + 90 = 340 DH (سعر الباقة 255 DH - توفير 85 DH)
    packPrice: 255,
    tag: "الأكثر طلباً 🔥"
  },
  {
    id: "pack-2",
    gender: "homme",
    title: "Pack Daily Charme: 9 PM Rebel + Stronger With You + Old Spice",
    itemIds: [6, 1, 99], // 70 + 120 + 90 = 280 DH (سعر الباقة 200 DH - توفير 80 DH)
    packPrice: 200,
    tag: "قيمة استثنائية 💥"
  },
  {
    id: "pack-3",
    gender: "homme",
    title: "Pack Night Duo: Azzaro Wanted By Night + Valentino",
    itemIds: [3, 7], // 120 + 130 = 250 DH (سعر الباقة 220 DH - توفير 30 DH)
    packPrice: 220,
    tag: "إطلالة السهرات 🌙"
  },
  {
    id: "pack-4",
    gender: "homme",
    title: "Pack Fresh & Sweet: Le Beau Le Parfum + 9 PM Rebel",
    itemIds: [4, 6], // 135 + 70 = 205 DH (سعر الباقة 185 DH - توفير 20 DH)
    packPrice: 185,
    tag: "توفير منعش ☀️"
  },
  {
    id: "pack-5",
    gender: "homme",
    title: "Pack Power Trio: Khamrah Qahwa + 9 PM Rebel + Valentino",
    itemIds: [17, 6, 7], // 50 + 70 + 130 = 250 DH (سعر الباقة 220 DH - توفير 30 DH)
    packPrice: 220,
    tag: "مزيج فاخر 👑"
  },
  {
    id: "pack-6",
    gender: "femme",
    title: "Pack Queen: La Belle Paradise Garden + Divine Gaultier",
    itemIds: [12, 11], // 150 + 120 = 270 DH (سعر الباقة 220 DH - توفير 50 DH)
    packPrice: 220,
    tag: "الأناقة والأنوثة 🌸"
  }
];