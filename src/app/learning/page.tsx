"use client";

import { useState } from "react";

interface Curso {
  titulo: string;
  categoria: string;
  duracao: string;
  autor: string;
  imagem: string;
  nivel: string;
}

export default function LearningPage() {
  const [busca, setBusca] = useState("");
  const [filtroNivel, setFiltroNivel] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  const cursos: Curso[] = [
    {
      titulo: "Gestão do Tempo para Melhorar sua Saúde Mental no Trabalho",
      categoria: "Desenvolvimento profissional",
      duracao: "3 h 12 min",
      autor: "Equipe StudyIn Learning",
      imagem: "/cursos/gestao-tempo.png",
      nivel: "Intermediário",
    },
    {
      titulo: "Primeiros passos com Excel",
      categoria: "Software e ferramentas de negócios",
      duracao: "41 min",
      autor: "Equipe StudyIn Learning",
      imagem: "/cursos/excel.png",
      nivel: "Básico",
    },
    {
      titulo: "Microsoft Outlook 2021: Formação Básica",
      categoria: "Tecnologia",
      duracao: "42 min",
      autor: "Equipe StudyIn Learning",
      imagem: "/cursos/outlook.png",
      nivel: "Básico",
    },
    {
      titulo: "Introdução à Programação em Python",
      categoria: "Tecnologia",
      duracao: "4 h 10 min",
      autor: "Equipe StudyIn Learning",
      imagem: "/cursos/python.png",
      nivel: "Básico",
    },
    {
      titulo: "Técnicas de Apresentação Profissional",
      categoria: "Negócios",
      duracao: "2 h 25 min",
      autor: "Equipe StudyIn Learning",
      imagem: "/cursos/apresentacao.png",
      nivel: "Intermediário",
    },
    {
      titulo: "Gestão de Projetos para Iniciantes",
      categoria: "Negócios",
      duracao: "3 h 5 min",
      autor: "Equipe StudyIn Learning",
      imagem: "/cursos/gestao-projetos.png",
      nivel: "Intermediário",
    },
  ];

  const cursosFiltrados = cursos.filter((curso) => {
    const termoBusca = busca.toLowerCase();
    const correspondeBusca =
      curso.titulo.toLowerCase().includes(termoBusca) ||
      curso.categoria.toLowerCase().includes(termoBusca);

    const correspondeNivel = !filtroNivel || curso.nivel === filtroNivel;
    const correspondeTipo = !filtroTipo || curso.categoria === filtroTipo;

    return correspondeBusca && correspondeNivel && correspondeTipo;
  });

  const niveis = ["Básico", "Intermediário", "Avançado"];
  const tipos = [
    "Desenvolvimento profissional",
    "Negócios",
    "Software e ferramentas de negócios",
    "Tecnologia",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="StudyIn Logo" className="h-25 w-25" />
        </div>

        <div className="flex items-center gap-4">
          <a href="/" className="text-gray-600 hover:text-[#0A66C2] text-sm font-medium">
            Início
          </a>
          <a href="/login" className="text-gray-600 hover:text-[#0A66C2] text-sm font-medium">
            Entrar
          </a>
          <a
            href="/register"
            className="bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-medium px-4 py-1.5 rounded-full transition"
          >
            Cadastre-se
          </a>
        </div>
      </header>

      {/* Campo de busca e filtros */}
      <section className="max-w-6xl mx-auto mt-10 px-6">
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 flex-1 shadow-sm">
            <span className="text-gray-400 mr-2">🔍</span>
            <input
              type="text"
              placeholder="Pesquise competências, tópicos ou software..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="flex-1 outline-none bg-transparent text-gray-700"
            />
          </div>
          <button className="bg-[#0A66C2] hover:bg-[#004182] text-white font-medium rounded-full px-6 py-2 transition">
            Buscar
          </button>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-10">
          {niveis.map((nivel) => (
            <button
              key={nivel}
              onClick={() => setFiltroNivel(filtroNivel === nivel ? "" : nivel)}
              className={`border rounded-full px-4 py-1.5 text-sm transition ${
                filtroNivel === nivel
                  ? "bg-[#0A66C2] text-white border-[#0A66C2]"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {nivel}
            </button>
          ))}

          {tipos.map((tipo) => (
            <button
              key={tipo}
              onClick={() => setFiltroTipo(filtroTipo === tipo ? "" : tipo)}
              className={`border rounded-full px-4 py-1.5 text-sm transition ${
                filtroTipo === tipo
                  ? "bg-[#0A66C2] text-white border-[#0A66C2]"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-6 pb-20">
        {/* Lista de cursos */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Acesse os cursos mais populares
          </h2>

          {cursosFiltrados.map((curso, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-4 hover:shadow-sm transition"
            >
              <img
                src={curso.imagem}
                alt={curso.titulo}
                className="w-48 h-28 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {curso.titulo}
                </h3>
                <p className="text-sm text-gray-600">{curso.categoria}</p>
                <p className="text-sm text-gray-500">
                  {curso.autor} • {curso.duracao}
                </p>
              </div>
            </div>
          ))}

          {cursosFiltrados.length === 0 && (
            <p className="text-gray-500">Nenhum curso encontrado 😕</p>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-72">
          <h3 className="text-lg font-semibold mb-3">Veja os tópicos</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {tipos.map((tipo) => (
              <button
                key={tipo}
                onClick={() => setFiltroTipo(filtroTipo === tipo ? "" : tipo)}
                className={`border rounded-full px-3 py-1 text-sm ${
                  filtroTipo === tipo
                    ? "bg-[#0A66C2] text-white border-[#0A66C2]"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tipo}
              </button>
            ))}
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">
              Adquira o StudyIn Learning
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Para sua equipe, instituição de ensino ou setor público.
            </p>
            <button className="bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-medium px-4 py-1.5 rounded-full transition">
              Saiba mais
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
}
