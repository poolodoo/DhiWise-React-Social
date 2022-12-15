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

const DirectMessagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-sfprodisplay items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[600px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Sidebar className="md:hidden sm:hidden w-[28%]" />
            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
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
                <Column className="flex flex-col font-inter justify-start sm:mt-[33px] md:mt-[43px] mt-[63px] w-[100%]">
                  <Text className="text-gray_900 w-[auto]" as="h1" variant="h1">
                    Inbox
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[22px] md:mt-[28px] mt-[42px] sm:mx-[0] sm:px-[0] py-[1px] sm:w-[100%] w-[84%]">
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
              <Column className="flex flex-col font-inter items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                <List
                  className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] sm:w-[100%] w-[90%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
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
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
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
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
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
                </List>
                <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius12 w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
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
                    <Column className="flex flex-col justify-start mb-[3px] ml-[12px] md:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
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
                    className="font-normal mr-[1px] not-italic text-gray_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Yesterday
                  </Text>
                </Row>
                <List
                  className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:w-[100%] w-[90%]"
                  orientation="vertical"
                >
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
                  alt="Avatar Eight"
                />
              </Row>
              <Column className="flex flex-col font-inter justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[58px] sm:pb-[15px] md:pb-[28px] pb-[42px] sm:pl-[15px] md:pl-[28px] pl-[42px] relative rounded-radius16 sm:w-[30px] md:w-[39px] w-[58px]"
                      style={{
                        backgroundImage: "url('images/img_avatar.png')",
                      }}
                    >
                      <Img
                        src="images/img_settings_15X15.svg"
                        className="absolute h-[15px] max-w-[100%] md:w-[10px] w-[15px] sm:w-[7px]"
                        alt="settings Two"
                      />
                    </Stack>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                      <Text
                        className="text-gray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="font-medium mt-[12px] sm:mt-[6px] md:mt-[8px] text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Online
                      </Text>
                    </Column>
                  </Row>
                  <Img
                    src="images/img_user_32X32.svg"
                    className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:ml-[135px] md:ml-[174px] ml-[254px] sm:w-[17px] md:w-[22px] w-[32px]"
                    alt="user One"
                  />
                  <Img
                    src="images/img_call.svg"
                    className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:ml-[21px] md:ml-[27px] ml-[40px] sm:w-[13px] md:w-[17px] w-[25px]"
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
                <Column className="flex flex-col justify-start sm:mt-[37px] md:mt-[48px] mt-[70px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Nine"
                    />
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
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
                  <List
                    className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] sm:mt-[26px] md:mt-[33px] mt-[49px] sm:w-[100%] w-[84%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_avatar.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Ten"
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
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_avatar_48X48.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Eleven"
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
                      src="images/img_avatar.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Twelve"
                    />
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
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
                            alt="forward One"
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
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[26px] md:mt-[33px] mt-[49px] sm:mx-[0] pb-[3px] pr-[3px] sm:px-[0] sm:w-[100%] w-[84%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Thirteen"
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
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                    <Img
                      src="images/img_avatar.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Fourteen"
                    />
                    <Img
                      src="images/img_signal.svg"
                      className="max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[37%]"
                      alt="signal"
                    />
                  </Row>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[23px] md:mt-[30px] mt-[45px] w-[100%]">
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

export default DirectMessagePage;
