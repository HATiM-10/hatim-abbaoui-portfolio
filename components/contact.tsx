import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Let's Work Together</h2>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          I'm actively seeking industrial engineering internship opportunities. Whether you have a project in mind or
          just want to chat about robotics and process optimization, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          <div className="bg-background rounded-lg p-4 sm:p-6 border border-border">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📧</div>
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Email</h3>
            <a href="mailto:hatim.abbaoui2005@gmail.com" className="text-primary hover:underline text-xs sm:text-sm break-all">
              hatim.abbaoui2005@gmail.com
            </a>
          </div>

          <div className="bg-background rounded-lg p-4 sm:p-6 border border-border">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📱</div>
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Phone</h3>
            <a href="tel:+212760887030" className="text-primary hover:underline text-xs sm:text-sm">
              (+212) 7 60 88 70 30
            </a>
          </div>

          <div className="bg-background rounded-lg p-4 sm:p-6 border border-border sm:col-span-2 md:col-span-1">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🔗</div>
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/hatim-abbaoui" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs sm:text-sm">
              Connect with me
            </a>
          </div>
        </div>

        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
          <a href="mailto:hatim.abbaoui2005@gmail.com">Send Me an Email</a>
        </Button>
      </div>
    </section>
  )
}
