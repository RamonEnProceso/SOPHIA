# Roadmap — SOPHIA

## Fase 1 — Base funcional
> SOPHIA puede chatear. Nada más.
- [x] Conectar FastAPI con Ollama
- [x] Endpoint de chat básico
- [x] Estructura de carpetas definitiva (routers, services, models, ai)
- [x] Documentación base (arquitectura, decisiones)

## Fase 2 — Memoria contextual
> SOPHIA recuerda lo que le contás dentro de una conversación
  y entre conversaciones.
- [x] Historial de conversación por sesión (en memoria)
- [x] Crear Docker con PostgreSQL
- [ ] Persistencia de historial en PostgreSQL
- [ ] Memoria semántica con pgvector (RAG básico)
- [ ] Primeras "memorias fijas": gustos musicales, preferencias

## Fase 3 — Análisis de datos personales
> SOPHIA puede leer, analizar y explicar datos tuyos.
  Esta fase te entrena para el concurso.
- [ ] Endpoint para subir CSV
- [ ] Análisis automático con pandas (estadísticas básicas,
      cuellos de botella)
- [ ] Visualizaciones con matplotlib/seaborn
- [ ] SOPHIA interpreta los gráficos y los explica en lenguaje natural
- [ ] Informe exportable (base para el formato del concurso)

## Fase 4 — Avatar interactivo
> SOPHIA tiene cara. Three.js entra acá y no antes.
- [ ] Setup de Three.js en el frontend React
- [ ] Avatar 3D con estados visuales básicos (idle, hablando,
      procesando)
- [ ] Sincronización de estados con respuestas del backend

## Fase 5 — Pulido y portfolio
- [ ] Docker Compose con todos los servicios
- [ ] README final
- [ ] Deploy o demo grabada