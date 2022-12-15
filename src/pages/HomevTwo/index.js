import React from "react";

import {
  Row,
  Column,
  Img,
  Button,
  Input,
  Text,
  Stack,
  List,
  Line,
} from "components";
import Sidebar from "components/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const HomevTwoPage = () => {
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
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 sm:w-[100%] w-[93%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_avatar.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar"
                  />
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="md:ml-[3px] ml-[5px] sm:mx-[0] sm:w-[100%] w-[87%]"
                    name="language"
                    placeholder="What are you thinking? "
                    shape="RoundedBorder19"
                    size="lg"
                  ></Input>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[3px] md:mt-[4px] mt-[7px] sm:px-[0] w-[100%]">
                  <Button
                    className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center mt-[2px] sm:w-[14px] md:w-[19px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_camera_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="camera"
                    />
                  </Button>
                  <Button
                    className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[2px] sm:w-[14px] md:w-[19px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="videocamera"
                    />
                  </Button>
                  <Button
                    className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[2px] sm:w-[14px] md:w-[19px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_plus_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="plus"
                    />
                  </Button>
                  <Stack className="bg-indigo_A200 h-[30px] ml-[141px] sm:ml-[75px] md:ml-[97px] sm:p-[3px] md:p-[4px] p-[7px] relative rounded-radius4 w-[24%]">
                    <Text
                      className="absolute font-medium h-[max-content] inset-y-[0] left-[13%] my-[auto] text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Share
                    </Text>
                    <Img
                      src="images/img_arrowright_1.svg"
                      className="absolute h-[14px] inset-y-[0] max-w-[100%] my-[auto] right-[13%] w-[14px] sm:w-[7px] md:w-[9px]"
                      alt="arrowright One"
                    />
                  </Stack>
                </Row>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-end sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 sm:w-[100%] w-[93%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[15px] mt-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                    <Img
                      src="images/img_image.png"
                      className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                      alt="Image"
                    />
                    <Column className="flex flex-col sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[64%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Edward Ford
                      </Text>
                      <Text
                        className="font-normal mb-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-gray_500 w-[auto]"
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
                <Column className="flex flex-col items-center justify-start sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                  <Text
                    className="font-medium text-gray_500 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Tourism Is Back In Full Swing In Cancun Mexico
                  </Text>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] rounded-radius8 w-[100%]"
                    style={{ backgroundImage: "url('images/img_video.png')" }}
                  >
                    <Column className="bg-gray_900_66 flex flex-col items-center justify-start sm:p-[15px] md:p-[48px] p-[71px] rounded-radius8 w-[100%]">
                      <Button
                        className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center sm:w-[20px] md:w-[26px] w-[38px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbFillWhiteA70099"
                      >
                        <Img
                          src="images/img_play.svg"
                          className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                          alt="play"
                        />
                      </Button>
                    </Column>
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[48%]">
                      <Img
                        src="images/img_favorite.svg"
                        className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] my-[2px] w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="favorite"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] my-[1px] text-gray_900"
                        as="h5"
                        variant="h5"
                      >
                        326
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[46%]">
                      <Img
                        src="images/img_location.svg"
                        className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] my-[3px] w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="location"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] my-[2px] text-gray_900"
                        as="h5"
                        variant="h5"
                      >
                        148
                      </Text>
                    </Row>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:p-[4px] p-[7px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[24%]">
                    <Text
                      className="flex-grow font-medium mb-[1px] ml-[2px] text-gray_900"
                      as="h5"
                      variant="h5"
                    >
                      Share
                    </Text>
                    <Img
                      src="images/img_reply.svg"
                      className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] mx-[2px] my-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                      alt="reply"
                    />
                  </Row>
                </Row>
                <Row className="border-2 border-gray_500_33 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] p-[11px] md:p-[7px] sm:px-[0] sm:py-[5px] rounded-radius4 sm:w-[100%] w-[88%]">
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="flex ml-[4px] sm:mx-[0] sm:w-[100%] w-[88%]"
                    name="FrameFive"
                    placeholder="Write a comment…"
                    suffix={
                      <Img
                        src="images/img_user_14X14.svg"
                        className="ml-[35px] mr-[5px] sm:mr-[2px] sm:ml-[18px] md:mr-[3px] md:ml-[24px] my-[auto]"
                        alt="user"
                      />
                    }
                    size="sm"
                  ></Input>
                  <Img
                    src="images/img_send.svg"
                    className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                    alt="send"
                  />
                </Row>
                <List
                  className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:w-[100%] w-[87%]"
                  orientation="vertical"
                >
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                        <Img
                          src="images/img_avatar_28X28.png"
                          className="flex-shrink-0 sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar One"
                        />
                        <Text
                          className="flex-grow font-medium mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                      </Row>
                      <Text
                        className="font-normal not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        20min ago
                      </Text>
                    </Row>
                    <Text
                      className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-gray_500 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Awesome Edward, remeber that five tips for low cost
                      holidays I sent you?
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                      <Img
                        src="images/img_favorite_14X14.svg"
                        className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="favorite One"
                      />
                      <Img
                        src="images/img_location.svg"
                        className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="location One"
                      />
                    </Row>
                  </Column>
                  <Line className="self-center w-[100%] sm:py-[5px] sm:px-[0] md:p-[7px] border-gray_500_33 border-2 border-solid items-center flex-row flex p-[11px] rounded-radius4" />
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                        <Img
                          src="images/img_avatar_28X28.png"
                          className="flex-shrink-0 sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar Two"
                        />
                        <Text
                          className="flex-grow font-medium mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                      </Row>
                      <Text
                        className="font-normal not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        20min ago
                      </Text>
                    </Row>
                    <Text
                      className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Awesome Edward, remeber that five tips for low cost
                      holidays I sent you?
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                      <Img
                        src="images/img_favorite_14X14.svg"
                        className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="favorite Two"
                      />
                      <Img
                        src="images/img_location.svg"
                        className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="location Two"
                      />
                    </Row>
                  </Column>
                </List>
              </Column>
            </Column>
            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Img
                      src="images/img_image_6.png"
                      className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                      alt="Image One"
                    />
                    <Column className="flex flex-col sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Katherine Cole
                      </Text>
                      <Text
                        className="font-normal mb-[1px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
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
                    alt="overflowmenu One"
                  />
                </Row>
                <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_image_150X290.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Image Two"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <Text
                      className="leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-gray_900 sm:w-[100%] w-[97%]"
                      as="h4"
                      variant="h4"
                    >
                      The Best Fashion Instagrams of the Week: Céline Dion,
                      Lizzo, and More
                    </Text>
                    <Text
                      className="font-medium leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_500 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      If you are looking for a break from the cold, take a cue
                      from Lizzo: This week, the singer headed to Disneyland in
                      warm and sunny California.
                    </Text>
                  </Column>
                  <Text
                    className="font-bold mt-[12px] sm:mt-[6px] md:mt-[8px] text-indigo_A200 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Read More
                  </Text>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[23%]">
                    <Img
                      src="images/img_favorite.svg"
                      className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] my-[2px] w-[14px] sm:w-[7px] md:w-[9px]"
                      alt="favorite Three"
                    />
                    <Text
                      className="flex-grow font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] my-[1px] text-gray_900"
                      as="h5"
                      variant="h5"
                    >
                      326
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[10px] md:ml-[6px] sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[22%]">
                    <Img
                      src="images/img_location.svg"
                      className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] my-[3px] w-[14px] sm:w-[7px] md:w-[9px]"
                      alt="location Three"
                    />
                    <Text
                      className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] my-[2px] text-gray_900"
                      as="h5"
                      variant="h5"
                    >
                      148
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[52px] ml-[77px] sm:mx-[0] md:p-[4px] p-[7px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[26%]">
                    <Text
                      className="flex-grow font-medium mb-[1px] ml-[2px] text-gray_900"
                      as="h5"
                      variant="h5"
                    >
                      Share
                    </Text>
                    <Img
                      src="images/img_reply.svg"
                      className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] mx-[2px] my-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                      alt="reply One"
                    />
                  </Row>
                </Row>
              </Column>
              <Column className="bg-white_A700 flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] md:p-[15px] sm:p-[15px] p-[23px] rounded-radius12 w-[100%]">
                <Column className="flex flex-col justify-start md:ml-[4px] ml-[7px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                      <Img
                        src="images/img_image_48X48.png"
                        className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                        alt="Image Three"
                      />
                      <Column className="flex flex-col sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[67%]">
                        <Text
                          className="font-bold text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Dustin Houston
                        </Text>
                        <Text
                          className="font-normal mb-[1px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
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
                      alt="overflowmenu Two"
                    />
                  </Row>
                  <Text
                    className="font-medium sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_500 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Whether its a driving tour 😂
                  </Text>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Img
                    src="images/img_photo1.png"
                    className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[69%]"
                    alt="image Four"
                  />
                  <Column className="flex flex-col items-center ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                    <Img
                      src="images/img_photo2.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="image Five"
                    />
                    <Row
                      className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_photo4.png')",
                      }}
                    >
                      <Img
                        src="images/img_settings_14X14.svg"
                        className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] sm:my-[4px] md:my-[5px] my-[8px] w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="settings Two"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] sm:my-[4px] md:my-[5px] my-[8px] text-white_A700"
                        as="h5"
                        variant="h5"
                      >
                        17
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mb-[3px] md:mb-[4px] mb-[7px] md:ml-[4px] ml-[7px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[48%]">
                      <Img
                        src="images/img_favorite.svg"
                        className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] ml-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="favorite Four"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] text-gray_900"
                        as="h5"
                        variant="h5"
                      >
                        326
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[46%]">
                      <Img
                        src="images/img_location.svg"
                        className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="location Four"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_900"
                        as="h5"
                        variant="h5"
                      >
                        148
                      </Text>
                    </Row>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[26%]">
                    <Text
                      className="flex-grow font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] text-gray_900"
                      as="h5"
                      variant="h5"
                    >
                      Share
                    </Text>
                    <Img
                      src="images/img_reply.svg"
                      className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] ml-[1px] sm:mr-[3px] md:mr-[4px] mr-[6px] w-[14px] sm:w-[7px] md:w-[9px]"
                      alt="reply Two"
                    />
                  </Row>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center justify-between max-w-[420px] sm:ml-[15px] md:ml-[20px] ml-[auto] mr-[auto] overflow-auto sm:pl-[15px] md:pl-[3px] pl-[5px] sm:pr-[15px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
          <Stack className="h-[1024px] relative w-[100%]">
            <Column className="absolute bg-gray_900 flex flex-col justify-end left-[0] sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[93%]">
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
                  alt="Avatar Three"
                />
              </Row>
              <Column className="flex flex-col font-inter items-center justify-start md:ml-[10px] ml-[15px] md:mr-[13px] mr-[20px] sm:mt-[120px] md:mt-[156px] mt-[227px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                <Column className="flex flex-col justify-start pb-[1px] w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
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
                        alt="Avatar Four"
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
                        src="images/img_avatar_5.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Five"
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
                        src="images/img_avatar_4.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Six"
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
                  </List>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                    <Text
                      className="flex-grow font-bold mt-[2px] text-gray_500 tracking-ls1 uppercase"
                      as="h6"
                      variant="h6"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_arrowright_2.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] ml-[4px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="arrowright Two"
                    />
                  </Row>
                </Column>
                <Column className="flex flex-col sm:h-[163px] md:h-[210px] h-[305px] justify-start sm:mt-[35px] md:mt-[45px] mt-[66px] w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Trend Topics
                  </Text>
                  <List
                    className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay sm:h-[21px] md:h-[27px] h-[38px] text-[14px] text-center text-white_A700 sm:w-[20px] md:w-[26px] w-[38px]"
                        shape="RoundedBorder12"
                        size="lg"
                        variant="FillGreen400"
                      >
                        #1
                      </Button>
                      <Text
                        className="font-inter font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[125px] sm:ml-[66px] md:ml-[86px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
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
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay sm:h-[21px] md:h-[27px] h-[38px] text-[14px] text-center text-white_A700 sm:w-[20px] md:w-[26px] w-[38px]"
                        shape="RoundedBorder12"
                        size="lg"
                        variant="FillGreen400"
                      >
                        #2
                      </Button>
                      <Text
                        className="font-inter font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[125px] sm:ml-[66px] md:ml-[86px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
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
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay sm:h-[21px] md:h-[27px] h-[38px] text-[14px] text-center text-white_A700 sm:w-[20px] md:w-[26px] w-[38px]"
                        shape="RoundedBorder12"
                        size="lg"
                        variant="FillGreen400"
                      >
                        #3
                      </Button>
                      <Text
                        className="font-inter font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[125px] sm:ml-[66px] md:ml-[86px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
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
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay sm:h-[21px] md:h-[27px] h-[38px] text-[14px] text-center text-white_A700 sm:w-[20px] md:w-[26px] w-[38px]"
                        shape="RoundedBorder12"
                        size="lg"
                        variant="FillGreen400"
                      >
                        #4
                      </Button>
                      <Text
                        className="font-inter font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[125px] sm:ml-[66px] md:ml-[86px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillWhiteA70033"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="checkmark Three"
                        />
                      </Button>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Column>
            <Column className="absolute flex flex-col font-inter justify-start sm:mx-[0] sm:px-[0] right-[0] top-[14%] sm:w-[100%] w-[90%]">
              <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                Featured Stories
              </Text>
              <List
                className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-6 min-h-[auto] sm:mt-[23px] md:mt-[30px] mt-[44px] w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-gray_100 border-solid h-[48px] p-[4px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image.png"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius9 sm:w-[21px] md:w-[27px] w-[40px]"
                      alt="Image Six"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-gray_100 border-solid h-[48px] p-[4px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_54X54.png"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius9 sm:w-[21px] md:w-[27px] w-[40px]"
                      alt="Image Seven"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-gray_100 border-solid h-[48px] p-[4px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_2.png"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius9 sm:w-[21px] md:w-[27px] w-[40px]"
                      alt="Image Eight"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-gray_100 border-solid h-[48px] p-[4px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_54X44.png"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius9 sm:w-[21px] md:w-[27px] w-[40px]"
                      alt="Image Nine"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-gray_100 border-solid h-[48px] p-[4px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_3.png"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius9 sm:w-[21px] md:w-[27px] w-[40px]"
                      alt="Image Ten"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-gray_100 border-solid h-[48px] p-[4px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_40X40.png"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius9 sm:w-[21px] md:w-[27px] w-[40px]"
                      alt="Image Eleven"
                    />
                  </Stack>
                </div>
              </List>
            </Column>
          </Stack>
        </Row>
      </Row>
    </>
  );
};

export default HomevTwoPage;
