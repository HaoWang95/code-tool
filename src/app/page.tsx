import { AppDescription, AppTitle, Section } from "./lib/constant";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: AppTitle,
  description: AppDescription
}

export default function Home() {
  return (
    <>
      {/* Hero Section with Gradient */}
      <section className="text-center py-20 bg-gradient-to-r from-teal-300 via-teal-400 to-teal-600 text-white">
        <h1 className="text-5xl font-bold mb-4">{AppTitle}</h1>
        <p className="text-lg mb-8">{AppDescription}</p>
        <Link
          href={"/models"}
          className="bg-white hover:bg-gray-100 text-teal-600 font-bold py-2 px-4 rounded"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Section.map((subSection, index) => (
              <div key={`${subSection.feature}-${index}`} className="text-center">
                <h3 className="text-xl mb-2">{subSection.feature}</h3>
                <p className="text-gray-600">{subSection.Description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Gradient */}
      <footer className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white text-center py-4">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
    </>
  );
}
