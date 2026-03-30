export interface PracticeArea {
  slug: string;
  title: { en: string; ne: string };
  description: { en: string; ne: string };
  validity: { en: string; ne: string };
  detailedContent: { en: string; ne: string }[];
}

export const practiceAreasData: PracticeArea[] = [
  {
    slug: "corporate-law",
    title: { en: "Corporate Law", ne: "कर्पोरेट कानून" },
    description: { 
      en: "Comprehensive legal counsel for businesses, from incorporation to complex mergers and acquisitions.", 
      ne: "कम्पनी दर्ता देखि जटिल मर्जर र एक्विजिसन सम्मका व्यवसायहरूका लागि व्यापक कानूनी परामर्श।" 
    },
    validity: {
      en: "Governed primarily by the Companies Act, 2063 (2006) and the Industrial Enterprises Act, 2076 (2020) of Nepal.",
      ne: "मुख्यतया नेपालको कम्पनी ऐन, २०६३ र औद्योगिक व्यवसाय ऐन, २०७६ द्वारा निर्देशित।"
    },
    detailedContent: [
      { en: "Company registration and structural compliance with the OCR.", ne: "कम्पनी रजिष्ट्रारको कार्यालय (OCR) मा कम्पनी दर्ता र संरचनात्मक अनुपालन।" },
      { en: "Drafting Articles of Association and Memorandum of Association.", ne: "प्रबन्धपत्र र नियमावलीको मस्यौदा तयार गर्ने।" },
      { en: "Advice on Foreign Direct Investment (FDI) regulations.", ne: "वैदेशिक प्रत्यक्ष लगानी (FDI) नियम र स्वीकृति सम्बन्धी सल्लाह।" },
      { en: "Corporate governance and shareholder agreements.", ne: "कर्पोरेट सुशासन र शेयरधनी सम्झौताहरू।" }
    ]
  },
  {
    slug: "criminal-defense",
    title: { en: "Criminal Defense", ne: "फौजदारी रक्षा" },
    description: { 
      en: "Legal representation and consultancy for criminal proceedings and defense matters.", 
      ne: "फौजदारी कार्यवाही र रक्षा मामिलाहरूको लागि कानूनी प्रतिनिधित्व र परामर्श।" 
    },
    validity: {
      en: "Based on the National Penal (Code) Act, 2074 and Criminal Procedure Act, 2074.",
      ne: "मुलुकी अपराध (संहिता) ऐन, २०७४ र मुलुकी फौजदारी कार्यविधि (संहिता) ऐन, २०७४ मा आधारित।"
    },
    detailedContent: [
      { en: "Defense against white-collar crimes and fraud.", ne: "सेतोपोश अपराध र ठगी विरुद्ध रक्षा।" },
      { en: "Representation in District, High, and Supreme Courts.", ne: "जिल्ला, उच्च र सर्वोच्च अदालतहरूमा प्रतिनिधित्व।" },
      { en: "Legal assistance during police investigations.", ne: "प्रहरी अनुसन्धानको क्रममा कानूनी सहायता।" },
      { en: "Bail applications and Habeas Corpus petitions.", ne: "जमानत आवेदन र बन्दी प्रत्यक्षीकरण रिटहरू।" }
    ]
  },
  {
    slug: "family-divorce",
    title: { en: "Family & Divorce", ne: "पारिवारिक र सम्बन्धविच्छेद" },
    description: { 
      en: "Guidance and representation for family-related legal matters and matrimonial proceedings.", 
      ne: "परिवारसँग सम्बन्धित कानूनी मामिलाहरू र वैवाहिक कार्यवाहीका लागि मार्गदर्शन र प्रतिनिधित्व।" 
    },
    validity: {
      en: "Regulated by the National Civil (Code) Act, 2074 under Family Law.",
      ne: "मुलुकी देवानी (संहिता) ऐन, २०७४ को 'पारिवारिक कानून' अन्तर्गत विनियमित।"
    },
    detailedContent: [
      { en: "Divorce proceedings and property division.", ne: "सम्बन्धविच्छेदको कार्यवाही र अंशबण्डा।" },
      { en: "Child custody and guardianship disputes.", ne: "बच्चाको जिम्मा र संरक्षण सम्बन्धी विवादहरू।" },
      { en: "Legalization of marriages and registration.", ne: "विवाहको वैधानिकता र दर्ता।" },
      { en: "Inheritance and partition of ancestral property.", ne: "अपुताली र पैतृक सम्पत्तिको अंशबण्डा।" }
    ]
  },
  {
    slug: "real-estate-law",
    title: { en: "Real Estate Law", ne: "घरजग्गा कानून" },
    description: { 
      en: "Facilitation for property transactions, land registration, and related disputes.", 
      ne: "सम्पत्ति कारोबार, जग्गा दर्ता, र सम्बन्धित विवादहरूको लागि सहजीकरण।" 
    },
    validity: {
      en: "Governed by the Land Act, 2021 and National Civil (Code) Act, 2074.",
      ne: "जग्गा प्राप्ति ऐन, २०२१ र मुलुकी देवानी (संहिता) ऐन, २०७४ द्वारा निर्देशित।"
    },
    detailedContent: [
      { en: "Due diligence for land purchase (Lal-Purja).", ne: "जग्गा खरीदको लागि कानूनी जाँच (लालपुर्जा)।" },
      { en: "Sale-purchase agreements and Malpot registration.", ne: "खरीद-बिक्री सम्झौता र मालपोत दर्ता।" },
      { en: "Dispute resolution regarding boundaries and tenancy.", ne: "जग्गाको सिमाना र मोहियानी सम्बन्धी विवाद समाधान।" },
      { en: "Legal advice on apartment/condominium ownership.", ne: "अपार्टमेन्ट/कोलोनी स्वामित्व सम्बन्धी कानूनी सल्लाह।" }
    ]
  },
  {
    slug: "banking-finance",
    title: { en: "Banking & Finance", ne: "बैंकिङ र वित्त" },
    description: { 
      en: "Navigating regulatory landscapes and consultancy for structural financing.", 
      ne: "नियमनकारी परिदृश्य र संरचनात्मक वित्तिय परामर्श।" 
    },
    validity: {
      en: "Compliance with BAFIA, 2073 and NRB directives.",
      ne: "बाफिया (BAFIA), २०७३ र नेपाल राष्ट्र बैंकका निर्देशनहरूको अनुपालन।"
    },
    detailedContent: [
      { en: "Loan documentation and security creation.", ne: "कर्जा कागजात र सुरक्षण सिर्जना।" },
      { en: "Debt recovery and DRT representation.", ne: "कर्जा असुली र ऋण असुली न्यायाधिकरण (DRT) प्रतिनिधित्व।" },
      { en: "Compliance audits for financial institutions.", ne: "वित्तीय संस्थाहरूको लागि अनुपालन अडिट।" },
      { en: "Advice on foreign exchange regulations.", ne: "विदेशी विनिमय नियमहरू सम्बन्धी सल्लाह।" }
    ]
  },
  {
    slug: "intellectual-property",
    title: { en: "Intellectual Property", ne: "बौद्धिक सम्पत्ति" },
    description: { 
      en: "Safeguarding innovations, trademarks, and creative assets.", 
      ne: "नयाँ आविष्कार, ट्रेडमार्क र रचनात्मक सम्पत्तिको सुरक्षा।" 
    },
    validity: {
      en: "Regulated under PTDA, 2022 and Copyright Act, 2059.",
      ne: "प्याटेन्ट, डिजाइन र ट्रेडमार्क ऐन, २०२२ र प्रतिलिपि अधिकार ऐन, २०५९ अन्तर्गत विनियमित।"
    },
    detailedContent: [
      { en: "Trademark registration and protection.", ne: "ट्रेडमार्क दर्ता र सुरक्षा।" },
      { en: "Copyright registration for artistic works.", ne: "कलात्मक कार्यहरूको लागि प्रतिलिपि अधिकार दर्ता।" },
      { en: "Patent filings for industrial innovations.", ne: "औद्योगिक आविष्कारहरूको लागि प्याटेन्ट दर्ता।" },
      { en: "Drafting licensing and franchising agreements.", ne: "लाइसेन्सिङ र फ्रेन्चाइजिङ सम्झौताहरूको मस्यौदा।" }
    ]
  }
];
