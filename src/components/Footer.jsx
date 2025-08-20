export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-10">
      <div className="max-w-5xl mx-auto text-center py-10 px-6">
        <p className="text-gray-700 text-lg mb-4">
          Wilt u meer van mijn werkervaring zien en/of mijn CV downloaden?
        </p>
        <a
          href="public/TiagoBelmonte_CV.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download mijn CV
        </a>
      </div>
    </footer>
  );
}
