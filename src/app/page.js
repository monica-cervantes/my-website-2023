'use-client'
import Banner from './layout/banner'
import Welcome from './layout/welcome'
import Timeline from './layout/timeline'
import Skills from './layout/skills'

export default function Home() {
  return (
    <main>
      <Banner />
      <Welcome />
      <Timeline />
      <Skills />
    </main>
  )
}
