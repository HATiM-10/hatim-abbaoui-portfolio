export default function About() {
  const competencies = [
    "Arduino & Embedded Programming",
    "Measurement System Analysis (MSA) & Statistical Process Control (SPC)",
    "Process Automation & Python Workflows",
    "Six Sigma White Belt & DMAIC",
    "Robotics & Automation Systems",
    "Team Leadership & Project Management",
  ]

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="space-y-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a third-year Electronics & Robotics student at Mohammed V University, driven by a passion for
              industrial engineering and process optimization. My academic projects and robotics competitions have
              refined my skills in embedded programming, system integration, and analytical problem-solving.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Lear Corporation, I'm gaining hands-on experience in Measurement System Analysis (MSA) & Statistical
              Process Control (SPC) while developing Python workflows to automate data validation and reporting.
              Certified Six Sigma White Belt, I apply DMAIC methodologies to enhance operational efficiency and am eager
              to tackle real-world industrial challenges.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {competencies.map((competency, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">{competency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
