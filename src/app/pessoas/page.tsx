"use client";

import { useState } from "react";

interface Pessoa {
  nome: string;
  curso: string;
  universidade: string;
}

export default function PessoasPage() {
  const [busca, setBusca] = useState("");

    const pessoas: Pessoa[] = [
    { nome: "Ana Martins", curso: "Engenharia de Computação", universidade: "UnB" },
    { nome: "Lucas Pereira", curso: "Design Gráfico", universidade: "USP" },
    { nome: "Beatriz Silva", curso: "Medicina", universidade: "UFMG" },
    { nome: "João Costa", curso: "Direito", universidade: "PUC-SP" },
    { nome: "Mariana Rocha", curso: "Psicologia", universidade: "UFRJ" },
    { nome: "Pedro Oliveira", curso: "Administração", universidade: "FGV" },
    { nome: "Juliana Mendes", curso: "Engenharia Civil", universidade: "UFPE" },
    { nome: "Gustavo Almeida", curso: "Ciência da Computação", universidade: "UTFPR" },
    { nome: "Camila Santos", curso: "Arquitetura e Urbanismo", universidade: "Unicamp" },
    { nome: "Rafael Lima", curso: "Engenharia Elétrica", universidade: "UFC" },
    { nome: "Isabela Nogueira", curso: "Enfermagem", universidade: "UFRGS" },
    { nome: "Fernando Carvalho", curso: "Economia", universidade: "Insper" },
    { nome: "Laura Souza", curso: "Jornalismo", universidade: "UFBA" },
    { nome: "Matheus Freitas", curso: "Biologia", universidade: "UFPR" },
    { nome: "Sofia Ribeiro", curso: "Publicidade e Propaganda", universidade: "PUC-Rio" },
    { nome: "Bruno Cardoso", curso: "Engenharia Mecânica", universidade: "UFSCar" },
    { nome: "Clara Fernandes", curso: "Relações Internacionais", universidade: "USP" },
    { nome: "Eduardo Azevedo", curso: "Física", universidade: "UnB" },
    { nome: "Larissa Gomes", curso: "Ciência de Dados", universidade: "UFABC" },
    { nome: "Thiago Barbosa", curso: "Matemática", universidade: "UFRJ" },
    { nome: "Carolina Duarte", curso: "Nutrição", universidade: "UFSC" },
    { nome: "Rodrigo Moraes", curso: "Engenharia de Software", universidade: "UFES" },
    { nome: "Vanessa Lima", curso: "História", universidade: "UFMG" },
    { nome: "Felipe Araújo", curso: "Engenharia Ambiental", universidade: "UFPB" },
    { nome: "Patrícia Teixeira", curso: "Letras", universidade: "UFRN" },
    ];


  const pessoasFiltradas = pessoas.filter((pessoa) =>
    pessoa.nome.toLowerCase().includes(busca.toLowerCase())
  );

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

      {/* Campo de busca */}
      <section className="max-w-4xl mx-auto mt-12 px-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Encontre pessoas para estudar com você
        </h1>

        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm">
          <span className="text-gray-400 mr-2">🔍</span>
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="flex-1 outline-none bg-transparent text-gray-700"
          />
        </div>
      </section>

      {/* Lista de pessoas */}
      <section className="max-w-4xl mx-auto mt-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {pessoasFiltradas.length > 0 ? (
          pessoasFiltradas.map((pessoa, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <img
                src={`https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(pessoa.nome)}`}
                alt={pessoa.nome}
                className="h-16 w-16 rounded-full mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-900">{pessoa.nome}</h2>
              <p className="text-sm text-gray-600">{pessoa.curso}</p>
              <p className="text-sm text-gray-500">{pessoa.universidade}</p>

              <button className="mt-4 bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-medium px-4 py-1.5 rounded-full transition">
                Conectar
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-10">
            Nenhuma pessoa encontrada 😕
          </p>
        )}
      </section>
    </div>
  );
}
