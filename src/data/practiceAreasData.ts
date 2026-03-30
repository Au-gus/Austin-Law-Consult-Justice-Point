export interface PracticeArea {
  slug: string;
  title: string;
  description: string;
  validity: string;
  detailedContent: string[];
}

export const practiceAreasData: PracticeArea[] = [
  {
    slug: "corporate-law",
    title: "Corporate Law",
    description: "Comprehensive legal counsel for businesses, from incorporation to complex mergers and acquisitions.",
    validity: "Governed primarily by the Companies Act, 2063 (2006) and the Industrial Enterprises Act, 2076 (2020) of Nepal.",
    detailedContent: [
      "Company registration and structural compliance with the Office of the Company Registrar (OCR).",
      "Drafting and reviewing Articles of Association and Memorandum of Association.",
      "Advice on Foreign Direct Investment (FDI) regulations and approvals from the Department of Industries (DOI).",
      "Corporate governance, shareholder agreements, and dispute resolution.",
      "Regulatory compliance with the Securities Board of Nepal (SEBON) for listed companies."
    ]
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    description: "Legal representation and consultancy for criminal proceedings and defense matters.",
    validity: "Based on the National Penal (Code) Act, 2074 (2017) and National Criminal Procedure (Code) Act, 2074 (2017) of Nepal.",
    detailedContent: [
      "Defense against white-collar crimes, fraud, and financial irregularities.",
      "Representation in District Courts, High Courts, and the Supreme Court of Nepal.",
      "Legal assistance during police investigations and custody.",
      "Bail applications and petitioning for the 'Writ of Habeas Corpus' when necessary.",
      "Expertise in cybercrime cases under the Electronic Transactions Act, 2063."
    ]
  },
  {
    slug: "family-divorce",
    title: "Family & Divorce",
    description: "Guidance and representation for family-related legal matters and matrimonial proceedings.",
    validity: "Regulated by the National Civil (Code) Act, 2074 (2017) under the 'Family Law' section of Nepal.",
    detailedContent: [
      "Divorce proceedings (mutual consent and contested) and property division.",
      "Child custody, maintenance, and guardianship disputes.",
      "Legalization of marriages and registration processes.",
      "Adoption laws and international adoption compliance.",
      "Inheritance and partition of ancestral property (Ansha-Banda)."
    ]
  },
  {
    slug: "real-estate-law",
    title: "Real Estate Law",
    description: "Facilitation and consultancy for property transactions, land registration, and related disputes.",
    validity: "Governed by the Land Act, 2021 (1964) and the National Civil (Code) Act, 2074 (2017) of Nepal.",
    detailedContent: [
      "Due diligence for land purchase and ownership verification (Lal-Purja).",
      "Drafting sale-purchase agreements and registration at the Land Revenue Office (Malpot).",
      "Dispute resolution regarding land boundaries, encroachment, and tenancy rights.",
      "Lease agreements for commercial and residential properties.",
      "Legal advice on apartment/condominium ownership and joint housing projects."
    ]
  },
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    description: "Navigating regulatory landscapes and consultancy for structural financing and banking law.",
    validity: "Compliance with the Bank and Financial Institutions Act (BAFIA), 2073 and Nepal Rastra Bank directives.",
    detailedContent: [
      "Loan documentation, security creation, and mortgage registration.",
      "Debt recovery and representation in the Debt Recovery Tribunal (DRT).",
      "Compliance audits for banks and financial institutions.",
      "Advice on foreign exchange regulations and banking licenses.",
      "Legal structural advice for fintech startups and digital payment gateways."
    ]
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    description: "Consultancy for safeguarding innovations, trademarks, and creative assets under registration.",
    validity: "Regulated under the Patent, Design and Trademark Act, 2022 (1965) and the Copyright Act, 2059 (2002) of Nepal.",
    detailedContent: [
      "Trademark registration and protection against 'passing off'.",
      "Copyright registration for literary, artistic, and musical works.",
      "Patent filings for industrial innovations and technical designs.",
      "IP litigation and enforcement against counterfeiting.",
      "Drafting licensing and franchising agreements for domestic and international brands."
    ]
  }
];
