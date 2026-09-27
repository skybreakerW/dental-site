export default function Footer() {
  return (
    <footer className="bg-ink text-gray-400 pt-20 pb-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent
                              flex items-center justify-center text-white font-display font-bold text-lg">
                S
              </div>
              <div className="font-display font-bold text-white text-lg">New Life Dental Clinic</div>
            </div>
            <p className="max-w-sm leading-relaxed">
              Modern, gentle dentistry. Open Monday to Saturday, 10am – 6pm.
            </p>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Contact</div>
            <div className="space-y-2 text-sm">
              <div>+91 98765 43210</div>
              <div>hello@newlifedental.in</div>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Visit</div>
            <div className="text-sm leading-relaxed">
              123 Main Road,<br />
              India 999999
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs">
          <div>© 2026 New Life Dental Clinic. All rights reserved.</div>
          <div className="text-gray-500">
            Demo design — not for production use.
          </div>
        </div>
      </div>
    </footer>
  );
}