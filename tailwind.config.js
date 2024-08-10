/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",

  variants: {
    extend: {
      borderColor: ['active'],
    },
  },

  theme: {
    screens: {
      'wideScreen': { 'min': '1600px' },
      'desktop': { 'min': '1366px', 'max': '1599px' },
      'tablet': { 'min': '1024px' },
      'mobile': { 'min': '320px', 'max': '1023px' },
    },

    extend: {
      colors: {
        bodyBackgroundColor: "var(--body-background-color)",
        mobileBackgroundColor: "var(--mobile-background)",
        tabletBackground: "var(--tablet-background)",
        navigationItemBackgroundColor: "var(--navigation-item-background-color)",
        navigationItemBackgroundHoverColor: "var(--navigation-item-background-hover-color)",
        navigationItemFontColor: "var(--navigation-item-font-color)",
        navigationItemFontHover: "var(--navigation-item-font-hover-color)",
        headerFontColor: "var(--header-font-color)",
        subHeaderFontColor: "var(--sub-header-font-color)",
        buttonTextColor: "var(--button-text-color)",
        buttonTextHoverColor: "var(--button-text-hover-color)",
        buttonBackgroundColor: "var(--button-background-color)",
        buttonBackgroundHoverColor: "var(--button-background-hover-color)",
      },

      width: {
        mobileWidth: "var(--mobile-width)",
        mobileNavigationItemMinWidth: "var(--mobile-navigation-item-min-width)",
        mobileNavigationItemMaxWidth: "var(--mobile-navigation-item-max-width)",
        tabletNavigationItemMinWidth: "var(--tablet-navigation-item-min-width)",
        tabletNavigationItemMaxWidth: "var(--tablet-navigation-item-max-width)",
        desktopNavigationItemMinWidth: "var(--desktop-navigation-item-min-width)",
        desktopNavigationItemMaxWidth: "var(--desktop-navigation-item-max-width)",
        wideScreenNavigationItemMinWidth: "var(--wide-screen-navigation-item-min-width)",
        wideScreenNavigationItemMaxWidth: "var(--wide-screen-navigation-item-max-width)",
        mobileLogoSize: "var(--mobile-logo-size)",
        tabletLogoSize: "var(--tablet-logo-size)",
        desktopLogoSize: "var(--desktop-logo-size)",
        wideScreenLogoSize: "var(--wide-screen-logo-size)",
        navigationWidth: "var(--navigation-width)",
        hamburgerMenuWidth: "var(--hamburger-menu-width)",
        mobileNavigationIconWidth: "var(--mobile-navigation-icon-width)",
        heroSectionWidth: "var(--hero-section-width)",
        productSectionWidth: "var(--product-section-width)",
      },

      height: {
        mobileNavigationHeight: "var(--mobile-navigation-height)",
        tabletNavigationHeight: "var(--tablet-navigation-height)",
        desktopNavigationHeight: "var(--desktop-navigation-height)",
        wideScreenNavigationHeight: "var(--wide-screen-navigation-height)",
        heroSectionHeight: "var(--hero-section-height)",
        productSectionHeight: "var(--product-section-height)",
        mobileSectionHeight: "var(--mobile-section-height)",
        tabletSectionHeight: "var(--tablet-section-height)",
        desktopSectionHeight: "var(--desktop-section-height)",
        wideScreenSectionHeight: "var(--wide-screen-section-height)",
      },

      margin: {
        mobileNavigationItemHorizontalMargin: "var(--mobile-navigation-item-horizontal-margin)",
        mobileNavigationItemVerticalMargin: "var(--mobile-navigation-item-vertical-margin)",
        mobileNavigationMarginBottom: "var(--mobile-navigation-margin-bottom)",
        tabletNavigationMarginBottom: "var(--tablet-navigation-margin-bottom)",
        desktopNavigationMarginBottom: "var(--desktop-navigation-margin-bottom)",
        wideScreenNavigationMarginBottom: "var(--wide-screen-navigation-margin-bottom)",
        mobileSectionMarginBottom: "var(--mobile-section-margin-bottom)",
        tabletSectionMarginBottom: "var(--tablet-section-margin-bottom)",
        desktopSectionMarginBottom: "var(--desktop-section-margin-bottom)",
        wideScreenSectionMarginBottom: "var(--wide-screen-section-margin-bottom)",
      },

      padding: {
        mobileNavigationItemHorizontalPadding: "var(--mobile-navigation-item-horizontal-padding)",
        mobileNavigationItemVerticalPadding: "var(--mobile-navigation-item-vertical-padding)",
        tabletNavigationItemHorizontalPadding: "var(--tablet-navigation-item-horizontal-padding)",
        tabletNavigationItemVerticalPadding: "var(--tablet-navigation-item-vertical-padding)",
        desktopNavigationItemHorizontalPadding: "var(--desktop-navigation-item-horizontal-padding)",
        desktopNavigationItemVerticalPadding: "var(--desktop-navigation-item-vertical-padding)",
        wideScreenNavigationItemVerticalPadding: "var(--wide-screen-navigation-item-horizontal-padding)",
        wideScreenNavigationItemVerticalPadding: "var(--wide-screen-navigation-item-vertical-padding)",
        mobileNavigationXPadding: "var(--mobile-navigation-x-padding)",
        tabletNavigationXPadding: "var(--tablet-navigation-x-padding)",
        desktopeNavigationXPadding: "var(--desktop-navigation-x-padding)",
        wideScreenNavigationXPadding: "var(--wide-screen-navigation-x-padding)",
      },

      fontFamily: {
        navigationFontFamily: "var(--navigation-font-family)",
        headerFontFamily: "var(--header-font-family)",
        subHeaderFontFamily: "var(--sub-header-font-family)",
      },

      fontSize: {
        mobileHeaderMinFontSize: "var(--mobile-header-min-font-size)",
        mobileHeaderMaxFontSize: "var(--mobile-header-max-font-size)",
        tabletHeaderMinFontSize: "var(--tablet-header-min-font-size)",
        tabletHeaderMaxFontSize: "var(--tablet-header-max-font-size)",
        desktopHeaderMinFontSize: "var(--desktop-header-min-font-size)",
        desktopHeaderMaxFontSize: "var(--desktop-header-max-font-size)",
        desktopHeaderFontSize: "var(--desktop-header-font-size)",
        desktopSubHeaderFontSize: "var(--sub-header-font-size)",
        wideScreenHeaderMinFontSize: "var(--wide-screen-header-min-font-size)",
        wideScreenHeaderMaxFontSize: "var(--wide-screen-header-max-font-size)",
        mobileNavigationMinFontSize: "var(--mobile-navigation-min-font-size)",
        mobileNavigationMaxFontSize: "var(--mobile-navigation-max-font-size)",
        tabletNavigationMinFontSize: "var(--tablet-navigation-min-font-size)",
        tabletNavigationMaxFontSize: "var(--tablet-navigation-max-font-size)",
        desktopNavigationMinFontSize: "var(--desktop-navigation-min-font-size)",
        desktopNavigationMaxFontSize: "var(--desktop-navigation-max-font-size)",
        wideScreenNavigationMaxFontSize: "var(--wide-screen-navigation-max-font-size)",
        wideScreenNavigationMaxFontSize: "var(--wide-screen-navigation-max-font-size)",
        smallParagraphFontSize: "var(--small-paragraph-font-size)",
        bigParapraphFontSize: "var(--big-paragraph-font-size)",
      },

      fontWeight: {
        navigationFontWeight: "var(--navigation-font-weight)",
        headerFontWeight: "var(--header-font-weight)",
        subHeaderFontWeight: "var(--sub-header-font-weight)",
        smallParagraphFontWeight: "var(--small-paragraph-font-weight)",
        bigParagraphFontWeight: "var(--big-paragraph-font-weight)",
      },

      borderWidth: {
        borderWidth: "var(--border-width)",
      },

      borderColor: {
        borderColor: "var(--border-color)",
        borderColorHover: "var(--border-color-hover)",
      },

      borderStyle: {
        borderStyle: "var(--border-style)",
      },

      boxShadow: {
        'custom-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },

      backdropFilter: {
        'custom-glass': 'blur(10px)',
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        '.backdrop-filter-custom': {
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        },
        '.border-custom': {
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
        '.shadow-custom': {
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
