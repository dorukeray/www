import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Polaroid from "../components/Polaroid";
import { ButtonContainer, Showcase } from "../styles/blame";
import { tokens, ui } from "../styles/prism";
import Page from "../components/Page";
import Bulletpoint from "../components/Bulletpoint";
import { ParagraphTagline } from "../styles/blame";
import { Icon } from "@iconify-icon/react";
import SectionRuler from "../components/SectionRuler";
import Testimonial from "../components/Testimonial";

// images
import IntroIllustration from "../public/images/undraw_dorkodu-work-culture.png";

const meta = {
  title: "work @ dorkodu",
  description: `join the revolution!`,
  keywords: `work @ dorkodu, careers at dorkodu, careers dorkodu, dorkodu jobs, work at dorkodu`,
  url: "/",
  image: {
    src: "/public/images/dorkodu-single.png",
    alt: "dorkodu logo with single letter.",
  },
};

const image = {
  intro: IntroIllustration,
};

const style = {
  hashtag: css`
    color: ${tokens.color.blue(48)};
    font-size: 1.15rem;
    font-weight: 500;
    padding: 0;
    margin: 0 !important;
  `,
  arrowList: css`
    position: relative;
    list-style: none;
    margin: 0 !important;
    padding-left: 1.5em;
    font-size: 1.25rem;

    li:before {
      content: "⇢";
      position: absolute;
      left: 0;
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 1.5rem;
      color: ${tokens.color.gray(75)};
    }
  `,
  p: {
    mission: css`
      font-size: 1.25rem;
      margin: 0;
      font-weight: 400;
    `,
  },
};

const Work: NextPage = () => {
  return (
    <>
      <Page.Meta {...meta} />

      <Showcase>
        <Hero
          title="work"
          tagline="join the revolution!"
          statement="dorkodu is a foundation built for empowering the human
          civilization. we need extraordinary, passionate and hard-working people for this mission."
        >
          <p css={style.hashtag}>
            #software #ui/ux #graphics
            <br />
            #design #economics #knowledge
          </p>
          <ButtonContainer>
            <Button type="fill" link="#story">
              continue
            </Button>
            <Button type="tonal" link="/business">
              be an investor<i>!</i>
            </Button>
          </ButtonContainer>
        </Hero>
        <Polaroid source={image.intro} />
      </Showcase>

      <section>
        <article>
          <h3>let&apos;s work together!</h3>
          <p>
            at dorkodu, we understand that our worldwide success can only come
            from our diverse workforce.
          </p>
          <Polaroid source={image.intro} description="our team & culture." />
          <p>
            dorkodians relish the freedom to create the next generation of
            technologies in an environment designed to foster collaboration,
            creativity, health and happiness.
          </p>
          <Polaroid source={image.intro} description="our team & culture." />

          <p>
            building &quot;insanely great&quot; products depends on great
            people.
          </p>
          <p>
            dorkodu is where individual imaginations gather together, committing
            to the vaoues that lead to great work.
          </p>
          <p>
            here you will do more than join something, you will add something.
          </p>
          <p></p>
        </article>
      </section>

      <section>
        <h2>
          <span>hello, again.</span>&nbsp;
          <Icon icon="fluent-emoji-flat:waving-hand-light" size={36} />
        </h2>
        <Bulletpoint icon="twemoji:leaf-fluttering-in-wind">
          <p css={style.p.mission}>
            <ParagraphTagline>our purpose</ParagraphTagline>
            <b>we liberate the humankind. </b>
            <br />
            we work to...
          </p>
          <ul css={style.arrowList}>
            <li>help people find and follow their true purpose.</li>
            <li>create a free and happy life experience for everyone.</li>
            <li>build the utopian dream of heaven on earth.</li>
          </ul>
          <p css={style.p.mission}>
            <b>...with our meaningful products & technology.</b>
          </p>
        </Bulletpoint>
        <Bulletpoint icon="twemoji:bullseye">
          <p css={style.p.mission}>
            <ParagraphTagline>our mission</ParagraphTagline>
            we combine gamification, human-friendly design and our superior
            technology; to create masterpiece products which...
          </p>
          <ul css={style.arrowList}>
            <li>empower human brilliance.</li>
            <li>.</li>
          </ul>
        </Bulletpoint>
        <SectionRuler />
      </section>
      <section>
        <article>
          <h3>our company is built on community.</h3>
          <p>
            dorkodu is organized for creativity; by functional specialities
            rather than business units. we're artists leading artists. in any
            area; technical experts, unique thinkers, feelers with empathy. best
            designers lead design; best software artisans lead software.
          </p>
          <p>this makes dorkodu different from other archaic tech companies.</p>
          <p>
            we prefer to recruit our own talents. if you have prior technical
            experience, that's awesome! but you have to learn to think "the
            dorkodian way".
            <b>we are here to help you actualize yourself.</b>
          </p>
          <p>
            find yourself a purpose. do the work you are passionate about. build
            your character. believe in your values. work within your principles.
            make your dreams come true.
          </p>
          <p>
            dorkodu is unique because of our approach to work:
            <b>
              folks who has more experience, intuition and passion always makes
              the right decisions.
            </b>
            we don't like managers. we love creative people, who think, design
            and build. a craftsperson can easily learn management, marketing,
            sales, finance or any other formal stuff.
          </p>
          <p>
            leaders at dorkodu combine their expertise with important
            characteristics: focus on the details without losing the sight of
            the bigger picture. with a willingness to collaboratively debate
            during collective decision-making. for people here, it's liberating
            to work with experts who offer relevant guidance and mentoring. this
            approach to leadership is a commitment to collaboration that leads
            to innovation.
          </p>
          <p>
            dorkodu is an equal opportunity employer. employment here is based
            solely upon one's individual merit and qualifications directly
            related to professional competence. we don't discriminate on the
            basis of race, color, religion, national origin, ancestry, pregnancy
            status, sex, age, marital status, disability, medical condition,
            sexual orientation, gender identity, or any other characteristics
            protected by law.
          </p>
        </article>
        <Testimonial
          name="doruk eray"
          title="founder & chief"
          quote="dorkodu is where you'll work with others who share your passion. where business serves expertise, where a healthy respect for courage and original thinking  
        inspires you to bring your best to what we do together."
        />
      </section>
      <Hero
        title="life at dorkodu"
        tagline=""
        statement="explore a collaborative culture of inclusion, growth and originality;
        supported by resources that make a difference in your life"
      />
    </>
  );
};

export default Work;

/**
 * <script lang="ts" setup>

definePageMeta();
</script>

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>

        <Hero :data="{
          title: `work`,
          tagline: `join the revolution.`,
          statement: ``
        }">
        </Hero>

      </template>
      <template #side>undraw_experts_re_i40h.svg
        <Picture source="/images/undraw_co_workers_re_1i6i.svg" title="our team & culture." />
      </template>
    </Showcase>

    <Break />

    

      <Hero :data="{
        title:`work at dorkodu`,
        tagline: `join the revolution, inspire the work, liberate the humankind.`,
        statement: `discover how you can make an impact: see our areas of work: from revolutionary products to breakthrough technologies. also we have opportunities for students.` 
      }" />



    <article>
      <h2>
        <span>hello, again.</span>&nbsp;
        <Icon name="fluent-emoji-flat:waving-hand-light" size="36" />
      </h2>
      <Bulletpoint icon="twemoji:leaf-fluttering-in-wind">
        <p style="font-size: 1.25rem; margin: 0; font-weight: 400;">
          <span class="paragraph-tagline">my purpose;</span>
          <br><b>liberate the human.</b>
        </p>
      </Bulletpoint>
      <Bulletpoint icon="twemoji:bullseye">
        <p style="font-size: 1.25rem; margin: 0; font-weight: 400;">
          <span class="paragraph-tagline">my mission;</span>
          <br>create a free and happy life experience for everyone,
          <br>build the utopian dream of heaven on earth,
          <br><b>...with meaningful technology.</b>
        </p>
      </Bulletpoint>
      <SectionRuler />
    </article>

    <article>
      <h4> why?</h4>
      <p>
        simple. <u>i want to live a free, happy and meaningful life.</u><br />
        i believe this is a fundemental human right; a livable world & a life worth living.
        so we need to come together, and create this utopic dream life for everyone.
      </p>
      <h4>how?</h4>
      <p>i am passionate in products, design and software.
        i am an autodidact (self-taught) so i teach myself the arts of my work:
        <b>
          gamification,
          web 3.0,
          knowledge,
          economics,
          human nature,
          industrial design
        </b>
        and
        <b>artificial intelligence</b>.
      </p>
      <p>
        i want to achieve a meaningful life, be remembered as an inventor, innovator, artist, a cult leader;
        or in a single word, a <u><b>protagonist</b></u> in the story of human.
      </p>
    </article>

    <Break />
    <Showcase>
      <template #main>
        <DescriptiveList title="know thyself."
          message="you will probably ask me these common questions. so here is, what i think about myself and life.">
          <DescriptiveItem title="who i am?"
            description="thinker, leader, artist, inventor, designer, polymath, idol, revolutionist, entrepreneur.">
            <Icon name="fluent-emoji-flat:boy-light" size="36" />
          </DescriptiveItem>
          <DescriptiveItem title="what i love to do?"
            description="think, design, code, learn, build, socialize, talk, think, feel... any type of creative activity.">
            <Icon name="twemoji:glowing-star" size="36" />
          </DescriptiveItem>
          <DescriptiveItem title="... for whom?" description="myself, and then everyone.">
            <Icon name="twemoji:people-hugging" size="36" />
          </DescriptiveItem>
          <DescriptiveItem title="why?"
            description="this is my mission, purpose of life. i always experience the human authenticity, being in the flow and losing sense of time and space.">
            <Icon name="twemoji:growing-heart" size="36" />
          </DescriptiveItem>
        </DescriptiveList>
      </template>
      <template #side>
        <Picture source="/images/dancing.png" title="i love being in the zone ♓️" />
      </template>
    </Showcase>

    <Break />

    <article>
      <h2>
        <Icon name="twemoji:open-book" size="36" />&nbsp;
        story
      </h2>
      <p style="text-align: center;">(shortened)</p>
      <p>
        <span class="paragraph-tagline">
          <Icon name="fluent-emoji-flat:baby-light" size="36" />
        </span>
        i was a <i>curious</i> and <i>artistic</i> child, and my mom did teach me how to read and write when I was
        <strong>3</strong>. i loved tinkering with gadgets, to understand how they work and how to build my own things.
      </p>
      <p>
        <strong>i've always been dreaming to be an inventor since then.</strong>
        <br>this was the start in my life.
      </p>
      <p>
        <span class="paragraph-tagline">
          <Icon name="fluent-emoji-flat:school" size="36" />
        </span>
        when i started elementary school, i spent my whole time <b>reading about history</b> and
        <b>picturing the moments</b>, drawing battle scenes, maps, events which I just read.
        this was exciting until i realized that how tables can turn so quickly.
      </p>

      <Quote message="
        For the loser now
      / Will be later to win
      / For the times they are a-changin'" owner="bob dylan" />

      <h3>New beginnings...</h3>
      <p>
        <span class="paragraph-tagline">
          <Icon name="twemoji:laptop" size="28" />
        </span>&nbsp;
        I learned to code when I was <strong>10</strong>, and this was a milestone in my journey.
        You can build anything you want, and let everyone use it.
        What you can do is limited only by your skills and imagination.
      </p>
      <p>
        My secondary school years were spent on a <b>search for meaning</b> for my life:
        <b>personal projects</b> and
        <b>technical/artistic experimentation</b>, just curiosity.
      </p>
      <p>
        After a boring but successful exam year, I entered <strong>Vefa Lisesi</strong>,
        a historical high school in Istanbul. There also I met my close friend <a href="berk.dorkodu.com">Berk</a>, who
        joined me with the foundations of Dorkodu.
      </p>
      <h3>Revolutions</h3>
      <p>
        <span class="paragraph-tagline">
          <Icon name="twemoji:leaf-fluttering-in-wind" size="36" />
        </span>&nbsp;
        <a href="https://dorkodu.com">Dorkodu</a>
        was born when I first branded all my work under an umbrella title,
        I was in secondary school back then.
        The name is a mixture of <strong>"Doruk" + "code"</strong>.
      </p>
      <p>
        i switched to developing software products and technologies for the internet platform.
        <i>eureka!</i> a moment of enlightment.
        <Icon name="twemoji:sparkles" size="20" />
        then i discovered the internet's unifying power for our civilization.
      </p>
      <p>i thought...<br>maybe there is still a room for improvement.</p>
      <p>
        i see <b>gamification</b> as a promising method we can use to fix broken parts of human systems & productivity;
        and combined with the <b>humane spirit</b> in technology and design, <u><b>we can free the internet.</b></u>
      </p>
      <p>This is what I dedicated the first chapter of my career to.</p>
      <p style="display: flex;">
        <Icon name="twemoji:victory-hand-light-skin-tone" size="28" />
        <b>to be continued...</b>
      </p>
      <SectionRuler />
      <p>
        You can visit <a href="https://dorkodu.com">Dorkodu's website</a>
        to learn more about who we are and what we do.
      </p>
    </article>

    <PageContact />

    <Break />

    <PageLegend />

    <Break />
  </main>
</template>

<style lang="scss" scoped>

</style>

 */
