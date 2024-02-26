'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { Artist } from '@/types/artist'
import DOMPurify from 'dompurify'
import Like from '@/icons/like.svg'
import FolderDocument from '@/icons/folder-document.svg'
import ArrowDown from '@/icons/arrow-down.svg'

const PdfViewer = dynamic(() => import('@/components/pdf-viewer'), { ssr: false })

export default function ArtistDetailContents({ artist }: { artist: Artist }) {
  const DUMMY = {
    name: 'test',
    genre: '연기',
    description: '안녕하세요. 저는 xx아티스트 입니다.',
    detail: ['무술', '액션', '웹드라마'],
    images: ['image', 'image', 'image', 'image', 'image', 'image'],
    pdf: '/test.pdf',
  }

  const [isOpen, setIsOpen] = useState(false)
  const [isCleaned, setIsCleaned] = useState<Boolean>(false)

  function toggle() {
    setIsOpen((status) => !status)
  }

  useEffect(() => {
    if (typeof window != undefined) {
      artist.description = DOMPurify.sanitize(artist.description)
      setIsCleaned(true)
    }
  }, [])

  if (!artist) {
    return <> No artist info </>
  }

  return (
    <article>
      <h1 className="hide"> 아티스트 페이지 </h1>
      <section className="flex justify-between">
        <h2 className="hide"> 아티스트 정보 </h2>
        <section className="flex w-full flex-col gap-y-11">
          <article>
            <h3 className="text-[#171616]/30"> 이름 </h3>
            <p>{artist?.artistName}</p>
          </article>
          <article>
            <h3 className="text-[#171616]/30"> 설명 </h3>
            {isCleaned ? (
              <div className="max-h-96 overflow-y-scroll" dangerouslySetInnerHTML={{ __html: artist.description }} />
            ) : (
              <> Loading...... </>
            )}
          </article>
          <article>
            <h3 className="text-[#171616]/30"> 아티스트 분야 </h3>
            <p> {artist?.creatorArtCategory} </p>
          </article>
        </section>
        <article className="relative h-fit">
          <div className="relative">
            <Image
              className="h-auto w-full"
              src="/images/sample/image.png"
              alt="artist main image"
              width={300}
              height={300}
            ></Image>
            <button className="absolute bottom-3 right-3 rounded-full border border-[#DBDBDE] bg-white p-2 text-black">
              <Like />
            </button>
          </div>
          <button
            className="absolute right-0 mt-2 block rounded-3xl bg-[#7960BE] px-4 py-2 text-sm text-white"
            onClick={() => {}}
          >
            메세지 보내기
          </button>
        </article>
      </section>
      <section className="mb-5">
        <h2 className="hide"> 관심 분야 </h2>
        <ul className="flex gap-x-28">
          {DUMMY.detail.map((field, idx) => {
            return (
              <li key={`detail-${field}-${idx}`}>
                <h3 className="text-[#171616]/30"> 관심 세부 분야 {`${idx + 1}`} </h3>
                <p> {field} </p>
              </li>
            )
          })}
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="hide"> 아티스트 소개 이미지 </h2>
        <div>
          <ul className="gird-rows-2 grid grid-cols-3 gap-5 ">
            {DUMMY.images.map((_, idx) => {
              return (
                <li key={idx}>
                  <Image
                    className="h-auto w-full"
                    src="/images/sample/image.png"
                    alt={`artist-detail-image${idx}`}
                    width={300}
                    height={300}
                    priority
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <div className="flex justify-center">
        <h2 className="hide"> 포트폴리오 파일 조회 </h2>
        {DUMMY.pdf && (
          <button
            onClick={toggle}
            className="flex h-fit min-h-[60px] min-w-[570px] items-center justify-between border border-2 border-[#171616] px-4"
          >
            <div className="flex gap-4">
              <FolderDocument color="#171616" />
              <p> 포트폴리오 보기 </p>
            </div>
            <div className="rounded border-2 border-[#171616] text-[#171616]">
              <ArrowDown />
            </div>
          </button>
        )}
      </div>
      {DUMMY.pdf && isOpen ? <PdfViewer pdf="/test.pdf" /> : <></>}
    </article>
  )
}
