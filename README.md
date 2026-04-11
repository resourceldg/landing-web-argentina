# Web Express Profesional

Sistema de multi-landing pages para ofrecer servicios de diseño web estática a profesionales independientes en Argentina.

## 🚀 Deploy

**URL Principal:** https://xdoicrs27gccg.ok.kimi.link/

## 📄 Landings Disponibles

| Ruta | Enfoque | Descripción |
|------|---------|-------------|
| `/` | General | Landing principal con oferta base |
| `/#/profesionales` | Autoridad | Enfoque en profesionales serios (abogados, médicos, etc.) |
| `/#/regalo` | Regalo | Gift card para regalar una web |
| `/#/instagram-a-web` | Orden digital | Para quienes solo tienen Instagram |
| `/#/whatsapp` | Conversiones | Enfoque en recibir más consultas por WhatsApp |
| `/#/web-50k` | Precio | Enfoque en el precio accesible |

## 💰 Sistema de Precios - 3 Planes

### Plan Inicio — ARS 50.000
**Tu web personal simple, prolija y lista en el día.**

- 1 landing page simple
- Diseño responsive
- Botón a WhatsApp
- Datos de contacto visibles
- Link listo para compartir
- Entrega en el día

**Ideal para:** psicólogos, nutricionistas, abogados, contadores, coaches, freelancers

---

### Plan Profesional — ARS 150.000 ⭐ MÁS ELEGIDO
**Una web más completa para mostrar mejor tus servicios y generar más consultas.**

- Todo lo del plan Inicio
- Hasta 5 secciones
- Sección de servicios
- Perfil profesional
- Testimonios de clientes
- Preguntas frecuentes
- Formulario de contacto

**Ideal para:** profesionales que atienden pacientes o clientes, estudios o consultorios

---

### Plan Premium — ARS 300.000
**Una presencia online más fuerte, más personalizada y más vendedora.**

- Todo lo del plan Profesional
- Diseño premium personalizado
- Copy orientado a conversión
- Estructura avanzada
- Múltiples llamadas a la acción
- Prioridad de entrega
- Ajustes extra incluidos

**Ideal para:** médicos, abogados, consultores, coaches premium, profesionales con servicios de mayor ticket

---

## 🎯 Mensaje Clave de Baja Fricción

> **"Solo me pasás tu Gmail y tu teléfono. En el día tenés tu web personal."**

Esta fórmula elimina objeciones:
- ❌ "No sé qué tengo que mandar"
- ❌ "No tengo tiempo"
- ❌ "Seguro me van a pedir mil cosas"
- ❌ "Me da fiaca empezar"

## 🛠 Stack Tecnológico

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router (HashRouter)
- Lucide Icons

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── shared/           # Componentes reutilizables
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── WhatsAppButton.tsx
│       ├── HeroSection.tsx
│       ├── PainPointsSection.tsx
│       ├── BenefitsSection.tsx
│       ├── PricingCards.tsx     # NUEVO: 3 planes
│       ├── FAQSection.tsx
│       └── CTASection.tsx
├── landings/             # Páginas de cada landing
│   ├── HomeLanding.tsx
│   ├── ProfesionalesLanding.tsx
│   ├── RegaloLanding.tsx
│   ├── InstagramWebLanding.tsx
│   ├── WhatsAppLanding.tsx
│   └── PrecioLanding.tsx
├── App.tsx
└── index.css
```

## 🎨 Sistema de Diseño

### Colores
- **Primario:** Blue-600 (#2563eb)
- **Secundario:** Slate-900
- **Acento:** Green-500 (WhatsApp)
- **Fondo:** Gradientes suaves de azul y blanco

### Tipografía
- **Fuente:** Inter (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700, 800

## 📱 Funcionalidades

### Navegación
- Header fijo con scroll
- Navegación suave entre secciones
- Menú mobile hamburguesa

### CTAs
- Botones de WhatsApp en todo el sitio
- Links a diferentes landings
- Mensajes predefinidos por plan

### SEO
- Meta tags por página
- Títulos descriptivos
- Keywords específicas por nicho

## 🧪 Estrategia de Testing A/B

Cada landing tiene un enfoque diferente para testear qué mensaje convierte mejor:

1. **Home:** Mensaje general, beneficios claros
2. **Profesionales:** Autoridad, confianza, seriedad
3. **Regalo:** Emocional, útil, para terceros
4. **Instagram-a-web:** Problema-solución, orden digital
5. **WhatsApp:** Conversión directa, más consultas
6. **Precio:** Accesibilidad, sin complicaciones

### Métricas a trackear
- Clics en botones de WhatsApp por plan
- Tiempo en página
- Bounce rate
- Conversiones por landing
- Plan más elegido

## 📝 Copy Principal

### Headlines
- "Tu web personal lista en el día"
- "Solo me pasás tu Gmail y tu teléfono"
- "Tu profesión merece una web profesional"
- "Regalale a tu profesional una web"
- "Tenés Instagram. Ahora te falta una web."
- "Una web simple para que te escriban más por WhatsApp"
- "Tu web profesional por menos de lo que sale un celular"

### Subheadlines
- "Sin vueltas. Sin reuniones eternas. Sin complicarte."
- "Elegís tu plan y en horas tenés tu web personal online"
- "Diseñada para profesionales que quieren verse serios sin gastar de más"

### CTAs
- "Quiero mi web hoy"
- "Quiero este plan"
- "Quiero el plan profesional"
- "Quiero el plan premium"
- "Pedir por WhatsApp"

## 🎁 Nichos Objetivo

### Primarios
- Psicólogos
- Nutricionistas
- Abogados
- Contadores
- Odontólogos
- Kinesiólogos
- Coaches
- Arquitectos
- Escribanos
- Dermatólogos/Estética

### Secundarios
- Freelancers
- Emprendedores de servicios
- Monotributistas

## 📞 Contacto

- **WhatsApp:** +54 9 11 1234-5678 *(actualizar con tu número)*
- **Email:** hola@webexpress.ar
- **Ubicación:** Buenos Aires, Argentina

## 🚀 Deploy en Vercel

Para deployar en Vercel con rutas limpias (sin #):

1. Cambiar `HashRouter` a `BrowserRouter` en `App.tsx`
2. Crear `vercel.json` con rewrites:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
3. Deployar con CLI de Vercel o conectando el repo

## 📦 Build

```bash
npm install
npm run build
```

El build se genera en `/dist`.

## 🔧 Personalización

### Cambiar número de WhatsApp
Buscar y reemplazar en todos los archivos:
- `5491112345678` → Tu número real

### Cambiar precios
Editar `src/components/shared/PricingCards.tsx`

### Cambiar textos
Editar cada landing en `src/landings/`

---

**Nota:** Este proyecto está diseñado para maximizar conversiones con el mensaje de ultra baja fricción: "Solo Gmail + teléfono = web lista en el día"
