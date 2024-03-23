import ArtistSection from '@/components/ArtistSection2'
import Banner from '@/components/Banner'
import ProjectSection from '@/components/ProjectSection'
import RandomSection from '@/components/RandomSection'
import TimeLineSection from '@/components/TimeLineSection'

export default function HomePage() {
  return (
    <main>
      <Banner className="min-h-fit" />
      <section>
        <ProjectSection />
      </section>
      <section>
        <TimeLineSection />
      </section>
      <section>
        <ArtistSection />
      </section>
      <section>
        <RandomSection />
      </section>
    </main>
  )
}
