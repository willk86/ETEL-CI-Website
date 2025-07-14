import { Building, CheckCircle2, Award } from "lucide-react";

export function References() {
  const projects = [
    {
      title: "Réseau électrique urbain d'Abidjan",
      description:
        "Installation et maintenance du réseau électrique HTA/BTA dans plusieurs quartiers d'Abidjan",
      year: "2023",
      client: "CIE",
      image: "images/ETEL-CI-BTA-Image5-tagged.jpg",
    },
    {
      title: "Système de téléconduite industriel",
      description:
        "Mise en place d'un système SCADA pour une usine de production",
      year: "2022",
      client: "SIVOA",
      image: "images/ETEL-CI-Teleconduite.heic",
    },
    {
      title: "Infrastructure télécom rurale",
      description:
        "Déploiement de solutions de télécommunication en zone rurale",
      year: "2022",
      client: "Orange CI",
      image:
        "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80",
    },
  ];

  const stats = [
    { icon: Building, value: "100+", label: "Projets réalisés" },
    { icon: Award, value: "20+", label: "Années d'expérience" },
  ];

  const pdfs = [
    {
      pdf: "pdfs/ABE CIENERGIES PIPELINE.pdf",
      img: "pdfs/PDFs cover/ABE CIENERGIES PIPELINE.png",
    },
    {
      pdf: "pdfs/ABE CIENERGIES SIPEF-CI BOLO.pdf",
      img: "pdfs/PDFs cover/ABE CIENERGIES SIPEF-CI BOLO.png",
    },
    {
      pdf: "pdfs/ABE GUEYO ET IFFOU.pdf",
      img: "pdfs/PDFs cover/ABE GUEYO ET IFFOU.png",
    },
    {
      pdf: "pdfs/ABE PPU CIENERGIES SAVANES.pdf",
      img: "pdfs/PDFs cover/ABE PPU CIENERGIES SAVANES.png",
    },
    {
      pdf: "pdfs/ABE PRONER NEXANS.pdf",
      img: "pdfs/PDFs cover/ABE PRONER NEXANS.png",
    },
    {
      pdf: "pdfs/ABE RACCORDEMENT CIMENTERIE OYAK ACA.pdf",
      img: "pdfs/PDFs cover/ABE RACCORDEMENT CIMENTERIE OYAK ACA.png",
    },
    {
      pdf: "pdfs/ABE RACCORDEMENT CIMENTERIE PRESTIGE CIMENT.pdf",
      img: "pdfs/PDFs cover/ABE RACCORDEMENT CIMENTERIE PRESTIGE CIMENT.png",
    },
    {
      pdf: "pdfs/ABE RACCORDEMENT CIMENTERIE SCCI.pdf",
      img: "pdfs/PDFs cover/ABE RACCORDEMENT CIMENTERIE SCCI.png",
    },
    { pdf: "pdfs/ABE TEL1.pdf", img: "pdfs/PDFs cover/ABE TEL1.png" },
    { pdf: "pdfs/ABE TEL3.pdf", img: "pdfs/PDFs cover/ABE TEL3.png" },
    {
      pdf: "pdfs/ABE TEL4 PV MISE EN SERVICE CPL & AUTOCOM KOMSILGA.pdf",
      img: "pdfs/PDFs cover/ABE TEL4 PV MISE EN SERVICE CPL & AUTOCOM KOMSILGA.png",
    },
    {
      pdf: "pdfs/ABE TEL5 PV KOMSILGA.pdf",
      img: "pdfs/PDFs cover/ABE TEL5 PV KOMSILGA.png",
    },
    {
      pdf: "pdfs/ABE TRAVAUX GUEYO.pdf",
      img: "pdfs/PDFs cover/ABE TRAVAUX GUEYO.png",
    },
    {
      pdf: "pdfs/ABE_PROJETS BOAD_2013 DEFINITIF.pdf",
      img: "pdfs/PDFs cover/ABE_PROJETS BOAD_2013 DEFINITIF.png",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Références
          </h1>
          <p className="text-xl text-gray-600">
            Des projets d'envergure réalisés avec excellence
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center shadow-lg flex flex-col justify-center items-center"
            >
              <stat.icon className="h-8 w-8 text-green-500 mb-4" />
              <div className="text-3xl font-bold text-blue-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* PDF Previews */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Attestations de Bonne Exécution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pdfs.map((pdf, index) => (
              <div
                key={index}
                className="relative group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
                onClick={() => window.open(pdf.pdf, "_blank")}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-0 group-hover:opacity-75 transition-opacity">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <img
                  src={pdf.img}
                  alt={`PDF Preview ${index + 1}`}
                  className="object-cover w-full h-full transition-transform transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-green-500 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Nos Certifications en cours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "ISO 9001:2015 - Management de la qualité",
              "ISO 14001:2015 - Management environnemental",
              "OHSAS 18001 - Sécurité et santé au travail",
            ].map((cert) => (
              <div key={cert} className="flex items-center">
                <Award className="h-6 w-6 mr-3 flex-shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
