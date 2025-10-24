import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-4xl">⚙️</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Hatim Abbaoui</h1>

        <p className="text-xl md:text-2xl text-primary mb-2">
          Electronics & Robotics Student | Industrial Automation & Process Optimization
        </p>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Electronics & Robotics student passionate about industrial engineering, currently gaining hands-on experience
          in quality management methodologies and process automation at Lear Corporation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild variant="outline" size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/cv.pdf" download="Hatim_Abbaoui_CV.pdf">
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
