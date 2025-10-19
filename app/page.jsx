import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Star, MapPin, Building2, Hammer, Bricks, ShieldCheck, Clock, Mail } from \"lucide-react\";

export default function MasonrySite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* TOP BAR */}
      <div className="w-full bg-black text-white text-xs py-2">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span>FAMILY OWNED AND OPERATED · PROUDLY SERVING ONTARIO SINCE 2016</span>
          <a href="tel:+14377756781" className="inline-flex items-center gap-2"><Phone className="w-3.5 h-3.5"/> 437‑775‑6781</a>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-red-600 grid place-items-center text-white font-bold">TMR</div>
            <div className="leading-tight">
              <h1 className="text-xl font-semibold">TMR MASONRY</h1>
              <p className="text-xs text-gray-500">Premium Masonry Services</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#guarantees" className="hover:text-red-600">Guarantees</a>
            <a href="#services" className="hover:text-red-600">Services</a>
            <a href="#reviews" className="hover:text-red-600">Reviews</a>
            <a href="#quote" className="hover:text-red-600">Get a Quote</a>
          </nav>
          <Button className="rounded-2xl bg-red-600 hover:bg-red-700"><Phone className="w-4 h-4 mr-2"/> Click To Call</Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-[1.2fr_.8fr] gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 text-yellow-600 mb-2">
              <Star className="w-4 h-4"/><Star className="w-4 h-4"/><Star className="w-4 h-4"/><Star className="w-4 h-4"/><Star className="w-4 h-4"/>
              <span className="text-xs text-gray-600">Rated 5/5 by homeowners across Ontario</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">Fast, Reliable, Premium Masonry Services In Toronto</h2>
            <p className="text-gray-600 mb-6">Serving the Greater Toronto Area with fast quotes, code‑compliant repairs, and guaranteed start times.</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "Free On‑Site Estimate Within 24 Hours",
                "$300 7‑Day Job Start Guarantee",
                "$250 Clean Site Guarantee",
                "2‑Year Labor Warranty",
                "Pay Only When You’re 100% Satisfied",
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-600"/>{t}</div>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="#quote"><Button className="rounded-2xl bg-red-600 hover:bg-red-700">Get Your Free Quote</Button></a>
              <a href="tel:+14377756781"><Button variant="outline" className="rounded-2xl"><Phone className="w-4 h-4 mr-2"/> Click To Call</Button></a>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-inner">
            {/* TODO: replace src with your hosted image URL */}
            <img src="/images/hero-brick.jpg" alt="Premium brick facade by TMR Masonry" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold">10+</div>
            <div className="text-sm text-gray-600">Years of Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold">1000+</div>
            <div className="text-sm text-gray-600">Masonry Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold">200+</div>
            <div className="text-sm text-gray-600">Referrals</div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section id="guarantees" className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-6">Our Promise To You — Backed By Real Guarantees</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {icon: <ShieldCheck className="w-5 h-5"/>, title: "Fully Licensed & Insured", desc: "WSIB coverage and code‑compliant workmanship."},
            {icon: <Clock className="w-5 h-5"/>, title: "7‑Day Job Start", desc: "Or we pay you $300."},
            {icon: <Hammer className="w-5 h-5"/>, title: "2‑Year Warranty", desc: "Labor warranty on all workmanship."},
            {icon: <Bricks className="w-5 h-5"/>, title: "$250 Clean‑Site", desc: "We leave your property spotless — guaranteed."},
          ].map((g, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-5">
                <div className="w-9 h-9 rounded-lg bg-red-50 text-red-700 grid place-items-center mb-3">{g.icon}</div>
                <h4 className="font-semibold mb-1">{g.title}</h4>
                <p className="text-sm text-gray-600">{g.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-2xl font-semibold mb-6">Our Services</h3>
          <p className="text-gray-600 mb-6">Explore our full specialized range of masonry services for your home.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {title: "Brick Repairs & Restoration Toronto", desc: "Clean, durable repairs for cracked or loose brick — done right the first time."},
              {title: "Professional Chimney Repairs In Toronto", desc: "Built to withstand Canadian winters — we repair and rebuild chimneys with safety, structure."},
              {title: "Tuckpointing & Mortar Repointing", desc: "Match existing brick and mortar for seamless results that last."},
              {title: "Lintel & Sill Replacement", desc: "Structural replacements to prevent sagging and moisture intrusion."},
            ].map((s, i) => (
              <Card key={i} className="rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-white grid place-items-center text-gray-400"><img src="/images/service.jpg" alt="Masonry service" className=\"w-full h-full object-cover\"/></div>
                  <div className="p-5">
                    <h4 className="font-semibold text-lg mb-1">{s.title}</h4>
                    <p className="text-sm text-gray-600">{s.desc}</p>
                    <a href="#quote" className="inline-block mt-3"><Button variant="link" className="px-0">Learn More →</Button></a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="G" className="w-5 h-5"/>
          <div className="flex items-center gap-1 text-yellow-600"><Star className="w-4 h-4"/><Star className="w-4 h-4"/><Star className="w-4 h-4"/><Star className="w-4 h-4"/><Star className="w-4 h-4"/></div>
          <span className="text-sm text-gray-600">Rated 5/5 by homeowners across Ontario</span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {name:"Patrick H.", city:"Mississauga", text:"We had our chimney rebuilt and some tuckpointing done... showed up on time, worked efficiently, matched the brick and mortar perfectly. Super happy and would recommend."},
            {name:"Malcolm B.", city:"Toronto", text:"From the first phone call we felt confident... the work was done with great attention to detail. Chimney looks brand new and blends right in."},
          ].map((r, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-600 text-2xl leading-none">“</span>
                  <Badge variant="outline" className="rounded-full text-yellow-700 border-yellow-200 flex items-center gap-1"><Star className="w-3 h-3"/>5/5</Badge>
                </div>
                <p className="text-sm text-gray-700 mb-4">{r.text}</p>
                <div className="text-sm font-medium">{r.name} <span className="text-gray-500">· {r.city}</span></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Get Your Free Quote</h3>
            <p className="text-gray-600 mb-4">Fill out the form to request your free on‑site assessment.</p>
            <form className="space-y-3" action="mailto:tmrmasonry@gmail.com" method="post" encType="text/plain">
              <input type="hidden" name="_subject" value="New Quote Request — TMR Masonry" />
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="First name" className="rounded-2xl"/>
                <Input placeholder="Last name" className="rounded-2xl"/>
              </div>
              <Input placeholder="Company name (optional)" className="rounded-2xl"/>
              <Input placeholder="Email" type="email" className="rounded-2xl"/>
              <Input placeholder="Phone" className="rounded-2xl"/>
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="Street address" className="rounded-2xl"/>
                <Input placeholder="Unit / Apt (optional)" className="rounded-2xl"/>
                <Input placeholder="City" className="rounded-2xl"/>
                <Input placeholder="Province" className="rounded-2xl"/>
                <Input placeholder="Postal code" className="rounded-2xl"/>
                <div></div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Which services are you interested in?</label>
                <Select>
                  <SelectTrigger className="rounded-2xl mt-1"><SelectValue placeholder="Choose an option"/></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brick">Brick Repairs & Restoration</SelectItem>
                    <SelectItem value="chimney">Chimney Repairs / Rebuild</SelectItem>
                    <SelectItem value="tuckpointing">Tuckpointing / Repointing</SelectItem>
                    <SelectItem value="lintel">Lintel / Sill Replacement</SelectItem>
                    <SelectItem value="other">Other Masonry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder="Please provide as much information as you can" className="rounded-2xl"/>
              <Button className="rounded-2xl bg-red-600 hover:bg-red-700">Submit</Button>
              <p className="text-xs text-gray-500">This demo form does not send data. Connect to your CRM (Jobber, HubSpot, Airtable) or email service.</p>
            </form>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm"><MapPin className="w-4 h-4"/> Greater Toronto Area</div>
            $1
            <div className=\"flex items-center gap-2 text-sm\"><Mail className=\"w-4 h-4\"/> tmrmasonry@gmail.com</div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                {title:"Clean, Respectful Work Areas", desc:"Backed by our $250 Clean‑Site Guarantee."},
                {title:"Same‑Day Quotes", desc:"Most estimates delivered within 24 hours."},
                {title:"You Don’t Pay Until 100% Satisfied", desc:"No risk, no stress."},
                {title:"2‑Year Labor Warranty", desc:"Quality workmanship that lasts."},
              ].map((f, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-1">{f.title}</h4>
                    <p className="text-xs text-gray-600">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" className="border-y">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h3 className="text-2xl font-semibold mb-4">Service Areas</h3>
          <p className="text-gray-600 mb-4">We proudly serve the entire Greater Toronto Area (GTA) and beyond.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {[
              "Toronto (Downtown, Etobicoke, North York, Scarborough)",
              "Mississauga, Brampton, Caledon",
              "Vaughan, Richmond Hill, Markham",
              "Oakville, Burlington, Milton",
              "Pickering, Ajax, Whitby, Oshawa",
              "Aurora, Newmarket, King City"
            ].map((a, i) => (
              <div key={i} className="p-3 rounded-xl bg-gray-50">{a}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} TMR Masonry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-red-600">Privacy</a>
            <a href="#" className="hover:text-red-600">Policies</a>
            <a href="#" className="hover:text-red-600">Warranty</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
