import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faBirthdayCake,
  faFlag,
  faLanguage,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const infoItems = [
    { icon: faUser, label: "Naam", value: "Tiago Gaspar Belmonte" },
    {
      icon: faMapMarkerAlt,
      label: "Adres",
      value: "Tulpenlaan 15, 8700 Tielt",
    },
    { icon: faPhone, label: "Telefoon", value: "+32 497 99 04 22" },
    { icon: faEnvelope, label: "E-mail", value: "t.belmonte@outlook.com" },
    {
      icon: faBirthdayCake,
      label: "Geboortedatum",
      value: "20 september 2002",
    },
    {
      icon: faFlag,
      label: "Geboorteplaats",
      value: "Mar Del Plata, Argentinië",
    },
    {
      icon: faLanguage,
      label: "Talen",
      value: "Spaans, Nederlands, Frans, Engels",
    },
    { icon: faCar, label: "Rijbewijs", value: "B" },
  ];

  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <img
        src="/profile.jpg"
        alt="Profielfoto Tiago Belmonte"
        className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-white shadow-lg mb-6"
      />

      <h2 className="text-4xl font-bold mb-10">Junior Developer</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-left bg-white text-gray-900 p-8 rounded-lg shadow">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={item.icon}
              className="w-6 h-6 text-blue-600"
            />
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
