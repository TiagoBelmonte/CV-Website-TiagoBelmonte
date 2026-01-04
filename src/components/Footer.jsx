export default function Footer() {
  return (
    <footer className=" bg-gradient-to-b from-blue-200 to-white shadow-md mt-0">
      <div className="max-w-5xl mx-auto text-center py-8 px-6">
        <p className="text-black  text-lg mb-4">
          Wilt u meer van mijn werkervaring zien en/of mijn CV downloaden?
        </p>
        <a
          href="/TiagoBelmonte_CV.pdf"
          download
          className="inline-block bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
        >
          Download mijn CV
        </a>
      </div>
    </footer>
  );
}
