"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background px-4 py-16 sm:py-0"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 sm:mb-8">
          {/* Profile Picture */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
              {/* Profile Image - Replace src with your actual profile picture path */}
              <img
                src="/profile-picture.jpg"
                alt="Hatim Abbaoui"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />

              {/* Fallback placeholder if image doesn't exist */}
              <div className="hidden w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-lg flex items-center justify-center relative overflow-hidden">
                    {/* Circuit pattern background */}
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="30" cy="30" r="2" fill="white" />
                        <circle cx="70" cy="30" r="2" fill="white" />
                        <circle cx="50" cy="50" r="3" fill="white" />
                        <circle cx="30" cy="70" r="2" fill="white" />
                        <circle cx="70" cy="70" r="2" fill="white" />
                        <line x1="30" y1="30" x2="50" y2="50" stroke="white" strokeWidth="1" />
                        <line x1="70" y1="30" x2="50" y2="50" stroke="white" strokeWidth="1" />
                        <line x1="30" y1="70" x2="50" y2="50" stroke="white" strokeWidth="1" />
                        <line x1="70" y1="70" x2="50" y2="50" stroke="white" strokeWidth="1" />
                      </svg>
                    </div>

                    {/* Main letters */}
                    <div className="relative z-10">
                      <span className="text-white font-bold text-2xl sm:text-3xl drop-shadow-lg">HA</span>
                    </div>

                    {/* Gear accent */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 sm:w-5 sm:h-5">
                      <svg viewBox="0 0 24 24" fill="white" className="w-full h-full opacity-90">
                        <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-balance px-2">Hatim Abbaoui</h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary mb-2 sm:mb-3 px-4">
          Electronics & Robotics Student | Industrial Automation & Process Optimization
        </p>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-balance px-4">
          Electronics & Robotics student passionate about industrial engineering, currently gaining hands-on experience
          in quality management methodologies and process automation at Lear Corporation.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="/cv.pdf" download="Hatim_Abbaoui_CV.pdf">
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
