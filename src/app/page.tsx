import { Users, BookOpen, Layers } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ================= CABEÇALHO ================= */}
      <header className="flex items-center justify-between px-8 py-2 bg-white shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img src="/logo.png" alt="StudyIn Logo" className="h-25 w-25" />
        </div>

        {/* Barra de pesquisa */}
        <div className="flex-1 mx-8 relative hidden md:block">
          <input
            type="text"
            placeholder="Pesquisar pessoas, grupos ou artigos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>

        {/* Navegação */}
        <nav className="flex items-center gap-8 text-gray-600 text-sm">
          <Link href="/pessoas" className="flex flex-col items-center hover:text-[#0A66C2]">
            <Users className="h-5 w-5 mb-1" />
            <span>Pessoas</span>
          </Link>

          <Link href="/learning" className="flex flex-col items-center hover:text-[#0A66C2]">
            <BookOpen className="h-5 w-5 mb-1" />
            <span>Learning</span>
          </Link>

          <Link href="/grupos" className="flex flex-col items-center hover:text-[#0A66C2]">
            <Layers className="h-5 w-5 mb-1" />
            <span>Grupos</span>
          </Link>

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

      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 bg-white">
        {/* Texto */}
        <div className="max-w-lg mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
            Cadastre-se agora e conecte-se com estudantes do mundo todo
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Junte-se à comunidade <span className="font-semibold">StudyIn</span> e amplie sua rede acadêmica.
            Descubra grupos de estudo, projetos colaborativos e oportunidades educacionais alinhadas aos seus interesses.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-[#0A66C2] text-white px-6 py-3 rounded-full font-medium hover:bg-[#004182] transition">
              Continuar com Google
            </button>
            <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
              Entrar com e-mail
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/illustration.png"
            alt="Ilustração StudyIn"
            className="max-w-md w-full"
          />
        </div>
      </section>

      {/* ================= TEMAS POPULARES ================= */}
      <section className="bg-gray-50 py-16 px-8 md:px-20 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Conheça os tópicos mais populares do StudyIn
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Explore conteúdos relevantes sobre temas acadêmicos e de desenvolvimento pessoal, selecionados por estudantes e mentores.
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            "Aprendizado Ativo",
            "Produtividade",
            "Carreira Acadêmica",
            "Saúde Mental",
            "Soft Skills",
            "Pesquisa Científica",
            "Tecnologia e Inovação",
            "Educação e Ensino",
            "Trabalho em Equipe",
            "Comunicação",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 text-sm hover:bg-gray-100 cursor-pointer transition"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="mt-8 text-[#0A66C2] font-medium hover:underline">
          Exibir tudo
        </button>
      </section>

      {/* ================= ÁREAS DE ESTUDO ================= */}
      <section className="bg-white py-16 px-8 md:px-20 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Encontre grupos e oportunidades na sua área de estudo
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Conecte-se com comunidades e projetos que combinam com sua formação e objetivos acadêmicos.
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            "Engenharia",
            "Ciência da Computação",
            "Matemática",
            "Design",
            "Psicologia",
            "Administração",
            "Economia",
            "Educação",
            "Medicina",
            "Direito",
            "Arquitetura",
            "Física",
          ].map((area) => (
            <span
              key={area}
              className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 text-sm hover:bg-gray-100 cursor-pointer transition"
            >
              {area}
            </span>
          ))}
        </div>

        <button className="mt-8 text-[#0A66C2] font-medium hover:underline">
          Exibir mais
        </button>
      </section>

      {/* ================= PARA QUEM É O STUDYIN ================= */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-8 md:px-20 py-20 border-t border-gray-200">
        {/* Texto */}
        <div className="max-w-lg mb-12 md:mb-0">
          <h2 className="text-2xl font-semibold text-[#B24020] mb-2">
            Para quem o StudyIn foi feito?
          </h2>
          <p className="text-gray-700 mb-6">
            Para qualquer estudante buscando aprendizado colaborativo e conexões acadêmicas.
          </p>

          <div className="flex flex-col gap-3">
            {[
              "Encontre um colega de classe ou de curso",
              "Descubra um grupo de estudo",
              "Participe de um projeto ou pesquisa",
            ].map((option) => (
              <button
                key={option}
                className="flex justify-between items-center bg-white border border-gray-300 px-5 py-3 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                {option}
                <span className="text-gray-400">›</span>
              </button>
            ))}
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/students.jpg"
            alt="Estudantes colaborando"
            className="w-96 h-96 object-cover rounded-full"
          />
        </div>
      </section>

      {/* ================= RODAPÉ ILUSTRADO ================= */}
      <section className="bg-white border-t border-gray-200">
        <img
          src="/footer-illustration.png"
          alt="Comunidade StudyIn"
          className="w-full"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-20 py-12 text-gray-600 text-sm bg-gray-50 border-t border-gray-200">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Geral</h3>
            <ul className="space-y-2">
              <li>Cadastre-se</li>
              <li>Central de Ajuda</li>
              <li>Sobre</li>
              <li>Blog</li>
              <li>Carreiras</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Navegar</h3>
            <ul className="space-y-2">
              <li>Grupos</li>
              <li>Learning</li>
              <li>Eventos</li>
              <li>Mentorias</li>
              <li>Pesquisas</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Comunidade</h3>
            <ul className="space-y-2">
              <li>Projetos</li>
              <li>Publicações</li>
              <li>Networking</li>
              <li>Estágios</li>
              <li>Voluntariado</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Diretórios</h3>
            <ul className="space-y-2">
              <li>Usuários</li>
              <li>Instituições</li>
              <li>Áreas de estudo</li>
              <li>Artigos</li>
              <li>Serviços</li>
            </ul>
          </div>
        </div>

        <footer className="text-center py-6 text-gray-500 text-xs border-t border-gray-200">
          © {new Date().getFullYear()} StudyIn — Conectando mentes que aprendem.
        </footer>
      </section>
    </main>
  );
}
