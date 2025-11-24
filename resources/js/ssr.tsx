import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import ReactDOMServer from 'react-dom/server'
import '../css/app.css'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

export default createServer((page) =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
      resolvePageComponent(
        `./Pages/${name}.tsx`,
        import.meta.glob('./Pages/**/*.tsx')
      ),
    setup: ({ App, props }) => <App {...props} />,
  })
)
