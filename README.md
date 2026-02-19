# CV Digital React + Bulma

Proyecto de portafolio profesional dinámico para la historia de usuario **US-01**.

- Frontend: React + Vite + Bulma
- API de datos: Spring Boot (endpoint remoto con `X-API-KEY`)
- Publicación: GitHub Pages (automática por GitHub Actions) o Azure App Service

## 1) Variables del frontend

Este proyecto consume por defecto:

- `VITE_RESUME_API_URL=https://backend-cv-webapp-hxfdheeydyc0ajdt.canadacentral-01.azurewebsites.net/backend-service/v1/api/resume`
- `VITE_RESUME_API_KEY=my-secret-key`

En GitHub:

1. Crear secret del repositorio: `VITE_RESUME_API_KEY`
2. Crear variable del repositorio: `VITE_RESUME_API_URL`

## 2) Publicar en GitHub Pages (sin npm local)

1. Sube la carpeta `cv-digital-react` a un repositorio en GitHub.
2. Verifica que la rama principal sea `main`.
3. En GitHub, abre `Settings > Pages`.
4. En `Build and deployment`, selecciona `GitHub Actions`.
5. Haz push a `main` para disparar el workflow en `.github/workflows/deploy-github-pages.yml`.
6. Espera el pipeline; al finalizar tendrás la URL pública de Pages.

## 3) Publicar frontend en Azure App Service (opcional)

Puedes desplegar `dist` como sitio estático o desplegar el proyecto con un pipeline CI/CD.

Flujo recomendado:

1. En GitHub, habilita un workflow de build (`npm ci` + `npm run build`).
2. Publica el contenido de `dist` en Azure App Service Web App.
3. Configura variables de app en Azure:
   - `VITE_RESUME_API_URL`
   - `VITE_RESUME_API_KEY`
4. Verifica CORS en backend para permitir solo el dominio final del frontend.

## 4) Evidencia de criterios US-01

- API desacoplada: frontend consume endpoint REST externo.
- Interactividad: estados `isLoading`, `error`, `retry` implementados.
- Seguridad CORS: se valida desde backend (debe permitir solo dominio del frontend).
- Disponibilidad cloud: flujo de despliegue a GitHub Pages/Azure listo.
- Clean code: separación en componentes, hook de datos y configuración desacoplada.

## 5) Estructura

- `src/hooks/useResume.js`: consumo API y manejo de estados.
- `src/components/PortfolioPage.jsx`: render del CV dinámico.
- `src/components/ResumeSkeleton.jsx`: skeleton loading.
- `src/config.js`: endpoint y API key por variables de entorno.
- `.github/workflows/deploy-github-pages.yml`: despliegue automático a Pages.
