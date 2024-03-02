'use client'
import Calendar from 'react-calendar'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
// import CalenderNavigation from './CalenderNevigation'
import './Calender.css'

type Range<T> = [T, T]
type ValuePiece = Date | null
type Value = ValuePiece | Range<ValuePiece>
type View = 'century' | 'decade' | 'year' | 'month'

export default function CalenderUi({
  date,
  className,
  onSelectDate,
}: {
  date?: Value
  className?: string
  onSelectDate: (value: Value) => void
}) {
  const [mode, setMode] = useState<View>('month')
  // const [month, setMonth] = useState(`${new Date().getMonth() + 1}`)
  // const [year, setYear] = useState(`${new Date().getFullYear()}`)

  // const handlerChangeMode = (value: View) => {
  //   setMode(value)
  // }

  // const handlerChangeMonth = (value: string) => {
  //   setMonth(value)
  // }

  // const handlerChangeYear = (value: string) => {
  //   setYear(value)
  // }

  return (
    <div className={className}>
      <div className="bg-white">
        <Calendar
          locale="en"
          calendarType="gregory"
          formatShortWeekday={(_, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
          onClickDay={(date) => {
            onSelectDate(date)
          }}
          view={mode}
          value={date}
        />
      </div>
    </div>
  )
}
