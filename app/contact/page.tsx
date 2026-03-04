import Header from '../components/Header'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Lakeview School District. We\'d love to hear from you about admissions, programs, or school activities.',
  keywords: ['Contact Lakeview School District', 'Support', 'Help', 'Get in Touch'],
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-primary-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Get in Touch
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-base md:text-lg text-gray-600">
              Have questions about admissions, programs, or school activities? We&#39;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-md shadow-primary-200/50 p-8">
              <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">admissions@lakeviewk12.edu</p>
                    <p className="text-gray-600">info@lakeviewk12.edu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(951) 555-0125</p>
                    <p className="text-sm text-gray-500">Monday to Friday, 7:30 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      1500 Lakeview Drive<br />
                      Lakeview Campus<br />
                      Lakeview, CA 92501
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 7:30 AM - 4:00 PM<br />
                      Summer Office: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-md shadow-primary-200/50 p-8">
              <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">Send us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-primary-50/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-primary-50/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-primary-50/50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-primary-50/50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-primary-50/50"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-2xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200 font-bold text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 md:mt-12 bg-accent-400 rounded-2xl p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold font-display text-primary-900 mb-4">Need Immediate Help?</h2>
              <p className="text-sm md:text-base text-primary-800 mb-6">
                Check out our documentation and community resources for quick answers to common questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-900 text-primary-900 rounded-2xl hover:bg-primary-900 hover:text-white transition-colors duration-200 font-bold"
                >
                  View Documentation
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-900 text-white rounded-2xl hover:bg-primary-800 transition-colors duration-200 font-bold"
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
