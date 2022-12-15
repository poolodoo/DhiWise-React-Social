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

const MessagesPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-sfprodisplay items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[588px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Sidebar className="md:hidden sm:hidden w-[29%]" />
            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
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
                    className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:w-[25px] md:w-[33px] w-[48px]"
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
                <Column className="flex flex-col justify-start sm:mt-[33px] md:mt-[43px] mt-[63px] w-[100%]">
                  <Text className="text-gray_900 w-[auto]" as="h1" variant="h1">
                    Inbox
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start sm:mt-[22px] md:mt-[28px] mt-[42px] sm:mx-[0] sm:px-[0] py-[1px] sm:w-[100%] w-[84%]">
                    <Column className="flex flex-col items-center justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Direct Messages
                      </Text>
                      <Line className="bg-gray_900 h-[2px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[100%]" />
                    </Column>
                    <Text
                      className="font-bold sm:ml-[10px] md:ml-[13px] ml-[20px] mt-[3px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Group Chat
                    </Text>
                    <Text
                      className="font-bold sm:ml-[12px] md:ml-[15px] ml-[23px] mt-[1px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Archived
                    </Text>
                  </Row>
                </Column>
              </Column>
              <List
                className="font-inter sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:w-[100%] w-[98%]"
                orientation="vertical"
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Stack className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_28X28.png"
                        className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                        alt="Avatar"
                      />
                      <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                      </Stack>
                    </Stack>
                    <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] pl-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[25%]">
                    <Text
                      className="font-inter font-normal mr-[1px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      3:03pm
                    </Text>
                    <Button
                      className="cursor-pointer font-bold font-sfprodisplay min-w-[21%] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[max-content]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Stack className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_image_11.png"
                        className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                        alt="Avatar One"
                      />
                      <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                      </Stack>
                    </Stack>
                    <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] pl-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[25%]">
                    <Text
                      className="font-inter font-normal mr-[1px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      3:03pm
                    </Text>
                    <Button
                      className="cursor-pointer font-bold font-sfprodisplay min-w-[21%] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[max-content]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Stack className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_image_9.png"
                        className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                        alt="Avatar Two"
                      />
                      <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                      </Stack>
                    </Stack>
                    <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] pl-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[25%]">
                    <Text
                      className="font-inter font-normal mr-[1px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      3:03pm
                    </Text>
                    <Button
                      className="cursor-pointer font-bold font-sfprodisplay min-w-[21%] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[max-content]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pr-[1px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Stack className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_18.png"
                        className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                        alt="Avatar Three"
                      />
                      <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                      </Stack>
                    </Stack>
                    <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Text
                    className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Yesterday
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pr-[1px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Stack className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_6.png"
                        className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                        alt="Avatar Four"
                      />
                      <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                      </Stack>
                    </Stack>
                    <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Text
                    className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Yesterday
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pr-[1px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Stack className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_21.png"
                        className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                        alt="Avatar Five"
                      />
                      <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                      </Stack>
                    </Stack>
                    <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Text
                    className="font-normal sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Oct 26
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Stack className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_19.png"
                        className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                        alt="Avatar Six"
                      />
                      <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                      </Stack>
                    </Stack>
                    <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] pl-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[25%]">
                    <Text
                      className="font-inter font-normal mr-[1px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Oct 26
                    </Text>
                    <Button
                      className="cursor-pointer font-bold font-sfprodisplay min-w-[21%] sm:mt-[3px] md:mt-[4px] mt-[6px] text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[max-content]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Stack className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_image_8.png"
                        className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                        alt="Avatar Seven"
                      />
                      <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                      </Stack>
                    </Stack>
                    <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] pl-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[25%]">
                    <Text
                      className="font-inter font-normal mr-[1px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Oct 26
                    </Text>
                    <Button
                      className="cursor-pointer font-bold font-sfprodisplay min-w-[21%] sm:mt-[3px] md:mt-[4px] mt-[6px] text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[max-content]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </Column>
                </Row>
              </List>
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[800px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-gray_500_48 h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[1%]"></div>
            <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[99%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
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
                  alt="Avatar Eight"
                />
              </Row>
              <Column className="flex flex-col font-inter items-center justify-start md:mb-[11px] mb-[16px] sm:mb-[8px] sm:mt-[154px] md:mt-[200px] mt-[291px] sm:mx-[0] pb-[1px] sm:px-[0] sm:w-[100%] w-[62%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Stack className="bg-gray_100 h-[160px] sm:p-[15px] md:p-[28px] p-[41px] relative rounded-radius501 md:w-[110px] w-[160px] sm:w-[85px]">
                    <Img
                      src="images/img_mail_75X78.svg"
                      className="absolute h-[75px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[49%]"
                      alt="mail One"
                    />
                  </Stack>
                  <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]">
                    <Text
                      className="text-gray_500 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      It's nice to chat with someone
                    </Text>
                    <Text
                      className="font-medium md:mt-[11px] mt-[17px] sm:mt-[9px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Pick a person from left menu and start your conversation
                    </Text>
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[169px] md:mt-[219px] mt-[319px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                  <Img
                    src="images/img_download.svg"
                    className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                    alt="download"
                  />
                  <Text
                    className="font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] text-gray_500 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Social is available for Mac
                  </Text>
                  <Text
                    className="font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Download it now
                  </Text>
                </Row>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default MessagesPage;
