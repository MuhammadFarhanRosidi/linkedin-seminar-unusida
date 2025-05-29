import { getSpeakerImage } from "./images";

export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  headTitle?: string;
  subHeadTitle?: string;
  type: string;
}

export interface TestimonialData {
  name: string;
  role: string;
  company: string;
  story: string;
  benefit: string;
  image?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SpeakerInfo {
  name: string;
  title: string;
  company: string;
  image?: string;
  socialMedia: {
    linkedin?: string;
    youtube?: string;
    github?: string;
    whatsapp?: string;
  };
}

export const slides: SlideData[] = [
  {
    id: "cover",
    title: "LinkedIn & Personal Branding",
    subtitle: "Membangun Karir Profesional di Era Digital",
    headTitle: "Workshop LinkedIn 2025",
    subHeadTitle: "Optimalkan LinkedIn untuk Masa Depan Kariermu",
    type: "cover",
  },
  {
    id: "agenda",
    title: "Agenda Pelatihan",
    type: "agenda",
  },
  {
    id: "importance",
    title: "Mengapa LinkedIn Sangat Penting?",
    type: "importance",
  },
  {
    id: "personal-branding",
    title: "Personal Branding di LinkedIn",
    type: "personal-branding",
  },
  {
    id: "profile-optimization",
    title: "Optimasi Profil LinkedIn",
    type: "profile-optimization",
  },
  {
    id: "about-experience",
    title: "About Section & Experience",
    type: "about-experience",
  },
  {
    id: "skills-networking",
    title: "Skills & Networking Strategy",
    type: "skills-networking",
  },
  {
    id: "content-strategy",
    title: "Strategi Konten LinkedIn",
    type: "content-strategy",
  },
  {
    id: "benefits",
    title: "Manfaat LinkedIn untuk Peluang Karir",
    type: "benefits",
  },
  {
    id: "freshgraduate-strategy",
    title: "Strategi Freshgraduate: Bertarung di LinkedIn",
    subtitle: "Dari Job Search sampai Headhunter Response",
    type: "freshgraduate-strategy",
  },
  {
    id: "professional-perspective",
    title: "Sudut Pandang Professional HR & Recruiter",
    type: "professional-perspective",
  },
  {
    id: "soft-skills",
    title: "Soft Skills yang Dinilai Recruiter",
    type: "soft-skills",
  },
  {
    id: "attitude-interaction",
    title: "Attitude & Interaction yang Tepat",
    type: "attitude-interaction",
  },
  {
    id: "action-plan",
    title: "Action Plan & Next Steps",
    type: "action-plan",
  },
  {
    id: "quiz",
    title: "Quiz: Test Your LinkedIn Knowledge",
    type: "quiz",
  },
  {
    id: "thank-you",
    title: "Terima Kasih & Stay Connected",
    type: "thank-you",
  },
];

export interface LinkedInBenefit {
  id: string;
  title: string;
  description: string;
  percentage: string;
  icon: string;
  color: string;
  stats: string;
}

export interface FreshgraduateStrategy {
  profileOptimization: {
    title: string;
    tips: string[];
  };
  jobSearchStrategy: {
    title: string;
    steps: string[];
  };
  applicationTips: {
    title: string;
    items: string[];
  };
  headhunterResponse: {
    title: string;
    strategies: string[];
  };
  commonMistakes: {
    title: string;
    mistakes: string[];
  };
  successMetrics: {
    title: string;
    metrics: string[];
  };
}

export const linkedInBenefits: LinkedInBenefit[] = [
  {
    id: "1",
    title: "Hidden Job Market Access",
    description:
      "Akses ke peluang kerja yang tidak dipublikasikan secara terbuka",
    percentage: "70%",
    icon: "briefcase",
    color: "blue",
    stats: "dari semua lowongan kerja",
  },
  {
    id: "2",
    title: "Professional Visibility",
    description:
      "Meningkatkan visibilitas profil kepada recruiter dan headhunter",
    percentage: "5x",
    icon: "eye",
    color: "green",
    stats: "lebih mudah ditemukan",
  },
  {
    id: "3",
    title: "Networking Opportunities",
    description: "Membangun koneksi dengan profesional di industri target",
    percentage: "3x",
    icon: "users",
    color: "purple",
    stats: "lebih banyak koneksi berkualitas",
  },
  {
    id: "4",
    title: "Career Growth",
    description: "Mempercepat pertumbuhan karir melalui personal branding",
    percentage: "40%",
    icon: "trending-up",
    color: "orange",
    stats: "lebih cepat naik jabatan",
  },
  {
    id: "5",
    title: "Industry Insights",
    description: "Mendapat informasi terkini tentang tren dan peluang industri",
    percentage: "85%",
    icon: "brain",
    color: "teal",
    stats: "profesional aktif belajar",
  },
  {
    id: "6",
    title: "Salary Negotiation",
    description: "Leverage untuk negosiasi gaji yang lebih baik",
    percentage: "23%",
    icon: "dollar-sign",
    color: "emerald",
    stats: "rata-rata kenaikan gaji",
  },
];

export const freshgraduateStrategyContent: FreshgraduateStrategy = {
  profileOptimization: {
    title: "🎯 Optimasi Profil untuk Freshgraduate",
    tips: [
      "Headline: 'Fresh Graduate | [Jurusan] | Ready to Learn & Contribute'",
      "Summary: Ceritakan passion, achievement akademik, dan project experience",
      "Tambahkan volunteer work, internship, dan organizational experience",
      "Upload portfolio atau project showcase sebagai media attachment",
      "Gunakan keywords yang relevan dengan target job position",
    ],
  },
  jobSearchStrategy: {
    title: "🔍 Smart Job Search Strategy",
    steps: [
      "Filter berdasarkan experience level: Entry Level & Internship",
      "Gunakan location filter untuk remote atau kota target",
      "Set job alerts dengan keywords spesifik (React Developer, Data Analyst, dll)",
      "Follow target companies dan aktifkan notification",
      "Join LinkedIn groups yang relevan dengan industri target",
      "Gunakan fitur 'People Also Viewed' untuk networking",
    ],
  },
  applicationTips: {
    title: "📝 Application & Summary Job Tips",
    items: [
      "Baca job description dengan teliti dan match dengan skills",
      "Customize cover letter untuk setiap aplikasi",
      "Highlight relevant coursework dan academic projects",
      "Mention specific achievements dengan angka (GPA, project results)",
      "Show enthusiasm dan willingness to learn",
      "Include link ke portfolio, GitHub, atau project demo",
    ],
  },
  headhunterResponse: {
    title: "🎪 Menarik Perhatian Headhunter",
    strategies: [
      "Posting regular updates tentang learning progress",
      "Share insights dari course online atau webinar yang diikuti",
      "Comment meaningfully di post industry leaders",
      "Showcase mini-projects atau technical achievements",
      "Use hashtags yang trending di industri target",
      "Respond quickly dan professionally ketika ada yang reach out",
    ],
  },
  commonMistakes: {
    title: "❌ Common Mistakes to Avoid",
    mistakes: [
      "Profil foto yang tidak profesional atau selfie casual",
      "Summary yang terlalu generic tanpa personality",
      "Apply semua job tanpa baca requirements dengan teliti",
      "Tidak follow up setelah interview atau networking",
      "Posting konten yang tidak relevan dengan career goals",
      "Tidak optimize profile dengan keywords industry",
    ],
  },
  successMetrics: {
    title: "📊 Success Metrics untuk Track Progress",
    metrics: [
      "Profile views: Target 50+ views per week",
      "Connection growth: 5-10 relevant connections per week",
      "Job applications: Quality over quantity, 3-5 targeted applications",
      "Response rate: Track interview invitations dan feedback",
      "Content engagement: Likes, comments, shares dari network",
      "Headhunter outreach: Track berapa yang reach out organically",
    ],
  },
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question:
      "Berapa lama waktu yang dibutuhkan recruiter untuk menilai profil LinkedIn?",
    options: ["2 detik", "6 detik", "15 detik", "30 detik"],
    correctAnswer: 1,
    explanation:
      "Recruiter rata-rata hanya membutuhkan 6 detik untuk menilai profil LinkedIn, sehingga first impression sangat penting!",
  },
  {
    id: "q2",
    question:
      "Berapa persen pekerjaan yang tidak pernah dipublikasikan secara terbuka?",
    options: ["50%", "60%", "70%", "80%"],
    correctAnswer: 2,
    explanation:
      "70% pekerjaan tidak pernah dipublikasikan secara terbuka - inilah yang disebut 'hidden job market' yang bisa diakses melalui LinkedIn!",
  },
  {
    id: "q3",
    question: "Apa yang paling penting dalam LinkedIn headline?",
    options: [
      "Job title saja",
      "Value proposition",
      "Nama perusahaan",
      "Lokasi",
    ],
    correctAnswer: 1,
    explanation:
      "LinkedIn headline harus menunjukkan value proposition Anda, bukan hanya job title. Ini yang membuat Anda stand out!",
  },
  {
    id: "q4",
    question: "Berapa maksimal karakter untuk LinkedIn About section?",
    options: ["1000", "1500", "2000", "2600"],
    correctAnswer: 3,
    explanation:
      "LinkedIn About section memiliki batas maksimal 2600 karakter, gunakan dengan optimal untuk menceritakan story profesional Anda!",
  },
  {
    id: "q5",
    question: "Kapan waktu terbaik untuk posting di LinkedIn?",
    options: ["Senin pagi", "Selasa-Kamis, 8-10 AM", "Jumat sore", "Weekend"],
    correctAnswer: 1,
    explanation:
      "Waktu terbaik untuk posting di LinkedIn adalah Selasa-Kamis pada jam 8-10 AM ketika professionals paling aktif!",
  },
];

export const speakerInfo: SpeakerInfo = {
  name: "Muhammad Farhan Rosidi, S.Pd", // Edit this
  title:
    "Ranked 1 of Arabic Language Education at UINSA 2024 & React Developer", // Edit this
  company: "PT Jejak Logistik Nusantara", // Edit this
  image: getSpeakerImage(),
  socialMedia: {
    linkedin: "https://linkedin.com/in/muhammadfarhanrosidi", // Edit this
    // instagram: "https://instagram.com/yourusername", // Edit this
    // twitter: "https://twitter.com/yourusername", // Edit this
    // email: "your.email@domain.com", // Edit this
    youtube: "https://www.youtube.com/@MuhammadFarhanRosidi", // Edit this
    github: "https://github.com/MuhammadFarhanRosidi", // Edit this
    whatsapp:
      "https://api.whatsapp.com/send/?phone=6289512390006&text&type=phone_number&app_absent=0", // Edit this
  },
};
