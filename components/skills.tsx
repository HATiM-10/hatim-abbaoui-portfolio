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
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-secondary/50 rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
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
