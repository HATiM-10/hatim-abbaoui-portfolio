export default function Skills() {
  const skillCategories = [
    {
      title: "Quality & Process Control",
      skills: [
        "Measurement System Analysis (MSA)",
        "Statistical Process Control (SPC)",
        "Process Capability Analysis",
        "Control Charts",
        "DMAIC",
        "Structured Problem Solving",
      ],
    },
    {
      title: "Manufacturing & Production",
      skills: [
        "Automotive Electronics Manufacturing",
        "PCB Assembly Processes",
        "Quality Assurance Systems",
        "Industry Standards",
        "Production Process Optimization",
      ],
    },
    {
      title: "Programming & Development",
      skills: [
        "Python Scripting & Automation",
        "C Programming",
        "Arduino IDE",
        "Embedded Systems Programming",
        "Hardware-Software Integration",
        "Algorithm Development",
      ],
    },
    {
      title: "Engineering & Robotics",
      skills: [
        "Arduino System Design & Integration",
        "Rapid Prototyping",
        "Electronics Integration",
        "Sensors & Actuators",
        "Automation Process Development",
      ],
    },
    {
      title: "Tools & Analytics",
      skills: [
        "Advanced Excel Analytics",
        "PivotTables",
        "VLOOKUP",
        "Business Process Modeling (BPMN)",
        "Data Visualization",
        "Dashboarding",
        "Statistical Process Analysis",
      ],
    },
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-secondary/50 rounded-lg p-4 sm:p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
