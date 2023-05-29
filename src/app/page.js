import Banner from './layout/banner'
import Welcome from './layout/welcome'
import Timeline from './layout/timeline'
import Skills from './layout/skills'

export const metadata = {
  title: 'Home | Monica Cervantes',
  description: 'Welcome to Y Website',
};

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