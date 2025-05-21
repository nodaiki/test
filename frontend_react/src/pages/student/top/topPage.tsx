import { useState, useEffect } from "react";
import Header from "../../../components/header/header";
import Calender from "../../../components/calender/calender";
import { GOOGLE_CALENDER_ID } from "../../../config";
import "./topPage.css"; // 通常のCSSファイルを読み込み

const GOOGLE_API_KEY = "your_google_api_key"; // ←ここに実際のAPIキーを入力してください

const StudentTopPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    if (!selectedDate) {
      setEvents([]);
      return;
    }

    fetchEventsForDate(GOOGLE_CALENDER_ID, selectedDate, GOOGLE_API_KEY).then(setEvents);
  }, [selectedDate]);

  return (
    <>
      <Header title="トップ" />

      {/* Googleカレンダー表示 */}
      <Calender calenderId={GOOGLE_CALENDER_ID} />

      {/* 日付選択フィールド */}
      <div style={{ marginTop: 20 }}>
        <label htmlFor="datePicker">日付を選択：</label>
        <input
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{ marginLeft: 8 }}
        />
      </div>

      {/* 選択された日付と予定リスト */}
      {selectedDate && (
        <div style={{ marginTop: 20 }}>
          <h3 className="dateTitle">{selectedDate.replace(/-/g, "/")}</h3>
          <ul style={{ padding: 0 }}>
            {events.length > 0 ? (
              events.map((event) => (
                <li key={event.id} className="eventCard">
                  <p><strong>{event.summary}</strong></p>
                  <p>
                    {event.start?.dateTime
                      ? new Date(event.start.dateTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : event.start?.date}
                  </p>
                </li>
              ))
            ) : (
              <li className="eventCard">予定はありません</li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default StudentTopPage;

// GoogleカレンダーAPIから特定日付のイベントを取得
async function fetchEventsForDate(calendarId: string, dateStr: string, apiKey: string) {
  const start = new Date(dateStr + "T00:00:00+09:00");
  const end = new Date(dateStr + "T23:59:59+09:00");

  const params = new URLSearchParams({
    timeMin: start.toISOString(),
    timeMax: end.toISOString(),
    singleEvents: "true",
    orderBy: "startTime",
  });

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    calendarId
  )}/events?${params.toString()}&key=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Google Calendar API error", await res.text());
      return [];
    }
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
