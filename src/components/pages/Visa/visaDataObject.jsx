const ausVisaProcess = [
  {
    title: "Choose a school",
    description:
      "First, you need to choose an approved education provider in Australia that you would like to attend. You will need to provide proof of your academic credentials and English proficiency.",
  },
  {
    title: "Apply to the school",
    description:
      "After you have chosen a school, you need to apply for admission. The school will provide you with an electronic confirmation of enrolment (eCoE), which you will need to apply for a student visa.",
  },
  {
    title: "Check your eligibility",
    description:
      "You will need to check that you meet the eligibility criteria for an Australia Student visa, including the English language requirement, financial capacity requirement, and the genuineness of your course and enrolment.",
  },
  {
    title: "Apply for a student visa",
    description:
      "You will need to apply for a student visa online through the Department of Home Affairs website. You will need to provide information about your background, education, and plans for studying in Australia.",
  },
  {
    title: "Pay the visa application charge",
    description:
      "After you have submitted your student visa application, you will need to pay the visa application charge, which is currently AUD$ 620 for most applicants.",
  },
  {
    title: "Provide supporting documents",
    description:
      "You will need to provide supporting documents, including your eCoE, proof of financial capacity, and evidence of English language proficiency. You may also need to provide biometric information, a health examination, and a character assessment, depending on your individual circumstances.",
  },
  {
    title: "Wait for a decision",
    description:
      "After you have submitted your student visa application and provided all the required documents, processing times will depend on where you apply and the time of year. You will receive a decision on your student visa application by email.",
  },
  {
    title: "Prepare for your trip to Australia",
    description:
      "If your student visa is approved, you can start making arrangements for your trip to Australia, including booking travel and accommodation.",
  },
];

const usVisaProcess = [
  {
    step: 1,
    title: "Choose a school",
    description:
      "First, you need to choose an accredited school in the U.S. that you would like to attend. You will also need to provide proof of your academic credentials and English proficiency.",
  },
  {
    step: 2,
    title: "Apply to the school",
    description:
      "After you have chosen a school, you need to apply for admission. The school will provide you with an I-20 form, which is a document that certifies that you have been accepted and that you are eligible for an F-1 visa.",
  },
  {
    step: 3,
    title: "Pay the SEVIS fee",
    description:
      "The Student and Exchange Visitor Information System (SEVIS) fee is a mandatory fee that you need to pay before you can apply for an F-1 visa. This fee is used to maintain the SEVIS database and covers the cost of your SEVIS record.",
  },
  {
    step: 4,
    title: "Schedule an interview",
    description:
      "Once the SEVIS fee is paid, schedule a visa interview at the US embassy or consulate in India. Required documents for the interview include: passport, completed DS-160 form, a 2x2 inch photograph, I-20 form from your school, proof of financial support, proof of ties to your home country, and any additional documents requested by the embassy or consulate.",
  },
  {
    step: 5,
    title: "Attend the interview",
    description:
      "On the day of the interview, you need to arrive at the embassy or consulate on time and bring all the required documents. During the interview, a consular officer will ask questions about your academic plans, financial support, and ties to your home country.",
  },
  {
    step: 6,
    title: "Wait for a decision",
    description:
      "After the interview, the consular officer will review your application and make a decision. If your visa is approved, you will receive your passport with the visa stamp. If your visa is denied, you will receive a letter explaining the reasons for the denial.",
  },
  {
    step: 7,
    title: "Prepare for your trip to the U.S.",
    description:
      "Once you have received your visa, you can start making arrangements for your trip to the U.S. You should also make sure that you have enough money to cover your living expenses during your first few months in the U.S.",
  },
];
const ukVisaProcess = [
  {
    title: "Choose a school",
    description:
      "First, you need to choose a school or college in the UK that you would like to attend. You will need to provide proof of your academic credentials and English proficiency.",
  },
  {
    title: "Apply to the school",
    description:
      "After you have chosen a school, you need to apply for admission. The school will provide you with a confirmation of acceptance for studies (CAS) number, a unique reference number you will need to obtain a Tier 4 visa.",
  },
  {
    title: "Check your eligibility",
    description:
      "You will need to check that you meet the eligibility criteria for a Tier 4 visa, including the English language requirement, maintenance (funds) requirement, and the genuineness of your course and sponsorship.",
  },
  {
    title: "Complete the online visa application",
    description:
      "You will need to complete the online Tier 4 visa application form, which will include questions about your personal details, travel history, and education. You will also need to upload a recent passport-style photo.",
  },
  {
    title: "Pay the visa fee",
    description:
      "After you have completed the online application form, you will need to pay the visa fee. The fee depends on the length of your course and where you apply.",
  },
  {
    title: "Provide supporting documents",
    description:
      "You will need to provide supporting documents, including your passport, CAS statement, evidence of maintenance funds, and proof of English language proficiency.",
  },
  {
    title: "Book a biometric appointment",
    description:
      "You will need to book a biometric appointment at a UK visa application centre, where you will provide your fingerprints and a digital photograph.",
  },
  {
    title: "Wait for a decision",
    description:
      "After you have provided all the required documents and completed the biometric appointment, the UK visa processing time will depend on where you apply and the time of year. You will receive a decision on your visa application by email.",
  },
  {
    title: "Prepare for your trip to the UK",
    description:
      "If your visa is approved, you will receive your passport with the visa stamp. You can then start making arrangements for your trip to the UK, including booking travel and accommodation.",
  },
];
const caVisaProcess = [
  {
    title: "Choose a school",
    description:
      "Choose an eligible Designated Learning Institution (DLI) in Canada that you would like to attend. Provide proof of your academic credentials and English proficiency.",
  },
  {
    title: "Apply to the school",
    description:
      "Apply for admission to the school of your choice. The school will provide you with a letter of acceptance, which you will need to apply for a student visa.",
  },
  {
    title: "Check your eligibility",
    description:
      "Check that you meet the eligibility criteria for a Canada Student visa, including the language proficiency requirement, financial support requirement, and the genuineness of your course and institution.",
  },
  {
    title: "Apply for a study permit",
    description:
      "Apply for a study permit online or on paper, depending on your circumstances and location. Provide information about your background, education, and plans for studying in Canada.",
  },
  {
    title: "Pay the processing fee",
    description:
      "After submitting your study permit application, pay the processing fee, which is currently CAD$150 for most applicants.",
  },
  {
    title: "Provide supporting documents",
    description:
      "Provide supporting documents, including your letter of acceptance, proof of financial support, and proof of language proficiency. You may also need to provide a police certificate and medical examination results, depending on your individual circumstances.",
  },
  {
    title: "Wait for a decision",
    description:
      "After submitting your study permit application and providing all the required documents, processing times will depend on where you apply and the time of year. You will receive a decision on your study permit application by mail or email.",
  },
  {
    title: "Prepare for your trip to Canada",
    description:
      "If your study permit is approved, you will receive your study permit and a visa (if required) in your passport. Start making arrangements for your trip to Canada, including booking travel and accommodation.",
  },
];
export { usVisaProcess, ukVisaProcess, caVisaProcess, ausVisaProcess };
