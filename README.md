📦 Estoque Fácil

Estoque Fácil é uma aplicação web moderna e responsiva para controle e gestão de estoque, desenvolvida tanto para fins práticos quanto como projeto pedagógico guiado para o ensino de desenvolvimento web front-end e integração com serviços Backend-as-a-Service (BaaS).

🚀 Tecnologias Utilizadas

HTML5 & CSS3: Estruturação semântica e estilização responsiva com CSS Grid e Media Queries.

JavaScript (ES6+): Lógica da aplicação, manipulação dinâmica do DOM e consumo de APIs assíncronas (async/await).

Supabase: Backend para banco de dados relacional (PostgreSQL) e autenticação de usuários.

Google Cloud Console (OAuth 2.0): Provedor de autenticação social integrado ao Supabase.

🛠️ Funcionalidades

[x] Autenticação via Google OAuth: Login seguro utilizando a conta Google.

[x] Proteção de Rotas: Controle de acesso às telas do sistema com base na sessão ativa do Supabase.

[x] Encerramento de Sessão (Logout): Limpeza de tokens de autenticação e redirecionamento automático.

[x] Listagem de Produtos: Leitura e exibição em tempo real dos dados armazenados na tabela produtos.

[ ] Cadastro de Produtos (em desenvolvimento).

[ ] Edição/Atualização de Produtos (em desenvolvimento).

[ ] Exclusão de Produtos (em desenvolvimento).

📁 Estrutura do Projeto

estoque-facil/
├── index.html        # Menu principal (Rota protegida)
├── login.html        # Tela de login com Google OAuth
├── listar.html       # Visualização dos produtos cadastrados
├── cadastrar.html    # Cadastro de novos produtos
├── atualizar.html    # Atualização de produtos
├── excluir.html      # Remoção de produtos
├── css/
│   ├── style.css      # Estilos gerais e componentes
│   └── responsivo.css # Regras de media queries (Mobile First/Grid)
└── js/
    └── conectar.js    # Inicialização do cliente Supabase


⚙️ Configuração do Ambiente

1. Configurando o Google Cloud (OAuth 2.0)

Acesse o Google Cloud Console.

Crie um novo projeto (ex: Estoque Fácil).

Em APIs e Serviços > Tela de consentimento OAuth, escolha o tipo Externo e preencha as informações do app.

Vá em Credenciais > + Criar Credenciais > ID do cliente OAuth.

Selecione Aplicativo da Web.

Em URIs de redirecionamento autorizados, cole a URL fornecida pelo Supabase:

https://<seu-projeto>.supabase.co/auth/v1/callback


Guarde o Client ID e o Client Secret gerados.

2. Configurando o Supabase

No painel do Supabase, navegue até Authentication > Providers > Google.

Habilite a opção Enable Sign in with Google.

Insira o Client ID e o Client Secret obtidos no Google Cloud.

Crie a tabela produtos no Table Editor com as colunas necessárias (ex: id, nome, quantidade, preco).

Defina as políticas de segurança (RLS - Row Level Security) apropriadas para liberar a leitura/escrita de dados.

3. Integração com o Frontend

No arquivo js/conectar.js, insira suas credenciais do Supabase:

const SUPABASE_URL = 'https://<seu-projeto>.supabase.co';
const SUPABASE_KEY = 'sua-chave-anon-publica';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


🎓 Conteúdo Pedagógico Abordado

Este projeto foi desenhado para ensinar os seguintes conceitos de desenvolvimento web:

HTML Semântico: Uso de <header>, <main>, <footer>, <section> e atributos globais (id, class).

CSS Responsivo: Layouts adaptáveis com display: grid e @media screen.

DOM & Eventos: Seleção de elementos, manipulação dinâmica e addEventListener.

Programação Assíncrona: Entendimento de requisições HTTP (GET/POST/PUT/DELETE), JSON e uso de async/await.

Autenticação & BaaS: Integração com proovedores de identidade OAuth 2.0 e bancos de dados em nuvem.

📄 Licença

Este projeto está licenciado sob a licença MIT - sinta-se à vontade para utilizar, modificar e distribuir para fins educacionais e comerciais.
