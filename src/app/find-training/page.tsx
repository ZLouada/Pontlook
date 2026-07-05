"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FadeIn, FadeInStaggerItem } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, ChevronLeft, ArrowRight, Target, Clock } from "lucide-react";


const step1Schema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  industry: z.string().min(2, "Industry is required"),
  employeeCount: z.string().min(1, "Employee count is required"),
});

const step2Schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  jobTitle: z.string().min(2, "Job title is required"),
  email: z.string().email("Invalid email address"),
});

const step3Schema = z.object({
  challenges: z.array(z.string()).min(1, "Select at least one challenge"),
});

const step4Schema = z.object({
  trainingType: z.string().min(1, "Training type is required"),
  deliveryMethod: z.string().min(1, "Delivery method is required"),
});

const step5Schema = z.object({
  budgetRange: z.string().min(1, "Budget range is required"),
  timeline: z.string().min(1, "Timeline is required"),
});

const step6Schema = z.object({
  expectedOutcomes: z.string().min(10, "Please briefly describe expected outcomes"),
});

const step7Schema = z.object({
  additionalNotes: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to the Privacy Policy"
  }),
});


const formSchema = z.object({}).merge(step1Schema).merge(step2Schema).merge(step3Schema)
  .merge(step4Schema).merge(step5Schema).merge(step6Schema).merge(step7Schema);

type FormData = z.infer<typeof formSchema>;

const STEPS = [
  { id: 1, title: "Company", fields: ["companyName", "industry", "employeeCount"] },
  { id: 2, title: "Contact", fields: ["firstName", "lastName", "jobTitle", "email"] },
  { id: 3, title: "Challenges", fields: ["challenges"] },
  { id: 4, title: "Requirements", fields: ["trainingType", "deliveryMethod"] },
  { id: 5, title: "Scope", fields: ["budgetRange", "timeline"] },
  { id: 6, title: "Outcomes", fields: ["expectedOutcomes"] },
  { id: 7, title: "Final", fields: ["additionalNotes"] },
];

export default function FindTrainingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, setValue, trigger } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      challenges: [],
    }
  });

  
  useEffect(() => {
    const savedData = localStorage.getItem("pontlook_training_form");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        Object.keys(parsed).forEach((key) => {
          setValue(key as keyof FormData, parsed[key]);
        });
      } catch (e) {
        console.error("Failed to parse saved form data", e);
      }
    }
    const savedStep = localStorage.getItem("pontlook_training_step");
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
    setIsLoaded(true);
  }, [setValue]);

  
  const formValues = watch();
  useEffect(() => {
    if (isLoaded && !isSubmitted) {
      localStorage.setItem("pontlook_training_form", JSON.stringify(formValues));
      localStorage.setItem("pontlook_training_step", currentStep.toString());
    }
  }, [formValues, currentStep, isLoaded, isSubmitted]);

  const processNextStep = async () => {
    const stepDef = STEPS.find(s => s.id === currentStep);
    if (!stepDef) return;

    
    const isStepValid = await trigger(stepDef.fields as any);
    
    if (isStepValid) {
      if (currentStep < STEPS.length) {
        setCurrentStep(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const processPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setIsSubmitted(true);
        localStorage.removeItem("pontlook_training_form");
        localStorage.removeItem("pontlook_training_step");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again later.");
    }
  };

  
  const challenges = watch("challenges") || [];
  const toggleChallenge = (val: string) => {
    if (challenges.includes(val)) {
      setValue("challenges", challenges.filter(c => c !== val), { shouldValidate: true });
    } else {
      setValue("challenges", [...challenges, val], { shouldValidate: true });
    }
  };

  if (!isLoaded) return null; 

  if (isSubmitted) {
    return (
      <div className="flex-1 bg-slate-50 dark:bg-[var(--bg-subtle)] flex items-center justify-center py-24 px-4">
        <FadeIn className="bg-white dark:bg-[var(--surface-card)] p-10 rounded-2xl shadow-xl shadow-primary-500/10 dark:shadow-black/30 max-w-lg w-full text-center border border-slate-200 dark:border-[var(--border-default)]">
          <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl font-bold text-[var(--fg-heading)] mb-4">Request Received</h2>
          <p className="text-[var(--fg-default)] mb-8 text-lg">
            We're verifying your request and matching you with up to 3 specialized providers in your industry. You'll hear from us within 48 hours.
          </p>
          <Button asChild className="w-full h-12 text-base">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-slate-50 dark:bg-[var(--bg-subtle)]">
      
      {currentStep === 1 && (
        <>
          <section className="bg-[var(--bg-base)] py-16 md:py-32 px-4 relative overflow-hidden border-b border-[var(--border-default)]">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-bl from-primary-500/10 to-transparent rounded-full blur-3xl" />
            <div className="container mx-auto max-w-5xl text-center relative z-10">
              <FadeIn staggerChildren={0.15}>
                <FadeInStaggerItem>
                  <div className="inline-flex items-center rounded-full border border-primary-200 dark:border-primary-800/50 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 text-sm font-semibold text-primary-700 dark:text-primary-400 mb-8 uppercase tracking-widest">
                    For Companies
                  </div>
                </FadeInStaggerItem>
                <FadeInStaggerItem>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--fg-heading)] mb-6 md:mb-8 tracking-tighter leading-[1.05]">
                    Find the perfect training partner in <span className="text-primary-500">48 hours</span>.
                  </h1>
                </FadeInStaggerItem>
                <FadeInStaggerItem>
                  <p className="text-lg md:text-xl lg:text-2xl text-[var(--fg-default)] mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                    Stop reviewing endless, generic proposals. We match you with vetted GCC training providers based on your exact workforce challenges and budget.
                  </p>
                </FadeInStaggerItem>
                <FadeInStaggerItem>
                  <Button size="lg" asChild className="h-16 px-10 text-lg shadow-xl shadow-primary-500/20 group">
                    <a href="#assessment">
                      Start Free Assessment
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </a>
                  </Button>
                </FadeInStaggerItem>
              </FadeIn>
            </div>
          </section>

          <section className="py-16 md:py-24 px-4 bg-[var(--bg-subtle)] border-b border-[var(--border-default)]">
            <div className="container mx-auto max-w-7xl">
              <FadeIn className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-[var(--fg-heading)] mb-4">What we evaluate</h2>
                <p className="text-[var(--fg-muted)] text-base md:text-lg">Our 3-minute assessment captures exactly what top providers need to know.</p>
              </FadeIn>
              
              <div className="grid md:grid-cols-3 gap-8">
                <FadeIn delay={0.1}>
                  <div className="bg-[var(--surface-card)] rounded-2xl p-8 border border-[var(--border-default)] h-full shadow-sm hover:shadow-xl dark:hover:shadow-black/20 transition-all">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold mb-6">1</div>
                    <h4 className="font-bold text-xl text-[var(--fg-heading)] mb-3">Core Pain Points</h4>
                    <p className="text-[var(--fg-muted)] mb-6 text-sm">Example questions:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-[var(--fg-default)] bg-[var(--bg-muted)] p-3 rounded-lg border border-[var(--border-default)]">
                        <span className="text-primary-500 shrink-0 mt-0.5 font-bold">Q:</span>
                        "What specific behavior change are you trying to achieve with this training?"
                      </li>
                      <li className="flex items-start gap-3 text-sm text-[var(--fg-default)] bg-[var(--bg-muted)] p-3 rounded-lg border border-[var(--border-default)]">
                        <span className="text-primary-500 shrink-0 mt-0.5 font-bold">Q:</span>
                        "What metrics will determine if this initiative was successful?"
                      </li>
                    </ul>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="bg-[var(--surface-card)] rounded-2xl p-8 border border-[var(--border-default)] h-full shadow-sm hover:shadow-xl dark:hover:shadow-black/20 transition-all">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold mb-6">2</div>
                    <h4 className="font-bold text-xl text-[var(--fg-heading)] mb-3">Audience & Context</h4>
                    <p className="text-[var(--fg-muted)] mb-6 text-sm">Example questions:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-[var(--fg-default)] bg-[var(--bg-muted)] p-3 rounded-lg border border-[var(--border-default)]">
                        <span className="text-primary-500 shrink-0 mt-0.5 font-bold">Q:</span>
                        "How many employees need training, and what is their seniority level?"
                      </li>
                      <li className="flex items-start gap-3 text-sm text-[var(--fg-default)] bg-[var(--bg-muted)] p-3 rounded-lg border border-[var(--border-default)]">
                        <span className="text-primary-500 shrink-0 mt-0.5 font-bold">Q:</span>
                        "Do you require in-person workshops in the GCC, or virtual sessions?"
                      </li>
                    </ul>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="bg-[var(--surface-card)] rounded-2xl p-8 border border-[var(--border-default)] h-full shadow-sm hover:shadow-xl dark:hover:shadow-black/20 transition-all">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold mb-6">3</div>
                    <h4 className="font-bold text-xl text-[var(--fg-heading)] mb-3">Budget & Timeline</h4>
                    <p className="text-[var(--fg-muted)] mb-6 text-sm">Example questions:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-[var(--fg-default)] bg-[var(--bg-muted)] p-3 rounded-lg border border-[var(--border-default)]">
                        <span className="text-primary-500 shrink-0 mt-0.5 font-bold">Q:</span>
                        "Has budget been officially approved for this initiative?"
                      </li>
                      <li className="flex items-start gap-3 text-sm text-[var(--fg-default)] bg-[var(--bg-muted)] p-3 rounded-lg border border-[var(--border-default)]">
                        <span className="text-primary-500 shrink-0 mt-0.5 font-bold">Q:</span>
                        "When are you looking to start the first training session?"
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          <section className="py-24 px-4 bg-[var(--bg-base)] border-b border-[var(--border-default)]">
            <div className="container mx-auto max-w-4xl">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <FadeIn>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[var(--fg-heading)] mb-8">What happens next?</h2>
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--border-default)] before:to-transparent">
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-base)] bg-primary-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                        <Check className="w-4 h-4" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[var(--surface-card)] p-5 rounded-xl border border-[var(--border-default)] shadow-sm">
                        <h4 className="font-bold text-[var(--fg-heading)] mb-1">We Score & Match</h4>
                        <p className="text-sm text-[var(--fg-muted)]">Within 48 hours, our algorithm cross-references your needs against our vetted network of GCC providers.</p>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-base)] bg-[var(--bg-muted)] text-[var(--fg-faint)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[var(--surface-card)] p-5 rounded-xl border border-[var(--border-default)] shadow-sm">
                        <h4 className="font-bold text-[var(--fg-heading)] mb-1">Receive Intros</h4>
                        <p className="text-sm text-[var(--fg-muted)]">We introduce you to up to 3 highly specialized providers that have confirmed availability and fit.</p>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-base)] bg-[var(--bg-muted)] text-[var(--fg-faint)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <Target className="w-4 h-4" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[var(--surface-card)] p-5 rounded-xl border border-[var(--border-default)] shadow-sm">
                        <h4 className="font-bold text-[var(--fg-heading)] mb-1">You Choose</h4>
                        <p className="text-sm text-[var(--fg-muted)]">Review their profiles, take introductory calls, and choose the perfect partner for your team.</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="bg-[var(--bg-muted)] p-8 rounded-2xl border border-[var(--border-default)]">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-800/50">Verified Outcome</span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--fg-heading)] mb-6">"We found a specialized leadership coach in 2 days."</h3>
                    <p className="text-[var(--fg-default)] text-lg leading-relaxed italic mb-8">"Instead of interviewing 10 generic agencies, Pontlook introduced us to a provider who had specifically trained engineering managers in the GCC. It saved us weeks."</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--border-default)] flex items-center justify-center font-bold text-[var(--fg-muted)]">HR</div>
                      <div>
                        <p className="text-sm font-bold text-[var(--fg-heading)]">HR Director</p>
                        <p className="text-xs text-[var(--fg-muted)]">Series C Tech Startup, Dubai</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        </>
      )}

      
      <div className="py-12 md:py-24" id="assessment">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        
        
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {STEPS.map((step) => (
              <div key={step.id} className="flex flex-col items-center relative z-10 flex-1">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    currentStep === step.id 
                      ? "bg-primary-500 text-white shadow-md shadow-primary-500/30" 
                      : currentStep > step.id 
                        ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400"
                        : "bg-[var(--surface-card)] text-[var(--fg-faint)] border border-[var(--border-default)]"
                  }`}
                >
                  {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                </div>
                <span className={`text-xs mt-2 font-medium hidden sm:block ${
                  currentStep >= step.id ? "text-primary-700 dark:text-primary-400" : "text-[var(--fg-faint)]"
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
            
            <div className="absolute left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-[var(--border-default)] top-4 -z-0 hidden sm:block">
              <div 
                className="h-full bg-primary-500 transition-all duration-300" 
                style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        
        <div className="bg-white dark:bg-[var(--surface-card)] rounded-2xl shadow-sm dark:shadow-black/20 border border-slate-200 dark:border-[var(--border-default)] p-6 sm:p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            
            
            {currentStep === 1 && (
              <FadeIn direction="none">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tell us about your company</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Company Name</label>
                    <input {...register("companyName")} className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none" placeholder="Acme Corp" />
                    {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Industry</label>
                    <select {...register("industry")} className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none bg-white dark:bg-slate-950">
                      <option value="">Select industry...</option>
                      <option value="Government">Government & Public Sector</option>
                      <option value="Finance">Banking & Finance</option>
                      <option value="Technology">Technology & Software</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Company Size</label>
                    <select {...register("employeeCount")} className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none bg-white dark:bg-slate-950">
                      <option value="">Select size...</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                    {errors.employeeCount && <p className="text-red-500 text-xs mt-1">{errors.employeeCount.message}</p>}
                  </div>
                </div>
              </FadeIn>
            )}

            
            {currentStep === 2 && (
              <FadeIn direction="none">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Who should providers contact?</h3>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">First Name</label>
                      <input {...register("firstName")} className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none" />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Last Name</label>
                      <input {...register("lastName")} className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none" />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Job Title</label>
                    <input {...register("jobTitle")} className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none" placeholder="e.g. HR Director, VP of Sales" />
                    {errors.jobTitle && <p className="text-red-500 text-xs mt-1">{errors.jobTitle.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Work Email</label>
                    <input type="email" {...register("email")} className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
              </FadeIn>
            )}

            
            {currentStep === 3 && (
              <FadeIn direction="none">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">What challenges are you facing?</h3>
                <p className="text-slate-500 dark:text-slate-400 dark:text-slate-500 mb-6 text-sm">Select all that apply to help us match you correctly.</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Low sales conversion rates",
                    "High employee turnover",
                    "Poor management communication",
                    "New technology adoption",
                    "Compliance & regulatory gaps",
                    "Lack of leadership pipeline",
                    "Customer service complaints",
                    "Remote team productivity"
                  ].map(challenge => (
                    <label 
                      key={challenge} 
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        challenges.includes(challenge) 
                          ? "border-primary-500 bg-primary-50/30" 
                          : "border-slate-200 dark:border-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:bg-slate-900/50"
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" 
                        checked={challenges.includes(challenge)}
                        onChange={() => toggleChallenge(challenge)}
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-tight">{challenge}</span>
                    </label>
                  ))}
                </div>
                {errors.challenges && <p className="text-red-500 text-xs mt-4">{errors.challenges.message}</p>}
              </FadeIn>
            )}

            
            {currentStep === 4 && (
              <FadeIn direction="none">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Training Requirements</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">Primary Training Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Leadership", "Sales", "Technical", "Soft Skills"].map(type => (
                        <label key={type} className={`border rounded-lg p-3 text-center cursor-pointer ${watch("trainingType") === type ? "border-primary-500 bg-primary-50 text-primary-700 font-medium" : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:bg-slate-900/50"}`}>
                          <input type="radio" value={type} {...register("trainingType")} className="hidden" />
                          {type}
                        </label>
                      ))}
                    </div>
                    {errors.trainingType && <p className="text-red-500 text-xs mt-2">{errors.trainingType.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">Preferred Delivery Method</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["In-person", "Virtual Live", "Hybrid", "E-learning"].map(method => (
                        <label key={method} className={`border rounded-lg p-3 text-center cursor-pointer ${watch("deliveryMethod") === method ? "border-primary-500 bg-primary-50 text-primary-700 font-medium" : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:bg-slate-900/50"}`}>
                          <input type="radio" value={method} {...register("deliveryMethod")} className="hidden" />
                          {method}
                        </label>
                      ))}
                    </div>
                    {errors.deliveryMethod && <p className="text-red-500 text-xs mt-2">{errors.deliveryMethod.message}</p>}
                  </div>
                </div>
              </FadeIn>
            )}

            
            {currentStep === 5 && (
              <FadeIn direction="none">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Scope & Budget</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Approved Budget Range</label>
                    <select {...register("budgetRange")} className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none bg-white dark:bg-slate-950">
                      <option value="">Select budget range...</option>
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                      <option value="$50,000+">$50,000+</option>
                      <option value="Not sure yet">Not sure yet / Need pricing</option>
                    </select>
                    {errors.budgetRange && <p className="text-red-500 text-xs mt-1">{errors.budgetRange.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Expected Implementation Timeline</label>
                    <select {...register("timeline")} className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none bg-white dark:bg-slate-950">
                      <option value="">Select timeline...</option>
                      <option value="ASAP">ASAP (Within 30 days)</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Just researching">Just researching for future</option>
                    </select>
                    {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline.message}</p>}
                  </div>
                </div>
              </FadeIn>
            )}

            
            {currentStep === 6 && (
              <FadeIn direction="none">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Expected Outcomes</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">What does success look like for this training?</label>
                    <textarea 
                      {...register("expectedOutcomes")} 
                      rows={5}
                      className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none resize-none" 
                      placeholder="e.g., Increase sales closing rate by 15%, reduce manager turnover, ensure compliance with new GCC labor laws..."
                    />
                    {errors.expectedOutcomes && <p className="text-red-500 text-xs mt-1">{errors.expectedOutcomes.message}</p>}
                  </div>
                </div>
              </FadeIn>
            )}

            
            {currentStep === 7 && (
              <FadeIn direction="none">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Final Notes</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Anything else we should know? (Optional)</label>
                    <textarea 
                      {...register("additionalNotes")} 
                      rows={4}
                      className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none resize-none" 
                      placeholder="Any specific provider preferences, localization needs, etc."
                    />
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        {...register("consent")}
                        className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        I agree to the <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link> and consent to Pontlook processing my personal data to match me with training providers.
                      </span>
                    </label>
                    {errors.consent && <p className="text-red-500 text-xs mt-1 ml-7">{errors.consent.message}</p>}
                  </div>
                </div>
              </FadeIn>
            )}

            
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-100 dark:border-slate-800">
              <Button 
                type="button" 
                variant="ghost" 
                onClick={processPrevStep}
                disabled={currentStep === 1}
                className={currentStep === 1 ? "opacity-0 pointer-events-none" : ""}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              
              {currentStep < STEPS.length ? (
                <Button type="button" onClick={processNextStep} className="px-8">
                  Next Step
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button type="submit" className="px-8 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20">
                  Submit Request
                  <Check className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
