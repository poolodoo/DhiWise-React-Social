import React from "react";

import {
  Row,
  Column,
  Img,
  Button,
  Input,
  Text,
  Line,
  Grid,
  Stack,
  List,
} from "components";
import Sidebar from "components/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const EventsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start mx-[auto] w-[100%]">
        <Sidebar className="md:hidden sm:hidden w-[12%]" />
        <Column className="flex flex-col justify-end max-w-[790px] sm:ml-[34px] md:ml-[44px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:pb-[15px] md:pb-[20px] pb-[30px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius12 sm:w-[100%] w-[97%]">
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
          <Text
            className="sm:mt-[33px] md:mt-[43px] mt-[63px] text-gray_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Events
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mr-[auto] sm:mt-[22px] md:mt-[28px] mt-[42px] sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[62%]">
            <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
              <Text
                className="font-bold text-gray_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Anytime
              </Text>
              <Line className="bg-gray_900 h-[2px] ml-[4px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:w-[100%] w-[61%]" />
            </Column>
            <Text
              className="font-bold mt-[2px] text-gray_500 w-[auto]"
              as="h5"
              variant="h5"
            >
              Today
            </Text>
            <Text
              className="font-bold sm:ml-[13px] md:ml-[17px] ml-[26px] mt-[1px] text-gray_500 w-[auto]"
              as="h5"
              variant="h5"
            >
              Tomorrow
            </Text>
            <Text
              className="font-bold sm:ml-[11px] md:ml-[15px] ml-[22px] mt-[1px] text-gray_500 w-[auto]"
              as="h5"
              variant="h5"
            >
              This Week
            </Text>
            <Text
              className="font-bold sm:ml-[11px] md:ml-[15px] ml-[22px] mt-[1px] text-gray_500 w-[auto]"
              as="h5"
              variant="h5"
            >
              This Month
            </Text>
            <Text
              className="font-bold sm:ml-[11px] md:ml-[15px] ml-[22px] mt-[1px] text-gray_500 w-[auto]"
              as="h5"
              variant="h5"
            >
              Select
            </Text>
          </Row>
          <Grid className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
            <Column className="bg-white_A700 flex flex-col items-center justify-center sm:p-[15px] md:p-[19px] p-[29px] rounded-radius12 w-[100%]">
              <Img
                src="images/img_image_180X320.png"
                className="max-w-[100%] mt-[1px] rounded-radius8 w-[100%]"
                alt="Image"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                  <Button
                    className="cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 sm:w-[25px] md:w-[33px] w-[48px]"
                    shape="RoundedBorder15"
                    size="lg"
                    variant="OutlineGray50033"
                  >
                    10
                  </Button>
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Monday
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      December, 2019
                    </Text>
                  </Column>
                </Row>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                  alt="overflowmenu"
                />
              </Row>
              <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] md:pr-[4px] pr-[6px] sm:pt-[3px] md:pt-[4px] pt-[6px] sm:px-[0] w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  Fashion Meetup
                </Text>
                <Text
                  className="font-medium mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Starts at 9:00am in Los Angeles
                </Text>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mb-[1px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:px-[0] w-[100%]">
                <Button
                  className="flex items-center justify-center min-w-[32%] text-center w-[max-content]"
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
                <Stack className="font-sfprodisplay h-[28px] relative w-[24%]">
                  <Stack className="absolute h-[28px] left-[0] sm:w-[100%] w-[69%]">
                    <Img
                      src="images/img_avatar.png"
                      className="absolute h-[28px] left-[0] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                      alt="Avatar"
                    />
                    <Img
                      src="images/img_avatar.png"
                      className="absolute h-[28px] max-w-[100%] right-[0] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                      alt="Avatar One"
                    />
                  </Stack>
                  <Button
                    className="absolute cursor-pointer font-bold sm:h-[15px] md:h-[20px] h-[28px] right-[0] text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray900"
                  >
                    +9
                  </Button>
                </Stack>
              </Row>
            </Column>
            <Column className="bg-white_A700 flex flex-col justify-center sm:p-[15px] md:p-[19px] p-[29px] rounded-radius12 w-[100%]">
              <Img
                src="images/img_image_13.png"
                className="max-w-[100%] mt-[1px] rounded-radius8 w-[100%]"
                alt="Image One"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] pb-[3px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                  <Button
                    className="cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 sm:w-[25px] md:w-[33px] w-[48px]"
                    shape="RoundedBorder15"
                    size="lg"
                    variant="OutlineGray5006c"
                  >
                    10
                  </Button>
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Wednesday
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      December, 2019
                    </Text>
                  </Column>
                </Row>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:w-[20px] md:w-[26px] w-[38px]"
                  alt="overflowmenu One"
                />
              </Row>
              <Text
                className="font-inter leading-[30.00px] md:leading-[normal] sm:leading-[normal] ml-[1px] sm:mt-[14px] md:mt-[18px] mt-[27px] sm:mx-[0] text-gray_900 sm:w-[100%] w-[75%]"
                as="h3"
                variant="h3"
              >
                2019 DUB Show at Los Angeles Auto Show
              </Text>
              <Text
                className="font-medium font-sfprodisplay ml-[1px] md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_500 w-[auto]"
                as="h5"
                variant="h5"
              >
                Starts at 9:00am in Los Angeles
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start justify-between mb-[1px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:px-[0] w-[100%]">
                <Button
                  className="flex items-center justify-center min-w-[32%] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark_14X14.svg"
                      className="mr-[3px] text-center"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder4"
                  size="md"
                  variant="OutlineGray50033"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-gray_900">
                    Interested
                  </div>
                </Button>
                <Stack className="font-sfprodisplay h-[28px] mt-[2px] relative w-[24%]">
                  <Stack className="absolute h-[28px] left-[0] sm:w-[100%] w-[69%]">
                    <Img
                      src="images/img_avatar.png"
                      className="absolute h-[28px] left-[0] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                      alt="Avatar One"
                    />
                    <Img
                      src="images/img_avatar.png"
                      className="absolute h-[28px] max-w-[100%] right-[0] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                      alt="Avatar One One"
                    />
                  </Stack>
                  <Button
                    className="absolute cursor-pointer font-bold sm:h-[15px] md:h-[20px] h-[28px] right-[0] text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray900"
                  >
                    +9
                  </Button>
                </Stack>
              </Row>
            </Column>
            <Column className="bg-white_A700 flex flex-col items-center justify-center sm:p-[15px] md:p-[19px] p-[29px] rounded-radius12 w-[100%]">
              <Img
                src="images/img_image_14.png"
                className="max-w-[100%] mt-[1px] rounded-radius8 w-[100%]"
                alt="Image Two"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                  <Button
                    className="cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 sm:w-[25px] md:w-[33px] w-[48px]"
                    shape="RoundedBorder15"
                    size="md"
                    variant="OutlineGray50033"
                  >
                    10
                  </Button>
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Monday
                    </Text>
                    <Text
                      className="font-normal sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      December, 2019
                    </Text>
                  </Column>
                </Row>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                  alt="overflowmenu Two"
                />
              </Row>
              <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  Fashion Meetup
                </Text>
                <Text
                  className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-gray_500 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Starts at 9:00am in Los Angeles
                </Text>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mb-[1px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:px-[0] w-[100%]">
                <Button
                  className="flex items-center justify-center min-w-[32%] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark.svg"
                      className="mr-[3px] text-center"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillGreen400"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                    Interested
                  </div>
                </Button>
                <Stack className="font-sfprodisplay h-[28px] relative w-[24%]">
                  <Stack className="absolute h-[28px] left-[0] sm:w-[100%] w-[69%]">
                    <Img
                      src="images/img_avatar.png"
                      className="absolute h-[28px] left-[0] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                      alt="Avatar Two"
                    />
                    <Img
                      src="images/img_avatar.png"
                      className="absolute h-[28px] max-w-[100%] right-[0] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                      alt="Avatar One Two"
                    />
                  </Stack>
                  <Button
                    className="absolute cursor-pointer font-bold sm:h-[15px] md:h-[20px] h-[28px] right-[0] text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray900"
                  >
                    +9
                  </Button>
                </Stack>
              </Row>
            </Column>
            <Column className="bg-white_A700 flex flex-col items-center justify-center sm:p-[15px] md:p-[19px] p-[29px] rounded-radius12 w-[100%]">
              <Img
                src="images/img_image_15.png"
                className="max-w-[100%] mt-[1px] rounded-radius8 w-[100%]"
                alt="Image Three"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                  <Button
                    className="cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 sm:w-[25px] md:w-[33px] w-[48px]"
                    shape="RoundedBorder15"
                    size="md"
                    variant="OutlineGray50033"
                  >
                    10
                  </Button>
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Monday
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      December, 2019
                    </Text>
                  </Column>
                </Row>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                  alt="overflowmenu Three"
                />
              </Row>
              <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  Fashion Meetup
                </Text>
                <Text
                  className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-gray_500 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Starts at 9:00am in Los Angeles
                </Text>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mb-[1px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:px-[0] w-[100%]">
                <Button
                  className="flex items-center justify-center min-w-[32%] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark.svg"
                      className="mr-[3px] text-center"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillGreen400"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                    Interested
                  </div>
                </Button>
                <Stack className="font-sfprodisplay h-[28px] relative w-[24%]">
                  <Stack className="absolute h-[28px] left-[0] sm:w-[100%] w-[69%]">
                    <Img
                      src="images/img_avatar.png"
                      className="absolute h-[28px] left-[0] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                      alt="Avatar Three"
                    />
                    <Img
                      src="images/img_avatar.png"
                      className="absolute h-[28px] max-w-[100%] right-[0] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                      alt="Avatar One Three"
                    />
                  </Stack>
                  <Button
                    className="absolute cursor-pointer font-bold sm:h-[15px] md:h-[20px] h-[28px] right-[0] text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray900"
                  >
                    +9
                  </Button>
                </Stack>
              </Row>
            </Column>
          </Grid>
        </Column>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center justify-between max-w-[355px] sm:ml-[34px] md:ml-[44px] ml-[auto] mr-[auto] sm:pl-[15px] pl-[1px] sm:pr-[15px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
          <Column className="bg-gray_900 flex flex-col items-end sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[96%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
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
                alt="Avatar Four"
              />
            </Row>
            <Column className="flex flex-col font-inter justify-start sm:mb-[23px] md:mb-[30px] mb-[45px] sm:mt-[27px] md:mt-[35px] mt-[52px] sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[97%]">
              <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                My Next Events
              </Text>
              <List
                className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]"
                orientation="vertical"
              >
                <Column className="flex flex-col justify-start w-[100%]">
                  <Img
                    src="images/img_image_140X250.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Image Four"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Column className="flex flex-col sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[84%]">
                      <Text
                        className="font-bold mt-[1px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dua Lipa Live Concert
                      </Text>
                      <Text
                        className="font-normal mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        December 12, 2019
                      </Text>
                    </Column>
                    <Button
                      className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[12px] sm:ml-[6px] md:ml-[8px] sm:my-[4px] md:my-[6px] my-[9px] sm:w-[14px] md:w-[19px] w-[28px]"
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
                </Column>
                <Column className="flex flex-col justify-start w-[100%]">
                  <Img
                    src="images/img_image_16.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Image Five"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Column className="flex flex-col sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[84%]">
                      <Text
                        className="font-bold mt-[1px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dua Lipa Live Concert
                      </Text>
                      <Text
                        className="font-normal mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        December 12, 2019
                      </Text>
                    </Column>
                    <Button
                      className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[12px] sm:ml-[6px] md:ml-[8px] sm:my-[4px] md:my-[6px] my-[9px] sm:w-[14px] md:w-[19px] w-[28px]"
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
                </Column>
                <Column className="flex flex-col justify-start w-[100%]">
                  <Img
                    src="images/img_image_17.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Image Six"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Column className="flex flex-col sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[84%]">
                      <Text
                        className="font-bold mt-[1px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dua Lipa Live Concert
                      </Text>
                      <Text
                        className="font-normal mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        December 12, 2019
                      </Text>
                    </Column>
                    <Button
                      className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[12px] sm:ml-[6px] md:ml-[8px] sm:my-[4px] md:my-[6px] my-[9px] sm:w-[14px] md:w-[19px] w-[28px]"
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
                </Column>
              </List>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
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
                  alt="arrowright One"
                />
              </Row>
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default EventsPage;
