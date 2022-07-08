import React from "react";
import classNames from "classnames";
import "../components/Calendar/index.css";
import * as calendar from '../components/Calendar/calendar';

export class Calendar extends React.Component {
    static defaultProps = {
        years: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };

    state = {
        date: new Date(),
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    render() {
        const { years, monthNames, weekDayNames} = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        return(
            <div className="calendar">
                <div>
                    <h1 value={this.month} className="calendar__month">{monthNames[currentDate.getMonth()]}, {this.year}</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            {weekDayNames.map(name =>
                                <th key={name} className='dayonweek'>{name}</th>    
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {monthData.map((week, index) =>
                            <tr key={index} className="week">
                                {week.map((date, index) => date ?
                                    <td key={index} className={classNames('day', {'today': calendar.areEqual(date, currentDate)})}>{date.getDate()}</td>
                                    :
                                    <td key={index}></td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );     
    }
}

