const badges = [
  { icon: '🏥', label: 'Sterilized Equipment' },
  { icon: '💳', label: 'Cashless Insurance'   },
  { icon: '🕐', label: 'Open Mon–Sat'         },
  { icon: '🚑', label: 'Emergency Care'       },
];

export default function Trust() {
  return (
    <section className="border-y border-gray-100 bg-mist py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map(b => (
          <div key={b.label} className="flex items-center gap-3">
            <div className="text-2xl">{b.icon}</div>
            <div className="text-sm font-medium text-ink">{b.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}