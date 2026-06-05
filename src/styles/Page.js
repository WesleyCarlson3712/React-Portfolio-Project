// Layout styles reused across pages. Keep these minimal and theme-friendly.
export const pageContainer = {
    backgroundColor: "#dfdfdf",
    padding: "3rem",
    paddingBottom: "3rem",
    width: "50rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    flex: "1 0 auto",
    boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, 0.3), inset -5px -5px 10px rgba(0, 0, 0, 0.3)",
  };
// Inner container used for the content card on each page.
export const innerPageContainer = {
    padding: "2rem",
    gap: "1rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    border: "solid 1px black",
    boxSizing: "border-box",
    flex: "1 0 auto",

};
// `projectBox` is a helper that returns a style object. Pass "row" or "column" to
// control whether the project is laid out horizontally or vertically.
export const projectBox = (direction = "row") => ({
  display: "flex",
  flexDirection: direction,
  // Use `flex-start` to align children at the top/start of the cross axis.
  alignItems: "flex-start",
  border: "solid 1px black",
  padding: "1rem",
  gap: "1rem",
  backgroundColor: "#dfdfdf",
});
// `textContainer` keeps headings and paragraphs centered in most places.
export const textContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "1rem",
};
// Container used on the Contact page: left-aligned content for links/addresses.
export const contactTextContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
  border: "solid 1px black",
  padding: "1rem",
};