import { Button, IconButton } from "@chakra-ui/react";
import styles from "./ExploreNow.module.css";

const ExploreNow = () => {
  return (
    <Button
      className={styles.exploreNow}
      variant="solid"
      w="190px"
      colorScheme="teal"
    >
      Explore Now!
    </Button>
  );
};

export default ExploreNow;
