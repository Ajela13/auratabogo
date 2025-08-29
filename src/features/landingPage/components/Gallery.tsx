// src/features/landing/components/GallerySection.tsx

// --- IMPORTACIONES ESENCIALES ---
// Módulos de React y Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Archivos CSS de Swiper (¡Todos son necesarios!)
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Tus datos y estilos personalizados
import { images } from '../gallery-images';
import styles from './GallerySection.module.css';

const Gallery = () => {
  return (
    // Contenedor principal con Tailwind para el espaciado vertical
    <div className="py-16 bg">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Escenarios</h2>

      <div className="bg-black p-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center text-white mb-12">Colaboraciones</h3>

        <Swiper
          // --- CONFIGURACIÓN DEL EFECTO ---
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'} // Clave para que el layout se ajuste
          coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          }}

          // --- MÓDULOS Y FUNCIONALIDAD EXTRA ---
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}

          // --- ESTILOS PERSONALIZADOS ---
          className={styles.mySwiper}
        >
          {/* Mapeo de imágenes desde tu archivo gallery-images.ts */}
          {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img
            src={image.src}
            alt={image.alt}
            className="block w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <iframe data-testid="embed-iframe" className="mt-10 border-radius:12px" src="https://open.spotify.com/embed/artist/3jSaEwHt3xkuS6Sm9oY6GZ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

    </div>
  );
};

export default Gallery;