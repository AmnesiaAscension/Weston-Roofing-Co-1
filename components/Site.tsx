
import React from 'react';
import { BUSINESS_INFO, SERVICES, FAQS } from '../constants';

const Site: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-900 p-2 rounded text-white font-black text-xl leading-none">W</div>
            <span className="font-extrabold text-xl tracking-tight text-blue-900">{BUSINESS_INFO.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-semibold text-gray-600">
            <a href="#services" className="hover:text-blue-900 transition-colors">Services</a>
            <a href="#reviews" className="hover:text-blue-900 transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-blue-900 transition-colors">FAQ</a>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-all flex items-center gap-2">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
               {BUSINESS_INFO.phone}
            </a>
          </div>
          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="md:hidden bg-orange-600 text-white p-2 rounded-full">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/roof1/1600/900" 
            alt="Roofing Background" 
            className="w-full h-full object-cover brightness-[0.25]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <span className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
              Emergency Ready & Insurance Specialist
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Trusted Roofing Experts in <span className="text-orange-500">{BUSINESS_INFO.city}, {BUSINESS_INFO.state}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Don't let a leak compromise your home. Weston Roofing Co provides fast, reliable, and affordable roofing solutions tailored to Deer Park homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="bg-orange-600 hover:bg-orange-700 text-white text-xl font-bold px-8 py-5 rounded-lg shadow-2xl transition-all transform hover:scale-105 text-center flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                {BUSINESS_INFO.ctaText}
              </a>
              <a href="#contact" className="bg-white hover:bg-gray-100 text-gray-900 text-xl font-bold px-8 py-5 rounded-lg shadow-xl transition-all text-center">
                Get Free Estimate
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8 items-center justify-center md:justify-start text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Local Deer Park Business</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Free Inspections</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals / Logos */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 font-bold uppercase tracking-widest text-sm mb-8">Our Quality & Trust Partners</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="h-12 w-32 bg-gray-200 rounded animate-pulse flex items-center justify-center font-bold">BBB A+</div>
             <div className="h-12 w-32 bg-gray-200 rounded animate-pulse flex items-center justify-center font-bold">HAAG</div>
             <div className="h-12 w-32 bg-gray-200 rounded animate-pulse flex items-center justify-center font-bold">CERTAINTEED</div>
             <div className="h-12 w-32 bg-gray-200 rounded animate-pulse flex items-center justify-center font-bold">NRCA</div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-blue-900 py-16 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-3xl font-black mb-4">Limited Time Seasonal Offer</h2>
              <p className="text-xl text-blue-200">{BUSINESS_INFO.primaryOffer}</p>
            </div>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white font-bold text-2xl px-10 py-5 rounded-xl shadow-2xl transition-all hover:scale-105">
              Claim Offer Now
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-black text-blue-900 mb-4">Complete Roofing Solutions</h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">From minor leaks to full storm restorations, we handle every aspect of your roof with precision and care.</p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group scroll-reveal">
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-orange-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white scroll-reveal">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-black text-blue-900 mb-4">What Your Neighbors Are Saying</h2>
          <div className="flex justify-center mb-6 text-yellow-400">
            {[1,2,3,4,5].map(s => <svg key={s} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
          </div>
          <p className="text-gray-600 text-lg">Rated 4.9/5 stars across Google and Facebook</p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-gray-50 p-8 rounded-2xl relative border-l-4 border-orange-500">
              <p className="text-gray-700 italic mb-6">"Weston Roofing saved us after the big storm last June. They were in Deer Park the next day, worked with our adjuster, and our roof looks amazing. Fast and professional!"</p>
              <p className="font-black text-gray-900">— Sarah M., Deer Park Resident</p>
           </div>
           <div className="bg-gray-50 p-8 rounded-2xl relative border-l-4 border-orange-500">
              <p className="text-gray-700 italic mb-6">"The only roofer I'll call. They fixed a leak three other companies couldn't find. Honest pricing and they actually showed up when they said they would."</p>
              <p className="font-black text-gray-900">— Mike T., Homeowner</p>
           </div>
           <div className="bg-gray-50 p-8 rounded-2xl relative border-l-4 border-orange-500">
              <p className="text-gray-700 italic mb-6">"Professional crew, great communication. They replaced our entire roof in one day and left the yard cleaner than they found it. Highly recommend Weston!"</p>
              <p className="font-black text-gray-900">— David R., Local Business Owner</p>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50 scroll-reveal">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-black text-blue-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{f.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-900 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center text-white">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Ready to Protect Your Home?</h2>
              <p className="text-xl text-blue-100 mb-12">Call us for an immediate response or send us a message and we'll get back to you within 2 hours during business hours.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-orange-500 p-3 rounded-xl"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></div>
                  <div>
                    <p className="text-blue-200 font-bold uppercase text-sm tracking-wider mb-1">Call Our Office</p>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-3xl font-black hover:text-orange-400 transition-colors">{BUSINESS_INFO.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-orange-500 p-3 rounded-xl"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
                  <div>
                    <p className="text-blue-200 font-bold uppercase text-sm tracking-wider mb-1">Visit Us</p>
                    <p className="text-2xl font-black">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-gray-50 p-12 md:p-16">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:outline-none transition-all" placeholder="(832) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:outline-none transition-all">
                    <option>Roof Repair</option>
                    <option>Full Roof Replacement</option>
                    <option>Storm Damage Inspection</option>
                    <option>Gutters / Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">How can we help?</label>
                  <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:outline-none transition-all" placeholder="Tell us about your roofing project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-blue-800 transition-all text-xl">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded text-blue-900 font-black text-xl leading-none">W</div>
              <span className="font-extrabold text-2xl tracking-tight">{BUSINESS_INFO.name}</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Deer Park's leading roofing specialists. We pride ourselves on quality craftsmanship, transparent pricing, and protecting our local community one roof at a time.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer">F</div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer">G</div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer">Y</div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                {BUSINESS_INFO.address}
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                {BUSINESS_INFO.phone}
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {BUSINESS_INFO.hours}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Service Areas</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Deer Park, TX</li>
              <li>Pasadena, TX</li>
              <li>La Porte, TX</li>
              <li>Clear Lake, TX</li>
              <li>Baytown, TX</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved. Licensed & Insured.</p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
        <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="bg-orange-600 text-white font-black text-xl py-5 flex items-center justify-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] active:bg-orange-700 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          CALL NOW
        </a>
      </div>
    </div>
  );
};

export default Site;
