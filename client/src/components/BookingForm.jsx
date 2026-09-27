import { useState } from 'react';

const slots = [
  '10:00','10:30','11:00','11:30','12:00','12:30',
  '15:00','15:30','16:00','16:30','17:00','17:30',
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '', phone: '', service: 'Consultation', date: '', time: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  const today = new Date().toISOString().split('T')[0];

  const submit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', service: 'Consultation', date: '', time: '' });
    }, 3500);
  };

  return (
    <section
      id="book"
      className="py-28 px-6 lg:px-10 bg-gradient-to-b from-white via-cyan-50/40 to-white"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Book online
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink tracking-tight">
            Reserve your visit.
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Pick a time that suits you — we'll confirm within minutes.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-cyan-100/60
                     border border-cyan-50 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              name="name"
              value={form.name}
              onChange={update}
              required
              placeholder="Full name"
              className="px-5 py-4 rounded-2xl bg-mist border border-gray-100
                         focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10
                         outline-hidden transition-all"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={update}
              required
              placeholder="Phone number"
              className="px-5 py-4 rounded-2xl bg-mist border border-gray-100
                         focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10
                         outline-hidden transition-all"
            />
          </div>

          <select
            name="service"
            value={form.service}
            onChange={update}
            className="w-full px-5 py-4 rounded-2xl bg-mist border border-gray-100
                       focus:border-primary focus:bg-white outline-hidden transition-all"
          >
            {['Consultation','Cleaning','Filling','Root Canal','Braces','Whitening'].map(s => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <input
            name="date"
            type="date"
            min={today}
            value={form.date}
            onChange={update}
            required
            className="w-full px-5 py-4 rounded-2xl bg-mist border border-gray-100
                       focus:border-primary focus:bg-white outline-hidden transition-all"
          />

          <div>
            <div className="text-sm text-gray-500 mb-3">Preferred time</div>
            <div className="grid grid-cols-4 gap-2">
              {slots.map(s => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setForm({ ...form, time: s })}
                  className={`py-3 rounded-xl text-sm font-medium transition-all ${
                    form.time === s
                      ? 'bg-primary text-white shadow-lg shadow-cyan-200'
                      : 'bg-mist text-ink hover:bg-cyan-50'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className={`w-full py-4 rounded-2xl font-medium text-white transition-all ${
              submitted
                ? 'bg-green-500 cursor-default'
                : 'bg-primary hover:bg-ink shadow-lg shadow-cyan-200'
            }`}
          >
            {submitted ? '✓ Appointment Requested' : 'Confirm Appointment'}
          </button>

          <p className="text-xs text-gray-400 text-center pt-2">
            By booking, you agree to our clinic privacy policy.
          </p>
        </form>
      </div>
    </section>
  );
}