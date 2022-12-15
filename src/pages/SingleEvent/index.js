import React from "react";

import { Row, Column, Img, Button, Stack, Line, Text, List } from "components";
import Sidebar from "components/Sidebar";

const SingleEventPage = () => {
  return (
    <>
      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center mx-[auto] w-[100%]">
        <Sidebar className="md:hidden sm:hidden w-[12%]" />
        <Stack className="h-[1024px] max-w-[1275px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
            <Line className="bg-white_A700_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[5px]" />
            <div className="bg-white_A700 h-[1024px] sm:h-[546px] md:h-[705px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[99%]"></div>
          </Row>
          <Column className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start left-[7%] sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[50%]">
            <Button
              className="flex items-center justify-center min-w-[17%] text-center w-[max-content]"
              leftIcon={
                <Img
                  src="images/img_arrowleft_18X18.svg"
                  className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                  alt="arrow_left"
                />
              }
              shape="RoundedBorder12"
              size="xl"
              variant="FillGray100"
            >
              <div className="bg-transparent cursor-pointer font-bold text-[14px] text-gray_500">
                Back
              </div>
            </Button>
            <Column className="flex flex-col font-inter items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                    <Img
                      src="images/img_avatar.png"
                      className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                      alt="Avatar"
                    />
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Gunther Ackner
                      </Text>
                      <Text
                        className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        3 days ago
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[31%]">
                      <Img
                        src="images/img_reply.svg"
                        className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] my-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="reply"
                      />
                      <Text
                        className="flex-grow font-medium ml-[4px] my-[1px] text-gray_900"
                        as="h5"
                        variant="h5"
                      >
                        Share
                      </Text>
                    </Row>
                    <Button
                      className="flex items-center justify-center min-w-[42%] my-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[3px] text-center"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillGreen400"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Interested
                      </div>
                    </Button>
                    <Img
                      src="images/img_eye.svg"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="eye"
                    />
                  </Row>
                </Row>
                <Img
                  src="images/img_image_13.png"
                  className="max-w-[100%] sm:mt-[21px] md:mt-[27px] mt-[40px] rounded-radius8 w-[100%]"
                  alt="Image"
                />
                <Text
                  className="sm:mt-[24px] md:mt-[31px] mt-[46px] text-gray_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  2019 DUB Show at Los Angeles Auto Show
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                    <Button
                      className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                      shape="icbRoundedBorder12"
                      size="lgIcn"
                      variant="icbFillGray100"
                    >
                      <Img
                        src="images/img_clock.svg"
                        className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                        alt="clock"
                      />
                    </Button>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        12 December, 2019{" "}
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        From 9:00am to 6:00pm
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[61px] ml-[90px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                    <Button
                      className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                      shape="icbRoundedBorder12"
                      size="lgIcn"
                      variant="icbFillGray100"
                    >
                      <Img
                        src="images/img_reply_48X48.svg"
                        className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                        alt="reply One"
                      />
                    </Button>
                    <Column className="flex flex-col sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[57%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        $60 - $90
                      </Text>
                      <Text
                        className="font-normal mb-[1px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        +30% Taxes
                      </Text>
                    </Column>
                  </Row>
                </Row>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] pr-[4px] py-[4px] w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                  Event Description
                </Text>
                <Text
                  className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] not-italic text-gray_500 sm:w-[100%] w-[97%]"
                  as="h5"
                  variant="h5"
                >
                  For evidence of the double standard, we need look no farther
                  than Arlington, Oregon, where Mayor Carmen Kontur-Gronquist
                  was recalled in a 142-139 vote after the town’s denizens
                  discovered that the mayor’s MySpace page featured photos of
                  her in lingerie. Although Kontur-Gronquist is alleging
                  election fraud and challenging the returns, and even though
                  the mayoral position was unpaid, no one is arguing that her
                  MySpace page did her in.{" "}
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[3px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                  <Stack className="bg-gray_100_90 h-[20px] relative rounded-radius4 w-[11%]">
                    <Text
                      className="absolute font-normal font-sfprodisplay h-[max-content] inset-y-[0] left-[18%] my-[auto] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Car
                    </Text>
                    <Button
                      className="absolute cursor-pointer font-inter font-normal not-italic text-[12px] text-center text-gray_500 w-[100%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray10090"
                    >
                      Car
                    </Button>
                  </Stack>
                  <Text
                    className="bg-gray_100_90 font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic sm:pl-[3px] md:pl-[4px] pl-[7px] pr-[4px] py-[3px] rounded-radius4 text-gray_500 w-[82px]"
                    as="h6"
                    variant="h6"
                  >
                    Los Angeles
                  </Text>
                  <Button
                    className="cursor-pointer font-normal min-w-[19%] ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[12px] text-center text-gray_500 w-[max-content]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillGray10090"
                  >
                    Exhibition
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[12%] ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[12px] text-center text-gray_500 w-[max-content]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillGray10090"
                  >
                    Auto
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[12%] ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[12px] text-center text-gray_500 w-[max-content]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillGray10090"
                  >
                    DUB
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[13%] ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[12px] text-center text-gray_500 w-[max-content]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillGray10090"
                  >
                    Show
                  </Button>
                </Row>
              </Column>
            </Column>
          </Column>
          <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] pl-[1px] sm:px-[0] sm:w-[100%] w-[36%]">
            <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
            <Column className="bg-gray_900 flex flex-col items-end sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
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
              <Column className="flex flex-col font-inter items-center justify-start sm:mb-[14px] md:mb-[19px] mb-[28px] sm:mt-[26px] md:mt-[33px] mt-[49px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Address
                  </Text>
                  <Img
                    src="images/img_image_240X340.png"
                    className="max-w-[100%] sm:mt-[17px] md:mt-[22px] mt-[33px] rounded-radius8 w-[100%]"
                    alt="Image One"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                      <Button
                        className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                        shape="icbRoundedBorder12"
                        size="lgIcn"
                        variant="icbFillWhiteA70033"
                      >
                        <Img
                          src="images/img_map.svg"
                          className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                          alt="map"
                        />
                      </Button>
                      <Column className="flex flex-col sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[67%]">
                        <Text
                          className="font-bold mt-[1px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Los Angeles, CA
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          189 The Grove Dr
                        </Text>
                      </Column>
                    </Row>
                    <Button
                      className="cursor-pointer font-medium min-w-[25%] text-[14px] text-center text-white_A700 w-[max-content]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineGray50099"
                    >
                      Directions
                    </Button>
                  </Row>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[33px] md:mt-[43px] mt-[63px] w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Friends Interested
                  </Text>
                  <List
                    className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[23px] md:mt-[30px] mt-[44px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Img
                        src="images/img_avatar_8.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Two"
                      />
                      <Text
                        className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center md:ml-[110px] ml-[160px] sm:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="checkmark"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Img
                        src="images/img_avatar.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Three"
                      />
                      <Text
                        className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center md:ml-[110px] ml-[160px] sm:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="checkmark One"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Img
                        src="images/img_avatar_1.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Four"
                      />
                      <Text
                        className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center md:ml-[110px] ml-[160px] sm:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="checkmark Two"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Img
                        src="images/img_avatar_9.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Five"
                      />
                      <Text
                        className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center md:ml-[110px] ml-[160px] sm:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="checkmark Three"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Img
                        src="images/img_avatar_10.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Six"
                      />
                      <Text
                        className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center md:ml-[110px] ml-[160px] sm:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_send_20X20.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="send"
                        />
                      </Button>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Column>
          </Row>
        </Stack>
      </Row>
    </>
  );
};

export default SingleEventPage;
