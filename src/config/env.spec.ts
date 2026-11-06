import { describe, expect, it } from 'vitest';
import { WebConfigValidationError, loadWebEnv } from './env';

const baseEnv: Record<string, string | undefined> = {
  NEXT_PUBLIC_API_URL: 'http://localhost:3000',
};

describe('loadWebEnv', () => {
  it('carrega uma configuração válida e aplica o default de ambiente', () => {
    const config = loadWebEnv(baseEnv);

    expect(config.NEXT_PUBLIC_APP_ENV).toBe('development');
    expect(config.NEXT_PUBLIC_API_URL).toBe('http://localhost:3000');
  });

  it('aceita os ambientes de preview e produção', () => {
    expect(loadWebEnv({ ...baseEnv, NEXT_PUBLIC_APP_ENV: 'preview' }).NEXT_PUBLIC_APP_ENV).toBe(
      'preview',
    );
    expect(loadWebEnv({ ...baseEnv, NEXT_PUBLIC_APP_ENV: 'production' }).NEXT_PUBLIC_APP_ENV).toBe(
      'production',
    );
  });

  it('falha quando NEXT_PUBLIC_API_URL está ausente', () => {
    expect(() => loadWebEnv({})).toThrow(WebConfigValidationError);
    expect(() => loadWebEnv({})).toThrow(/NEXT_PUBLIC_API_URL/);
  });

  it('falha quando NEXT_PUBLIC_API_URL não é uma URL', () => {
    expect(() => loadWebEnv({ NEXT_PUBLIC_API_URL: 'nao-e-url' })).toThrow(/NEXT_PUBLIC_API_URL/);
  });

  it('não expõe o valor inválido na mensagem', () => {
    const secret = 'valor-super-secreto';

    try {
      loadWebEnv({ NEXT_PUBLIC_API_URL: secret });
      expect.unreachable('deveria ter falhado');
    } catch (error) {
      expect(error).toBeInstanceOf(WebConfigValidationError);
      expect((error as Error).message).toContain('NEXT_PUBLIC_API_URL');
      expect((error as Error).message).not.toContain(secret);
    }
  });
});
