# projeta-web

Frontend do **PROJETA** — Next.js + TypeScript, implantado na **Vercel** por pipeline de GitHub Actions.

> **Status:** pré-implementação. Nenhuma funcionalidade de aplicação foi escrita.
> A especificação vigente está em [andrelobo/projeta](https://github.com/andrelobo/projeta).

## Stack prevista

- Next.js (App Router) + TypeScript strict
- Consumo de `@projeta/contracts` (versão exata) e client gerado do OpenAPI
- Deploy: `vercel pull` → `vercel build` → `vercel deploy --prebuilt` em GitHub Actions

## Documentação

- [PRD](https://github.com/andrelobo/projeta/blob/main/docs/product/PRD.md)
- [System design](https://github.com/andrelobo/projeta/blob/main/docs/architecture/SYSTEM_DESIGN.md)
- [Especificações](https://github.com/andrelobo/projeta/blob/main/docs/specifications/README.md)
- [Plano de implementação](https://github.com/andrelobo/projeta/blob/main/docs/implementation/IMPLEMENTATION_PLAN.md)

## Licença

A definir (OPEN-047).
