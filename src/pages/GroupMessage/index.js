import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  Input,
  Text,
  Line,
  List,
  Stack,
} from "components";
import Sidebar from "components/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const GroupMessagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-sfprodisplay items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[600px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Sidebar className="md:hidden sm:hidden w-[28%]" />
            <Column className="flex flex-col justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[82%]"
                    name="Search"
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
                    shape="srcRoundedBorder12"
                    size="lgSrc"
                    variant="srcFillWhiteA700"
                  ></Input>
                  <Button
                    className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center md:ml-[10px] ml-[15px] sm:ml-[7px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[25px] md:w-[33px] w-[48px]"
                    shape="icbRoundedBorder12"
                    size="mdIcn"
                    variant="icbFillGreen400"
                  >
                    <Img
                      src="images/img_laptop_14X14.svg"
                      className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                      alt="laptop"
                    />
                  </Button>
                </Row>
                <Column className="flex flex-col font-inter justify-start mr-[12px] md:mr-[8px] sm:mt-[33px] md:mt-[43px] mt-[63px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Text className="text-gray_900 w-[auto]" as="h1" variant="h1">
                    Inbox
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[22px] md:mt-[28px] mt-[42px] sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-bold mt-[2px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Direct Messages
                    </Text>
                    <Column className="flex flex-col justify-start md:ml-[13px] ml-[20px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Group Chat
                      </Text>
                      <Line className="bg-gray_900 h-[2px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:w-[100%] w-[96%]" />
                    </Column>
                    <Text
                      className="font-bold sm:ml-[10px] md:ml-[13px] ml-[20px] mt-[1px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Archived
                    </Text>
                  </Row>
                </Column>
              </Column>
              <List
                className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid min-h-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]"
                orientation="vertical"
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Stack className="h-[51px] relative sm:w-[27px] md:w-[35px] w-[51px]">
                      <Stack className="absolute h-[28px] top-[0] w-[100%]">
                        <Img
                          src="images/img_avatar_22.png"
                          className="absolute h-[28px] left-[0] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar"
                        />
                        <Img
                          src="images/img_image_28X28.png"
                          className="absolute h-[28px] max-w-[100%] right-[0] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Image"
                        />
                      </Stack>
                      <Button
                        className="absolute bottom-[0] cursor-pointer font-bold sm:h-[15px] md:h-[20px] h-[28px] inset-x-[0] mx-[auto] text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillGray900"
                      >
                        +9
                      </Button>
                    </Stack>
                    <Column className="flex flex-col font-inter sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Close Friends
                      </Text>
                      <Text
                        className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] pt-[1px] sm:px-[0] px-[1px] sm:w-[100%] w-[14%]">
                    <Text
                      className="font-inter font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      3:03pm
                    </Text>
                    <Button
                      className="cursor-pointer font-medium font-sfprodisplay sm:h-[10px] md:h-[13px] h-[18px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[10px] text-center text-white_A700 md:w-[12px] w-[18px] sm:w-[9px]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </Column>
                </Row>
                <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[13px] sm:p-[15px] p-[20px] rounded-radius12 w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Stack className="h-[51px] relative sm:w-[27px] md:w-[35px] w-[51px]">
                      <Stack className="absolute h-[28px] top-[0] w-[100%]">
                        <Img
                          src="images/img_avatar_8.png"
                          className="absolute h-[28px] left-[0] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar One"
                        />
                        <Img
                          src="images/img_image_8.png"
                          className="absolute h-[28px] max-w-[100%] right-[0] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Image One"
                        />
                      </Stack>
                      <Button
                        className="absolute bottom-[0] cursor-pointer font-bold sm:h-[15px] md:h-[20px] h-[28px] inset-x-[0] mx-[auto] text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillGray900"
                      >
                        +9
                      </Button>
                    </Stack>
                    <Column className="flex flex-col font-inter md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Close Friends
                      </Text>
                      <Text
                        className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Column className="flex flex-col items-end sm:mx-[0] pt-[1px] sm:px-[0] px-[1px] sm:w-[100%] w-[14%]">
                    <Text
                      className="font-inter font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      3:03pm
                    </Text>
                    <Button
                      className="cursor-pointer font-medium font-sfprodisplay sm:h-[10px] md:h-[13px] h-[18px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[10px] text-center text-white_A700 md:w-[12px] w-[18px] sm:w-[9px]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pr-[1px] sm:px-[0] sm:w-[100%] w-[90%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                    <Stack className="h-[51px] relative sm:w-[27px] md:w-[35px] w-[51px]">
                      <Stack className="absolute h-[28px] top-[0] w-[100%]">
                        <Img
                          src="images/img_avatar_9.png"
                          className="absolute h-[28px] left-[0] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar Two"
                        />
                        <Img
                          src="images/img_avatar_6.png"
                          className="absolute h-[28px] max-w-[100%] right-[0] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Image Two"
                        />
                      </Stack>
                      <Button
                        className="absolute bottom-[0] cursor-pointer font-bold sm:h-[15px] md:h-[20px] h-[28px] inset-x-[0] mx-[auto] text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillGray900"
                      >
                        +9
                      </Button>
                    </Stack>
                    <Column className="flex flex-col font-inter sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Close Friends
                      </Text>
                      <Text
                        className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Text
                    className="font-inter font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    3:03pm
                  </Text>
                </Row>
              </List>
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[795px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-gray_500_48 h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[1%]"></div>
            <Column className="bg-white_A700 flex flex-col items-end sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[99%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
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
                  alt="Avatar Three"
                />
              </Row>
              <Column className="flex flex-col font-inter justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                    <Stack className="h-[58px] relative sm:w-[100%] w-[54%]">
                      <Stack className="absolute h-[58px] left-[0] sm:w-[100%] w-[69%]">
                        <Img
                          src="images/img_avatar_58X58.png"
                          className="absolute h-[58px] left-[0] max-w-[100%] rounded-radius16 sm:w-[30px] md:w-[39px] w-[58px]"
                          alt="Avatar Four"
                        />
                        <Img
                          src="images/img_avatar_8.png"
                          className="absolute h-[58px] max-w-[100%] right-[0] rounded-radius16 sm:w-[30px] md:w-[39px] w-[58px]"
                          alt="Avatar Five"
                        />
                      </Stack>
                      <Text
                        className="absolute bg-gray_900 flex items-center sm:pt-[15px] px-[14px] sm:px-[7px] md:px-[9px] right-[0] rounded-radius16 text-white_A700 w-[58px]"
                        as="h3"
                        variant="h3"
                      >
                        +4
                      </Text>
                    </Stack>
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Beach Trip
                    </Text>
                  </Row>
                  <Img
                    src="images/img_call.svg"
                    className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:ml-[127px] md:ml-[165px] ml-[240px] sm:w-[13px] md:w-[17px] w-[25px]"
                    alt="call"
                  />
                  <Img
                    src="images/img_videocamera.svg"
                    className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:ml-[21px] md:ml-[27px] ml-[40px] sm:w-[13px] md:w-[17px] w-[25px]"
                    alt="videocamera"
                  />
                  <Img
                    src="images/img_eye.svg"
                    className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:ml-[21px] md:ml-[27px] ml-[40px] sm:w-[13px] md:w-[17px] w-[25px]"
                    alt="eye"
                  />
                </Row>
                <Column className="flex flex-col justify-start sm:mt-[37px] md:mt-[48px] mt-[70px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                  <List
                    className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] sm:w-[100%] w-[79%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_avatar_38X38.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Six"
                      />
                      <Column className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
                          <Text
                            className="font-bold mb-[1px] text-gray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4min
                          </Text>
                        </Row>
                        <Text
                          className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Yes, I saw his post yesterday
                        </Text>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_avatar_1.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Seven"
                      />
                      <Column className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
                          <Text
                            className="font-bold mb-[1px] text-gray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4min
                          </Text>
                        </Row>
                        <Text
                          className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Yes, I saw his post yesterday
                        </Text>
                      </Column>
                    </Row>
                  </List>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Eight"
                    />
                    <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                        <Text
                          className="font-bold text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Gunther Ackner
                        </Text>
                        <Text
                          className="font-normal ml-[1px] mt-[1px] not-italic text-gray_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_photo2.png"
                          className="sm:h-[43px] md:h-[56px] h-[80px] max-w-[100%] rounded-radius8 sm:w-[42px] md:w-[55px] w-[80px]"
                          alt="PhotoTwo"
                        />
                        <Img
                          src="images/img_photo3.png"
                          className="sm:h-[43px] md:h-[56px] h-[80px] max-w-[100%] rounded-radius8 sm:w-[42px] md:w-[55px] w-[80px]"
                          alt="PhotoThree"
                        />
                        <Img
                          src="images/img_5.png"
                          className="sm:h-[43px] md:h-[56px] h-[80px] max-w-[100%] rounded-radius8 sm:w-[42px] md:w-[55px] w-[80px]"
                          alt="PhotoFive"
                        />
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[26px] md:mt-[33px] mt-[49px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                    <Img
                      src="images/img_avatar_8.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Nine"
                    />
                    <Column className="flex flex-col justify-start md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[57%]">
                        <Text
                          className="font-bold mt-[1px] text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Anne Carry
                        </Text>
                        <Text
                          className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] not-italic text-gray_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </Row>
                      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[6px] mt-[9px] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius12 w-[100%]">
                        <Button
                          className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center sm:w-[20px] md:w-[26px] w-[38px]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillLightblue20033"
                        >
                          <Img
                            src="images/img_forward.svg"
                            className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                            alt="forward"
                          />
                        </Button>
                        <Line className="bg-gray_500_7e h-[4px] md:my-[11px] my-[17px] sm:my-[9px] rounded-radius2 sm:w-[100%] w-[68%]" />
                        <Text
                          className="font-normal not-italic text-gray_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          0:06
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[26px] md:mt-[33px] mt-[49px] sm:mx-[0] pb-[3px] pr-[3px] sm:px-[0] sm:w-[100%] w-[79%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Ten"
                    />
                    <Column className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
                        <Text
                          className="font-bold mb-[1px] text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marriet Miles
                        </Text>
                        <Text
                          className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] not-italic text-gray_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </Row>
                      <Text
                        className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Yes, I saw his post yesterday
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[48px] md:mt-[62px] mt-[91px] w-[100%]">
                  <Button
                    className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:w-[25px] md:w-[33px] w-[48px]"
                    shape="icbRoundedBorder12"
                    size="mdIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_minimize_48X48.svg"
                      className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                      alt="minimize"
                    />
                  </Button>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[91%]"
                    name="Field"
                    placeholder="Start typing…"
                    suffix={
                      <Img
                        src="images/img_user_1.svg"
                        className="ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="user"
                      />
                    }
                    shape="RoundedBorder12"
                    size="4xl"
                    variant="FillGray100"
                  ></Input>
                </Row>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default GroupMessagePage;
