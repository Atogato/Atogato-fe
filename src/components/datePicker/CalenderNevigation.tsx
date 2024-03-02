import ArrowLeft from '@/icons/arrow-left.svg'
import ArrowRight from '@/icons/arrow-right.svg'
import Dropdown from '@/icons/dropdown.svg'

type Props = {
  mode: 'century' | 'decade' | 'year' | 'month'
  month: string
  year: string
  onChangeMode: (value: 'century' | 'decade' | 'year' | 'month') => void
  onChangeMonth: (month: string) => void
  onChangeYear: (year: string) => void
}

export default function CalenderNavigation(props: Props) {
  const { mode, month, year, onChangeMode, onChangeMonth, onChangeYear } = props

  return (
    <div className="flex justify-between bg-[#7960BE]/10">
      <div className="flex justify-between">
        {mode === 'month' && (
          <ArrowLeft
            onClick={() => {
              const prevMonth = parseInt(month) - 1
              onChangeMonth(`${prevMonth === 0 ? 12 : prevMonth}`)
            }}
          />
        )}

        <div className="flex">
          <button
            className="flex"
            onClick={(e) => {
              e.preventDefault()
              onChangeMode('year')
            }}
          >
            <p> {month} </p>
            <Dropdown />
          </button>
        </div>
        {mode === 'month' && (
          <ArrowRight
            onClick={() => {
              const nextMonth = (parseInt(month) + 1) % 12
              onChangeMonth(`${nextMonth === 0 ? 1 : nextMonth}`)
            }}
          />
        )}
      </div>
      <div className="flex justify-between">
        <ArrowLeft />
        <div className="flex">
          <p> {year} </p>
          <Dropdown />
        </div>
        <ArrowRight />
      </div>
    </div>
  )
}
