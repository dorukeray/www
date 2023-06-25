import { createStyles, Image, Container, Title, Button, Group, Text, List, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const styles = {
  HeroTitle: createStyles((theme) => ({
    wrapper: {
      position: "relative",
      boxSizing: "border-box",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },

    inner: {
      position: "relative",
      paddingTop: 200,
      paddingBottom: 120,

      [BREAKPOINT]: {
        paddingBottom: 80,
        paddingTop: 80,
      },
    },

    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: 62,
      fontWeight: 900,
      lineHeight: 1.1,
      margin: 0,
      padding: 0,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [BREAKPOINT]: {
        fontSize: 42,
        lineHeight: 1.2,
      },
    },

    description: {
      marginTop: theme.spacing.xl,
      fontSize: 24,

      [BREAKPOINT]: {
        fontSize: 18,
      },
    },

    controls: {
      marginTop: +theme.spacing.xl * 2,

      [BREAKPOINT]: {
        marginTop: theme.spacing.xl,
      },
    },

    control: {
      height: 54,
      paddingLeft: 38,
      paddingRight: 38,

      [BREAKPOINT]: {
        height: 54,
        paddingLeft: 18,
        paddingRight: 18,
        flex: 1,
      },
    },
  })),
};

const BREAKPOINT = "@media (max-width: 755px)";

export function HeroTitle() {
  const { classes } = styles.HeroTitle();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A{" "}
          <Text component="span" variant="gradient" gradient={{ from: "blue", to: "cyan" }} inherit>
            fully featured
          </Text>{" "}
          React components and hooks library
        </h1>

        <Text className={classes.description} color="dimmed">
          Build fully functional accessible web applications with ease – Mantine includes more than 100 customizable
          components and hooks to cover you in any situation
        </Text>

        <Group className={classes.controls}>
          <Button size="xl" className={classes.control} variant="gradient" gradient={{ from: "blue", to: "cyan" }}>
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
