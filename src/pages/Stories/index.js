import React from "react";

import { Row, Column, Img, Button, Line, Input, Text, Grid } from "components";
import Sidebar from "components/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const StoriesPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start mx-[auto] w-[100%]">
        <Sidebar className="md:hidden sm:hidden w-[12%]" />
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1270px] sm:ml-[2px] md:ml-[3px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Line className="bg-white_A700_66 h-[128px] sm:h-[69px] md:h-[89px] sm:mb-[281px] md:mb-[363px] mb-[528px] sm:mt-[238px] md:mt-[308px] mt-[448px] rounded-radius25 w-[5px]" />
          <Column className="bg-gray_900 flex flex-col justify-end sm:mx-[0] sm:pt-[15px] md:pt-[27px] pt-[40px] sm:px-[15px] md:px-[27px] px-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[99%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[24px] ml-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <Row className="bg-white_A700_33 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:p-[4px] md:p-[6px] p-[9px] rounded-radius12 sm:w-[100%] w-[67%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                  wrapClassName="flex ml-[2px] mt-[4px] sm:mx-[0] sm:w-[100%] w-[87%]"
                  name="FrameSix"
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
                  size="mdSrc"
                  variant="srcFillGray800"
                ></Input>
                <Text
                  className="font-bold sm:ml-[13px] md:ml-[17px] ml-[25px] text-gray_500 tracking-ls1 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Filters
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
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
                  alt="Avatar"
                />
              </Row>
            </Row>
            <Text
              className="sm:ml-[18px] md:ml-[24px] ml-[35px] sm:mt-[33px] md:mt-[42px] mt-[62px] text-white_A700 w-[auto]"
              as="h1"
              variant="h1"
            >
              Stories
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[24px] ml-[35px] mr-[auto] sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[45%]">
              <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                <Text
                  className="font-bold text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  For You
                </Text>
                <Img
                  src="images/img_dot.svg"
                  className="max-w-[100%] ml-[1px] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:w-[100%] w-[65%]"
                  alt="Dot"
                />
              </Column>
              <Text
                className="font-bold mt-[2px] text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Following
              </Text>
              <Text
                className="font-bold sm:ml-[12px] md:ml-[16px] ml-[24px] mt-[2px] text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Popular
              </Text>
              <Text
                className="font-bold sm:ml-[12px] md:ml-[16px] ml-[24px] mt-[1px] text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Featured
              </Text>
              <Text
                className="font-bold sm:ml-[13px] md:ml-[17px] ml-[26px] mt-[1px] text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Live
              </Text>
              <Text
                className="font-bold sm:ml-[13px] md:ml-[17px] ml-[26px] mt-[2px] text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Continue Watching
              </Text>
            </Row>
            <Grid className="font-sfprodisplay sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:ml-[18px] md:ml-[24px] ml-[35px] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:w-[100%] w-[98%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{ backgroundImage: "url('images/img_photo4.png')" }}
              >
                <Column className="bg-gradient1  flex flex-col items-center justify-end md:p-[28px] p-[42px] sm:px-[15px] sm:py-[22px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image.png"
                    className="sm:h-[37px] md:h-[47px] h-[68px] max-w-[100%] sm:mt-[102px] md:mt-[132px] mt-[192px] rounded-radius24 sm:w-[36px] md:w-[46px] w-[68px]"
                    alt="Image"
                  />
                  <Text
                    className="md:mt-[12px] mt-[18px] sm:mt-[9px] text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{ backgroundImage: "url('images/img_cardmobile.png')" }}
              >
                <Column className="bg-gradient1  flex flex-col items-center justify-end md:p-[28px] p-[42px] sm:px-[15px] sm:py-[22px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_68X68.png"
                    className="sm:h-[37px] md:h-[47px] h-[68px] max-w-[100%] sm:mt-[102px] md:mt-[132px] mt-[192px] rounded-radius24 sm:w-[36px] md:w-[46px] w-[68px]"
                    alt="Image One"
                  />
                  <Text
                    className="md:mt-[12px] mt-[18px] sm:mt-[9px] text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_380X255.png')",
                }}
              >
                <Column className="bg-gradient1  flex flex-col items-center justify-end md:p-[28px] p-[42px] sm:px-[15px] sm:py-[22px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_7.png"
                    className="sm:h-[37px] md:h-[47px] h-[68px] max-w-[100%] sm:mt-[102px] md:mt-[132px] mt-[192px] rounded-radius24 sm:w-[36px] md:w-[46px] w-[68px]"
                    alt="Image Two"
                  />
                  <Text
                    className="md:mt-[12px] mt-[18px] sm:mt-[9px] text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_1.png')",
                }}
              >
                <Column className="bg-gradient1  flex flex-col items-center justify-end md:p-[28px] p-[42px] sm:px-[15px] sm:py-[22px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_8.png"
                    className="sm:h-[37px] md:h-[47px] h-[68px] max-w-[100%] sm:mt-[102px] md:mt-[132px] mt-[192px] rounded-radius24 sm:w-[36px] md:w-[46px] w-[68px]"
                    alt="Image Three"
                  />
                  <Text
                    className="md:mt-[12px] mt-[18px] sm:mt-[9px] text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_2.png')",
                }}
              >
                <Column className="bg-gradient1  flex flex-col items-center justify-end md:p-[27px] p-[40px] sm:px-[15px] sm:py-[21px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_9.png"
                    className="sm:h-[37px] md:h-[47px] h-[68px] max-w-[100%] sm:mt-[103px] md:mt-[134px] mt-[195px] rounded-radius24 sm:w-[36px] md:w-[46px] w-[68px]"
                    alt="Image Four"
                  />
                  <Text
                    className="md:mt-[10px] mt-[15px] sm:mt-[7px] text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_3.png')",
                }}
              >
                <Column className="bg-gradient1  flex flex-col items-center justify-end md:p-[27px] p-[40px] sm:px-[15px] sm:py-[21px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_10.png"
                    className="sm:h-[37px] md:h-[47px] h-[68px] max-w-[100%] sm:mt-[103px] md:mt-[134px] mt-[195px] rounded-radius24 sm:w-[36px] md:w-[46px] w-[68px]"
                    alt="Image Five"
                  />
                  <Text
                    className="md:mt-[10px] mt-[15px] sm:mt-[7px] text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_4.png')",
                }}
              >
                <Column className="bg-gradient1  flex flex-col items-center justify-end md:p-[27px] p-[40px] sm:px-[15px] sm:py-[21px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_11.png"
                    className="sm:h-[37px] md:h-[47px] h-[68px] max-w-[100%] sm:mt-[103px] md:mt-[134px] mt-[195px] rounded-radius24 sm:w-[36px] md:w-[46px] w-[68px]"
                    alt="Image Six"
                  />
                  <Text
                    className="md:mt-[10px] mt-[15px] sm:mt-[7px] text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_5.png')",
                }}
              >
                <Column className="bg-gradient1  flex flex-col items-center justify-end md:p-[27px] p-[40px] sm:px-[15px] sm:py-[21px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_12.png"
                    className="sm:h-[37px] md:h-[47px] h-[68px] max-w-[100%] sm:mt-[103px] md:mt-[134px] mt-[195px] rounded-radius24 sm:w-[36px] md:w-[46px] w-[68px]"
                    alt="Image Seven"
                  />
                  <Text
                    className="md:mt-[10px] mt-[15px] sm:mt-[7px] text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default StoriesPage;
