import type { Treatment } from '../types/content';

/**
 * Treatment catalogue.
 * Set `enabled: false` on any service the hospital does not currently offer —
 * disabled entries disappear from the site without any code change.
 * Content is informational only and makes no claims about outcomes.
 */
export const treatments: Treatment[] = [
{
  slug: 'pregnancy-antenatal-care',
  title: 'Pregnancy & Antenatal Care',
  group: 'Pregnancy & Maternity',
  summary:
  'Regular consultations, scans and guidance through every trimester, so each visit answers what matters now.',
  image: "/c9e578d5-8f10-46aa-9f3e-f255797c2688.jpg",

  imageAlt:
  'Pregnant woman in consultation with a female gynaecologist in a bright clinic room',
  enabled: true,
  overview: [
  'Antenatal care is the schedule of consultations, examinations and scans that follow a pregnancy from the first confirmed weeks through to delivery. Each visit reviews the mother’s health, the baby’s growth and anything new that has come up since the last consultation.',
  'At Sree Avani, antenatal visits are consultation-led. Reports are explained in plain language, questions are welcomed, and the plan for the coming weeks is written down before you leave.'],

  whoItIsFor: [
  'Women who have recently confirmed a pregnancy',
  'Women transferring antenatal care from another hospital',
  'Women planning a pregnancy who want a pre-conception consultation'],

  whatWeProvide: [
  'Trimester-wise antenatal consultations and examination',
  'Routine antenatal investigations and scan guidance',
  'Nutrition, supplement and lifestyle counselling',
  'Monitoring of blood pressure, weight and foetal growth',
  'Birth planning discussion and delivery preparation',
  'Guidance for the partner and family on what to expect'],

  consultationProcess: [
  { step: 'Booking', text: 'Request an appointment by phone, WhatsApp or the form on this site.' },
  { step: 'First consultation', text: 'History, examination and a review of any existing reports.' },
  { step: 'Care plan', text: 'A visit schedule and investigation list for the weeks ahead.' },
  { step: 'Follow-up', text: 'Scheduled reviews, with earlier visits whenever something needs attention.' }],

  whenToConsult: [
  'A positive pregnancy test, or a missed period with a possibility of pregnancy',
  'Bleeding, cramping or unusual pain during pregnancy',
  'Reduced foetal movement in later pregnancy',
  'Any existing condition such as diabetes, thyroid disorder or high blood pressure'],

  faqs: [
  {
    q: 'When should I book my first antenatal visit?',
    a: 'As soon as a pregnancy is confirmed. An early consultation helps establish dates and plan the investigations that are best done in the first trimester.'
  },
  {
    q: 'What should I bring to an antenatal consultation?',
    a: 'Any previous prescriptions, scan reports, blood reports and a list of medicines you are currently taking.'
  },
  {
    q: 'Can my husband or family member come with me?',
    a: 'Yes. Family members are welcome in the consultation so that guidance is heard and understood together.'
  }]

},
{
  slug: 'high-risk-pregnancy-care',
  title: 'High-Risk Pregnancy Care',
  group: 'Pregnancy & Maternity',
  summary:
  'Closer monitoring and a more frequent review schedule when a pregnancy needs additional attention.',
  image: "/9d6a31fd-f087-4147-8890-649233518ddd.jpg",

  imageAlt:
  'Female doctor performing a routine ultrasound scan for a pregnant patient in a hospital scan room',
  enabled: true,
  overview: [
  'Some pregnancies need watching more closely — because of the mother’s medical history, a previous pregnancy, or something identified during a scan or investigation. This does not mean something is wrong; it means the care schedule adapts.',
  'Care is built around more frequent reviews, targeted investigations and clear instructions on what to watch for at home, along with onward referral where a specialist opinion is required.'],

  whoItIsFor: [
  'Women with high blood pressure, diabetes or thyroid conditions in pregnancy',
  'Women with a previous caesarean, miscarriage or pregnancy complication',
  'Twin or multiple pregnancy',
  'Pregnancy after fertility treatment, or at an older maternal age'],

  whatWeProvide: [
  'Individual risk assessment at the first consultation',
  'A closer review and monitoring schedule',
  'Coordination of investigations and specialist opinion when needed',
  'Counselling on warning signs and when to come in immediately',
  'Delivery planning discussed well before the due date'],

  consultationProcess: [
  { step: 'Assessment', text: 'A detailed review of history, reports and current pregnancy findings.' },
  { step: 'Plan', text: 'A monitoring schedule with the investigations that apply to your situation.' },
  { step: 'Review', text: 'Frequent consultations, with findings explained at each visit.' },
  { step: 'Delivery planning', text: 'A discussion of the safest approach for mother and baby.' }],

  whenToConsult: [
  'You have been told a previous pregnancy was complicated',
  'You have a long-standing medical condition and are pregnant or planning to be',
  'A scan or report has raised a concern',
  'Severe headache, swelling, breathlessness or visual disturbance in pregnancy'],

  faqs: [
  {
    q: 'Does high-risk mean my pregnancy is in danger?',
    a: 'No. It is a care category, not a prediction. It means the pregnancy is reviewed more often so that anything needing attention is picked up early.'
  },
  {
    q: 'Will I need more scans and tests?',
    a: 'Often yes, and the reason for each one is explained at the consultation before it is advised.'
  }]

},
{
  slug: 'normal-delivery-support',
  title: 'Normal Delivery Support',
  group: 'Pregnancy & Maternity',
  summary:
  'Preparation, labour support and a calm delivery environment, with the aim of a safe normal birth wherever possible.',
  image: "/909607bc-f021-4c32-bd67-8f1fb526a8ad.jpg",

  imageAlt: 'A calm, prepared labour and delivery room in a modern hospital',
  enabled: true,
  overview: [
  'Where a pregnancy allows for it, normal delivery is supported and encouraged. Preparation begins in the antenatal period — understanding the stages of labour, breathing and positioning, and what will happen once you are admitted.',
  'During labour, the mother is monitored continuously and kept informed. Decisions are discussed as they arise rather than announced afterwards.'],

  whoItIsFor: [
  'Women planning a vaginal birth',
  'First-time mothers who want to understand the labour process',
  'Women who have had a normal delivery previously'],

  whatWeProvide: [
  'Antenatal preparation for labour and breathing guidance',
  'Monitoring of mother and baby through the stages of labour',
  'Pain relief options discussed in advance',
  'Support for early skin-to-skin contact and first feed',
  'Immediate newborn care after birth'],

  consultationProcess: [
  { step: 'Birth discussion', text: 'A conversation about your preferences during the antenatal period.' },
  { step: 'Admission', text: 'Assessment on arrival and an explanation of what happens next.' },
  { step: 'Labour support', text: 'Continuous monitoring with the doctor and nursing team present.' },
  { step: 'After birth', text: 'Newborn checks, feeding support and recovery observation.' }],

  whenToConsult: [
  'Regular, strengthening contractions',
  'Leaking of fluid or any bleeding',
  'Reduced movement of the baby',
  'Any instruction from your doctor to come in'],

  faqs: [
  {
    q: 'Can I discuss my delivery preferences beforehand?',
    a: 'Yes, and it is encouraged. Preferences are noted during antenatal visits and revisited as the due date approaches.'
  },
  {
    q: 'Who will be with me during labour?',
    a: 'The doctor and the nursing team. Arrangements for a family member are confirmed at the time of admission.'
  }]

},
{
  slug: 'caesarean-postnatal-care',
  title: 'Caesarean & Postnatal Care',
  group: 'Pregnancy & Maternity',
  summary:
  'Planned or emergency caesarean care, followed by recovery, feeding and newborn support after discharge.',
  image: "/27d19b92-d91f-4da5-933f-dd426296c9bb.jpg",

  imageAlt: 'Nurse supporting a new mother holding her newborn in a postnatal recovery room',
  enabled: true,
  overview: [
  'A caesarean delivery may be planned in advance or become the safer option during labour. In either case the reason is explained, consent is taken with that explanation, and recovery is planned from the first day.',
  'Postnatal care continues after the delivery — wound and recovery review, feeding support, newborn guidance and a follow-up schedule after discharge.'],

  whoItIsFor: [
  'Women advised a planned caesarean delivery',
  'Women with a previous caesarean discussing options for this pregnancy',
  'New mothers in the weeks following any delivery'],

  whatWeProvide: [
  'Pre-operative assessment and counselling for planned caesarean',
  'Post-operative pain management and wound review',
  'Breastfeeding and lactation guidance',
  'Newborn care instruction for the family',
  'Postnatal consultations and contraception counselling',
  'Guidance on nutrition and gradual return to activity'],

  consultationProcess: [
  { step: 'Counselling', text: 'The reason, the procedure and the recovery explained before consent.' },
  { step: 'Delivery', text: 'The procedure performed with the operating and nursing team.' },
  { step: 'Recovery', text: 'In-hospital monitoring, feeding support and mobility guidance.' },
  { step: 'Follow-up', text: 'Scheduled postnatal reviews for mother and baby.' }],

  whenToConsult: [
  'Fever, increasing pain or discharge from the wound after delivery',
  'Heavy bleeding in the postnatal period',
  'Difficulty with breastfeeding or concerns about the baby’s feeding',
  'Persistent low mood, anxiety or sleeplessness after delivery'],

  faqs: [
  {
    q: 'How long is the recovery after a caesarean?',
    a: 'Recovery differs from person to person. Your doctor will give you a recovery and follow-up plan specific to your delivery.'
  },
  {
    q: 'Is lactation support available after discharge?',
    a: 'Yes. Feeding concerns can be brought to any postnatal consultation, and earlier if needed.'
  }]

},
{
  slug: 'gynaecology-care',
  title: 'Gynaecology Care',
  group: 'Gynaecology',
  summary:
  'Consultation, evaluation and treatment for gynaecological concerns, in a private and respectful setting.',
  image: "/3a49f9f7-c91e-46d8-beca-06741871c835.jpg",

  imageAlt: 'Woman in consultation with a female gynaecologist reviewing findings on a tablet',
  enabled: true,
  overview: [
  'General gynaecology covers the concerns many women live with for months before mentioning them — pain, irregular bleeding, discharge, discomfort or an abnormal report from a routine check.',
  'Every consultation starts with history and examination, and moves to investigation only where it will change the plan. Findings and options are explained before anything is advised.'],

  whoItIsFor: [
  'Women with pelvic pain, discomfort or abnormal bleeding',
  'Women with recurrent infections or persistent discharge',
  'Women with an abnormal scan or screening report',
  'Women seeking contraception advice'],

  whatWeProvide: [
  'Detailed gynaecological consultation and examination',
  'Investigation and scan guidance where indicated',
  'Medical management of common gynaecological conditions',
  'Contraception counselling and follow-up',
  'Referral for surgical management where required'],

  consultationProcess: [
  { step: 'Consultation', text: 'A private discussion of your symptoms and history.' },
  { step: 'Examination', text: 'Clinical examination, explained before it is performed.' },
  { step: 'Investigation', text: 'Only the tests that will help decide the plan.' },
  { step: 'Treatment plan', text: 'Options explained, with a follow-up review scheduled.' }],

  whenToConsult: [
  'Bleeding between periods or after intercourse',
  'Pelvic pain that does not settle',
  'Persistent discharge, itching or burning',
  'Any bleeding after menopause'],

  faqs: [
  {
    q: 'Will I be seen by a female doctor?',
    a: 'Yes. Consultations are with Dr. Bindu Kousalya.'
  },
  {
    q: 'Is the consultation private?',
    a: 'Consultations are one-to-one in a closed consultation room, and you may have a family member with you if you prefer.'
  }]

},
{
  slug: 'infertility-fertility-evaluation',
  title: 'Infertility & Fertility Evaluation',
  group: 'Fertility',
  summary:
  'A structured evaluation for couples trying to conceive, with counselling at every stage and no assumed outcome.',
  image: "/39a27f8b-a5fa-4e8c-a18f-d564a6a19b20.jpg",

  imageAlt: 'Couple in a fertility consultation with a female specialist in a clinic room',
  enabled: true,
  overview: [
  'Fertility evaluation is a sequence, not a single test. It begins with a consultation for both partners, moves through investigations that look at ovulation, tubes and semen parameters, and ends with an honest discussion of what the findings mean.',
  'Counselling is part of the treatment, not an extra. Couples are told what is known, what is not, and what the realistic next step is — including when to wait.'],

  whoItIsFor: [
  'Couples who have been trying to conceive for a year or more',
  'Women with irregular cycles or known ovulation problems',
  'Couples with recurrent pregnancy loss',
  'Couples who want a pre-conception assessment'],

  whatWeProvide: [
  'Consultation for both partners together',
  'Ovulation assessment and cycle tracking guidance',
  'Hormonal and tubal evaluation as indicated',
  'Coordination of semen analysis for the male partner',
  'Counselling on findings and the available next steps',
  'Onward referral for advanced fertility treatment where required'],

  consultationProcess: [
  { step: 'Joint consultation', text: 'Both partners seen together, with history taken from each.' },
  { step: 'Evaluation', text: 'A staged investigation plan rather than all tests at once.' },
  { step: 'Review', text: 'Findings explained in full, with questions answered.' },
  { step: 'Plan', text: 'A next step agreed together, including referral if appropriate.' }],

  whenToConsult: [
  'No conception after twelve months of trying',
  'Irregular or absent periods',
  'Two or more pregnancy losses',
  'A known condition such as PCOS, endometriosis or a previous pelvic infection'],

  faqs: [
  {
    q: 'Should my husband attend the first consultation?',
    a: 'Yes. Fertility is assessed for the couple, and evaluating both partners from the start avoids losing time.'
  },
  {
    q: 'Are outcomes guaranteed?',
    a: 'No. No hospital can guarantee a fertility outcome. What can be offered is a careful evaluation and an honest discussion of options.'
  }]

},
{
  slug: 'laparoscopic-gynaecology',
  title: 'Laparoscopic Gynaecology',
  group: 'Laparoscopy',
  summary:
  'Minimal-access gynaecological surgery through small incisions, performed by an FMAS-qualified specialist.',
  image: "/26b29c75-4b04-4cb8-a4e3-92d6b302e510.jpg",

  imageAlt: 'Surgical team in scrubs around laparoscopic equipment in a modern operation theatre',
  enabled: true,
  overview: [
  'Laparoscopy allows a number of gynaecological conditions to be diagnosed and treated through small incisions, using a camera and fine instruments instead of open surgery.',
  'Whether laparoscopy is suitable depends on the condition and on your individual assessment. That decision is made at consultation, with the alternatives explained alongside it.'],

  whoItIsFor: [
  'Women advised surgery for ovarian cysts or fibroids',
  'Women being evaluated for endometriosis or chronic pelvic pain',
  'Women needing diagnostic laparoscopy as part of fertility evaluation',
  'Women seeking an opinion on minimal-access alternatives to open surgery'],

  whatWeProvide: [
  'Pre-operative assessment and surgical counselling',
  'Diagnostic and operative laparoscopic procedures',
  'Discussion of risks, alternatives and expected recovery',
  'Post-operative review and recovery guidance',
  'Written instructions for care at home after discharge'],

  consultationProcess: [
  { step: 'Consultation', text: 'Assessment of whether a minimal-access approach is suitable.' },
  { step: 'Preparation', text: 'Pre-operative investigations and fitness assessment.' },
  { step: 'Procedure', text: 'Surgery performed in the operation theatre with the full team.' },
  { step: 'Recovery', text: 'Monitoring, discharge instructions and a follow-up review.' }],

  whenToConsult: [
  'A scan showing an ovarian cyst or fibroid',
  'Pelvic pain that has not responded to medical treatment',
  'Suspected endometriosis',
  'You have been advised open surgery and want a second opinion'],

  faqs: [
  {
    q: 'What does FMAS mean?',
    a: 'Fellowship in Minimal Access Surgery — a qualification in performing surgery through small incisions using a camera and specialised instruments.'
  },
  {
    q: 'How long will I need to stay in hospital?',
    a: 'This depends on the procedure and on your recovery. Your doctor will give you an expected stay before the surgery is scheduled.'
  }]

},
{
  slug: 'pcos-hormonal-health',
  title: 'PCOS & Hormonal Health',
  group: "Women's Wellness",
  summary:
  'Long-term management of PCOS and hormonal imbalance, combining medical treatment with lifestyle guidance.',
  image: "/33b1b4c9-2541-4aab-afe0-6f55e5151eca.jpg",

  imageAlt: 'Young woman discussing a laboratory report with a female doctor in a clinic room',
  enabled: true,
  overview: [
  'PCOS is a hormonal condition, not a one-time illness, and it shows up differently in different women — irregular cycles, weight change, acne, excess hair growth or difficulty conceiving.',
  'Management is therefore individual. It usually combines investigation, medical treatment where indicated, and sustained lifestyle change, reviewed over months rather than weeks.'],

  whoItIsFor: [
  'Women with irregular or absent periods',
  'Women diagnosed with PCOS seeking ongoing management',
  'Women with acne, excess hair growth or unexplained weight change',
  'Women with PCOS who are planning a pregnancy'],

  whatWeProvide: [
  'Hormonal evaluation and scan assessment',
  'Individualised medical management',
  'Diet, exercise and weight guidance',
  'Cycle regulation and long-term monitoring',
  'Fertility counselling for women with PCOS planning pregnancy'],

  consultationProcess: [
  { step: 'Consultation', text: 'A full symptom history, not just cycle dates.' },
  { step: 'Evaluation', text: 'Hormonal tests and a scan where indicated.' },
  { step: 'Plan', text: 'Treatment and lifestyle steps set out together.' },
  { step: 'Long-term review', text: 'Periodic reviews to adjust the plan as things change.' }],

  whenToConsult: [
  'Cycles longer than 35 days, or fewer than eight periods a year',
  'Sudden weight gain with acne or hair changes',
  'Difficulty conceiving with irregular cycles',
  'A previous PCOS diagnosis with no current follow-up'],

  faqs: [
  {
    q: 'Can PCOS be cured?',
    a: 'PCOS is a long-term condition that is managed rather than cured. Many of its effects can be controlled well with consistent treatment and lifestyle change.'
  },
  {
    q: 'Do I need to come in every month?',
    a: 'Usually not. Your doctor will set a review interval that suits your treatment plan.'
  }]

},
{
  slug: 'menstrual-adolescent-health',
  title: 'Menstrual & Adolescent Health',
  group: "Women's Wellness",
  summary:
  'Care for painful, heavy or irregular periods — including a gentle first consultation for adolescent girls.',
  image: "/588de22e-601f-40c2-8c00-8ed506f03fec.jpg",

  imageAlt: 'Teenage girl with her mother in a consultation with a female doctor',
  enabled: true,
  overview: [
  'Painful, heavy or irregular periods are common, which is why they are so often tolerated for years. They are also treatable, and worth evaluating.',
  'For adolescent girls, the first gynaecological consultation sets the tone for a lifetime of care. It is kept unhurried and reassuring, with a parent present, and focused on explanation rather than examination wherever possible.'],

  whoItIsFor: [
  'Girls and women with painful periods',
  'Women with heavy or prolonged menstrual bleeding',
  'Adolescents with delayed or irregular cycles',
  'Women whose cycle pattern has recently changed'],

  whatWeProvide: [
  'Menstrual history assessment and evaluation',
  'Investigation of heavy or painful bleeding',
  'Medical management for cycle regulation',
  'Age-appropriate counselling for adolescents and parents',
  'Anaemia screening and nutrition guidance'],

  consultationProcess: [
  { step: 'Consultation', text: 'A cycle history and a discussion of how symptoms affect daily life.' },
  { step: 'Assessment', text: 'Examination and investigation appropriate to age and symptoms.' },
  { step: 'Treatment', text: 'A plan aimed at relief, explained to the patient herself.' },
  { step: 'Review', text: 'Follow-up after a few cycles to check the response.' }],

  whenToConsult: [
  'Period pain that interrupts school, work or sleep',
  'Bleeding that lasts longer than seven days, or soaks through protection hourly',
  'No periods by the age of 16',
  'Cycles that have suddenly become irregular'],

  faqs: [
  {
    q: 'Is an internal examination needed for an adolescent?',
    a: 'Usually not. Most adolescent concerns are assessed through history, external examination and a scan if required.'
  },
  {
    q: 'Can a parent stay in the room?',
    a: 'Yes. For adolescent consultations a parent is welcome to be present throughout.'
  }]

},
{
  slug: 'menopause-preventive-health',
  title: 'Menopause & Preventive Health',
  group: "Women's Wellness",
  summary:
  'Support through the menopausal transition, alongside routine preventive checks for women at every age.',
  image: "/023e3078-e4ab-4672-bce8-04206d211834.jpg",

  imageAlt: 'Woman in her fifties in conversation with a female doctor in a consultation room',
  enabled: true,
  overview: [
  'The years around menopause bring changes that are easy to dismiss — disturbed sleep, hot flushes, mood changes, joint pain, urinary symptoms. They can be evaluated and managed.',
  'Preventive care runs alongside: bone and general health review, screening guidance, and the routine checks that matter more as the years go on.'],

  whoItIsFor: [
  'Women approaching or going through menopause',
  'Women with post-menopausal symptoms or bleeding',
  'Women wanting a routine preventive health consultation',
  'Women with a family history that warrants earlier screening'],

  whatWeProvide: [
  'Menopause consultation and symptom assessment',
  'Discussion of management options and their considerations',
  'Bone and general health review',
  'Screening guidance appropriate to age and history',
  'Nutrition, calcium and activity counselling'],

  consultationProcess: [
  { step: 'Consultation', text: 'A symptom review and a discussion of how it is affecting daily life.' },
  { step: 'Assessment', text: 'Examination and any indicated investigations.' },
  { step: 'Plan', text: 'Management options explained, with their benefits and considerations.' },
  { step: 'Review', text: 'Periodic follow-up and preventive screening reminders.' }],

  whenToConsult: [
  'Any bleeding after menopause — this always needs evaluation',
  'Hot flushes or night sweats disturbing sleep',
  'Vaginal dryness, discomfort or urinary symptoms',
  'It has been more than a year since your last preventive check'],

  faqs: [
  {
    q: 'Is treatment necessary for menopause?',
    a: 'Not always. Many women need only guidance and reassurance. Where symptoms affect quality of life, management options are discussed individually.'
  },
  {
    q: 'What does a preventive check include?',
    a: 'This is decided at the consultation based on your age, history and previous reports.'
  }]

}];


export const activeTreatments = () => treatments.filter((t) => t.enabled);

export const treatmentBySlug = (slug: string) =>
treatments.find((t) => t.slug === slug && t.enabled);

export const treatmentGroups = () =>
Array.from(new Set(activeTreatments().map((t) => t.group)));