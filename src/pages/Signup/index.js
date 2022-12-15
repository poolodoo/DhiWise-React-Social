import React from "react";

import { Stack, Column, Text, Button, Row, Img, Input } from "components";

const SignupPage = () => {
  return (
    <>
      <Stack className="bg-gray_100 font-inter h-[1024px] mx-[auto] relative w-[100%]">
        <Column
          className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-center left-[0] max-w-[830px] sm:p-[15px] md:p-[209px] p-[305px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
          style={{ backgroundImage: "url('images/img_group1513.png')" }}
        >
          <Text
            className="mt-[133px] sm:mt-[70px] md:mt-[91px] text-white_A700 w-[auto]"
            as="h1"
            variant="h1"
          >
            Hello!
          </Text>
          <Text
            className="font-medium md:mt-[11px] mt-[17px] sm:mt-[9px] text-white_A700 w-[auto]"
            as="h5"
            variant="h5"
          >
            Already have an account?
          </Text>
          <Button
            className="cursor-pointer font-bold mb-[130px] sm:mb-[69px] md:mb-[89px] min-w-[100%] sm:mt-[15px] md:mt-[20px] mt-[30px] text-[14px] text-center text-white_A700 w-[max-content]"
            shape="CircleBorder29"
            size="xl"
            variant="FillIndigoA200"
          >
            Login
          </Button>
        </Column>
        <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[655px] sm:pl-[15px] sm:pr-[15px] right-[0] w-[100%]">
          <div className="bg-white_A700_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[1%]"></div>
          <Column className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[33px] p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[98%]">
            <Img
              src="images/img_question.svg"
              className="sm:h-[22px] md:h-[29px] h-[41px] max-w-[100%] sm:ml-[40px] md:ml-[52px] ml-[76px] sm:mt-[27px] md:mt-[35px] mt-[52px] sm:w-[21px] md:w-[28px] w-[41px]"
              alt="question"
            />
            <Column className="flex flex-col justify-start md:ml-[52px] ml-[77px] sm:mt-[28px] md:mt-[36px] mt-[53px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
              <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                Create an account
              </Text>
              <Text
                className="font-medium md:mt-[12px] mt-[18px] sm:mt-[9px] text-gray_500 w-[auto]"
                as="h5"
                variant="h5"
              >
                Sign up to continue{" "}
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start md:ml-[52px] ml-[77px] sm:mt-[31px] md:mt-[41px] mt-[60px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[65%]">
              <Column className="flex flex-col justify-start w-[100%]">
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
                  name="Group1405"
                  placeholder="Anne Carry"
                  shape="RoundedBorder8"
                  variant="OutlineGray5006c"
                ></Input>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  email
                </Text>
                <Input
                  className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                  wrapClassName="flex md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                  type="email"
                  name="email"
                  placeholder="anne.carry@mail.com"
                  suffix={
                    <Img
                      src="images/img_television_18X18.svg"
                      className="ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                      alt="television"
                    />
                  }
                  shape="RoundedBorder8"
                  variant="OutlineGray5006c"
                ></Input>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Password
                </Text>
                <Input
                  className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                  wrapClassName="flex md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                  type="password"
                  name="Group1403"
                  placeholder="Password@123"
                  suffix={
                    <Img
                      src="images/img_eye.svg"
                      className="ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                      alt="eye"
                    />
                  }
                  shape="RoundedBorder8"
                  variant="OutlineGray5006c"
                ></Input>
              </Column>
            </Column>
            <Button
              className="cursor-pointer font-bold min-w-[65%] sm:ml-[40px] md:ml-[52px] ml-[76px] sm:mt-[21px] md:mt-[27px] mt-[40px] text-[14px] text-center text-white_A700 w-[max-content]"
              shape="CircleBorder29"
              size="xl"
              variant="FillIndigoA200"
            >
              Create an account
            </Button>
            <Column className="flex flex-col justify-start md:ml-[52px] ml-[77px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
              <Text
                className="font-normal ml-[117px] sm:ml-[62px] md:ml-[80px] not-italic text-gray_500 w-[auto]"
                as="h6"
                variant="h6"
              >
                Or connect with socials
              </Text>
              <Column className="flex flex-col items-center justify-start sm:mt-[18px] md:mt-[23px] mt-[34px] w-[100%]">
                <Row className="bg-indigo_600 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:p-[13px] sm:p-[15px] p-[20px] rounded-radius29 w-[100%]">
                  <Img
                    src="images/img_facebook.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[35px] md:ml-[46px] ml-[67px] md:w-[12px] w-[18px] sm:w-[9px]"
                    alt="facebook"
                  />
                  <Text
                    className="flex-grow font-bold ml-[3px] sm:mr-[30px] md:mr-[39px] mr-[58px] text-white_A700"
                    as="h5"
                    variant="h5"
                  >
                    Connect with Facebook
                  </Text>
                </Row>
                <Button
                  className="flex items-center justify-center md:mt-[13px] mt-[20px] sm:mt-[10px] text-center w-[100%]"
                  leftIcon={
                    <Img
                      src="images/img_icon_apple_18X18.svg"
                      className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                      alt="Icon/Apple"
                    />
                  }
                  shape="CircleBorder29"
                  size="xl"
                  variant="FillGray900"
                >
                  <div className="bg-transparent cursor-pointer font-bold text-[14px] text-white_A700">
                    Connect with Apple
                  </div>
                </Button>
                <Button
                  className="flex items-center justify-center md:mt-[13px] mt-[20px] sm:mt-[10px] text-center w-[100%]"
                  leftIcon={
                    <Img
                      src="images/img_google.svg"
                      className="mr-[4px] text-center"
                      alt="google"
                    />
                  }
                  shape="CircleBorder29"
                  size="xl"
                  variant="OutlineGray50066"
                >
                  <div className="bg-transparent cursor-pointer font-bold text-[14px] text-gray_900">
                    Connect with Google+
                  </div>
                </Button>
              </Column>
            </Column>
          </Column>
        </Row>
      </Stack>
    </>
  );
};

export default SignupPage;
