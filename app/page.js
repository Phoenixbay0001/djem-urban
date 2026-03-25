"use client";


import { useEffect, useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1800);
  }, []);

  return (
    <main className="bg-black text-white">

      {loading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            DJEM
          </motion.div>
        </div>
      )}

      {!loading && (
        <>
          <section className="h-screen flex items-center justify-center relative text-center">
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
              className="absolute inset-0 w-full h-full object-cover scale-110"/>
            <div className="absolute inset-0 bg-black/70"/>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10"
            >
              <h1 className="text-6xl mb-6">Декор нового уровня</h1>
              <a href="https://wa.me/77077787009"
                 className="bg-white text-black px-6 py-3 rounded-xl">
                Обсудить проект
              </a>
            </motion.div>
          </section>

          <section className="max-w-7xl mx-auto px-6 py-32">
            <h2 className="text-4xl mb-12">Проекты</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1,2,3].map(i => (
                <motion.img key={i}
                  whileHover={{ scale: 1.05 }}
                  src={`https://source.unsplash.com/random/800x600?event${i}`}
                  className="rounded-2xl"/>
              ))}
            </div>
          </section>

          <section className="text-center py-32">
            <h2 className="text-4xl mb-6">Готовы к вау-проекту?</h2>
            <a href="https://wa.me/77077787009"
               className="bg-white text-black px-8 py-4 rounded-xl">
              Написать
            </a>
          </section>
        </>
      )}

    </main>
  );
}
