import styled from "@emotion/styled";
import { tokens, ui } from "../styles/prism";

interface Props {
  title?: string;
  tagline?: string;
  statement?: string;
  center?: boolean;
  head?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Hero({
  title,
  tagline,
  statement,
  head,
  center,
  children,
}: Props) {
  return (
    <>
      <TheHero className={center ? "--center" : ""}>
        <Container>
          {head && <div>{head}</div>}
          {title && <Title>{title}</Title>}
          {tagline && <Tagline>{tagline}</Tagline>}
          {statement && <Statement>{statement}</Statement>}
          {children && <Content>{children}</Content>}
        </Container>
      </TheHero>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  gap: 0.25rem;

  max-width: 36rem;
  margin: 0 auto;
  padding: 0;
  padding-left: 0.75rem !important;
  padding-right: 0.25rem !important;

  > * {
    text-align: left !important;
    width: 100% !important;
  }
`;

const Title = styled.h1`
  display: block !important;
  margin: 0;
  padding: 0;
  font-size: 1.85rem;
  font-weight: 800;
  color: ${ui.color.neutral(80)};
`;

const Tagline = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.95rem;
  line-height: 2rem;
  font-weight: 800;
  color: ${ui.color.neutral(10)};
`;

const Statement = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 550;
  font-size: 1.25rem;
  color: ${ui.color.neutral(50)};
  margin-top: 0.15rem;
`;

const Content = styled.div``;

const TheHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 36rem;
  margin: 0 auto;
  padding: 0;

  ${Title},
  ${Statement},
    ${Tagline} {
    text-align: left !important;
  }

  &.--center {
    ${Container} > * {
      text-align: center !important;
    }
  }

  p {
    margin-bottom: 0.5rem;
  }

  @media (mid-width: 900px) {
    ${Container} {
      padding-left: 1rem !important;
    }
  }

  @media (min-width: ${tokens.viewpoint.desktop.S}) {
    ${Container} {
      text-align: left;
      align-items: flex-start;
    }
  }
`;