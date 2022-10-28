import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "John Doe",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/zvy"
  },
  {
    name: "John Doe",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/zvy"
  },
  {
    name: "John Doe",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/zvy"
  },
  {
    name: "John Doe",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/zvy"
  },

];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto ">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
