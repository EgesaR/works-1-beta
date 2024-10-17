"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faFaceGrinWide,
} from "@fortawesome/free-solid-svg-icons";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Button,
} from "@nextui-org/react";
import Aside from "./components/Aside";
import NavBar from "./components/NavBar";

export default function Home() {
  let tabs = [
    {
      id: "photos",
      label: "Photos",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "music",
      label: "Music",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "videos",
      label: "Videos",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-row">
      <Aside />
      <div className="h-full w-[94%] text-black dark:text-white bg-white dark:bg-black px-2">
        <NavBar />
        <main className="flex flex-col w-full mt-1 py-4 h-[90vh] px-6  bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50 dark:bg-gradient-to-tl dark:from-[#753c73] dark:to-[#0CBABA] rounded-lg">
          <div className="flex flex-row w-full">
            <div className="flex-1 pr-12 mr-4">
              <h1 className="text-3xl font-medium">
                Hi, Ray
                <br />
                What would you love to do today?
              </h1>
              <p className="mt-2">
                Have better creation and inspirations with Works community.
              </p>
              <div className="mt-10">
                <button
                  className="px-4 py-3 text-sm text-black dark:text-white bg-white dark:bg-black-600 font-semibold rounded-full
               hover:text-white hover:bg-blue-700 hover:border-transparent
              focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                >
                  Go to community
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-[98%] h-48 bg-white rounded-xl p-8 ">
                <label>Event:</label>
                <label>Happy Independence to Uganda</label>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <Tabs
              aria-label="Dynamic tabs"
              variant="underlined"
              key={"primary"}
              color={"primary"}
              items={tabs}
            >
              {(item) => (
                <Tab key={item.id} title={item.label}>
                  <Card className="text-black dark:text-white bg-white dark:bg-black ">
                    <CardBody>{item.content}</CardBody>
                  </Card>
                </Tab>
              )}
            </Tabs>
          </div>
          <div className="purple-dark text-foreground bg-background">
            <div className="flex flex-wrap gap-4 items-center">
              <Button color="primary" variant="solid">
                Solid
              </Button>
              <Button color="primary" variant="faded">
                Faded
              </Button>
              <Button color="primary" variant="bordered">
                Bordered
              </Button>
              <Button color="primary" variant="light">
                Light
              </Button>
              <Button color="primary" variant="flat">
                Flat
              </Button>
              <Button color="primary" variant="ghost">
                Ghost
              </Button>
              <Button color="primary" variant="shadow">
                Shadow
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const IconButton = ({ icon }) => {
  return (
    <button
      type="button"
      className={`
    text-slate-500 bg-white hover:bg-blue-700 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium
    rounded-full text-sm h-9 w-9  text-center flex items-center justify-center dark:border-blue-500 dark:text-slate-500 dark:hover:text-white
     dark:focus:ring-blue-800 dark:hover:bg-blue-500
      `}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      <span className="sr-only">Icon description</span>
    </button>
  );
};
