import { faCamera, faEllipsisVertical, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Message = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center px-5">
        <div className="flex justify-start gap-10 items-center">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <h2 className="text-xl font-semibold">Elegance Homes</h2>
        </div>

        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-full text-2xl">
              <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Contact Info</a>
            </li>
            <li>
              <a>Close Chat</a>
            </li>
            <li>
              <a>Mute Notification</a>
            </li>
            <li>
              <a>Clear Message</a>
            </li>
            <li>
              <a>Delete Chat</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-2/3 mx-auto py-5">
        <div class="divider">Today</div>
      </div>

        <div className="grid gap-3">
        <div className="w-full flex justify-end">
            <h2 className="bg-base-300 p-3 rounded-xl">Hi, How are You?</h2>
        </div>
        <div className="w-full flex justify-start">
            <h2 className="bg-base-300 p-3 rounded-xl">I’m doing good. What are you doing ?</h2>
        </div>
        <div className="w-full flex justify-end">
            <h2 className="bg-base-300 p-3 rounded-xl">I’m working on my app design.</h2>
        </div>
        <div className="w-full flex justify-start">
            <h2 className="bg-base-300 p-3 rounded-xl">That sounds great! </h2>
        </div>

        <div className="mt-32 w-full flex justify-center items-center gap-4">
        <div>
            <button className="cursor-pointer"><FontAwesomeIcon className="text-3xl w-10" icon={faCamera}></FontAwesomeIcon></button>
        </div>
        <div>
        <input type="text" placeholder="Type Message" class="input input-bordered w-96 " />
        </div>
        <div>
           <button className="btn w-16"> <FontAwesomeIcon className="text-2xl" icon={faPaperPlane}></FontAwesomeIcon></button>
        </div>
        </div>

        </div>
    </div>
  );
};

export default Message;
