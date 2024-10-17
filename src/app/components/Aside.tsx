"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@nextui-org/react";
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

const Aside = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <aside className="h-full w-[6%] flex flex-col items-center text-black dark:text-white bg-white dark:bg-black py-4">
      <h1 className="font-semibold">W1B</h1>
      <div className="my-auto flex flex-col gap-4 items-center">
        <Button isIconOnly variant="light">
          <GridViewOutlinedIcon className="text-sky-500" />
        </Button>
        <Button isIconOnly variant="light">
          <SearchRoundedIcon className="text-sky-500" />
        </Button>
        <Button isIconOnly variant="light">
          <CloudQueueRoundedIcon className="text-sky-500" />
        </Button>
        <Button isIconOnly variant="light">
          <StorefrontOutlinedIcon className="text-sky-500" />
        </Button>
        <Button isIconOnly variant="light">
          <CalendarMonthOutlinedIcon className="text-sky-500" />
        </Button>
        <Button isIconOnly variant="light">
          <TextsmsOutlinedIcon className="text-sky-500" />
        </Button>
        <AsideButton>
          <CalendarMonthOutlinedIcon className="text-green-500" />
        </AsideButton>
      </div>
    </aside>
  );
};

const AsideButton = ({ icon }) => {
  return (
    <Button isIconOnly variant="light">
      {icon}
      <TextsmsOutlinedIcon className="text-sky-500" />
    </Button>
  );
};

AsideButton.propTypes = {
  icon: PropTypes.node.isRequired,
};

export default Aside;
