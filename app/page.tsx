"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Upload, BarChart3, Brain } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LiquidEther from "@/components/LiquidEther"
import ProfileCard from "@/components/ProfileCard"

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative">
      {/* LiquidEther Background - Full Page */}
      <div className="fixed inset-0 w-full h-full z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={0}
          autoRampDuration={0.6}
        />
      </div>

      {/* All Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="flex h-screen items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-balance font-sans text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl bg-gradient-to-b from-white/90 via-white/70 to-purple-500 bg-clip-text text-transparent">
              CREDSIGHT
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
              Advanced fraud detection powered by machine learning
            </p>
            <Link href="/analyze">
              <Button size="lg" className="mt-8 text-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

      {/* Key Features Section */}
      <section id="features" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Key Features</h2>
          <p className="mb-16 text-center text-muted-foreground">
            Powerful tools to detect and prevent fraud in your transactions
          </p>

          <div className="mx-auto max-w-2xl space-y-6">
            <FeatureCard
              icon={<Upload className="h-8 w-8" />}
              title="CSV Data Processing"
              description="Upload your transaction data in CSV format with TransactionID column for instant analysis and fraud detection."
              delay={0}
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8" />}
              title="ERGNC Model"
              description="Advanced machine learning model specifically trained for fraud detection with high accuracy and low false positive rates."
              delay={150}
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8" />}
              title="Quick Analysis"
              description="Get instant fraud predictions and comprehensive statistics overview with filtering options for detailed analysis."
              delay={300}
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Statistical Insights"
              description="Detailed statistics including fraud rates, case counts, and comprehensive data visualization for informed decisions."
              delay={450}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="mb-16 text-center text-muted-foreground">
            Three simple steps to detect fraud in your transactions
          </p>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <StepCard
              number="01"
              title="Upload Data"
              description="Upload your CSV file containing transaction data with TransactionID column"
            />
            <StepCard
              number="02"
              title="ML Analysis"
              description="ERGCN model processes each transaction and generates fraud probability scores"
            />
            <StepCard
              number="03"
              title="View Result"
              description="Get detailed results with filtering options and comprehensive statistics overview"
            />
          </div>

          {/* GIF Container */}
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex aspect-video items-center justify-center">
              <img
                src="/fraud-detection-dashboard-interface.jpg"
                alt="CREDSIGHT Demo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section id="team" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Our Team</h2>
          <p className="mb-16 text-center text-muted-foreground">
            Meet the people behind CredSight
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            <div className="p-4">
              <div className="mx-auto max-w-[280px]">
                <ProfileCard
              name="Alvin Feliciano"
              title="Software Engineer"
              handle="xxxxx"
              status="xxxxx"
              contactText="xxxxx"
              avatarUrl="https://i.pravatar.cc/300?img=1"
              showUserInfo={false}
              enableTilt={false}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked: Javi')}
              />
              </div>
            </div>
            <div className="p-4">
              <div className="mx-auto max-w-[280px]">
                <ProfileCard
              name="Mark Aki Flores"
              title="Software Engineer"
              handle="alex-ml"
              status="Available"
              contactText="Reach Out"
              avatarUrl="https://i.pravatar.cc/300?img=2"
              showUserInfo={false}
              enableTilt={false}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked: Alex')}
              />
              </div>
            </div>
            <div className="p-4">
              <div className="mx-auto max-w-[280px]">
                <ProfileCard
              name="David Garcia"
              title="Software Engineer"
              handle="priya-data"
              status="Online"
              contactText="Say Hi"
              avatarUrl="https://i.pravatar.cc/300?img=3"
              showUserInfo={false}
              enableTilt={false}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked: Priya')}
              />
              </div>
            </div>
            <div className="p-4">
              <div className="mx-auto max-w-[280px]">
                <ProfileCard
              name="Isaeus Guiang"
              title="Software Engineer"
              handle="marco-designs"
              status="Busy"
              contactText="Connect"
              avatarUrl="https://i.pravatar.cc/300?img=4"
              showUserInfo={false}
              enableTilt={false}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked: Marco')}
              />
              </div>
            </div>
            <div className="p-4">
              <div className="mx-auto max-w-[280px]">
                <ProfileCard
              name="Marcox Mediran"
              title="Software Engineer"
              handle="sarakim"
              status="Online"
              contactText="Contact"
              avatarUrl="https://i.pravatar.cc/300?img=5"
              showUserInfo={false}
              enableTilt={false}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked: Sara')}
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About This Project Section */}
      <section id="about" className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">About This Project</h2>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p className="text-center">
            This project demonstrates the practical application of machine learning in financial technology, combining advanced algorithms with a user-friendly interface to deliver trustworthy, real-time insights. It is powered by an Enhanced Relational Graph Convolutional Network (ERGCN) tailored for financial fraud detection, leveraging an advanced graph neural network architecture to model multi-entity relationships for high-accuracy detection, maintaining low false positive rates to reduce alert fatigue, and enabling quick processing for timely, operational decisions.
            </p>
          </div>
        </div>
      </section>

        {/* Footer */}
        <footer className="border-t border-border px-4 py-12">
          <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
            <p>&copy; 2025 CREDSIGHT. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: { icon: React.ReactNode; title: string; description: string; delay: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          } else {
            // Reset animation when element leaves viewport
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.2 }, // Increased threshold for better trigger point
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-[1200ms] ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
    >
      <Card className="h-full border-border bg-card transition-colors hover:border-primary/50">
        <CardHeader>
          <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="leading-relaxed">{description}</CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="mb-2 text-4xl font-bold text-primary">{number}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
