import { Title } from "@/components";
import { Breadcrumbs } from "@/components";
import { Button } from "@/components/ui";
import { PlusIcon } from "@radix-ui/react-icons";
import BreadcrumbsNew from "../Breadcrumbs/BreadcrumbsNew";
import { arrow_right } from "@/assets/icons";
import { useNavigate } from "react-router-dom";
import Breadcrumbs3 from "../Breadcrumbs/Breadcrumbs3";

const NotificationHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <div>
        <Title>Push Notification</Title>
        <Breadcrumbs menu="Notification" subMenu="Push Notification" />
      </div>

      <Button onClick={() => { navigate('create-notification') }}>
        Create new
        <PlusIcon className="ml-2 h-[18px] w-[18px] bg-white text-blue-900 rounded-sm" />
      </Button>
    </div>
  );
};

export default NotificationHeader;

export const InAppMessages = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <div>
        <Title>In App Messages</Title>
        <Breadcrumbs menu="Notification" subMenu="in-app messages" />
      </div>
      <Button onClick={() => { navigate('create-in-app-messages') }}>
        Create new
        <PlusIcon className="ml-2 h-[18px] w-[18px] bg-white text-blue-900 rounded-sm" />
      </Button>
    </div>
  );
};


export const CreatePushNotification = () => {
  return (
    <div>
      <Title>Create Push Notification</Title>
      <BreadcrumbsNew menu="Notification" subMenu="Push Notification" breadcrum={arrow_right} subMenu2="create" />
    </div>
  );
};

export const PushNotificationUsersHeader = () => {
  return (
    <div>
      <Title>Users</Title>
      <Breadcrumbs3 menu="Notification" subMenu="Push Notification" breadcrum={arrow_right} subMenu2="create" breadcrum3={arrow_right} subMenu3="user" />
    </div>
  )
}


