export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-6 lg:px-10 overflow-hidden bg-gradient-to-b from-cyan-50/60 via-white to-white">
      {/* soft decorative blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-20 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 bg-white border border-cyan-100
                          px-4 py-2 rounded-full text-xs font-medium text-primary shadow-sm">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Now accepting new patients
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] mt-6 tracking-tight">
            Dentistry that<br />
            <span className="text-primary">feels effortless.</span>
          </h1>

          <p className="mt-7 text-lg text-gray-600 max-w-lg leading-relaxed">
            Modern, gentle dental care in the heart of the city. From routine cleanings to
            complete smile makeovers — all under one roof.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#book"
               className="group inline-flex items-center gap-2 bg-primary text-white
                          px-8 py-4 rounded-full font-medium shadow-lg shadow-cyan-200
                          hover:bg-ink transition-all duration-300">
              Book Appointment
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#services"
               className="inline-flex items-center gap-2 bg-white border border-gray-200
                          px-8 py-4 rounded-full font-medium text-ink hover:border-primary hover:text-primary transition-all">
              Our Services
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8">
            <div>
              <div className="font-display font-bold text-2xl text-ink">15+</div>
              <div className="text-xs text-gray-500 mt-1">Years experience</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="font-display font-bold text-2xl text-ink">12k+</div>
              <div className="text-xs text-gray-500 mt-1">Happy patients</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="font-display font-bold text-2xl text-ink">4.9★</div>
              <div className="text-xs text-gray-500 mt-1">Patient rating</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[2.5rem] rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-white rounded-[2.5rem] -rotate-2 border border-cyan-100 shadow-2xl flex flex-col items-center justify-center p-12 text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-7xl">
                🦷
              </div>
              <div className="mt-8 font-display font-bold text-2xl text-ink">Dr. Subhojit Bose</div>
              <div className="text-sm text-primary mt-1">BDS, MDS — Implantologist</div>
              <div className="mt-6 flex gap-2 text-xs">
                <span className="px-3 py-1 bg-cyan-50 text-primary rounded-full">Implantology</span>
                <span className="px-3 py-1 bg-cyan-50 text-primary rounded-full">Cosmetic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}