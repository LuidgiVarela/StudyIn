"use client";

import { useState } from "react";

interface Grupo {
  nome: string;
  tema: string;
  universidade: string;
  membros: number;
  horario: string;
}

export default function GruposPage() {
  const [busca, setBusca] = useState("");
  const [filtroUniversidade, setFiltroUniversidade] = useState("");
  const [filtroTema, setFiltroTema] = useState("");

  const grupos: Grupo[] = [
    { nome: "Cálculo I - UnB", tema: "Matemática", universidade: "UnB", membros: 32, horario: "Seg e Qua, 18h" },
    { nome: "Programação em C", tema: "Engenharia de Computação", universidade: "UTFPR", membros: 27, horario: "Ter e Qui, 20h" },
    { nome: "Física Experimental", tema: "Física", universidade: "USP", membros: 15, horario: "Sáb, 10h" },
    { nome: "Redação ENEM", tema: "Linguagens", universidade: "UFRJ", membros: 40, horario: "Dom, 14h" },
    { nome: "Termodinâmica", tema: "Engenharia Mecânica", universidade: "UFMG", membros: 21, horario: "Qua, 19h" },
    { nome: "Banco de Dados", tema: "Ciência da Computação", universidade: "Unicamp", membros: 29, horario: "Seg e Sex, 17h" },
    { nome: "Cálculo II", tema: "Matemática", universidade: "UFSCar", membros: 18, horario: "Ter e Qui, 18h" },
    { nome: "Psicologia Social", tema: "Psicologia", universidade: "UFRGS", membros: 23, horario: "Seg, 19h" },
    { nome: "Direito Constitucional", tema: "Direito", universidade: "PUC-SP", membros: 31, horario: "Qua, 18h" },
    { nome: "Lógica de Programação", tema: "Computação", universidade: "IFSP", membros: 25, horario: "Qua e Sex, 20h" },
    { nome: "Química Orgânica", tema: "Química", universidade: "UFBA", membros: 19, horario: "Sáb, 9h" },
    { nome: "Economia e Finanças", tema: "Administração", universidade: "FGV", membros: 35, horario: "Ter, 18h" },
    { nome: "História do Brasil", tema: "História", universidade: "UFRN", membros: 22, horario: "Qui, 20h" },
    { nome: "Redes de Computadores", tema: "Engenharia de Computação", universidade: "UnB", membros: 17, horario: "Seg, 21h" },
    { nome: "Introdução à Filosofia", tema: "Filosofia", universidade: "UFSC", membros: 26, horario: "Dom, 16h" },
    { nome: "Gestão de Projetos", tema: "Administração", universidade: "USP", membros: 24, horario: "Seg e Qua, 19h" },
    { nome: "Probabilidade e Estatística", tema: "Matemática", universidade: "UnB", membros: 28, horario: "Qua e Sex, 18h" },
    { nome: "Anatomia Humana", tema: "Medicina", universidade: "UFRJ", membros: 33, horario: "Ter e Qui, 16h" },
    { nome: "Ética e Sociedade", tema: "Filosofia", universidade: "UFMG", membros: 14, horario: "Dom, 10h" },
    { nome: "Engenharia de Software", tema: "Computação", universidade: "UFRGS", membros: 37, horario: "Ter e Sex, 19h" },
    { nome: "Psicologia do Desenvolvimento", tema: "Psicologia", universidade: "UFPE", membros: 22, horario: "Seg, 17h" },
    { nome: "Direito Penal", tema: "Direito", universidade: "UFSC", membros: 18, horario: "Qua e Qui, 20h" },
    { nome: "Física Moderna", tema: "Física", universidade: "UFPR", membros: 25, horario: "Ter e Sex, 10h" },
    { nome: "Teoria da Literatura", tema: "Letras", universidade: "UFRN", membros: 20, horario: "Seg, 18h" },
    { nome: "Química Geral", tema: "Química", universidade: "USP", membros: 27, horario: "Qua e Sex, 15h" },
    { nome: "Estruturas de Dados", tema: "Computação", universidade: "UTFPR", membros: 31, horario: "Seg e Qui, 21h" },
    { nome: "Cálculo Numérico", tema: "Engenharia", universidade: "UFSCar", membros: 19, horario: "Ter, 18h" },
    { nome: "História Contemporânea", tema: "História", universidade: "UFRGS", membros: 23, horario: "Dom, 15h" },
    { nome: "Psicanálise", tema: "Psicologia", universidade: "PUC-SP", membros: 30, horario: "Seg e Qua, 20h" },
    { nome: "Gestão Ambiental", tema: "Engenharia Ambiental", universidade: "UFPA", membros: 16, horario: "Ter e Qui, 17h" },
    { nome: "Direito Civil", tema: "Direito", universidade: "UFPE", membros: 29, horario: "Qua, 18h" },
    { nome: "Redação Científica", tema: "Linguagens", universidade: "UFMG", membros: 27, horario: "Dom, 14h" },
    { nome: "Microeconomia", tema: "Economia", universidade: "FGV", membros: 22, horario: "Seg e Qua, 18h" },
    { nome: "Algoritmos e Estruturas", tema: "Computação", universidade: "UnB", membros: 35, horario: "Qua e Sex, 19h" },
    { nome: "Circuitos Elétricos", tema: "Engenharia Elétrica", universidade: "UFC", membros: 28, horario: "Seg e Qui, 17h" },
    { nome: "Psicologia Clínica", tema: "Psicologia", universidade: "UFRJ", membros: 21, horario: "Qua, 19h" },
    { nome: "Administração Pública", tema: "Gestão", universidade: "UFES", membros: 19, horario: "Ter e Qui, 16h" },
    { nome: "Bioquímica", tema: "Medicina", universidade: "UFRGS", membros: 25, horario: "Seg, 14h" },
    { nome: "Empreendedorismo", tema: "Administração", universidade: "PUC-Rio", membros: 32, horario: "Dom, 18h" },
    { nome: "Neurociência Básica", tema: "Biologia", universidade: "UFSCar", membros: 17, horario: "Qua e Sex, 20h" },
    { nome: "Filosofia da Ciência", tema: "Filosofia", universidade: "UnB", membros: 20, horario: "Sáb, 10h" },
  ];

  // 🔍 Filtro inteligente
  const gruposFiltrados = grupos.filter((grupo) => {
    const termoBusca = busca.toLowerCase();
    const termoUniversidade = filtroUniversidade.toLowerCase();
    const temaSelecionado = filtroTema.toLowerCase();

    const correspondeAoNomeOuTema =
      grupo.nome.toLowerCase().includes(termoBusca) ||
      grupo.tema.toLowerCase().includes(termoBusca);

    const correspondeAUniversidade =
      termoUniversidade === "" ||
      grupo.universidade.toLowerCase().includes(termoUniversidade);

    const correspondeAoFiltroTema =
      filtroTema === "" || grupo.tema.toLowerCase().includes(temaSelecionado);

    return correspondeAoNomeOuTema && correspondeAUniversidade && correspondeAoFiltroTema;
  });

  const temas = [
    "Matemática",
    "Computação",
    "Direito",
    "Engenharia",
    "Psicologia",
    "Linguagens",
    "Medicina",
    "Administração",
    "História",
    "Filosofia",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="StudyIn Logo" className="h-25 w-25" />
        </div>

        <nav className="flex items-center gap-6 text-gray-600 text-sm">
          <a href="/" className="hover:text-[#0A66C2]">Início</a>
          <a href="/login" className="hover:text-[#0A66C2]">Entrar</a>
          <a
            href="/register"
            className="bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-medium px-4 py-1.5 rounded-full transition"
          >
            Cadastre-se
          </a>
        </nav>
      </header>

      {/* Campo de busca */}
      <section className="max-w-5xl mx-auto mt-10 px-6 flex flex-col md:flex-row gap-3">
        {/* Busca principal */}
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 flex-1 shadow-sm">
          <span className="text-gray-400 mr-2">🔍</span>
          <input
            type="text"
            placeholder="Buscar grupos ou temas..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="flex-1 outline-none bg-transparent text-gray-700"
          />
        </div>

        {/* Universidade */}
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full md:w-64 shadow-sm">
          <span className="text-gray-400 mr-2">🏛️</span>
          <input
            type="text"
            placeholder="Universidade..."
            value={filtroUniversidade}
            onChange={(e) => setFiltroUniversidade(e.target.value)}
            className="flex-1 outline-none bg-transparent text-gray-700"
          />
        </div>

        <button className="bg-[#0A66C2] hover:bg-[#004182] text-white font-medium rounded-full px-6 py-2 transition">
          Pesquisar
        </button>
      </section>

      {/* Filtros */}
      <div className="max-w-5xl mx-auto mt-6 px-6 flex flex-wrap gap-2">
        {temas.map((tema) => (
          <button
            key={tema}
            onClick={() => setFiltroTema(filtroTema === tema ? "" : tema)}
            className={`border rounded-full px-4 py-1.5 text-sm transition ${
              filtroTema === tema
                ? "bg-[#0A66C2] text-white border-[#0A66C2]"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {tema}
          </button>
        ))}
      </div>

      {/* Lista de grupos */}
      <section className="max-w-5xl mx-auto mt-8 px-6 pb-20">
        {gruposFiltrados.map((grupo, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 mb-4 flex justify-between items-start hover:shadow-md transition"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{grupo.nome}</h2>
              <p className="text-sm text-gray-700">{grupo.tema}</p>
              <p className="text-sm text-gray-500">{grupo.universidade}</p>
              <p className="text-sm text-green-600 mt-1">
                {grupo.membros} membros • {grupo.horario}
              </p>
            </div>

            <button className="bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-medium px-4 py-1.5 rounded-full transition">
              Participar
            </button>
          </div>
        ))}

        {gruposFiltrados.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            Nenhum grupo encontrado 😕
          </p>
        )}
      </section>
    </div>
  );
}
