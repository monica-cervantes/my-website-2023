'use-client'
import Banner from './layout/banner'
import Welcome from './layout/welcome'
import Timeline from './layout/timeline'
import Skills from './layout/skills'

const Home = () => {
  return (
    <main>
      <Banner name="experience" />
      <Welcome />
      <Timeline />
      <Skills />
    </main>
  )
}

export default Home;