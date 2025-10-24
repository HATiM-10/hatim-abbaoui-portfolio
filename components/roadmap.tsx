"use client"

interface Milestone {
  year: string
  title: string
  organization: string
  description: string
  skills?: string[]
  position: "left" | "right"
}

export default function Roadmap() {
  const milestones: Milestone[] = [
    {
      year: "2023",
      title: "Baccalaureate Sciences Mathematiques A",
      organization: "Lycee Ibn El Khatib, Sale",
      description: "Advanced Mathematics, Physics, and Engineering Fundamentals",
      skills: ["Advanced Mathematics", "Physics", "Engineering Fundamentals", "Problem Solving", "Analytical Thinking"],
      position: "left",
    },
    {
      year: "2023-2024",
      title: "Year 1 - Licence Electronics, Computer Science & Robotics",
      organization: "Mohammed V University, Rabat",
      description: "Foundation in core engineering and computer science principles",
      skills: ["Mathematical Analysis", "Algebra", "Python Programming", "Physics", "Thermodynamics"],
      position: "right",
    },
    {
      year: "2023-2024",
      title: "Engineering Team Member",
      organization: "Mohammed V University Robotics Club",
      description:
        "Designed autonomous robotic vehicle, applied process improvement techniques, achieved 1st place qualification",
      skills: [
        "Autonomous Systems Design",
        "Process Improvement",
        "Quality Control",
        "Team Leadership",
        "Rapid Prototyping",
      ],
      position: "left",
    },
    {
      year: "2024-2025",
      title: "Year 2 - Advanced Electronics & Systems",
      organization: "Mohammed V University, Rabat",
      description: "Specialized knowledge in electronics, programming, and system design",
      skills: ["Electronics Design", "C Programming", "Operating Systems", "Web Technologies", "Networking"],
      position: "right",
    },
    {
      year: "2025-Present",
      title: "Year 3 - Robotics & Industrial Applications",
      organization: "Mohammed V University, Rabat",
      description: "Advanced specialization in robotics, automation, and industrial systems",
      skills: [
        "Microcontrollers",
        "Robotics Systems",
        "Artificial Intelligence",
        "Databases (SQL)",
        "Automotive Electronics",
      ],
      position: "left",
    },
    {
      year: "2025",
      title: "Six Sigma White Belt Certification",
      organization: "Professional Certification",
      description: "Certified in Six Sigma methodology with expertise in DMAIC and process improvement",
      skills: [
        "DMAIC Methodology",
        "Process Improvement",
        "Statistical Analysis",
        "Data-Driven Decision Making",
        "Quality Management",
      ],
      position: "right",
    },
    {
      year: "2025-Present",
      title: "Industrial Engineering Intern",
      organization: "Lear Automotive Morocco S.A.R.L",
      description: "Gaining hands-on experience in automotive electronics manufacturing and process automation",
      skills: ["MSA/SPC", "Python Automation", "Data Validation", "Manufacturing Processes", "Quality Standards"],
      position: "left",
    },
  ]

  return (
    <section id="roadmap" className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Career Roadmap</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">A journey of growth, learning, and achievement</p>
        </div>

        {/* Roadmap Container */}
        <div className="relative">
          {/* SVG Serpent Path */}
          <svg
            className="absolute left-4 sm:left-1/2 top-0 w-0.5 sm:w-1 h-full sm:transform sm:-translate-x-1/2"
            viewBox="0 0 2 1000"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="1" />
                <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="1" />
              </linearGradient>
            </defs>
            {/* Winding serpent path */}
            <path
              d="M 1 0 Q 1 80 1 160 Q 1 240 1 320 Q 1 400 1 480 Q 1 560 1 640 Q 1 720 1 800 Q 1 880 1 1000"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Milestones */}
          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 sm:gap-8 md:gap-12 ${
                  milestone.position === "right" ? "flex-row" : "sm:flex-row-reverse flex-row"
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className="p-4 sm:p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow text-left"
                  >
                    <div className="text-xs sm:text-sm font-semibold text-primary mb-1 sm:mb-2">{milestone.year}</div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1">{milestone.title}</h3>
                    <p className="text-xs sm:text-sm text-primary mb-2 sm:mb-3">{milestone.organization}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{milestone.description}</p>
                    {milestone.skills && milestone.skills.length > 0 && (
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
                        <p className="text-xs font-semibold text-muted-foreground mb-2 sm:mb-3 uppercase tracking-wide">
                          Key Skills Learned:
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {milestone.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium bg-primary/15 text-primary rounded-full border border-primary/30 hover:bg-primary/25 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Center Dot */}
                <div className="flex-shrink-0 flex justify-center">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-primary border-2 sm:border-3 md:border-4 border-background shadow-lg" />
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
