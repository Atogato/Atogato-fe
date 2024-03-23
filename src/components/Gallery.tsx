import Image from 'next/image'

export default function Gallery({ images = [] }: { images: string[] }) {
  if (images.length === 0) {
    return <div></div>
  }
  const selectedImages = images.slice(0, 9)
  return (
    <ul className="grid auto-rows-[1px] grid-cols-3 gap-5">
      {selectedImages.map((image, idx) => {
        let rowSpan = '2xl:row-end-[span_25] xl:row-end-[span_16] lg:row-end-[span_15] row-end-[span_10]'
        switch (idx) {
          case 1:
          case 6:
          case 7:
            rowSpan = '2xl:row-end-[span_30] xl:row-end-[span_21] lg:row-end-[span_20] row-end-[span_15]'
        }

        const className = `${rowSpan} relative w-full overflow-hidden`
        return (
          <li key={`project-image-${idx}`} className={className}>
            <div className="relative h-full w-full duration-100 ease-out hover:scale-125 hover:cursor-pointer">
              <figure className="h-full w-full">
                <Image src={image} alt={`project image`} width={400} height={400} className="h-full w-full"></Image>
                <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black opacity-70	"></div>
              </figure>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
