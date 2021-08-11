import { TDatePanelProps } from '../types'
import { getMonthWeeklyDays, WEEK_DAYS } from '../utils'
import { handleDateEnter, cellClassName, trigEvent } from '../helper'
import Toolbar from '../toolbar'
import './index.scss'

const CalendarDatePanel = (props: TDatePanelProps) => {
    return (
        <div className="devui-calendar-panel">
            <Toolbar
                current={props.current}
                compare={props.compare}
                pos={props.pos}
                type={props.type}
                showTime={props.showTime}
                onPreviousYear={props.onPreviousYear}
                onPreviousMonth={props.onPreviousMonth}
                onNextMonth={props.onNextMonth}
                onNextYear={props.onNextYear}
            />
            <ol className="head row">{
                WEEK_DAYS.map(day => <li className="cell">{day}</li>)
            }</ol>
            <ul className="body">{
                getMonthWeeklyDays(props.current).map(row => <li className="row">{
                    row.map(day => {
                        return (
                            <span
                                className={cellClassName(props as TDatePanelProps, day)}
                                onClick={() => trigEvent(props as TDatePanelProps, day)}
                                onMouseenter={() => handleDateEnter(props as TDatePanelProps, day)}
                            >{day.date.getDate()}</span>
                        )
                    })
                }</li>)
            }</ul>
        </div>
    )
}

export default CalendarDatePanel