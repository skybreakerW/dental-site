const services = [
  { icon: '🪥', title: 'Teeth Cleaning',    desc: 'Ultrasonic scaling and polishing for healthy gums and a fresher smile.' },
  { icon: '🦷', title: 'Tooth Fillings',    desc: 'Tooth-coloured composite fillings that blend seamlessly with your teeth.' },
  { icon: '🔬', title: 'Root Canal',        desc: 'Single-sitting, painless root canal treatment with modern rotary tools.' },
  { icon: '😁', title: 'Braces & Aligners', desc: 'Metal, ceramic and clear aligner options for all age groups.' },
  { icon: '⚕️', title: 'Implants',          desc: 'Permanent, natural-looking tooth replacement with titanium implants.' },
  { icon: '✨', title: 'Teeth Whitening',   desc: 'Professional in-clinic whitening for a visibly brighter smile.' },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            What we do
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight tracking-tight">
            Complete dental care,<br />under one roof.
          </h2>
          <p className="mt-5 text-gray-500 text-lg">
            Every treatment planned around your comfort — with transparent pricing and no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div
              key={s.title}
              className="group relative p-8 rounded-3xl border border-gray-100 bg-white
                         hover:border-primary/30 hover:shadow-2xl hover:shadow-cyan-100/50
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 group-hover:bg-primary
                              flex items-center justify-center text-3xl transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mt-6">{s.title}</h3>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-6 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}