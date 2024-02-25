import { useModalDispatch } from '@/hooks/modal/useModal'

export default function ApplicationModal({ ...props }) {
  const { isOpen, className } = props
  const { closeModal } = useModalDispatch()

  if (!isOpen) {
    return
  }

  return (
    <div className={`h-[500px]  rounded-lg bg-[#F2EFF8] ${className}`}>
      <div className="absolute left-10 top-8 font-semibold">
        <h1 className="Pretendard text-[25px]"> 지원동기 </h1>
      </div>

      <div className="absolute right-10 top-10 text-[20px]">
        <button onClick={closeModal}>닫기</button>
      </div>
      <div>
        <form className="mx-[40px] mt-[90px] h-[300px] rounded-md border border-[#EBEBEB]">
          <textarea
            //   onChange={onChange}
            //   onKeyDown={handleKeyDown}
            placeholder="준비중인 기능입니다"
            className="h-full w-full resize-none rounded-md bg-[#FAFAFA] p-2 pl-2 pt-2"
          />
        </form>
      </div>
      <div className="mt-[32px] flex h-[64px] justify-center">
        <button className="pretendard mx-[40px] rounded bg-[#7960BE] px-[24px] py-[9.5px] text-[20px] font-bold text-white">
          전송하기
        </button>
      </div>
    </div>
  )
}
