import React from "react";

import { Row, Column, Img, Button, Input, Text, Grid, List } from "components";
import Sidebar from "components/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const MyFriendsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center mx-[auto] w-[100%]">
        <Sidebar className="md:hidden sm:hidden w-[12%]" />
        <Column className="flex flex-col items-center max-w-[760px] sm:ml-[34px] md:ml-[44px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
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
          <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] pt-[3px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pr-[2px] pt-[2px] w-[100%]">
              <Text className="text-gray_900 w-[auto]" as="h1" variant="h1">
                My Friends
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mr-[4px] mr-[6px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
                <Text
                  className="flex-grow font-medium mb-[1px] text-gray_900"
                  as="h5"
                  variant="h5"
                >
                  Filter
                </Text>
                <Img
                  src="images/img_filter.svg"
                  className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] ml-[3px] mt-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                  alt="filter"
                />
              </Row>
            </Row>
            <Grid className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
              <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar.png"
                  className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                  alt="Avatar"
                />
                <Column className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center md:mt-[11px] min-w-[99%] mt-[16px] sm:mt-[8px] text-center w-[max-content]"
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
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_13.png"
                  className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                  alt="Avatar One"
                />
                <Column className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center md:mt-[11px] min-w-[99%] mt-[16px] sm:mt-[8px] text-center w-[max-content]"
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
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_22.png"
                  className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                  alt="Avatar Two"
                />
                <Column className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center md:mt-[11px] min-w-[99%] mt-[16px] sm:mt-[8px] text-center w-[max-content]"
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
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_38X38.png"
                  className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                  alt="Avatar Three"
                />
                <Column className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center md:mt-[11px] min-w-[99%] mt-[16px] sm:mt-[8px] text-center w-[max-content]"
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
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_10.png"
                  className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                  alt="Avatar Four"
                />
                <Column className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center md:mt-[11px] min-w-[99%] mt-[16px] sm:mt-[8px] text-center w-[max-content]"
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
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_3.png"
                  className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                  alt="Avatar Five"
                />
                <Column className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center md:mt-[11px] min-w-[99%] mt-[16px] sm:mt-[8px] text-center w-[max-content]"
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
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_58X58.png"
                  className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                  alt="Avatar Six"
                />
                <Column className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center md:mt-[11px] min-w-[99%] mt-[16px] sm:mt-[8px] text-center w-[max-content]"
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
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_4.png"
                  className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                  alt="Avatar Seven"
                />
                <Column className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center md:mt-[11px] min-w-[99%] mt-[16px] sm:mt-[8px] text-center w-[max-content]"
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
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_23.png"
                  className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                  alt="Avatar Eight"
                />
                <Column className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center md:mt-[11px] min-w-[99%] mt-[16px] sm:mt-[8px] text-center w-[max-content]"
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
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Column>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center max-w-[420px] sm:ml-[15px] md:ml-[20px] ml-[auto] mr-[auto] sm:pl-[15px] md:pl-[3px] pl-[5px] sm:pr-[15px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
          <Column className="bg-gray_900 flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:ml-[147px] ml-[214px] mr-[10px] md:mr-[6px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
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
                alt="Avatar Nine"
              />
            </Row>
            <Column className="flex flex-col font-inter justify-start md:ml-[10px] ml-[15px] md:mr-[13px] mr-[20px] sm:mt-[26px] md:mt-[33px] mt-[49px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
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
                    alt="Avatar Ten"
                  />
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
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
                      src="images/img_camera_2.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_38X38.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Eleven"
                  />
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
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
                      src="images/img_camera_2.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera One"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_1.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Twelve"
                  />
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
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
                      src="images/img_camera_2.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera Two"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_2.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Thirteen"
                  />
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
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
                      src="images/img_camera_2.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera Three"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_4.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Fourteen"
                  />
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
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
                      src="images/img_camera_2.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera Four"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_15.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Fifteen"
                  />
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
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
                      src="images/img_camera_2.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera Five"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_24.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Sixteen"
                  />
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
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
                      src="images/img_camera_2.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera Six"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_25.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Seventeen"
                  />
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
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
                      src="images/img_camera_2.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera Seven"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_23.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Eighteen"
                  />
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
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
                      src="images/img_camera_2.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera Eight"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_22.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Nineteen"
                  />
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
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
                      src="images/img_camera_2.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera Nine"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_26.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Twenty"
                  />
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
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
                      src="images/img_camera_2.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera Ten"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_10.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar TwentyOne"
                  />
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
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
                      src="images/img_camera_2.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera Eleven"
                    />
                  </Button>
                </Row>
              </List>
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default MyFriendsPage;
