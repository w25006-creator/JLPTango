export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8">

      {/* Site Title */}
      <h1 className="text-4xl font-bold text-center text-red-600 mb-2">
        日本語単語学習
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Japanese Vocabulary Learning Site
      </p>

      {/* JLPT Level Selector */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Select Your Level
      </h2>

      <div className="flex justify-center gap-4 flex-wrap">
        <a href="/vocabulary/n5" className="bg-red-500 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-red-600">
          N5
        </a>
        <a href="/vocabulary/n4" className="bg-orange-500 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-orange-600">
          N4
        </a>
        <a href="/vocabulary/n3" className="bg-yellow-500 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-yellow-600">
          N3
        </a>
        <a href="/vocabulary/n2" className="bg-green-500 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-green-600">
          N2
        </a>
        <a href="/vocabulary/n1" className="bg-blue-500 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-600">
          N1
        </a>
      </div>

    </main>
  );
}