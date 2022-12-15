import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  Input,
  Text,
  Grid,
  Stack,
  List,
} from "components";
import Sidebar from "components/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const SearchResultsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-inter items-center justify-end mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[990px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Sidebar className="md:hidden sm:hidden w-[17%]" />
            <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[13px] sm:p-[6px] md:p-[8px] rounded-radius12 w-[100%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                    wrapClassName="flex md:ml-[4px] ml-[7px] sm:mx-[0] sm:w-[100%] w-[84%]"
                    name="FrameTwo"
                    placeholder="Nass"
                    prefix={
                      <Img
                        src="images/img_search_18X18.svg"
                        className="cursor-pointer ml-[8px] mr-[15px] sm:mr-[7px] sm:ml-[4px] md:mr-[10px] md:ml-[5px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#1e1f20"
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
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                    <Text
                      className="font-bold font-inter sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_500 tracking-ls1 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Filters
                    </Text>
                    <Button
                      className="cursor-pointer font-bold font-sfprodisplay sm:h-[15px] md:h-[20px] h-[28px] md:ml-[11px] ml-[17px] sm:ml-[9px] text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]"
                      shape="RoundedBorder8"
                      size="md"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </Row>
                </Row>
                <Column className="flex flex-col justify-start sm:mt-[35px] md:mt-[46px] mt-[67px] w-[100%]">
                  <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                    People
                  </Text>
                  <Grid className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                    <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                        <Img
                          src="images/img_avatar.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Avatar"
                        />
                        <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                          <Text
                            className="text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            @louisaingram
                          </Text>
                        </Column>
                      </Row>
                      <Button
                        className="flex items-center justify-center md:my-[6px] min-w-[22%] my-[9px] sm:my-[4px] text-center w-[max-content]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillIndigoA200"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                          Add
                        </div>
                      </Button>
                    </Row>
                    <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                        <Img
                          src="images/img_avatar_3.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Avatar One"
                        />
                        <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                          <Text
                            className="text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            @louisaingram
                          </Text>
                        </Column>
                      </Row>
                      <Button
                        className="flex items-center justify-center md:my-[6px] min-w-[22%] my-[9px] sm:my-[4px] text-center w-[max-content]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillIndigoA200"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                          Add
                        </div>
                      </Button>
                    </Row>
                    <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                        <Img
                          src="images/img_avatar_11.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Avatar Two"
                        />
                        <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                          <Text
                            className="text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            @louisaingram
                          </Text>
                        </Column>
                      </Row>
                      <Button
                        className="flex items-center justify-center md:my-[6px] min-w-[22%] my-[9px] sm:my-[4px] text-center w-[max-content]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillIndigoA200"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                          Add
                        </div>
                      </Button>
                    </Row>
                    <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                        <Img
                          src="images/img_avatar_12.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Avatar Three"
                        />
                        <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                          <Text
                            className="text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            @louisaingram
                          </Text>
                        </Column>
                      </Row>
                      <Button
                        className="flex items-center justify-center md:my-[6px] min-w-[22%] my-[9px] sm:my-[4px] text-center w-[max-content]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillIndigoA200"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                          Add
                        </div>
                      </Button>
                    </Row>
                  </Grid>
                  <Stack className="border-2 border-gray_500_6c border-solid h-[30px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:p-[3px] md:p-[4px] p-[7px] relative rounded-radius4 w-[13%]">
                    <Text
                      className="absolute font-medium h-[max-content] inset-y-[0] left-[10%] my-[auto] text-gray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_arrowright_14X14.svg"
                      className="absolute h-[14px] inset-y-[0] max-w-[100%] my-[auto] right-[10%] w-[14px] sm:w-[7px] md:w-[9px]"
                      alt="arrowright One"
                    />
                  </Stack>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[34px] md:mt-[44px] mt-[64px] w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  Posts
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[22px] md:mt-[29px] mt-[43px] w-[100%]">
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 sm:w-[100%] w-[49%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                        <Img
                          src="images/img_image_6.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Image"
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
                        alt="overflowmenu"
                      />
                    </Row>
                    <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_150X290.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Image One"
                      />
                      <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-gray_900 sm:w-[100%] w-[95%]"
                          as="h4"
                          variant="h4"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo, and More
                        </Text>
                        <Text
                          className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                        </Text>
                      </Column>
                      <Text
                        className="font-bold sm:mt-[35px] md:mt-[45px] mt-[66px] text-gray_500 tracking-ls1 uppercase w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Read More
                      </Text>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] ml-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                          alt="favorite"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] text-gray_900"
                          as="h5"
                          variant="h5"
                        >
                          326
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[10px] md:ml-[6px] sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[21%]">
                        <Img
                          src="images/img_location.svg"
                          className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                          alt="location"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_900"
                          as="h5"
                          variant="h5"
                        >
                          148
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[63px] ml-[92px] sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[25%]">
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
                          alt="reply"
                        />
                      </Row>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start mb-[124px] sm:mb-[66px] md:mb-[85px] sm:mx-[0] md:p-[15px] sm:p-[15px] p-[23px] rounded-radius12 sm:w-[100%] w-[49%]">
                    <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                          <Img
                            src="images/img_image_48X48.png"
                            className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                            alt="Image Two"
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
                          alt="overflowmenu One"
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
                        alt="image Three"
                      />
                      <Column className="flex flex-col items-center ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                        <Img
                          src="images/img_photo2.png"
                          className="max-w-[100%] rounded-radius8 w-[100%]"
                          alt="image Four"
                        />
                        <Row
                          className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius8 w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_photo4.png')",
                          }}
                        >
                          <Img
                            src="images/img_settings_14X14.svg"
                            className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] sm:my-[3px] md:my-[4px] my-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="settings Two"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[7px] sm:my-[3px] md:my-[4px] my-[7px] text-white_A700"
                            as="h5"
                            variant="h5"
                          >
                            17
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mb-[3px] md:mb-[4px] mb-[7px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[48%]">
                          <Img
                            src="images/img_favorite.svg"
                            className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] my-[2px] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="favorite One"
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
                            alt="location One"
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
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:p-[4px] p-[7px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[25%]">
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
                </Row>
              </Column>
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center max-w-[420px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] md:pl-[3px] pl-[5px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
            <Column className="bg-gray_900 flex flex-col items-end ml-[10px] md:ml-[6px] sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
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
              <Column className="flex flex-col font-inter items-center justify-start mb-[2px] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <Stack className="bg-red_A200 h-[174px] md:pt-[14px] sm:pt-[15px] pt-[21px] relative rounded-radius12 w-[100%]">
                  <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <div className="bg-green_400 sm:h-[47px] md:h-[60px] h-[87px] sm:mb-[26px] md:mb-[34px] mb-[50px] rounded-radius435 w-[19%]"></div>
                    <Img
                      src="images/img_oval_92X165.png"
                      className="max-w-[100%] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:w-[100%] w-[53%]"
                      alt="Oval One"
                    />
                  </Row>
                  <div className="absolute bg-gray_900_33 sm:h-[11px] md:h-[14px] h-[19px] right-[37%] rounded-radius50 top-[0] sm:w-[10px] md:w-[13px] w-[19px]"></div>
                  <Text
                    className="absolute left-[6%] text-white_A700 top-[13%] w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Go Premium!
                  </Text>
                  <Column className="absolute bottom-[11%] flex flex-col justify-start left-[6%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] not-italic text-white_A700 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Try premium membership and enjoy
                      <br />a full experience of our community.
                    </Text>
                    <Stack className="bg-gray_900_33 h-[30px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:p-[3px] md:p-[4px] p-[7px] relative rounded-radius12 sm:w-[100%] w-[42%]">
                      <Text
                        className="absolute font-medium h-[max-content] inset-y-[0] left-[10%] my-[auto] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        See more
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="absolute md:h-[10px] h-[14px] sm:h-[8px] inset-y-[0] my-[auto] right-[10%] rounded-radius50 w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="arrowright Two"
                      />
                    </Stack>
                  </Column>
                </Stack>
                <Column className="flex flex-col justify-start sm:mt-[34px] md:mt-[44px] mt-[64px] pb-[1px] w-[100%]">
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
                        src="images/img_avatar_13.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Five"
                      />
                      <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[73%]">
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
                          alt="camera"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Img
                        src="images/img_avatar_38X38.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Six"
                      />
                      <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[73%]">
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
                        src="images/img_avatar_4.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Seven"
                      />
                      <Column className="flex flex-col justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[73%]">
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
                  </List>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                    <Text
                      className="flex-grow font-bold text-gray_500 tracking-ls1 uppercase"
                      as="h6"
                      variant="h6"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_arrowright_2.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] ml-[4px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="arrowright Three"
                    />
                  </Row>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[33px] md:mt-[43px] mt-[63px] w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Friends
                  </Text>
                  <List
                    className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[23px] md:mt-[30px] mt-[44px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Img
                        src="images/img_avatar_14.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Eight"
                      />
                      <Text
                        className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[135px] sm:ml-[71px] md:ml-[92px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
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
                      <Img
                        src="images/img_avatar_15.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Nine"
                      />
                      <Text
                        className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[135px] sm:ml-[71px] md:ml-[92px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
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
                      <Img
                        src="images/img_avatar_16.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Ten"
                      />
                      <Text
                        className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[135px] sm:ml-[71px] md:ml-[92px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[14px] md:w-[19px] w-[28px]"
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
                  </List>
                </Column>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default SearchResultsPage;
