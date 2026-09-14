/* =========================================================
   AL AMEEN QURAN INSTITUTE — APP.JS
   Multilingual, Interactive, Accessible
   ========================================================= */

(function () {
  'use strict';

  /* =====================================================
     1. TRANSLATIONS
     ===================================================== */
  const TRANSLATIONS = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.courses': 'Courses',
      'nav.quran': 'Quran Info',
      'nav.tajweed': 'Tajweed',
      'nav.hifz': 'Hifz',
      'nav.children': 'Children',
      'nav.adults': 'Adults',
      'nav.contact': 'Contact',
      'nav.enroll': 'Enroll Now',
      'nav.faq': 'FAQ',

      // Hero
      'hero.eyebrow': 'Online Quran Institute',
      'hero.title1': 'Learn the Quran.',
      'hero.title2': 'Improve Your Recitation.',
      'hero.title3': 'Build a Lifelong Connection.',
      'hero.lead': 'Al Ameen Quran Institute provides thoughtful, one-to-one online Quran learning for students of every age and level — guided with sincerity by Umair Amin.',
      'hero.cta1': 'Start Learning',
      'hero.cta2': 'Explore Courses',
      'hero.cta3': 'Contact Us',

      // Trust
      'trust.item1': 'One-to-One Learning',
      'trust.item2': 'Flexible Scheduling',
      'trust.item3': 'Children & Adults',
      'trust.item4': 'Online Learning',
      'trust.item5': 'Personalized Guidance',

      // Benefits
      'benefit.1t': 'Qualified Guidance', 'benefit.1d': 'Personal mentorship from a devoted teacher.',
      'benefit.2t': 'Flexible Timing', 'benefit.2d': 'Choose class times that suit your schedule.',
      'benefit.3t': 'All Age Groups', 'benefit.3d': 'Programs tailored for kids, teens, and adults.',
      'benefit.4t': 'Global Access', 'benefit.4d': 'Learn from anywhere in the world online.',

      // Why
      'why.eyebrow': 'Why Al Ameen',
      'why.title': 'A Calm, Focused Path to Learning the Quran',
      'why.lead': 'We combine sincerity, structure, and personal attention to help every student progress at a healthy, sustainable pace.',
      'why.f1t': 'Structured Curriculum', 'why.f1d': 'Clear lesson pathways from Arabic letters to fluent Quran recitation.',
      'why.f2t': 'Live One-to-One Classes', 'why.f2d': 'Direct interaction with the teacher through live online sessions.',
      'why.f3t': 'Consistent Progress', 'why.f3d': 'Steady routines and reviews to build long-term understanding.',
      'why.f4t': 'International Students', 'why.f4d': 'Learners join from many countries in different time zones.',
      'why.f5t': 'Family Friendly', 'why.f5d': 'Parents remain informed and involved in the learning journey.',
      'why.f6t': 'Respectful Environment', 'why.f6d': 'A calm, ethical, and encouraging space for every learner.',

      // Courses
      'courses.eyebrow': 'Our Programs',
      'courses.title': 'Quran Courses for Every Learner',
      'courses.lead': 'Choose a program that fits your level and goals.',
      'course.reading': 'Quran Reading', 'course.readingD': 'Learn to read the Quran fluently from Arabic letters to full verses.',
      'course.tajweed': 'Quran with Tajweed', 'course.tajweedD': 'Recite the Quran with proper articulation and rules of Tajweed.',
      'course.hifz': 'Hifz / Memorization', 'course.hifzD': 'A structured pathway for memorizing the Quran with regular revision.',
      'course.children': 'Quran for Children', 'course.childrenD': 'Friendly, age-appropriate lessons designed for young learners.',
      'course.adults': 'Quran for Adults', 'course.adultsD': 'Respectful, flexible programs for adult beginners and improvers.',
      'course.daily': 'Daily Quran Learning', 'course.dailyD': 'Build a consistent daily routine of reading, review, and reflection.',

      // CTAs
      'cta.learnMore': 'Learn More →',
      'cta.enroll': 'Enroll Now',
      'cta.title': 'Ready to Begin Your Quran Journey?',
      'cta.lead': 'Reach out today and take the first step toward learning with sincerity and consistency.',

      // How
      'how.eyebrow': 'How It Works',
      'how.title': 'Begin Your Quran Journey in 4 Simple Steps',
      'how.s1t': 'Contact Us', 'how.s1d': 'Reach out via WhatsApp, email, or the enrollment form.',
      'how.s2t': 'Choose Your Course', 'how.s2d': 'Select the program that matches your level and goals.',
      'how.s3t': 'Select Your Schedule', 'how.s3d': 'Choose days and timings that suit you.',
      'how.s4t': 'Begin Learning', 'how.s4d': 'Join your live online class and start your journey.',
      'how.cta': 'Start Your Enrollment',

      // Zoom
      'zoom.eyebrow': 'Live Class',
      'zoom.title': 'Join Your Quran Class',
      'zoom.lead': 'Enrolled students can join their scheduled online class directly through Zoom.',
      'zoom.mid': 'Meeting ID:',
      'zoom.pwd': 'Password:',
      'zoom.cta': 'Join Zoom Class',

      // Reviews
      'rev.eyebrow': 'Student Voices',
      'rev.title': 'Reviews From Our Learners',
      'rev.placeholder': 'Student Review Coming Soon',

      // FAQ
      'faq.eyebrow': 'Questions',
      'faq.title': 'Frequently Asked Questions',
      'faq.more': 'See All Questions',
      'faq.q1': 'What is Al Ameen Quran Institute?',
      'faq.a1': 'Al Ameen Quran Institute is an online Quran learning platform founded and guided by Umair Amin, offering one-to-one classes to students worldwide.',
      'faq.q2': 'Who can join?',
      'faq.a2': 'Students of all ages and levels — children, teenagers, and adults — are welcome to enroll.',
      'faq.q3': 'Are classes one-to-one?',
      'faq.a3': 'Yes. Our classes are designed as personal, one-to-one sessions for focused learning.',
      'faq.q4': 'How are online classes conducted?',
      'faq.a4': 'Classes are held live online through Zoom at your scheduled time.',
      'faq.q5': 'How can I enroll?',
      'faq.a5': 'You can enroll by contacting us via WhatsApp, email, or the enrollment form on our Contact page.',
      'faq.q6': 'Do you teach children?',
      'faq.a6': 'Yes. We offer age-appropriate Quran lessons for children with short sessions, encouragement, and parent communication.',
      'faq.q7': 'Do you teach adults?',
      'faq.a7': 'Yes. Our adult programs are respectful, private, and flexible — designed for beginners and improvers alike.',
      'faq.q8': 'What courses are available?',
      'faq.a8': 'We offer Quran Reading, Quran with Tajweed, Hifz / Memorization, Quran for Beginners, Quran for Children, Quran for Adults, Daily Quran Learning, and Islamic Studies.',
      'faq.q9': 'Can I choose my schedule?',
      'faq.a9': 'Yes. You can choose your preferred days and times when enrolling.',
      'faq.q10': 'How do I join a Zoom class?',
      'faq.a10': 'After enrollment, you will receive a Zoom link, Meeting ID, and Password. You can join from any device — computer, tablet, or phone.',
      'faq.page.title': 'Frequently Asked Questions',
      'faq.page.lead': 'Find clear answers to common questions about our online Quran classes, enrollment, and learning process.',
      'faq.cta.title': 'Still Have Questions?',
      'faq.cta.lead': 'Feel free to reach out — we are happy to help you with anything you need.',

      // Footer
      'footer.tag': 'Founded & Guided by Umair Amin. Premium online Quran education for learners across the world.',
      'footer.links': 'Quick Links',
      'footer.programs': 'Programs',
      'footer.contact': 'Contact',
      'footer.legal': 'Legal',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms & Conditions',
      'footer.disclaimer': 'Disclaimer',
      'footer.rights': 'All Rights Reserved.',

      // About
      'about.title': 'About Al Ameen Quran Institute',
      'about.lead': 'A calm, sincere, and structured online space to learn the Quran — for every age and every level.',
      'about.who.eyebrow': 'Who We Are',
      'about.who.title': 'A Devoted Online Quran Institute',
      'about.who.p1': 'Al Ameen Quran Institute is an online Quran learning platform dedicated to helping students read, understand, and connect with the Quran. Our teaching is guided by patience, sincerity, and personal attention.',
      'about.who.p2': 'We believe that Quran learning is a lifelong journey. Our goal is to walk with each student — one lesson at a time — building strong foundations and lasting habits.',
      'about.approach.title': 'Our Teaching Approach',
      'about.approach.1': 'Personalized one-to-one classes',
      'about.approach.2': 'Clear, structured lesson pathways',
      'about.approach.3': 'Focus on correct recitation',
      'about.approach.4': 'Encouraging, respectful environment',
      'about.approach.5': 'Consistent review and progress tracking',
      'about.mission.title': 'Our Mission',
      'about.mission.p': 'To make sincere, high-quality Quran education accessible online — offering personal guidance that supports learners in reading, Tajweed, and memorization.',
      'about.vision.title': 'Our Vision',
      'about.vision.p': 'To be a trusted online institute where students from around the world develop a strong, lifelong connection with the Quran.',
      'about.philosophy.title': 'Our Philosophy',
      'about.philosophy.p': 'Learning should be respectful, consistent, and unhurried. Every learner deserves patience, clarity, and genuine care.',
      'about.founder.eyebrow': 'Founder',
      'about.founder.role': 'Founder & Guide',
      'about.founder.p1': 'Umair Amin is the founder and guiding teacher of Al Ameen Quran Institute. He personally oversees the learning experience of every student, ensuring that each lesson is delivered with sincerity, patience, and care.',
      'about.founder.p2': 'His teaching philosophy centers on building sustainable habits — helping students read the Quran correctly, understand it respectfully, and grow closer to it over time.',
      'about.values.eyebrow': 'Our Values',
      'about.values.title': 'What Shapes Our Teaching',
      'about.v1t': 'Sincerity', 'about.v1d': 'Every lesson is offered with genuine intention and care.',
      'about.v2t': 'Consistency', 'about.v2d': 'Small, steady steps create meaningful long-term progress.',
      'about.v3t': 'Respect', 'about.v3d': 'The Quran is approached with the reverence it deserves.',
      'about.v4t': 'Patience', 'about.v4d': 'Every learner moves at their own healthy pace.',
      'about.v5t': 'Clarity', 'about.v5d': 'Lessons are structured, clear, and easy to follow.',
      'about.v6t': 'Accessibility', 'about.v6d': 'Learners from any country or background are welcome.',

      // Courses page
      'courses.page.title': 'Quran Courses',
      'courses.page.lead': 'Choose from a range of structured online Quran programs — designed for every age, level, and goal.',
      'courseCard.for': 'For:',
      'courseCard.learn': 'You will learn:',
      'courseCard.1t': 'Quran Reading', 'courseCard.1d': 'Learn to read the Quran fluently from foundational Arabic letters to complete verses.',
      'courseCard.1for': 'Beginners and improvers of any age', 'courseCard.1learn': 'Letters, joining, vowel marks, fluent reading',
      'courseCard.2t': 'Quran with Tajweed', 'courseCard.2d': 'Recite the Quran beautifully with correct pronunciation and Tajweed rules.',
      'courseCard.2for': 'Students who can read and want to improve recitation', 'courseCard.2learn': 'Makharij, Sifat, Madd, Ikhfa, Idghaam, and more',
      'courseCard.3t': 'Hifz / Quran Memorization', 'courseCard.3d': 'A structured program to memorize the Quran with strong revision and consistency.',
      'courseCard.3for': 'Committed students of all ages', 'courseCard.3learn': 'Memorization techniques, revision plans, retention',
      'courseCard.4t': 'Quran for Beginners', 'courseCard.4d': 'A gentle entry point for those starting their Quran learning journey.',
      'courseCard.4for': 'Absolute beginners with no prior background', 'courseCard.4learn': 'Arabic alphabet, Noorani Qaida, basic reading',
      'courseCard.5t': 'Quran for Children', 'courseCard.5d': 'Age-appropriate, friendly Quran lessons designed for young learners.',
      'courseCard.5for': 'Children learning at their own pace', 'courseCard.5learn': 'Letters, reading, short Surahs, foundational Tajweed',
      'courseCard.6t': 'Quran for Adults', 'courseCard.6d': 'Respectful, flexible online programs for adult learners at any starting point.',
      'courseCard.6for': 'Adult beginners, improvers, and busy professionals', 'courseCard.6learn': 'Reading, Tajweed, and consistent daily practice',
      'courseCard.7t': 'Daily Quran Learning', 'courseCard.7d': 'Build a steady daily routine of reading, review, and reflection.',
      'courseCard.7for': 'Anyone who wants a consistent daily practice', 'courseCard.7learn': 'Routine building, consistent reading, review',
      'courseCard.8t': 'Islamic Studies', 'courseCard.8d': 'Learn foundational Islamic knowledge in a respectful, structured way.',
      'courseCard.8for': 'Learners seeking essential Islamic understanding', 'courseCard.8learn': 'Beliefs, daily practice, and foundational topics',

      // Quran Info
      'qi.title': 'Quran Information',
      'qi.lead': 'Simple, respectful guidance to help you understand what the Quran is and how to begin learning it.',
      'qi.h1': 'What Is the Quran?',
      'qi.p1': 'The Quran is the sacred scripture of Islam, revealed in Arabic. Muslims read it, memorize it, and study its meanings as a source of guidance for daily life.',
      'qi.h2': 'Why Learn the Quran?',
      'qi.p2': 'Learning the Quran nurtures spiritual connection, patience, and reflection. It helps a person read with sincerity and grow in understanding over time.',
      'qi.h3': 'Importance of Quran Recitation',
      'qi.p3': 'Correct recitation preserves the meaning of the words. Learning with a qualified teacher helps you build accurate pronunciation and confidence.',
      'qi.h4': 'Learning Quran as a Beginner',
      'qi.p4': 'Beginners usually start with the Arabic alphabet and foundational reading (Noorani Qaida). Progress is steady and unhurried — one letter and one lesson at a time.',
      'qi.h5': 'Quran Learning for Children',
      'qi.p5': 'Children benefit from short, focused sessions with gentle encouragement. Consistency and positive reinforcement help them develop love for the Quran.',
      'qi.h6': 'Quran Learning for Adults',
      'qi.p6': 'Adults can begin learning the Quran at any stage of life. Flexible scheduling and respectful teaching make it possible to build a meaningful practice.',
      'qi.h7': 'Building a Daily Quran Routine',
      'qi.p7': 'A short, consistent daily routine is more effective than long, occasional sessions. Even a few minutes each day can build strong long-term habits.',
      'qi.h8': 'Consistency in Quran Learning',
      'qi.p8': 'Consistency is the key to Quran learning. Small, steady progress leads to deep and lasting understanding.',
      'qi.h9': 'Understanding the Quran',
      'qi.p9': 'Beyond reading, understanding the Quran through translation and study helps connect its meanings with everyday life.',
      'qi.h10': 'Respectful Quran Study',
      'qi.p10': 'The Quran is approached with reverence — with clean hands, calm focus, and sincere intention. Every step of learning is treated with respect.',

      // Tajweed
      'tj.title': 'Learn Tajweed Online',
      'tj.lead': 'Recite the Quran beautifully — with clarity, correct pronunciation, and the rules of Tajweed.',
      'tj.what.eyebrow': 'What Is Tajweed',
      'tj.what.title': 'Tajweed: The Art of Reciting the Quran Correctly',
      'tj.what.p1': 'Tajweed refers to the rules that guide how each Arabic letter should be pronounced when reciting the Quran. It preserves the beauty and meaning of the words as they were revealed.',
      'tj.what.p2': 'At Al Ameen Quran Institute, Tajweed is taught step by step with live guidance, so that every learner can build strong recitation with confidence.',
      'tj.why.title': 'Why Tajweed Matters',
      'tj.why.1': 'Preserves the correct meaning of words',
      'tj.why.2': 'Improves clarity and beauty of recitation',
      'tj.why.3': 'Builds confidence in reading aloud',
      'tj.why.4': 'Deepens focus and attention during recitation',
      'tj.topics.eyebrow': "What You'll Learn",
      'tj.topics.title': 'Core Areas of Tajweed',
      'tj.t1t': 'Correct Pronunciation', 'tj.t1d': 'Pronouncing each letter clearly from its proper origin.',
      'tj.t2t': 'Makharij (Articulation Points)', 'tj.t2d': 'Understanding where each Arabic letter is produced in the mouth and throat.',
      'tj.t3t': 'Sifat (Letter Characteristics)', 'tj.t3d': "Learning the qualities that distinguish each letter's sound.",
      'tj.t4t': 'Madd (Elongation)', 'tj.t4d': 'Applying correct lengthening in appropriate places.',
      'tj.t5t': 'Noon & Meem Rules', 'tj.t5d': 'Rules of Ikhfa, Idghaam, Iqlaab, and Izhaar.',
      'tj.t6t': 'Waqf (Stopping)', 'tj.t6d': 'Knowing where and how to pause during recitation.',
      'tj.improve.title': 'Improving Your Recitation',
      'tj.improve.1': 'Daily reading practice',
      'tj.improve.2': 'Listening to correct recitation',
      'tj.improve.3': 'Reciting aloud with feedback',
      'tj.improve.4': 'Regular revision of learned rules',
      'tj.teacher.eyebrow': 'With a Teacher',
      'tj.teacher.title': 'Why Learning With a Teacher Matters',
      'tj.teacher.p1': 'Tajweed cannot be mastered from books alone. It requires listening, repeating, and being corrected — which is why one-to-one live classes are the most effective way to progress.',
      'tj.teacher.p2': 'At Al Ameen Quran Institute, every learner receives personal feedback in each session, ensuring steady improvement.',
      'tj.cta.title': 'Begin Your Tajweed Journey',
      'tj.cta.lead': 'Enroll today and start improving your Quran recitation with personal guidance.',

      // Hifz
      'hifz.title': 'Hifz — Quran Memorization',
      'hifz.lead': 'A patient, structured pathway to memorizing the Quran with daily practice, regular revision, and one-to-one teacher support.',
      'hifz.what.eyebrow': 'What Is Hifz',
      'hifz.what.title': 'Preserving the Quran in Your Heart',
      'hifz.what.p1': 'Hifz is the practice of memorizing the Quran — learning each Surah and Ayah by heart, with the goal of preserving the entire scripture in your memory.',
      'hifz.what.p2': 'At Al Ameen Quran Institute, memorization is approached with patience and care. Every student is guided according to their own capacity, with no pressure and no unrealistic timelines.',
      'hifz.pillars.title': 'Pillars of Our Hifz Program',
      'hifz.pillar.1': 'New memorization in every session',
      'hifz.pillar.2': 'Daily revision of previous portions',
      'hifz.pillar.3': 'Correct Tajweed during memorization',
      'hifz.pillar.4': 'Personal teacher guidance',
      'hifz.pillar.5': 'Progress-based pacing',
      'hifz.how.eyebrow': 'How It Works',
      'hifz.how.title': 'The Memorization Process',
      'hifz.h1t': 'Daily Practice', 'hifz.h1d': 'A manageable amount of new text is assigned each day. Consistency matters more than quantity.',
      'hifz.h2t': 'Repetition', 'hifz.h2d': 'Each portion is repeated multiple times until it is firmly secured in memory.',
      'hifz.h3t': "Revision (Muraja'ah)", 'hifz.h3d': 'Previously memorized sections are revisited regularly so nothing is lost over time.',
      'hifz.h4t': 'Recitation to the Teacher', 'hifz.h4d': 'Students recite from memory to the teacher who listens, corrects, and provides feedback.',
      'hifz.h5t': 'Patience & Consistency', 'hifz.h5d': 'Hifz is a long-term commitment. Steady, small steps lead to deep retention.',
      'hifz.h6t': 'Different Levels Welcome', 'hifz.h6d': 'Whether you are starting with Juz Amma or continuing from a prior point, we meet you where you are.',
      'hifz.tips.title': 'Tips for Successful Memorization',
      'hifz.tip.1': 'Set a fixed daily time for memorization',
      'hifz.tip.2': 'Review what you have memorized before learning new verses',
      'hifz.tip.3': 'Listen to recitation of the portion you are memorizing',
      'hifz.tip.4': 'Use one specific copy of the Quran consistently',
      'hifz.tip.5': 'Recite what you have memorized in daily Salah',
      'hifz.tip.6': 'Be patient with yourself — progress takes time',
      'hifz.guidance.eyebrow': 'Teacher Guidance',
      'hifz.guidance.title': 'Why a Teacher Is Essential for Hifz',
      'hifz.guidance.p1': 'Memorizing the Quran alone can be difficult. A teacher provides accountability, correction, encouragement, and a structured plan that keeps progress moving forward.',
      'hifz.guidance.p2': 'At Al Ameen Quran Institute, Hifz students receive dedicated one-to-one attention. The teacher listens to recitation from memory, identifies mistakes, and ensures accuracy before the student moves on.',
      'hifz.levels.title': 'Learning Levels',
      'hifz.levels.p1': 'Students join at different stages. Some may begin with short Surahs at the end of the Quran (Juz Amma), while others continue from where they previously stopped. The program adapts to each individual.',
      'hifz.levels.p2': "There is no fixed timeline. The pace depends on the student's schedule, capacity, and consistency. What matters most is that progress is steady and retention is strong.",
      'hifz.cta.title': 'Begin Your Hifz Journey',
      'hifz.cta.lead': 'Enroll today and start memorizing the Quran with structured guidance and personal attention.',

      // Children
      'child.title': 'Quran Classes for Children',
      'child.lead': 'Friendly, engaging, and age-appropriate online Quran lessons designed to nurture a love for the Quran from an early age.',
      'child.intro.eyebrow': 'For Young Learners',
      'child.intro.title': 'Building Strong Foundations',
      'child.intro.p1': 'Children learn best in a supportive, patient environment. At Al Ameen Quran Institute, every young learner is treated with kindness and given focused attention through one-to-one sessions.',
      'child.intro.p2': 'Lessons are designed to be short, clear, and encouraging — so children stay engaged and develop confidence in reading the Quran.',
      'child.what.title': 'What Children Will Learn',
      'child.what.1': 'Arabic Letters & Pronunciation',
      'child.what.2': 'Noorani Qaida / Foundational Reading',
      'child.what.3': 'Quran Reading with Basic Tajweed',
      'child.what.4': 'Memorization of Short Surahs',
      'child.what.5': 'Daily Practice Habits',
      'child.what.6': 'Respectful Relationship with the Quran',
      'child.journey.eyebrow': 'Learning Pathway',
      'child.journey.title': 'How Children Progress',
      'child.j1t': 'Arabic Letters', 'child.j1d': 'Recognizing, pronouncing, and writing each Arabic letter clearly.',
      'child.j2t': 'Noorani Qaida', 'child.j2d': 'Learning to connect letters, understand vowel marks, and read basic words.',
      'child.j3t': 'Quran Reading', 'child.j3d': 'Reading from the Quran with growing fluency and understanding of rules.',
      'child.j4t': 'Tajweed Foundations', 'child.j4d': 'Introducing basic Tajweed rules in a simple, age-appropriate way.',
      'child.j5t': 'Memorization', 'child.j5d': 'Memorizing selected Surahs with repetition and gentle encouragement.',
      'child.j6t': 'Daily Practice', 'child.j6d': 'Establishing a healthy daily routine of reading and revision.',
      'child.parent.title': 'For Parents',
      'child.parent.1': "Regular updates on your child's progress",
      'child.parent.2': 'Safe, respectful one-to-one learning environment',
      'child.parent.3': "Flexible scheduling to match your family's routine",
      'child.parent.4': 'Guidance on supporting practice at home',
      'child.parent.5': 'Open communication with the teacher',
      'child.support.eyebrow': 'Parent Support',
      'child.support.title': 'Parents Stay Informed & Involved',
      'child.support.p1': "We understand that parents want to know how their child is progressing. At Al Ameen Quran Institute, we maintain open communication with families so that parents can support their child's Quran learning journey.",
      'child.support.p2': 'Short sessions, clear assignments, and regular feedback help children stay motivated and on track.',
      'child.approach.eyebrow': 'Our Approach',
      'child.approach.title': 'Friendly, Not Childish',
      'child.approach.p1': 'Our children\'s program is warm and encouraging, but it maintains the seriousness and respect that Quran learning deserves. We create a space where children feel comfortable asking questions and making progress without pressure.',
      'child.approach.p2': 'Each child is treated as an individual. Lessons adapt to their pace, personality, and learning style.',
      'child.progress.title': 'Progress-Based Learning',
      'child.progress.p': 'Children advance at their own speed. No child is rushed ahead before they are ready. Mastery of each stage is confirmed before moving on to the next level.',
      'child.cta.title': 'Enroll Your Child Today',
      'child.cta.lead': 'Give your child the gift of learning the Quran with personal guidance, patience, and sincere care.',

      // Adults
      'adult.title': 'Quran Classes for Adults',
      'adult.lead': 'Respectful, flexible, and private online Quran learning — designed specifically for adult students at every level.',
      'adult.intro.eyebrow': 'For Adult Learners',
      'adult.intro.title': 'It Is Never Too Late to Learn the Quran',
      'adult.intro.p1': 'Many adults feel that they have missed their opportunity to learn the Quran. At Al Ameen Quran Institute, we welcome adult learners warmly — whether you are an absolute beginner or looking to improve your existing recitation.',
      'adult.intro.p2': 'Our one-to-one classes provide a private, respectful environment where adults can learn without hesitation and at their own pace.',
      'adult.what.title': 'What You Will Learn',
      'adult.what.1': 'Arabic Letters & Basic Reading',
      'adult.what.2': 'Fluent Quran Reading',
      'adult.what.3': 'Tajweed — Correct Recitation Rules',
      'adult.what.4': 'Quran Memorization (Optional)',
      'adult.what.5': 'Building a Consistent Daily Routine',
      'adult.what.6': 'Understanding Quranic Concepts',
      'adult.why.eyebrow': 'Why Adults Choose Us',
      'adult.why.title': 'Designed for Busy Lives',
      'adult.w1t': 'Flexible Scheduling', 'adult.w1d': 'Choose class days and times that fit your work, family, and personal schedule.',
      'adult.w2t': 'Private One-to-One Classes', 'adult.w2d': 'Learn in a private, confidential environment with full teacher attention.',
      'adult.w3t': 'Beginner-Friendly', 'adult.w3d': 'Start from the very basics — Arabic letters and Noorani Qaida — with no judgment.',
      'adult.w4t': 'Recitation Improvement', 'adult.w4d': 'Already reading? Improve your fluency, pronunciation, and Tajweed application.',
      'adult.w5t': 'Optional Memorization', 'adult.w5d': 'Memorize selected Surahs or embark on a full Hifz program at your own pace.',
      'adult.w6t': 'Consistent Routine', 'adult.w6d': 'Build a sustainable daily Quran practice that stays with you long term.',
      'adult.schedule.title': 'Flexible Learning Options',
      'adult.schedule.1': 'Morning, afternoon, or evening sessions',
      'adult.schedule.2': 'Weekday or weekend availability',
      'adult.schedule.3': 'Short sessions for busy professionals',
      'adult.schedule.4': 'Reschedule when needed',
      'adult.busy.eyebrow': 'Busy Schedule?',
      'adult.busy.title': 'Learning That Fits Your Life',
      'adult.busy.p1': 'We understand that adults have work, family, and many responsibilities. That is why classes are designed to be flexible, short, and effective — so you can make consistent progress without overwhelming your schedule.',
      'adult.busy.p2': 'Even 20 to 30 minutes a day can create significant long-term growth when done consistently.',
      'adult.routine.title': 'Building a Consistent Quran Routine',
      'adult.routine.p1': 'The most effective approach to Quran learning is consistency. A short daily session is more powerful than a long session once a week. We help adult learners establish a routine that becomes a natural part of their daily life.',
      'adult.routine.p2': 'Your teacher will work with you to create a realistic plan that accounts for your commitments and helps you stay on track.',
      'adult.cta.title': 'Start Learning Today',
      'adult.cta.lead': 'Take the first step — no matter your age or experience. We are here to walk the journey with you.',

      // Contact
      'contact.title': 'Contact & Enrollment',
      'contact.lead': 'Get in touch, ask a question, or submit an enrollment request. We look forward to hearing from you.',
      'contact.wa': 'WhatsApp',
      'contact.phone': 'Phone',
      'contact.email': 'Email',
      'contact.openWa': 'Open WhatsApp →',
      'contact.callNow': 'Call Now →',
      'contact.sendEmail': 'Send Email →',
      'contact.form.eyebrow': 'Enrollment',
      'contact.form.title': 'Submit an Enrollment Request',
      'contact.form.lead': 'Fill out the form below and we will get back to you shortly.',

      // Form
      'form.name': 'Full Name',
      'form.age': 'Student Age',
      'form.parent': 'Parent / Guardian Name',
      'form.country': 'Country',
      'form.email': 'Email',
      'form.phone': 'Phone / WhatsApp',
      'form.course': 'Course Interested In',
      'form.selectCourse': '-- Select a Course --',
      'form.days': 'Preferred Days',
      'form.time': 'Preferred Time',
      'form.level': 'Current Quran Learning Level',
      'form.selectLevel': '-- Select Level --',
      'form.message': 'Message',
      'form.submit': 'Submit Enrollment Request',
      'form.note': 'This form is for enrollment requests. After submission, we will contact you to confirm your enrollment. No backend is currently connected — submissions will be enabled shortly.',
      'form.success': 'Thank you! Your enrollment request has been recorded. Please also contact us via WhatsApp for a quick confirmation.',
      'form.error': 'Please fill in all required fields correctly before submitting.',
      'form.invalidEmail': 'Please enter a valid email address.',

      // Legal
      'legal.updated': 'Last Updated:',

      // Privacy
      'privacy.title': 'Privacy Policy',
      'privacy.lead': 'Your privacy is important to us. This page explains how we collect, use, and protect your personal information.',
      'privacy.h1': '1. Information Collection',
      'privacy.p1': 'When you contact us or submit an enrollment request, we may collect personal information such as your name, email address, phone number, country, and details relevant to the courses you are interested in.',
      'privacy.h2': '2. Contact Forms',
      'privacy.p2': 'Information submitted through our enrollment or contact forms is used solely to respond to your request, arrange classes, and provide requested educational services.',
      'privacy.h3': '3. Communication',
      'privacy.p3': 'We may communicate with you via email, phone, WhatsApp, or other messaging platforms in connection with your enrollment, classes, and administrative matters.',
      'privacy.h4': '4. Cookies',
      'privacy.p4': 'Our website may use minimal cookies or local storage to remember your language preference and improve your browsing experience. You can disable cookies in your browser settings.',
      'privacy.h5': '5. Analytics',
      'privacy.p5': 'If website analytics tools are enabled in the future, we may collect anonymous usage data (such as page views and device type) to understand how visitors use our site and improve our services.',
      'privacy.h6': '6. Third-Party Services',
      'privacy.p6': 'We use third-party services such as Zoom for live online classes and WhatsApp/email for communication. Your use of these services is subject to their respective privacy policies.',
      'privacy.h7': '7. Data Security',
      'privacy.p7': 'We take reasonable steps to protect the personal information you share with us. However, no method of online transmission or storage is completely secure, and we cannot guarantee absolute security.',
      'privacy.h8': '8. Data Retention',
      'privacy.p8': 'We retain your personal information only for as long as necessary to provide our services or as required by applicable laws.',
      'privacy.h9': "9. Children's Privacy",
      'privacy.p9': 'For students under the age of 18, enrollment and communication should be handled by a parent or legal guardian. We do not knowingly collect personal information from children without parental involvement.',
      'privacy.h10': '10. User Rights',
      'privacy.p10': 'You have the right to request access to, correction of, or deletion of the personal information we hold about you. To make such a request, please contact us using the details below.',
      'privacy.h11': '11. Changes to This Policy',
      'privacy.p11': 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.',
      'privacy.h12': '12. Contact Information',
      'privacy.p12': 'If you have any questions about this Privacy Policy or how we handle your information, please contact us:',

      // Terms
      'terms.title': 'Terms & Conditions',
      'terms.lead': 'Please read these terms carefully before using our website or enrolling in our online Quran classes.',
      'terms.h1': '1. Website Use',
      'terms.p1': 'By accessing and using this website, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using our website.',
      'terms.h2': '2. Educational Services',
      'terms.p2': 'Al Ameen Quran Institute provides online Quran education, including reading, Tajweed, memorization, and related programs. All services are delivered online through live sessions.',
      'terms.h3': '3. Enrollment',
      'terms.p3': 'Enrollment is subject to confirmation after submission of your request. We reserve the right to accept or decline any enrollment request at our discretion.',
      'terms.h4': '4. Class Scheduling',
      'terms.p4': 'Class schedules are agreed between the student and the teacher. Students are expected to attend classes at the scheduled time and to inform us in advance if a class needs to be rescheduled.',
      'terms.h5': '5. Payments',
      'terms.p5': 'Payment details, methods, and terms will be communicated during the enrollment process. [Specific payment terms to be confirmed by the institute.]',
      'terms.h6': '6. Cancellations',
      'terms.p6': 'Cancellation of classes or enrollment should be communicated in advance. [Specific cancellation policy to be confirmed by the institute.]',
      'terms.h7': '7. Refunds',
      'terms.p7': 'Refund conditions, if any, will be communicated during enrollment. [Specific refund policy to be confirmed by the institute.]',
      'terms.h8': '8. User Responsibilities',
      'terms.p8': 'Students and guardians are expected to conduct themselves respectfully during classes, maintain appropriate learning behavior, and use the services only for educational purposes.',
      'terms.h9': '9. Intellectual Property',
      'terms.p9': 'All content on this website — including text, graphics, logos, and images — is the property of Al Ameen Quran Institute and may not be copied, redistributed, or used for commercial purposes without written permission.',
      'terms.h10': '10. Third-Party Links',
      'terms.p10': 'Our website may contain links to third-party services (such as Zoom or WhatsApp). We are not responsible for the content, policies, or practices of these external services.',
      'terms.h11': '11. Limitation of Liability',
      'terms.p11': 'Al Ameen Quran Institute is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services.',
      'terms.h12': '12. Changes to Terms',
      'terms.p12': 'We may update these Terms and Conditions from time to time. Continued use of the website after any changes constitutes acceptance of the updated terms.',
      'terms.h13': '13. Contact Information',
      'terms.p13': 'If you have any questions about these Terms and Conditions, please contact us:',

      // Disclaimer
      'disc.title': 'Disclaimer',
      'disc.lead': 'Please read the following disclaimer regarding the content on this website.',
      'disc.h1': '1. Educational Purpose',
      'disc.p1': 'The content published on the Al Ameen Quran Institute website is provided for educational and informational purposes. Our goal is to help students learn to read, recite, and connect with the Quran in a respectful and structured manner.',
      'disc.h2': '2. Respectful Religious Learning',
      'disc.p2': 'Religious learning is a personal and sacred journey. All content on this website should be approached with sincerity, respect, and openness to further learning.',
      'disc.h3': '3. Not a Substitute for Scholarly Guidance',
      'disc.p3': 'The information on this website is introductory and general in nature. It should not be treated as a substitute for qualified scholarly guidance where deeper religious understanding, rulings, or specific advice is required.',
      'disc.h4': '4. Accuracy of Information',
      'disc.p4': 'We make every effort to ensure that the information on this website is accurate and up to date. However, we make no warranties regarding completeness, accuracy, or reliability of the content at any given time.',
      'disc.h5': '5. External Links',
      'disc.p5': 'Our website may include links to third-party websites or services. We are not responsible for the content, accuracy, or opinions expressed in such external resources.',
      'disc.h6': '6. Personal Responsibility',
      'disc.p6': 'Visitors and students are encouraged to use the information provided on this website with their own judgment and, where appropriate, to seek additional qualified guidance for any matters that require it.',
      'disc.h7': '7. Contact Information',
      'disc.p7': 'If you have any questions about this Disclaimer, please contact us:'
    },

    ur: {
      'nav.home': 'ہوم', 'nav.about': 'ہمارے بارے میں', 'nav.courses': 'کورسز',
      'nav.quran': 'قرآن معلومات', 'nav.tajweed': 'تجوید', 'nav.hifz': 'حفظ',
      'nav.children': 'بچے', 'nav.adults': 'بالغ افراد', 'nav.contact': 'رابطہ',
      'nav.enroll': 'ابھی داخلہ لیں', 'nav.faq': 'سوالات',

      'hero.eyebrow': 'آن لائن قرآن انسٹی ٹیوٹ',
      'hero.title1': 'قرآن سیکھیں۔',
      'hero.title2': 'اپنی تلاوت بہتر بنائیں۔',
      'hero.title3': 'زندگی بھر کا تعلق قائم کریں۔',
      'hero.lead': 'الامین قرآن انسٹی ٹیوٹ ہر عمر اور ہر سطح کے طلبہ کے لیے ایک بہ ایک آن لائن قرآن کی تعلیم فراہم کرتا ہے — عمیر امین کی مخلصانہ رہنمائی میں۔',
      'hero.cta1': 'سیکھنا شروع کریں', 'hero.cta2': 'کورسز دیکھیں', 'hero.cta3': 'رابطہ کریں',

      'trust.item1': 'ایک بہ ایک تعلیم', 'trust.item2': 'لچکدار اوقات',
      'trust.item3': 'بچے اور بالغ', 'trust.item4': 'آن لائن تعلیم', 'trust.item5': 'ذاتی رہنمائی',

      'benefit.1t': 'مستند رہنمائی', 'benefit.1d': 'ایک وقف استاد کی ذاتی رہنمائی۔',
      'benefit.2t': 'لچکدار اوقات', 'benefit.2d': 'اپنے شیڈول کے مطابق کلاس کا وقت چنیں۔',
      'benefit.3t': 'تمام عمر کے افراد', 'benefit.3d': 'بچوں، نوجوانوں اور بالغوں کے لیے پروگرام۔',
      'benefit.4t': 'عالمی رسائی', 'benefit.4d': 'دنیا میں کہیں سے بھی آن لائن سیکھیں۔',

      'why.eyebrow': 'الامین کیوں', 'why.title': 'قرآن سیکھنے کا پرسکون راستہ',
      'why.lead': 'ہم اخلاص، ترتیب اور ذاتی توجہ کو یکجا کرتے ہیں تاکہ ہر طالب علم کی صحت مند رفتار سے ترقی ہو۔',
      'why.f1t': 'منظم نصاب', 'why.f1d': 'عربی حروف سے روانی تلاوت تک واضح راستہ۔',
      'why.f2t': 'براہ راست ایک بہ ایک کلاسز', 'why.f2d': 'استاد کے ساتھ براہ راست بات چیت۔',
      'why.f3t': 'مستقل ترقی', 'why.f3d': 'مستقل معمول اور جائزے۔',
      'why.f4t': 'بین الاقوامی طلبہ', 'why.f4d': 'کئی ممالک سے طلبہ شامل ہوتے ہیں۔',
      'why.f5t': 'خاندان دوست', 'why.f5d': 'والدین باخبر اور شامل رہتے ہیں۔',
      'why.f6t': 'باعزت ماحول', 'why.f6d': 'پرسکون اور حوصلہ افزا ماحول۔',

      'courses.eyebrow': 'ہمارے پروگرام', 'courses.title': 'ہر طالب علم کے لیے قرآن کورسز',
      'courses.lead': 'اپنی سطح اور مقاصد کے مطابق پروگرام چنیں۔',
      'course.reading': 'قرآن پڑھنا', 'course.readingD': 'عربی حروف سے مکمل آیات تک روانی سے قرآن پڑھنا سیکھیں۔',
      'course.tajweed': 'تجوید کے ساتھ قرآن', 'course.tajweedD': 'صحیح تلفظ اور تجوید کے قواعد کے ساتھ تلاوت۔',
      'course.hifz': 'حفظ / یاد کرنا', 'course.hifzD': 'باقاعدہ دہرائی کے ساتھ حفظ کا منظم راستہ۔',
      'course.children': 'بچوں کے لیے قرآن', 'course.childrenD': 'چھوٹے سیکھنے والوں کے لیے دوستانہ اسباق۔',
      'course.adults': 'بالغوں کے لیے قرآن', 'course.adultsD': 'بالغ ابتدائی اور بہتری چاہنے والوں کے لیے۔',
      'course.daily': 'روزانہ قرآن سیکھنا', 'course.dailyD': 'روزانہ پڑھنے اور دہرائی کا مستقل معمول۔',

      'cta.learnMore': 'مزید جانیں ←', 'cta.enroll': 'داخلہ لیں',
      'cta.title': 'اپنا قرآن سفر شروع کرنے کے لیے تیار ہیں؟',
      'cta.lead': 'آج ہی رابطہ کریں اور اخلاص کے ساتھ سیکھنے کا پہلا قدم اٹھائیں۔',

      'how.eyebrow': 'یہ کیسے کام کرتا ہے',
      'how.title': '4 آسان مراحل میں اپنا قرآن سفر شروع کریں',
      'how.s1t': 'ہم سے رابطہ کریں', 'how.s1d': 'واٹس ایپ، ای میل یا فارم کے ذریعے رابطہ کریں۔',
      'how.s2t': 'اپنا کورس چنیں', 'how.s2d': 'اپنی سطح کے مطابق پروگرام منتخب کریں۔',
      'how.s3t': 'اپنا شیڈول منتخب کریں', 'how.s3d': 'اپنے دن اور وقت چنیں۔',
      'how.s4t': 'سیکھنا شروع کریں', 'how.s4d': 'براہ راست آن لائن کلاس میں شامل ہوں۔',
      'how.cta': 'داخلہ شروع کریں',

      'zoom.eyebrow': 'براہ راست کلاس', 'zoom.title': 'اپنی قرآن کلاس میں شامل ہوں',
      'zoom.lead': 'داخل طلبہ زوم کے ذریعے اپنی کلاس میں شامل ہو سکتے ہیں۔',
      'zoom.mid': 'میٹنگ آئی ڈی:', 'zoom.pwd': 'پاس ورڈ:', 'zoom.cta': 'زوم کلاس میں شامل ہوں',

      'rev.eyebrow': 'طلبہ کی آواز', 'rev.title': 'ہمارے طلبہ کے تاثرات',
      'rev.placeholder': 'طالب علم کا تبصرہ جلد آ رہا ہے',

      'faq.eyebrow': 'سوالات', 'faq.title': 'اکثر پوچھے جانے والے سوالات',
      'faq.more': 'تمام سوالات دیکھیں',
      'faq.q1': 'الامین قرآن انسٹی ٹیوٹ کیا ہے؟',
      'faq.a1': 'الامین قرآن انسٹی ٹیوٹ ایک آن لائن قرآن سیکھنے کا پلیٹ فارم ہے جس کی بنیاد عمیر امین نے رکھی اور وہ رہنمائی کرتے ہیں۔',
      'faq.q2': 'کون شامل ہو سکتا ہے؟',
      'faq.a2': 'ہر عمر اور سطح کے طلبہ — بچے، نوجوان اور بالغ — داخلہ لے سکتے ہیں۔',
      'faq.q3': 'کیا کلاسز ایک بہ ایک ہیں؟',
      'faq.a3': 'جی ہاں۔ ہماری کلاسز ذاتی، ایک بہ ایک سیشن کے طور پر ہیں۔',
      'faq.q4': 'آن لائن کلاسز کیسے ہوتی ہیں؟',
      'faq.a4': 'کلاسز آپ کے مقررہ وقت پر زوم کے ذریعے براہ راست آن لائن ہوتی ہیں۔',
      'faq.q5': 'میں داخلہ کیسے لوں؟',
      'faq.a5': 'آپ واٹس ایپ، ای میل یا رابطہ صفحے پر فارم کے ذریعے داخلہ لے سکتے ہیں۔',
      'faq.q6': 'کیا آپ بچوں کو پڑھاتے ہیں؟',
      'faq.a6': 'جی ہاں۔ ہم بچوں کے لیے عمر کے مطابق قرآن کے اسباق پیش کرتے ہیں۔',
      'faq.q7': 'کیا آپ بالغوں کو پڑھاتے ہیں؟',
      'faq.a7': 'جی ہاں۔ ہمارے بالغ پروگرام باعزت، نجی اور لچکدار ہیں۔',
      'faq.q8': 'کون سے کورسز دستیاب ہیں؟',
      'faq.a8': 'قرآن پڑھنا، تجوید، حفظ، ابتدائی، بچے، بالغ، روزانہ سیکھنا اور اسلامی مطالعات۔',
      'faq.q9': 'کیا میں اپنا شیڈول چن سکتا ہوں؟',
      'faq.a9': 'جی ہاں۔ آپ داخلے کے وقت اپنے پسندیدہ دن اور اوقات چن سکتے ہیں۔',
      'faq.q10': 'زوم کلاس میں کیسے شامل ہوں؟',
      'faq.a10': 'داخلے کے بعد آپ کو زوم لنک، میٹنگ آئی ڈی اور پاس ورڈ ملے گا۔',
      'faq.page.title': 'اکثر پوچھے جانے والے سوالات',
      'faq.page.lead': 'ہماری آن لائن قرآن کلاسز کے بارے میں عام سوالات کے واضح جوابات۔',
      'faq.cta.title': 'کیا اب بھی سوالات ہیں؟',
      'faq.cta.lead': 'رابطہ کرنے میں ہچکچاہٹ محسوس نہ کریں — ہم مدد کے لیے حاضر ہیں۔',

      'footer.tag': 'عمیر امین کی بنیاد اور رہنمائی میں۔ دنیا بھر کے طلبہ کے لیے آن لائن قرآن تعلیم۔',
      'footer.links': 'اہم روابط', 'footer.programs': 'پروگرام', 'footer.contact': 'رابطہ',
      'footer.legal': 'قانونی', 'footer.privacy': 'رازداری پالیسی',
      'footer.terms': 'شرائط و ضوابط', 'footer.disclaimer': 'ڈس کلیمر',
      'footer.rights': 'جملہ حقوق محفوظ ہیں۔',

      'about.title': 'الامین قرآن انسٹی ٹیوٹ کے بارے میں',
      'about.lead': 'ہر عمر اور ہر سطح کے لیے قرآن سیکھنے کی پرسکون، مخلص اور منظم آن لائن جگہ۔',
      'about.who.eyebrow': 'ہم کون ہیں', 'about.who.title': 'ایک وقف آن لائن قرآن انسٹی ٹیوٹ',
      'about.who.p1': 'الامین قرآن انسٹی ٹیوٹ ایک آن لائن قرآن پلیٹ فارم ہے جو طلبہ کو قرآن پڑھنے، سمجھنے اور اس سے تعلق قائم کرنے میں مدد کرتا ہے۔',
      'about.who.p2': 'ہم مانتے ہیں کہ قرآن سیکھنا زندگی بھر کا سفر ہے۔',
      'about.approach.title': 'ہمارا تدریسی طریقہ',
      'about.approach.1': 'ذاتی ایک بہ ایک کلاسز',
      'about.approach.2': 'واضح، منظم اسباق',
      'about.approach.3': 'صحیح تلاوت پر توجہ',
      'about.approach.4': 'حوصلہ افزا، باعزت ماحول',
      'about.approach.5': 'مستقل جائزہ اور ترقی کی نگرانی',
      'about.mission.title': 'ہمارا مشن',
      'about.mission.p': 'مخلصانہ، اعلیٰ معیار کی قرآن تعلیم آن لائن قابل رسائی بنانا۔',
      'about.vision.title': 'ہمارا وژن',
      'about.vision.p': 'ایک قابل اعتماد آن لائن انسٹی ٹیوٹ بننا جہاں دنیا بھر کے طلبہ قرآن سے مضبوط تعلق قائم کریں۔',
      'about.philosophy.title': 'ہمارا فلسفہ',
      'about.philosophy.p': 'سیکھنا باعزت، مستقل اور بغیر جلد بازی کے ہونا چاہیے۔',
      'about.founder.eyebrow': 'بانی', 'about.founder.role': 'بانی اور رہنما',
      'about.founder.p1': 'عمیر امین الامین قرآن انسٹی ٹیوٹ کے بانی اور رہنما استاد ہیں۔',
      'about.founder.p2': 'ان کا تدریسی فلسفہ پائیدار عادات بنانے پر مرکوز ہے۔',
      'about.values.eyebrow': 'ہماری اقدار', 'about.values.title': 'ہماری تدریس کی بنیاد',
      'about.v1t': 'اخلاص', 'about.v1d': 'ہر سبق حقیقی نیت کے ساتھ پیش کیا جاتا ہے۔',
      'about.v2t': 'مستقل مزاجی', 'about.v2d': 'چھوٹے مستحکم قدم بامعنی ترقی پیدا کرتے ہیں۔',
      'about.v3t': 'احترام', 'about.v3d': 'قرآن کو مکمل احترام کے ساتھ پیش کیا جاتا ہے۔',
      'about.v4t': 'صبر', 'about.v4d': 'ہر طالب علم اپنی صحت مند رفتار سے چلتا ہے۔',
      'about.v5t': 'وضاحت', 'about.v5d': 'اسباق منظم اور واضح ہوتے ہیں۔',
      'about.v6t': 'رسائی', 'about.v6d': 'کسی بھی ملک سے تعلق رکھنے والے طلبہ کا خیرمقدم۔',

      'courses.page.title': 'قرآن کورسز',
      'courses.page.lead': 'ہر عمر اور سطح کے لیے منظم آن لائن قرآن پروگرام میں سے چنیں۔',
      'courseCard.for': 'کے لیے:', 'courseCard.learn': 'آپ سیکھیں گے:',
      'courseCard.1t': 'قرآن پڑھنا', 'courseCard.1d': 'حروف سے مکمل آیات تک روانی سے قرآن پڑھنا۔',
      'courseCard.1for': 'ہر عمر کے ابتدائی', 'courseCard.1learn': 'حروف، جوڑنا، اعراب، روانی',
      'courseCard.2t': 'تجوید کے ساتھ قرآن', 'courseCard.2d': 'صحیح تلفظ اور تجوید کے قواعد۔',
      'courseCard.2for': 'وہ طلبہ جو پڑھ سکتے ہیں', 'courseCard.2learn': 'مخارج، صفات، مد، اخفا، ادغام',
      'courseCard.3t': 'حفظ / قرآن یاد کرنا', 'courseCard.3d': 'حفظ کا منظم پروگرام۔',
      'courseCard.3for': 'ہر عمر کے پرعزم طلبہ', 'courseCard.3learn': 'حفظ کی تکنیک، دہرائی',
      'courseCard.4t': 'ابتدائی قرآن', 'courseCard.4d': 'ابتدائی طلبہ کے لیے نرم آغاز۔',
      'courseCard.4for': 'بالکل ابتدائی', 'courseCard.4learn': 'عربی حروف، نورانی قاعدہ',
      'courseCard.5t': 'بچوں کے لیے قرآن', 'courseCard.5d': 'بچوں کے لیے دوستانہ قرآن اسباق۔',
      'courseCard.5for': 'اپنی رفتار سے سیکھنے والے بچے', 'courseCard.5learn': 'حروف، پڑھنا، مختصر سورتیں',
      'courseCard.6t': 'بالغوں کے لیے قرآن', 'courseCard.6d': 'بالغ سیکھنے والوں کے لیے پروگرام۔',
      'courseCard.6for': 'بالغ ابتدائی', 'courseCard.6learn': 'پڑھنا، تجوید، روزانہ مشق',
      'courseCard.7t': 'روزانہ قرآن سیکھنا', 'courseCard.7d': 'روزانہ کا مستقل معمول۔',
      'courseCard.7for': 'مستقل مشق چاہنے والے', 'courseCard.7learn': 'معمول بنانا، مستقل پڑھنا',
      'courseCard.8t': 'اسلامی مطالعات', 'courseCard.8d': 'بنیادی اسلامی علم سیکھیں۔',
      'courseCard.8for': 'اسلامی فہم کے متلاشی', 'courseCard.8learn': 'عقائد، روزمرہ مشق',

      'qi.title': 'قرآن معلومات',
      'qi.lead': 'قرآن کیا ہے اور اسے کیسے سیکھنا شروع کریں۔',
      'qi.h1': 'قرآن کیا ہے؟',
      'qi.p1': 'قرآن اسلام کی مقدس کتاب ہے، جو عربی میں نازل ہوئی۔',
      'qi.h2': 'قرآن کیوں سیکھیں؟',
      'qi.p2': 'قرآن سیکھنا روحانی تعلق، صبر اور غور و فکر پیدا کرتا ہے۔',
      'qi.h3': 'قرآن کی تلاوت کی اہمیت',
      'qi.p3': 'صحیح تلاوت الفاظ کے معنی کو محفوظ رکھتی ہے۔',
      'qi.h4': 'ابتدائی طور پر قرآن سیکھنا',
      'qi.p4': 'ابتدائی طور پر عربی حروف اور نورانی قاعدہ سے شروع ہوتا ہے۔',
      'qi.h5': 'بچوں کے لیے قرآن سیکھنا',
      'qi.p5': 'بچے مختصر، توجہ مرکوز سیشن سے فائدہ اٹھاتے ہیں۔',
      'qi.h6': 'بالغوں کے لیے قرآن سیکھنا',
      'qi.p6': 'بالغ کسی بھی وقت قرآن سیکھنا شروع کر سکتے ہیں۔',
      'qi.h7': 'روزانہ کا قرآن معمول بنانا',
      'qi.p7': 'مختصر مستقل روزانہ معمول زیادہ موثر ہے۔',
      'qi.h8': 'قرآن سیکھنے میں مستقل مزاجی',
      'qi.p8': 'مستقل مزاجی قرآن سیکھنے کی کلید ہے۔',
      'qi.h9': 'قرآن کو سمجھنا',
      'qi.p9': 'ترجمے اور مطالعے سے قرآن کو سمجھنا۔',
      'qi.h10': 'قرآن کا باعزت مطالعہ',
      'qi.p10': 'قرآن کو مکمل احترام کے ساتھ سیکھا جاتا ہے۔',

      'tj.title': 'آن لائن تجوید سیکھیں',
      'tj.lead': 'وضاحت اور صحیح تلفظ کے ساتھ قرآن کی خوبصورت تلاوت۔',
      'tj.what.eyebrow': 'تجوید کیا ہے', 'tj.what.title': 'تجوید: قرآن کی صحیح تلاوت کا فن',
      'tj.what.p1': 'تجوید ان قواعد کو کہتے ہیں جو ہر عربی حرف کی صحیح ادائیگی کی رہنمائی کرتے ہیں۔',
      'tj.what.p2': 'الامین میں تجوید قدم بہ قدم براہ راست سکھائی جاتی ہے۔',
      'tj.why.title': 'تجوید کیوں اہم ہے',
      'tj.why.1': 'الفاظ کے صحیح معنی محفوظ رکھتی ہے',
      'tj.why.2': 'تلاوت کی وضاحت اور خوبصورتی بڑھاتی ہے',
      'tj.why.3': 'بلند آواز میں پڑھنے کا اعتماد پیدا کرتی ہے',
      'tj.why.4': 'تلاوت کے دوران توجہ گہری کرتی ہے',
      'tj.topics.eyebrow': 'آپ کیا سیکھیں گے', 'tj.topics.title': 'تجوید کے بنیادی موضوعات',
      'tj.t1t': 'صحیح تلفظ', 'tj.t1d': 'ہر حرف کو اس کی اصل جگہ سے واضح ادا کرنا۔',
      'tj.t2t': 'مخارج', 'tj.t2d': 'یہ سمجھنا کہ ہر حرف منہ اور حلق میں کہاں سے پیدا ہوتا ہے۔',
      'tj.t3t': 'صفات', 'tj.t3d': 'ہر حرف کی خصوصیات سیکھنا۔',
      'tj.t4t': 'مد', 'tj.t4d': 'مناسب جگہوں پر صحیح کھینچائی۔',
      'tj.t5t': 'نون و میم کے قواعد', 'tj.t5d': 'اخفا، ادغام، اقلاب اور اظہار۔',
      'tj.t6t': 'وقف', 'tj.t6d': 'تلاوت کے دوران کہاں اور کیسے رکنا۔',
      'tj.improve.title': 'اپنی تلاوت بہتر بنانا',
      'tj.improve.1': 'روزانہ پڑھنے کی مشق',
      'tj.improve.2': 'صحیح تلاوت سننا',
      'tj.improve.3': 'رائے کے ساتھ بلند آواز میں پڑھنا',
      'tj.improve.4': 'سیکھے ہوئے قواعد کی باقاعدہ دہرائی',
      'tj.teacher.eyebrow': 'استاد کے ساتھ',
      'tj.teacher.title': 'استاد کے ساتھ سیکھنا کیوں اہم ہے',
      'tj.teacher.p1': 'تجوید صرف کتابوں سے حاصل نہیں ہو سکتی۔',
      'tj.teacher.p2': 'الامین میں ہر طالب علم کو ذاتی رائے ملتی ہے۔',
      'tj.cta.title': 'اپنا تجوید سفر شروع کریں',
      'tj.cta.lead': 'آج ہی داخلہ لیں اور تلاوت بہتر بنانا شروع کریں۔',

      'hifz.title': 'حفظ — قرآن یاد کرنا',
      'hifz.lead': 'روزانہ مشق اور باقاعدہ دہرائی کے ساتھ حفظ کا صبر آزما، منظم راستہ۔',
      'hifz.what.eyebrow': 'حفظ کیا ہے', 'hifz.what.title': 'قرآن کو دل میں محفوظ کرنا',
      'hifz.what.p1': 'حفظ قرآن کو یاد کرنے کی مشق ہے۔',
      'hifz.what.p2': 'الامین میں حفظ کو صبر اور خیال کے ساتھ کیا جاتا ہے۔',
      'hifz.pillars.title': 'ہمارے حفظ پروگرام کے ستون',
      'hifz.pillar.1': 'ہر سیشن میں نیا حفظ',
      'hifz.pillar.2': 'پچھلے حصوں کی روزانہ دہرائی',
      'hifz.pillar.3': 'حفظ کے دوران صحیح تجوید',
      'hifz.pillar.4': 'ذاتی استاد کی رہنمائی',
      'hifz.pillar.5': 'ترقی پر مبنی رفتار',
      'hifz.how.eyebrow': 'یہ کیسے کام کرتا ہے', 'hifz.how.title': 'حفظ کا عمل',
      'hifz.h1t': 'روزانہ مشق', 'hifz.h1d': 'روزانہ قابل انتظام مقدار۔',
      'hifz.h2t': 'دہرائی', 'hifz.h2d': 'ہر حصے کو کئی بار دہرایا جاتا ہے۔',
      'hifz.h3t': 'مراجعہ', 'hifz.h3d': 'پہلے حفظ شدہ حصے باقاعدگی سے دہرائے جاتے ہیں۔',
      'hifz.h4t': 'استاد کو سنانا', 'hifz.h4d': 'طلبہ استاد کو حفظ سے سناتے ہیں۔',
      'hifz.h5t': 'صبر اور مستقل مزاجی', 'hifz.h5d': 'حفظ طویل مدتی عزم ہے۔',
      'hifz.h6t': 'مختلف سطحیں', 'hifz.h6d': 'ہر سطح کے طلبہ کا خیرمقدم۔',
      'hifz.tips.title': 'کامیاب حفظ کے لیے نکات',
      'hifz.tip.1': 'حفظ کے لیے مقررہ وقت',
      'hifz.tip.2': 'نئے سیکھنے سے پہلے پرانا دہرائیں',
      'hifz.tip.3': 'حفظ کیے جانے والے حصے کی تلاوت سنیں',
      'hifz.tip.4': 'قرآن کی ایک مخصوص کاپی استعمال کریں',
      'hifz.tip.5': 'حفظ شدہ حصے نماز میں پڑھیں',
      'hifz.tip.6': 'اپنے آپ سے صبر کریں',
      'hifz.guidance.eyebrow': 'استاد کی رہنمائی',
      'hifz.guidance.title': 'حفظ کے لیے استاد کیوں ضروری ہے',
      'hifz.guidance.p1': 'اکیلے قرآن حفظ کرنا مشکل ہو سکتا ہے۔',
      'hifz.guidance.p2': 'الامین میں حفظ طلبہ کو مخصوص توجہ ملتی ہے۔',
      'hifz.levels.title': 'سیکھنے کی سطحیں',
      'hifz.levels.p1': 'طلبہ مختلف مراحل پر شامل ہوتے ہیں۔',
      'hifz.levels.p2': 'کوئی مقررہ ٹائم لائن نہیں ہے۔',
      'hifz.cta.title': 'اپنا حفظ سفر شروع کریں',
      'hifz.cta.lead': 'آج ہی داخلہ لیں اور قرآن حفظ کرنا شروع کریں۔',

      'child.title': 'بچوں کے لیے قرآن کلاسز',
      'child.lead': 'بچوں کے لیے دوستانہ، دلچسپ اور عمر کے مطابق آن لائن قرآن اسباق۔',
      'child.intro.eyebrow': 'چھوٹے سیکھنے والوں کے لیے',
      'child.intro.title': 'مضبوط بنیاد بنانا',
      'child.intro.p1': 'بچے حوصلہ افزا ماحول میں بہترین سیکھتے ہیں۔',
      'child.intro.p2': 'اسباق مختصر، واضح اور حوصلہ افزا ہوتے ہیں۔',
      'child.what.title': 'بچے کیا سیکھیں گے',
      'child.what.1': 'عربی حروف اور تلفظ',
      'child.what.2': 'نورانی قاعدہ',
      'child.what.3': 'بنیادی تجوید کے ساتھ قرآن پڑھنا',
      'child.what.4': 'مختصر سورتوں کا حفظ',
      'child.what.5': 'روزانہ مشق کی عادات',
      'child.what.6': 'قرآن سے باعزت تعلق',
      'child.journey.eyebrow': 'سیکھنے کا راستہ',
      'child.journey.title': 'بچے کیسے ترقی کرتے ہیں',
      'child.j1t': 'عربی حروف', 'child.j1d': 'ہر عربی حرف کی پہچان اور ادائیگی۔',
      'child.j2t': 'نورانی قاعدہ', 'child.j2d': 'حروف جوڑنا اور بنیادی الفاظ پڑھنا۔',
      'child.j3t': 'قرآن پڑھنا', 'child.j3d': 'بڑھتی روانی سے قرآن پڑھنا۔',
      'child.j4t': 'تجوید کی بنیاد', 'child.j4d': 'بنیادی تجوید کے قواعد۔',
      'child.j5t': 'حفظ', 'child.j5d': 'منتخب سورتوں کا حفظ۔',
      'child.j6t': 'روزانہ مشق', 'child.j6d': 'صحت مند روزانہ معمول۔',
      'child.parent.title': 'والدین کے لیے',
      'child.parent.1': 'آپ کے بچے کی ترقی پر باقاعدہ اپڈیٹ',
      'child.parent.2': 'محفوظ، باعزت ایک بہ ایک ماحول',
      'child.parent.3': 'خاندان کے معمول کے مطابق لچکدار شیڈول',
      'child.parent.4': 'گھر پر مشق کی رہنمائی',
      'child.parent.5': 'استاد سے کھلا رابطہ',
      'child.support.eyebrow': 'والدین کی مدد',
      'child.support.title': 'والدین باخبر اور شامل رہتے ہیں',
      'child.support.p1': 'ہم سمجھتے ہیں کہ والدین جاننا چاہتے ہیں کہ ان کا بچہ کیسے ترقی کر رہا ہے۔',
      'child.support.p2': 'مختصر سیشن اور باقاعدہ رائے بچوں کو حوصلہ افزائی دیتی ہے۔',
      'child.approach.eyebrow': 'ہمارا نقطہ نظر',
      'child.approach.title': 'دوستانہ، بچگانہ نہیں',
      'child.approach.p1': 'ہمارا بچوں کا پروگرام گرم جوش ہے، لیکن قرآن سیکھنے کی سنجیدگی برقرار رکھتا ہے۔',
      'child.approach.p2': 'ہر بچے کو ایک فرد کے طور پر دیکھا جاتا ہے۔',
      'child.progress.title': 'ترقی پر مبنی سیکھنا',
      'child.progress.p': 'بچے اپنی رفتار سے آگے بڑھتے ہیں۔',
      'child.cta.title': 'آج ہی اپنے بچے کا داخلہ کرائیں',
      'child.cta.lead': 'اپنے بچے کو ذاتی رہنمائی کے ساتھ قرآن سیکھنے کا تحفہ دیں۔',

      'adult.title': 'بالغوں کے لیے قرآن کلاسز',
      'adult.lead': 'بالغوں کے لیے باعزت، لچکدار اور نجی آن لائن قرآن تعلیم۔',
      'adult.intro.eyebrow': 'بالغ سیکھنے والوں کے لیے',
      'adult.intro.title': 'قرآن سیکھنے کے لیے کبھی دیر نہیں ہوتی',
      'adult.intro.p1': 'بہت سے بالغ محسوس کرتے ہیں کہ ان کا موقع نکل گیا۔',
      'adult.intro.p2': 'ہماری ایک بہ ایک کلاسز نجی ماحول فراہم کرتی ہیں۔',
      'adult.what.title': 'آپ کیا سیکھیں گے',
      'adult.what.1': 'عربی حروف اور بنیادی پڑھنا',
      'adult.what.2': 'روانی سے قرآن پڑھنا',
      'adult.what.3': 'تجوید — صحیح تلاوت کے قواعد',
      'adult.what.4': 'قرآن حفظ (اختیاری)',
      'adult.what.5': 'مستقل روزانہ معمول بنانا',
      'adult.what.6': 'قرآنی تصورات کو سمجھنا',
      'adult.why.eyebrow': 'بالغ ہمیں کیوں چنتے ہیں',
      'adult.why.title': 'مصروف زندگی کے لیے تیار',
      'adult.w1t': 'لچکدار شیڈول', 'adult.w1d': 'اپنے شیڈول کے مطابق کلاس کے دن چنیں۔',
      'adult.w2t': 'نجی ایک بہ ایک', 'adult.w2d': 'نجی ماحول میں سیکھیں۔',
      'adult.w3t': 'ابتدائی دوست', 'adult.w3d': 'بنیاد سے شروع کریں۔',
      'adult.w4t': 'تلاوت میں بہتری', 'adult.w4d': 'اپنی روانی بہتر بنائیں۔',
      'adult.w5t': 'اختیاری حفظ', 'adult.w5d': 'اپنی رفتار سے حفظ کریں۔',
      'adult.w6t': 'مستقل معمول', 'adult.w6d': 'پائیدار روزانہ قرآن مشق۔',
      'adult.schedule.title': 'لچکدار سیکھنے کے اختیارات',
      'adult.schedule.1': 'صبح، دوپہر یا شام کے سیشن',
      'adult.schedule.2': 'ہفتے کے دن یا ہفتے کے آخر میں',
      'adult.schedule.3': 'مصروف پیشہ ور افراد کے لیے مختصر سیشن',
      'adult.schedule.4': 'ضرورت پڑنے پر شیڈول بدلیں',
      'adult.busy.eyebrow': 'مصروف شیڈول؟',
      'adult.busy.title': 'آپ کی زندگی کے مطابق سیکھنا',
      'adult.busy.p1': 'ہم سمجھتے ہیں کہ بالغ کے پاس کام اور خاندان ہے۔',
      'adult.busy.p2': 'دن میں 20 سے 30 منٹ بھی طویل مدتی ترقی پیدا کر سکتے ہیں۔',
      'adult.routine.title': 'مستقل قرآن معمول بنانا',
      'adult.routine.p1': 'قرآن سیکھنے کا موثر ترین طریقہ مستقل مزاجی ہے۔',
      'adult.routine.p2': 'آپ کا استاد ایک حقیقی منصوبہ بنانے میں مدد کرے گا۔',
      'adult.cta.title': 'آج ہی سیکھنا شروع کریں',
      'adult.cta.lead': 'پہلا قدم اٹھائیں — ہم آپ کے ساتھ سفر کرنے کے لیے حاضر ہیں۔',

      'contact.title': 'رابطہ اور داخلہ',
      'contact.lead': 'رابطہ کریں، سوال پوچھیں یا داخلے کی درخواست جمع کروائیں۔',
      'contact.wa': 'واٹس ایپ', 'contact.phone': 'فون', 'contact.email': 'ای میل',
      'contact.openWa': 'واٹس ایپ کھولیں ←', 'contact.callNow': 'ابھی کال کریں ←', 'contact.sendEmail': 'ای میل بھیجیں ←',
      'contact.form.eyebrow': 'داخلہ', 'contact.form.title': 'داخلے کی درخواست جمع کروائیں',
      'contact.form.lead': 'نیچے دیا گیا فارم پر کریں اور ہم جلد رابطہ کریں گے۔',

      'form.name': 'پورا نام', 'form.age': 'طالب علم کی عمر',
      'form.parent': 'والدین / سرپرست کا نام', 'form.country': 'ملک',
      'form.email': 'ای میل', 'form.phone': 'فون / واٹس ایپ',
      'form.course': 'کورس میں دلچسپی', 'form.selectCourse': '-- کورس منتخب کریں --',
      'form.days': 'پسندیدہ دن', 'form.time': 'پسندیدہ وقت',
      'form.level': 'موجودہ قرآن سیکھنے کی سطح', 'form.selectLevel': '-- سطح منتخب کریں --',
      'form.message': 'پیغام', 'form.submit': 'داخلے کی درخواست جمع کروائیں',
      'form.note': 'یہ فارم داخلے کی درخواست کے لیے ہے۔ ابھی کوئی بیک اینڈ منسلک نہیں ہے۔',
      'form.success': 'شکریہ! آپ کی درخواست ریکارڈ کر لی گئی ہے۔ براہ کرم تصدیق کے لیے واٹس ایپ پر بھی رابطہ کریں۔',
      'form.error': 'براہ کرم تمام مطلوبہ فیلڈز درست طور پر پُر کریں۔',
      'form.invalidEmail': 'براہ کرم درست ای میل درج کریں۔',

      'legal.updated': 'آخری اپڈیٹ:',

      'privacy.title': 'رازداری پالیسی',
      'privacy.lead': 'آپ کی رازداری ہمارے لیے اہم ہے۔',
      'privacy.h1': '1. معلومات کی جمع آوری',
      'privacy.p1': 'جب آپ رابطہ کرتے ہیں یا داخلے کی درخواست جمع کرواتے ہیں، ہم آپ کی ذاتی معلومات جمع کر سکتے ہیں۔',
      'privacy.h2': '2. رابطہ فارم',
      'privacy.p2': 'فارم سے جمع کردہ معلومات صرف آپ کی درخواست کا جواب دینے کے لیے استعمال ہوتی ہیں۔',
      'privacy.h3': '3. رابطہ',
      'privacy.p3': 'ہم ای میل، فون، واٹس ایپ یا دیگر پلیٹ فارمز کے ذریعے رابطہ کر سکتے ہیں۔',
      'privacy.h4': '4. کوکیز',
      'privacy.p4': 'ہماری ویب سائٹ آپ کی زبان کی ترجیح یاد رکھنے کے لیے کوکیز استعمال کر سکتی ہے۔',
      'privacy.h5': '5. تجزیات',
      'privacy.p5': 'مستقبل میں تجزیاتی ٹولز کے ذریعے گمنام استعمال کا ڈیٹا جمع کیا جا سکتا ہے۔',
      'privacy.h6': '6. تیسری پارٹی کی خدمات',
      'privacy.p6': 'ہم زوم اور واٹس ایپ جیسی خدمات استعمال کرتے ہیں۔',
      'privacy.h7': '7. ڈیٹا سیکیورٹی',
      'privacy.p7': 'ہم آپ کی معلومات کی حفاظت کے لیے مناسب اقدامات کرتے ہیں۔',
      'privacy.h8': '8. ڈیٹا کی برقراری',
      'privacy.p8': 'ہم آپ کی معلومات صرف ضرورت کی حد تک برقرار رکھتے ہیں۔',
      'privacy.h9': '9. بچوں کی رازداری',
      'privacy.p9': '18 سال سے کم عمر طلبہ کے لیے والدین کی شمولیت ضروری ہے۔',
      'privacy.h10': '10. صارف کے حقوق',
      'privacy.p10': 'آپ اپنی معلومات تک رسائی، درستگی یا حذف کرنے کی درخواست کر سکتے ہیں۔',
      'privacy.h11': '11. پالیسی میں تبدیلیاں',
      'privacy.p11': 'ہم اس پالیسی کو وقتاً فوقتاً اپڈیٹ کر سکتے ہیں۔',
      'privacy.h12': '12. رابطہ معلومات',
      'privacy.p12': 'اگر آپ کے کوئی سوالات ہیں تو ہم سے رابطہ کریں:',

      'terms.title': 'شرائط و ضوابط',
      'terms.lead': 'براہ کرم ویب سائٹ استعمال کرنے سے پہلے شرائط پڑھیں۔',
      'terms.h1': '1. ویب سائٹ کا استعمال',
      'terms.p1': 'اس ویب سائٹ کے استعمال سے آپ ان شرائط سے متفق ہیں۔',
      'terms.h2': '2. تعلیمی خدمات',
      'terms.p2': 'الامین قرآن انسٹی ٹیوٹ آن لائن قرآن تعلیم فراہم کرتا ہے۔',
      'terms.h3': '3. داخلہ',
      'terms.p3': 'داخلہ آپ کی درخواست کی تصدیق کے بعد ہوتا ہے۔',
      'terms.h4': '4. کلاس شیڈول',
      'terms.p4': 'کلاس شیڈول طالب علم اور استاد کے درمیان طے ہوتے ہیں۔',
      'terms.h5': '5. ادائیگیاں',
      'terms.p5': 'ادائیگی کی تفصیلات داخلے کے وقت بتائی جائیں گی۔',
      'terms.h6': '6. منسوخی',
      'terms.p6': 'منسوخی کی پیشگی اطلاع دی جائے۔',
      'terms.h7': '7. رقم کی واپسی',
      'terms.p7': 'رقم کی واپسی کی شرائط داخلے کے وقت بتائی جائیں گی۔',
      'terms.h8': '8. صارف کی ذمہ داریاں',
      'terms.p8': 'طلبہ سے باعزت رویے کی توقع ہے۔',
      'terms.h9': '9. دانشورانہ املاک',
      'terms.p9': 'ویب سائٹ کا تمام مواد الامین کی ملکیت ہے۔',
      'terms.h10': '10. تیسری پارٹی کے روابط',
      'terms.p10': 'ہم بیرونی خدمات کی پالیسیوں کے ذمہ دار نہیں۔',
      'terms.h11': '11. ذمہ داری کی حد',
      'terms.p11': 'الامین بالواسطہ نقصانات کا ذمہ دار نہیں۔',
      'terms.h12': '12. شرائط میں تبدیلیاں',
      'terms.p12': 'ہم شرائط کو وقتاً فوقتاً اپڈیٹ کر سکتے ہیں۔',
      'terms.h13': '13. رابطہ معلومات',
      'terms.p13': 'اگر سوالات ہوں تو رابطہ کریں:',

      'disc.title': 'ڈس کلیمر',
      'disc.lead': 'براہ کرم ویب سائٹ کے مواد کے بارے میں یہ ڈس کلیمر پڑھیں۔',
      'disc.h1': '1. تعلیمی مقصد',
      'disc.p1': 'ویب سائٹ کا مواد تعلیمی مقاصد کے لیے ہے۔',
      'disc.h2': '2. باعزت مذہبی سیکھنا',
      'disc.p2': 'مذہبی سیکھنا ذاتی اور مقدس سفر ہے۔',
      'disc.h3': '3. علمی رہنمائی کا متبادل نہیں',
      'disc.p3': 'ویب سائٹ کی معلومات مستند علمی رہنمائی کا متبادل نہیں۔',
      'disc.h4': '4. معلومات کی درستگی',
      'disc.p4': 'ہم مواد کو درست رکھنے کی کوشش کرتے ہیں۔',
      'disc.h5': '5. بیرونی روابط',
      'disc.p5': 'ہم بیرونی وسائل کے ذمہ دار نہیں۔',
      'disc.h6': '6. ذاتی ذمہ داری',
      'disc.p6': 'زائرین کو اپنی رائے استعمال کرنے کی حوصلہ افزائی کی جاتی ہے۔',
      'disc.h7': '7. رابطہ معلومات',
      'disc.p7': 'اگر سوالات ہوں تو رابطہ کریں:'
    },

    ar: {
      'nav.home': 'الرئيسية', 'nav.about': 'من نحن', 'nav.courses': 'الدورات',
      'nav.quran': 'معلومات القرآن', 'nav.tajweed': 'التجويد', 'nav.hifz': 'التحفيظ',
      'nav.children': 'الأطفال', 'nav.adults': 'الكبار', 'nav.contact': 'اتصل بنا',
      'nav.enroll': 'سجّل الآن', 'nav.faq': 'الأسئلة',

      'hero.eyebrow': 'معهد القرآن عبر الإنترنت',
      'hero.title1': 'تعلّم القرآن.',
      'hero.title2': 'حسّن تلاوتك.',
      'hero.title3': 'ابنِ صلة تدوم مدى الحياة.',
      'hero.lead': 'يقدم معهد الأمين للقرآن الكريم تعليمًا فرديًا مدروسًا عبر الإنترنت لجميع الأعمار والمستويات — بإشراف الأستاذ عمير أمين.',
      'hero.cta1': 'ابدأ التعلّم', 'hero.cta2': 'استكشف الدورات', 'hero.cta3': 'اتصل بنا',

      'trust.item1': 'تعلّم فردي', 'trust.item2': 'مواعيد مرنة',
      'trust.item3': 'أطفال وكبار', 'trust.item4': 'تعليم عبر الإنترنت', 'trust.item5': 'إرشاد شخصي',

      'benefit.1t': 'إرشاد مؤهل', 'benefit.1d': 'إرشاد شخصي من معلم متفانٍ.',
      'benefit.2t': 'مواعيد مرنة', 'benefit.2d': 'اختر أوقاتًا تناسب جدولك.',
      'benefit.3t': 'جميع الأعمار', 'benefit.3d': 'برامج مخصصة لكل الفئات.',
      'benefit.4t': 'وصول عالمي', 'benefit.4d': 'تعلّم من أي مكان في العالم.',

      'why.eyebrow': 'لماذا الأمين', 'why.title': 'طريق هادئ ومركّز لتعلّم القرآن',
      'why.lead': 'نجمع بين الإخلاص والترتيب والاهتمام الشخصي لمساعدة كل طالب على التقدم بوتيرة صحية.',
      'why.f1t': 'منهج منظم', 'why.f1d': 'مسارات واضحة من الحروف إلى التلاوة الطلقة.',
      'why.f2t': 'دروس فردية مباشرة', 'why.f2d': 'تفاعل مباشر مع المعلم.',
      'why.f3t': 'تقدّم مستمر', 'why.f3d': 'روتين ومراجعات ثابتة.',
      'why.f4t': 'طلاب دوليون', 'why.f4d': 'ينضم الطلاب من دول عديدة.',
      'why.f5t': 'صديق للعائلة', 'why.f5d': 'الأهل على اطلاع ومشاركة دائمة.',
      'why.f6t': 'بيئة محترمة', 'why.f6d': 'مساحة هادئة وأخلاقية ومشجعة.',

      'courses.eyebrow': 'برامجنا', 'courses.title': 'دورات قرآنية لكل متعلّم',
      'courses.lead': 'اختر برنامجًا يناسب مستواك وأهدافك.',
      'course.reading': 'قراءة القرآن', 'course.readingD': 'تعلّم قراءة القرآن بطلاقة من الحروف حتى الآيات.',
      'course.tajweed': 'القرآن مع التجويد', 'course.tajweedD': 'تلاوة القرآن بنطق صحيح وأحكام التجويد.',
      'course.hifz': 'التحفيظ', 'course.hifzD': 'مسار منظم لحفظ القرآن مع المراجعة.',
      'course.children': 'قرآن الأطفال', 'course.childrenD': 'دروس ودية مناسبة للأعمار الصغيرة.',
      'course.adults': 'قرآن الكبار', 'course.adultsD': 'برامج مرنة ومحترمة للكبار.',
      'course.daily': 'تعلّم القرآن اليومي', 'course.dailyD': 'روتين يومي ثابت للقراءة والمراجعة.',

      'cta.learnMore': 'المزيد ←', 'cta.enroll': 'سجّل الآن',
      'cta.title': 'هل أنت مستعد لبدء رحلتك مع القرآن؟',
      'cta.lead': 'تواصل معنا اليوم وخذ الخطوة الأولى بإخلاص وثبات.',

      'how.eyebrow': 'كيف يعمل',
      'how.title': 'ابدأ رحلتك القرآنية في 4 خطوات',
      'how.s1t': 'اتصل بنا', 'how.s1d': 'تواصل عبر واتساب أو البريد أو النموذج.',
      'how.s2t': 'اختر دورتك', 'how.s2d': 'اختر البرنامج المناسب لمستواك.',
      'how.s3t': 'اختر جدولك', 'how.s3d': 'حدد الأيام والأوقات المناسبة لك.',
      'how.s4t': 'ابدأ التعلّم', 'how.s4d': 'انضم إلى صفك المباشر وابدأ.',
      'how.cta': 'ابدأ التسجيل',

      'zoom.eyebrow': 'صف مباشر', 'zoom.title': 'انضم إلى صف القرآن',
      'zoom.lead': 'يمكن للطلاب المسجلين الانضمام إلى صفهم عبر زوم.',
      'zoom.mid': 'رقم الاجتماع:', 'zoom.pwd': 'كلمة المرور:', 'zoom.cta': 'انضم لصف زوم',

      'rev.eyebrow': 'أصوات الطلاب', 'rev.title': 'تقييمات طلابنا',
      'rev.placeholder': 'تقييم الطالب قادم قريبًا',

      'faq.eyebrow': 'أسئلة', 'faq.title': 'الأسئلة الشائعة',
      'faq.more': 'شاهد جميع الأسئلة',
      'faq.q1': 'ما هو معهد الأمين للقرآن الكريم؟',
      'faq.a1': 'معهد الأمين للقرآن الكريم منصة تعليمية عبر الإنترنت أسسها الأستاذ عمير أمين.',
      'faq.q2': 'من يمكنه الانضمام؟',
      'faq.a2': 'جميع الأعمار والمستويات — أطفال ومراهقون وكبار — مرحّب بهم.',
      'faq.q3': 'هل الدروس فردية؟',
      'faq.a3': 'نعم، دروسنا فردية للتركيز الكامل.',
      'faq.q4': 'كيف تُعقد الدروس عبر الإنترنت؟',
      'faq.a4': 'الدروس مباشرة عبر زوم في موعدك المحدد.',
      'faq.q5': 'كيف يمكنني التسجيل؟',
      'faq.a5': 'يمكنك التسجيل عبر واتساب أو البريد أو نموذج التواصل.',
      'faq.q6': 'هل تعلّمون الأطفال؟',
      'faq.a6': 'نعم، نقدم دروسًا مناسبة للأعمار الصغيرة.',
      'faq.q7': 'هل تعلّمون الكبار؟',
      'faq.a7': 'نعم، برامج الكبار محترمة ومرنة.',
      'faq.q8': 'ما الدورات المتاحة؟',
      'faq.a8': 'قراءة القرآن، التجويد، التحفيظ، المبتدئون، الأطفال، الكبار، اليومي، والدراسات الإسلامية.',
      'faq.q9': 'هل يمكنني اختيار جدولي؟',
      'faq.a9': 'نعم، يمكنك اختيار الأيام والأوقات المناسبة.',
      'faq.q10': 'كيف أنضم لصف زوم؟',
      'faq.a10': 'بعد التسجيل، ستحصل على رابط زوم ورقم الاجتماع وكلمة المرور.',
      'faq.page.title': 'الأسئلة الشائعة',
      'faq.page.lead': 'إجابات واضحة عن أسئلة شائعة حول دروسنا القرآنية.',
      'faq.cta.title': 'هل لديك أسئلة أخرى؟',
      'faq.cta.lead': 'لا تتردد في التواصل — نحن هنا للمساعدة.',

      'footer.tag': 'بتأسيس وإشراف عمير أمين. تعليم قرآني متميز عبر الإنترنت لطلاب من جميع أنحاء العالم.',
      'footer.links': 'روابط سريعة', 'footer.programs': 'البرامج', 'footer.contact': 'اتصل',
      'footer.legal': 'قانوني', 'footer.privacy': 'سياسة الخصوصية',
      'footer.terms': 'الشروط والأحكام', 'footer.disclaimer': 'إخلاء المسؤولية',
      'footer.rights': 'جميع الحقوق محفوظة.',

      'about.title': 'حول معهد الأمين للقرآن',
      'about.lead': 'مساحة هادئة ومخلصة ومنظمة لتعلّم القرآن — لكل الأعمار والمستويات.',
      'about.who.eyebrow': 'من نحن', 'about.who.title': 'معهد قرآني متفانٍ عبر الإنترنت',
      'about.who.p1': 'معهد الأمين منصة مكرسة لمساعدة الطلاب على قراءة القرآن وفهمه.',
      'about.who.p2': 'نؤمن أن تعلّم القرآن رحلة تدوم مدى الحياة.',
      'about.approach.title': 'منهجنا التعليمي',
      'about.approach.1': 'دروس فردية شخصية',
      'about.approach.2': 'مسارات دروس واضحة',
      'about.approach.3': 'التركيز على التلاوة الصحيحة',
      'about.approach.4': 'بيئة محترمة ومشجعة',
      'about.approach.5': 'مراجعة وتتبع مستمر',
      'about.mission.title': 'رسالتنا',
      'about.mission.p': 'تقديم تعليم قرآني عالي الجودة عبر الإنترنت مع إرشاد شخصي.',
      'about.vision.title': 'رؤيتنا',
      'about.vision.p': 'أن نكون معهدًا موثوقًا يبني صلة دائمة للطلاب مع القرآن.',
      'about.philosophy.title': 'فلسفتنا',
      'about.philosophy.p': 'التعلّم يجب أن يكون محترمًا وثابتًا ودون تسرّع.',
      'about.founder.eyebrow': 'المؤسس', 'about.founder.role': 'المؤسس والمرشد',
      'about.founder.p1': 'عمير أمين هو مؤسس ومعلم معهد الأمين للقرآن الكريم.',
      'about.founder.p2': 'فلسفته التعليمية تركز على بناء عادات مستدامة.',
      'about.values.eyebrow': 'قيمنا', 'about.values.title': 'ما يشكّل تعليمنا',
      'about.v1t': 'الإخلاص', 'about.v1d': 'كل درس يُقدّم بنية صادقة.',
      'about.v2t': 'الثبات', 'about.v2d': 'خطوات صغيرة ثابتة تصنع تقدمًا طويل الأمد.',
      'about.v3t': 'الاحترام', 'about.v3d': 'التعامل مع القرآن بما يستحقه من هيبة.',
      'about.v4t': 'الصبر', 'about.v4d': 'كل متعلّم يسير بوتيرة صحية.',
      'about.v5t': 'الوضوح', 'about.v5d': 'دروس منظمة وسهلة المتابعة.',
      'about.v6t': 'إتاحة', 'about.v6d': 'الترحيب بالطلاب من أي بلد أو خلفية.',

      'courses.page.title': 'الدورات القرآنية',
      'courses.page.lead': 'اختر من مجموعة برامج منظمة لكل الأعمار والمستويات.',
      'courseCard.for': 'لـ:', 'courseCard.learn': 'ستتعلم:',
      'courseCard.1t': 'قراءة القرآن', 'courseCard.1d': 'تعلّم قراءة القرآن بطلاقة من الحروف حتى الآيات.',
      'courseCard.1for': 'المبتدئون والراغبون في التحسّن من كل الأعمار', 'courseCard.1learn': 'الحروف، الوصل، الحركات، التلاوة',
      'courseCard.2t': 'القرآن مع التجويد', 'courseCard.2d': 'تلاوة القرآن بنطق صحيح وأحكام التجويد.',
      'courseCard.2for': 'من يقرأ ويريد تحسين التلاوة', 'courseCard.2learn': 'المخارج، الصفات، المد، الإخفاء، الإدغام',
      'courseCard.3t': 'التحفيظ', 'courseCard.3d': 'برنامج منظم لحفظ القرآن مع المراجعة.',
      'courseCard.3for': 'الطلاب الملتزمون من كل الأعمار', 'courseCard.3learn': 'تقنيات الحفظ والمراجعة',
      'courseCard.4t': 'قرآن المبتدئين', 'courseCard.4d': 'بداية لطيفة للمبتدئين.',
      'courseCard.4for': 'المبتدئون تمامًا', 'courseCard.4learn': 'الحروف، القاعدة النورانية',
      'courseCard.5t': 'قرآن الأطفال', 'courseCard.5d': 'دروس ودية مناسبة للأطفال.',
      'courseCard.5for': 'الأطفال بوتيرتهم', 'courseCard.5learn': 'الحروف، القراءة، السور القصيرة',
      'courseCard.6t': 'قرآن الكبار', 'courseCard.6d': 'برامج مرنة للكبار.',
      'courseCard.6for': 'المبتدئون والمشغولون', 'courseCard.6learn': 'القراءة والتجويد والمواظبة',
      'courseCard.7t': 'التعلّم اليومي', 'courseCard.7d': 'روتين يومي ثابت.',
      'courseCard.7for': 'من يريد ممارسة يومية', 'courseCard.7learn': 'بناء الروتين والقراءة الثابتة',
      'courseCard.8t': 'الدراسات الإسلامية', 'courseCard.8d': 'المعرفة الإسلامية الأساسية.',
      'courseCard.8for': 'الباحثون عن الفهم الأساسي', 'courseCard.8learn': 'العقيدة والممارسة اليومية',

      'qi.title': 'معلومات عن القرآن',
      'qi.lead': 'إرشاد بسيط ومحترم لفهم القرآن وكيفية البدء بتعلّمه.',
      'qi.h1': 'ما هو القرآن؟',
      'qi.p1': 'القرآن هو الكتاب المقدس للإسلام، نزل باللغة العربية.',
      'qi.h2': 'لماذا نتعلّم القرآن؟',
      'qi.p2': 'تعلّم القرآن يغذي الصلة الروحية والصبر والتأمل.',
      'qi.h3': 'أهمية تلاوة القرآن',
      'qi.p3': 'التلاوة الصحيحة تحفظ معاني الكلمات.',
      'qi.h4': 'تعلّم القرآن كمبتدئ',
      'qi.p4': 'يبدأ المبتدئون عادةً بالحروف العربية والقاعدة النورانية.',
      'qi.h5': 'تعلّم القرآن للأطفال',
      'qi.p5': 'يستفيد الأطفال من جلسات قصيرة مع التشجيع.',
      'qi.h6': 'تعلّم القرآن للكبار',
      'qi.p6': 'يمكن للكبار البدء في أي مرحلة من حياتهم.',
      'qi.h7': 'بناء روتين قرآني يومي',
      'qi.p7': 'الروتين اليومي القصير أكثر فاعلية.',
      'qi.h8': 'الثبات في تعلّم القرآن',
      'qi.p8': 'الثبات هو مفتاح تعلّم القرآن.',
      'qi.h9': 'فهم القرآن',
      'qi.p9': 'فهم القرآن من خلال الترجمة والدراسة يربط معانيه بالحياة.',
      'qi.h10': 'دراسة القرآن باحترام',
      'qi.p10': 'يُتعامل مع القرآن بالخشوع — بأيدٍ نظيفة وتركيز وصدق.',

      'tj.title': 'تعلّم التجويد عبر الإنترنت',
      'tj.lead': 'تلاوة القرآن بجمال — بوضوح ونطق صحيح وأحكام التجويد.',
      'tj.what.eyebrow': 'ما هو التجويد', 'tj.what.title': 'التجويد: فن تلاوة القرآن الصحيح',
      'tj.what.p1': 'التجويد هو القواعد التي توجه كيفية نطق الحروف عند التلاوة.',
      'tj.what.p2': 'في معهد الأمين، يُدرَّس التجويد خطوة بخطوة مباشرة.',
      'tj.why.title': 'لماذا التجويد مهم',
      'tj.why.1': 'يحفظ المعنى الصحيح للكلمات',
      'tj.why.2': 'يحسّن وضوح التلاوة وجمالها',
      'tj.why.3': 'يبني الثقة في القراءة الجهرية',
      'tj.why.4': 'يعمّق التركيز أثناء التلاوة',
      'tj.topics.eyebrow': 'ما ستتعلم', 'tj.topics.title': 'المحاور الأساسية للتجويد',
      'tj.t1t': 'النطق الصحيح', 'tj.t1d': 'نطق كل حرف بوضوح من مخرجه.',
      'tj.t2t': 'المخارج', 'tj.t2d': 'فهم من أين يخرج كل حرف.',
      'tj.t3t': 'الصفات', 'tj.t3d': 'تعلّم صفات الحروف.',
      'tj.t4t': 'المد', 'tj.t4d': 'المد الصحيح في مواضعه.',
      'tj.t5t': 'أحكام النون والميم', 'tj.t5d': 'الإخفاء والإدغام والإقلاب والإظهار.',
      'tj.t6t': 'الوقف', 'tj.t6d': 'أين وكيف تقف أثناء التلاوة.',
      'tj.improve.title': 'تحسين تلاوتك',
      'tj.improve.1': 'ممارسة القراءة اليومية',
      'tj.improve.2': 'الاستماع للتلاوة الصحيحة',
      'tj.improve.3': 'القراءة الجهرية مع التصحيح',
      'tj.improve.4': 'المراجعة المنتظمة للقواعد',
      'tj.teacher.eyebrow': 'مع معلم',
      'tj.teacher.title': 'لماذا التعلم مع معلم مهم',
      'tj.teacher.p1': 'التجويد لا يُتقن من الكتب وحدها.',
      'tj.teacher.p2': 'في معهد الأمين، كل طالب يحصل على ملاحظات شخصية.',
      'tj.cta.title': 'ابدأ رحلتك مع التجويد',
      'tj.cta.lead': 'سجّل اليوم وابدأ تحسين تلاوتك.',

      'hifz.title': 'التحفيظ — حفظ القرآن',
      'hifz.lead': 'مسار صبور ومنظم لحفظ القرآن مع الممارسة اليومية والمراجعة.',
      'hifz.what.eyebrow': 'ما هو الحفظ', 'hifz.what.title': 'حفظ القرآن في قلبك',
      'hifz.what.p1': 'الحفظ هو ممارسة حفظ القرآن آية بآية.',
      'hifz.what.p2': 'في معهد الأمين، الحفظ يُتعامل معه بصبر وعناية.',
      'hifz.pillars.title': 'أركان برنامج التحفيظ',
      'hifz.pillar.1': 'حفظ جديد في كل جلسة',
      'hifz.pillar.2': 'مراجعة يومية للأجزاء السابقة',
      'hifz.pillar.3': 'تجويد صحيح أثناء الحفظ',
      'hifz.pillar.4': 'إرشاد شخصي من المعلم',
      'hifz.pillar.5': 'وتيرة مبنية على التقدم',
      'hifz.how.eyebrow': 'كيف يعمل', 'hifz.how.title': 'عملية الحفظ',
      'hifz.h1t': 'ممارسة يومية', 'hifz.h1d': 'قدر يومي يمكن إدارته.',
      'hifz.h2t': 'التكرار', 'hifz.h2d': 'يُكرر كل جزء عدة مرات.',
      'hifz.h3t': 'المراجعة', 'hifz.h3d': 'الأجزاء المحفوظة تُراجَع بانتظام.',
      'hifz.h4t': 'التسميع للمعلم', 'hifz.h4d': 'الطلاب يسمعون للمعلم من حفظهم.',
      'hifz.h5t': 'صبر وثبات', 'hifz.h5d': 'الحفظ التزام طويل الأمد.',
      'hifz.h6t': 'مستويات مختلفة', 'hifz.h6d': 'مرحّب بكل المستويات.',
      'hifz.tips.title': 'نصائح للحفظ الناجح',
      'hifz.tip.1': 'حدد وقتًا يوميًا ثابتًا للحفظ',
      'hifz.tip.2': 'راجع ما حفظت قبل الجديد',
      'hifz.tip.3': 'استمع للتلاوة',
      'hifz.tip.4': 'استخدم نسخة واحدة من المصحف',
      'hifz.tip.5': 'اقرأ ما حفظت في الصلاة',
      'hifz.tip.6': 'كن صبورًا مع نفسك',
      'hifz.guidance.eyebrow': 'إرشاد المعلم',
      'hifz.guidance.title': 'لماذا المعلم ضروري للحفظ',
      'hifz.guidance.p1': 'حفظ القرآن وحدك صعب.',
      'hifz.guidance.p2': 'في معهد الأمين، طلاب الحفظ يتلقون اهتمامًا شخصيًا.',
      'hifz.levels.title': 'مستويات التعلّم',
      'hifz.levels.p1': 'الطلاب ينضمون بمراحل مختلفة.',
      'hifz.levels.p2': 'لا يوجد جدول زمني ثابت.',
      'hifz.cta.title': 'ابدأ رحلة الحفظ',
      'hifz.cta.lead': 'سجّل اليوم وابدأ بحفظ القرآن.',

      'child.title': 'دروس القرآن للأطفال',
      'child.lead': 'دروس ودية ومناسبة للأعمار عبر الإنترنت لتنمية حب القرآن.',
      'child.intro.eyebrow': 'للمتعلّمين الصغار',
      'child.intro.title': 'بناء أسس قوية',
      'child.intro.p1': 'الأطفال يتعلمون أفضل في بيئة داعمة.',
      'child.intro.p2': 'الدروس قصيرة وواضحة ومشجعة.',
      'child.what.title': 'ما سيتعلمه الأطفال',
      'child.what.1': 'الحروف العربية والنطق',
      'child.what.2': 'القاعدة النورانية',
      'child.what.3': 'قراءة القرآن مع التجويد الأساسي',
      'child.what.4': 'حفظ السور القصيرة',
      'child.what.5': 'عادات الممارسة اليومية',
      'child.what.6': 'علاقة محترمة مع القرآن',
      'child.journey.eyebrow': 'مسار التعلّم',
      'child.journey.title': 'كيف يتقدم الأطفال',
      'child.j1t': 'الحروف العربية', 'child.j1d': 'التعرف على الحروف ونطقها.',
      'child.j2t': 'القاعدة النورانية', 'child.j2d': 'ربط الحروف وفهم الحركات.',
      'child.j3t': 'قراءة القرآن', 'child.j3d': 'القراءة من القرآن بطلاقة متزايدة.',
      'child.j4t': 'أسس التجويد', 'child.j4d': 'أحكام تجويد أساسية.',
      'child.j5t': 'الحفظ', 'child.j5d': 'حفظ سور مختارة.',
      'child.j6t': 'الممارسة اليومية', 'child.j6d': 'روتين يومي صحي.',
      'child.parent.title': 'للآباء',
      'child.parent.1': 'تحديثات منتظمة عن تقدم طفلك',
      'child.parent.2': 'بيئة تعلم فردية آمنة',
      'child.parent.3': 'مواعيد مرنة تناسب العائلة',
      'child.parent.4': 'إرشاد لدعم الممارسة في المنزل',
      'child.parent.5': 'تواصل مفتوح مع المعلم',
      'child.support.eyebrow': 'دعم الوالدين',
      'child.support.title': 'الآباء على اطلاع ومشاركة',
      'child.support.p1': 'نفهم أن الآباء يريدون معرفة تقدم أطفالهم.',
      'child.support.p2': 'الجلسات القصيرة والملاحظات المنتظمة تحفّز الأطفال.',
      'child.approach.eyebrow': 'نهجنا',
      'child.approach.title': 'ودّي، وليس صبيانيًا',
      'child.approach.p1': 'برنامج الأطفال دافئ لكنه يحافظ على جدية تعلّم القرآن.',
      'child.approach.p2': 'كل طفل يُعامل كفرد.',
      'child.progress.title': 'تعلّم مبني على التقدم',
      'child.progress.p': 'الأطفال يتقدمون بوتيرتهم.',
      'child.cta.title': 'سجّل طفلك اليوم',
      'child.cta.lead': 'امنح طفلك هدية تعلّم القرآن بإرشاد شخصي.',

      'adult.title': 'دروس القرآن للكبار',
      'adult.lead': 'تعليم قرآني محترم ومرن وخاص عبر الإنترنت للكبار.',
      'adult.intro.eyebrow': 'للمتعلّمين الكبار',
      'adult.intro.title': 'لم يفت الأوان لتعلّم القرآن',
      'adult.intro.p1': 'كثير من الكبار يشعرون أنهم فاتتهم الفرصة.',
      'adult.intro.p2': 'دروسنا الفردية تقدم بيئة خاصة ومحترمة.',
      'adult.what.title': 'ما ستتعلم',
      'adult.what.1': 'الحروف العربية والقراءة الأساسية',
      'adult.what.2': 'قراءة القرآن بطلاقة',
      'adult.what.3': 'التجويد — أحكام التلاوة الصحيحة',
      'adult.what.4': 'حفظ القرآن (اختياري)',
      'adult.what.5': 'بناء روتين يومي ثابت',
      'adult.what.6': 'فهم المفاهيم القرآنية',
      'adult.why.eyebrow': 'لماذا يختارنا الكبار',
      'adult.why.title': 'مصمم للحياة المزدحمة',
      'adult.w1t': 'مواعيد مرنة', 'adult.w1d': 'اختر أوقاتًا تناسب عملك وعائلتك.',
      'adult.w2t': 'دروس فردية خاصة', 'adult.w2d': 'تعلّم في بيئة خاصة.',
      'adult.w3t': 'صديق للمبتدئين', 'adult.w3d': 'ابدأ من الأساسيات دون حرج.',
      'adult.w4t': 'تحسين التلاوة', 'adult.w4d': 'حسّن طلاقتك ونطقك.',
      'adult.w5t': 'حفظ اختياري', 'adult.w5d': 'احفظ بوتيرتك.',
      'adult.w6t': 'روتين ثابت', 'adult.w6d': 'ممارسة قرآنية يومية مستدامة.',
      'adult.schedule.title': 'خيارات تعلّم مرنة',
      'adult.schedule.1': 'جلسات صباحية ومسائية',
      'adult.schedule.2': 'أيام الأسبوع أو نهاية الأسبوع',
      'adult.schedule.3': 'جلسات قصيرة للمشغولين',
      'adult.schedule.4': 'إعادة جدولة عند الحاجة',
      'adult.busy.eyebrow': 'جدول مزدحم؟',
      'adult.busy.title': 'تعلّم يناسب حياتك',
      'adult.busy.p1': 'نفهم أن الكبار لديهم عمل وعائلة.',
      'adult.busy.p2': 'حتى 20-30 دقيقة يوميًا تصنع نموًا كبيرًا.',
      'adult.routine.title': 'بناء روتين قرآني ثابت',
      'adult.routine.p1': 'الطريقة الأكثر فاعلية هي الثبات.',
      'adult.routine.p2': 'معلمك سيضع خطة واقعية معك.',
      'adult.cta.title': 'ابدأ التعلّم اليوم',
      'adult.cta.lead': 'خذ الخطوة الأولى — نحن معك في الرحلة.',

      'contact.title': 'اتصل والتسجيل',
      'contact.lead': 'تواصل معنا، اسأل، أو قدّم طلب تسجيل.',
      'contact.wa': 'واتساب', 'contact.phone': 'الهاتف', 'contact.email': 'البريد',
      'contact.openWa': 'افتح واتساب ←', 'contact.callNow': 'اتصل الآن ←', 'contact.sendEmail': 'أرسل بريدًا ←',
      'contact.form.eyebrow': 'التسجيل', 'contact.form.title': 'قدّم طلب تسجيل',
      'contact.form.lead': 'املأ النموذج وسنتواصل معك قريبًا.',

      'form.name': 'الاسم الكامل', 'form.age': 'عمر الطالب',
      'form.parent': 'اسم ولي الأمر', 'form.country': 'البلد',
      'form.email': 'البريد الإلكتروني', 'form.phone': 'الهاتف / واتساب',
      'form.course': 'الدورة المطلوبة', 'form.selectCourse': '-- اختر الدورة --',
      'form.days': 'الأيام المفضلة', 'form.time': 'الوقت المفضل',
      'form.level': 'مستواك الحالي في تعلّم القرآن', 'form.selectLevel': '-- اختر المستوى --',
      'form.message': 'الرسالة', 'form.submit': 'إرسال طلب التسجيل',
      'form.note': 'هذا النموذج لطلبات التسجيل. لا يوجد خادم مربوط حاليًا.',
      'form.success': 'شكرًا! تم تسجيل طلبك. يرجى التواصل عبر واتساب للتأكيد السريع.',
      'form.error': 'يرجى ملء جميع الحقول المطلوبة بشكل صحيح.',
      'form.invalidEmail': 'يرجى إدخال بريد إلكتروني صحيح.',

      'legal.updated': 'آخر تحديث:',

      'privacy.title': 'سياسة الخصوصية',
      'privacy.lead': 'خصوصيتك تهمنا.',
      'privacy.h1': '1. جمع المعلومات',
      'privacy.p1': 'عند تواصلك أو تقديم طلب تسجيل، قد نجمع معلوماتك الشخصية.',
      'privacy.h2': '2. نماذج الاتصال',
      'privacy.p2': 'المعلومات تُستخدم فقط للرد على طلبك.',
      'privacy.h3': '3. التواصل',
      'privacy.p3': 'قد نتواصل عبر البريد والهاتف وواتساب.',
      'privacy.h4': '4. ملفات تعريف الارتباط',
      'privacy.p4': 'قد نستخدم ملفات ارتباط بسيطة لتذكّر لغتك المفضلة.',
      'privacy.h5': '5. التحليلات',
      'privacy.p5': 'قد نستخدم أدوات تحليل لجمع بيانات مجهولة الهوية.',
      'privacy.h6': '6. خدمات الطرف الثالث',
      'privacy.p6': 'نستخدم زوم وواتساب للتواصل.',
      'privacy.h7': '7. أمن البيانات',
      'privacy.p7': 'نتخذ خطوات معقولة لحماية معلوماتك.',
      'privacy.h8': '8. الاحتفاظ بالبيانات',
      'privacy.p8': 'نحتفظ بمعلوماتك للمدة اللازمة فقط.',
      'privacy.h9': '9. خصوصية الأطفال',
      'privacy.p9': 'للطلاب دون 18 سنة، تُدار العملية عبر ولي الأمر.',
      'privacy.h10': '10. حقوق المستخدم',
      'privacy.p10': 'يحق لك طلب الوصول أو التصحيح أو الحذف.',
      'privacy.h11': '11. تغييرات على السياسة',
      'privacy.p11': 'قد نُحدّث هذه السياسة من وقت لآخر.',
      'privacy.h12': '12. معلومات الاتصال',
      'privacy.p12': 'لأي أسئلة، تواصل معنا:',

      'terms.title': 'الشروط والأحكام',
      'terms.lead': 'يرجى قراءة الشروط قبل استخدام الموقع.',
      'terms.h1': '1. استخدام الموقع',
      'terms.p1': 'باستخدام هذا الموقع أنت توافق على الشروط.',
      'terms.h2': '2. الخدمات التعليمية',
      'terms.p2': 'يقدم معهد الأمين تعليمًا قرآنيًا عبر الإنترنت.',
      'terms.h3': '3. التسجيل',
      'terms.p3': 'التسجيل يخضع للتأكيد بعد الطلب.',
      'terms.h4': '4. جدول الدروس',
      'terms.p4': 'الجدول يُتفق عليه بين الطالب والمعلم.',
      'terms.h5': '5. المدفوعات',
      'terms.p5': 'تفاصيل الدفع تُبلَّغ عند التسجيل.',
      'terms.h6': '6. الإلغاءات',
      'terms.p6': 'يجب الإبلاغ عن الإلغاء مسبقًا.',
      'terms.h7': '7. الاسترداد',
      'terms.p7': 'شروط الاسترداد تُبلَّغ عند التسجيل.',
      'terms.h8': '8. مسؤوليات المستخدم',
      'terms.p8': 'يُتوقع من الطلاب سلوك محترم.',
      'terms.h9': '9. الملكية الفكرية',
      'terms.p9': 'محتوى الموقع ملك لمعهد الأمين.',
      'terms.h10': '10. روابط الطرف الثالث',
      'terms.p10': 'لا نتحمل مسؤولية سياسات الخدمات الخارجية.',
      'terms.h11': '11. حدود المسؤولية',
      'terms.p11': 'المعهد غير مسؤول عن الأضرار غير المباشرة.',
      'terms.h12': '12. تغييرات على الشروط',
      'terms.p12': 'قد نُحدّث الشروط من وقت لآخر.',
      'terms.h13': '13. معلومات الاتصال',
      'terms.p13': 'لأي أسئلة، تواصل معنا:',

      'disc.title': 'إخلاء المسؤولية',
      'disc.lead': 'يرجى قراءة إخلاء المسؤولية.',
      'disc.h1': '1. الغرض التعليمي',
      'disc.p1': 'محتوى الموقع لأغراض تعليمية وإعلامية.',
      'disc.h2': '2. تعلّم ديني محترم',
      'disc.p2': 'التعلّم الديني رحلة شخصية ومقدسة.',
      'disc.h3': '3. ليس بديلاً عن الإرشاد العلمي',
      'disc.p3': 'المعلومات هنا مقدمة ولا تحل محل الإرشاد العلمي المؤهل.',
      'disc.h4': '4. دقة المعلومات',
      'disc.p4': 'نبذل جهدنا لضمان دقة المعلومات.',
      'disc.h5': '5. الروابط الخارجية',
      'disc.p5': 'لا نتحمل مسؤولية المصادر الخارجية.',
      'disc.h6': '6. المسؤولية الشخصية',
      'disc.p6': 'نشجع الزوار على استخدام حكمهم الخاص.',
      'disc.h7': '7. معلومات الاتصال',
      'disc.p7': 'لأي أسئلة، تواصل معنا:'
    }
  };

  /* =====================================================
     2. LANGUAGE SYSTEM
     ===================================================== */
  const LANG_KEY = 'aaqi_lang';
  const SUPPORTED = ['en', 'ur', 'ar'];
  const RTL_LANGS = ['ur', 'ar'];

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (e) {}
    return 'en';
  }

  function saveLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  function applyLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'en';
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    const isRTL = RTL_LANGS.includes(lang);

    // Set html attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

    // Translate all elements with data-i18n
    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(node => {
      const key = node.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // Preserve HTML entities in some strings
        node.textContent = dict[key];
      }
    });

    // Translate placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(node => {
      const key = node.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) node.setAttribute('placeholder', dict[key]);
    });

    // Update active state on language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update page title if translation available
    updatePageTitle(lang);

    saveLang(lang);
  }

  function updatePageTitle(lang) {
    // Optional: could update titles based on page context
    // Kept minimal for reliability
  }

  function initLanguageSwitcher() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
      });
    });
    // Apply saved language on load
    applyLanguage(getSavedLang());
  }

  /* =====================================================
     3. MOBILE NAV / HAMBURGER
     ===================================================== */
  function initMobileNav() {
    const hamburgers = document.querySelectorAll('.hamburger');
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    hamburgers.forEach(hamburger => {
      hamburger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });
    });

    // Close on nav link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburgers.forEach(h => {
          h.classList.remove('open');
          h.setAttribute('aria-expanded', 'false');
        });
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('open')) return;
      if (nav.contains(e.target)) return;
      if (Array.from(hamburgers).some(h => h.contains(e.target))) return;
      nav.classList.remove('open');
      hamburgers.forEach(h => {
        h.classList.remove('open');
        h.setAttribute('aria-expanded', 'false');
      });
      document.body.style.overflow = '';
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        hamburgers.forEach(h => {
          h.classList.remove('open');
          h.setAttribute('aria-expanded', 'false');
        });
        document.body.style.overflow = '';
      }
    });
  }

  /* =====================================================
     4. HEADER SCROLL EFFECT
     ===================================================== */
  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* =====================================================
     5. BACK TO TOP
     ===================================================== */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    const onScroll = () => {
      if (window.scrollY > 400) btn.classList.add('visible');
      else btn.classList.remove('visible');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    onScroll();
  }

  /* =====================================================
     6. FAQ (native <details> — already works, add enhancement)
     ===================================================== */
  function initFaq() {
    const items = document.querySelectorAll('.faq__item');
    // Native details/summary is already accessible.
    // Optional: close others when one opens (accordion behavior)
    items.forEach(item => {
      item.addEventListener('toggle', () => {
        if (item.open) {
          items.forEach(other => {
            if (other !== item && other.open) other.open = false;
          });
        }
      });
    });
  }

  /* =====================================================
     7. ACTIVE NAVIGATION
     ===================================================== */
  function initActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* =====================================================
     8. FORM VALIDATION
     ===================================================== */
  function initEnrollmentForm() {
    const form = document.getElementById('enrollmentForm');
    if (!form) return;
    const status = document.getElementById('formStatus');
    const lang = getSavedLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const currentLang = getSavedLang();
      const currentDict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

      // Clear previous errors
      form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
      status.className = 'form__status';
      status.textContent = '';

      let valid = true;
      const required = form.querySelectorAll('[required]');
      required.forEach(field => {
        if (!field.value || !field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      // Email validation
      const emailField = form.querySelector('#email');
      if (emailField && emailField.value.trim()) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value.trim())) {
          emailField.classList.add('error');
          valid = false;
          status.className = 'form__status error';
          status.textContent = currentDict['form.invalidEmail'] || 'Please enter a valid email address.';
          return;
        }
      }

      if (!valid) {
        status.className = 'form__status error';
        status.textContent = currentDict['form.error'] || 'Please fill in all required fields correctly before submitting.';
        // Focus first error
        const firstError = form.querySelector('.error');
        if (firstError) firstError.focus();
        return;
      }

      // Placeholder: since no backend, store request locally & show success
      // Ready for future backend integration
      try {
        const data = {};
        new FormData(form).forEach((value, key) => { data[key] = value; });
        data.submittedAt = new Date().toISOString();

        // Save to local storage as a record (not sent anywhere)
        const key = 'aaqi_enroll_requests';
        const list = JSON.parse(localStorage.getItem(key) || '[]');
        list.push(data);
        localStorage.setItem(key, JSON.stringify(list));
      } catch (err) {
        // silent — don't block user
      }

      status.className = 'form__status success';
      status.textContent = currentDict['form.success'] || 'Thank you! Your enrollment request has been recorded.';
      form.reset();

      // Optional: scroll status into view
      status.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // Live clear error styling on input
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => field.classList.remove('error'));
      field.addEventListener('change', () => field.classList.remove('error'));
    });
  }

  /* =====================================================
     9. SCROLL REVEAL
     ===================================================== */
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    const targets = document.querySelectorAll(
      '.feature-card, .course-card, .step, .mv-card, .review-card, .contact-card, .info-card, .article__block'
    );
    targets.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(el => observer.observe(el));
  }

  /* =====================================================
     10. INIT
     ===================================================== */
  function init() {
    initLanguageSwitcher();
    initMobileNav();
    initHeaderScroll();
    initBackToTop();
    initFaq();
    initActiveNav();
    initEnrollmentForm();
    initScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
