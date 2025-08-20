import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const frontendSkills = [
    { name: "HTML", icon: faHtml5 },
    { name: "(Inline) CSS", icon: faCss3Alt },
    { name: "JavaScript", icon: faJsSquare },
    { name: "TypeScript", icon: faCode },
    { name: "React", icon: faReact },
    { name: "Tailwind CSS", icon: faCss3Alt },
  ];

  const backendSkills = [
    { name: "C#", icon: faCode },
    { name: "Python", icon: faPython },
    { name: "JavaScript (Node.js)", icon: faNodeJs },
  ];

  const databaseSkills = [
    { name: "MySQL", icon: faDatabase },
    { name: "MongoDB", icon: faDatabase },
    { name: "Firebase", icon: faDatabase },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-10">Vaardigheden</h3>

      {/* Frontend */}
      <h4 className="text-xl font-semibold mb-4 text-blue-600">Frontend</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-10">
        {frontendSkills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className="text-4xl text-blue-500 mb-2"
            />
            <span className="font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Backend */}
      <h4 className="text-xl font-semibold mb-4 text-green-600">Backend</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-10">
        {backendSkills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className="text-4xl text-green-500 mb-2"
            />
            <span className="font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Databases */}
      <h4 className="text-xl font-semibold mb-4 text-purple-600">Databases</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {databaseSkills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className="text-4xl text-purple-500 mb-2"
            />
            <span className="font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
