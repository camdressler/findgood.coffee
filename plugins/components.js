module.exports = function ({ addComponents }) {
  const searchBox = {
    ".msbx": {
      outline: "none",
      borderColor: "transparent",
      opacity: 0.5,
      backgroundColor: "brown-100",
      "&:hover:focus:active": {
        opacity: 0.6,
        backgroundColor: "brown-100",
      },
    },
  };

  addComponents(searchBox);
};
