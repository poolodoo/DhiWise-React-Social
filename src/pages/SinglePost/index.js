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

const SinglePostPage = () => {
  return (
    <>
      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center mx-[auto] w-[100%]">
        <Sidebar className="md:hidden sm:hidden w-[12%]" />
        <Stack className="h-[1024px] max-w-[1275px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
            <Line className="bg-white_A700_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[5px]" />
            <div className="bg-white_A700 h-[1024px] sm:h-[546px] md:h-[705px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[99%]"></div>
          </Row>
          <Column className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start left-[7%] sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[50%]">
            <Button
              className="flex items-center justify-center min-w-[17%] text-center w-[max-content]"
              leftIcon={
                <Img
                  src="images/img_arrowleft_18X18.svg"
                  className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                  alt="arrow_left"
                />
              }
              shape="RoundedBorder12"
              size="xl"
              variant="FillGray100"
            >
              <div className="bg-transparent cursor-pointer font-bold text-[14px] text-gray_500">
                Back
              </div>
            </Button>
            <Column className="flex flex-col font-inter items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] pb-[3px] w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                    <Img
                      src="images/img_avatar.png"
                      className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                      alt="Avatar"
                    />
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Katherine Cole
                      </Text>
                      <Text
                        className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        5min ago
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[4px] sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[23%]">
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
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[4px] sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[22%]">
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
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end mt-[3px] sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[26%]">
                      <Img
                        src="images/img_reply.svg"
                        className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] my-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="reply"
                      />
                      <Text
                        className="flex-grow font-medium ml-[4px] my-[1px] text-gray_900"
                        as="h5"
                        variant="h5"
                      >
                        Share
                      </Text>
                    </Row>
                    <Img
                      src="images/img_eye.svg"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="eye"
                    />
                  </Row>
                </Row>
                <Img
                  src="images/img_image_150X290.png"
                  className="max-w-[100%] sm:mt-[21px] md:mt-[27px] mt-[40px] rounded-radius8 w-[100%]"
                  alt="Image"
                />
              </Column>
              <Column className="flex flex-col items-center justify-start sm:mt-[23px] md:mt-[30px] mt-[45px] w-[100%]">
                <Text
                  className="leading-[36.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-gray_900 sm:w-[100%] w-[97%]"
                  as="h1"
                  variant="h1"
                >
                  The Best Fashion Instagrams of the Week: Céline Dion, Lizzo,
                  and More
                </Text>
                <Text
                  className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[19px] mt-[29px] not-italic text-gray_500 w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  f you are looking for a break from the cold, take a cue from
                  Lizzo: This week, the singer headed to Disneyland in warm and
                  sunny California. She dressed up for the occasion in pure
                  Minnie Mouse style perfection, including a cartoon merch
                  sweatshirt from the artist Shelby Swain, cycling shorts, and
                  adorable pulled-up polka dot socks. All the way over in
                  Montreal, Céline Dion also had quite the wardrobe moment. For
                  a concert, the singer wore a pair of fringed, XXL-flared
                  cowboy jeans by Ukrainian label Ksenia Schnaider. The
                  Kiev-based designer is responsible for other viral denim
                  creations, like her asymmetrical jeans that launched earlier
                  this year. Fun fact: The daring Dion has worn a pair of those,
                  too!
                  <br />
                  <br />
                  Of course, back in New York, there was Marc Jacobs. The
                  designer has been having quite the year when it comes to
                  flexing his fashion muscles on the ’gram. This week, he
                  channeled The Wizard Of Oz with a full-green look that
                  included some shimmery Sies Marjan pants, and a pair of
                  platform boots to anchor the ensemble.
                </Text>
              </Column>
            </Column>
          </Column>
          <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
            <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
            <Column className="bg-gray_900 flex flex-col items-end sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
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
                  alt="Avatar One"
                />
              </Row>
              <Column className="flex flex-col font-inter items-center justify-start sm:mt-[26px] md:mt-[33px] mt-[49px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Comments (148)
                  </Text>
                  <List
                    className="sm:gap-[17px] md:gap-[22px] gap-[32px] grid min-h-[auto] sm:mt-[22px] md:mt-[29px] mt-[43px] sm:pr-[4px] md:pr-[6px] pr-[9px] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                          <Img
                            src="images/img_avatar_28X28.png"
                            className="flex-shrink-0 sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                            alt="Avatar Two"
                          />
                          <Text
                            className="flex-grow font-medium mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700"
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
                        className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[96%]"
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
                          src="images/img_laptop.svg"
                          className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                          alt="laptop"
                        />
                      </Row>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                          <Img
                            src="images/img_image_7.png"
                            className="flex-shrink-0 sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                            alt="Avatar Three"
                          />
                          <Text
                            className="flex-grow font-medium mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700"
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
                        className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[96%]"
                        as="h5"
                        variant="h5"
                      >
                        Awesome Edward, remeber that five tips for low cost{" "}
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                        <Img
                          src="images/img_favorite_1.svg"
                          className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                          alt="favorite Two"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                          alt="laptop One"
                        />
                      </Row>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                          <Img
                            src="images/img_avatar_6.png"
                            className="flex-shrink-0 sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                            alt="Avatar Four"
                          />
                          <Text
                            className="flex-grow font-medium mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700"
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
                        className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[96%]"
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
                          alt="favorite Three"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                          alt="laptop Two"
                        />
                      </Row>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                          <Img
                            src="images/img_image_68X68.png"
                            className="flex-shrink-0 sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                            alt="Avatar Five"
                          />
                          <Text
                            className="flex-grow font-medium mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700"
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
                        className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[96%]"
                        as="h5"
                        variant="h5"
                      >
                        Awesome Edward, remeber that five tips for low cost{" "}
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                        <Img
                          src="images/img_favorite_1.svg"
                          className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                          alt="favorite Four"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                          alt="laptop Three"
                        />
                      </Row>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                          <Img
                            src="images/img_avatar_7.png"
                            className="flex-shrink-0 sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                            alt="Avatar Six"
                          />
                          <Text
                            className="flex-grow font-medium mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700"
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
                        className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[96%]"
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
                          alt="favorite Five"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                          alt="laptop Four"
                        />
                      </Row>
                    </Column>
                  </List>
                </Column>
                <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[37px] md:mt-[48px] mt-[70px] p-[11px] sm:p-[5px] md:p-[7px] rounded-radius4 w-[100%]">
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="flex ml-[4px] sm:mx-[0] sm:w-[100%] w-[82%]"
                    name="FrameFive"
                    placeholder="Write a comment…"
                    suffix={
                      <Img
                        src="images/img_user_1.svg"
                        className="ml-[35px] mr-[4px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="user"
                      />
                    }
                    size="sm"
                  ></Input>
                  <Img
                    src="images/img_send.svg"
                    className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] sm:ml-[13px] md:ml-[17px] ml-[25px] w-[14px] sm:w-[7px] md:w-[9px]"
                    alt="send"
                  />
                </Row>
              </Column>
            </Column>
          </Row>
        </Stack>
      </Row>
    </>
  );
};

export default SinglePostPage;
