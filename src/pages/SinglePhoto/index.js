import React from "react";

import { Stack, Row, Line, Column, Button, Img, Text, Input } from "components";
import Sidebar from "components/Sidebar";

const SinglePhotoPage = () => {
  return (
    <>
      <Stack className="bg-blue_A700 font-sfprodisplay h-[1024px] mx-[auto] relative w-[100%]">
        <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1280px] sm:pl-[15px] md:pl-[3px] pl-[5px] sm:pr-[15px] right-[0] w-[100%]">
          <Line className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[5px]" />
          <div className="bg-gray_900 h-[1024px] sm:h-[546px] md:h-[705px] ml-[10px] sm:ml-[5px] md:ml-[6px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[99%]"></div>
        </Row>
        <Column className="absolute flex flex-col items-center justify-start left-[17%] max-w-[696px] sm:pl-[15px] sm:pr-[15px] top-[4%] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
            <Button
              className="flex items-center justify-center min-w-[16%] text-center w-[max-content]"
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
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
              <Text
                className="flex-grow font-medium text-white_A700"
                as="h5"
                variant="h5"
              >
                Edward Ford
              </Text>
              <Img
                src="images/img_avatar.png"
                className="flex-shrink-0 sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                alt="Avatar"
              />
            </Row>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[144px] sm:mt-[76px] md:mt-[99px] w-[100%]">
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
              src="images/img_photo4.png"
              className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[74%]"
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
                alt="arrowright"
              />
            </Button>
          </Row>
        </Column>
        <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[450px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
          <Column className="bg-white_A700 flex flex-col items-end sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
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
            <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center sm:mt-[449px] md:mt-[580px] mt-[843px] sm:mx-[0] sm:p-[2px] md:p-[3px] p-[5px] rounded-radius4 sm:w-[100%] w-[96%]">
              <Input
                className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[87%]"
                name="FrameEight"
                placeholder="Write a comment…"
                suffix={
                  <Img
                    src="images/img_user_1.svg"
                    className="ml-[35px] mr-[5px] sm:mr-[2px] sm:ml-[18px] md:mr-[3px] md:ml-[24px] my-[auto]"
                    alt="user"
                  />
                }
                size="md"
                variant="FillGray100"
              ></Input>
              <Img
                src="images/img_send.svg"
                className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] w-[14px] sm:w-[7px] md:w-[9px]"
                alt="send"
              />
            </Row>
          </Column>
        </Row>
        <Sidebar className="absolute md:hidden sm:hidden w-[12%]" />
      </Stack>
    </>
  );
};

export default SinglePhotoPage;
