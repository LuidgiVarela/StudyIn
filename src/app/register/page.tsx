"use client";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login"); // depois de se cadastrar, leva pra tela de login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className="absolute top-6 left-8 flex items-center">
          <img src="/logo.png" alt="StudyIn Logo" className="h-25 w-25" />
      </div>

      {/* Título */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 text-center">
        Aproveite sua vida acadêmica ao máximo
      </h1>

      {/* Caixa de Cadastro */}
      <div className="bg-white border border-gray-200 rounded-md shadow-sm p-8 w-full max-w-md">
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-mail ou número de telefone
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
            />
            <div className="text-right mt-1 text-sm text-gray-500">Deve ter 6 ou mais caracteres</div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-[#0A66C2] border-gray-300 rounded focus:ring-[#0A66C2]"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Lembrar dos meus dados
            </label>
          </div>

          {/* Texto de política */}
          <p className="text-xs text-gray-600 leading-snug">
            Ao clicar em <strong>Aceite e cadastre-se</strong> ou em Continue, você aceita o{" "}
            <a href="#" className="text-[#0A66C2] hover:underline">Contrato do Usuário</a>, a{" "}
            <a href="#" className="text-[#0A66C2] hover:underline">Política de Privacidade</a> e a{" "}
            <a href="#" className="text-[#0A66C2] hover:underline">Política de Cookies</a> do StudyIn.
          </p>

          {/* Botão principal */}
          <button
            type="submit"
            className="w-full bg-[#0A66C2] hover:bg-[#004182] text-white font-medium py-2 rounded-full transition"
          >
            Aceite e cadastre-se
          </button>

          {/* Separador */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">ou</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Login com Google */}
          <button
            type="button"
            className="w-full border border-gray-300 text-gray-700 py-2 rounded-full flex items-center justify-center hover:bg-gray-50 transition"
          >
            <img src="/google.svg" alt="Google" className="h-5 w-5 mr-2" />
            Continue com o Google
          </button>
        </form>

        {/* Link para login */}
        <p className="mt-6 text-sm text-gray-700 text-center">
          Já faz parte do <span className="font-semibold">StudyIn</span>?{" "}
          <a href="/login" className="text-[#0A66C2] hover:underline font-medium">
            Entrar
          </a>
        </p>
      </div>

      {/* Rodapé */}
      <p className="mt-8 text-xs text-gray-600 text-center">
        Gostaria de criar uma página para um grupo de estudos?{" "}
        <a href="#" className="text-[#0A66C2] hover:underline">Receber ajuda</a>
      </p>
    </div>
  );
}
