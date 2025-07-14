import React from 'react';
import { Zap, Building2, Radio, Network, Cpu, CheckCircle2 } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Zap,
      title: "Électricité HTB/HTA",
      description: "Solutions pour les réseaux haute tension et postes de transformation.",
      image: "images/shutterstock_2295698673.jpg",
      features: [
        "Travaux HTA dans les postes HTB",
        "Travaux HTA liés aux postes sources",
        "Travaux de raccordement éléctriques aux postes sources (lignes, postes sources, postes de sectionnements, postes de livraisons)",
        "Études de réseaux complexes"
      ]
    },
    {
      icon: Building2,
      title: "Électricité HTA/BTA",
      description: "Installation et maintenance des réseaux électriques moyenne et basse tension.",
      image: "images/ETEL-CI-HTA-Image2.jpg",
      features: [
        "Gestion de projets d’électrification rurale",
        "Gestion de projets d’extension de réseaux et de construction de postes HTA/BTA",
        "Gestion de projets d’électricité industrielle",
        "Installation et mise en service de groupes électrogènes",
        "Installation de tableau généraux basse tension (TGBT)",
        "Maintenance préventive et corrective",
      ]
    },
    {
      icon: Network,
      title: "Télécommunication",
      description: "Installation et mise en service d’équipements de télécommunication à la demande de sociétés d’énergie.",
      image: "images/ETEL-CI-Telecom-Image9.jpg",
      features: [
        "Réseaux fibre optique",
        "Systèmes de communication",
        "Infrastructure réseau"
      ]
    },
    {
      icon: Radio,
      title: "Téléconduite des réseaux",
      description: "Systèmes de supervision et contrôle à distance des installations.",
      image: "images/ETEL-CI-Teleconduite.jpg",
      features: [
        "Systèmes SCADA",
        "Installation et mise en service de CCN (Côntrole Commande Numerique) des postes électriques",
        "Installation et mise en service de toute la gamme RTU de l’entreprise ABB",
        "Automatisation des réseaux",
        "Surveillance en temps réel",
        "Gestion des alarmes"
      ]
    },
    {
      icon: Cpu,
      title: "ETEL-CI Industries",
      description: "Solutions d'automatisation pour l'industrie moderne.",
      image: "images/pexels-manuel-geissinger-325229.jpg",
      features: [
        "Conception et montage d’armoires de télécommunication",
        "Conception et montage d’armoires de contrôle commande",
        "Appui à la réalisation de projets de télécommunication",
        "Appui à la réalisation de projets de téléconduite",
        "Gestion de projets SCADA EMS et DMS"
      ]
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h1>
          <p className="text-xl text-gray-600">
            Des solutions complètes pour vos besoins en électricité et télécommunications
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
                <service.icon className="h-16 w-16 text-green-500 mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={`Image for ${service.title}`}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Section displayed once at the end */}
        <div className="mt-16 bg-gradient-to-br from-blue-900 to-green-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Pourquoi choisir nos services ?</h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              <span>Expertise technique approfondie</span>
            </li>
            <li className="flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              <span>Solutions sur mesure</span>
            </li>
            <li className="flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              <span>Équipe qualifiée et certifiée</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}