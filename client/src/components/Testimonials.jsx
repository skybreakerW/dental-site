const reviews = [
  {
    name: 'Priya M.',
    text: 'Dr. Bose made my root canal completely painless. I was terrified before, but the whole visit felt calm and reassuring.',
    role: 'Patient',
  },
  {
    name: 'Rahul K.',
    text: "The clinic is spotless and the staff actually explain what they're doing. Best dental experience I've had.",
    role: 'Patient',
  },
  {
    name: 'Anjali S.',
    text: 'Booked my appointment online in under a minute. Consultation was thorough and pricing was exactly as quoted.',
    role: 'Patient',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Patient stories
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink tracking-tight">
            Loved by patients.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(r => (
            <div
              key={r.name}
              className="p-8 rounded-3xl bg-mist border border-gray-100"
            >
              <div className="text-primary text-lg">★★★★★</div>
              <p className="mt-5 text-ink leading-relaxed">"{r.text}"</p>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="font-display font-semibold text-ink">{r.name}</div>
                <div className="text-sm text-gray-500">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}