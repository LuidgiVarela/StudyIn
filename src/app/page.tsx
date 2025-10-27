import { Users, BookOpen, Layers } from "lucide-react";
import Link from "next/link";

// ...

<Link href="/login">
  <button className="border border-[#0A66C2] text-[#0A66C2] font-medium text-sm px-4 py-1.5 rounded-full hover:bg-[#0A66C2]/10 transition">
    Entrar
  </button>
</Link>


export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Barra superior */}
      <header className="flex items-center justify-between px-8 py-1 bg-white shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img src="/logo.png" alt="StudyIn Logo" className="h-25 w-25" />
        </div>

        {/* Barra de pesquisa */}
        <div className="flex-1 mx-8 relative">
          <input
            type="text"
            placeholder="Pesquisar pessoas, grupos ou artigos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>

        {/* Menu de navegação */}
        <nav className="flex items-center gap-8 text-gray-600 text-sm">

          <Link href="/pessoas" className="flex flex-col items-center hover:text-blue-700">
            <Users className="h-5 w-5 mb-1" />
            <span>Pessoas</span>
          </Link>

          <Link href="/learning" className="flex flex-col items-center hover:text-blue-700">
            <BookOpen className="h-5 w-5 mb-1" />
            <span>Learning</span>
          </Link>

          <Link href="/grupos" className="flex flex-col items-center hover:text-blue-700">
            <Layers className="h-5 w-5 mb-1" />
            <span>Grupos</span>
          </Link>

          {/* Botões */}
          <div className="flex items-center gap-4 ml-4">
            <Link href="/login">
              <button className="border border-[#0A66C2] text-[#0A66C2] font-medium text-sm px-4 py-1.5 rounded-full hover:bg-[#0A66C2]/10 transition">
                Entrar
              </button>
            </Link>

            <Link href="/register">
              <button className="bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-medium px-4 py-1.5 rounded-full transition">
                Cadastre-se agora
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Seção principal (estilo LinkedIn) */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 bg-white">
        {/* Texto à esquerda */}
        <div className="max-w-lg mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
            Cadastre-se agora e crie novos amigos para estudos coletivos
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Junte-se à comunidade <span className="font-semibold">StudyIn</span> e conecte-se com pessoas, grupos e
            oportunidades que combinam com seus interesses acadêmicos e
            profissionais.
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Continuar com Google
            </button>
            <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
              Entrar com e-mail
            </button>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/illustration.png"
            alt="Ilustração StudyIn"
            className="max-w-md w-full"
          />
        </div>
      </section>
    </main>
  );
}
