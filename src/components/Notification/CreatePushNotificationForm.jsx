import React from 'react'
import { NotificationMedia, NotificationOptions, PushMessage, ScheduleNotification } from '.'

const CreatePushNotificationForm = () => {
  return (
    <form action="" method="post" className='w-[70%]'>
      <ScheduleNotification />
      <PushMessage />
      <NotificationMedia />
      <NotificationOptions />
    </form> 
  )
}

export default CreatePushNotificationForm