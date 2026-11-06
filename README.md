# projeta-web

Frontend do **PROJETA** — Next.js + TypeScript, implantado na **Vercel** por pipeline de GitHub Actions.

> **Status:** fundação técnica (M0.1 e M0.2) concluída. Existe apenas o shell mínimo do App Router, sem funcionalidade de produto.
> A especificação vigente está em [andrelobo/projeta](https://github.com/andrelobo/projeta).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript strict
- Configuração pública validada com Zod no carregamento do `next.config.ts`
- Vitest para testes unitários
- ESLint (flat config) + Prettier
- Consumo futuro de `@projeta/contracts` (versão exata) e client gerado do OpenAPI
- Deploy: `vercel pull` → `vercel build` → `vercel deploy --prebuilt` em GitHub Actions

## Requisitos

- Node.js 22 (`.nvmrc`)
- pnpm 11 (`corepack enable`)

## Como executar

```bash
cp .env.example .env.local
pnpm install
pnpm dev                   # http://localhost:3001
```

O build falha de forma explícita se `NEXT_PUBLIC_API_URL` estiver ausente ou inválida. Para rodar as verificações sem `.env.local`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000 pnpm typecheck
NEXT_PUBLIC_API_URL=http://localhost:3000 pnpm build
```

## Scripts

| Comando                             | Função                                       |
| :---------------------------------- | :------------------------------------------- |
| `pnpm dev`                          | sobe em modo desenvolvimento na porta 3001   |
| `pnpm build`                        | build de produção                            |
| `pnpm start`                        | serve o build na porta 3001                  |
| `pnpm typecheck`                    | gera tipos de rota do Next e roda TypeScript |
| `pnpm lint` / `pnpm lint:fix`       | ESLint                                       |
| `pnpm format` / `pnpm format:check` | Prettier                                     |
| `pnpm test` / `pnpm test:watch`     | Vitest                                       |

## Estrutura atual

```
src/
├── app/
│   ├── layout.tsx      # lang="pt-BR", metadados e estilos base
│   ├── page.tsx        # shell mínimo
│   └── globals.css     # tokens, foco visível, preferência de movimento
└── config/
    ├── env.ts          # schema Zod das variáveis públicas
    └── env.spec.ts     # testes do contrato de configuração
```

## GitHub Packages

O `.npmrc` versionado define apenas `@projeta:registry`. O token de leitura **não** fica no repositório; veja [`docs/implementation/GITHUB_PACKAGES.md`](https://github.com/andrelobo/projeta/blob/main/docs/implementation/GITHUB_PACKAGES.md).

## Documentação

- [PRD](https://github.com/andrelobo/projeta/blob/main/docs/product/PRD.md)
- [System design](https://github.com/andrelobo/projeta/blob/main/docs/architecture/SYSTEM_DESIGN.md)
- [Especificações](https://github.com/andrelobo/projeta/blob/main/docs/specifications/README.md)
- [Plano de implementação](https://github.com/andrelobo/projeta/blob/main/docs/implementation/IMPLEMENTATION_PLAN.md)

## Licença

[Apache License 2.0](LICENSE) — © 2026 André Lobo (andrelobo). Ver ADR-025.

A licença cobre código e documentação; marca e identidade visual não são licenciadas.
