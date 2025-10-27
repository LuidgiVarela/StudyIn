export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className="absolute top-6 left-8">
          <img src="/logo.png" alt="StudyIn Logo" className="h-25 w-25" />
      </div>

      {/* Caixa de Login */}
      <div className="bg-white border border-gray-200 rounded-md shadow-sm p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-gray-900">Entrar</h1>

        {/* Botões de login social */}
        <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-full mb-3 flex items-center justify-center hover:bg-gray-50 transition">
          <img src="/google.svg" alt="Google" className="h-5 w-5 mr-2" />
          Continuar com o Google
        </button>

        <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-full mb-4 flex items-center justify-center hover:bg-gray-50 transition">
          <img src="/apple.svg" alt="Apple" className="h-5 w-5 mr-2" />
          Entrar com a Apple
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">ou</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Campos de login */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-mail ou telefone
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
            />
            <div className="text-right mt-1">
              <a
                href="#"
                className="text-sm text-[#0A66C2] hover:underline font-medium"
              >
                Esqueceu a senha?
              </a>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-[#0A66C2] border-gray-300 rounded focus:ring-[#0A66C2]"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Me mantenha na conta
            </label>
          </div>

          {/* Botão principal */}
          <button
            type="submit"
            className="w-full bg-[#0A66C2] hover:bg-[#004182] text-white font-medium py-2 rounded-full transition"
          >
            Entrar
          </button>
        </form>
      </div>

      {/* Rodapé */}
      <p className="mt-6 text-sm text-gray-700">
        Ainda não faz parte do <span className="font-semibold">StudyIn</span>?{" "}
        <a href="#" className="text-[#0A66C2] hover:underline font-medium">
          Cadastre-se agora
        </a>
      </p>
    </div>
  );
}
