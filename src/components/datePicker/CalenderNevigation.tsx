import ArrowLeft from '@/icons/arrow-left.svg'
import ArrowRight from '@/icons/arrow-right.svg'
import Dropdown from '@/icons/dropdown.svg'

function Arrow() {}

type Props = {
  mode: 'DAY' | 'MONTH' | 'YEAR'
  month: string
  year: string
  onChangeMonth: (month: string) => void
  onChangeYear: (year: string) => void
}

export default function CalenderNavigation(props: Props) {
  const { mode, month, year, onChangeMonth, onChangeYear } = props

  const handlerChangeMonth = (e: any) => {
    const { value } = e.target
    onChangeMonth(value)
  }

  const handlerChangeYear = (e: any) => {
    const { value } = e.target
    onChangeYear(value)
  }

  return (
    <div className="flex justify-between">
      <div className="flex justify-between">
        {mode === 'DAY' && (
          <ArrowLeft
            onClick={() => {
              const prevMonth = parseInt(month) - 1
              onChangeMonth(`${prevMonth === 0 ? 12 : prevMonth}`)
            }}
          />
        )}

        <div className="flex">
          <p> {month} </p>
          <Dropdown />
        </div>
        {mode === 'DAY' && (
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
