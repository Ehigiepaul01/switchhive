import { Archive, DeleteIcon, LucideDelete } from "lucide-react";
import { notificationTableHeaders } from "../../constants/data";
import TableHead from "../TableHead";

const NotificationTable = ({ filteredNotification }) => {
  return (
    <div className="overflow-x-auto scrollbar pb-5 mt-10">
      <table className="table-auto w-full border-b border-stone-300 divide-y divide-stone-300">
        <TableHead headers={notificationTableHeaders} />
        <tbody className="text-stone-950 divide-y divide-stone-300 text-nowrap">
          {filteredNotification.map((notification, index) => (
            <tr key={index}>
              <td className="px-4 py-2">
                <span
                  className={`px-3 py-1 text-base font-light rounded ${
                    notification.status === "Active"
                      ? "bg-[#47c233] text-green-50"
                      : notification.status === "In Active"
                      ? "text-yellow-50 bg-red-500"
                      : notification.status === "Archived"
                      ? "text-red-50 bg-yellow-600"
                      : "text-yellow-50 bg-gray-500"
                  }`}
                >
                  {notification.status}
                </span>
              </td>
              <td className="px-4 py-2 flex flex-col">
                <span className="font-medium text-[#FB0000]">
                  {notification.title}
                </span>
                <span className="text-sm text-[#ADADAD] ">
                  {notification.msg}
                </span>
              </td>
              <td className="px-4 py-2">
                <span className="font-medium">{notification.delivery}</span>
                <br />
                <span className="text-sm text-[#ADADAD] ">
                  {notification.percentage}%
                </span>
              </td>
              <td className="px-4 py-2">
                <span className="font-medium">{notification.open}</span>
                <br />
                <span className="text-sm text-[#ADADAD] ">
                  {notification.percentage2}%
                </span>
              </td>
              <td className="px-4 py-2">
                {/* {notification.status === "Archived" ? (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M7.43562 3.46133C6.14187 4.21016 5.95905 4.32617 5.94851 4.40703C5.94148 4.47383 5.96257 4.51602 6.0364 4.56523C6.24734 4.71289 8.9614 6.26328 9.0071 6.26328C9.12312 6.26328 9.1407 6.18242 9.1407 5.67617V5.17344H9.30944C9.57663 5.17344 10.0969 5.27187 10.4696 5.38789C12.2169 5.94687 13.4579 7.34258 13.8411 9.18125C13.9255 9.59258 13.9255 10.5523 13.8411 10.9812C13.4333 13.0168 11.8337 14.5812 9.81218 14.9258C9.37976 14.9996 8.62038 14.9996 8.18796 14.9258C6.19109 14.5848 4.60554 13.0484 4.18015 11.0445C4.07819 10.5594 4.06765 9.67344 4.16257 9.20234C4.30671 8.47109 4.63366 7.71875 5.06257 7.14219C5.19616 6.95937 5.30866 6.78711 5.30866 6.75898C5.30866 6.69922 4.51062 5.88359 4.42273 5.85898C4.32077 5.82383 4.23288 5.89766 3.96218 6.25977C2.14109 8.67852 2.27116 12.0219 4.2821 14.2965C5.16101 15.2914 6.37741 15.9875 7.7696 16.2898C8.09655 16.3602 8.23718 16.3672 9.00007 16.3672C9.76296 16.3672 9.90359 16.3602 10.2305 16.2898C11.9391 15.9172 13.3173 14.9961 14.2559 13.5934C15.504 11.7301 15.6657 9.32187 14.6743 7.30039C13.7567 5.41602 11.9251 4.09414 9.85085 3.81992C9.64343 3.7918 9.40085 3.76719 9.30944 3.76719H9.1407L9.13366 3.19414L9.12312 2.62461L9.01765 2.61406C8.93679 2.61055 8.58874 2.79336 7.43562 3.46133Z"
                      fill="#224191"
                    />
                  </svg>
                ) : (
                    <Archive className="inline-block text-[10px] mr-2 " />
                )} */}
                    <Archive className="inline-block text-[10px] mr-2 " />

                <LucideDelete className="inline-block text-[10px] " />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationTable;
