import { useState } from "react";
import "./meetingPage.css";

type TimeSlot = {
  time: string;
  reservedBy: string | null;
};

type DaySchedule = {
  date: string;
  slots: TimeSlot[];
};

const initialData: DaySchedule[] = [
  {
    date: "2025/3/1",
    slots: [
      { time: "13:00〜13:30", reservedBy: "高津" },
      { time: "13:30〜14:00", reservedBy: null },
      { time: "14:00〜14:30", reservedBy: null },
      { time: "14:30〜15:00", reservedBy: null },
      { time: "15:00〜15:30", reservedBy: null },
      { time: "15:30〜16:00", reservedBy: null },
      { time: "16:00〜16:30", reservedBy: null },
      { time: "16:30〜17:00", reservedBy: null },
    ],
  },
  {
    date: "2025/3/2",
    slots: [
      { time: "13:00〜13:30", reservedBy: "高津" },
      { time: "13:30〜14:00", reservedBy: null },
      { time: "14:00〜14:30", reservedBy: null },
      { time: "14:30〜15:00", reservedBy: null },
      { time: "15:00〜15:30", reservedBy: null },
      { time: "15:30〜16:00", reservedBy: null },
      { time: "16:00〜16:30", reservedBy: "高津" },
      { time: "16:30〜17:00", reservedBy: null },
    ],
  },
];

const userName = "高津"; // 仮のログインユーザー名

const MeetingPage = () => {
  const [schedule, setSchedule] = useState<DaySchedule[]>(initialData);

  const toggleReservation = (dayIndex: number, slotIndex: number) => {
    setSchedule(prev => {
      const newSchedule = [...prev];
      const slot = newSchedule[dayIndex].slots[slotIndex];
      if (slot.reservedBy === userName) {
        slot.reservedBy = null;
      } else if (!slot.reservedBy) {
        slot.reservedBy = userName;
      }
      return newSchedule;
    });
  };

  return (
    <div className="meeting-page">
      <h2>研究ゼミ</h2>
      {schedule.map((day, dayIndex) => (
        <div key={day.date} className="day-block">
          <h3>{day.date}</h3>
          {day.slots.map((slot, slotIndex) => (
            <div key={slot.time} className="time-slot">
              <span className={slot.reservedBy === userName ? "reserved-time" : ""}>
                {slot.time}
              </span>
              {slot.reservedBy && <span className="reserved-by">{slot.reservedBy}</span>}
              <button
                className={slot.reservedBy === userName ? "cancel-btn" : "reserve-btn"}
                onClick={() => toggleReservation(dayIndex, slotIndex)}
              >
                {slot.reservedBy === userName ? "✖" : "◯"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MeetingPage;
