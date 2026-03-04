'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { GraduationCap, BookOpen, Music, Palette, Trophy, Heart, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const schoolLifeItems = [
  { icon: GraduationCap, label: 'Academics', color: 'bg-primary-500', description: 'Rigorous K-12 curriculum' },
  { icon: BookOpen, label: 'Library', color: 'bg-primary-600', description: 'Modern learning center' },
  { icon: Music, label: 'Music', color: 'bg-accent-500', description: 'Band, choir & orchestra' },
  { icon: Palette, label: 'Arts', color: 'bg-primary-400', description: 'Visual arts & theater' },
  { icon: Trophy, label: 'Athletics', color: 'bg-accent-600', description: '20+ sports teams' },
  { icon: Heart, label: 'Community', color: 'bg-primary-700', description: 'Service & leadership' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&fit=crop', alt: 'Students collaborating in classroom' },
  { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80&fit=crop', alt: 'Interactive classroom learning' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80&fit=crop', alt: 'School activities and clubs' },
  { src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80&fit=crop', alt: 'Kids engaged in learning' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-primary-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* School Life Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Explore
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              School Life at Lakeview
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From academics to athletics, discover all the ways our students learn, grow, and thrive.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {schoolLifeItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className={`${item.color} w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
              Gallery
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Moments from Our Campus
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See our students in action across classrooms, labs, sports fields, and creative spaces.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl aspect-square group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/30 transition-colors duration-300 flex items-end">
                  <p className="text-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Large Footer */}
      <footer className="bg-primary-950 text-white">
        {/* Top footer with info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-accent-300" />
                </div>
                <span className="text-2xl font-extrabold font-display text-white">
                  Lakeview School District
                </span>
              </div>
              <p className="text-primary-300 mb-6 max-w-md leading-relaxed">
                Nurturing curiosity, building character, and preparing students for a lifetime of learning since 2005. Our K-12 programs inspire every student to reach their full potential.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Youtube, label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5 text-primary-200" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-lg mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Teachers', href: '/teachers' },
                  { label: 'Programs', href: '/programs' },
                  { label: 'Events', href: '/events' },
                  { label: 'News', href: '/news' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-primary-300 hover:text-accent-400 transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-lg mb-5">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span className="text-primary-300">1500 Lakeview Drive<br />Lakeview, CA 92501</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-primary-300">(951) 555-0125</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-primary-300">info@lakeviewk12.edu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-primary-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-400 text-sm">
              &copy; {new Date().getFullYear()} Lakeview School District - K-12. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-400">
              <a href="#" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
