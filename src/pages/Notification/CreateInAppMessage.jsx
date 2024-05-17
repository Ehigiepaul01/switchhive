import { CreatePushNotification, CreatePushNotificationForm, } from '@/components/Notification'

const CreateInAppMessage = () => {
  return (
    <section className='section'>
        <CreatePushNotification />
        <CreatePushNotificationForm />
    </section>
  )
}

export default CreateInAppMessage