import { Zap, Radio, Network, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src="images/ETEL-CI-HTA-Image3.jpg"
            alt="Electric power lines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-500/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-[calc(85vh-88px)] flex items-center">
          <motion.div
            className="text-white max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              Expert en solutions électriques et télécommunications
            </h1>
            <p className="text-xl mb-8">
              Leader dans le secteur de l'électricité en Côte d'Ivoire, nous
              proposons une expertise complète en électricité HTA/BTA, HTB/HTA
              et télécommunications.
            </p>
            <motion.a
              href="/services"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-colors inline-flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nos Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nos Domaines d'Expertise
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Zap,
                title: "Électricité",
                image: "images/ElectriciteHTBHTABT.jpg",
              },
              {
                icon: Radio,
                title: "Téléconduite des réseaux",
                image: "images/ETEL-CI-Teleconduite-Image.jpg",
              },
              {
                icon: Network,
                title: "Télécommunication",
                image: "images/ETEL-CI-Telecom-Image.jpg",
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                className="relative bg-gray-50 rounded-xl hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="absolute top-0 left-0 w-full bg-black/60 text-white p-4 z-10 flex items-center space-x-4">
                  {service.icon && (
                    <service.icon className="h-8 w-8 text-green-500" />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm">
                      Solutions professionnelles adaptées à vos besoins
                      spécifiques.
                    </p>
                  </div>
                </div>
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Landscape Block */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="images/ETEL-CI-HQ-edited.jpg"
              alt="ETEL-CI"
              className="rounded-lg shadow-lg w-[80%]" // Reduce width by 20%
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              À Propos de Nous
            </h3>
            <p className="text-gray-700">
              ETEL-CI est une entreprise dont le domaine d’activité gravite
              principalement autour de 5 axes :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>L’électricité HTA/BTA</li>
              <li>L’électricité HTB/HTA</li>
              <li>La téléconduite des réseaux électriques</li>
              <li>La télécommunication</li>
              <li>L’automatisme industriel et l’intégration d’équipement</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Jouant un rôle majeur dans le secteur de l’électricité en Côte
              d’Ivoire, nous nous appuyons sur notre expertise et nos
              parteniariats établis avec des entreprises européennes opérant en
              Afrique, ainsi que des entreprises africaines productrices et
              distributrices d’électricité de la sous-région.
            </p>
          </div>
        </div>
      </div>
      {/* Certificats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Certificats
          </motion.h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Certificat pour expertise tous travaux d’équipement de
                télécommunication d’ABB Suisse depuis Juin 2005
              </h3>
              <p className="text-gray-700 mt-2">
                Par ce certificat, ETEL-CI est reconnue comme une entreprise
                experte dans les études, les travaux d’installation, de
                programmation et de mise en service des CPL, de terminaux
                optiques et d’autocoms du fabricant ABB.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Certificat RTU560 ABB Allemagne de type B depuis Juin 2012
              </h3>
              <p className="text-gray-700 mt-2">
                Par ce certificat, ETEL-CI est autorisée à intégrer, installer
                et mettre en service des RTU dans son centre en Côte d’Ivoire
                pour des projets de RTU pouvant aller jusqu’à 500 000 US
                dollars.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nos Partenaires
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { image: "logos/siemens-logo.png", alt: "Siemens" },
              { image: "logos/hitachi-logo.png", alt: "Hitachi" },
              { image: "logos/sifang-logo.png", alt: "Sifang" },
              { image: "logos/ge-logo.png", alt: "GE" },
              { image: "logos/LogoPowercom101.png", alt: "Powercom" },
            ].map((logo) => (
              <motion.div
                key={logo.alt}
                className="flex justify-center items-center bg-white rounded-xl shadow-lg p-4"
                variants={item}
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="w-full h-auto max-h-32 object-contain" // Increased max-h value
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nos Clients
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { image: "logos/cie-logo.png", alt: "CIE" },
              { image: "logos/logo-cienergies.png", alt: "Cienergies" },
              { image: "logos/logo-orange.png", alt: "Orange" },
              { image: "logos/logo-mtn.png", alt: "MTN" },
              { image: "logos/logo-ci-telecom.png", alt: "CI Telecom" },
              { image: "logos/logo-bouygues.png", alt: "Bouygues" },
              { image: "logos/palm-ci-logo.png", alt: "Palm CI" },
              { image: "logos/sipef-ci-logo.png", alt: "Sipef CI" },
              { image: "logos/electel-logo.png", alt: "Electel" },
              { image: "logos/sonabel-logo.png", alt: "Sonabel" },
              { image: "logos/sinhydro-logo.png", alt: "Sinhydro" },
              {
                image: "logos/prestige-ciment-logo.jpeg",
                alt: "Prestige Ciment",
              },
            ].map((logo) => (
              <motion.div
                key={logo.alt}
                className="flex justify-center items-center bg-white rounded-xl shadow-lg p-4"
                variants={item}
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="w-full h-auto max-h-32 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Couverture Géographique Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Couverture géographique
          </motion.h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Burkina Faso
              </h3>
              <p className="text-gray-700 mt-2">
                Un bureau projet à Ouagadougou en plus de la filiale
                ETELCOM-FASO.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Nigéria</h3>
              <p className="text-gray-700 mt-2">
                Un bureau projet à Abuja dans le cadre du projet GRID
                Communication et d’autres.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Ghana</h3>
              <p className="text-gray-700 mt-2">
                Un bureau projet à Accra dans le cadre du projet VRA SCADACOM et
                d’autres.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
