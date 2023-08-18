const formatString = function (string) {
  console.log(string.length);
    let maxLengthString = 40;

    if (string.length > maxLengthString) {
      string = string.slice(0, 40) + "...";
    }
  
    return string;
  };
  
  console.log(formatString("Curabitur ligula sapien, tincidunt non."));
  console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
  console.log(formatString("Curabitur ligula sapien."));
  console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));
  