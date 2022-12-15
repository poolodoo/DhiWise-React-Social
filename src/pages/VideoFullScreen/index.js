import React from "react";

import { Row, Column, Img, Button, Line, Text, Stack } from "components";
import Sidebar from "components/Sidebar";

const VideoFullScreenPage = () => {
  return (
    <>
      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center mx-[auto] w-[100%]">
        <Sidebar className="md:hidden sm:hidden w-[12%]" />
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1270px] sm:ml-[2px] md:ml-[3px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Line className="bg-white_A700_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius25 w-[5px]" />
          <Column
            className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[26px] p-[39px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[99%]"
            style={{ backgroundImage: "url('images/img_group1512.png')" }}
          >
            <Column className="flex flex-col justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                  <Img
                    src="images/img_avatar.png"
                    className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                    alt="Avatar"
                  />
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                    <Text
                      className="font-medium text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Edward Ford
                    </Text>
                    <Text
                      className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      5min ago
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                  <Button
                    className="flex items-center justify-center min-w-[23%] my-[4px] text-center w-[max-content]"
                    leftIcon={
                      <Img
                        src="images/img_favorite_2.svg"
                        className="mr-[6px] sm:mr-[3px] md:mr-[4px] text-center"
                        alt="favorite"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillWhiteA70033"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                      326
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center min-w-[22%] my-[4px] text-center w-[max-content]"
                    leftIcon={
                      <Img
                        src="images/img_laptop_14X14.svg"
                        className="mr-[6px] sm:mr-[3px] md:mr-[4px] text-center"
                        alt="laptop"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillWhiteA70033"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                      148
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center min-w-[26%] my-[4px] text-center w-[max-content]"
                    leftIcon={
                      <Img
                        src="images/img_reply_14X14.svg"
                        className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                        alt="reply"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillWhiteA70033"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                      Share
                    </div>
                  </Button>
                  <Img
                    src="images/img_overflowmenu_38X38.svg"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="overflowmenu"
                  />
                </Row>
              </Row>
              <Text
                className="leading-[36.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] text-white_A700 sm:w-[100%] w-[56%]"
                as="h1"
                variant="h1"
              >
                Tropical Fresh Tourism Is Back In Full Swing
                <br />
                In Cancun Mexico
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] sm:mt-[344px] md:mt-[444px] mt-[646px] p-[1px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-start mt-[1px] pr-[1px] sm:px-[0] py-[1px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[2px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    01:23
                  </Text>
                  <Text
                    className="font-medium text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    05:46
                  </Text>
                </Row>
                <Stack className="h-[8px] mb-[1px] sm:mt-[14px] md:mt-[18px] mt-[27px] relative w-[100%]">
                  <div className="absolute bg-white_A700_33 bottom-[0] sm:h-[5px] md:h-[6px] h-[8px] rounded-radius395 w-[100%]"></div>
                  <div
                    className="absolute sm:h-[5px] md:h-[6px] h-[8px] left-[0] overflow-hidden top-[0] sm:w-[100%] w-[60%]"
                    name="Group1397"
                  >
                    <div className="w-full h-full absolute bg-white_A700_a2 rounded-[3.95px]"></div>
                    <div
                      className="h-full absolute bg-light_blue_200  rounded-[3.95px]"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </Stack>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mb-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[16%]">
                  <Img
                    src="images/img_trash.svg"
                    className="sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] ml-[1px] mt-[1px] sm:w-[15px] md:w-[20px] w-[30px]"
                    alt="trash"
                  />
                  <Img
                    src="images/img_volume.svg"
                    className="sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] mt-[1px] sm:w-[15px] md:w-[20px] w-[30px]"
                    alt="volume"
                  />
                  <div
                    className="sm:h-[5px] md:h-[6px] h-[8px] mr-[1px] my-[11px] sm:my-[5px] md:my-[7px] overflow-hidden relative w-[34%]"
                    name="Volume One"
                  >
                    <div className="w-full h-full absolute bg-white_A700_33 rounded-[3.95px]"></div>
                    <div
                      className="h-full absolute bg-white_A700  rounded-[4px]"
                      style={{ width: "67%" }}
                    ></div>
                  </div>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] pl-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[8%]">
                  <Img
                    src="images/img_settings_18X18.svg"
                    className="sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] my-[1px] sm:w-[15px] md:w-[20px] w-[30px]"
                    alt="settings Two"
                  />
                  <Img
                    src="images/img_minimize.svg"
                    className="max-w-[100%] my-[1px] w-[33%]"
                    alt="minimize"
                  />
                </Row>
              </Row>
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default VideoFullScreenPage;
