"use client"

import { memo, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useMediaQuery } from "@/components/hooks/use-media-query"
import { X } from "lucide-react"

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1] }
const transitionOverlay = { duration: 0.3, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void
    controls: any
    cards: string[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const isScreenSizeMd = useMediaQuery("(max-width: 768px)")

    // Ajustar el tamaño del cilindro según el tamaño de pantalla
    const cylinderWidth = isScreenSizeSm ? 800 : isScreenSizeMd ? 1200 : 1600
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`)

    // Tamaño de imagen responsivo
    const imageSize = isScreenSizeSm ? 120 : isScreenSizeMd ? 160 : 200

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) => isCarouselActive && rotation.set(rotation.get() + info.offset.x * 0.05)}
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <motion.div
              key={`key-${imgUrl}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(imgUrl, i)}
            >
              <motion.img
                src={imgUrl}
                alt={`Imagen ${i + 1}`}
                layoutId={`img-${imgUrl}`}
                className="pointer-events-none rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                style={{
                  width: `${imageSize}px`,
                  height: `${imageSize}px`,
                }}
                initial={{ filter: "blur(4px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={transition}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  },
)

Carousel.displayName = "Carousel"

function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  const isScreenSizeSm = useMediaQuery("(max-width: 640px)")

  const cards = useMemo(
    () => ["/images/fotoGenaro1.webp","/images/genaro1.webp","/images/genaro2.webp","/images/genaro3.webp",],
    [],
  )

  useEffect(() => {
    console.log("Cards loaded:", cards)
  }, [cards])

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative w-full">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                aria-label="Cerrar imagen"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <motion.img
                layoutId={`img-${activeImg}`}
                src={activeImg}
                alt="Imagen ampliada"
                className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  willChange: "transform",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`relative overflow-hidden rounded-xl ${isScreenSizeSm ? "h-[300px]" : "h-[400px]"} w-full`}>
        <Carousel handleClick={handleClick} controls={controls} cards={cards} isCarouselActive={isCarouselActive} />
      </div>

      {/* Instrucciones de uso */}
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Arrastra para rotar el carrusel • Haz clic en una imagen para ampliarla</p>
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel }
