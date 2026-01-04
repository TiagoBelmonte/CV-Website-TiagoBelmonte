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

  const leftItems = infoItems.slice(0, 4);
  const rightItems = infoItems.slice(4);

  return (
    <section className="relative text-white">
      <img
        src="/Background_picture3.jpg"
        alt="Background"
        className="w-full h-auto block"
      />

      {/* translucent overlay to improve contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* content positioned over the image (left-aligned) */}
      <div className="absolute inset-0 flex items-center justify-start transform -translate-y-[140px]">
        <div className="w-full">
          <h2 className=" font-Header text-8xl font-bold mb-6 text-center">
            Junior Developer
          </h2>

          {/* full-width container so columns can sit at page edges */}
          <div className="w-full px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:justify-between items-start text-left bg-transparent text-white p-8 rounded-lg shadow z-10 translate-y-[120px]">
            <div className="w-full md:w-1/3 space-y-4">
              {leftItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-6 h-6 text-blue-600"
                  />
                  <div>
                    <p className="text-sm text-gray-300">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block md:flex-1" />

            <div className="w-full md:w-1/3 space-y-4 md:text-right">
              {rightItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 md:justify-end"
                >
                  <div>
                    <p className="text-sm text-gray-300">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-6 h-6 text-blue-600"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
