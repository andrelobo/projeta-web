import { z } from 'zod';

/**
 * Contrato de configuração pública do frontend.
 *
 * Validado no carregamento do `next.config.ts`, portanto o build falha
 * antes de gerar artefato quando o ambiente está inválido (SPEC-000 §4.1).
 * Nunca incluir segredo aqui: variáveis `NEXT_PUBLIC_*` vão para o bundle.
 */
export const webEnvSchema = z.object({
  NEXT_PUBLIC_APP_ENV: z.enum(['development', 'preview', 'production']).default('development'),
  NEXT_PUBLIC_API_URL: z.url(),
});

export type WebEnv = z.infer<typeof webEnvSchema>;

export class WebConfigValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WebConfigValidationError';
  }
}

export function loadWebEnv(
  source: Readonly<Record<string, string | undefined>> = process.env,
): WebEnv {
  const result = webEnvSchema.safeParse(source);

  if (!result.success) {
    const details = result.error.issues
      .map((issue) => `${issue.path.join('.') || '(raiz)'}: ${issue.message}`)
      .join('; ');

    throw new WebConfigValidationError(`Configuração de ambiente inválida — ${details}`);
  }

  return result.data;
}
