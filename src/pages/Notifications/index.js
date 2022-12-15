import React from "react";

import { Row, Column, Img, Button, Input, Text, Stack, List } from "components";
import Sidebar from "components/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const NotificationsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start mx-[auto] w-[100%]">
        <Sidebar className="md:hidden sm:hidden w-[12%]" />
        <Column className="flex flex-col items-center justify-end max-w-[760px] sm:ml-[34px] md:ml-[44px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[12px] sm:p-[6px] md:p-[8px] rounded-radius12 w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
              wrapClassName="flex my-[1px] sm:mx-[0] sm:w-[100%] w-[89%]"
              name="FrameOne"
              placeholder="Search in social…"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer ml-[1px] mr-[15px] sm:mr-[7px] md:mr-[10px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#8f92a1"
                    className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              size="smSrc"
              variant="srcFillWhiteA700"
            ></Input>
            <Text
              className="font-bold ml-[13px] sm:ml-[6px] md:ml-[8px] text-gray_500 tracking-ls1 uppercase w-[auto]"
              as="h6"
              variant="h6"
            >
              Filters
            </Text>
          </Row>
          <Column className="bg-white_A700 flex flex-col justify-end sm:mt-[21px] md:mt-[27px] mt-[40px] sm:pl-[15px] md:pl-[20px] pl-[30px] sm:py-[15px] md:py-[20px] py-[30px] rounded-radius12 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mr-[20px] mr-[30px] mt-[4px] sm:mx-[0] sm:px-[0] rounded-radius12 sm:w-[100%] w-[96%]">
              <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                Featured Stories
              </Text>
              <Stack className="bg-gray_500_36 h-[30px] sm:p-[3px] md:p-[4px] p-[7px] relative rounded-radius12 w-[14%]">
                <Text
                  className="absolute font-medium h-[max-content] inset-y-[0] left-[10%] my-[auto] text-gray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  See more
                </Text>
                <Img
                  src="images/img_arrowright_14X14.svg"
                  className="absolute md:h-[10px] h-[14px] sm:h-[8px] inset-y-[0] my-[auto] right-[10%] rounded-radius50 w-[14px] sm:w-[7px] md:w-[9px]"
                  alt="arrowright One"
                />
              </Stack>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[10px] md:ml-[6px] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] rounded-radius12 sm:w-[100%] w-[99%]">
              <Button
                className="flex sm:h-[24px] md:h-[31px] h-[45px] items-center justify-center my-[10px] sm:my-[5px] md:my-[6px] sm:w-[23px] md:w-[30px] w-[45px]"
                shape="icbRoundedBorder12"
                size="mdIcn"
                variant="icbFillLightblue20033"
              >
                <Img
                  src="images/img_plus.svg"
                  className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                  alt="plus"
                />
              </Button>
              <List
                className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-7 min-h-[auto] sm:ml-[15px] md:ml-[20px] ml-[30px] sm:w-[100%] w-[80%]"
                orientation="horizontal"
              >
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-white_A700 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                      alt="Image"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-white_A700 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_54X54.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                      alt="Image One"
                    />
                  </Stack>
                </div>
                <Stack className="border-2 border-gray_500_66 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_image_1.png"
                    className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                    alt="Image Two"
                  />
                </Stack>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-white_A700 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_2.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                      alt="Image Three"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-white_A700 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_3.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                      alt="Image Four"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-white_A700 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_4.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                      alt="Image Five"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-white_A700 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_5.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                      alt="Image Six"
                    />
                  </Stack>
                </div>
              </List>
              <div className="bg-gradient  md:ml-[13px] ml-[20px] p-[2px] relative rounded-radius12 sm:ml-[10px] w-[7%] ">
                <Stack className="bg-white_A700 border-solid h-[65px] sm:pl-[2px] md:pl-[3px] pl-[5px] sm:py-[2px] md:py-[3px] py-[5px] relative rounded-radius12">
                  <Img
                    src="images/img_image_54X44.png"
                    className="absolute h-[54px] inset-y-[0] max-w-[100%] my-[auto] rounded-radius12 sm:w-[100%] w-[88%]"
                    alt="Image Seven"
                  />
                </Stack>
              </div>
            </Row>
          </Column>
          <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                <Img
                  src="images/img_avatar.png"
                  className="flex-shrink-0 sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                  alt="Avatar"
                />
                <Text
                  className="flex-grow font-medium md:ml-[10px] ml-[15px] sm:ml-[7px] text-gray_500"
                  as="h5"
                  variant="h5"
                >
                  What are you thinking?{" "}
                </Text>
              </Row>
              <Img
                src="images/img_eye.svg"
                className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                alt="eye"
              />
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[42px] md:mt-[55px] mt-[80px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                <Button
                  className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center sm:w-[20px] md:w-[26px] w-[38px]"
                  shape="icbRoundedBorder12"
                  size="mdIcn"
                  variant="icbFillGray100"
                >
                  <Img
                    src="images/img_camera.svg"
                    className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                    alt="camera"
                  />
                </Button>
                <Button
                  className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center sm:w-[20px] md:w-[26px] w-[38px]"
                  shape="icbRoundedBorder12"
                  size="mdIcn"
                  variant="icbFillGray100"
                >
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                    alt="videocamera"
                  />
                </Button>
                <Button
                  className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center sm:w-[20px] md:w-[26px] w-[38px]"
                  shape="icbRoundedBorder12"
                  size="mdIcn"
                  variant="icbFillGray100"
                >
                  <Img
                    src="images/img_plus_38X38.svg"
                    className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                    alt="plus One"
                  />
                </Button>
              </Row>
              <Button
                className="cursor-pointer font-bold min-w-[18%] text-[14px] text-center text-white_A700 w-[max-content]"
                shape="CircleBorder29"
                size="xl"
                variant="FillIndigoA200"
              >
                Share
              </Button>
            </Row>
          </Column>
          <Column className="bg-white_A700 flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                <Img
                  src="images/img_image_48X48.png"
                  className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                  alt="Image Eight"
                />
                <Column className="flex flex-col sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[64%]">
                  <Text
                    className="font-bold mt-[1px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Dustin Housto
                  </Text>
                  <Text
                    className="font-normal mb-[2px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    5min ago
                  </Text>
                </Column>
              </Row>
              <Img
                src="images/img_overflowmenu.svg"
                className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                alt="overflowmenu"
              />
            </Row>
            <Text
              className="font-medium sm:mt-[15px] md:mt-[19px] mt-[29px] text-gray_500 w-[auto]"
              as="h5"
              variant="h5"
            >
              Whether its a driving tour, a cruise or a bus, leaf viewing is a
              great way to spend a fall vacation 😂
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
              <Img
                src="images/img_photo1.png"
                className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[50%]"
                alt="PhotoOne"
              />
              <Column className="flex flex-col items-center md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Img
                    src="images/img_photo2.png"
                    className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[48%]"
                    alt="PhotoTwo"
                  />
                  <Img
                    src="images/img_photo3.png"
                    className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[48%]"
                    alt="PhotoThree"
                  />
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                  <Img
                    src="images/img_photo4.png"
                    className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[48%]"
                    alt="PhotoFour"
                  />
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[36px] p-[53px] rounded-radius8 sm:w-[100%] w-[48%]"
                    style={{ backgroundImage: "url('images/img_5.png')" }}
                  >
                    <Button
                      className="flex items-center justify-center min-w-[100%] my-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_camera_14X14.svg"
                          className="mr-[6px] sm:mr-[3px] md:mr-[4px] text-center"
                          alt="camera"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillWhiteA700"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-gray_900">
                        15
                      </div>
                    </Button>
                  </Column>
                </Row>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] w-[10%] sm:w-[100%]">
                <Img
                  src="images/img_favorite.svg"
                  className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] ml-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                  alt="favorite"
                />
                <Text
                  className="flex-grow font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] text-gray_900"
                  as="h5"
                  variant="h5"
                >
                  326
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center md:ml-[10px] ml-[15px] sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[9%]">
                <Img
                  src="images/img_location.svg"
                  className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                  alt="location"
                />
                <Text
                  className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_900"
                  as="h5"
                  variant="h5"
                >
                  148
                </Text>
              </Row>
              <Button
                className="flex items-center justify-center md:ml-[331px] min-w-[11%] ml-[482px] sm:ml-[256px] text-center w-[max-content]"
                rightIcon={
                  <Img
                    src="images/img_reply.svg"
                    className="ml-[3px] text-center"
                    alt="reply"
                  />
                }
                shape="RoundedBorder4"
                size="sm"
                variant="FillGray1006c"
              >
                <div className="bg-transparent cursor-pointer font-medium font-sfprodisplay text-[14px] text-gray_900">
                  Share
                </div>
              </Button>
            </Row>
          </Column>
        </Column>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[420px] sm:ml-[15px] md:ml-[20px] ml-[auto] mr-[auto] sm:pl-[15px] md:pl-[3px] pl-[5px] sm:pr-[15px] w-[100%]">
          <div className="bg-gray_500_33 h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
          <Column className="bg-gray_900 flex flex-col items-end ml-[10px] md:ml-[6px] sm:mx-[0] sm:p-[15px] md:p-[18px] p-[27px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
              <Button
                className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                shape="icbRoundedBorder12"
                size="mdIcn"
                variant="icbFillGray900"
              >
                <Img
                  src="images/img_close.svg"
                  className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                  alt="close"
                />
              </Button>
              <Stack
                className="bg-cover bg-no-repeat h-[48px] sm:ml-[10px] md:ml-[13px] ml-[20px] relative rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                style={{ backgroundImage: "url('images/img_group1436.png')" }}
              >
                <Img
                  src="images/img_avatar_48X48.png"
                  className="absolute h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                  alt="Avatar One"
                />
              </Stack>
            </Row>
            <Column className="flex flex-col justify-start sm:mb-[21px] md:mb-[28px] mb-[41px] mr-[13px] md:mr-[8px] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[97%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                <Text
                  className="font-sfprodisplay text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Notifications
                </Text>
                <Button
                  className="cursor-pointer font-inter font-normal min-w-[21%] ml-[10px] sm:ml-[5px] md:ml-[6px] my-[1px] not-italic text-[12px] text-center text-white_A700 w-[max-content]"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillRedA200"
                >
                  03
                </Button>
              </Row>
              <Column className="flex flex-col justify-start sm:mt-[33px] md:mt-[43px] mt-[63px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <div className="bg-red_A200 sm:h-[5px] md:h-[6px] h-[8px] sm:my-[10px] md:my-[13px] my-[20px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                  <Img
                    src="images/img_avatar_17.png"
                    className="sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                    alt="Avatar Two"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[43%]">
                    <Text
                      className="font-bold mb-[1px] text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Gunther Ackner
                    </Text>
                    <Text
                      className="font-normal ml-[4px] mt-[1px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4min
                    </Text>
                  </Row>
                  <Img
                    src="images/img_5.png"
                    className="sm:h-[27px] md:h-[34px] h-[49px] max-w-[100%] sm:ml-[45px] md:ml-[59px] ml-[86px] rounded-radius8 sm:w-[26px] md:w-[33px] w-[49px]"
                    alt="Photo"
                  />
                </Row>
                <Column className="flex flex-col justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <div className="bg-red_A200 sm:h-[5px] md:h-[6px] h-[8px] sm:mb-[14px] md:mb-[19px] mb-[28px] mt-[10px] sm:mt-[5px] md:mt-[6px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                    <Img
                      src="images/img_avatar_18.png"
                      className="sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                      alt="Avatar Three"
                    />
                    <Column className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[56%]">
                        <Text
                          className="font-bold mb-[1px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marriet Miles
                        </Text>
                        <Text
                          className="font-normal ml-[3px] mt-[1px] not-italic text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        sent you a friend request
                      </Text>
                    </Column>
                    <Button
                      className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center mb-[2px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:w-[20px] md:w-[26px] w-[38px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbFillWhiteA70033"
                    >
                      <Img
                        src="images/img_camera_38X38.svg"
                        className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                        alt="camera Two"
                      />
                    </Button>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[38px] ml-[56px] sm:mt-[11px] md:mt-[15px] mt-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                    <Button
                      className="flex items-center justify-center min-w-[42%] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillGreen400"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Add
                      </div>
                    </Button>
                    <Row className="bg-gray_900_6c flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:ml-[10px] ml-[15px] sm:mx-[0] p-[4px] rounded-radius4 sm:w-[100%] w-[50%]">
                      <Img
                        src="images/img_close.svg"
                        className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="close One"
                      />
                      <Text
                        className="flex-grow font-medium mb-[1px] ml-[4px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-white_A700"
                        as="h5"
                        variant="h5"
                      >
                        Ignore
                      </Text>
                    </Row>
                  </Row>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] pb-[2px] w-[100%]">
                  <div className="bg-red_A200 sm:h-[5px] md:h-[6px] h-[8px] sm:mb-[14px] md:mb-[19px] mb-[28px] mt-[10px] sm:mt-[5px] md:mt-[6px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                  <Img
                    src="images/img_avatar_19.png"
                    className="sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                    alt="Avatar Four"
                  />
                  <Column className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[56%]">
                      <Text
                        className="font-bold mb-[1px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="font-normal ml-[3px] mt-[1px] not-italic text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        4min
                      </Text>
                    </Row>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      sent you a friend request
                    </Text>
                  </Column>
                  <Button
                    className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center mb-[2px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:w-[20px] md:w-[26px] w-[38px]"
                    shape="icbRoundedBorder12"
                    size="mdIcn"
                    variant="icbFillWhiteA70033"
                  >
                    <Img
                      src="images/img_favorite_2.svg"
                      className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                      alt="favorite One"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Img
                    src="images/img_avatar_7.png"
                    className="sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                    alt="Avatar Five"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[46%]">
                    <Text
                      className="font-bold mb-[1px] text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Gunther Ackner
                    </Text>
                    <Text
                      className="font-normal ml-[4px] mt-[1px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4min
                    </Text>
                  </Row>
                  <Img
                    src="images/img_5.png"
                    className="sm:h-[27px] md:h-[34px] h-[49px] max-w-[100%] sm:ml-[45px] md:ml-[59px] ml-[86px] rounded-radius8 sm:w-[26px] md:w-[33px] w-[49px]"
                    alt="Photo One"
                  />
                </Row>
                <List
                  className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] md:ml-[12px] ml-[18px] sm:ml-[9px] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:w-[100%] w-[95%]"
                  orientation="vertical"
                >
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Img
                        src="images/img_image_7.png"
                        className="sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                        alt="Avatar Six"
                      />
                      <Column className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[56%]">
                          <Text
                            className="font-bold mb-[1px] text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal ml-[3px] mt-[1px] not-italic text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4min
                          </Text>
                        </Row>
                        <Text
                          className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          sent you a friend request
                        </Text>
                      </Column>
                      <Stack className="bg-white_A700_33 h-[38px] mb-[2px] sm:mt-[3px] md:mt-[4px] mt-[6px] p-[10px] sm:p-[5px] md:p-[6px] relative rounded-radius12 w-[13%]">
                        <Img
                          src="images/img_camera_38X38.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[48%]"
                          alt="camera Three"
                        />
                      </Stack>
                    </Row>
                    <Button
                      className="flex items-center justify-center md:ml-[26px] md:mr-[135px] md:mt-[15px] min-w-[26%] ml-[38px] mr-[197px] mt-[22px] sm:ml-[20px] sm:mr-[104px] sm:mt-[11px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillGray900"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Added
                      </div>
                    </Button>
                  </Column>
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Img
                        src="images/img_avatar_20.png"
                        className="sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                        alt="Avatar Seven"
                      />
                      <Column className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[56%]">
                          <Text
                            className="font-bold mb-[1px] text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal ml-[3px] mt-[1px] not-italic text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4min
                          </Text>
                        </Row>
                        <Text
                          className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          sent you a friend request
                        </Text>
                      </Column>
                      <Stack className="bg-white_A700_33 h-[38px] mb-[2px] sm:mt-[3px] md:mt-[4px] mt-[6px] p-[10px] sm:p-[5px] md:p-[6px] relative rounded-radius12 w-[13%]">
                        <Img
                          src="images/img_camera_38X38.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[48%]"
                          alt="camera Four"
                        />
                      </Stack>
                    </Row>
                    <Button
                      className="flex items-center justify-center md:ml-[26px] md:mr-[135px] md:mt-[15px] min-w-[26%] ml-[38px] mr-[197px] mt-[22px] sm:ml-[20px] sm:mr-[104px] sm:mt-[11px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillGray900"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Added
                      </div>
                    </Button>
                  </Column>
                </List>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Img
                    src="images/img_image_11.png"
                    className="sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] mt-[10px] sm:mt-[5px] md:mt-[6px] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                    alt="Avatar Eight"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center ml-[10px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[46%]">
                    <Text
                      className="font-bold mb-[1px] text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Gunther Ackner
                    </Text>
                    <Text
                      className="font-normal ml-[4px] mt-[1px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4min
                    </Text>
                  </Row>
                  <Img
                    src="images/img_5.png"
                    className="max-w-[100%] sm:ml-[45px] md:ml-[59px] ml-[86px] rounded-radius8 w-[16%]"
                    alt="Photo Two"
                  />
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default NotificationsPage;
