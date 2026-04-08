# SOPHIA 🧠✨  
**Sistema de Asistencia Cognitiva con Memoria Contextual y Avatar Interactivo**

---

## 🧭 Overview

SOPHIA es un sistema de asistencia cognitiva diseñado para mejorar la toma de decisiones, la organización personal y el aprendizaje continuo mediante el uso de modelos de lenguaje, memoria contextual (RAG) y una interfaz visual interactiva.

El proyecto combina backend, frontend y diseño visual para crear una experiencia que va más allá de un chatbot tradicional: una entidad que **interpreta, recuerda y responde con intención**.

---

## 🚀 Objetivos

- Proveer asistencia personalizada basada en contexto e historial
- Implementar memoria persistente mediante RAG
- Explorar la interacción humano-IA a través de un avatar visual
- Construir un proyecto sólido y escalable para portfolio profesional

---

## 🧠 Concepto

SOPHIA no es solo un chatbot.

Es un sistema que:
- **Recuerda información relevante del usuario**
- **Detecta patrones en comportamiento y decisiones**
- **Ofrece feedback crítico y estructurado**
- **Actúa como extensión cognitiva (second brain)**

---

## 🏗️ Arquitectura

### 🧠 Backend (Core Cognitivo)

- Node.js + Express (TypeScript)
- Endpoint principal: `/chat`
- Integración con modelos LLM (Ollama / API externa)
- Sistema RAG (Retrieval-Augmented Generation)
- Base de datos vectorial:
  - ChromaDB
- Manejo de contexto:
  - Inyección dinámica en prompts

---

### 🎨 Frontend (Interfaz)

- React + TypeScript
- Sistema de chat interactivo
- Animaciones con GSAP
- Renderizado de avatar con Three.js (React Three Fiber)

---

### 🖌️ Visuales

- Diseño del avatar: Krita
- Modelado: Blender

---

## 🧩 Features

- ✔️ Chat funcional con IA
- ✔️ Personalidad definida mediante system prompt
- ✔️ Integración inicial de RAG
- 🚧 Memoria persistente de conversaciones
- 🚧 Avatar con estados emocionales dinámicos
- 🚧 Sincronización respuesta IA → animación

---

## ⚙️ Roadmap

### Fase 1 - Chat
- [x] Endpoint `/chat`
- [x] Integración con modelo LLM
- [ ] Render en frontend

### Fase 2 - Personalidad
- [x] System prompt estructurado
- [x] Respuestas con carácter definido

### Fase 3 - Memoria (RAG)
- [x] Estructuración de datos en JSON
- [x] Generación de embeddings
- [x] Recuperación de contexto relevante

### Fase 4 - Persistencia
- [ ] Historial de conversaciones
- [ ] Reinyección automática en prompts

### Fase 5 - Avatar
- [ ] Escena básica en Three.js
- [ ] Estados visuales (idle, thinking, speaking)
- [ ] Mapeo emoción → animación

---

## 🧪 Stack Tecnológico

- **Backend:** Node.js, Express, TypeScript  
- **IA:** Ollama, LLMs (Qwen / LLaMA / otros)  
- **RAG:** ChromaDB  
- **Frontend:** React, TypeScript  
- **Animaciones:** GSAP  
- **3D:** Three.js (React Three Fiber)  
- **Arte:** Krita, Blender  

---

## 📌 Estado del Proyecto

En desarrollo activo.

Actualmente enfocado en:
- consolidar el sistema de memoria (RAG)
- mejorar la calidad del contexto
- conectar backend con frontend

---

## 🧠 Aprendizajes Clave

Este proyecto explora:

- Implementación práctica de RAG
- Manejo de contexto en LLMs
- Diseño de sistemas híbridos (IA + frontend interactivo)
- Arquitectura modular escalable
- UX aplicada a inteligencia artificial

---

## 📈 Futuro

- Sistema de tracking de hábitos y decisiones
- Mejora del modelo de memoria (priorización / scoring)
- Avatar con mayor expresividad y sincronización en tiempo real
- Posible integración como asistente interactivo o contenido multimedia

---