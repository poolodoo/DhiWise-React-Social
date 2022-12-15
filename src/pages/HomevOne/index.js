import React from "react";

import { Row, Column, Img, Button, Input, Text, Stack, List } from "components";
import Sidebar from "components/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const HomevOnePage = () => {
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
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:px-[0] w-[100%]">
              <Img
                src="images/img_avatar.png"
                className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                alt="Avatar"
              />
              <Input
                className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                wrapClassName="md:ml-[4px] ml-[6px] sm:mx-[0] sm:w-[100%] w-[88%]"
                name="language"
                placeholder="What are you thinking? "
                shape="RoundedBorder19"
                size="3xl"
              ></Input>
              <Img
                src="images/img_eye.svg"
                className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] ml-[2px] sm:w-[20px] md:w-[26px] w-[38px]"
                alt="eye"
              />
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
              <Button
                className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center my-[10px] sm:my-[5px] md:my-[6px] sm:w-[20px] md:w-[26px] w-[38px]"
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
                className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center md:ml-[10px] ml-[15px] sm:ml-[7px] my-[10px] sm:my-[5px] md:my-[6px] sm:w-[20px] md:w-[26px] w-[38px]"
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
                className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center md:ml-[10px] ml-[15px] sm:ml-[7px] my-[10px] sm:my-[5px] md:my-[6px] sm:w-[20px] md:w-[26px] w-[38px]"
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
              <Button
                className="cursor-pointer font-bold min-w-[18%] sm:ml-[231px] md:ml-[299px] ml-[435px] text-[14px] text-center text-white_A700 w-[max-content]"
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
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center max-w-[420px] sm:ml-[15px] md:ml-[20px] ml-[auto] mr-[auto] sm:pl-[15px] md:pl-[3px] pl-[5px] sm:pr-[15px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
          <Column className="bg-gray_900 flex flex-col items-end ml-[10px] md:ml-[6px] sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
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
            <Column className="flex flex-col font-inter items-center justify-start mb-[2px] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
              <Stack className="bg-red_A200 h-[174px] md:pt-[14px] sm:pt-[15px] pt-[21px] relative rounded-radius12 w-[100%]">
                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <div className="bg-green_400 sm:h-[47px] md:h-[60px] h-[87px] sm:mb-[26px] md:mb-[34px] mb-[50px] rounded-radius435 w-[19%]"></div>
                  <Img
                    src="images/img_oval.png"
                    className="max-w-[100%] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:w-[100%] w-[53%]"
                    alt="Oval One"
                  />
                </Row>
                <div className="absolute bg-gray_900_33 sm:h-[11px] md:h-[14px] h-[19px] right-[37%] rounded-radius50 top-[0] sm:w-[10px] md:w-[13px] w-[19px]"></div>
                <Text
                  className="absolute left-[6%] text-white_A700 top-[13%] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Go Premium!
                </Text>
                <Column className="absolute bottom-[11%] flex flex-col justify-start left-[6%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                  <Text
                    className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] not-italic text-white_A700 w-[100%]"
                    as="h5"
                    variant="h5"
                  >
                    Try premium membership and enjoy
                    <br />a full experience of our community.
                  </Text>
                  <Stack className="bg-gray_900_33 h-[30px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:p-[3px] md:p-[4px] p-[7px] relative rounded-radius12 sm:w-[100%] w-[42%]">
                    <Text
                      className="absolute font-medium h-[max-content] inset-y-[0] left-[10%] my-[auto] text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_arrowright_1.svg"
                      className="absolute md:h-[10px] h-[14px] sm:h-[8px] inset-y-[0] my-[auto] right-[10%] rounded-radius50 w-[14px] sm:w-[7px] md:w-[9px]"
                      alt="arrowright Two"
                    />
                  </Stack>
                </Column>
              </Stack>
              <Column className="flex flex-col justify-start sm:mt-[34px] md:mt-[44px] mt-[64px] pb-[3px] w-[100%]">
                <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                  Who to Follow
                </Text>
                <List
                  className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[22px] md:mt-[29px] mt-[43px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Img
                      src="images/img_avatar.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Two"
                    />
                    <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[73%]">
                      <Text
                        className="font-bold mt-[1px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Cammy Hedling
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Los Angeles, CA
                      </Text>
                    </Column>
                    <Button
                      className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillIndigoA200"
                    >
                      <Img
                        src="images/img_camera_28X28.svg"
                        className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                        alt="camera Two"
                      />
                    </Button>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Img
                      src="images/img_avatar_38X38.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Three"
                    />
                    <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[73%]">
                      <Text
                        className="font-bold mt-[1px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Cammy Hedling
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Los Angeles, CA
                      </Text>
                    </Column>
                    <Button
                      className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillIndigoA200"
                    >
                      <Img
                        src="images/img_camera_28X28.svg"
                        className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                        alt="camera Three"
                      />
                    </Button>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Img
                      src="images/img_avatar_1.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Four"
                    />
                    <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[73%]">
                      <Text
                        className="font-bold mt-[1px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Cammy Hedling
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Los Angeles, CA
                      </Text>
                    </Column>
                    <Button
                      className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillIndigoA200"
                    >
                      <Img
                        src="images/img_camera_28X28.svg"
                        className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                        alt="camera Four"
                      />
                    </Button>
                  </Row>
                </List>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                  <Text
                    className="flex-grow font-bold mt-[1px] text-gray_500 tracking-ls1 uppercase"
                    as="h6"
                    variant="h6"
                  >
                    See more
                  </Text>
                  <Img
                    src="images/img_arrowright_2.svg"
                    className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] w-[14px] sm:w-[7px] md:w-[9px]"
                    alt="arrowright Three"
                  />
                </Row>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[33px] md:mt-[43px] mt-[63px] w-[100%]">
                <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                  Friends
                </Text>
                <List
                  className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[23px] md:mt-[30px] mt-[44px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                    <Img
                      src="images/img_avatar_2.png"
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
                      className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[135px] sm:ml-[71px] md:ml-[92px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillWhiteA70033"
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
                      src="images/img_avatar_3.png"
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
                      className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[135px] sm:ml-[71px] md:ml-[92px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillWhiteA70033"
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
                      src="images/img_avatar_4.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Seven"
                    />
                    <Text
                      className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      MadeInAmerica
                    </Text>
                    <Button
                      className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[135px] sm:ml-[71px] md:ml-[92px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillWhiteA70033"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                        alt="checkmark Two"
                      />
                    </Button>
                  </Row>
                </List>
              </Column>
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default HomevOnePage;
