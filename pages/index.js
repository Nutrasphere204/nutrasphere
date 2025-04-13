
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">NutraSphere</h1>
        <p className="mt-2 text-lg">Holistic Diet Solutions by Sneha Parolekar</p>
      </header>

      <section className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        <div className="w-full md:w-1/3 text-center">
          <Image
            src="/sneha-parolekar.jpg"
            alt="Sneha Parolekar"
            width={250}
            height={250}
            className="rounded-full object-cover mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">Sneha Parolekar</h2>
          <p>Clinical Nutritionist</p>
        </div>

        <div className="w-full md:w-2/3 text-left space-y-4">
          <h3 className="text-2xl font-bold text-green-600">Career Summary</h3>
          <p>
            Sneha has 7+ years of experience in the healthcare domain. She has worked with
            multispeciality hospitals and now offers online consultations covering lifestyle diseases,
            ICU patients, pre & post-op care, and fitness goals.
          </p>

          <h3 className="text-xl font-semibold text-green-600">Contact</h3>
          <ul className="list-disc list-inside">
            <li>Mobile: +91 72309 55486</li>
            <li>Email: snehabnw@gmail.com</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
