export default function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-10 bg-mist">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary to-accent p-1 max-w-md">
            <div className="w-full h-full rounded-[1.4rem] bg-white flex items-center justify-center">
              <div className="text-center p-10">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-50 to-teal-50
                                mx-auto flex items-center justify-center text-6xl">
                  👨‍⚕️
                </div>
                <div className="mt-6 font-display font-bold text-2xl text-ink">Dr. Subhojit Bose</div>
                <div className="text-primary text-sm mt-1">BDS, MDS (Implantology)</div>
                <div className="text-gray-500 text-sm mt-4 leading-relaxed">
                  Practicing for 15+ years with a focus on gentle, patient-first dentistry.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Meet your dentist
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight tracking-tight">
            Care that starts with<br />listening.
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We believe great dentistry isn't just about procedures — it's about trust.
            Every visit begins with understanding your concerns, then building a plan
            that fits your life and your budget.
          </p>

          <div className="mt-10 space-y-4">
            {[
              'Personalised treatment plans',
              'Zero-pressure consultations',
              'Transparent, upfront pricing',
              'Latest sterilisation protocols',
            ].map(item => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">
                  ✓
                </div>
                <span className="text-ink">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#book"
            className="inline-flex items-center gap-2 mt-10 bg-ink text-white
                       px-8 py-4 rounded-full font-medium hover:bg-primary transition-colors"
          >
            Book a consultation →
          </a>
        </div>
      </div>
    </section>
  );
}