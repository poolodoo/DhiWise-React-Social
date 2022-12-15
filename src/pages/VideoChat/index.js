import React from "react";

import {
  Row,
  Column,
  Img,
  Button,
  Stack,
  Line,
  Text,
  List,
  Input,
} from "components";
import Sidebar from "components/Sidebar";

const VideoChatPage = () => {
  return (
    <>
      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center mx-[auto] w-[100%]">
        <Sidebar className="md:hidden sm:hidden w-[12%]" />
        <Stack className="h-[1024px] max-w-[1270px] sm:ml-[2px] md:ml-[3px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
            <Line className="bg-white_A700_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius25 w-[5px]" />
            <Column
              className="bg-cover bg-no-repeat flex flex-col sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[99%]"
              style={{ backgroundImage: "url('images/img_group1428.png')" }}
            >
              <Img
                src="images/img_image_199X160.png"
                className="max-w-[100%] sm:ml-[2px] md:ml-[3px] ml-[5px] rounded-radius12 w-[20%]"
                alt="Image"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[155px] ml-[226px] md:mr-[206px] mr-[300px] sm:mt-[354px] md:mt-[458px] mt-[666px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                <Button
                  className="flex sm:h-[42px] md:h-[54px] h-[78px] items-center justify-center sm:w-[41px] md:w-[53px] w-[78px]"
                  shape="icbRoundedBorder24"
                  size="xlIcn"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_iconmicoff.svg"
                    className="h-[36px] sm:h-[20px] md:h-[25px] flex items-center justify-center"
                    alt="IconMicOff"
                  />
                </Button>
                <Button
                  className="flex sm:h-[42px] md:h-[54px] h-[78px] items-center justify-center sm:ml-[15px] md:ml-[20px] ml-[30px] sm:w-[41px] md:w-[53px] w-[78px]"
                  shape="icbRoundedBorder24"
                  size="xlIcn"
                  variant="icbFillWhiteA70033"
                >
                  <Img
                    src="images/img_minimize_78X78.svg"
                    className="h-[36px] sm:h-[20px] md:h-[25px] flex items-center justify-center"
                    alt="minimize"
                  />
                </Button>
                <Button
                  className="flex sm:h-[42px] md:h-[54px] h-[78px] items-center justify-center sm:ml-[15px] md:ml-[20px] ml-[30px] sm:w-[41px] md:w-[53px] w-[78px]"
                  shape="icbRoundedBorder24"
                  size="xlIcn"
                  variant="icbFillRedA200"
                >
                  <Img
                    src="images/img_alarm.svg"
                    className="h-[36px] sm:h-[20px] md:h-[25px] flex items-center justify-center"
                    alt="alarm"
                  />
                </Button>
              </Row>
            </Column>
          </Row>
          <Column className="absolute bg-white_A700 flex flex-col items-end justify-end sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] right-[0] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[34%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
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
                alt="Avatar"
              />
            </Row>
            <Column className="flex flex-col justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                  <Stack
                    className="bg-cover bg-no-repeat h-[58px] sm:pb-[15px] md:pb-[28px] pb-[42px] sm:pl-[15px] md:pl-[28px] pl-[42px] relative rounded-radius12 sm:w-[30px] md:w-[39px] w-[58px]"
                    style={{ backgroundImage: "url('images/img_avatar.png')" }}
                  >
                    <Img
                      src="images/img_settings_15X15.svg"
                      className="absolute h-[15px] max-w-[100%] md:w-[10px] w-[15px] sm:w-[7px]"
                      alt="settings Two"
                    />
                  </Stack>
                  <Column className="flex flex-col justify-start mb-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Marriet Miles
                    </Text>
                    <Text
                      className="font-medium mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Ongoing Call…
                    </Text>
                  </Column>
                </Row>
                <Img
                  src="images/img_eye.svg"
                  className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:w-[13px] md:w-[17px] w-[25px]"
                  alt="eye"
                />
              </Row>
              <Column className="flex flex-col font-inter justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_48X48.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar One"
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
                      alt="Avatar Two"
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
                      alt="Avatar Three"
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
                    alt="Avatar Four"
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
                    alt="Avatar Five"
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
                    alt="Avatar Six"
                  />
                  <div className="bg-gray_500_cc sm:h-[4px] md:h-[5px] h-[7px] md:ml-[10px] ml-[15px] sm:ml-[7px] md:my-[10px] my-[15px] sm:my-[7px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[7px]"></div>
                  <div className="bg-gray_500_99 sm:h-[4px] md:h-[5px] h-[7px] mb-[12px] sm:mb-[6px] md:mb-[8px] sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[10px] md:mt-[13px] mt-[19px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[7px]"></div>
                  <div className="bg-gray_500_33 sm:h-[4px] md:h-[5px] h-[7px] sm:mb-[4px] md:mb-[6px] mb-[9px] sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[11px] md:mt-[15px] mt-[22px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[7px]"></div>
                </Row>
              </Column>
              <Input
                className="font-inter font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                wrapClassName="flex md:mt-[37px] mt-[55px] sm:mt-[29px] w-[100%]"
                name="WriteBox"
                placeholder="Start typing…"
                prefix={
                  <div className="w-[38px] h-[38px] ml-[9px] mr-[10px] sm:mr-[5px] sm:ml-[4px] sm:h-[21px] sm:w-[20px] md:h-[27px] md:w-[26px] md:mx-[6px] bg-gray_500_33 rounded-radius12 flex justify-center items-center">
                    <Img
                      src="images/img_plus_38X38.svg"
                      className="my-[auto]"
                      alt="plus"
                    />
                  </div>
                }
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
            </Column>
          </Column>
        </Stack>
      </Row>
    </>
  );
};

export default VideoChatPage;
