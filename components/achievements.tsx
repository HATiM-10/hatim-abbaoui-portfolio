"use client"

import { useState } from "react"
import { Award, BookOpen, Trophy, Zap } from "lucide-react"

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("all")

  const achievements = {
    certifications: [
      {
        title: "Six Sigma White Belt",
        subtitle: "Process Improvement",
        date: "Sept 2025",
      },
      {
        title: "EF SET English Certificate",
        subtitle: "C1 Advanced, 65/100",
        date: "2024",
      },
    ],
    awards: [
      {
        title: "1st Place - Robotics Qualification",
        subtitle: "University Competition",
        date: "2024",
      },
      {
        title: "2nd Place - University Robotics Tournament",
        subtitle: "Mohammed V University",
        date: "2024",
      },
      {
        title: "1st Place - Engineering Challenge",
        subtitle: "University Competition",
        date: "2024",
      },
    ],
    education: [
      {
        title: "DEUG in Electronics, Computer Science & Robotics",
        subtitle: "Mohammed V University, Rabat",
        date: "2023-2025",
      },
      {
        title: "Baccalaureate Sciences Mathematiques A",
        subtitle: "Lycee Ibn Et Khatib, Sale",
        date: "2023",
      },
    ],
  }

  const allAchievements = [
    ...achievements.certifications.map((a) => ({ ...a, category: "Certification" })),
    ...achievements.awards.map((a) => ({ ...a, category: "Award" })),
    ...achievements.education.map((a) => ({ ...a, category: "Education" })),
  ]

  const tabs = [
    { id: "all", label: "All", icon: Zap },
    { id: "certifications", label: "Certifications", icon: Trophy },
    { id: "awards", label: "Awards & Recognition", icon: Award },
    { id: "education", label: "Education", icon: BookOpen },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Achievements</h2>
          <p className="text-muted-foreground">
            Certifications, awards, and publications that demonstrate expertise and commitment
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-4">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${
                    activeTab === tab.id
                      ? "bg-primary/10 border-primary text-foreground"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Tab content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === "all" ? allAchievements : achievements[activeTab as keyof typeof achievements]).map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
                  <p className="text-xs text-primary font-medium">{item.date}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
