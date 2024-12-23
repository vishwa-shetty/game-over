import { Grid, GridItem, Show, SimpleGrid, Stack } from "@chakra-ui/react";
import React, { Suspense } from "react";
import SortSelector from "../components/common/SortSelector";
import GameGridSkelton from "../components/game/GameGridSkelton";
import GameHeading from "../components/game/GameHeading";
import Gamegenres from "../components/genre/Genres";
import PlatformSelector from "../components/platform/PlatformSelector";

const HomePage = () => {
  const GameGridComponent = React.lazy(
    () => import("../components/game/GameGrid")
  );

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"sidebar main"`,
      }}
      gridTemplateColumns={{ base: "1fr", lg: "250px 1fr" }} // Adjust column sizes
      gridTemplateRows="1fr auto"
      gap="4"
      minHeight="100vh"
    >
      <Show above="lg">
        <GridItem area={"sidebar"}>
          <Gamegenres />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          display={{ base: "grid", md: "flex" }}
          justifyContent="space-between"
        >
          <GameHeading />
          <Stack direction={{ base: "column", md: "row" }}>
            <PlatformSelector />
            <SortSelector />
          </Stack>
        </SimpleGrid>
        <Suspense fallback={<GameGridSkelton />}>
          <GameGridComponent />
        </Suspense>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
