"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {

  
  const [daysToNowruz, setDaysToNowruz] = useState<number | null>(null);

  useEffect(() => {
    const calculateDaysToNowruz = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let nowruzDate = new Date(Date.UTC(currentYear, 2, 20));

      if (now > nowruzDate) {
        nowruzDate = new Date(Date.UTC(currentYear + 1, 2, 20));
      }

      return Math.ceil((nowruzDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    };

    setDaysToNowruz(calculateDaysToNowruz());
  }, []);

  return (
    <>
      <Head>
        <title>Discover Iran - A Journey Through Persian Heritage</title>
        <meta name="description" content="Explore the rich history, culture, and natural wonders of Iran" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Darker overlay */}
          <div className="relative h-full w-full bg-[url('/images/iran.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center text-white px-4">
                <h1 className="text-6xl font-bold mb-6">Discover Iran</h1>
                <p className="text-2xl mb-8 max-w-3xl mx-auto">
                  A journey through one of the world&apos;s oldest civilizations - where ancient history meets breathtaking landscapes
                </p>
                <div className="flex justify-center gap-4">
                  <Link href="#history" className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                    Explore Heritage
                  </Link>
                  <Link href="#natural-wonders" className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition">
                    Natural Wonders
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction & Countdown */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">The Heart of Persian Civilization</h2>
                <p className="text-lg mb-4 text-gray-300">
                  Iran, historically known as Persia, stands as one of the world&apos;s oldest continuous civilizations with a history spanning over 7,000 years. Located at the crossroads of Eastern and Western civilizations, Iran has played a pivotal role in connecting cultures, ideas, and trade throughout history.
                </p>
                <p className="text-lg text-gray-300">
                  From the magnificent ruins of Persepolis to the breathtaking mosques of Isfahan, from the snow-capped Alborz mountains to the vast Dasht-e Kavir desert, Iran offers a tapestry of experiences that capture both natural beauty and human ingenuity.
                </p>

              </div>
              <div className="bg-gray-900 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-center mb-4 text-white">Countdown to Nowruz</h3>
                <p className="text-center mb-6 text-gray-300">Persian New Year Celebration</p>
                <div className="flex justify-center">
                <Image 
                    src="/images/HaftSeen.jpg" 
                    alt="Nowruz Celebration" 
                    width={400} 
                    height={400} 
                    className="mx-auto rounded-lg p-2 shadow-inner"
                  />
                  </div>
                <div className="bg-gray-800 rounded-lg p-6 shadow-inner">
                  <div className="text-5xl font-bold text-center text-amber-500">
                    
                    {daysToNowruz}
                  </div>
                  <p className="text-center mt-2 text-gray-300">Days Remaining</p>
                </div>
                <div className="mt-6">
                  <p className="text-center text-gray-300">
                    Nowruz marks the first day of spring and the beginning of the year in the Persian calendar. It&apos;s celebrated on the vernal equinox, usually occurring on March 20 or 21.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History & Heritage */}
        <section id="history" className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">History & Heritage</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-800">
                <div className="h-64 bg-[url('/images/persepolis.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">Persepolis</h3>
                <p className="text-gray-300">
                Persepolis, also known as Takht-e Jamshid, was the ceremonial capital of the Achaemenid Empire, founded by Darius the Great in 518 BC. Located near Shiraz, Iran, it was a symbol of the empire’s power and grandeur. The site features massive stone columns, detailed carvings, and impressive palaces, reflecting the art and culture of ancient Persia. Every year during the Persian New Year (Nowruz), kings and visitors from all over the empire would gather at Persepolis to celebrate.
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-800">
                <div className="h-64 bg-[url('/images/Si-o-se-Pol.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">Si-o-se pol</h3>
                <p className="text-gray-300">
                si-o-se-pol, meaning “Bridge of Thirty-Three Arches,” is one of the most iconic historical landmarks in Isfahan, Iran. Built in 1602 during the Safavid dynasty, it stretches 297 meters (974 feet) across the Zayandeh River. The bridge was not only a passageway but also a gathering place for festivals and ceremonies. Its unique architecture and perfect symmetry make it a masterpiece of Persian engineering. At night, the illuminated arches reflect beautifully on the water, creating a magical view.
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-800">
                <div className="h-64 bg-[url('/images/ArgeBam.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white"> Arg-e Bam</h3>
                <p className="text-gray-300">
                  The Arg-e Bam, located in the city of Bam, Kerman province of southeastern Iran, is the largest adobe building in the world. The entire building was a large fortress containing the citadel, but because the citadel dominates the ruins, the entire fortress is now named Bam Citadel.
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link href="https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Iran" target='blank' className="inline-block bg-amber-600 text-black px-6 py-3 rounded-lg font-medium hover:bg-amber-500 transition">
                Explore More Historical Sites
              </Link>
            </div>
          </div>
        </section>

        {/* Persian Culture & Traditions */}
        <section id="culture" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Persian Culture & Traditions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800">
                <div className="h-48 bg-[url('/images/HaftSeen.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">Nowruz</h3>
                <p className="text-gray-300">
                  The Persian New Year celebration includes the Haft-Seen table setting, visiting family, and the ritual of house cleaning (khaneh tekani). Dating back over 3,000 years, it remains Iran&apos;s most important cultural celebration.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800">
                <div className="h-48 bg-[url('/images/yaldanight.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">Yalda Night</h3>
                <p className="text-gray-300">
                  The winter solstice celebration where families gather to eat pomegranates and watermelon, read poetry (especially Hafez), and stay awake through the longest night of the year to welcome the victory of light over darkness.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800">
                <div className="h-48 bg-[url('/images/PersianPoetry.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">Persian Poetry</h3>
                <p className="text-gray-300">
                  The works of Hafez, Rumi, Ferdowsi, and Sa&apos;adi form the cornerstone of Persian cultural identity. The Shahnameh (Book of Kings) by Ferdowsi preserved the Persian language during times of Arabic influence.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800">
                <div className="h-48 bg-[url('/images/caligraphy.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">Calligraphy & Art</h3>
                <p className="text-gray-300">
                  Persian calligraphy evolved into various styles including Nasta&apos;liq and Shekasteh. Miniature paintings, depicting scenes from Persian literature and history, represent another significant Persian artistic tradition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Iranian Cuisine */}
        <section id="cuisine" className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Iranian Cuisine</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">A Culinary Journey</h3>
                <p className="text-lg mb-4 text-gray-300">
                  Iranian cuisine reflects the country&apos;s rich history, diverse climate, and cultural exchanges along the Silk Road. Characterized by skillful combinations of herbs, spices, fruits, and rice, Persian cooking offers a sophisticated balance of sweet and sour, spicy and subtle.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">✓</span> 
                    <strong>Kebabs:</strong> Various styles including Koobideh, Joojeh, and Barg
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">✓</span> 
                    <strong>Khoresh:</strong> Stews like Ghormeh Sabzi and Fesenjan
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">✓</span> 
                    <strong>Rice Dishes:</strong> Tahdig, Tahchin, and various Polo dishes
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">✓</span> 
                    <strong>Desserts:</strong> Saffron ice cream, Faloodeh, and Baklava
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden h-48 bg-[url('/images/Ghormeh-Sabzi.jpg')] bg-cover bg-center"></div>
                <div className="rounded-lg overflow-hidden h-48 bg-[url('/images/Zereshk-Polo-Morgh-4-scaled.jpg')] bg-cover bg-center"></div>
                <div className="rounded-lg overflow-hidden h-48 bg-[url('/images/tah-dig.jpeg')] bg-cover bg-center"></div>
                <div className="rounded-lg overflow-hidden h-48 bg-[url('/images/fesenjan.JPG')] bg-cover bg-center"></div>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg shadow-md border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">Featured Recipe: Ghormeh Sabzi</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4 text-gray-300">
                    Ghormeh Sabzi, often considered Iran&apos;s national dish, is a flavorful herb stew typically served with rice. Its unique taste comes from a blend of herbs, kidney beans, and dried limes.
                  </p>
                  <h4 className="font-bold text-lg mb-2 text-white">Key Ingredients:</h4>
                  <ul className="list-disc pl-5 mb-4 text-gray-300">
                    <li>Fresh herbs (parsley, cilantro, fenugreek, chives)</li>
                    <li>Lamb or beef</li>
                    <li>Red kidney beans</li>
                    <li>Dried limes (limoo amani)</li>
                    <li>Turmeric and other spices</li>
                  </ul>
                  <Link href="https://www.themediterraneandish.com/ghormeh-sabzi/" target='blank'  className="inline-block bg-amber-600 text-black px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition">
                    View Full Recipe
                  </Link>
                </div>
                <div className="h-64 bg-[url('/images/ghorme2.jpg')] bg-cover bg-center rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Art & Architecture */}
        <section id="art" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Art & Architecture</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="col-span-full md:col-span-1">
                <div className="bg-gray-900 p-6 rounded-lg shadow-md h-full border border-gray-800">
                  <h3 className="text-2xl font-bold mb-4 text-white">Persian Design Philosophy</h3>
                  <p className="text-lg mb-4 text-gray-300">
                    Persian architecture and art are characterized by geometric patterns, symmetry, and ornate details that reflect mathematical precision and cosmic harmony.
                  </p>
                  <p className="text-lg text-gray-300">
                    The concepts of paradise (the Persian word &quot;pardis&quot; is the root of &quot;paradise&quot;) influenced garden design, while Islamic geometric patterns and calligraphy became integral to architectural decoration after the 7th century.
                  </p>
                </div>
              </div>
              <div className="col-span-full md:col-span-2">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-[url('/images/nasir.jpg')] bg-cover bg-center rounded-lg"></div>
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-end p-4">
                      <div className="text-white">
                        <h4 className="font-bold text-lg">Nasir al-Mulk Mosque</h4>
                        <p>Shiraz, Iran</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-[url('/images/naghsh.jpeg')] bg-cover bg-center rounded-lg"></div>
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-end p-4">
                      <div className="text-white">
                        <h4 className="font-bold text-lg">Naqsh-e Jahan Square</h4>
                        <p>Isfahan, UNESCO World Heritage Site</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">The Art of Persian Carpets</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="h-64 bg-[url('/images/carpet.jpg')] bg-cover bg-center rounded-lg"></div>
                  <div>
                    <p className="text-lg mb-4 text-gray-300">
                      Persian carpets represent one of Iran&apos;s most distinguished art forms, with a history dating back over 2,500 years. Each region develops distinct patterns, colors, and techniques.
                    </p>
                    <p className="text-lg mb-4 text-gray-300">
                      Notable styles include Tabriz, Isfahan, Kerman, and Qom carpets, each with unique characteristics reflecting local traditions and materials.
                    </p>
                    <Link href="https://letsgopersian.com/blog/the-history-of-persian-carpets-and-their-influence-on-world-culture-and-art/" className="inline-block bg-amber-600 text-black px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition">
                      Learn About Carpet Traditions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Natural Wonders */}
        <section id="natural-wonders" className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Natural Wonders of Iran</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-800">
                <div className="h-72 bg-[url('/images/alborz.jpeg')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Mountains</h3>
                  <p className="text-gray-300 mb-4">
                    The Alborz Mountains in northern Iran feature Mount Damavand, the highest peak in the Middle East at 5,610m. In western Iran, the Zagros mountain range extends from Turkey to the Strait of Hormuz, creating diverse ecological zones.
                  </p>
                  <Link href="https://en.wikipedia.org/wiki/List_of_mountains_in_Iran" target='blank' className="text-amber-500 hover:underline">Explore Iran&apos;s peaks →</Link>
                </div>
              </div>
              <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-800">
                <div className="h-72 bg-[url('/images/dashtelut.jpg')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Deserts</h3>
                  <p className="text-gray-300 mb-4">
                    The Dasht-e Lut (Lut Desert) is one of the hottest places on Earth and features remarkable formations created by wind erosion. The Dasht-e Kavir (Great Salt Desert) covers a large area in the Iranian plateau with salt marshes and mud flats.
                  </p>
                  <Link href="https://en.wikipedia.org/wiki/Dasht-e_Lut" target='blank' className="text-amber-500 hover:underline">Discover desert landscapes →</Link>
                </div>
              </div>
              <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-800">
                <div className="h-72 bg-[url('/images/hirc.jpg')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Forests</h3>
                  <p className="text-gray-300 mb-4">
                    The Hyrcanian Forests along the southern shores of the Caspian Sea are ancient woodland ecosystems dating back 25-50 million years. These lush temperate forests contain unique biodiversity and are recognized as a UNESCO World Heritage site.
                  </p>
                  <Link href="https://en.wikipedia.org/wiki/Hyrcanian_forests" target='blank' className="text-amber-500 hover:underline">Journey through ancient woodlands →</Link>
                </div>
              </div>
              <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-800">
                <div className="h-72 bg-[url('/images/kish.webp')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Islands & Beaches</h3>
                  <p className="text-gray-300 mb-4">
                    Kish Island in the Persian Gulf attracts visitors with its coral reefs and beaches, while Qeshm Island, the largest in the Persian Gulf, features the UNESCO-protected Qeshm Geopark with unique geological formations including salt caves and mangrove forests.
                  </p>
                  <Link href="https://en.wikipedia.org/wiki/List_of_islands_of_Iran" target='blank' className="text-amber-500 hover:underline">Explore coastal Iran →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-12 border-t border-gray-800">
          
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              {/* Use a static year to avoid hydration mismatch */}
              <p>&copy; 2025 Discover Iran. All rights reserved.</p>
            </div>
          
        </footer>
      </main>
    </>
  );
}
