export type Language = 'en' | 'ar';

export interface SocialStat {
  id: string;
  platform: 'facebook' | 'instagram' | 'tiktok';
  nameEn: string;
  nameAr: string;
  value: string;
  numericValue: number;
  labelEn: string;
  labelAr: string;
  status: 'verified' | 'preliminary';
  sourceEn: string;
  sourceAr: string;
  url: string;
}

export interface PortfolioItem {
  id: string;
  reelId: string;
  url: string;
  category: 'sports' | 'retail' | 'tourism' | 'restaurants';
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  highlightEn: string;
  highlightAr: string;
  thumbnailUrl?: string;
  isDuplicate?: boolean;
}

export interface AdvertisingOpportunity {
  id: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  deliverablesEn: string[];
  deliverablesAr: string[];
  icon: string;
  focusEn: string;
  focusAr: string;
}

export interface CommercialPackage {
  id: string;
  nameEn: string;
  nameAr: string;
  tierEn: string;
  tierAr: string;
  priceAmount: number;
  currencyEn: string;
  currencyAr: string;
  priceDisplayEn: string;
  priceDisplayAr: string;
  platforms: ('facebook' | 'instagram' | 'tiktok')[];
  descriptionEn: string;
  descriptionAr: string;
  recommended?: boolean;
}

export interface PresentationData {
  meta: {
    agencyName: string;
    agencyWebsite: string;
    agencyLogo: string;
    creatorNameEn: string;
    creatorNameAr: string;
    creatorPhotos: {
      photo1: string;
      photo2: string;
    };
    socialLinks: {
      instagram: string;
      facebook: string;
      tiktok: string;
    };
    contact: {
      email: string;
      whatsapp: string;
      whatsappNumber?: string;
      whatsappInternational?: string;
      salesOfficeEn: string;
      salesOfficeAr: string;
    };
  };
  hero: {
    overtitleEn: string;
    overtitleAr: string;
    titleEn: string;
    titleAr: string;
    headlineEn: string;
    headlineAr: string;
    supportingEn: string;
    supportingAr: string;
    ctaPrimaryEn: string;
    ctaPrimaryAr: string;
    ctaSecondaryEn: string;
    ctaSecondaryAr: string;
    viewsHighlight: {
      number: string;
      labelEn: string;
      labelAr: string;
      subtextEn: string;
      subtextAr: string;
      periodEn: string;
      periodAr: string;
    };
  };
  meetCreators: {
    titleEn: string;
    titleAr: string;
    subtitleEn: string;
    subtitleAr: string;
    bioParagraphsEn: string[];
    bioParagraphsAr: string[];
    corePillarsEn: { title: string; desc: string }[];
    corePillarsAr: { title: string; desc: string }[];
  };
  socialStats: SocialStat[];
  portfolioCategories: {
    sports: {
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      items: PortfolioItem[];
    };
    retail: {
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      items: PortfolioItem[];
    };
    tourism: {
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      items: PortfolioItem[];
    };
    restaurants: {
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      items: PortfolioItem[];
    };
  };
  opportunities: AdvertisingOpportunity[];
  packages: CommercialPackage[];
  contactSection: {
    titleEn: string;
    titleAr: string;
    subtitleEn: string;
    subtitleAr: string;
    actionPromptEn: string;
    actionPromptAr: string;
    ctaButtonEn: string;
    ctaButtonAr: string;
  };
}

export const presentationData: PresentationData = {
  meta: {
    agencyName: "ProMedia",
    agencyWebsite: "www.pro-media.com",
    agencyLogo: "/assets/promedia-logo.png",
    creatorNameEn: "Moaz Adly",
    creatorNameAr: "معاذ عدلي",
    creatorPhotos: {
      photo1: "/assets/moaz-photo-1.jpg",
      photo2: "/assets/moaz-photo-2.jpg",
    },
    socialLinks: {
      instagram: "https://www.instagram.com/moaz.adly?rpxt=MWdua2dhYnluNGkwNQ==",
      facebook: "https://www.facebook.com/share/1Kwg1CUnpe/",
      tiktok: "https://www.tiktok.com/@moazadly8?_r=1&_t=ZS-9BP8XKuHrMX",
    },
    contact: {
      email: "info@pro-media.com",
      whatsapp: "https://wa.me/201110070072?text=Hello%20ProMedia%20Team%2C%20I%20am%20interested%20in%20an%20advertising%20partnership%20with%20Moaz%20Adly",
      whatsappNumber: "01110070072",
      whatsappInternational: "+20 11 10070072",
      salesOfficeEn: "ProMedia Official Partnerships Representation",
      salesOfficeAr: "التمثيل التجاري والشراكات الحصرية — بروميديا",
    }
  },
  hero: {
    overtitleEn: "PROMEDIA PRESENTS",
    overtitleAr: "بروميديا تُقدّم",
    titleEn: "MEET MOAZ ADLY",
    titleAr: "تعرّف على معاذ عدلي",
    headlineEn: "A POWERFUL CREATOR PRESENCE. MILLIONS OF OPPORTUNITIES.",
    headlineAr: "حضور إبداعي استثنائي. وملايين الفرص التسويقية.",
    supportingEn: "Discover the power of authentic lifestyle storytelling, sports discipline, travel exploration, and an engaged audience of over 1.1M+ followers across Egypt and the Arab world.",
    supportingAr: "اكتشف قوة المحتوى الواقعي، والشغف الرياضي والترفيه الراقي، وتواصل مع جمهور نشط يتجاوز 1.1 مليون متابع عبر مصر والمنطقة العربية.",
    ctaPrimaryEn: "EXPLORE THE CREATOR",
    ctaPrimaryAr: "استكشف المحتوى والإحصائيات",
    ctaSecondaryEn: "COMMERCIAL OPPORTUNITIES",
    ctaSecondaryAr: "فرص التعاون الإعلاني",
    viewsHighlight: {
      number: "50M+",
      labelEn: "VIDEO VIEWS",
      labelAr: "مشاهدة فيديو",
      subtextEn: "Across Facebook, Instagram & TikTok combined",
      subtextAr: "عبر فيسبوك وإنستغرام وتيك توك مجتمعة",
      periodEn: "During the last 90 days (ProMedia Verified)",
      periodAr: "خلال الـ 90 يوماً الماضية (موثّقة من بروميديا)",
    }
  },
  meetCreators: {
    titleEn: "MEET MOAZ ADLY",
    titleAr: "من هو معاذ عدلي؟",
    subtitleEn: "Authentic, relatable, and culturally connected content creator driving massive organic engagement across sports, padel, lifestyle, and commercial storytelling.",
    subtitleAr: "صانع محتوى متميز يجمع بين العفوية، اللياقة البدنية والروح الرياضية، محققاً نسب تفاعل استثنائية وقاعدة جماهيرية وفية تتجاوز 1.1 مليون متابع.",
    bioParagraphsEn: [
      "Moaz Adly (معاذ عدلي) is one of the most dynamic, engaging, and rapidly rising digital creators in the Middle Eastern digital landscape. Renowned for his authentic charisma, relatable lifestyle humor, and athletic dedication, he commands daily attention from hundreds of thousands across Egypt and the Arab world.",
      "With a high-energy focus on sports, padel tennis, gym discipline, and adventurous worldwide travel, Moaz seamlessly connects athletic motivation with lifestyle discovery and commercial activations—delivering stories that feel trustworthy, inspiring, and culturally resonant.",
      "Through exclusive official commercial representation by ProMedia, Moaz Adly provides leading corporate brands with high-impact organic exposure, driving lasting brand love and measurable audience action."
    ],
    bioParagraphsAr: [
      "يُعد 'معاذ عدلي' من أبرز صناع المحتوى الأكثر تميزاً وتأثيراً في المشهد الرقمي العربي المعاصر، حيث نجح بعفويته وحضوره الرياضي المحبب وشغفه اليومي في بناء قاعدة جماهيرية متفاعلة تتجاوز 1.1 مليون متابع عبر مختلف المنصات.",
      "يتميز معاذ بنشاطه الرياضي البارز في ملاعب البادل وصالات اللياقة البدنية وتحديات التدريب، مما يضفي على محتواه طابعاً تحفيزياً حيوياً يتكامل مع رحلاته الاستكشافية حول العالم وتجاربه التجارية واستعراضه للمطاعم والمنتجات بأسلوب واقعي ينال ثقة الجمهور.",
      "ومن خلال هذه الشراكة الحصرية التي تُقدّمها بروميديا، يمنح معاذ عدلي العلامات التجارية فرصة فريدة للوصول إلى قلوب وعقول المستهلكين بحملات إبداعية تترسخ في الذاكرة وتحقق أعلى عائد استثماري ممكن."
    ],
    corePillarsEn: [
      { title: "Athletic Discipline & Padel", desc: "High-intensity fitness routines, padel tennis dynamics, and health motivation." },
      { title: "Authentic Lifestyle", desc: "Spontaneous, relatable moments connecting deeply with modern youth and families." },
      { title: "Commercial Versatility", desc: "Seamless product placements across Sports, Retail, Tourism, and Gastronomy." },
      { title: "High Retention & Viral Velocity", desc: "Above-average watch completion rates driven by charismatic, trustworthy storytelling." }
    ],
    corePillarsAr: [
      { title: "شغف وانضباط رياضي وبادل", desc: "تمارين لياقة بدنية مكثفة، مهارات البادل، وتحديات رياضية تحفز المتابعين على النشاط والصحة." },
      { title: "عفوية وأسلوب حياة راقٍ", desc: "مواقف يومية واقعية وتواصل وثيق مع شريحة الشباب والعائلات في مصر والعالم العربي." },
      { title: "مرونة تسويقية شاملة", desc: "قدرة استثنائية على تمثيل العلامات في قطاعات الرياضة، التجزئة، السياحة، والمطاعم." },
      { title: "معدلات مشاهدة قياسية وتفاعل فيروسي", desc: "نسب احتفاظ مرتفعة بالمشاهدين وتفاعل فيروسي يعزز وصول الرسائل الإعلانية." }
    ]
  },
  socialStats: [
    {
      id: "views-90d",
      platform: "facebook",
      nameEn: "Total 90-Day Reach",
      nameAr: "المشاهدات المجمعة (90 يوماً)",
      value: "50M+",
      numericValue: 50000000,
      labelEn: "Video Views (90 Days)",
      labelAr: "مشاهدة فيديو (آخر 90 يوماً)",
      status: "verified",
      sourceEn: "Supplied & Verified by ProMedia across all 3 platforms",
      sourceAr: "موثّقة من بروميديا عبر المنصات الثلاث مجتمعة",
      url: "https://www.pro-media.com"
    },
    {
      id: "facebook",
      platform: "facebook",
      nameEn: "Facebook",
      nameAr: "فيسبوك",
      value: "629K",
      numericValue: 629000,
      labelEn: "Followers",
      labelAr: "متابع",
      status: "verified",
      sourceEn: "Official Facebook profile (629K+ followers)",
      sourceAr: "بيانات رسمية موثقة من الصفحة الرسمية (أكثر من 629 ألف متابع)",
      url: "https://www.facebook.com/share/1Kwg1CUnpe/"
    },
    {
      id: "instagram",
      platform: "instagram",
      nameEn: "Instagram",
      nameAr: "إنستغرام",
      value: "454K",
      numericValue: 454000,
      labelEn: "Followers",
      labelAr: "متابع",
      status: "verified",
      sourceEn: "Official Instagram profile (@moaz.adly)",
      sourceAr: "الحساب الرسمي على إنستغرام (@moaz.adly)",
      url: "https://www.instagram.com/moaz.adly?rpxt=MWdua2dhYnluNGkwNQ=="
    },
    {
      id: "tiktok",
      platform: "tiktok",
      nameEn: "TikTok",
      nameAr: "تيك توك",
      value: "40K",
      numericValue: 40000,
      labelEn: "Followers",
      labelAr: "متابع",
      status: "verified",
      sourceEn: "Official TikTok profile (@moazadly8)",
      sourceAr: "الحساب الرسمي على تيك توك (@moazadly8)",
      url: "https://www.tiktok.com/@moazadly8?_r=1&_t=ZS-9BP8XKuHrMX"
    }
  ],
  portfolioCategories: {
    sports: {
      titleEn: "Sports, Fitness & Padel",
      titleAr: "الرياضة واللياقة والبادل",
      descriptionEn: "High-energy fitness motivation, padel tennis matches, gym discipline, and athletic lifestyle storytelling that inspires thousands.",
      descriptionAr: "طاقة رياضية ملهمة، تحديات ومباريات البادل، انضباط صالات اللياقة، وقصص تحفيزية لأسلوب الحياة الصحي تنال إعجاب وتفاعل الآلاف.",
      items: [
        {
          id: "sports-1",
          reelId: "DcPBRshOQxk",
          url: "https://www.instagram.com/reel/DcPBRshOQxk/?rpxt=MW8wa2k0OGFmaTk5bw==",
          category: "sports",
          thumbnailUrl: "/assets/thumbnails/sports/sports-1.jpg",
          titleEn: "From Scratch Series: Ep. 01 – Workout Habits & Avoiding Mistakes",
          titleAr: "سلسلة من الصفر: الحلقة 1 — تنظيم التمرين وتجنب الأخطاء",
          descriptionEn: "Moaz kicks off his inspiring 'From Scratch' fitness journey, sharing practical tips on workout commitment, technique, and avoiding early training mistakes.",
          descriptionAr: "بداية ملهمة لسلسلة 'من الصفر' الرياضية، حيث يشارك معاذ نصائح ذهبية حول الالتزام بالتدريب والتركيز وتصحيح الأخطاء الشائعة في بداية المشوار الرياضي.",
          highlightEn: "Training Mindset & Discipline",
          highlightAr: "انضباط وبداية رياضية صحيحة"
        },
        {
          id: "sports-2",
          reelId: "Dcb-qnDISy6",
          url: "https://www.instagram.com/reel/Dcb-qnDISy6/?obrf=MWR1NHFwMXJxemJ6bg==",
          category: "sports",
          thumbnailUrl: "/assets/thumbnails/sports/sports-2.jpg",
          titleEn: "Padel Court Dynamics: When Things Get Personal With The Coach",
          titleAr: "تحدي البادل: لما تشخصنها مع المدرب بتاعك",
          descriptionEn: "Hilarious and energetic padel tennis court session showcasing competitive spirit, athletic footwork, and authentic humor with the coach.",
          descriptionAr: "تحدٍ رياضي مرح ومثير على ملعب البادل يجمع بين الحماس واللياقة العالية وخفة الظل العفوية أثناء التدريب مع الكوتش.",
          highlightEn: "Padel Energy & Viral Humor",
          highlightAr: "طاقة البادل وتفاعل فيروسي مرح"
        },
        {
          id: "sports-3",
          reelId: "DfdG9FbuGer",
          url: "https://www.instagram.com/reel/DfdG9FbuGer/?vrfl=MXhhOXpyeGEzb3NtZA==",
          category: "sports",
          thumbnailUrl: "/assets/thumbnails/sports/sports-3.jpg",
          titleEn: "Athletic Resilience: Managing Knee Injuries & Safe Training",
          titleAr: "الإصرار الرياضي: التعامل مع إصابة الركبتين والعودة الآمنة",
          descriptionEn: "Honest and transparent discussion on athletic setbacks, recovering from knee injuries, and maintaining an unwavering positive sports attitude.",
          descriptionAr: "مشاركة صادقة ومؤثرة حول التحديات والإصابات الرياضية في الركبتين، وكيفية التأهيل والحفاظ على المعنويات العالية للإصرار على المتابعة.",
          highlightEn: "Resilience & Sports Health",
          highlightAr: "عزيمة وتوعية صحية ورياضية"
        },
        {
          id: "sports-4",
          reelId: "Dc1kLZZusdo",
          url: "https://www.instagram.com/reel/Dc1kLZZusdo/?srtk=MWpwd3AzNmo2bWQ0Ng",
          category: "sports",
          thumbnailUrl: "/assets/thumbnails/sports/sports-4.jpg",
          titleEn: "Gym Discipline: 'It’s Me Versus Me'",
          titleAr: "اللياقة والانضباط الذاتي: أنا في مواجهة نفسي",
          descriptionEn: "High-intensity gym session capturing focus, physical endurance, and the personal philosophy of daily self-improvement in sports.",
          descriptionAr: "جلسة تمرين مكثفة من داخل الجيم تعكس التركيز العالي، القوة البدنية، وفلسفة تطوير الذات المستمر وتحدي النفس يومياً.",
          highlightEn: "High-Intensity Fitness Focus",
          highlightAr: "قوة بدنية وتحدي الذات"
        }
      ]
    },
    retail: {
      titleEn: "Retail & Commercial Showcases",
      titleAr: "التجزئة والعلامات التجارية",
      descriptionEn: "Dynamic in-store experiences, consumer electronics, fashion, and commercial launches translated into high-impact viral entertainment.",
      descriptionAr: "تجارب تسوق تفاعلية، استعراض أحدث الأجهزة والأزياء والعروض التجارية بأسلوب تشويقي يحفز حركة الشراء.",
      items: [
        {
          id: "retail-1",
          reelId: "DfnQTmEM92u",
          url: "https://www.instagram.com/reel/DfnQTmEM92u/?mdxt=MTAxOTd0bG5sZ3RyNw==",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-1.jpg",
          titleEn: "Retail Activation Showcase 01",
          titleAr: "تغطية تسوق وتجربة تجارية 01",
          descriptionEn: "In-store product discovery and engaging shopping experience connecting commercial shoppers with brand offers.",
          descriptionAr: "تجربة تسوق مرحة واستعراض منتجات بطريقة عفوية جذبت تفاعل المتسوقين.",
          highlightEn: "Retail Footfall Driver",
          highlightAr: "تنشيط زيارات الفروع"
        },
        {
          id: "retail-2",
          reelId: "DehtmEDsh9W",
          url: "https://www.instagram.com/reel/DehtmEDsh9W/?dlrf=Nmt5MmU0dnJvcmY4",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-2.jpg",
          titleEn: "Retail Activation Showcase 02",
          titleAr: "تغطية تسوق وتجربة تجارية 02",
          descriptionEn: "Interactive lifestyle showcase highlighting retail advantages and store ambiance.",
          descriptionAr: "استعراض مميزات المنتجات وأجواء المتجر بطريقة طبيعية ومحببة للمتابعين.",
          highlightEn: "Product Engagement",
          highlightAr: "تفاعل مباشر مع المنتج"
        },
        {
          id: "retail-3",
          reelId: "DecqyiDs4mf",
          url: "https://www.instagram.com/reel/DecqyiDs4mf/?psln=MTI2N3M3MjhpeTdy",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-3.jpg",
          titleEn: "Retail Activation Showcase 03",
          titleAr: "تغطية تسوق وتجربة تجارية 03",
          descriptionEn: "High-energy brand experience with engaging commentary and natural audience connection.",
          descriptionAr: "جولة تجارية حيوية مع تعليق شيق يجذب اهتمام فئات الشباب والعائلات.",
          highlightEn: "Brand Awareness",
          highlightAr: "ترسيخ اسم العلامة"
        },
        {
          id: "retail-4",
          reelId: "DeZzTaLMMLw",
          url: "https://www.instagram.com/reel/DeZzTaLMMLw/?obrf=MW1pOG9ndTVidXR5ZA==",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-4.jpg",
          titleEn: "Retail Activation Showcase 04",
          titleAr: "تغطية تسوق وتجربة تجارية 04",
          descriptionEn: "Fast-paced retail walkthrough spotlighting promotions, new collections, and special offers.",
          descriptionAr: "جولة سريعة وممتعة تركز على التخفيضات والتشكيلات الحصرية والعروض الموسمية.",
          highlightEn: "Offer Conversion",
          highlightAr: "تحفيز الاستفادة من العروض"
        },
        {
          id: "retail-5",
          reelId: "DdtitGssHtw",
          url: "https://www.instagram.com/reel/DdtitGssHtw/?dlrf=d2p6d2V4ejV2dnls",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-5.jpg",
          titleEn: "Retail Activation Showcase 05",
          titleAr: "تغطية تسوق وتجربة تجارية 05",
          descriptionEn: "Creative product showcase blending humor, practicality, and direct call-to-action.",
          descriptionAr: "دمج الفكاهة الذكية مع التطبيق العملي لتعزيز رغبة الشراء الفوري.",
          highlightEn: "Audience Trust",
          highlightAr: "بناء ثقة المشتري"
        }
      ]
    },
    tourism: {
      titleEn: "Tourism, Travel & Destination Exploration",
      titleAr: "السياحة والسفر والوجهات",
      descriptionEn: "Captivating international city walks, cultural landmarks, European journeys, and resort destinations.",
      descriptionAr: "جولات سياحية ساحرة في أشهر المدن العالمية والمعالم التاريخية والمنتجعات الراقية تجذب عشاق السفر.",
      items: [
        {
          id: "tourism-1",
          reelId: "DTvvnLZDKFW",
          url: "https://www.instagram.com/reel/DTvvnLZDKFW/?psln=cGN2NmV0bjJ4dGJh",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-1.jpg",
          titleEn: "Destination & Cultural Discovery 01",
          titleAr: "استكشاف الوجهات والمعالم السياحية 01",
          descriptionEn: "Authentic stroll through historical quarters, capturing scenic street vibes and local culture.",
          descriptionAr: "جولة ممتعة بين الأحياء التاريخية ونقل الأجواء الثقافية الفريدة للمدينة.",
          highlightEn: "Wanderlust Inspiration",
          highlightAr: "إلهام السفر والاستكشاف"
        },
        {
          id: "tourism-2",
          reelId: "DTYm26djLAn",
          url: "https://www.instagram.com/reel/DTYm26djLAn/?exln=MXg2NmpiNHp3bWFzYw==",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-2.jpg",
          titleEn: "Destination & Cultural Discovery 02",
          titleAr: "استكشاف الوجهات والمعالم السياحية 02",
          descriptionEn: "Engaging travel commentary showcasing landmark architecture and must-visit spots.",
          descriptionAr: "تسليط الضوء على أبرز المعالم المعمارية وأفضل الأماكن التي تستحق الزيارة.",
          highlightEn: "Travel Guide Appeal",
          highlightAr: "دليل سياحي جذاب"
        },
        {
          id: "tourism-3",
          reelId: "DTJWaQajAsI",
          url: "https://www.instagram.com/reel/DTJWaQajAsI/?mdxt=MXB1ZzF4cGw4cmlqYg==",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-3.jpg",
          titleEn: "Destination & Cultural Discovery 03",
          titleAr: "استكشاف الوجهات والمعالم السياحية 03",
          descriptionEn: "Scenic city exploration with immersive views, relaxed pacing, and travel tips.",
          descriptionAr: "مشاهد خلابة للمدينة مع نصائح سفر عملية بأسلوب مريح وسلس.",
          highlightEn: "Scenic Immersion",
          highlightAr: "معايشة بصرية كاملة"
        },
        {
          id: "tourism-4",
          reelId: "DTGAyh0jIub",
          url: "https://www.instagram.com/reel/DTGAyh0jIub/?dlrf=dm9udDZzMjhuNmtl",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-4.jpg",
          titleEn: "Destination & Cultural Discovery 04",
          titleAr: "استكشاف الوجهات والمعالم السياحية 04",
          descriptionEn: "Vibrant city nightlife and iconic landmarks lit up after dark.",
          descriptionAr: "أجواء المدينة الحيوية ليلاً وإضاءة المعالم السياحية الشهيرة.",
          highlightEn: "Night Vibe Tourism",
          highlightAr: "حيوية الوجهات السياحية"
        },
        {
          id: "tourism-5",
          reelId: "DTEHFcRDC1C",
          url: "https://www.instagram.com/reel/DTEHFcRDC1C/?srtk=MWI4YnA1cDVlNmVwOA==",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-5.jpg",
          titleEn: "Destination & Cultural Discovery 05",
          titleAr: "استكشاف الوجهات والمعالم السياحية 05",
          descriptionEn: "Experiencing local transport, city views, and traveler hacks with humor.",
          descriptionAr: "تجربة وسائل التنقل المحلية واستكشاف خفايا المدينة بروح مرحة.",
          highlightEn: "Practical Travel Tips",
          highlightAr: "نصائح وخبرات سفر"
        },
        {
          id: "tourism-6",
          reelId: "DTBjTeCjHM5",
          url: "https://www.instagram.com/reel/DTBjTeCjHM5/?rpxt=eDJ3YWdxNGp3Z21y",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-6.jpg",
          titleEn: "Destination & Cultural Discovery 06",
          titleAr: "استكشاف الوجهات والمعالم السياحية 06",
          descriptionEn: "Iconic European cityscape exploration with stunning horizon backdrops.",
          descriptionAr: "استعراض الإطلالات البانورامية للمدن الأوروبية وأشهر الساحات العالمية.",
          highlightEn: "European Travel",
          highlightAr: "جولات سياحية أوروبية"
        }
      ]
    },
    restaurants: {
      titleEn: "Restaurants & Gastronomy Experiences",
      titleAr: "المطاعم والضيافة وفنون الطهي",
      descriptionEn: "Flavor-first food reviews, restaurant ambiance tours, signature dish tasting, and appetizing gastronomic journeys.",
      descriptionAr: "تقييمات واقعية لأشهى المأكولات، استعراض أجواء المطاعم والضيافة، وتجارب تذوق فريدة تحرك شهية الملايين.",
      items: [
        {
          id: "restaurant-1",
          reelId: "DHZHs-JSv4z",
          url: "https://www.instagram.com/reel/DHZHs-JSv4z/?exln=NXF1dzJ0NjFyZGRi",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-1.jpg",
          titleEn: "Signature Dish Tasting & Review",
          titleAr: "تذوق الأطباق المميزة وتقييم النكهات",
          descriptionEn: "Genuine first-bite reactions and detailed tasting of signature menu items.",
          descriptionAr: "انطباعات وتفاعل فوري مع أول قضمة وتذوق لأبرز أطباق القائمة الحصرية.",
          highlightEn: "Appetite Driver",
          highlightAr: "محفز قوي لطلب الطعام"
        },
        {
          id: "restaurant-2",
          reelId: "DQ402FGDNkB",
          url: "https://www.instagram.com/reel/DQ402FGDNkB/?psln=MXc0amhkazJxZHUzdQ==",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-2.jpg",
          titleEn: "Full Dining Experience & Atmosphere",
          titleAr: "تجربة طعام متكاملة وأجواء الضيافة",
          descriptionEn: "Exploring restaurant decor, service speed, and dish variety with natural humor.",
          descriptionAr: "استعراض ديكورات المطعم وسرعة الخدمة وتنوع الأطباق بروح مرحة.",
          highlightEn: "Atmosphere & Dining",
          highlightAr: "تجربة متكاملة للأجواء"
        },
        {
          id: "restaurant-3",
          reelId: "DDNM_6rN_EH",
          url: "https://www.instagram.com/reel/DDNM_6rN_EH/?psln=eXNzbDQ3cnNyaWMx",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-3.jpg",
          titleEn: "Gourmet Challenge & Feast",
          titleAr: "وليمة استثنائية وتحدي النكهات الشهية",
          descriptionEn: "Generous table spread showcase triggering intense audience food cravings.",
          descriptionAr: "طاولة طعام عامرة بأشهى الأصناف تثير الرغبة الفورية في التجربة والزيارة.",
          highlightEn: "Viral Food Attraction",
          highlightAr: "جاذبية بصرية للطعام"
        },
        {
          id: "restaurant-4",
          reelId: "DGGyOJJNkQb",
          url: "https://www.instagram.com/reel/DGGyOJJNkQb/?obrf=MTN3OXh1dWM4bnV1Zw==",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-4.jpg",
          titleEn: "Special Menu & Dessert Showcase",
          titleAr: "قائمة خاصة واستعراض أطباق الحلويات",
          descriptionEn: "Focus on signature dessert and drink items with energetic presentation.",
          descriptionAr: "التركيز على أصناف الحلويات والمشروبات المنعشة بأسلوب مبهج وشيّق.",
          highlightEn: "Craving Conversion",
          highlightAr: "تحويل المشاهدة إلى زيارة"
        }
      ]
    }
  },
  opportunities: [
    {
      id: "instagram-reels",
      titleEn: "Dedicated Instagram Reels",
      titleAr: "فيديوهات ريلز مخصصة على إنستغرام",
      subtitleEn: "High-production vertical storytelling with organic product integration.",
      subtitleAr: "سرد قصصي رأسي عالي الجودة مع دمج انسيابي وطبيعي للمنتج أو العلامة.",
      deliverablesEn: [
        "Full creative concept & script aligned with brand guidelines",
        "Direct creator integration with authentic lifestyle and sports energy",
        "Permanent video post on official Moaz Adly profile",
        "Brand tag & collaborative post capability where approved",
        "Detailed performance metric reporting post-campaign"
      ],
      deliverablesAr: [
        "ابتكار الفكرة الإبداعية وكتابة السيناريو بما يتوافق مع هوية العلامة",
        "ظهور معاذ المباشر ودمج الرسائل التسويقية بطاقة رياضية وحيوية",
        "نشر دائم للفيديو على الحساب الرسمي لمعاذ عدلي",
        "إشارة مباشرة لحساب العلامة وإمكانية النشر التعاوني (Collab)",
        "تقرير تحليلي مفصل لأداء الحملة ونسب التفاعل بعد النشر"
      ],
      icon: "Film",
      focusEn: "Viral Discovery, Youth Reach & Brand Association",
      focusAr: "انتشار فيروسي، وصول للشباب وترسيخ العلامة"
    },
    {
      id: "tiktok-verticals",
      titleEn: "TikTok Content Series & Sound Trends",
      titleAr: "سلاسل محتوى تيك توك والتريندات الصوتية",
      subtitleEn: "Trend-driven short-form videos designed for peak virality and rapid sharing.",
      subtitleAr: "محتوى إيقاعي سريع متزامن مع أحدث التريندات لتحقيق أوسع انتشار.",
      deliverablesEn: [
        "Creative hook engineered for sub-3-second retention",
        "Native TikTok style, trending audio selection, and on-screen pacing",
        "Multi-asset publishing format (Reel + TikTok synced)",
        "Call-to-action driving bio clicks, downloads, or store footfall"
      ],
      deliverablesAr: [
        "افتتاحية تشويقية مدروسة تجذب الانتباه خلال أول 3 ثوانٍ",
        "استخدام صيغ تيك توك الرائجة والأصوات المتصدرة للإكسبلور",
        "نشر متزامن احترافي يعزز استكشاف المحتوى عبر المنصات",
        "توجيه مباشر لاتخاذ إجراء (رابط البايو، تحميل تطبيق، أو زيارة متجر)"
      ],
      icon: "TrendingUp",
      focusEn: "Gen Z velocity, dynamic trends & rapid virality",
      focusAr: "انتشار فيروسي فائق وسرعة وصول للجيل الجديد"
    },
    {
      id: "multi-platform",
      titleEn: "Omni-Platform Syndication (All 3 Networks)",
      titleAr: "البث الشامل المتزامن عبر كافة المنصات الثلاث",
      subtitleEn: "Cross-pollinated multi-platform release across Facebook, Instagram, and TikTok.",
      subtitleAr: "نشر متزامن عبر فيسبوك، إنستغرام، وتيك توك لتغطية جميع الشرائح العمرية.",
      deliverablesEn: [
        "Single hero production adapted with platform-native aspect ratios",
        "Simultaneous launch coordinated by ProMedia production team",
        "Cross-platform comment community management and moderation",
        "Consolidated cross-platform reach and engagement analytical report"
      ],
      deliverablesAr: [
        "إنتاج عمل إعلاني رئيسي مهيأ فنياً لخصائص كل منصة على حدة",
        "إطلاق متزامن تشرف عليه غرفة عمليات الإنتاج في بروميديا",
        "إدارة وتفاعل مهني مع التعليقات لتعزيز صورة وموثوقية العلامة",
        "تقرير إحصائي موحد وشامل يجمع مؤشرات الأداء من المنصات الثلاث"
      ],
      icon: "Share2",
      focusEn: "Complete market saturation across all demographics",
      focusAr: "تغطية تسويقية متكاملة واستحواذ شامل على الجمهور"
    },
    {
      id: "facebook-community",
      titleEn: "Facebook Content & Community Reach",
      titleAr: "محتوى فيسبوك والوصول المجتمعي الواسع",
      subtitleEn: "Capturing a massive, highly engaged 629K+ follower base across broad demographics.",
      subtitleAr: "استثمار القاعدة الجماهيرية الضخمة (أكثر من 629 ألف متابع) للوصول لكافة فئات المجتمع.",
      deliverablesEn: [
        "High-definition video upload directly into Facebook Watch",
        "Engaging post copy with direct links and tracked URLs",
        "High family and community shareability",
        "Access to broader household decision-makers"
      ],
      deliverablesAr: [
        "رفع الفيديو بجودة عالية مع تحسينات المشاهدة عبر فيسبوك",
        "صياغة نص منشور مشوق مع روابط الشراء المباشرة",
        "معدلات مشاركة عائلية ومجتمعية مرتفعة عبر المجموعات",
        "الوصول إلى متخذي قرارات الشراء داخل الأسرة"
      ],
      icon: "Users",
      focusEn: "Massive scale & household purchasing power",
      focusAr: "انتشار جماهيري وقوة شرائية عائلية واسعة"
    },
    {
      id: "campaign-packages",
      titleEn: "Customized Campaign Packages",
      titleAr: "حملات تسويقية متكاملة ومخصصة",
      subtitleEn: "Multi-episode story arcs and seasonal campaign takeovers tailored to brand KPIs.",
      subtitleAr: "سلاسل إعلانية متعددة الحلقات ورعاية مواسم وعروض متكاملة حسب أهداف علامتك.",
      deliverablesEn: [
        "Custom creative ideation workshops with ProMedia directors",
        "Multi-video episodic concepts (teaser, launch, conclusion)",
        "Omni-platform synchronized publishing calendar",
        "Rights for digital advertising whitelisting / dark posting"
      ],
      deliverablesAr: [
        "ورش عمل إبداعية مخصصة مع فريق الإخراج والإنتاج في بروميديا",
        "أفكار سينمائية متعددة المراحل (تشويق، إطلاق رسمي، ختام)",
        "جدول نشر متزامن عبر كافة المنصات الرقمية لتعظيم الأثر",
        "حقوق استخدام المحتوى في الإعلانات الممولة (Whitelisting)"
      ],
      icon: "Award",
      focusEn: "Complete brand transformation & narrative depth",
      focusAr: "بناء حضور تسويقي راسخ وحملات متكاملة الأركان"
    },
    {
      id: "on-ground-activations",
      titleEn: "Cross-Platform & Experiential Activations",
      titleAr: "افتتاح الفروع والتغطيات الميدانية والرياضية",
      subtitleEn: "On-site celebrity appearances, athletic events, branch grand openings, and live fan engagements.",
      subtitleAr: "حضور ميداني، فعاليات رياضية وتنافسية، تغطيات افتتاح الفروع، وتفاعل جماهيري مباشر.",
      deliverablesEn: [
        "In-person creator presence at store opening, tournament, or event",
        "Live on-the-ground stories and behind-the-scenes content",
        "Direct fan interactions and customer photo moments",
        "Post-event highlight reel produced for ongoing brand use"
      ],
      deliverablesAr: [
        "حضور شخصي لمعاذ في موقع الافتتاح أو الفعالية الرياضية والتسويقية",
        "تغطية فورية حية وكواليس تجذب الجمهور للموقع الجغرافي",
        "تفاعل مباشر مع الزوار وجلسات تصوير تزيد ولاء العملاء",
        "إنتاج فيديو توثيقي احترافي متكامل للحدث يُسلّم للعلامة"
      ],
      icon: "Globe",
      focusEn: "Footfall surge, live buzz & athletic community presence",
      focusAr: "حشود جماهيرية وتغطية إعلامية تفاعلية مباشرة"
    }
  ],
  packages: [
    {
      id: "full-social-media",
      nameEn: "Full Social Media Package (3 Platforms)",
      nameAr: "باقة السوشيال ميديا الشاملة (تيك توك + فيسبوك + إنستغرام)",
      tierEn: "Complete Presence: TikTok, Facebook & Instagram",
      tierAr: "التغطية الشاملة: تيك توك، فيسبوك، وإنستغرام",
      priceAmount: 150000,
      currencyEn: "EGP",
      currencyAr: "جنيه مصري",
      priceDisplayEn: "150,000 EGP",
      priceDisplayAr: "150,000 جنيه مصري",
      platforms: ["tiktok", "facebook", "instagram"],
      descriptionEn: "Comprehensive campaign published across TikTok, Facebook, and Instagram for maximum scale and complete audience reach across all demographics.",
      descriptionAr: "حملة إعلانية شاملة تُنشر عبر تيك توك، فيسبوك، وإنستغرام لتحقيق أعلى وصول جماهيري وتغطية كافة الفئات العمرية والمنصات.",
      recommended: true
    },
    {
      id: "two-platform",
      nameEn: "Two-Platform Package (Instagram & TikTok)",
      nameAr: "باقة المنصتين (إنستغرام وتيك توك)",
      tierEn: "Instagram & TikTok",
      tierAr: "إنستغرام وتيك توك",
      priceAmount: 120000,
      currencyEn: "EGP",
      currencyAr: "جنيه مصري",
      priceDisplayEn: "120,000 EGP",
      priceDisplayAr: "120,000 جنيه مصري",
      platforms: ["instagram", "tiktok"],
      descriptionEn: "High-impact short-form vertical video package tailored for rapid virality, visual storytelling, and maximum youth and active audience engagement.",
      descriptionAr: "باقة مركزة للفيديوهات الرأسية القصيرة عبر إنستغرام وتيك توك تضمن سرعة الانتشار الفيروسي والتفاعل المرتفع لدى فئة الشباب والجمهور الحيوي.",
      recommended: false
    },
    {
      id: "single-platform",
      nameEn: "Single Platform Package",
      nameAr: "باقة المنصة الواحدة",
      tierEn: "Single Platform (Instagram, TikTok, or Facebook)",
      tierAr: "منصة واحدة (إنستغرام أو تيك توك أو فيسبوك)",
      priceAmount: 100000,
      currencyEn: "EGP",
      currencyAr: "جنيه مصري",
      priceDisplayEn: "100,000 EGP",
      priceDisplayAr: "100,000 جنيه مصري",
      platforms: ["instagram"],
      descriptionEn: "Dedicated commercial video activation published on a single chosen platform (Instagram, TikTok, or Facebook) targeting an engaged, high-intent audience.",
      descriptionAr: "تغطية إعلانية مخصصة تُنشر على منصة واحدة من اختيارك (إنستغرام، تيك توك، أو فيسبوك) لاستهداف جمهور متفاعل عالي الاهتمام بما يخدم أهداف حملتك.",
      recommended: false
    }
  ],
  contactSection: {
    titleEn: "LET'S CREATE SOMETHING POWERFUL.",
    titleAr: "لنصنع معاً نجاحاً استثنائياً.",
    subtitleEn: "Connect your brand with Moaz Adly's powerful creator presence through ProMedia.",
    subtitleAr: "اربط علامتك التجارية بحضور معاذ عدلي الاستثنائي وتأثيره الواسع من خلال بروميديا.",
    actionPromptEn: "ProMedia is the official exclusive management and representation agency for Moaz Adly commercial partnerships. Our team handles creative strategy, campaign structuring, and seamless production delivery.",
    actionPromptAr: "بروميديا هي الجهة الرسمية المعتمدة والوكيل الحصري لإدارة الشراكات والتعاقدات التجارية الخاصة بمعاذ عدلي. يتولى فريقنا تطوير الاستراتيجية الإبداعية، هيكلة الحملات، وضمان أعلى معايير الإنتاج الاحترافي.",
    ctaButtonEn: "Request Collaboration Rate Card",
    ctaButtonAr: "طلب بطاقة الأسعار وحجز الحملة"
  }
};
