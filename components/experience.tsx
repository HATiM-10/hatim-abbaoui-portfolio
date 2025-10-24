export default function Experience() {
  const experiences = [
    {
      year: "Oct 2025 - Present",
      title: "Industrial Engineering Intern",
      organization: "Lear Automotive Morocco S.A.R.L",
      logo: "/lear-logo.svg",
      description:
        "Currently interning at Lear Corporation, gaining hands-on experience in automotive electronics manufacturing and process automation.",
      keyAchievements: [
        "Automating data validation, reporting, and production monitoring with Python workflows to boost efficiency and accuracy.",
        "Developing proficiency in Measurement System Analysis (MSA) to ensure measurement accuracy and reliability.",
        "Applying Statistical Process Control (SPC) techniques to monitor processes and drive continuous improvement.",
        "Learning end-to-end electronic component manufacturing for automotive applications, from raw PCB materials to final delivery.",
        "Gaining practical knowledge of automotive quality standards and production optimization in a tier-1 supplier environment.",
      ],
      images: [],
    },
    {
      year: "Sept 2023 - June 2024",
      title: "Engineering Team Member",
      organization: "Mohammed V University Robotics Club",
      logo: "/robotics-club-logo.jpg",
      description:
        "Student engineer working on competitive robotics projects, blending technical innovation with process improvement and effective teamwork.",
      keyAchievements: [
        "Designed, programmed, and assembled an autonomous robotic vehicle, applying systematic engineering and rapid prototyping to deliver results.",
        "Applied process improvement and quality control techniques, boosting system reliability and reducing assembly time.",
        "Collaborated within a focused 4-member team, driving efforts in quality assurance, robust testing, and workflow optimization.",
        "Captured 1st place in the 6th Edition of the Robotics Challenges and secured 2nd place in the 6th Edition Robotics Competition, demonstrating technical excellence and delivering strong impact.",
      ],
      images: [],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Professional Experience</h2>
        <p className="text-center text-muted-foreground mb-12">
          A track record of driving operational excellence and continuous improvement
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                {index !== experiences.length - 1 && <div className="w-1 h-24 bg-border mt-2"></div>}
              </div>

              <div className="pb-8 flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-start gap-4">
                    <img
                      src={exp.logo || "/placeholder.svg"}
                      alt={exp.organization}
                      className="w-12 h-12 rounded-lg object-contain bg-white p-2 flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.organization}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-primary border border-primary rounded-lg px-3 py-1 whitespace-nowrap">
                    {exp.year}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 mt-4">{exp.description}</p>

                {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-bold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.keyAchievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary mt-1 flex-shrink-0">●</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.images && exp.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {exp.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="rounded-lg overflow-hidden">
                        <img
                          src={image.url || "/placeholder.svg"}
                          alt={image.alt || `Experience image ${imgIndex + 1}`}
                          className="w-full h-auto object-cover rounded-lg hover:opacity-90 transition-opacity"
                        />
                        {image.caption && (
                          <p className="text-sm text-muted-foreground mt-2 text-center">{image.caption}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
