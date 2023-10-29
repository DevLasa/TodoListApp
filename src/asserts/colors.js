//app common color handler
const AppColor = {
  BgColor: "#000000",
  white: "#ffffff",
  DrkYellow: "#f68054ff",
  Red: "#f20425ff",
};
// random color handler
const getRandomColor = () => {
  var letters = "BCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

export { AppColor, getRandomColor };
