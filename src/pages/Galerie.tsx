
export function Galerie() {
  const images = [
    {
      url: "images/ETEL-CI-BTA-Image2-tagged.jpg",
      title: "Installation électrique HTA",
      category: "Électricité"
    },
    {
      url: "images/ETEL-CI-BTA-Image3-tagged.jpg",
      title: "Installation électrique HTA",
      category: "Électricité"
    },
    {
      url: "images/ETEL-CI-BTA-Image4-tagged.jpg",
      title: "Installation électrique HTA",
      category: "Électricité"
    },
    {
      url: "images/ETEL-CI-BTA-Image5-tagged.jpg",
      title: "Installation électrique HTA",
      category: "Électricité"
    },
    {
      url: "images/ETEL-CI-BTA-Image6-tagged.jpg",
      title: "Installation électrique HTA",
      category: "Électricité"
    },
    {
      url: "images/ETEL-CI-HTA-Image4.jpg",
      title: "Installation électrique HTB",
      category: "Électricité"
    },
    {
      url: "images/ETEL-CI-Industries-Image2.jpg",
      title: "Montage d'Armoire Télécom",
      category: "Industrie"
    },
    {
      url: "images/ETEL-CI-Teleconduite-Image2.jpg",
      title: "Système de Contrôle Commande ABB",
      category: "Téléconduite"
    },
    {
      url: "images/Renovation-CCN-VRIDI1.jpeg",
      title: "Rénovation du Système CCN du Poste de Vridi",
      category: "Téléconduite"
    },
    {
      url: "images/Renovation-CCN-VRIDI2.jpeg",
      title: "Rénovation du Système CCN du Poste de Vridi",
      category: "Téléconduite"
    },
    {
      url: "images/Renovation-CCN-VRIDI3.jpeg",
      title: "Rénovation du Système CCN du Poste de Vridi",
      category: "Téléconduite"
    },
    {
      url: "images/Renovation-CCN-VRIDI4.jpeg",
      title: "Rénovation du Système CCN du Poste de Vridi",
      category: "Téléconduite"
    },
    {
      url: "images/Renovation-CCN-VRIDI5.jpeg",
      title: "Rénovation du Système CCN du Poste de Vridi",
      category: "Téléconduite"
    },
    {
      url: "images/Renovation-CCN-VRIDI6.jpeg",
      title: "Rénovation du Système CCN du Poste de Vridi",
      category: "Téléconduite"
    },
    {
      url: "images/Renovation-CCN-VRIDI.jpeg",
      title: "Rénovation du Système CCN du Poste de Vridi",
      category: "Téléconduite"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Galerie</h1>
          <p className="text-xl text-gray-600">
            Découvrez nos réalisations en images
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={image.title}
              className="group relative overflow-hidden shadow-lg aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.title}
                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${index === 3 || index === 4 ? 'object-top' : ''
                  }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-green-400 text-sm font-medium mb-2">
                    {image.category}
                  </div>
                  <h3 className="text-white text-xl font-bold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}