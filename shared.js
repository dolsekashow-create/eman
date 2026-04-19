/* ==============================================================
   EMAN WARSAW - Shared JS (loaded by all pages)
   - Supabase client
   - Content loading & caching
   - Language switching (PL/EN/DE/AR)
   - Shared navbar/footer rendering
   ============================================================== */

const SUPABASE_URL = 'https://pimkilxavjambjbvnbfr.supabase.co';
const SUPABASE_KEY = 'sb_publishable_ZY1qjeCgR97DN7z_Zgx3hg_nt-CmAGG';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const LANGS = ['pl','en','de','ar'];
const RTL = ['ar'];
const LANG_NAMES = { pl:'Polski', en:'English', de:'Deutsch', ar:'العربية' };
const LANG_FLAGS = { pl:'🇵🇱', en:'🇬🇧', de:'🇩🇪', ar:'🇪🇬' };

/* ---------- Default content (fallback) ---------- */
const DEFAULT_CONTENT = {
  videos: [
    "https://videos.pexels.com/video-files/3214448/3214448-uhd_3840_2160_25fps.mp4",
    "https://videos.pexels.com/video-files/3195394/3195394-uhd_3840_2160_25fps.mp4",
    "https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_25fps.mp4"
  ],
  about_image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  contact: {
    address:"Eman Warsaw For Trading sp. z o.o., Warszawa, Polska",
    email:"info@emanwarsaw.com", phone:"+48 123 456 789",
    whatsapp:"48123456789", facebook:"https://facebook.com/emanwarsaw"
  },
  brand: { name:"EMAN WARSAW", subname:"For Trading sp. z o.o." },
  applications: [
    { image:"https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?w=800&q=80", title:{pl:"Farby i lakiery",en:"Paints & Coatings",de:"Farben",ar:"الدهانات والطلاء"}, desc:{pl:"Stosowany jako wypełniacz w farbach.",en:"Used as a filler in paints and coatings.",de:"Als Füllstoff in Farben verwendet.",ar:"يُستخدم حشواً في الدهانات والطلاء."} },
    { image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", title:{pl:"Tworzywa sztuczne",en:"Plastics",de:"Kunststoffe",ar:"البلاستيك"}, desc:{pl:"Ważny składnik tworzyw sztucznych.",en:"Key component in plastic manufacturing.",de:"Wichtige Komponente bei Kunststoffen.",ar:"مكوّن أساسي في صناعة البلاستيك."} },
    { image:"https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=800&q=80", title:{pl:"Materiały budowlane",en:"Building Materials",de:"Baumaterialien",ar:"مواد البناء"}, desc:{pl:"Aplikacje budowlane.",en:"Construction applications.",de:"Bauanwendungen.",ar:"تستخدم في تطبيقات البناء."} },
    { image:"https://images.unsplash.com/photo-1609205405317-13df69c52e4a?w=800&q=80", title:{pl:"Kleje i uszczelniacze",en:"Adhesives & Sealants",de:"Klebstoffe",ar:"المواد اللاصقة"}, desc:{pl:"Formulacje klejów.",en:"Adhesive formulations.",de:"Klebstoffformulierungen.",ar:"تركيبات المواد اللاصقة."} },
    { image:"https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80", title:{pl:"Pasze i drób",en:"Feed & Poultry",de:"Futtermittel",ar:"الأعلاف والدواجن"}, desc:{pl:"Źródło wapnia.",en:"Calcium source for animal feed.",de:"Calciumquelle.",ar:"مصدر معدني للكالسيوم في الأعلاف."} },
    { image:"https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80", title:{pl:"Farmacja i żywność",en:"Pharma & Food",de:"Pharma",ar:"الصناعات الدوائية"}, desc:{pl:"Wysoka czystość.",en:"High purity pharmaceutical grade.",de:"Hochrein.",ar:"درجات عالية النقاوة للدواء والغذاء."} }
  ],
  translations: {
    pl: {
      // Navbar
      nav_home:"Strona główna", nav_about:"O nas", nav_products:"Produkty",
      nav_logistics:"Logistyka", nav_quality:"Jakość", nav_market:"Rynek", nav_contact:"Kontakt",
      // Home
      hero_title:"Profesjonalne Rozwiązania Dostaw<br><span class='gold'>Minerały Przemysłowe i Kamień Naturalny</span>",
      hero_sub:"Polska firma importowo-eksportowa, z egipskim zarządzaniem i bezpośrednim połączeniem ze źródłem w Egipcie. Dostarczamy węglan wapnia i marmur naturalny na rynek polski i europejski.",
      hero_btn:"Zobacz produkty",
      home_welcome_title:"Witamy w Eman Warsaw For Trading",
      home_welcome_p1:"Jesteśmy polską firmą importowo-eksportową, reprezentującą model handlowy łączący europejską obecność w Polsce z bezpośrednim połączeniem ze źródłem w Egipcie.",
      home_welcome_p2:"Wierzymy, że udane dostawy opierają się nie tylko na produkcie, ale na jasności specyfikacji, precyzji dokumentacji, efektywności koordynacji i profesjonalnej obsłudze.",
      home_offer_title:"Co oferujemy?",
      home_offer_1:"Dostawy węglanu wapnia do różnych zastosowań przemysłowych",
      home_offer_2:"Dostawy marmuru naturalnego w różnych formach i wykończeniach",
      home_offer_3:"Zorganizowane wsparcie logistyczne od źródła do rynku europejskiego",
      home_offer_4:"Dokumentacja techniczna i handlowa zgodnie z produktem",
      home_products_title:"Nasze Produkty",
      home_closing:"Łączymy jakość źródła w Egipcie z organizacją europejskiego rynku przez Polskę, oferując partnerstwa handlowe oparte na zaufaniu i stabilności.",
      // About
      about_title:"O nas",
      about_p1:"Eman Warsaw For Trading sp. z o.o. została założona w Polsce jako elastyczna i wiarygodna europejska platforma handlowa do obsługi klientów w Polsce i Unii Europejskiej.",
      about_p2:"Firma reprezentuje model łączący prawną i handlową obecność w Polsce z bezpośrednim egipskim doświadczeniem w handlu i eksporcie, co daje praktyczną przewagę w zarządzaniu łańcuchami dostaw.",
      about_p3:"Nasza działalność jest powiązana z firmą siostrzaną w Egipcie, co wspiera bezpośrednią obserwację od źródła produktu i zapewnia większą elastyczność w koordynacji, wyborze specyfikacji i organizacji pakowania i wysyłki.",
      about_p4:"Nie tylko dostarczamy produkt — oferujemy zorganizowane podejście handlowe łączące Egipt i Europę, oparte na profesjonalizmie, zaangażowaniu i zrozumieniu rynku.",
      about_vision_title:"Nasza Wizja",
      about_vision:"Być zaufanym partnerem na rynku europejskim w dostawach minerałów przemysłowych i kamienia naturalnego z Egiptu, poprzez model handlowy łączący bliskość ze źródłem z dyscypliną wykonania.",
      about_mission_title:"Nasza Misja",
      about_mission:"Dostarczanie profesjonalnych rozwiązań łączących jakość, przejrzystość, elastyczność logistyczną i profesjonalną obserwację, przynoszących realną i trwałą wartość dla naszych klientów.",
      about_values_title:"Nasze Wartości",
      about_v1:"Zaufanie", about_v2:"Zaangażowanie", about_v3:"Profesjonalizm",
      about_v4:"Przejrzystość", about_v5:"Długoterminowe partnerstwo",
      // Products
      products_title:"Nasze Produkty",
      products_intro:"Oferujemy wybrany asortyment produktów, który reprezentuje siłę połączenia Egiptu i Europy, z naciskiem na produkty o jasnej wartości rynkowej i zorganizowanych możliwościach dostaw.",
      products_cta:"Zobacz szczegóły",
      // Logistics
      logi_title:"Logistyka i Łańcuch Dostaw",
      logi_intro:"W handlu surowcami i kamieniem naturalnym logistyka jest kluczowym elementem. Obejmuje nie tylko ruch towarów, ale także koordynację, dokumentację, terminowość, sposób pakowania i ciągłą obserwację.",
      logi_intro2:"W Eman Warsaw For Trading organizujemy łańcuch dostaw od źródła do klienta w sposób profesjonalny i zdyscyplinowany, zapewniając większą przejrzystość, elastyczność i zaufanie.",
      logi_what_title:"Co oferujemy?",
      logi_what_1:"Przegląd wymaganej specyfikacji",
      logi_what_2:"Koordynacja ze źródłem",
      logi_what_3:"Określenie metody pakowania",
      logi_what_4:"Przygotowanie dokumentów handlowych i technicznych",
      logi_what_5:"Organizacja wysyłki według ilości i przeznaczenia",
      logi_what_6:"Ciągła obserwacja do odbioru",
      logi_prod_title:"Produkty wymagające specjalnej logistyki",
      logi_caco_title:"Węglan wapnia",
      logi_caco_desc:"Wymaga jasnej koordynacji klasy, pakowania i dokumentacji technicznej.",
      logi_marble_title:"Marmur naturalny",
      logi_marble_desc:"Wymaga większej uwagi w przygotowaniu, ochronie, pakowaniu i transporcie.",
      logi_end:"Naszym celem jest zapewnienie klientowi bardziej zorganizowanego doświadczenia dostaw, od jasności zamówienia do dostarczenia produktu w profesjonalnych ramach.",
      // Quality
      qual_title:"Jakość i Dokumentacja",
      qual_intro:"Wierzymy, że zaufanie w międzynarodowych transakcjach handlowych buduje się na jasności specyfikacji, precyzji dokumentacji i wcześniejszym uzgodnieniu wymagań produktu.",
      qual_caco_title:"Dla węglanu wapnia",
      qual_caco_intro:"Specyfikacje techniczne mogą być omawiane zgodnie z potrzebami klienta, w tym:",
      qual_caco_1:"Rozdrobnienie", qual_caco_2:"Czystość", qual_caco_3:"Białość",
      qual_caco_4:"Wilgotność", qual_caco_5:"Pakowanie", qual_caco_6:"Końcowe zastosowanie",
      qual_marble_title:"Dla marmuru",
      qual_marble_intro:"Można omówić:",
      qual_marble_1:"Rodzaj", qual_marble_2:"Kolor", qual_marble_3:"Rozmiar",
      qual_marble_4:"Grubość", qual_marble_5:"Wykończenie", qual_marble_6:"Metoda pakowania", qual_marble_7:"Wymagane przygotowanie",
      qual_docs_title:"Dostępne dokumenty",
      qual_note:"Dokumenty są dostarczane zgodnie z charakterem produktu, końcowym zastosowaniem i uzgodnionym systemem dostaw.",
      // Market
      market_title:"Rynek Polski i Europejski",
      market_p1:"Działamy z Polski, obsługując klientów w Polsce i na rynkach europejskich, ze szczególnym zrozumieniem natury wymagań handlowych, znaczenia szybkiej komunikacji, precyzji organizacji i przejrzystości dokumentacji.",
      market_p2:"Nasza obecność w Polsce daje nam praktyczną przewagę w zarządzaniu komunikacją i obserwacją w Europie, podczas gdy nasze bezpośrednie rozszerzenie do Egiptu zapewnia lepszą zdolność śledzenia produktu od źródła i elastyczną koordynację operacji dostaw.",
      market_p3:"Naszym celem jest bycie praktycznym partnerem dla firm, dystrybutorów, importerów i projektów poszukujących zorganizowanego dostawcy, precyzyjnego zrozumienia specyfikacji i relacji handlowej opartej na zaufaniu i ciągłości.",
      // Contact
      contact_title:"Kontakt",
      contact_intro:"Chętnie nawiążemy z Państwem kontakt w celu omówienia potrzeb w zakresie węglanu wapnia lub marmuru naturalnego, analizy wymaganych specyfikacji i zaproponowania najbardziej odpowiedniego rozwiązania.",
      contact_hq:"Siedziba", contact_phone:"Telefon / WhatsApp",
      form_title:"Formularz kontaktowy",
      form_name:"Imię i nazwisko *", form_company:"Firma", form_email:"Email",
      form_phone:"Telefon / WhatsApp", form_country:"Kraj",
      form_product:"Produkt", form_product_caco:"Węglan wapnia", form_product_marble:"Marmur", form_product_other:"Inny",
      form_spec:"Specyfikacja / Typ", form_quantity:"Szacunkowa ilość",
      form_message:"Wiadomość", form_submit:"Wyślij",
      form_success:"Dziękujemy! Wiadomość została wysłana.", form_error:"Wystąpił błąd.",
      footer_rights:"Wszelkie prawa zastrzeżone.", fab_call:"Zadzwoń"
    },
    en: {
      nav_home:"Home", nav_about:"About", nav_products:"Products",
      nav_logistics:"Logistics", nav_quality:"Quality", nav_market:"Market", nav_contact:"Contact",
      hero_title:"Professional Supply Solutions<br><span class='gold'>Industrial Minerals & Natural Stone</span>",
      hero_sub:"A Polish import-export company with Egyptian management and a direct link to the source in Egypt. We supply calcium carbonate and natural marble to Polish and European markets.",
      hero_btn:"View Products",
      home_welcome_title:"Welcome to Eman Warsaw For Trading",
      home_welcome_p1:"We are a Polish import-export company representing a commercial model that combines European presence in Poland with a direct link to the source in Egypt.",
      home_welcome_p2:"We believe successful supply relies not only on the product, but on specification clarity, documentation precision, coordination efficiency, and professional follow-up.",
      home_offer_title:"What We Offer",
      home_offer_1:"Calcium carbonate supply for various industrial applications",
      home_offer_2:"Natural marble supply in various forms and finishes",
      home_offer_3:"Organized logistics support from source to European market",
      home_offer_4:"Technical and commercial documentation according to product",
      home_products_title:"Our Products",
      home_closing:"We link source quality in Egypt with European market organization through Poland, offering trade partnerships based on trust and sustainability.",
      about_title:"About Us",
      about_p1:"Eman Warsaw For Trading sp. z o.o. was established in Poland as a flexible and reliable European trading platform to serve clients in Poland and the EU.",
      about_p2:"The company represents a model that combines legal and commercial presence in Poland with direct Egyptian experience in trade and export, giving it a practical advantage in managing supply chains.",
      about_p3:"Our operations are linked to a sister company in Egypt, supporting direct follow-up from the product's origin and providing greater flexibility in coordination, specification selection, and shipping organization.",
      about_p4:"We don't just provide a product — we offer an organized commercial approach linking Egypt and Europe, based on professionalism, commitment, and market understanding.",
      about_vision_title:"Our Vision",
      about_vision:"To be a trusted partner in the European market for supplying industrial minerals and natural stone from Egypt, through a commercial model that combines proximity to the source with execution discipline.",
      about_mission_title:"Our Mission",
      about_mission:"To deliver professional supply solutions combining quality, clarity, logistical flexibility and professional follow-up, creating real and sustainable value for our clients.",
      about_values_title:"Our Values",
      about_v1:"Trust", about_v2:"Commitment", about_v3:"Professionalism",
      about_v4:"Transparency", about_v5:"Long-term Partnerships",
      products_title:"Our Products",
      products_intro:"We offer a selected range of products representing the strength of the Egypt-Europe connection, focusing on products with clear market value and organized supply capabilities.",
      products_cta:"View Details",
      logi_title:"Logistics & Supply Chain",
      logi_intro:"In raw materials and natural stone trade, logistics is a fundamental element. It encompasses more than just goods movement; it involves coordination, documentation, timing, packaging method, and continuous follow-up.",
      logi_intro2:"At Eman Warsaw For Trading, we organize the supply chain from source to client professionally and with discipline, providing greater clarity, flexibility and trust.",
      logi_what_title:"What We Offer",
      logi_what_1:"Review of required specification",
      logi_what_2:"Coordination with the source",
      logi_what_3:"Determination of packaging method",
      logi_what_4:"Preparation of commercial and technical documents",
      logi_what_5:"Shipment organization by quantity and destination",
      logi_what_6:"Continuous follow-up until receipt",
      logi_prod_title:"Products Requiring Special Logistics",
      logi_caco_title:"Calcium Carbonate",
      logi_caco_desc:"Requires clear coordination of grade, packaging and technical documentation.",
      logi_marble_title:"Natural Marble",
      logi_marble_desc:"Requires greater care in preparation, protection, packaging and transport.",
      logi_end:"Our goal is for the client to get a more organized supply experience, starting from order clarity to product arrival within a professional framework.",
      qual_title:"Quality & Documentation",
      qual_intro:"We believe that trust in international business is built on specification clarity, documentation precision, and prior agreement on product requirements.",
      qual_caco_title:"For Calcium Carbonate",
      qual_caco_intro:"Technical specifications can be discussed per client needs, including:",
      qual_caco_1:"Fineness", qual_caco_2:"Purity", qual_caco_3:"Whiteness",
      qual_caco_4:"Moisture", qual_caco_5:"Packaging", qual_caco_6:"End use",
      qual_marble_title:"For Marble",
      qual_marble_intro:"Can be discussed:",
      qual_marble_1:"Type", qual_marble_2:"Color", qual_marble_3:"Size",
      qual_marble_4:"Thickness", qual_marble_5:"Finish", qual_marble_6:"Packaging method", qual_marble_7:"Required preparation",
      qual_docs_title:"Available Documents",
      qual_note:"Documents are provided according to the nature of the product, end use, and agreed supply system.",
      market_title:"Polish & European Market",
      market_p1:"We operate from Poland, serving clients in Poland and European markets, with a special understanding of commercial requirements, the importance of fast communication, organizational precision and documentation clarity.",
      market_p2:"Our presence in Poland gives us a practical advantage in managing communication and follow-up within Europe, while our direct extension to Egypt gives us a better ability to track the product from source and coordinate supply operations flexibly.",
      market_p3:"We aim to be a practical partner for companies, distributors, importers and projects seeking an organized supplier, precise understanding of specifications, and a trade relationship based on trust and continuity.",
      contact_title:"Contact Us",
      contact_intro:"We look forward to being in contact with you to discuss your needs for calcium carbonate or natural marble, study the required specifications, and propose the most suitable solution.",
      contact_hq:"Headquarters", contact_phone:"Phone / WhatsApp",
      form_title:"Contact Form",
      form_name:"Full Name *", form_company:"Company", form_email:"Email",
      form_phone:"Phone / WhatsApp", form_country:"Country",
      form_product:"Product", form_product_caco:"Calcium Carbonate", form_product_marble:"Marble", form_product_other:"Other",
      form_spec:"Specification / Type", form_quantity:"Estimated Quantity",
      form_message:"Message", form_submit:"Send",
      form_success:"Thank you! Your message has been sent.", form_error:"An error occurred.",
      footer_rights:"All rights reserved.", fab_call:"Call"
    },
    de: {
      nav_home:"Startseite", nav_about:"Über uns", nav_products:"Produkte",
      nav_logistics:"Logistik", nav_quality:"Qualität", nav_market:"Markt", nav_contact:"Kontakt",
      hero_title:"Professionelle Lieferlösungen<br><span class='gold'>Industriemineralien & Naturstein</span>",
      hero_sub:"Ein polnisches Import-Export-Unternehmen mit ägyptischer Führung und direkter Verbindung zur Quelle in Ägypten. Wir liefern Calciumcarbonat und Naturmarmor für den polnischen und europäischen Markt.",
      hero_btn:"Produkte ansehen",
      home_welcome_title:"Willkommen bei Eman Warsaw For Trading",
      home_welcome_p1:"Wir sind ein polnisches Import-Export-Unternehmen, das ein Handelsmodell repräsentiert, das europäische Präsenz in Polen mit direkter Verbindung zur Quelle in Ägypten verbindet.",
      home_welcome_p2:"Wir glauben, dass erfolgreiche Lieferung nicht nur auf dem Produkt basiert, sondern auf Klarheit der Spezifikation, Präzision der Dokumentation, Effizienz der Koordination und professioneller Nachverfolgung.",
      home_offer_title:"Was wir anbieten",
      home_offer_1:"Calciumcarbonat-Lieferung für verschiedene industrielle Anwendungen",
      home_offer_2:"Naturmarmor-Lieferung in verschiedenen Formen und Oberflächen",
      home_offer_3:"Organisierte logistische Unterstützung von der Quelle bis zum europäischen Markt",
      home_offer_4:"Technische und kaufmännische Dokumentation je nach Produkt",
      home_products_title:"Unsere Produkte",
      home_closing:"Wir verbinden Quellqualität in Ägypten mit europäischer Marktorganisation über Polen und bieten auf Vertrauen und Nachhaltigkeit basierende Handelspartnerschaften.",
      about_title:"Über uns",
      about_p1:"Eman Warsaw For Trading sp. z o.o. wurde in Polen als flexible und zuverlässige europäische Handelsplattform gegründet.",
      about_p2:"Das Unternehmen repräsentiert ein Modell, das rechtliche und kommerzielle Präsenz in Polen mit direkter ägyptischer Erfahrung im Handel verbindet.",
      about_p3:"Unsere Tätigkeit ist mit einem Schwesterunternehmen in Ägypten verbunden und unterstützt direkte Nachverfolgung vom Ursprung.",
      about_p4:"Wir liefern nicht nur ein Produkt — wir bieten einen organisierten Handelsansatz zwischen Ägypten und Europa.",
      about_vision_title:"Unsere Vision",
      about_vision:"Ein vertrauenswürdiger Partner auf dem europäischen Markt für die Lieferung von Industriemineralien und Naturstein aus Ägypten zu sein.",
      about_mission_title:"Unsere Mission",
      about_mission:"Professionelle Lieferlösungen zu liefern, die Qualität, Klarheit, logistische Flexibilität und professionelle Nachverfolgung kombinieren.",
      about_values_title:"Unsere Werte",
      about_v1:"Vertrauen", about_v2:"Engagement", about_v3:"Professionalität",
      about_v4:"Transparenz", about_v5:"Langfristige Partnerschaften",
      products_title:"Unsere Produkte",
      products_intro:"Wir bieten eine ausgewählte Produktpalette, die die Stärke der Ägypten-Europa-Verbindung repräsentiert.",
      products_cta:"Details ansehen",
      logi_title:"Logistik & Lieferkette",
      logi_intro:"Im Handel mit Rohstoffen und Naturstein ist Logistik ein grundlegendes Element. Sie umfasst mehr als nur Warenbewegung; sie beinhaltet Koordination, Dokumentation, Timing, Verpackungsmethode und kontinuierliche Nachverfolgung.",
      logi_intro2:"Bei Eman Warsaw For Trading organisieren wir die Lieferkette von der Quelle zum Kunden professionell und mit Disziplin.",
      logi_what_title:"Was wir bieten",
      logi_what_1:"Überprüfung der erforderlichen Spezifikation",
      logi_what_2:"Koordination mit der Quelle",
      logi_what_3:"Festlegung der Verpackungsmethode",
      logi_what_4:"Vorbereitung kaufmännischer und technischer Dokumente",
      logi_what_5:"Versandorganisation nach Menge und Bestimmung",
      logi_what_6:"Kontinuierliche Nachverfolgung bis zum Empfang",
      logi_prod_title:"Produkte, die spezielle Logistik erfordern",
      logi_caco_title:"Calciumcarbonat",
      logi_caco_desc:"Erfordert klare Koordination von Qualität, Verpackung und technischer Dokumentation.",
      logi_marble_title:"Naturmarmor",
      logi_marble_desc:"Erfordert größere Sorgfalt bei Vorbereitung, Schutz, Verpackung und Transport.",
      logi_end:"Unser Ziel ist es, dem Kunden eine besser organisierte Liefererfahrung zu bieten.",
      qual_title:"Qualität & Dokumentation",
      qual_intro:"Wir glauben, dass Vertrauen im internationalen Handel auf Spezifikationsklarheit und Dokumentationspräzision aufgebaut wird.",
      qual_caco_title:"Für Calciumcarbonat",
      qual_caco_intro:"Technische Spezifikationen können je nach Kundenbedürfnissen besprochen werden:",
      qual_caco_1:"Feinheit", qual_caco_2:"Reinheit", qual_caco_3:"Weißgrad",
      qual_caco_4:"Feuchtigkeit", qual_caco_5:"Verpackung", qual_caco_6:"Endanwendung",
      qual_marble_title:"Für Marmor",
      qual_marble_intro:"Kann besprochen werden:",
      qual_marble_1:"Typ", qual_marble_2:"Farbe", qual_marble_3:"Größe",
      qual_marble_4:"Dicke", qual_marble_5:"Oberfläche", qual_marble_6:"Verpackungsmethode", qual_marble_7:"Erforderliche Vorbereitung",
      qual_docs_title:"Verfügbare Dokumente",
      qual_note:"Dokumente werden je nach Produktart, Endanwendung und vereinbartem Liefersystem bereitgestellt.",
      market_title:"Polnischer & Europäischer Markt",
      market_p1:"Wir arbeiten von Polen aus und bedienen Kunden in Polen und europäischen Märkten.",
      market_p2:"Unsere Präsenz in Polen gibt uns einen praktischen Vorteil in der Kommunikation und Nachverfolgung innerhalb Europas.",
      market_p3:"Wir streben an, ein praktischer Partner für Unternehmen, Distributoren und Projekte zu sein.",
      contact_title:"Kontakt",
      contact_intro:"Wir freuen uns, mit Ihnen in Kontakt zu treten, um Ihre Bedürfnisse an Calciumcarbonat oder Naturmarmor zu besprechen.",
      contact_hq:"Sitz", contact_phone:"Telefon / WhatsApp",
      form_title:"Kontaktformular",
      form_name:"Vollständiger Name *", form_company:"Firma", form_email:"E-Mail",
      form_phone:"Telefon / WhatsApp", form_country:"Land",
      form_product:"Produkt", form_product_caco:"Calciumcarbonat", form_product_marble:"Marmor", form_product_other:"Andere",
      form_spec:"Spezifikation / Typ", form_quantity:"Geschätzte Menge",
      form_message:"Nachricht", form_submit:"Senden",
      form_success:"Vielen Dank! Ihre Nachricht wurde gesendet.", form_error:"Ein Fehler ist aufgetreten.",
      footer_rights:"Alle Rechte vorbehalten.", fab_call:"Anrufen"
    },
    ar: {
      nav_home:"الرئيسية", nav_about:"من نحن", nav_products:"منتجاتنا",
      nav_logistics:"اللوجستيات", nav_quality:"الجودة", nav_market:"السوق الأوروبي", nav_contact:"تواصل معنا",
      hero_title:"حلول توريد احترافية<br><span class='gold'>الخامات المعدنية والحجر الطبيعي</span>",
      hero_sub:"شركة بولندية للاستيراد والتصدير، بإدارة وملكية مصرية، وارتباط مباشر بالمصدر في مصر. نقدم كربونات الكالسيوم والرخام الطبيعي للسوق البولندي والأوروبي.",
      hero_btn:"تصفح المنتجات",
      home_welcome_title:"مرحبًا بكم في Eman Warsaw For Trading",
      home_welcome_p1:"نحن شركة بولندية تعمل في مجال الاستيراد والتصدير، ونمثل نموذجًا تجاريًا يجمع بين الحضور الأوروبي في بولندا، والامتداد المباشر إلى المصدر في مصر.",
      home_welcome_p2:"نؤمن بأن التوريد الناجح لا يقوم على المنتج وحده، بل على وضوح المواصفة، ودقة المستندات، وكفاءة التنسيق، والمتابعة المهنية المستمرة.",
      home_offer_title:"ماذا نقدم؟",
      home_offer_1:"توريد كربونات الكالسيوم لمختلف التطبيقات الصناعية",
      home_offer_2:"توريد الرخام الطبيعي بمواصفات وصور تجهيز متنوعة",
      home_offer_3:"دعم لوجستي منظم من المصدر إلى السوق الأوروبي",
      home_offer_4:"مستندات فنية وتجارية بحسب طبيعة المنتج والاتفاق",
      home_products_title:"منتجاتنا",
      home_closing:"نربط بين جودة المصدر في مصر وتنظيم السوق الأوروبي عبر بولندا، لنقدّم شراكات تجارية أكثر وضوحًا وثقة واستدامة.",
      about_title:"من نحن",
      about_p1:"تأسست Eman Warsaw For Trading sp. z o.o. في بولندا لتكون منصة تجارية أوروبية مرنة وموثوقة لخدمة العملاء في بولندا والاتحاد الأوروبي، مع التركيز على بناء علاقات أعمال مستقرة تقوم على الثقة والوضوح والالتزام.",
      about_p2:"تمثل الشركة نموذجًا يجمع بين الوجود القانوني والتجاري في بولندا وبين الخبرة المصرية المباشرة في التجارة والتصدير، وهو ما يمنحها ميزة عملية في إدارة سلاسل التوريد، وفهم طبيعة المنتجات من المصدر.",
      about_p3:"ويرتبط نشاط الشركة بشركة شقيقة في مصر تعمل في التجارة والتصدير، مما يدعم المتابعة المباشرة من منشأ البضاعة، ويمنح مرونة أكبر في التنسيق، واختيار المواصفات، وتنظيم التعبئة والشحن.",
      about_p4:"نحن لا نقدم منتجًا فقط، بل نقدم منهجًا تجاريًا منظمًا يربط بين مصر وأوروبا، ويقوم على الاحترافية، والالتزام، وفهم السوق، واحترام متطلبات العميل.",
      about_vision_title:"رؤيتنا",
      about_vision:"أن نكون شريكًا موثوقًا في السوق الأوروبي لتوريد الخامات المعدنية والحجر الطبيعي من مصر، من خلال نموذج تجاري يجمع بين القرب من المصدر والانضباط في التنفيذ.",
      about_mission_title:"رسالتنا",
      about_mission:"تقديم حلول توريد احترافية تجمع بين الجودة، والوضوح، والمرونة اللوجستية، والمتابعة المهنية، بما يحقق قيمة حقيقية ومستدامة لعملائنا.",
      about_values_title:"قيمنا",
      about_v1:"الثقة", about_v2:"الالتزام", about_v3:"الاحترافية",
      about_v4:"الوضوح", about_v5:"بناء شراكات طويلة الأمد",
      products_title:"منتجاتنا",
      products_intro:"نعمل على تقديم مجموعة مختارة من المنتجات التي تعبّر عن قوة الامتداد بين مصر وأوروبا، مع التركيز على المنتجات التي تتمتع بقيمة سوقية واضحة وإمكانية توريد منظمة إلى بولندا والأسواق الأوروبية.",
      products_cta:"عرض التفاصيل",
      logi_title:"اللوجستيات وسلسلة الإمداد",
      logi_intro:"في تجارة المواد الخام والحجر الطبيعي، تمثل اللوجستيات عنصرًا أساسيًا في نجاح العملية التجارية، لأنها تشمل أكثر من مجرد حركة البضاعة؛ فهي ترتبط بالتنسيق، والمستندات، والتوقيت، وطريقة التعبئة، والمتابعة المستمرة.",
      logi_intro2:"في Eman Warsaw For Trading نعمل على تنظيم سلسلة التوريد من المصدر إلى العميل بصورة مهنية ومنضبطة، بما يوفّر قدرًا أكبر من الوضوح والمرونة والثقة.",
      logi_what_title:"ما الذي نقدمه؟",
      logi_what_1:"مراجعة المواصفة المطلوبة",
      logi_what_2:"التنسيق مع المصدر",
      logi_what_3:"تحديد طريقة التعبئة",
      logi_what_4:"تجهيز المستندات التجارية والفنية",
      logi_what_5:"تنظيم الشحن بحسب الكمية والوجهة",
      logi_what_6:"متابعة مستمرة حتى الاستلام",
      logi_prod_title:"المنتجات التي تحتاج لوجستيات خاصة",
      logi_caco_title:"كربونات الكالسيوم",
      logi_caco_desc:"يتطلب تنسيقًا واضحًا في الدرجة، والتعبئة، والمستندات الفنية.",
      logi_marble_title:"الرخام الطبيعي",
      logi_marble_desc:"يتطلب عناية أكبر في التجهيز، والحماية، والتعبئة، والنقل بحسب نوع المنتج.",
      logi_end:"هدفنا هو أن يحصل العميل على تجربة توريد أكثر تنظيمًا، تبدأ من وضوح الطلب وتنتهي بوصول المنتج ضمن إطار مهني واضح.",
      qual_title:"الجودة والمستندات",
      qual_intro:"نحن نؤمن بأن الثقة في الأعمال التجارية الدولية تُبنى على وضوح المواصفة ودقة المستندات والاتفاق المسبق على متطلبات المنتج.",
      qual_caco_title:"بالنسبة لكربونات الكالسيوم",
      qual_caco_intro:"يمكن مناقشة المواصفات الفنية بحسب احتياج العميل، بما يشمل:",
      qual_caco_1:"النعومة", qual_caco_2:"النقاوة", qual_caco_3:"البياض",
      qual_caco_4:"الرطوبة", qual_caco_5:"التعبئة", qual_caco_6:"الاستخدام النهائي",
      qual_marble_title:"بالنسبة للرخام",
      qual_marble_intro:"يمكن مناقشة:",
      qual_marble_1:"النوع", qual_marble_2:"اللون", qual_marble_3:"المقاس",
      qual_marble_4:"السماكة", qual_marble_5:"التشطيب", qual_marble_6:"طريقة التعبئة", qual_marble_7:"التجهيز المطلوب",
      qual_docs_title:"المستندات المتاحة",
      qual_note:"تُقدَّم المستندات وفق طبيعة المنتج، والاستخدام النهائي، ونظام التوريد المتفق عليه.",
      market_title:"خدمة السوق البولندي والأوروبي",
      market_p1:"نعمل من بولندا لخدمة العملاء في بولندا والأسواق الأوروبية، مع فهم خاص لطبيعة المتطلبات التجارية، وأهمية سرعة التواصل، ودقة التنظيم، ووضوح المستندات.",
      market_p2:"وجودنا في بولندا يمنحنا ميزة عملية في إدارة التواصل والمتابعة داخل أوروبا، بينما يمنحنا الامتداد المباشر إلى مصر قدرة أفضل على متابعة المنتج من المصدر وتنسيق عمليات التوريد بمرونة ووضوح.",
      market_p3:"ونحن نهدف إلى أن نكون شريكًا عمليًا للشركات والموزعين والمستوردين والمشاريع التي تبحث عن مورد منظم، وفهم دقيق للمواصفة، وعلاقة تجارية قائمة على الثقة والاستمرارية.",
      contact_title:"تواصل معنا",
      contact_intro:"يسعدنا التواصل معكم لمناقشة احتياجاتكم من كربونات الكالسيوم أو الرخام الطبيعي، ودراسة المواصفات المطلوبة، وتقديم الحل الأنسب من حيث المنتج والتعبئة وآلية التوريد.",
      contact_hq:"المقر", contact_phone:"الهاتف / واتساب",
      form_title:"نموذج التواصل",
      form_name:"الاسم بالكامل *", form_company:"اسم الشركة", form_email:"البريد الإلكتروني",
      form_phone:"رقم الهاتف / واتساب", form_country:"الدولة",
      form_product:"المنتج المطلوب", form_product_caco:"كربونات الكالسيوم", form_product_marble:"الرخام", form_product_other:"آخر",
      form_spec:"المواصفة أو النوع", form_quantity:"الكمية التقديرية",
      form_message:"الرسالة", form_submit:"إرسال",
      form_success:"شكرًا لك! تم إرسال رسالتك بنجاح.", form_error:"حدث خطأ. برجاء المحاولة مرة أخرى.",
      footer_rights:"جميع الحقوق محفوظة.", fab_call:"اتصل"
    }
  }
};

/* ---------- State ---------- */
let CONTENT = {};
let PRODUCTS = [];
let currentLang = localStorage.getItem('ew_lang') || 'pl';

/* ---------- Helpers ---------- */
function t(key) {
  return (CONTENT.translations?.[currentLang]?.[key]) ?? (DEFAULT_CONTENT.translations[currentLang]?.[key]) ?? key;
}

function loc(obj) {
  if (!obj) return '';
  return obj[currentLang] || obj.en || obj.pl || obj.ar || obj.de || '';
}

async function loadContent() {
  try {
    const { data } = await sb.from('site_content').select('content').eq('id', 1).single();
    if (data?.content && Object.keys(data.content).length > 0) {
      CONTENT = mergeDeep(deepClone(DEFAULT_CONTENT), data.content);
    } else {
      CONTENT = deepClone(DEFAULT_CONTENT);
      await sb.from('site_content').upsert({ id:1, content:CONTENT });
    }
  } catch(e) {
    console.warn('Using defaults:', e);
    CONTENT = deepClone(DEFAULT_CONTENT);
  }
}

async function loadProducts() {
  try {
    const { data } = await sb.from('eman_products')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });
    // الاحتفاظ بآخر منتجين فقط (حذف أول 16 منتج وأي منتجات قبل الأخيرين)
    PRODUCTS = (data || []).slice(-2);
  } catch(e) {
    console.warn('Products failed:', e);
    PRODUCTS = [];
  }
}

function deepClone(o){ return JSON.parse(JSON.stringify(o)); }
function mergeDeep(target, source) {
  for (const k in source) {
    const sv = source[k];
    if (sv === null || sv === undefined) continue;
    // لو array: استخدم البيانات من السوبا بيز بس لو مش فارضة
    if (Array.isArray(sv)) {
      target[k] = (sv.length > 0) ? sv : (target[k] || sv);
    } else if (typeof sv === 'object') {
      if (!target[k] || typeof target[k] !== 'object') target[k] = {};
      mergeDeep(target[k], sv);
    } else {
      target[k] = sv;
    }
  }
  return target;
}

/* ---------- Navbar + Footer rendering ---------- */
function renderNavbar(activePage) {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.innerHTML = `
    <div class="container">
      <a href="index.html" class="nav-brand">
        <img src="logo.png" alt="Logo" onerror="this.style.display='none'"/>
        <div class="nav-brand-text">${CONTENT.brand?.name || 'EMAN WARSAW'}<span>${CONTENT.brand?.subname || 'For Trading sp. z o.o.'}</span></div>
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" data-nav="home" class="${activePage==='home'?'active':''}" data-key="nav_home"></a></li>
        <li><a href="about.html" data-nav="about" class="${activePage==='about'?'active':''}" data-key="nav_about"></a></li>
        <li><a href="products.html" data-nav="products" class="${activePage==='products'?'active':''}" data-key="nav_products"></a></li>
        <li><a href="logistics.html" data-nav="logistics" class="${activePage==='logistics'?'active':''}" data-key="nav_logistics"></a></li>
        <li><a href="quality.html" data-nav="quality" class="${activePage==='quality'?'active':''}" data-key="nav_quality"></a></li>
        <li><a href="market.html" data-nav="market" class="${activePage==='market'?'active':''}" data-key="nav_market"></a></li>
        <li><a href="contact.html" data-nav="contact" class="${activePage==='contact'?'active':''}" data-key="nav_contact"></a></li>
        <li>
          <div class="lang-dropdown" id="langDropdown">
            <button class="lang-btn"><i class="fas fa-globe"></i> <span id="langBtnLabel">${LANG_NAMES[currentLang]}</span> <i class="fas fa-chevron-down"></i></button>
            <div class="lang-menu">
              ${LANGS.map(l=>`<button data-lang="${l}" class="${l===currentLang?'active':''}">${LANG_FLAGS[l]} ${LANG_NAMES[l]}</button>`).join('')}
            </div>
          </div>
        </li>
      </ul>
      <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
    </div>`;
  bindNavbar();
}

function renderFooter() {
  const f = document.getElementById('footer');
  if (!f) return;
  const c = CONTENT.contact || {};
  f.innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="logo.png" alt="Logo" onerror="this.style.display='none'"/>
          <span>${CONTENT.brand?.name || 'EMAN WARSAW'}</span>
        </div>
        <p class="footer-copy">&copy; 2026 Eman Warsaw For Trading sp. z o.o. <span>${t('footer_rights')}</span></p>
      </div>
      <div class="footer-bottom">
        <a href="https://www.zero--nine.online/" target="_blank" rel="noopener" class="footer-dev-frame" aria-label="Zero-Nine">
          <video class="footer-dev-video" autoplay loop muted playsinline>
            <source src="zero-nine-intro.mp4" type="video/mp4">
          </video>
        </a>
      </div>
    </div>`;
}

function renderFAB() {
  const f = document.getElementById('fab');
  if (!f) return;
  const c = CONTENT.contact || {};
  f.innerHTML = `
    <div class="fab-menu" id="fabMenu">
      <a href="https://wa.me/${(c.whatsapp||'').replace(/\D/g,'')}" target="_blank" class="fab-link fab-wa"><i class="fab fa-whatsapp"></i><span class="fab-tip">WhatsApp</span></a>
      <a href="tel:${(c.phone||'').replace(/\s/g,'')}" class="fab-link fab-ph"><i class="fas fa-phone-alt"></i><span class="fab-tip">${t('fab_call')}</span></a>
      <a href="${c.facebook||'#'}" target="_blank" class="fab-link fab-fb"><i class="fab fa-facebook-f"></i><span class="fab-tip">Facebook</span></a>
      <a href="mailto:${c.email||''}" class="fab-link fab-em"><i class="fas fa-envelope"></i><span class="fab-tip">E-mail</span></a>
    </div>
    <button class="fab-btn" id="fabBtn" aria-label="Contact"><i class="fas fa-plus"></i></button>`;
  const btn = document.getElementById('fabBtn');
  const menu = document.getElementById('fabMenu');
  btn.addEventListener('click', () => { btn.classList.toggle('active'); menu.classList.toggle('open'); });
  document.addEventListener('click', e => { if (!e.target.closest('#fab')) { btn.classList.remove('active'); menu.classList.remove('open'); }});
}

function bindNavbar() {
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (ham) ham.addEventListener('click', () => { ham.classList.toggle('active'); links.classList.toggle('open'); });

  const dd = document.getElementById('langDropdown');
  if (dd) {
    dd.addEventListener('click', e => { e.stopPropagation(); dd.classList.toggle('open'); });
    document.addEventListener('click', () => dd.classList.remove('open'));
    dd.querySelectorAll('[data-lang]').forEach(b => {
      b.addEventListener('click', e => { e.stopPropagation(); setLang(b.dataset.lang); dd.classList.remove('open'); });
    });
  }

  window.addEventListener('scroll', () => {
    const n = document.getElementById('navbar');
    if (n) n.classList.toggle('scrolled', scrollY > 50);
  });
}

/* ---------- Language switching ---------- */
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('ew_lang', lang);
  applyLang();
}

function applyLang() {
  const isRtl = RTL.includes(currentLang);
  document.documentElement.lang = currentLang;
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', isRtl);

  const lbl = document.getElementById('langBtnLabel');
  if (lbl) lbl.textContent = LANG_NAMES[currentLang];
  document.querySelectorAll('.lang-menu button').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));

  document.querySelectorAll('[data-key]').forEach(el => {
    const k = el.dataset.key;
    const v = t(k);
    if (v !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = v;
      else el.innerHTML = v;
    }
  });
  document.querySelectorAll('[data-key-ph]').forEach(el => { el.placeholder = t(el.dataset.keyPh); });
  document.querySelectorAll('[data-loc]').forEach(el => {
    try { const o = JSON.parse(el.dataset.loc); el.textContent = loc(o); } catch(e){}
  });

  if (window.onLangChange) window.onLangChange(currentLang);
}

/* ---------- Preloader ---------- */
function hidePreloader() {
  const p = document.getElementById('preloader');
  if (p) setTimeout(() => p.classList.add('hidden'), 400);
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ---------- Smooth scroll ---------- */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || a.getAttribute('href') === '#') return;
  const href = a.getAttribute('href');
  if (href.length < 2) return;
  const t = document.querySelector(href);
  if (t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); }
});

/* ---------- Bootstrap ---------- */
async function sharedInit(activePage) {
  await Promise.all([loadContent(), loadProducts()]);
  renderNavbar(activePage);
  renderFooter();
  renderFAB();
  applyLang();
  hidePreloader();
  initReveal();
  if (window.onReady) window.onReady();
}

window.EW = { sb, t, loc, LANGS, RTL, sharedInit, getContent: () => CONTENT, getProducts: () => PRODUCTS, getLang: () => currentLang };
