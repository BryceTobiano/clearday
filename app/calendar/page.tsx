'use client'
import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';
import style from './calendar.module.css'
export default function Page() {
//   const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      console.log(data);
    //   setNotes(data)
    }
    getData()
  }, [])

//   return <pre>{JSON.stringify(notes, null, 2)}</pre>
    return (
        <>
          <div id={style.container}>
            <div id={style.calendarContainer}>
                <FullCalendar
                  plugins={[ timeGridPlugin, interactionPlugin ]}
                  initialView="timeGridWeek"
                  nowIndicator={true}
                  selectable={true}

                  unselectAuto={false}

                />
            </div>
            <div id={style.menuContainer}>
              Test
            </div>
          </div>
          
        
        </>
    );

}

