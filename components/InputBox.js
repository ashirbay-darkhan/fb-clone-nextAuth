import React, {useRef} from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/20/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import firebase from "firebase/compat/app";
import {db} from "../firebase";


const InputBox = () => {
  const session = useSession();
  const inputRef = useRef(null)

  const sendPost = (e) => {
    e.preventDefault();


    if (!inputRef.current.value) return

    db.collection('posts').add({
      message: inputRef.current.value,
      name: session.data.user.name,
      email: session.data.user.email,
      image: session.data.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.data.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            ref={inputRef}
            type="text"
            placeholder={`What's on your mind ${session.data.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text:sm xl:text-base">Live Video</p>
        </div>

        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text:sm xl:text-base">Photo Video</p>
        </div>

        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text:sm xl:text-base">Feeling Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
