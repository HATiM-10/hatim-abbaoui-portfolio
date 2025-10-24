"use client"

import { useState } from "react"

export default function Projects() {
  const projects = [
    {
      title: "Autonomous Line-Following Robot with Obstacle Avoidance",
      description:
        "Designed and built an autonomous robotic vehicle capable of navigating tracks at high speed without collisions. Implemented sensor fusion combining line-following algorithms and obstacle detection to achieve optimal performance in competitive racing scenarios. The robot successfully competed in time-based challenges, demonstrating reliability and speed optimization through systematic engineering approach and iterative testing.",
      tags: ["Arduino", "C Programming", "Robotics", "Autonomous Navigation", "Sensor Integration", "Line Following", "Obstacle Avoidance", "Embedded Systems", "Process Optimization"],
      achievement: "1st place qualification, 2nd place overall - 6th Edition Robotics Challenge, FSR (December 2023)",
      image: "/2nd place certificate.jpg",
      projectImage: "/autonomous-robot-project.jpg",
      technicalDetails: {
        microcontroller: "Arduino",
        language: "C",
        sensors: "IR line sensors, Ultrasonic/IR obstacle detection",
        motorControl: "DC motors with H-bridge driver",
        algorithm: "PID control for smooth line following",
        keyFeatures: "Real-time path correction, collision avoidance, speed optimization"
      }
    },
    {
      title: "Multi-Sensor Automated Control System",
      description:
        "Led team in developing an integrated robotic system featuring two technical challenges: Challenge 1 - Color Recognition System: Built real-time color detection using ColorPAL RGB sensor with Arduino. System reads RGB values, identifies dominant colors through intensity comparison, and provides immediate visual feedback through LED indicators. Challenge 2 - Automated Gate Control: Engineered intelligent access control system combining ultrasonic distance sensing (proximity detection <10cm), triple capacitive touch sensors, and servo motor actuation. Features include automated gate positioning, manual override capability, and dual LED status indicators for system feedback.",
      tags: ["Arduino", "C Programming", "ColorPAL Sensor", "Ultrasonic Sensors", "Capacitive Touch", "Servo Control", "Sensor Fusion", "Team Leadership", "System Integration", "DMAIC", "Quality Control"],
      achievement: "2nd Position - Team Lead - 6th Edition Robotics Competition (CLR), FSR (December 2023)",
      image: "/1st place certificate.jpg",
      projectImage: "/line-following-robot-project.jpg",
      technicalDetails: {
        microcontroller: "Arduino Uno",
        language: "C",
        challenge1Sensors: "ColorPAL RGB color sensor",
        challenge2Sensors: "HC-SR04 Ultrasonic sensor, 3x Capacitive touch sensors",
        actuators: "Servo motor (SG90), RGB LED system",
        features: "Real-time sensor data processing, multi-condition decision logic, manual override, serial debugging",
        keyAchievements: "Accurate color detection, proximity-based automation, sensor fusion"
      }
    },
  ]

  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({})

  const toggleProject = (index: number) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
  }

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProjects[index]
            const descriptionLimit = 200

            return (
              <div
                key={project.title}
                className="bg-background rounded-lg border border-border p-4 sm:p-6 hover:border-primary/50 transition-colors"
              >
                <div className="mb-3 sm:mb-4 h-40 sm:h-48 bg-white rounded-lg flex items-center justify-center overflow-hidden p-3 sm:p-4">
                  {project.projectImage ? (
                    <img
                      src={project.projectImage}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-4xl">🤖</span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-muted-foreground mb-2 text-xs sm:text-sm leading-relaxed">
                  {isExpanded ? project.description : truncateText(project.description, descriptionLimit)}
                </p>

                {isExpanded && project.image && (
                  <div className="my-3 sm:my-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                )}

                {project.description.length > descriptionLimit && (
                  <button
                    onClick={() => toggleProject(index)}
                    className="text-primary text-xs sm:text-sm font-medium hover:underline mb-3 sm:mb-4 active:scale-95 transition-transform"
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                )}

                <div className="mt-3 sm:mt-4">
                  <p className="text-xs font-semibold text-primary mb-2 line-clamp-2">{project.achievement}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.slice(0, isExpanded ? project.tags.length : 5).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-secondary text-xs rounded text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                    {!isExpanded && project.tags.length > 5 && (
                      <span className="px-2 py-1 bg-secondary text-xs rounded text-muted-foreground">
                        +{project.tags.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
