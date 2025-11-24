import { PageProps } from '@/types/Noticias';
import { usePage } from '@inertiajs/react';
import Layout from '@/context/Layout';
import { motion } from "framer-motion";

const Patrocinio = () => {
  const gifs = [
    "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif",
    "https://media.giphy.com/media/l0HlQ7LRal8Rb8i3O/giphy.gif",
    "https://media.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif",
    "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
    "https://media.giphy.com/media/3o6Zt8zb1P4rXKJ0i8/giphy.gif",
    "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
    "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif",
    "https://media.giphy.com/media/3o6ZsYm5RBkbbX5dRe/giphy.gif",
    "https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif",
    "https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif",
  ];

  return (
    <Layout>
      <div className="py-16 px-6 max-w-7xl mx-auto space-y-16">

        {/* Sección Hero */}
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900">Nuestros Patrocinadores</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gracias al apoyo de nuestros patrocinadores, logramos impulsar proyectos innovadores 
            y generar experiencias únicas para nuestra comunidad. 🚀  
          </p>
          <motion.img 
            src="https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif" 
            alt="Publicidad animada"
            className="mx-auto rounded-xl shadow-lg max-h-64"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Sección de GIFs en grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Marcas que confían en nosotros</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {gifs.map((gif, idx) => (
              <motion.div
                key={idx}
                className={`rounded-2xl overflow-hidden shadow-lg bg-white 
                  ${idx % 3 === 0 ? "col-span-2 row-span-2" : ""}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src={gif}
                  alt={`Patrocinio ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sección con Texto + Imagen */}
        <motion.div 
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold">¿Por qué patrocinar con nosotros?</h3>
            <p className="text-gray-700">
              Ofrecemos una plataforma única para que tu marca llegue a miles de personas, 
              con visibilidad en proyectos, eventos y medios digitales.  
              Tu patrocinio no es solo publicidad, es formar parte de algo grande.  
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Mayor visibilidad de tu marca</li>
              <li>Alianzas estratégicas</li>
              <li>Impacto positivo en la comunidad</li>
            </ul>
          </div>
          <motion.img 
            src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
            alt="Gif publicitario"
            className="rounded-2xl shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center py-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">¡Conviértete en patrocinador!</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Tu marca puede estar aquí, llegando a miles de personas y destacándose en cada evento.
          </p>
          <a 
            href="#contacto" 
            className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
          >
            Contáctanos
          </a>
        </motion.div>

      </div>
    </Layout>
  );
};

export default Patrocinio;
