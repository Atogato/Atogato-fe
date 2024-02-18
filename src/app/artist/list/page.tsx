import Filter from './components/Filter'
// import { useEffect, useState } from 'react'

// Feedback: type을 page에서 export하기보다는 따로 types 모아놓는 곳을 생성하셔서 거기서 관리를 하는 게 더 좋아 보입니다.

export default function ArtistListPage() {
  // const [result, setResult] = useState<Artists[]>([])
  const result = [
    {
      artistId: 0,
      artistName: 'test',
      location: '서울',
      description: 'test용 데이터입니다.',
      creatorArtCategory: '공연',
      liked: 5,
    },
  ]
  // useEffect(() => {
  //   const api = async () => {
  //     const data = await fetch(process.env.BACKEND_API_URL + 'artists', {
  //       method: 'GET',
  //     })
  //     const jsonData = await data.json()
  //     setResult(jsonData)
  //   }

  //   api()
  // }, [])
  // console.log(result)

  return (
    <div>
      <div>
        <Filter data={result} />
      </div>
    </div>
  )
}
