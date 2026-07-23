import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Programs data for Magallanes
const PROGRAMS = [
  {
    id: 'ceprunsa',
    title: 'Ciclo CEPRUNSA',
    category: 'Preuniversitario',
    badge: 'MÁXIMA DEMANDA',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    description: 'Preparación directa enfocada en el balotario y temario oficial del examen CEPRUNSA I y II. Cobertura total por áreas.',
    details: {
      schedule: 'Lunes a Sábado (Mañana 7:30 - 13:00 / Tarde 15:00 - 20:00)',
      duracion: '12 a 16 Semanas',
      areas: 'Biomédicas, Ingenierías y Sociales',
      includes: ['Simulacros semanales con ranking', 'Banco de preguntas tipo UNSA', 'Asesoría psicopedagógica personalizada', 'Acceso al Aula Virtual 24/7']
    }
  },
  {
    id: 'ordinario',
    title: 'Ciclo Ordinario UNSA',
    category: 'Preuniversitario',
    badge: 'COMPLETO',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    description: 'Formación integral teórico-práctica con el más alto nivel de exigencia para el Examen de Admisión Ordinario UNSA.',
    details: {
      schedule: 'Lunes a Sábado (Turnos Mañana y Tarde)',
      duracion: '20 Semanas',
      areas: 'Todas las carreras de la UNSA',
      includes: ['Docentes universitarios seleccionados', 'Seminarios dominicales maratónicos', 'Talleres de matemática y razonamiento', 'Material impreso exclusivo']
    }
  },
  {
    id: 'quintos',
    title: 'Ciclo Quintos & Extraordinario',
    category: 'Escolar / Pre',
    badge: 'PREFERENCIAL',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    description: 'Diseñado exclusivamente para estudiantes de 5to de secundaria que buscan asegurar su vacante antes de terminar el colegio.',
    details: {
      schedule: 'Tardes de 15:30 a 19:30 (Compatible con horario escolar)',
      duracion: '14 Semanas',
      areas: 'Biomédicas, Ingenierías y Sociales',
      includes: ['Horario adaptado a clases escolares', 'Reforzamiento en ciencias exactas', 'Simulacros en condiciones reales', 'Orientación vocacional especial']
    }
  },
  {
    id: 'repaso',
    title: 'Ciclo Repaso & Intensivo',
    category: 'Maratónico',
    badge: 'ÚLTIMO TRAMO',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    description: 'Velocidad, resolución de exámenes pasados y resolución de preguntas trampa. Enfocado 100% en efectividad de puntaje.',
    details: {
      schedule: 'Lunes a Domingo (Full Day disponible)',
      duracion: '4 a 6 Semanas',
      areas: 'Ingenierías, Medicina, Derecho, Administración, etc.',
      includes: ['100% ejercicios resueltos en pizarra', 'Tips de velocidad y descarte', 'Simulacros diarios de 2 horas', 'Bancos de preguntas de los últimos 10 años']
    }
  },
  {
    id: 'colegio',
    title: 'Colegio Magallanes',
    category: 'Educación Escolar',
    badge: 'FORMACIÓN INTEGRAL',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    description: 'Nivel secundario con orientación preuniversitaria desde 1ro a 5to de secundaria. Formamos líderes con valores y nivel académico superior.',
    details: {
      schedule: 'Lunes a Viernes 7:30 a 14:30',
      duracion: 'Año Académico Regular',
      areas: 'Ciencias, Humanidades y Tecnología',
      includes: ['Docentes con perfil universitario', 'Aulas equipadas con tecnología multimedia', 'Talleres artísticos y deportivos', 'Laboratorios de ciencias completos']
    }
  },
  {
    id: 'simulacros',
    title: 'Taller de Simulacros UNSA',
    category: 'Evaluación',
    badge: 'ABIERTO A TODOS',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    description: 'Mide tu puntaje real compitiendo con cientos de postulantes en Arequipa. Sistema de calificación idéntico al examen UNSA.',
    details: {
      schedule: 'Todos los Domingos 8:00 AM - 12:30 PM',
      duracion: 'Por sesión / Paquete mensual',
      areas: 'Fase I, Fase II, CEPRUNSA y Extraordinario',
      includes: ['Tarjeta óptica y control biométrico', 'Resultados procesados en 2 horas', 'Solucionario en video explicado por docentes', 'Estadísticas por materia']
    }
  }
];

// Hero Slides data
const HERO_SLIDES = [
  {
    title: '¡MÁXIMA EXIGENCIA, ALTO RENDIMIENTO!',
    highlight: 'RUMBO A LA UNSA 2026',
    subtitle: 'Asegura tu ingreso a las carreras más competitivas con nuestro sistema integral de preparación y simulacros tipo examen real.',
    ctaText: 'VER PROGRAMAS ›',
    targetSection: 'programas',
    bgGradient: 'from-slate-950 via-slate-900 to-red-950',
    accentColor: 'text-[#DD0000]',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'NUEVOS INICIOS CEPRUNSA & ORDINARIO',
    highlight: 'APRENDE CON LOS MEJORES',
    subtitle: 'Catedráticos de primer nivel, plana docente especialista en Arequipa y plataforma virtual 24/7.',
    ctaText: 'INSCRÍBETE AHORA ›',
    targetSection: 'contacto',
    bgGradient: 'from-red-950 via-slate-900 to-slate-950',
    accentColor: 'text-amber-400',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'COLEGIO & ACADEMIA MAGALLANES',
    highlight: 'TU FUTURO EMPIEZA HOY',
    subtitle: 'Formación escolar con exigencia universitaria desde los primeros años de secundaria.',
    ctaText: 'CONOCE MÁS ›',
    targetSection: 'nosotros',
    bgGradient: 'from-slate-900 via-[#880000] to-slate-950',
    accentColor: 'text-white',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80'
  }
];

const Home = () => {
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Programs Carousel State
  const carouselRef = useRef(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Contact Form State
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    celular: '',
    carrera: '',
    sede: 'Sede Central - Av. Independencia 868',
    ciclo: 'Ciclo CEPRUNSA',
    mensaje: '',
    consent: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hero Auto Play Effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Scroll Programs Carousel
  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = direction === 'left' ? -380 : 380;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Scroll to section helper
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({
          nombre: '',
          email: '',
          celular: '',
          carrera: '',
          sede: 'Sede Central - Av. Independencia 868',
          ciclo: 'Ciclo CEPRUNSA',
          mensaje: '',
          consent: true
        });
      }, 500);
    }, 800);
  };

  return (
    <div className="grow flex flex-col bg-[#F8FAFC]">

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SLIDER SECTION (Smart Slider 3 style like mebaperu.com) */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[680px] overflow-hidden bg-slate-950 select-none">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center ${
              idx === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-110 scale-105 transition-transform duration-10000 ease-linear"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-85 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />
            </div>

            {/* Slide Content Overlay */}
            <div className="max-w-[90%] md:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white w-full">
              <div className="max-w-3xl space-y-5 animate-in fade-in slide-in-from-bottom-6 duration-700">
                {/* Highlight Badge (mebaperu style rounded pill) */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white">
                  <span className="w-2 h-2 rounded-full bg-[#DD0000] animate-ping" />
                  <span>{slide.highlight}</span>
                </div>

                {/* Big Bold Italic Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tight text-white leading-[1.08] drop-shadow-lg font-montserrat">
                  {slide.title.split(slide.highlight)[0]}
                  <span className={`block ${slide.accentColor} drop-shadow-md mt-1`}>
                    {slide.highlight}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-xl text-slate-200 font-medium max-w-2xl leading-relaxed drop-shadow-sm">
                  {slide.subtitle}
                </p>

                {/* Red Pill CTA Button (mebaperu CATÁLOGO > style) */}
                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => scrollToId(slide.targetSection)}
                    className="inline-flex items-center gap-3 bg-[#DD0000] hover:bg-red-700 text-white px-8 py-4 rounded-full font-black text-sm sm:text-base uppercase tracking-widest transition-all shadow-xl hover:shadow-red-600/40 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
                  >
                    <span>{slide.ctaText}</span>
                  </button>

                  <a
                    href="https://wa.me/51903016273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-7 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5 text-emerald-400 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                    <span>CONSULTAR POR WHATSAPP</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Navigation Arrow Buttons (Left / Right) */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-[#DD0000] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-lg"
          aria-label="Anterior diapositiva"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-[#DD0000] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-lg"
          aria-label="Siguiente diapositiva"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots Bar (mebaperu Smart Slider .n2-ss-control-bullet style) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-black/40 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(idx);
              }}
              className={`transition-all rounded-full cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 h-3 bg-[#DD0000] ring-2 ring-white/50'
                  : 'w-3 h-3 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Ir a diapositiva ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. PROGRAMAS / CICLOS CAROUSEL SECTION (Matching mebaperu PRODUCTOS) */}
      {/* ------------------------------------------------------------- */}
      <section id="programas" className="py-20 bg-[#F4F4F4] relative border-b border-slate-200">
        <div className="max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Title on Left, Action Button on Right (mebaperu PRODUCTOS style) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#DD0000]">
                OFERTA ACADÉMICA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic uppercase text-slate-900 tracking-tight mt-1">
                NUESTROS PROGRAMAS
              </h2>
            </div>

            {/* Right side Catalog Pill Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToId('contacto')}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border-2 border-slate-900 px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <span>VER CATÁLOGO</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Slider Arrow Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollCarousel('left')}
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#DD0000] hover:text-white border border-slate-300 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  aria-label="Desplazar a la izquierda"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#DD0000] hover:text-white border border-slate-300 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  aria-label="Desplazar a la derecha"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Cards Horizontal Carousel Container (mebaperu product grid style) */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="w-[300px] sm:w-[340px] shrink-0 snap-start bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-slate-100 mb-5">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#DD0000] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {prog.badge}
                    </div>
                  </div>

                  {/* Program Title & Description */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                      {prog.category}
                    </span>
                    <h3 className="text-xl font-black italic uppercase text-slate-900 tracking-tight leading-snug group-hover:text-[#DD0000] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                      {prog.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#DD0000] hover:text-red-700 transition-colors cursor-pointer"
                  >
                    <span>Ver Detalles</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <a
                    href={`https://wa.me/51903016273?text=Hola,%20quisiera%20información%20sobre%20el%20${encodeURIComponent(prog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                    title="Consultar por WhatsApp"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. VALUE PROPOSITION & STATS SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center">
            
            <div className="p-4 space-y-2">
              <div className="text-4xl sm:text-5xl font-black italic uppercase text-slate-900 tracking-tight">
                100%
              </div>
              <div className="text-xs sm:text-sm font-black uppercase text-[#DD0000] tracking-wider">
                PRÁCTICO &amp; ENFOCADO
              </div>
              <p className="text-xs text-slate-500 max-w-[200px] mx-auto">
                Resolución continua de exámenes de admisión UNSA.
              </p>
            </div>

            <div className="p-4 space-y-2 pt-6 md:pt-4">
              <div className="text-4xl sm:text-5xl font-black italic uppercase text-slate-900 tracking-tight">
                UNSA
              </div>
              <div className="text-xs sm:text-sm font-black uppercase text-[#DD0000] tracking-wider">
                NIVEL DE EXIGENCIA
              </div>
              <p className="text-xs text-slate-500 max-w-[200px] mx-auto">
                Evaluaciones semanales con estándar oficial.
              </p>
            </div>

            <div className="p-4 space-y-2 pt-6 md:pt-4">
              <div className="text-4xl sm:text-5xl font-black italic uppercase text-slate-900 tracking-tight">
                TOP
              </div>
              <div className="text-xs sm:text-sm font-black uppercase text-[#DD0000] tracking-wider">
                DOCENTES ESPECIALISTAS
              </div>
              <p className="text-xs text-slate-500 max-w-[200px] mx-auto">
                Plana docente con amplia experiencia universitaria.
              </p>
            </div>

            <div className="p-4 space-y-2 pt-6 md:pt-4">
              <div className="text-4xl sm:text-5xl font-black italic uppercase text-slate-900 tracking-tight">
                24/7
              </div>
              <div className="text-xs sm:text-sm font-black uppercase text-[#DD0000] tracking-wider">
                AULA VIRTUAL INTEGRADA
              </div>
              <p className="text-xs text-slate-500 max-w-[200px] mx-auto">
                Materiales, clases grabadas y banco de preguntas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. ABOUT US SECTION (NOSOTROS) */}
      {/* ------------------------------------------------------------- */}
      <section id="nosotros" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#DD0000] bg-red-950/60 px-3 py-1 rounded-full border border-red-800/40">
                NOSOTROS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white leading-tight">
                CONSORCIO EDUCATIVO <span className="text-[#DD0000]">MAGALLANES</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                Somos una institución académica líder en Arequipa dedicada a la formación preuniversitaria y escolar de alto rendimiento. Nuestra metodología se basa en la disciplina, el dominio de exámenes tipo UNSA y el desarrollo de habilidades analíticas superiores.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000] flex items-center justify-center text-white font-black text-xl mb-3">
                    ✓
                  </div>
                  <h4 className="text-base font-bold text-white uppercase italic">Sistema Biométrico</h4>
                  <p className="text-xs text-slate-400 mt-1">Control de asistencia estricto y reporte instantáneo a los padres.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000] flex items-center justify-center text-white font-black text-xl mb-3">
                    ★
                  </div>
                  <h4 className="text-base font-bold text-white uppercase italic">Primeros Puestos</h4>
                  <p className="text-xs text-slate-400 mt-1">Cientos de ingresantes respaldan nuestra trayectoria en Medina, Ingenierías y Sociales.</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => scrollToId('contacto')}
                  className="inline-flex items-center gap-3 bg-[#DD0000] hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-lg cursor-pointer"
                >
                  <span>MÁS INFORMACIÓN</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                  alt="Aula de Clases Magallanes"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">INFRAESTRUCTURA MODERNA</span>
                  <h3 className="text-lg font-black italic uppercase mt-1">Aulas Multimedia &amp; Biblioteca Digital</h3>
                  <p className="text-xs text-slate-300 mt-1">Ambientes climatizados con proyección interactiva en nuestra Sede Central.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. CONTACT FORM SECTION (Exact multi-column layout matching mebaperu CONTÁCTANOS) */}
      {/* ------------------------------------------------------------- */}
      <section id="contacto" className="py-20 bg-[#F4F4F4] relative border-b border-slate-200">
        <div className="max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-slate-900 tracking-tight font-montserrat">
              CONTÁCTANOS
            </h2>
            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              Envíanos tus preguntas, comentarios o solicitudes de inscripción. Tu futuro universitario empieza en Magallanes.
            </p>
          </div>

          {/* Form Card Container (Exact mebaperu.com white card style) */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg">
            
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl font-black">
                  ✓
                </div>
                <h3 className="text-2xl font-black italic uppercase text-slate-900">
                  ¡SOLICITUD ENVIADA CON ÉXITO!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Gracias por comunicarte con el Consorcio Educativo Magallanes. Un asesor académico te contactará en breve vía WhatsApp o llamada telefónica.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 bg-[#DD0000] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-wider shadow-md hover:bg-red-700 transition-colors cursor-pointer"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Nombre, Correo, Celular */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu Nombre y Apellido"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD0000] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="usuario@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD0000] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider">
                      Celular / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ingrese número de celular"
                      value={formData.celular}
                      onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD0000] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Carrera, Sede, Ciclo */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider">
                      Área / Carrera *
                    </label>
                    <select
                      value={formData.carrera}
                      onChange={(e) => setFormData({ ...formData, carrera: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD0000] focus:border-transparent transition-all"
                    >
                      <option value="">—Selecciona Área—</option>
                      <option value="Biomédicas">Biomédicas (Medicina, Enfermería, etc.)</option>
                      <option value="Ingenierías">Ingenierías (Civil, Minas, Industrial, etc.)</option>
                      <option value="Sociales">Sociales (Derecho, Administración, etc.)</option>
                      <option value="Colegio">Colegio Magallanes (Secundaria)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider">
                      Sede / Turno *
                    </label>
                    <select
                      value={formData.sede}
                      onChange={(e) => setFormData({ ...formData, sede: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD0000] focus:border-transparent transition-all"
                    >
                      <option value="Sede Central - Mañana">Sede Central - Turno Mañana</option>
                      <option value="Sede Central - Tarde">Sede Central - Turno Tarde</option>
                      <option value="Virtual - En Vivo">Modalidad Virtual En Vivo</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider">
                      Ciclo de Interés *
                    </label>
                    <select
                      value={formData.ciclo}
                      onChange={(e) => setFormData({ ...formData, ciclo: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD0000] focus:border-transparent transition-all"
                    >
                      <option value="Ciclo CEPRUNSA">Ciclo CEPRUNSA</option>
                      <option value="Ciclo Ordinario UNSA">Ciclo Ordinario UNSA</option>
                      <option value="Ciclo Quintos & Extraordinario">Ciclo Quintos &amp; Extraordinario</option>
                      <option value="Ciclo Repaso Intensivo">Ciclo Repaso Intensivo</option>
                      <option value="Colegio Magallanes">Colegio Magallanes</option>
                      <option value="Taller de Simulacros">Taller de Simulacros</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Mensaje */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider">
                    Mensaje *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ingrese su mensaje o consulta..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#DD0000] focus:border-transparent transition-all"
                  />
                </div>

                {/* Consent Checkbox (matching mebaperu.com) */}
                <div className="flex items-start gap-3 text-xs text-slate-600 font-medium">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded text-[#DD0000] focus:ring-[#DD0000] cursor-pointer"
                  />
                  <label htmlFor="consent" className="cursor-pointer select-none">
                    Doy mi consentimiento para que Consorcio Educativo Magallanes utilice mis datos personales con el propósito de enviarme información sobre inicios de clases, convocatorias y simulacros.
                  </label>
                </div>

                {/* Red Pill Submit Button (mebaperu Enviar style) */}
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-14 py-4 bg-[#DD0000] hover:bg-red-700 text-white rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-md hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. PROGRAM DETAILS MODAL DIALOG */}
      {/* ------------------------------------------------------------- */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3">
              <span className="bg-red-100 text-[#DD0000] text-xs font-black uppercase px-3 py-1 rounded-full">
                {selectedProgram.badge}
              </span>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                {selectedProgram.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black italic uppercase text-slate-900 tracking-tight">
              {selectedProgram.title}
            </h3>

            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              {selectedProgram.description}
            </p>

            {/* Details Grid */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 text-xs sm:text-sm font-medium">
              <div>
                <span className="font-extrabold text-slate-900 uppercase">Horarios:</span>{' '}
                <span className="text-slate-700">{selectedProgram.details.schedule}</span>
              </div>
              <div>
                <span className="font-extrabold text-slate-900 uppercase">Duración:</span>{' '}
                <span className="text-slate-700">{selectedProgram.details.duracion}</span>
              </div>
              <div>
                <span className="font-extrabold text-slate-900 uppercase">Áreas Dirigidas:</span>{' '}
                <span className="text-slate-700">{selectedProgram.details.areas}</span>
              </div>
            </div>

            {/* Includes List */}
            <div className="space-y-2">
              <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">
                El Programa Incluye:
              </h4>
              <ul className="space-y-2">
                {selectedProgram.details.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-red-100 text-[#DD0000] flex items-center justify-center text-[10px] font-black shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/51903016273?text=Hola,%20deseo%20matricularme%20en%20el%20${encodeURIComponent(selectedProgram.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 rounded-full font-black text-xs uppercase tracking-wider text-center shadow-md transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Solicitar Vacante por WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  scrollToId('contacto');
                }}
                className="bg-[#DD0000] hover:bg-red-700 text-white py-3.5 px-6 rounded-full font-black text-xs uppercase tracking-wider text-center transition-colors cursor-pointer"
              >
                Inscribirme en Formulario
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
