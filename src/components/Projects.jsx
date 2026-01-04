import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Grapro personal assistent",
      description:
        "Een persoonlijke assistent met spraakherkenning en AI-integratie.",
      code: "https://github.com/TiagoBelmonte/Portfolio/tree/main/Graduaat%20Programmeren%20-%20HOGENT/Jaar%202/Graduaatsproef/chat_assistant",
    },
    {
      title: "React native app",
      description:
        "Cross-platform mobiele applicatie met GPS en API-integraties.",
      code: "https://github.com/TiagoBelmonte/Portfolio/tree/main/Graduaat%20Programmeren%20-%20HOGENT/Jaar%202/Mobile/TiagoBelmonte_PersonalAssitentApp/PersonalAssitentApp",
    },
    {
      title: "Loopcoach website",
      description:
        "Website voor een loopcoach met gebruikersregistratie en trainingsschema's aanpasbaar per gebruiker.",
      code: "https://github.com/TiagoBelmonte/Portfolio/tree/main/Graduaat%20Programmeren%20-%20HOGENT/Jaar%202/Projectwerk%202/LoopCoach",
    },
    {
      title: "Fitness applicatie",
      description:
        "Applicatie voor het reserveren en beheren van fitnessapparatuur en bijhouden wanneer deze onderhoud nodig heeft.",
      code: "https://github.com/TiagoBelmonte/Portfolio/tree/main/Graduaat%20Programmeren%20-%20HOGENT/Jaar%202/Programmeren%20Gevorderd%202/Fitness",
    },
    {
      title: "Aanwezigheidsprogramma",
      description:
        "Applicatie voor het bijhouden van de aanwezigheid van studenten in een klaslokaal + beheerder kan nagaan wie er allemaal aanwezig/afwezig is.",
      code: "https://github.com/TiagoBelmonte/Portfolio/tree/main/Graduaat%20Programmeren%20-%20HOGENT/Jaar%201/ProjectAanwezigheden",
    },
    {
      title: "Tuincentrum applicatie",
      description:
        "Applicatie voor het bestellen van planten en tuinaccessoires.",
      code: "https://github.com/TiagoBelmonte/Portfolio/tree/main/Graduaat%20Programmeren%20-%20HOGENT/Jaar%201/Programmeren%20Gevorderd/EindewerkTuinCentrum",
    },
    {
      title: "Splendor",
      description:
        "Een bordspelapplicatie voor het spelen van Splendor met vrienden.",
      code: "https://github.com/TiagoBelmonte/Portfolio/tree/main/Toegepast%20Informatica%20-%20HOGENT/SDP%20project",
    },
    {
      title: "Helpdesk applicatie",
      description: "Een applicatie voor het aanmaken en beheren van tickets.",
      code: "https://github.com/TiagoBelmonte/Portfolio/tree/main/Netwerken%20en%20IT%20-%20Regina/GP09_6NIT01_Applicatie",
    },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600"
    >
      <h3 className="text-3xl font-bold text-center mb-10">Projecten</h3>

      <div className="relative max-w-5xl mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.code}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pijlen */}
        <button
          onClick={prevPage}
          className="absolute -left-24 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
        >
          <ChevronLeft size={42} />
        </button>
        <button
          onClick={nextPage}
          className="absolute -right-24 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
        >
          <ChevronRight size={42} />
        </button>

        {/* Bollen */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full ${
                currentPage === index ? "bg-blue-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
