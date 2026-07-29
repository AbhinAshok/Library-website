import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-4EY1SNJF5C";

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const pageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};