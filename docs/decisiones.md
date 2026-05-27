# Decisiones técnicas

## [2026-05] Migración de Express a FastApi

**Contexto:** Este proyecto es el primero en el que uso backend. Al estar muy vinculado a la inteligencia artificial, siento que podría generar fricción a futuro si decido implementar funciones más acercadas a la IA. A fin de cuentas, Python es el lenguaje principal actual para los LLM. Además, Python es más fácil de entender que Typescript. Si quiero aprender los conceptos del Backend, primero tengo que no renegar tanto por los tipados.

**Decisión:** Migrar a FastAPi con Python en rama separada

**Consecuencias:** 
- **Ganar:** Legibilidad del código, integración natural con librerías de IA, menos fricción para aprender conceptos de backend sin pelear con el tipado.
- **Perder** El ecosistema TypeScript para backend es más maduro en algunos aspectos. Si el proyecto escala a un equipo mixto, Python puede generar fricción con devs de frontend.
