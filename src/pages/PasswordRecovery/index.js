import React from "react";

import { Stack, Column, Text, Button, Row, Img, Input } from "components";

const PasswordRecoveryPage = () => {
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
            Remember your password?
          </Text>
          <Button
            className="cursor-pointer font-bold mb-[130px] sm:mb-[69px] md:mb-[89px] min-w-[100%] sm:mt-[15px] md:mt-[20px] mt-[30px] text-[14px] text-center text-white_A700 w-[max-content]"
            shape="CircleBorder29"
            size="xl"
            variant="FillIndigoA200"
          >
            Lognin
          </Button>
        </Column>
        <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[655px] sm:pl-[15px] sm:pr-[15px] right-[0] w-[100%]">
          <div className="bg-white_A700_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[1%]"></div>
          <Column className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[61px] p-[90px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[98%]">
            <Img
              src="images/img_question.svg"
              className="sm:h-[22px] md:h-[29px] h-[41px] max-w-[100%] sm:ml-[18px] md:ml-[24px] ml-[35px] sm:w-[21px] md:w-[28px] w-[41px]"
              alt="question"
            />
            <Column className="flex flex-col justify-start md:ml-[24px] ml-[35px] sm:mt-[35px] md:mt-[45px] mt-[66px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
              <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                Password Recovery
              </Text>
              <Text
                className="font-medium mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                as="h5"
                variant="h5"
              >
                Enter your email to recover your password
              </Text>
            </Column>
            <Column className="flex flex-col justify-start md:ml-[24px] ml-[35px] sm:mt-[33px] md:mt-[43px] mt-[63px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
              <Text
                className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                as="h6"
                variant="h6"
              >
                Email
              </Text>
              <Input
                className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                wrapClassName="flex md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                type="email"
                name="email"
                placeholder="anne.carry@mail.com"
                suffix={
                  <Img
                    src="images/img_television.svg"
                    className="ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                    alt="television"
                  />
                }
                shape="RoundedBorder8"
                variant="OutlineGray5006c"
              ></Input>
            </Column>
            <Button
              className="cursor-pointer font-bold sm:mb-[249px] md:mb-[322px] mb-[468px] min-w-[77%] sm:ml-[18px] md:ml-[24px] ml-[35px] sm:mt-[10px] md:mt-[13px] mt-[20px] text-[14px] text-center text-white_A700 w-[max-content]"
              shape="CircleBorder29"
              size="xl"
              variant="FillIndigoA200"
            >
              Send Email
            </Button>
          </Column>
        </Row>
      </Stack>
    </>
  );
};

export default PasswordRecoveryPage;
