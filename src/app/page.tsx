"use client";
import React, { useState, useEffect, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  TrendingUp,
  Target,
  Award,
  BookOpen,
  Briefcase,
  MessageCircle,
  Brain,
  Heart,
  Zap,
  CheckCircle,
  XCircle,
  Calendar,
  BarChart3,
  Linkedin,
  Mail,
  Youtube,
  Github,
  Eye,
  DollarSign,
} from "lucide-react";
import {
  slides,
  linkedInBenefits,
  freshgraduateStrategyContent,
  quizQuestions,
  speakerInfo,
} from "../content/slides";
import {
  agendaContent,
  importanceContent,
  personalBrandingContent,
} from "../content/slideContent";
import {
  profileOptimizationContent,
  aboutExperienceContent,
  skillsNetworkingContent,
  contentStrategyContent,
  professionalPerspectiveContent,
  softSkillsContent,
  attitudeInteractionContent,
  actionPlanContent,
} from "../content/detailedContent";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: string]: number }>({});
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [slideDirection, setSlideDirection] = useState(0);
  const [showAnswer, setShowAnswer] = useState<{ [key: string]: boolean }>({});
  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setSlideDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setSlideDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, nextSlide]);
  const handleQuizAnswer = (questionId: string, answerIndex: number) => {
    const question = quizQuestions.find((q) => q.id === questionId);
    if (!question) return;

    setQuizAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
    setShowAnswer((prev) => ({ ...prev, [questionId]: true }));

    if (answerIndex === question.correctAnswer) {
      toast.success("Benar! " + question.explanation, {
        duration: 4000,
        style: {
          background: "#10B981",
          color: "white",
        },
      });
    } else {
      toast.error("Kurang tepat. " + question.explanation, {
        duration: 4000,
        style: {
          background: "#EF4444",
          color: "white",
        },
      });
    }

    // Auto-advance to next question after 2 seconds
    setTimeout(() => {
      if (currentQuizQuestion < quizQuestions.length - 1) {
        setCurrentQuizQuestion((prev) => prev + 1);
      } else {
        setShowQuizResults(true);
      }
    }, 2000);
  };
  const getQuizScore = () => {
    let correct = 0;
    quizQuestions.forEach((question) => {
      if (quizAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: quizQuestions.length };
  };

  const retakeQuiz = () => {
    setQuizAnswers({});
    setCurrentQuizQuestion(0);
    setShowQuizResults(false);
    setShowAnswer({});
    toast.success("Quiz dimulai ulang!", {
      duration: 2000,
      style: {
        background: "#10B981",
        color: "white",
      },
    });
  };
  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide]);

  // Animation variants for slide transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  type StatCardProps = {
    number: string;
    label: string;
    icon: React.ElementType;
  };

  const StatCard: React.FC<StatCardProps> = ({ number, label, icon: Icon }) => (
    <motion.div
      variants={itemVariants}
      whileHover={cardHoverVariants.hover}
      className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <motion.div
          className="text-3xl font-bold text-blue-600"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          {number}
        </motion.div>
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Icon className="w-8 h-8 text-blue-600" />
        </motion.div>
      </div>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
    </motion.div>
  );

  type FeatureCardProps = {
    title: string;
    items: string[];
    icon: React.ElementType;
    color?: string;
  };

  const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    items,
    icon: Icon,
    color = "blue",
  }) => (
    <motion.div
      variants={itemVariants}
      whileHover={cardHoverVariants.hover}
      className={`bg-gradient-to-br from-${color}-50 to-${color}-100 p-6 rounded-xl border-l-4 border-${color}-600 hover:shadow-lg transition-all duration-300`}
    >
      {" "}
      <motion.div
        className="flex items-center mb-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Icon className={`w-6 h-6 text-${color}-600 mr-3`} />
        <h3 className={`text-lg font-semibold text-${color}-800`}>{title}</h3>
      </motion.div>
      <motion.ul className="space-y-2">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <div
              className={`w-2 h-2 bg-${color}-600 rounded-full mt-2 mr-3 flex-shrink-0`}
            ></div>
            <span className="text-gray-700 text-sm">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );

  type TipBoxProps = {
    title: React.ReactNode;
    content: React.ReactNode;
    type?: "tip" | "warning" | "info";
  };

  const TipBox: React.FC<TipBoxProps> = ({ title, content, type = "tip" }) => {
    const styles = {
      tip: "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
      warning: "bg-gradient-to-r from-amber-500 to-orange-600 text-white",
      info: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
    };

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        className={`${styles[type]} p-6 rounded-xl shadow-lg`}
      >
        <motion.h3
          className="text-lg font-semibold mb-2"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.div
          className="text-sm opacity-90"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {content}
        </motion.div>
      </motion.div>
    );
  };

  const renderSlideContent = (slide: (typeof slides)[number]) => {
    switch (slide.type) {
      case "cover":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center mb-8"
            >
              <motion.div
                className="bg-blue-600 text-white p-4 rounded-lg mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Linkedin className="w-12 h-12" />
              </motion.div>
              <div>
                <motion.h1
                  className="text-5xl font-bold text-gray-800 mb-2"
                  variants={itemVariants}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="text-xl text-blue-600 font-medium"
                  variants={itemVariants}
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              variants={contentVariants}
            >
              <StatCard
                number="900M+"
                label="Pengguna LinkedIn Global"
                icon={Users}
              />
              <StatCard
                number="85%"
                label="Perusahaan Menggunakan LinkedIn"
                icon={TrendingUp}
              />
              <StatCard
                number="3x"
                label="Lebih Efektif dari Platform Lain"
                icon={Target}
              />
            </motion.div>

            <TipBox
              title="🎯 Tujuan Pelatihan"
              content="Menguasai LinkedIn untuk membangun personal branding yang kuat dan membuka peluang karir yang lebih luas"
              type="tip"
            />
          </motion.div>
        );
      case "agenda":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                title={agendaContent.session1.title}
                icon={Target}
                items={agendaContent.session1.items}
              />
              <FeatureCard
                title={agendaContent.session2.title}
                icon={Briefcase}
                color="green"
                items={agendaContent.session2.items}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
              <FeatureCard
                title={agendaContent.session3.title}
                icon={Brain}
                color="purple"
                items={agendaContent.session3.items}
              />
            </div>

            <motion.div
              className="bg-gray-200 rounded-full h-3 overflow-hidden"
              variants={itemVariants}
            >
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentSlide + 1) / slides.length) * 100}%`,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        );

      case "importance":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={importanceContent.statistics.title}
                icon={BarChart3}
                items={importanceContent.statistics.items}
              />
              <FeatureCard
                title={importanceContent.benefits.title}
                icon={Zap}
                color="green"
                items={importanceContent.benefits.items}
              />
            </div>

            <TipBox
              title={importanceContent.hiddenJobMarket.title}
              content={importanceContent.hiddenJobMarket.content}
              type="warning"
            />
          </motion.div>
        );

      case "personal-branding":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {personalBrandingContent.definition.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {personalBrandingContent.definition.content}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={personalBrandingContent.components.title}
                icon={Target}
                items={personalBrandingContent.components.items}
              />
              <FeatureCard
                title={personalBrandingContent.benefits.title}
                icon={Award}
                color="purple"
                items={personalBrandingContent.benefits.items}
              />
            </div>
          </motion.div>
        );

      case "profile-optimization":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={profileOptimizationContent.profilePhoto.title}
                icon={Users}
                items={profileOptimizationContent.profilePhoto.items}
              />
              <FeatureCard
                title={profileOptimizationContent.headline.title}
                icon={Target}
                color="green"
                items={profileOptimizationContent.headline.items}
              />
            </div>

            <TipBox
              title={profileOptimizationContent.headlineExample.title}
              content={
                <div>
                  <p className="mb-2">
                    <strong>Kurang Efektif:</strong> &quot;
                    {profileOptimizationContent.headlineExample.lessEffective}
                    &quot;
                  </p>
                  <p>
                    <strong>Lebih Efektif:</strong> &quot;
                    {profileOptimizationContent.headlineExample.moreEffective}
                    &quot;
                  </p>
                </div>
              }
              type="tip"
            />
          </motion.div>
        );

      case "about-experience":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={aboutExperienceContent.aboutSection.title}
                icon={BookOpen}
                items={aboutExperienceContent.aboutSection.items}
              />
              <FeatureCard
                title={aboutExperienceContent.experienceSection.title}
                icon={Briefcase}
                color="green"
                items={aboutExperienceContent.experienceSection.items}
              />
            </div>

            <TipBox
              title={aboutExperienceContent.aboutTemplate.title}
              content={
                <div className="space-y-1">
                  {aboutExperienceContent.aboutTemplate.paragraphs.map(
                    (paragraph, index) => (
                      <p key={index}>
                        <strong>{paragraph.split(":")[0]}:</strong>{" "}
                        {paragraph.split(":")[1]}
                      </p>
                    )
                  )}
                </div>
              }
              type="info"
            />
          </motion.div>
        );

      case "skills-networking":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={skillsNetworkingContent.skillsEndorsements.title}
                icon={Award}
                items={skillsNetworkingContent.skillsEndorsements.items}
              />
              <FeatureCard
                title={skillsNetworkingContent.recommendations.title}
                icon={MessageCircle}
                color="green"
                items={skillsNetworkingContent.recommendations.items}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={skillsNetworkingContent.networkingStrategy.title}
                icon={Users}
                color="purple"
                items={skillsNetworkingContent.networkingStrategy.items}
              />
              <FeatureCard
                title={skillsNetworkingContent.mobileOptimization.title}
                icon={TrendingUp}
                color="orange"
                items={skillsNetworkingContent.mobileOptimization.items}
              />
            </div>
          </motion.div>
        );
      case "content-strategy":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={contentStrategyContent.contentTypes.title}
                icon={BookOpen}
                items={contentStrategyContent.contentTypes.items}
              />
              <FeatureCard
                title={contentStrategyContent.postingSchedule.title}
                icon={Calendar}
                color="green"
                items={contentStrategyContent.postingSchedule.items}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <FeatureCard
                title={contentStrategyContent.engagementTips.title}
                icon={MessageCircle}
                color="purple"
                items={contentStrategyContent.engagementTips.items}
              />
            </div>

            <TipBox
              title={contentStrategyContent.viralFormula.title}
              content={contentStrategyContent.viralFormula.content}
              type="tip"
            />
          </motion.div>
        );
      case "professional-perspective":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={professionalPerspectiveContent.firstImpression.title}
                icon={Brain}
                items={professionalPerspectiveContent.firstImpression.items}
              />
              <FeatureCard
                title={professionalPerspectiveContent.deepAssessment.title}
                icon={Award}
                color="purple"
                items={professionalPerspectiveContent.deepAssessment.items}
              />
            </div>

            <TipBox
              title={professionalPerspectiveContent.redFlags.title}
              content={
                <div className="space-y-1">
                  {professionalPerspectiveContent.redFlags.items.map(
                    (item, index) => (
                      <p key={index}>• {item}</p>
                    )
                  )}
                </div>
              }
              type="warning"
            />
          </motion.div>
        );

      case "soft-skills":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={softSkillsContent.communicationSkills.title}
                icon={MessageCircle}
                items={softSkillsContent.communicationSkills.items}
              />
              <FeatureCard
                title={softSkillsContent.criticalThinking.title}
                icon={Users}
                color="green"
                items={softSkillsContent.criticalThinking.items}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={softSkillsContent.emotionalIntelligence.title}
                icon={Target}
                color="purple"
                items={softSkillsContent.emotionalIntelligence.items}
              />
              <FeatureCard
                title={softSkillsContent.leadershipPotential.title}
                icon={Zap}
                color="orange"
                items={softSkillsContent.leadershipPotential.items}
              />
            </div>
          </motion.div>
        );

      case "attitude-interaction":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={attitudeInteractionContent.dosAndDonts.dos.title}
                icon={Heart}
                items={attitudeInteractionContent.dosAndDonts.dos.items}
              />
              <FeatureCard
                title={attitudeInteractionContent.dosAndDonts.donts.title}
                icon={MessageCircle}
                color="green"
                items={attitudeInteractionContent.dosAndDonts.donts.items}
              />
            </div>

            <TipBox
              title={attitudeInteractionContent.goldenRule.title}
              content={attitudeInteractionContent.goldenRule.content}
              type="tip"
            />
          </motion.div>
        );

      case "action-plan":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={actionPlanContent.week1to2.title}
                icon={Zap}
                items={actionPlanContent.week1to2.items}
              />
              <FeatureCard
                title={actionPlanContent.week3to4.title}
                icon={Calendar}
                color="green"
                items={actionPlanContent.week3to4.items}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={actionPlanContent.successMetrics.title}
                icon={Target}
                color="purple"
                items={actionPlanContent.successMetrics.items}
              />
              <FeatureCard
                title={actionPlanContent.longTermGoals.title}
                icon={BookOpen}
                color="orange"
                items={actionPlanContent.longTermGoals.items}
              />
            </div>
          </motion.div>
        );
      case "benefits":
        const getIconComponent = (iconName: string) => {
          switch (iconName) {
            case "briefcase":
              return Briefcase;
            case "eye":
              return Eye;
            case "users":
              return Users;
            case "trending-up":
              return TrendingUp;
            case "brain":
              return Brain;
            case "dollar-sign":
              return DollarSign;
            default:
              return Target;
          }
        };

        const getColorClasses = (color: string) => {
          switch (color) {
            case "blue":
              return {
                bg: "bg-gradient-to-br from-blue-50 to-blue-100",
                border: "border-blue-500",
                text: "text-blue-600",
                accent: "text-blue-700",
                badge: "bg-blue-100 text-blue-800",
              };
            case "green":
              return {
                bg: "bg-gradient-to-br from-green-50 to-green-100",
                border: "border-green-500",
                text: "text-green-600",
                accent: "text-green-700",
                badge: "bg-green-100 text-green-800",
              };
            case "purple":
              return {
                bg: "bg-gradient-to-br from-purple-50 to-purple-100",
                border: "border-purple-500",
                text: "text-purple-600",
                accent: "text-purple-700",
                badge: "bg-purple-100 text-purple-800",
              };
            case "orange":
              return {
                bg: "bg-gradient-to-br from-orange-50 to-orange-100",
                border: "border-orange-500",
                text: "text-orange-600",
                accent: "text-orange-700",
                badge: "bg-orange-100 text-orange-800",
              };
            case "teal":
              return {
                bg: "bg-gradient-to-br from-teal-50 to-teal-100",
                border: "border-teal-500",
                text: "text-teal-600",
                accent: "text-teal-700",
                badge: "bg-teal-100 text-teal-800",
              };
            case "emerald":
              return {
                bg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
                border: "border-emerald-500",
                text: "text-emerald-600",
                accent: "text-emerald-700",
                badge: "bg-emerald-100 text-emerald-800",
              };
            default:
              return {
                bg: "bg-gradient-to-br from-gray-50 to-gray-100",
                border: "border-gray-500",
                text: "text-gray-600",
                accent: "text-gray-700",
                badge: "bg-gray-100 text-gray-800",
              };
          }
        };

        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                LinkedIn bukan hanya platform sosial untuk profesional, tetapi
                alat strategis yang dapat mengakselerasi karir Anda dengan cara
                yang signifikan.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {linkedInBenefits.map((benefit, index) => {
                const IconComponent = getIconComponent(benefit.icon);
                const colors = getColorClasses(benefit.color);

                return (
                  <motion.div
                    key={benefit.id}
                    variants={itemVariants}
                    className={`${colors.bg} p-6 rounded-xl ${colors.border} border-l-4 hover:shadow-lg transition-all duration-300 cursor-pointer`}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className={`${colors.text} p-3 rounded-lg bg-white shadow-sm`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <motion.div
                        className={`text-3xl font-bold ${colors.accent}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        {benefit.percentage}
                      </motion.div>
                    </div>

                    <motion.h3
                      className={`text-lg font-bold ${colors.accent} mb-2`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {benefit.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-700 text-sm mb-3 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {benefit.description}
                    </motion.p>

                    <motion.div
                      className={`${colors.badge} px-3 py-1 rounded-full text-xs font-medium inline-block`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {benefit.stats}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl text-center"
            >
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                🚀 Mulai Transformasi Karir Anda Hari Ini!
              </motion.h3>
              <motion.p
                className="text-lg opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Dengan strategi LinkedIn yang tepat, Anda bisa mendapatkan hasil
                yang sama seperti statistik di atas. Saatnya berinvestasi pada
                masa depan karir Anda!
              </motion.p>
            </motion.div>{" "}
          </motion.div>
        );

      case "freshgraduate-strategy":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Introduction Section */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl text-center"
            >
              <motion.h2
                className="text-2xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                🎓 Fresh Graduate? Ini Battle Plan LinkedIn-mu!
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Dari optimasi profil sampai mendapat respons headhunter - semua
                strategi ada di sini!
              </motion.p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={freshgraduateStrategyContent.profileOptimization.title}
                icon={Target}
                items={freshgraduateStrategyContent.profileOptimization.tips}
                color="blue"
              />
              <FeatureCard
                title={freshgraduateStrategyContent.jobSearchStrategy.title}
                icon={BookOpen}
                items={freshgraduateStrategyContent.jobSearchStrategy.steps}
                color="green"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={freshgraduateStrategyContent.applicationTips.title}
                icon={Briefcase}
                items={freshgraduateStrategyContent.applicationTips.items}
                color="purple"
              />
              <FeatureCard
                title={freshgraduateStrategyContent.headhunterResponse.title}
                icon={Users}
                items={
                  freshgraduateStrategyContent.headhunterResponse.strategies
                }
                color="orange"
              />
            </div>

            {/* Warning Section */}
            <TipBox
              title={freshgraduateStrategyContent.commonMistakes.title}
              content={
                <div className="space-y-2">
                  {freshgraduateStrategyContent.commonMistakes.mistakes.map(
                    (mistake, index) => (
                      <p key={index} className="text-sm">
                        • {mistake}
                      </p>
                    )
                  )}
                </div>
              }
              type="warning"
            />

            {/* Success Metrics Section */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-xl border-l-4 border-emerald-500"
            >
              <motion.h3
                className="text-xl font-bold text-emerald-700 mb-4 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <BarChart3 className="w-6 h-6 mr-3" />
                {freshgraduateStrategyContent.successMetrics.title}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {freshgraduateStrategyContent.successMetrics.metrics.map(
                  (metric, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{metric}</span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center"
            >
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                💪 Ready to Dominate LinkedIn as Fresh Graduate?
              </motion.h3>
              <motion.p
                className="text-lg opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Implementasikan strategi ini konsisten selama 3 bulan - dijamin
                profil LinkedIn-mu akan noticed oleh recruiter!
              </motion.p>
            </motion.div>
          </motion.div>
        );

      case "quiz":
        const currentQuestion = quizQuestions[currentQuizQuestion];
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {!showQuizResults ? (
              <>
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                      Pertanyaan {currentQuizQuestion + 1} dari{" "}
                      {quizQuestions.length}
                    </h2>
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full">
                      Quiz LinkedIn
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-8">
                    {currentQuestion.question}
                  </p>{" "}
                  <div className="grid grid-cols-1 gap-4">
                    {currentQuestion.options.map((option, index) => {
                      const isSelected =
                        quizAnswers[currentQuestion.id] === index;
                      const isCorrect = index === currentQuestion.correctAnswer;
                      const hasAnswered = showAnswer[currentQuestion.id];

                      let buttonClass =
                        "p-4 text-left rounded-lg border-2 transition-all";

                      if (hasAnswered) {
                        if (isCorrect) {
                          buttonClass +=
                            " border-green-500 bg-green-50 text-green-800";
                        } else if (isSelected) {
                          buttonClass +=
                            " border-red-500 bg-red-50 text-red-800";
                        } else {
                          buttonClass +=
                            " border-gray-200 bg-gray-50 text-gray-500";
                        }
                      } else {
                        buttonClass += isSelected
                          ? " border-blue-500 bg-blue-50"
                          : " border-gray-200 hover:bg-blue-50";
                      }

                      return (
                        <motion.button
                          key={index}
                          onClick={() =>
                            !hasAnswered &&
                            handleQuizAnswer(currentQuestion.id, index)
                          }
                          disabled={hasAnswered}
                          className={buttonClass}
                          whileHover={!hasAnswered ? { scale: 1.02 } : {}}
                          whileTap={!hasAnswered ? { scale: 0.98 } : {}}
                          variants={itemVariants}
                        >
                          <span
                            className={`font-medium mr-3 ${
                              hasAnswered && isCorrect
                                ? "text-green-600"
                                : hasAnswered && isSelected
                                ? "text-red-600"
                                : "text-blue-600"
                            }`}
                          >
                            {String.fromCharCode(65 + index)}.
                          </span>
                          {option}
                          {hasAnswered && isCorrect && (
                            <CheckCircle className="w-5 h-5 text-green-600 ml-auto inline" />
                          )}
                          {hasAnswered && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-red-600 ml-auto inline" />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </>
            ) : (
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl text-center"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Hasil Quiz
                </h2>
                <div className="text-6xl font-bold text-green-600 mb-4">
                  {getQuizScore().correct}/{getQuizScore().total}
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Skor Anda:{" "}
                  {Math.round(
                    (getQuizScore().correct / getQuizScore().total) * 100
                  )}
                  %
                </p>{" "}
                <div className="flex justify-center space-x-2 mb-6">
                  {getQuizScore().correct >= 4 ? (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-600" />
                  )}
                  <span className="text-lg font-medium">
                    {getQuizScore().correct >= 4
                      ? "Excellent!"
                      : "Perlu Dipelajari Lagi"}
                  </span>
                </div>
                {/* Retake Quiz Button */}
                <motion.button
                  onClick={retakeQuiz}
                  className="mt-4 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ulangi Quiz
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        );
      case "thank-you":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            {/* Speaker Profile Section */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl max-w-3xl mx-auto"
            >
              <motion.div
                className="flex flex-col md:flex-row items-center gap-8"
                variants={itemVariants}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200">
                    <Image
                      src={speakerInfo.image || "/assets/speaker.jpg"}
                      alt={speakerInfo.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Award className="w-5 h-5" />
                  </motion.div>
                </motion.div>

                <div className="text-center md:text-left">
                  <motion.h2
                    className="text-3xl font-bold text-gray-800 mb-2"
                    variants={itemVariants}
                  >
                    {speakerInfo.name}
                  </motion.h2>
                  <motion.p
                    className="text-lg text-blue-600 font-medium mb-1"
                    variants={itemVariants}
                  >
                    {speakerInfo.title}
                  </motion.p>
                  <motion.p className="text-gray-600" variants={itemVariants}>
                    {speakerInfo.company}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              variants={itemVariants}
            >
              Terima Kasih!
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Semoga pelatihan LinkedIn ini bermanfaat untuk mengembangkan karir
              dan personal branding Anda. Tetap konsisten dan praktikkan tips
              yang telah dipelajari!
            </motion.p>

            {/* Social Media Links */}
            <motion.div
              className="bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-xl max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Stay Connected
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {speakerInfo.socialMedia.linkedin && (
                  <motion.a
                    href={speakerInfo.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </motion.a>
                )}
                {speakerInfo.socialMedia.youtube && (
                  <motion.a
                    href={speakerInfo.socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-pink-600 text-white px-4 py-3 rounded-lg hover:bg-pink-700 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Youtube className="w-5 h-5" />
                    <span>Youtube</span>
                  </motion.a>
                )}
                {speakerInfo.socialMedia.github && (
                  <motion.a
                    href={speakerInfo.socialMedia.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-400 text-white px-4 py-3 rounded-lg hover:bg-blue-500 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>Github</span>
                  </motion.a>
                )}
                {speakerInfo.socialMedia.whatsapp && (
                  <motion.a
                    href={`mailto:${speakerInfo.socialMedia.whatsapp}`}
                    className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Whatsapp</span>
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Action Item */}
            <motion.div
              className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center justify-center gap-2">
                <Target className="w-5 h-5" />
                Next Action Steps
              </h3>
              <p className="text-yellow-700">
                Terapkan minimal 3 tips dari pelatihan ini dalam 1 minggu ke
                depan dan bagikan hasilnya di LinkedIn dengan hashtag
                #LinkedInTraining
              </p>
            </motion.div>
          </motion.div>
        );

      default:
        return <div>Slide content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      {/* Header */}
      <motion.div
        className="bg-white/10 backdrop-blur-sm border-b border-white/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div
              className="bg-white p-2 rounded-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </motion.div>
            <div>
              <h1 className="text-white font-bold text-lg">
                LinkedIn Training
              </h1>
              <p className="text-blue-200 text-sm">
                Professional Development Program
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              {currentSlide + 1} / {slides.length}
            </motion.div>

            <motion.button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                isAutoPlay
                  ? "bg-green-500 text-white"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {isAutoPlay ? "Auto ON" : "Auto OFF"}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Slide Navigation Dots */}
      <motion.div
        className="fixed top-1/2 left-4 transform -translate-y-1/2 z-20"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col space-y-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              title={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0 }}
              animate={{ scale: index === currentSlide ? 1.25 : 1 }}
              transition={{ delay: 1.2 + index * 0.05 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-2xl min-h-[600px] overflow-hidden">
          <AnimatePresence mode="wait" custom={slideDirection}>
            <motion.div
              key={currentSlide}
              custom={slideDirection}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 },
              }}
              className="p-8 md:p-12"
            >
              {" "}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {slides[currentSlide].headTitle || slides[currentSlide].title}
                </h1>
                {(slides[currentSlide].subHeadTitle ||
                  slides[currentSlide].subtitle) && (
                  <p className="text-xl text-blue-600 font-medium">
                    {slides[currentSlide].subHeadTitle ||
                      slides[currentSlide].subtitle}
                  </p>
                )}
              </motion.div>
              {renderSlideContent(slides[currentSlide])}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <motion.div
        className="fixed bottom-6 right-6 flex space-x-3 z-20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          title="Previous Slide"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          title="Next Slide"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-white/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 to-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}
