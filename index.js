
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 font-sans">
      <header className="flex items-center justify-between p-6 shadow-md bg-green-100">
        <div className="text-2xl font-bold">NutraSphere</div>
        <nav className="space-x-6 text-green-800">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#services" className="hover:text-green-600">Services</a>
          <a href="#appointment" className="hover:text-green-600">Book Appointment</a>
          <a href="#" className="hover:text-green-600">Blog</a>
          <a href="#" className="hover:text-green-600">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Your Holistic Health Journey Starts Here</h1>
        <button className="bg-green-700 text-white px-6 py-3 rounded-xl text-lg hover:bg-green-800 transition-all">
          Book Now
        </button>
      </main>

      <section id="about" className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">About Sneha Parolekar</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src="/sneha-parolekar.jpg" 
              alt="Sneha Parolekar" 
              className="rounded-2xl w-64 h-auto shadow-md"
            />
            <div className="text-left text-lg">
              <p className="mb-4">Sneha Parolekar is a Clinical Nutritionist with 7 years of experience in the healthcare domain. She has worked with several multispeciality hospitals including Shreeyas Hospital, Deogaonkar Hospital, Siddhivinay Hospital, and Krupasai Hospital in Nasik. She currently provides personalized online nutrition counseling services to clients across the globe.</p>
              <p className="mb-4">Sneha holds an M.Sc. in Health Science & Nutrition from the University of Pune, a PG diploma in Diabetic Education from K.E.M. Hospital, and a B.Sc. in Food Science & Nutrition from SNDT University. Her clinical expertise covers therapeutic nutrition, lifestyle disorders, ICU care, and fitness management.</p>
              <p>In addition to her core work, she has completed specialized training in Total Parenteral Nutrition and conducted a KAP study on breastfeeding and weaning practices for her MSc thesis.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-green-50 py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-medium">Personalized Diet Plans</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-medium">Weight Management</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-medium">Therapeutic Nutrition</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-medium">Sports Nutrition</h3>
          </div>
        </div>
      </section>

      <section id="appointment" className="bg-green-100 py-12 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Book Your Appointment</h2>
        <p className="mb-4 text-lg">Schedule your consultation with our expert dietitian and start your wellness journey today.</p>
        <button className="bg-green-700 text-white px-6 py-3 rounded-xl text-lg hover:bg-green-800 transition-all">
          Schedule Now
        </button>
      </section>

      <footer className="text-center py-6 bg-green-100 mt-16">
        <p className="text-green-700">© 2025 NutraSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}
