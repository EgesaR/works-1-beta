"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faFaceGrinWide } from "@fortawesome/free-solid-svg-icons";
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import Aside from "./components/Aside";
import NavBar from "./components/NavBar";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import LineIcon from "lineicons-react";


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
      {/*<Aside />*/}
      <div className="h-full w-full text-black dark:text-white bg-white dark:bg-black px-2">
        <NavBar />
        <Tabs aria-label="Options" placement={"start"} variant={"underlined"} classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-r border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tabContent: "group-data-[selected=true]:text-[#06b6d4]"
        }}>
          <Tab key="home" title={
            <div className="flex items-center space-x-2">
              <GridViewOutlinedIcon/>
            </div>
          } className="w-full" id="asideBtn">
            <Card className="h-[90vh]">
              <CardBody>
                <main className="flex flex-col w-full mt-1 py-4 h-[100%] px-6  bg-gradient-to-r from-orange-50 via-brown-50 to-indigo-50 dark:bg-gradient-to-tl dark:from-[#753c73] dark:to-[#0CBABA] rounded-lg">
                  <div className="flex flex-row w-full">
                    <div className="flex-1 pr-12 mr-4">
                      <h1 className="text-3xl font-medium">
                        Hi, Ray
                        <br />
                        What would you love to do today?
                      </h1>
                      <p className="mt-2">
                        Have better creation and inspirations with Works
                        community.
                      </p>
                      <div className="mt-10">
                        <button
                          className="px-4 py-3 text-sm text-black dark:text-white bg-white dark font-semibold rounded-full
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
              </CardBody>
            </Card>
          </Tab>
          <Tab key="search" title={
            <div className="flex items-center space-x-2">
              <SearchRoundedIcon/>
            </div>
          } id="asideBtn">
            <Card className="h-[90vh] text-white">
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="cloud" title={
            <div className="flex items-center space-x-2">
              <CloudQueueRoundedIcon/>
            </div>
          } id="asideBtn">
            <Card className="h-[90vh] text-white">
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="cloudStore" title={
            <div className="flex items-center space-x-2">
              <StorefrontOutlinedIcon/>
            </div>
          } className="w-full" id="asideBtn">
            <Card className="h-[90vh] text-white w-full">
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. 
              </CardBody>
            </Card>
          </Tab>
          <Tab key="marketPlace" title={
            <div className="flex items-center space-x-2">
              <CalendarMonthOutlinedIcon/>
            </div>
          } className="w-full" id="asideBtn">
            <Card className="h-[90vh] text-white w-full">
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="schedule" title={
            <div className="flex items-center space-x-2">
              <TextsmsOutlinedIcon/>
            </div>
          } className="w-full" id="asideBtn">
            <Card className="h-[90vh] text-white w-full">
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
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
