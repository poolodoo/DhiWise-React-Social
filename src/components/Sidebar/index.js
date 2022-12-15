import React from "react";

import { Column, Img, Button } from "components";

const Sidebar = (props) => {
  const {} = props;

  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-indigo_A200 flex flex-col items-center justify-start sm:p-[15px] md:p-[30px] p-[45px] w-[100%]">
            <Img
              src="images/img_settings.svg"
              className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:w-[25px] md:w-[33px] w-[48px]"
              alt="settings"
            />
            <Button
              className="bg-white_A700 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center mt-[101px] sm:mt-[53px] md:mt-[69px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
              shape="icbRoundedBorder12"
              size="icbPaddingAll11"
              variant="icbFillWhiteA700"
            >
              <Img
                src="images/img_home.svg"
                className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                alt="home"
              />
            </Button>
            <Button
              className="bg-white_A700_33 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:mt-[21px] md:mt-[27px] mt-[40px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
              shape="icbRoundedBorder12"
              size="icbPaddingAll11"
              variant="icbFillWhiteA70033"
            >
              <Img
                src="images/img_calendar.svg"
                className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                alt="calendar"
              />
            </Button>
            <Button
              className="bg-white_A700_33 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:mt-[21px] md:mt-[27px] mt-[40px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
              shape="icbRoundedBorder12"
              size="icbPaddingAll11"
              variant="icbFillWhiteA70033"
            >
              <Img
                src="images/img_mail.svg"
                className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                alt="mail"
              />
            </Button>
            <Button
              className="bg-white_A700_33 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:mt-[21px] md:mt-[27px] mt-[40px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
              shape="icbRoundedBorder12"
              size="icbPaddingAll11"
              variant="icbFillWhiteA70033"
            >
              <Img
                src="images/img_user.svg"
                className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                alt="user"
              />
            </Button>
            <Button
              className="bg-white_A700_33 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:mt-[21px] md:mt-[27px] mt-[40px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
              shape="icbRoundedBorder12"
              size="icbPaddingAll11"
              variant="icbFillWhiteA70033"
            >
              <Img
                src="images/img_settings_48X48.svg"
                className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                alt="settings One"
              />
            </Button>
            <Button
              className="border-2 border-solid border-white_A700_33 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center md:mb-[10px] mb-[15px] sm:mb-[7px] sm:mt-[171px] md:mt-[221px] mt-[322px] md:px-[10px] px-[15px] sm:px-[7px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
              shape="icbRoundedBorder12"
              size="icbPaddingAll15"
              variant="icbOutlineWhiteA70033"
            >
              <Img
                src="images/img_arrowright.svg"
                className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                alt="arrowright"
              />
            </Button>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
