import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components'
import { Home, ProjectDetail } from '@/pages'
import { useScrollRestoration } from '@/hooks/useScrollRestoration'

export default function App() {
  useScrollRestoration()

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Route>
    </Routes>
  )
}
