const data = [1, 2, 4];

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "number":
    console.log(isNaN(data) ? "not a number!" : "number!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "function":
    console.log("function!");
    break;
  case "object":
    console.log(
      data === null ? "null!" : Array.isArray(data) ? "array!" : "object!"
    );
    break;
  default:
    console.log("I have no idea");
}
