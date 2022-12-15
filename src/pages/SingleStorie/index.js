import React from "react";

import { Row, Column, Img, Button, Stack, Line, Input, Text } from "components";
import Sidebar from "components/Sidebar";

const SingleStoriePage = () => {
  return (
    <>
      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center mx-[auto] w-[100%]">
        <Sidebar className="md:hidden sm:hidden w-[12%]" />
        <Stack className="h-[1024px] max-w-[1274px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Stack className="absolute h-[1024px] w-[100%]">
            <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pl-[2px] md:pl-[3px] pl-[5px] w-[100%]">
              <Line className="bg-white_A700_66 h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[5px]" />
              <div className="bg-gray_900 h-[1024px] sm:h-[546px] md:h-[705px] ml-[10px] sm:ml-[5px] md:ml-[6px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[99%]"></div>
            </Row>
            <Column className="absolute bottom-[4%] flex flex-col items-center justify-start left-[15%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                <div className="bg-white_A700 sm:h-[3px] md:h-[4px] h-[5px] rounded-radius2 w-[32%]"></div>
                <div className="bg-white_A700_66 sm:h-[3px] md:h-[4px] h-[5px] md:ml-[10px] ml-[15px] sm:ml-[7px] rounded-radius2 w-[32%]"></div>
                <div className="bg-white_A700_66 sm:h-[3px] md:h-[4px] h-[5px] md:ml-[10px] ml-[15px] sm:ml-[7px] rounded-radius2 w-[32%]"></div>
              </Row>
              <Row className="bg-gray_900_6c border-2 border-gray_500_6c border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[406px] md:mt-[525px] mt-[763px] sm:p-[4px] md:p-[6px] p-[9px] rounded-radius4 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[95%]"
                    name="FrameSeven"
                    placeholder="Write a comment…"
                    size="sm"
                    variant="FillGray900"
                  ></Input>
                  <Img
                    src="images/img_send_20X20.svg"
                    className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[7px] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="send"
                  />
                </Row>
                <Img
                  src="images/img_iconemoji.svg"
                  className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:mr-[3px] md:mr-[4px] mr-[6px] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="IconEmoji"
                />
              </Row>
            </Column>
          </Stack>
          <Column className="absolute flex flex-col font-sfprodisplay justify-start left-[9%] sm:mx-[0] sm:px-[0] top-[4%] sm:w-[100%] w-[55%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
              <Button
                className="flex items-center justify-center min-w-[17%] text-center w-[max-content]"
                leftIcon={
                  <Img
                    src="images/img_arrowleft.svg"
                    className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                    alt="arrow_left"
                  />
                }
                shape="RoundedBorder12"
                size="xl"
                variant="FillWhiteA70033"
              >
                <div className="bg-transparent cursor-pointer font-bold text-[14px] text-white_A700">
                  Back
                </div>
              </Button>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between md:ml-[264px] ml-[385px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                <Text
                  className="flex-grow font-medium text-white_A700"
                  as="h5"
                  variant="h5"
                >
                  Sara Scholz
                </Text>
                <Img
                  src="images/img_avatar.png"
                  className="flex-shrink-0 sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                  alt="Avatar"
                />
              </Row>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
              <Button
                className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                shape="icbRoundedBorder12"
                size="lgIcn"
                variant="icbOutlineWhiteA70033"
              >
                <Img
                  src="images/img_arrowleft_48X48.svg"
                  className="flex items-center justify-center"
                  alt="arrowleft"
                />
              </Button>
              <Img
                src="images/img_image_768X540.png"
                className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[78%]"
                alt="Image"
              />
              <Button
                className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                shape="icbRoundedBorder12"
                size="lgIcn"
                variant="icbOutlineWhiteA70033_1"
              >
                <Img
                  src="images/img_arrowright_48X48.svg"
                  className="flex items-center justify-center"
                  alt="arrowright One"
                />
              </Button>
            </Row>
          </Column>
          <Column className="absolute bg-white_A700 flex flex-col justify-start sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[32%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
              <Button
                className="cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 sm:w-[25px] md:w-[33px] w-[48px]"
                shape="RoundedBorder12"
                size="lg"
                variant="FillLightblue200"
              >
                1
              </Button>
              <Img
                src="images/img_avatar_48X48.png"
                className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                alt="Avatar One"
              />
            </Row>
            <Text
              className="font-inter sm:mb-[436px] md:mb-[564px] mb-[820px] sm:ml-[2px] md:ml-[3px] ml-[5px] md:mr-[125px] mr-[182px] sm:mr-[96px] sm:mt-[25px] md:mt-[33px] mt-[48px] text-gray_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Next Stories
            </Text>
          </Column>
        </Stack>
      </Row>
    </>
  );
};

export default SingleStoriePage;
