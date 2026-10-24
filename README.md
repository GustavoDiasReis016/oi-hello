# Instituto Somos Esporte

Portal institucional em React + TypeScript + TanStack Start. Cores: azul-marinho, azul royal, amarelo e branco.

## Configuração do Supabase
1. Crie um projeto Supabase.
2. Execute `supabase/migrations/20261024000000_instituto_somos_esporte.sql` no SQL Editor.
3. Copie `.env.example` para `.env.local` e configure `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` com os dados públicos do projeto.
4. Execute `bun install` e `bun run dev`.
5. Crie a conta do proprietário no Supabase Auth. O perfil começa como responsável; para torná-lo admin, use o UPDATE comentado ao final da migration com o UUID correto.

## Incluído
Página institucional responsiva, horários, endereço, Instagram, WhatsApp, formulários de matrícula e contato, login Supabase, portal inicial, publicação de recursos/eventos e migration com tabelas para perfis, alunos, matrículas, presença, pagamentos, recursos, eventos, galeria, mensagens, sugestões e contato.

## Antes de produção
Ainda é necessário configurar/testar Supabase, criar cadastro e recuperação de senha no site, completar CRUD de pagamentos/frequência/galeria/mensagens/sugestões, testar RLS, configurar armazenamento, backups, consentimento/LGPD para dados de menores e integrar pagamentos se aplicável. Nunca exponha service_role em variáveis VITE_*.
