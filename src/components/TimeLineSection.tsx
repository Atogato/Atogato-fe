import TimeLine2 from '@/app/project/list/components/TimeLine2'

function randomDate(startDate: Date, endDate: Date) {
  return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
}
function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function TimeLineSection() {
  const dummyProjects = []
  const today = new Date()
  const next7Days = new Date(today)
  next7Days.setDate(today.getDate() + 7)

  for (let i = 1; i <= 10; i++) {
    const createdDate: Date = randomDate(new Date(2023, 0, 1), new Date()) // Random date between Jan 1, 2023, and today
    const applicationDeadline: Date = randomDate(today, next7Days)
    const requiredPeople = Math.floor(Math.random() * 10) + 1
    const numParticipants = getRandomNumber(1, requiredPeople)
    const participants = []
    for (let j = 0; j < numParticipants - 1; j++) {
      participants.push(getRandomNumber(1, 100)) // Assuming participant IDs are between 1 and 100
    }
    dummyProjects.push({
      userId: i + 1,
      projectId: i,
      participantId: participants,
      genre: `Genre ${i}`,
      projectName: `Project ${i}`,
      location: `Location ${i}`,
      creatorArtCategory: `Art Category ${i}`,
      createdDate: [createdDate.getFullYear(), createdDate.getMonth() + 1, createdDate.getDate()],
      applicationDeadline: [
        applicationDeadline.getFullYear(),
        applicationDeadline.getMonth() + 1,
        applicationDeadline.getDate(),
      ],
      requiredPeople: requiredPeople, // Random number of required people
      description: `Description for project ${i}`,
      remoteStatus: Math.random() < 0.5 ? 'Remote' : 'Not Remote', // Random remote status
      liked: Math.floor(Math.random() * 100), // Random liked count
    })
  }

  return (
    <article className="bg-[#F4F2F8] px-64 py-16">
      <header>
        <p className="poppins text-2xl font-semibold text-[#7960BE]/70"> Project </p>
        <h1 className="text-5xl font-semibold leading-snug text-[#171616]/30">
          <strong className="font-semibold text-[#171616]">모집 임박 프로젝트</strong>에 참여해보세요.
        </h1>
      </header>
      <div className="mt-12">
        <TimeLine2 data={dummyProjects} />
      </div>
    </article>
  )
}
