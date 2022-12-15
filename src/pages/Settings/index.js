import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  Text,
  Grid,
  Input,
  Line,
  Stack,
} from "components";
import Sidebar from "components/Sidebar";

const SettingsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[860px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Sidebar className="md:hidden sm:hidden w-[20%]" />
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
              <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                Account Informations
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[34px] md:mt-[44px] mt-[64px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                <Img
                  src="images/img_avatar.png"
                  className="h-[128px] sm:h-[69px] md:h-[89px] max-w-[100%] rounded-radius36 w-[128px] sm:w-[68px] md:w-[88px]"
                  alt="Avatar"
                />
                <Column className="flex flex-col md:ml-[20px] ml-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                  <Text className="text-gray_500 w-[auto]" as="h4" variant="h4">
                    Profile Picture
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]">
                    <Button
                      className="cursor-pointer font-bold font-inter min-w-[48%] text-[14px] text-center text-white_A700 w-[max-content]"
                      shape="CircleBorder29"
                      size="xl"
                      variant="FillLightblue200"
                    >
                      Replace
                    </Button>
                    <Button
                      className="flex items-center justify-center min-w-[48%] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_trash_18X18.svg"
                          className="mr-[7px] sm:mr-[3px] md:mr-[4px] text-center"
                          alt="trash"
                        />
                      }
                      shape="RoundedBorder12"
                      size="xl"
                      variant="OutlineGray50066"
                    >
                      <div className="bg-transparent cursor-pointer font-bold font-sfprodisplay text-[14px] text-red_A200">
                        Delete
                      </div>
                    </Button>
                  </Row>
                </Column>
              </Row>
              <Text
                className="sm:mt-[33px] md:mt-[42px] mt-[62px] text-gray_500 w-[auto]"
                as="h4"
                variant="h4"
              >
                Basic Information
              </Text>
              <Grid className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[19px] md:mt-[24px] mt-[36px] w-[100%]">
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    name
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                    name="Group1445"
                    placeholder="Anne Carry"
                    shape="RoundedBorder8"
                  ></Input>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    username
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="flex md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                    name="Group1444"
                    placeholder="annecarry"
                    suffix={
                      <Img
                        src="images/img_television.svg"
                        className="ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="television"
                      />
                    }
                    shape="RoundedBorder8"
                  ></Input>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Email
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                    name="email"
                    placeholder="anne.carry@mail.com"
                    shape="RoundedBorder8"
                  ></Input>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    birthday
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="flex md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                    name="month"
                    placeholder="January 25, 1991"
                    suffix={
                      <Img
                        src="images/img_checkmark_18X18.svg"
                        className="ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder8"
                  ></Input>
                </Column>
              </Grid>
              <Line className="bg-gray_500_6c h-[1px] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[22px] md:mt-[29px] mt-[43px] w-[100%]">
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Country
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="flex md:mt-[9px] mt-[14px] sm:mt-[7px] sm:mx-[0] sm:w-[100%] w-[91%]"
                    name="Group1440"
                    placeholder="United States"
                    suffix={
                      <Img
                        src="images/img_checkmark_18X18.svg"
                        className="ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder8"
                    size="xl"
                  ></Input>
                </Column>
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    state
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="flex md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                    name="Group1439"
                    placeholder="California"
                    suffix={
                      <Img
                        src="images/img_checkmark_18X18.svg"
                        className="ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder8"
                    size="xl"
                  ></Input>
                </Column>
              </Row>
              <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  City
                </Text>
                <Input
                  className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                  wrapClassName="flex md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                  name="Group1441"
                  placeholder="San Francisco"
                  suffix={
                    <Img
                      src="images/img_checkmark_18X18.svg"
                      className="ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder8"
                  size="xl"
                ></Input>
              </Column>
              <Button
                className="cursor-pointer font-bold min-w-[29%] sm:mt-[34px] md:mt-[44px] mt-[64px] text-[14px] text-center text-white_A700 w-[max-content]"
                shape="CircleBorder29"
                size="xl"
                variant="FillGreen400"
              >
                Save Changes
              </Button>
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[515px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] md:pl-[3px] pl-[5px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[1%]"></div>
            <Column className="bg-gray_900 flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[98%]">
              <Stack className="h-[48px] sm:ml-[159px] md:ml-[205px] ml-[299px] sm:mt-[2px] md:mt-[3px] mt-[5px] relative w-[28%]">
                <Img
                  src="images/img_group1436.png"
                  className="absolute h-[48px] max-w-[100%] right-[0] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                  alt="Image"
                />
                <Column className="absolute bg-light_blue_200 flex flex-col sm:h-[26px] md:h-[34px] h-[48px] items-center justify-start left-[0] px-[13px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    1
                  </Text>
                </Column>
                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center justify-between w-[100%]">
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
                    className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                    alt="Avatar One"
                  />
                </Row>
              </Stack>
              <Column className="flex flex-col justify-start sm:mb-[153px] md:mb-[198px] mb-[288px] md:ml-[3px] ml-[5px] md:mr-[140px] mr-[204px] sm:mt-[27px] md:mt-[35px] mt-[51px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                  Settings
                </Text>
                <Column className="flex flex-col font-sfprodisplay justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                    <Button
                      className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_user_48X48.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="user One"
                      />
                    </Button>
                    <Text
                      className="md:ml-[10px] ml-[15px] sm:ml-[7px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      My Account
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Button
                      className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_notification.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="notification"
                      />
                    </Button>
                    <Text
                      className="md:ml-[10px] ml-[15px] sm:ml-[7px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Notifications
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                    <Button
                      className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_clock_48X48.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="clock"
                      />
                    </Button>
                    <Text
                      className="md:ml-[10px] ml-[15px] sm:ml-[7px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Activity History
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                    <Button
                      className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_alarm_48X48.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="alarm"
                      />
                    </Button>
                    <Text
                      className="md:ml-[10px] ml-[15px] sm:ml-[7px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Billing and Payment
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Button
                      className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_lock.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="lock"
                      />
                    </Button>
                    <Text
                      className="md:ml-[10px] ml-[15px] sm:ml-[7px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Security & Privacy
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                    <Button
                      className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_settings_1.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="settings Three"
                      />
                    </Button>
                    <Text
                      className="md:ml-[10px] ml-[15px] sm:ml-[7px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Help
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default SettingsPage;
