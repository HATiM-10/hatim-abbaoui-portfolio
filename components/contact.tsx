import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm actively seeking industrial engineering internship opportunities. Whether you have a project in mind or
          just want to chat about robotics and process optimization, feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-background rounded-lg p-6 border border-border">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:hatim.abbaoui2005@gmail.com" className="text-primary hover:underline">
              hatim.abbaoui2005@gmail.com
            </a>
          </div>

          <div className="bg-background rounded-lg p-6 border border-border">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+212760887030" className="text-primary hover:underline">
              (+212) 7 60 88 70 30
            </a>
          </div>

          <div className="bg-background rounded-lg p-6 border border-border">
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <a href="https://linkedin.com" className="text-primary hover:underline">
              Connect with me
            </a>
          </div>
        </div>

        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <a href="mailto:hatim.abbaoui2005@gmail.com">Send Me an Email</a>
        </Button>
      </div>
    </section>
  )
}
