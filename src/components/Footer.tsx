import { createStyles, Container, Group, Anchor, Box, Title } from "@mantine/core";
import { FunctionComponent } from "react";
import { Text, ActionIcon } from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons";

export const FooterSimple: FunctionComponent<{
  links: { link: string; label: string }[];
  brand: React.ReactNode;
}> = ({ links, brand }) => {
  const { classes } = style.FooterSimple();

  const items = links.map((link) => (
    <Anchor<"a"> color="dimmed" key={link.label} href={link.link} onClick={(event) => event.preventDefault()} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>{items}</Group>
        <Group position="center" mt={10}>
          <Box>{brand}</Box>
        </Group>
      </Container>
    </div>
  );
};

export const FooterWithLinks: FunctionComponent<{
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}> = ({ data }) => {
  const { classes } = style.FooterWithLinks();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Title size={30}>Dorkodu</Title>
          <Text size="xs" color="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};

const style = {
  FooterSimple: createStyles((theme) => ({
    footer: {
      marginTop: 16,
      borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]}`,
    },

    inner: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,

      [theme.fn.smallerThan("xs")]: {
        flexDirection: "column",
      },
    },
  })),
  FooterWithLinks: createStyles((theme) => ({
    footer: {
      marginTop: 120,
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
      borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    },

    logo: {
      maxWidth: 200,

      [theme.fn.smallerThan("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },

    description: {
      marginTop: 5,

      [theme.fn.smallerThan("sm")]: {
        marginTop: theme.spacing.xs,
        textAlign: "center",
      },
    },

    inner: {
      display: "flex",
      justifyContent: "space-between",

      [theme.fn.smallerThan("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },

    groups: {
      display: "flex",
      flexWrap: "wrap",

      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },

    wrapper: {
      width: 160,
    },

    link: {
      display: "block",
      color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
      fontSize: theme.fontSizes.sm,
      paddingTop: 3,
      paddingBottom: 3,

      "&:hover": {
        textDecoration: "underline",
      },
    },

    title: {
      fontSize: theme.fontSizes.lg,
      fontWeight: 700,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: theme.spacing.xs / 2,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },

    afterFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: theme.spacing.xl,
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
      borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,

      [theme.fn.smallerThan("sm")]: {
        flexDirection: "column",
      },
    },

    social: {
      [theme.fn.smallerThan("sm")]: {
        marginTop: theme.spacing.xs,
      },
    },
  })),
};