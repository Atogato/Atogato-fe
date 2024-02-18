import { useModalDispatch } from '@/hooks/modal/useModal'

export default function ApplicationModal({ ...props }) {
  const { isOpen, className } = props
  if (!isOpen) {
    return
  }

  const { closeModal } = useModalDispatch()

  return (
    <div className={`bg-[#F2EFF8] ${className}`}>
      <div className="absolute left-10 top-10 ">
        <h1 className="Pretendard text-[30px] font-bold"> 지원동기! </h1>
      </div>
      <div className="absolute right-10 top-10 text-[20px]">
        <button onClick={closeModal}>닫기</button>
      </div>
      <div className="Pretendard text-[40px]">
        <p> 준비중인 기능입니다 </p>
      </div>
    </div>
  )
}
