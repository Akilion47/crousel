import { Button } from "@chakra-ui/react";
import ContactSection from "../components/ContactSection";
import ExploreNow from "../components/ExploreNow";
import LatestArticlesSection from "../components/LatestArticlesSection";
import styles from "./LandingPageDesktop.module.css";
import responsiveStyles from "./LandingPageDesktop.module.css"; // New responsive CSS file

const LandingPageDesktop = () => {
  return (
    <div className={`${styles.landingPageDesktop} ${responsiveStyles.responsive}`}>
      <section className={styles.landingPageDesktopChild} />
      <img
        className={`${styles.screenshot6691Icon} ${responsiveStyles.responsiveImage}`}
        alt=""
        src="/screenshot-669-1@2x.png"
      />
      <section className={styles.landingPageDesktopItem} />
      <section className={styles.landingPageDesktopInner} />
      <div className={styles.groupDiv}>
        <img className={styles.groupChild} alt="" src="/rectangle-400@2x.png" />
      </div>
      <ContactSection />
      <ExploreNow />
      <h1 className={styles.discoverTheBestContainer}>
        <p className={styles.discoverThe}>{`Discover the `}</p>
        <p className={styles.discoverThe}>
          <span className={styles.best}>Best</span>
          <span> Food and Drinks</span>
        </p>
      </h1>
      <div
        className={styles.naturallyMadeHealthcare}
      >{`Naturally made Healthcare Products for the better care & support of your body.`}</div>
      <div className={styles.aboutgirlLp}>
        <div className={styles.maskGroup}>
          <img
            className={`${styles.pharmasictServingCustomerDrIcon} ${responsiveStyles.responsiveImage}`}
            alt=""
            src="/pharmasictservingcustomerdrugstore-1@2x.png"
          />
        </div>
        <img
          className={`${styles.aboutgirlLpChild} ${responsiveStyles.responsiveImage}`}
          alt=""
          src="/rectangle-407.svg"
        />
      </div>
      <section className={styles.groupSection}>
        <div className={styles.groupItem} />
      </section>
      <img
        className={`${styles.screenshot6692Icon} ${responsiveStyles.responsiveImage}`}
        alt=""
        src="/screenshot-669-2@2x.png"
      />
      <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      <Button
        className={`${styles.groupButton} ${responsiveStyles.responsiveButton}`}
        variant="solid"
        w="122px"
        colorScheme="teal"
      >
        Get In Touch
      </Button>
      <img
        className={`${styles.landingPageDesktopChild1} ${responsiveStyles.responsiveImage}`}
        alt=""
        src="/vector-2.svg"
      />
      <LatestArticlesSection
        imageAltText="/grilledtomatoes1846x846-1@2x.png"
        recipeTitle="Grilled  Tomatoes at Home"
        snackImageUrl="Snacks for Travel"
        imageDimensions="/mealprepideas846x846-1@2x.png"
        recipeImageUrl="Post-workout Recipes"
        imageDimensionsAltText="/mealprepideas846x846-11@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.aboutUsParent}>
            <h1 className={styles.aboutUs}>About Us</h1>
            <div className={styles.loremIpsumIs}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </div>
          </div>
        </div>
        <Button variant="solid" w="132px" colorScheme="teal">
          Read More
        </Button>
      </div>
      <div className={styles.div}>1/2</div>
      <div className={styles.image1TracedParent}>
        <img className={styles.image1Traced} alt="" src="/image-1-traced.svg" />
        <div className={styles.groupInner} />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-323.svg" />
      <section className={styles.rectangleSection} />
      <div className={styles.div1}>2/2</div>
      <div className={styles.image1TracedGroup}>
        <img
          className={styles.image1Traced}
          alt=""
          src="/image-1-traced1.svg"
        />
        <div className={styles.rectangleDiv} />
      </div>
      <img
        className={`${styles.landingPageDesktopChild2} ${responsiveStyles.responsiveImage}`}
        alt=""
        src="/group-325.svg"
      />
      <LatestArticlesSection
        imageAltText="/grilledtomatoes1846x846-11@2x.png"
        recipeTitle="How To Grill Corn"
        snackImageUrl="Crunchwrap Supreme"
        imageDimensions="/mealprepideas846x846-12@2x.png"
        recipeImageUrl="Broccoli Cheese Soup"
        imageDimensionsAltText="/mealprepideas846x846-13@2x.png"
        propLeft="1554px"
      />
    </div>
  );
};

export default LandingPageDesktop;
