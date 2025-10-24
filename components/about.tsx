"use client"

import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const openLightbox = (index: number) => {
    setLightboxImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage(null)
  }

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, lightboxImage])

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [lightboxOpen])

  const galleryImages = [
    {
      src: "/1st place photo.jpg",
      alt: "1st Place Robotics Competition",
      title: "1st Place - Robotics Qualification",
      caption: "University Competition",
      date: "2024"
    },
    {
      src: "/2nd place photo.jpg",
      alt: "2nd Place Robotics Tournament",
      title: "2nd Place - University Robotics Tournament",
      caption: "Mohammed V University",
      date: "2024"
    },
    {
      src: "/Internship at Lear Corporation.jpg",
      alt: "Working at Lear Corporation",
      title: "Internship at Lear Corporation",
      caption: "Automotive Electronics Manufacturing Experience",
      date: "2025"
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">About Me</h2>

        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm a third-year Electronics & Robotics student at Mohammed V University, driven by a passion for
              industrial engineering and process optimization. My academic projects and robotics competitions have
              refined my skills in embedded programming, system integration, and analytical problem-solving.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              At Lear Corporation, I'm gaining hands-on experience in Measurement System Analysis (MSA) & Statistical
              Process Control (SPC) while developing Python workflows to automate data validation and reporting.
              Certified Six Sigma White Belt, I apply DMAIC methodologies to enhance operational efficiency and am eager
              to tackle real-world industrial challenges.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Photo Gallery</h3>
            <div className="relative select-none">
              <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
                <div className="flex gap-2 sm:gap-4">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_90%] min-w-0 sm:flex-[0_0_85%] md:flex-[0_0_80%] lg:flex-[0_0_60%]"
                    >
                      <div className="relative group mx-1 sm:mx-2">
                        <div
                          className="relative overflow-hidden rounded-lg sm:rounded-xl bg-secondary/50 aspect-[4/3] cursor-pointer active:scale-95 transition-transform"
                          onClick={() => openLightbox(index)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            quality={100}
                            priority={index === 0}
                            sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 80vw, 60vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                              <div className="flex items-start justify-between gap-2 sm:gap-4">
                                <div>
                                  <h4 className="text-white font-bold text-sm sm:text-lg mb-1 sm:mb-2 line-clamp-2">{image.title}</h4>
                                  <p className="text-gray-200 text-xs sm:text-sm mb-0.5 sm:mb-1 line-clamp-1">{image.caption}</p>
                                  <p className="text-gray-300 text-xs font-medium">{image.date}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={scrollPrev}
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border border-border rounded-full p-2 sm:p-3 shadow-lg transition-all active:scale-95 sm:hover:scale-110 z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-foreground" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border border-border rounded-full p-2 sm:p-3 shadow-lg transition-all active:scale-95 sm:hover:scale-110 z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-foreground" />
              </button>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all ${
                      index === selectedIndex
                        ? "w-6 sm:w-8 bg-primary"
                        : "w-1.5 sm:w-2 bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-background/90 hover:bg-background border border-border rounded-full p-2.5 sm:p-3 shadow-lg transition-all active:scale-95 sm:hover:scale-110 z-20"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border border-border rounded-full p-2.5 sm:p-3 shadow-lg transition-all active:scale-95 sm:hover:scale-110 z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border border-border rounded-full p-2.5 sm:p-3 shadow-lg transition-all active:scale-95 sm:hover:scale-110 z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </button>

          <div
            className="relative w-full h-full sm:w-[90vw] sm:h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxImage].src}
              alt={galleryImages[lightboxImage].alt}
              fill
              className="object-contain"
              quality={100}
              priority
              sizes="(max-width: 640px) 100vw, 90vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-3 sm:p-6">
              <h4 className="text-white font-bold text-base sm:text-xl mb-1 sm:mb-2 line-clamp-2">
                {galleryImages[lightboxImage].title}
              </h4>
              <p className="text-gray-200 text-xs sm:text-sm mb-0.5 sm:mb-1 line-clamp-2">
                {galleryImages[lightboxImage].caption}
              </p>
              <p className="text-gray-300 text-xs font-medium">
                {galleryImages[lightboxImage].date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
