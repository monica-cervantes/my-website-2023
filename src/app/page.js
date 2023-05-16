import Image from 'next/image'
import SectionBanner from './banner'
import SectionWelcome from './welcome'
import SectionTimeline from './timeline'
import SectionSkills from './skills'
import './styles/global.module.scss'

export default function Home() {
  return (
    <main>
      <SectionBanner />
      <SectionWelcome />
      <SectionTimeline />
      <SectionSkills />
    </main>
  )
}
