# HeroSplitMedia · Frontend Challenge — Invisible Geeks

Implementación del componente **`HeroSplitMedia`** (variante `split-media`) replicando el diseño de
Figma con **Vue 3 + Tailwind CSS**.

🔗 **Demo en vivo:** <https://frontend-challenge-ten-cyan.vercel.app>
💻 **Stack:** Vue 3 · Tailwind CSS · Vite

> El brief original del challenge está en **[CHALLENGE.md](./CHALLENGE.md)** y las specs de diseño en
> **[DESIGN.md](./DESIGN.md)**.

---

## 🚀 Cómo correrlo

Requiere **Node 20+**.

```bash
npm install
npm run dev
```

Abre en `http://localhost:5173`.

---

## 🧱 Decisiones de arquitectura

Separé el componente en piezas chicas y con una sola responsabilidad, para que sea fácil de leer,
reutilizar y testear:

```
src/
├─ components/hero/
│  ├─ HeroSplitMedia.vue   → componente principal: layout de 2 columnas + props
│  ├─ MediaFrame.vue       → la imagen y sus 4 cuartos de círculo
│  └─ CategoryBadge.vue    → el badge de categoría (reutilizable vía slot)
├─ App.vue                 → monta el hero con datos de ejemplo (props)
└─ tailwind.config.js      → design tokens
```

**Por qué así:** `HeroSplitMedia` no sabe *cómo* se dibuja la imagen ni el badge — solo los compone.
Eso deja el `MediaFrame` (la parte con más lógica visual) aislado y el badge desacoplado para poder
reusarlo con cualquier texto.

### Props de `HeroSplitMedia`

| Prop | Tipo | Descripción |
| --- | --- | --- |
| `category` | String | Texto del badge |
| `title` | String | Título (soporta salto de línea con `\n`) |
| `description` | String | Descripción |
| `image` / `imageAlt` | String | Foto y su texto alternativo |
| `logo` | String | Logo (opcional) |
| `align` | `'left' \| 'right'` | Espeja el layout (imagen a izquierda o derecha) |

---

## 🟢 Los 4 cuartos de círculo

Los resolví con **CSS puro (Tailwind)**, no como imágenes: cada cuarto es un `<span>` cuadrado con
una esquina redondeada al 100% (`rounded-tr-full`, `rounded-br-full`, etc.). Son elementos
decorativos, así que van con `aria-hidden`.

El **orden de capas** se controla con `z-index`, respetando el diseño:

- Cuartos **verdes grandes** (arriba-der y abajo-izq) → **detrás** de la imagen (`z-0`)
- Imagen → `z-10`
- Cuarto **verde chico** (arriba-izq) y **negro** (abajo-der) → **adelante** (`z-20`)

Las medidas (grupo 649×538, foto 508×380, cuartos 167/112) salieron directo del Figma.

---

## 🎨 Design tokens

Definí los tokens en `tailwind.config.js` para no repetir valores mágicos y mantener consistencia:

- **Colores:** `banner` (#F5F5F5), `ink` (#121212), `muted` (#494B4D), `brand` (#00C266)
- **Tipografías:** `display` (Bricolage Grotesque) y `body` (Manrope)
- **Radio:** `media` (20px) para la imagen

---

## 📱 Responsive

- **Desktop (frame 1440):** vista principal, fiel al Figma.
- **Compacto (frame 1024):** mismo layout en fila, más compacto (imagen y espaciados reducidos, el
  logo pasa dentro del bloque de texto). Nunca se apila en columna.

El breakpoint está definido como token (`laptop`) en Tailwind.

---

## ✨ Extras

- ♿ **Accesibilidad:** HTML semántico (`<section>`, `<h1>`, `<p>`), `alt` en la imagen, formas
  decorativas ocultas a lectores de pantalla (`aria-hidden`).
- ↔️ **Prop `align`** para espejar el layout.
- ⚡ **Performance:** la foto se sirve en **WebP** (~19KB vs ~282KB en PNG) para carga más rápida.

---

## 🤝 Cómo trabajo

Uso herramientas de IA (Claude Code) como par de trabajo, pero **reviso, entiendo y valido cada
línea**: la arquitectura, los nombres, los tokens y las medidas son decisiones mías. Prefiero ser
transparente con esto porque para mí lo importante es el criterio, no la herramienta.

