import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.contactUsParent}>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.loremIpsumPvtLtd51MagalParent}>
            <div className={styles.loremIpsumPvt}>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </div>
            <div className={styles.example2020gmailcom}>
              example2020@gmail.com
            </div>
            <div className={styles.div}>(904) 443-0343</div>
          </div>
        </div>
        <div className={styles.moreParent}>
          <div className={styles.more}>More</div>
          <div className={styles.socialLinks}>Social Links</div>
          <div className={styles.productsParent}>
            <div className={styles.products}>Products</div>
            <div className={styles.career}>Career</div>
            <div className={styles.contactUs1}>Contact Us</div>
            <div className={styles.aboutUs}>About Us</div>
          </div>
        </div>
        <div className={styles.foodTruckExampleWrapper}>
          <div className={styles.foodTruckExample}>
            © 2022 Food Truck Example
          </div>
        </div>
      </div>
      <img className={styles.componentIcon} alt="" src="/component.svg" />
      <img className={styles.componentIcon1} alt="" src="/component1.svg" />
      <img className={styles.componentIcon2} alt="" src="/component2.svg" />
    </section>
  );
};

export default ContactSection;
