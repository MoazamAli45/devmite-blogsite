import Head from "next/head";
import React from "react";
import Typrography, { ListItem } from "../../shared/Typography";
import Link from "next/link";
import { InputArea, InputCheckbox, InputGroup } from "../../shared/Input";
import { CommentButton } from "../../shared/Button";

const listData = [
  {
    id: 1,
    text: "Business interest, in particular, focused on running small businesses.",
  },
  {
    id: 2,
    text: "HR topics, especially leave management",
  },
  {
    id: 3,
    text: "Career advice and experiences",
  },
  {
    id: 4,
    text: "Wellbeing at home and work",
  },
  {
    id: 5,
    text: "Team management and leadership",
  },
];
const supportingMaterials = [
  "Images",
  "Videos",
  "Infographiscs",
  "Quotes",
  "Links to relevant sources (only 1 link to a commercial site allowed)",
];

// BIO DATA
const bioData = [
  "A high-quality square image of yourself",
  "A short biography – 50 to 150 words",
  "A link to your website",
];

const Shop = () => (
  <div>
    <Head>
      <title>Devmite | Shop</title>
      <link rel="icon" href="/devicon.ico" />
    </Head>

    <div className="container">
      <section className="flex flex-col justify-center items-center custom-md:items-start  custom-md:justify-start  gap-[20px] sm:gap-[30px]">
        <h1 className="text-[35px] sm:text-[40px]  custom-md:text-[60px] font-normal text-black dark:text-white">
          Write for us
        </h1>
        <div className="flex flex-col gap-[10px] sm:gap-[15px] custom-md:w-[70%]">
          <p className="text-[16px] sm:text-[20px] leading-[20px] sm:leading-[30px] text-black dark:text-white">
            We welcome individual writers and bloggers to write for us and
            contribute high-quality content to the Devmite blog.
          </p>
          <p className="text-[16px] sm:text-[20px] leading-[20px] sm:leading-[30px] text-black dark:text-white">
            We accept original articles (not published anywhere else) with
            content based on your professional experiences and expertise.
          </p>
          <p className="text-[16px] sm:text-[20px] leading-[20px] sm:leading-[30px] text-black dark:text-white">
            Please read our guest writing guidelines before submitting articles.
          </p>
        </div>
      </section>
      {/*  GUEST POST */}
      <section className="custom-md:ml-[80px]  mt-[80px]  custom-md:mt-[140px]  custom-md:w-[70%]">
        <div className="flex flex-col   gap-[10px] sm:gap-[20px]">
          <h2 className="text-[25px] sm:text-[40px] font-semibold leading-[50px] sm:leading-[72px]">
            Why would I write a guest post?
          </h2>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[14px] sm:text-[18px] leading-[20px] sm:leading-[27px] text-black dark:text-white">
              There are a number of reasons why guest posting is such an
              important strategy for bloggers.
            </p>
            <p className="text-[14px] sm:text-[18px] leading-[20px] sm:leading-[27px] text-black dark:text-white">
              It increases your exposure to new audiences who may not have
              encountered you or your writing before. When you write
              interesting, engaging articles about topics relevant to them, they
              will follow your link and read more of your content.
            </p>
            <p className="text-[14px] sm:text-[18px] leading-[20px] sm:leading-[27px] text-black dark:text-white">
              Guest posting also improves your search engine ranking as you will
              receive a backlink to your site. Google and the other search
              engines see this as an endorsement of your site. Experts estimate
              the SEO (search engine optimisation) benefit to your site is 6
              times greater when guest posting compared to writing on your own
              site.
            </p>
          </div>
        </div>
        {/*   WELCOME */}
        <div className="flex flex-col gap-[20px] mt-[40px] custom-md:mt-[80px]">
          <h2 className="text-[25px] sm:text-[40px] font-semibold leading-[50px] sm:leading-[72px]">
            Article topics we welcome
          </h2>
          <ul className="flex flex-col gap-[7px]">
            {listData.map((list) => (
              <Typrography.ListItem key={list.id}>
                {list.text}
              </Typrography.ListItem>
            ))}
          </ul>
        </div>
        {/* GuideLines */}
        <div className="flex flex-col mt-[40px]  custom-md:mt-[80px] gap-[15px] custom-md:gap-[25]">
          <h2 className="text-[25px] sm:text-[40px] font-semibold leading-[50px] sm:leading-[72px]">
            Guest writing guidelines
          </h2>
          <div className="flex flex-col gap-[20px] sm:gap-[30px]">
            <div className="flex flex-col gap-[15px] sm:gap-[20px]">
              <h4 className="text-[18px] sm:text-[24px] leading-[25px] sm:leading-[31.2px] font-semibold">
                Guiding principles
              </h4>
              <ul className="flex flex-col gap-[7px]">
                <Typrography.ListItem>
                  Write an article that you would want to read
                </Typrography.ListItem>
                <Typrography.ListItem>
                  The article must be informative, inspiring or uplifting.
                  Ideally all three.
                </Typrography.ListItem>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px] sm:gap-[20px]">
              <h4 className="text-[18px] sm:text-[24px] leading-[25px] sm:leading-[31.2px] font-semibold">
                Contents
              </h4>
              <p className="text-[14px] sm:text-[18px] leading-[20px] sm:leading-[27px] text-black dark:text-white">
                The article must be unique and original. We will not accept
                posts which have been published to other sites.
              </p>
            </div>
            <div className="flex flex-col gap-[15px] sm:gap-[20px]">
              <h4 className="text-[18px] sm:text-[24px] leading-[25px] sm:leading-[31.2px] font-semibold">
                Originality
              </h4>
              <div className="flex flex-col gap-[10px] sm:gap-[15px] ">
                <Typrography.PLarge>
                  The <span className="font-medium">opening paragraph </span>
                  must be captivating. If the reader is not captivated in the
                  first few words they will not read on. The opening paragraph
                  should explain to the reader what the article is about, engage
                  them and make them want to learn more.
                </Typrography.PLarge>
                <Typrography.PLarge>
                  Articles should be{" "}
                  <span className="font-medium">
                    500 to 3,000 words in length.
                  </span>
                  We are less worried about the length of the article than the
                  message within it.
                </Typrography.PLarge>
                <Typrography.PLarge>
                  Use <span className="font-medium">subheadings </span> to help
                  your reader understand the flow of your article at a glance.
                </Typrography.PLarge>
                <Typrography.PLarge>
                  Readers often find it easier to read shorter paragraphs, so
                  please use{" "}
                  <span className="font-medium">
                    no more than 3 sentences per paragraph.
                  </span>
                </Typrography.PLarge>
                <Typrography.PLarge>
                  Ensure there is a learning, thought or action for the reader
                  to <span className="font-medium">take away </span> at the end
                  of your article.
                </Typrography.PLarge>
                <Typrography.PLarge>
                  <span className="font-medium">Spelling and grammar </span>
                  should be checked before submitting to us.
                </Typrography.PLarge>
                <Typrography.PLarge>
                  We only accept articles written in English.
                </Typrography.PLarge>
                <Link
                  href=""
                  className="text-[16px] font-medium sm:text-[18px] underline"
                >
                  Here is a good example of a guest post
                </Link>
              </div>
            </div>
            {/* Supporting Materials */}
            <div className="flex flex-col gap-[15px] sm:gap-[20px]">
              <h4 className="text-[18px] sm:text-[24px] leading-[25px] sm:leading-[31.2px] font-semibold">
                Supporting materials
              </h4>
              <div className="flex flex-col gap-[10px] sm:gap-[20px]">
                <Typrography.PLarge>
                  Please provide any royalty free materials which you think help
                  support the article.
                </Typrography.PLarge>
                <ul className="flex flex-col gap-[7px]">
                  {supportingMaterials.map((item, index) => (
                    <Typrography.ListItem key={index}>
                      {item}
                    </Typrography.ListItem>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] sm:gap-[20px]">
              <h4 className="text-[18px] sm:text-[24px] leading-[25px] sm:leading-[31.2px] font-semibold">
                Author bio
              </h4>
              <div className="flex flex-col gap-[10px] sm:gap-[20px]">
                <Typrography.PLarge>
                  At the end of your article, you can provide a short biography
                  about yourself. This should include the following:
                </Typrography.PLarge>
                <ul className="flex flex-col gap-[7px]">
                  {bioData.map((item, index) => (
                    <Typrography.ListItem key={index}>
                      {item}
                    </Typrography.ListItem>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*  SUBMIT */}
        <div className="flex flex-col   mt-[40px]  custom-md:mt-[80px] gap-[15px] custom-md:gap-[25]">
          <h2 className="text-[25px] sm:text-[40px] font-semibold leading-[50px] sm:leading-[72px]">
            How to submit
          </h2>
          <div className="flex flex-col gap-[10px] sm:gap-[20px]">
            <Typrography.PLarge>
              Once you have checked that all the guidelines above are met,
              please complete the form below to submit an application.
            </Typrography.PLarge>
            <Typrography.PLarge>
              Once you have checked that all the guidelines above are met,
              please complete the form below to submit an application.
            </Typrography.PLarge>
            Our team will contact you if your application is successful. We
            reserve the right to decline articles which we do not feel meet the
            guidelines. We also reserve the right to adjust articles where
            necessary to help improve the reader&lsquo;s experience.
          </div>
          {/*   Form */}
          <h2 className="font-semibold text-[24px]  sm:text-[28px]  mt-[25px] sm:mt-[40px]">
            Write for us
          </h2>
          <div className="flex flex-col gap-[20px] sm:gap-[30px] mt-[20px] sm:mt-[30px]">
            <div className="flex flex-col custom-md:flex-row gap-[20px] w-full">
              <InputGroup label="First Name *" styles="custom-md:w-1/2" />
              <InputGroup label="Last Name *" styles="custom-md:w-1/2" />
            </div>
            <div className="flex flex-col custom-md:flex-row gap-[20px] w-full">
              <InputGroup label="Email Address *" styles="custom-md:w-1/2" />
            </div>
            <InputArea
              label="TELL US ABOUT YOURSELF AND WHY YOU WOULD LIKE TO WRITE FOR LEAVE DATES. *"
              rows={4}
            />
            <div className="flex flex-col gap-3">
              <label className="text-gray text-[14.4px] font-normal">
                I AM INTERESTED IN WRITING ARTICLES ON... *
              </label>
              {/*   CHECKBOX  */}
              <InputCheckbox
                label="Leave management software"
                id="software"
                name="software"
                value="software"
              />
              <InputCheckbox
                label="Holidays and leave-related HR topics"
                id="hr"
                name="hr"
                value="hr"
              />
              <InputCheckbox
                label="Business and management-based topics"
                id="business"
                name="business"
                value="business"
              />
              <InputCheckbox
                label="Business culture and team building"
                id="culture"
                name="culture"
                value="culture"
              />
              <InputCheckbox
                label="Other (please tell us below)"
                id="other"
                name="other"
                value="other"
              />
            </div>
            <InputArea
              label="TELL US MORE ABOUT THE TOPIC YOU WOULD LIKE TO WRITE ABOUT. *"
              rows={4}
            />
            <CommentButton
              label="SUBMIT "
              styles="justify-self-start self-start px-[35px] py-[15px]  sm:px-[50px] sm:py-[20px] font-semibold"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Shop;
