import { useMemo } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import styles from "./LatestArticlesSection.module.css";

const LatestArticlesSection = ({
  imageAltText,
  recipeTitle,
  snackImageUrl,
  imageDimensions,
  recipeImageUrl,
  imageDimensionsAltText,
  propLeft,
}) => {
  const groupSectionStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <section className={styles.latestArticlesParent} style={groupSectionStyle}>
      <h1 className={styles.latestArticles}>Latest Articles</h1>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img
          className={styles.grilledTomatoes1846x8461Icon}
          alt=""
          src={imageAltText}
        />
        <div className={styles.frameParent}>
          <div className={styles.grilledTomatoesAtHomeParent}>
            <h3 className={styles.grilledTomatoesAt}>{recipeTitle}</h3>
            <div className={styles.ploremIpsumIs}>
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
          </div>
          <Button variant="solid" w="131px" colorScheme="teal">
            Read More
          </Button>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.frameGroup}>
            <div className={styles.snacksForTravelParent}>
              <h3 className={styles.grilledTomatoesAt}>{snackImageUrl}</h3>
              <div className={styles.ploremIpsumIs}>
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </div>
            </div>
            <Button variant="solid" w="131px" colorScheme="teal">
              Read More
            </Button>
          </div>
        </div>
        <img
          className={styles.mealPrepIdeas846x8461Icon}
          alt=""
          src={imageDimensions}
        />
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.frameGroup}>
            <div className={styles.snacksForTravelParent}>
              <h3 className={styles.grilledTomatoesAt}>{recipeImageUrl}</h3>
              <div className={styles.ploremIpsumIs}>
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </div>
            </div>
            <Button variant="solid" colorScheme="teal">
              Read More
            </Button>
          </div>
        </div>
        <img
          className={styles.mealPrepIdeas846x8461Icon}
          alt=""
          src={imageDimensionsAltText}
        />
      </div>
    </section>
  );
};

export default LatestArticlesSection;
