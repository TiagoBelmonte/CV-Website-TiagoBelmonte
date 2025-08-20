export default function Contact() {
  const werkervaring = [
    {
      title: "Stage frontend developer",
      image: "/prompto.jpg",
      description:
        "Stage gevolgd bij Prompto, waar ik ervaring heb opgedaan in frontend development met React en TypeScript. Takenpakket omvatte bugs fixen en nieuwe features implementeren.",
      website: "https://prompto.com/",
    },
    {
      title: "Fabrieksmedewerker",
      image: "/vulkoprin.jpg",
      description:
        "3 jaar gewerkt als machineoperator en pistoolspuiter bij Vulkoprin in Tielt. Verantwoordelijk voor het bedienen van machines, wielen te spuiten en kwaliteitscontrole.",
      website: "https://vulkoprin.be/nl/",
    },
    {
      title: "Stage + vakantiejob helpdesk medewerker",
      image: "/sintandries.jpg",
      description:
        "Stage gevolgd en nadien 5 weken gewerkt op de helpdeskafdeling bij het Sint-Andriesziekenhuis. Takenpakket omvatte het ondersteunen van dokters en verpleegkundigen bij IT-problemen, het beheren van tickets en het bieden van technische ondersteuning.",
      website: "https://www.sintandriestielt.be/",
    },
  ];
  return (
    <section id="contact" className="py-20 px-6">
      <h3 className="text-3xl font-bold text-center mb-10">Werkervaring</h3>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {werkervaring.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
