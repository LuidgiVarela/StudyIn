# 🎓 StudyIn

**StudyIn** é uma plataforma moderna voltada para estudantes, criada para facilitar a organização dos estudos, o compartilhamento de materiais e o acesso a conteúdos educacionais de forma prática e intuitiva.

Desenvolvido com base na poderosa **T3 Stack** — combinando **Next.js**, **Prisma**, **Tailwind CSS** e **tRPC** — o projeto oferece alta performance, escalabilidade e uma estrutura limpa para futuras expansões.

---

## 🚀 Funcionalidades Principais

- 📚 **Organização de estudos** – Crie e gerencie suas matérias, anotações e cronogramas de forma simples.  
- 👥 **Comunidade estudantil** – Conecte-se com outros estudantes para trocar conhecimentos e experiências.  
- 🧠 **Simulados e desafios** – Treine seus conhecimentos com questões e testes interativos.  
- 📈 **Progresso de aprendizado** – Acompanhe seu desempenho e visualize sua evolução ao longo do tempo.  
- ☁️ **Interface intuitiva** – Design limpo, responsivo e voltado à experiência do usuário.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| **Next.js** | Framework React para renderização moderna (SSR e SSG). |
| **Prisma** | ORM para modelagem e acesso ao banco de dados. |
| **tRPC** | Comunicação typesafe entre backend e frontend. |
| **Tailwind CSS** | Framework CSS utilitário para estilização ágil e responsiva. |
| **NextAuth.js** | Autenticação e controle de sessões seguras. |
| **Drizzle ORM** | Alternativa moderna e leve para modelagem de dados. |

---

## 💻 Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/LuidgiVarela/StudyIn.git
cd StudyIn
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e adicione suas chaves (banco de dados, autenticação, etc).

Exemplo:
```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/studyin"
NEXTAUTH_SECRET="chave_aleatoria_segura"
```

### 4️⃣ Rodar o servidor de desenvolvimento
```bash
npm run dev
```

O projeto ficará disponível em:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧩 Estrutura do Projeto

```
StudyIn/
├── src/
│   ├── pages/           # Páginas da aplicação (Next.js)
│   ├── components/      # Componentes reutilizáveis
│   ├── server/          # Backend e rotas tRPC
│   └── styles/          # Estilos com Tailwind
├── prisma/              # Esquema e migrações do banco
├── public/              # Imagens e assets estáticos
├── package.json         # Dependências do projeto
└── README.md
```

---

## 👨‍💻 Autor

Desenvolvido por [**Luidgi Varela Carneiro**] e [**Arthur Souza Chagas**]  
Estudantes de Engenharia de Computação na Universidade de Brasília (UnB).
 

