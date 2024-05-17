import { CreatePushNotification, CreatePushNotificationForm, } from '@/components/Notification'

const CreatePushNotifications = () => {
  return (
    <section className='section'>
        <CreatePushNotification />
        <CreatePushNotificationForm />
    </section>
  )
}

export default CreatePushNotifications