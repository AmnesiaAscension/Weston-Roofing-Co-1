
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Documentation: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-black text-slate-900 mb-2">Project Delivery Documentation</h1>
          <p className="text-slate-500 text-lg">Detailed Strategy for {BUSINESS_INFO.name} - Deer Park, TX</p>
        </header>

        {/* A) PROJECT SUMMARY */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">A) Project Summary</h2>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm leading-relaxed text-slate-700">
            This project provides a high-converting, local lead-generation landing page for <strong>Weston Roofing Co</strong> in Deer Park, TX. 
            The site is architected for <strong>mobile-first visibility</strong>, prioritizing immediate phone conversions over static forms to capture high-intent traffic. 
            It emphasizes local trust via NAP (Name, Address, Phone) consistency, emergency readiness messaging, and clear service categorization for homeowners 
            needing immediate roof assessments.
          </div>
        </section>

        {/* B) SITE STRUCTURE & SECTION ORDER */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">B) Site Structure & Section Order</h2>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-slate-700">
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Sticky Mobile CTA Bar:</strong> Tap-to-call priority (Call Now).</li>
              <li><strong>Hero / Above-the-Fold:</strong> Direct value prop + city name + CTA.</li>
              <li><strong>Trust Signals:</strong> Placeholder badges (BBB, HAAG, Insurance).</li>
              <li><strong>Primary Offer:</strong> $500 Off / Free Inspection (Conversion driver).</li>
              <li><strong>Services Overview:</strong> 6-grid roofing-specific layout.</li>
              <li><strong>Service Area Coverage:</strong> Deer Park focus + surrounding cities.</li>
              <li><strong>Reviews / Social Proof:</strong> 3-column neighbor testimonials.</li>
              <li><strong>FAQ:</strong> Essential homeowner inquiries answered.</li>
              <li><strong>Contact / Call Section:</strong> High-contrast secondary conversion zone.</li>
              <li><strong>Footer:</strong> NAP + Hours + Copyright information.</li>
            </ol>
          </div>
        </section>

        {/* C) SEO PACK */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">C) SEO Pack</h2>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-slate-700 space-y-4">
            <div><strong>Page Title:</strong> Roofing Contractor Deer Park TX | Weston Roofing Co</div>
            <div><strong>Meta Description:</strong> Looking for a roofer in Deer Park, TX? Weston Roofing Co offers free inspections and expert repairs. Call (832) 756-9287 for local, insured roofing specialists.</div>
            <div><strong>H1:</strong> Professional Roofing Services in Deer Park, TX</div>
            <div><strong>H2 Suggestions:</strong> Roofing Repair Deer Park; Storm Damage Restoration; Why Choose Weston Roofing Co.</div>
            <div><strong>Keywords:</strong> Roofing Deer Park TX, Deer Park roof repair, roof replacement 77536, insurance roof claim Deer Park.</div>
            <div><strong>URL Slug:</strong> /roofer-deer-park-tx</div>
            <div><strong>Schema:</strong> LocalBusiness (RoofingContractor), FAQSchema, WebPage.</div>
          </div>
        </section>

        {/* D) FULL PAGE COPY BY SECTION */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">D) Full Page Copy</h2>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-slate-700 space-y-6">
            <div>
              <p className="font-bold border-b border-slate-100 mb-2">Hero Section</p>
              <p>"Trusted Roofing Experts in Deer Park, TX. Fast, reliable, and affordable roofing solutions tailored to your home."</p>
            </div>
            <div>
              <p className="font-bold border-b border-slate-100 mb-2">Services Section</p>
              <p>"From minor leaks to full storm restorations, we handle every aspect of your roof with precision and care."</p>
            </div>
            <div>
              <p className="font-bold border-b border-slate-100 mb-2">Offer Section</p>
              <p>"Claim Your Free 21-Point Roof Inspection + $500 Off Your Full Roof Replacement Today."</p>
            </div>
          </div>
        </section>

        {/* E) FAQ SECTION */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">E) FAQ Section</h2>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-slate-700 space-y-4">
             <p><strong>1. Insurance Claims?</strong> Yes, we provide full support for hail and storm damage claims.</p>
             <p><strong>2. Free Inspection?</strong> Yes, 100% free with a detailed structural report.</p>
             <p><strong>3. How Long?</strong> 1-2 days for most standard residential projects.</p>
             <p><strong>4. Licensed/Insured?</strong> Fully licensed and carry multi-million dollar general liability.</p>
             <p><strong>5. Areas?</strong> Serving Deer Park, Pasadena, La Porte, and Baytown.</p>
          </div>
        </section>

        {/* F) VISUAL EFFECTS & UI NOTES */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">F) Visual Effects & UI Notes</h2>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-slate-700">
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Sticky CTA:</strong> Mobile bottom bar stays fixed for thumb-driven conversion.</li>
              <li><strong>Hero Contrast:</strong> Dark overlay on background image to ensure text readability.</li>
              <li><strong>Hover Lift:</strong> Cards use `hover:shadow-xl` and subtle transform scaling.</li>
              <li><strong>Scroll Reveal:</strong> Using IntersectionObserver to fade-in sections as the user scrolls.</li>
              <li><strong>Micro-interactions:</strong> Button hover transitions and focus ring states for accessibility.</li>
            </ul>
          </div>
        </section>

        {/* G) LAUNCH CHECKLIST */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">G) Launch Checklist</h2>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-slate-700">
             <ul className="list-disc ml-5 space-y-2">
               <li>[ ] Verify Phone Link: Ensure `tel:8327569287` works on mobile devices.</li>
               <li>[ ] Content Verification: Confirm all "TBD" items are updated with client's real data.</li>
               <li>[ ] Mobile Responsiveness: Test on small screens (iPhone SE, Pixel).</li>
               <li>[ ] Google Business Profile: Ensure NAP (Name, Address, Phone) matches GBP exactly.</li>
               <li>[ ] Page Speed: Optimize images and minimize JS overhead.</li>
             </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Documentation;
