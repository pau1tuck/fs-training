function tsHideString(str: string): string {
  return str.replace(/[a-zA-Z]/g, "X");
}

const tsHidden = tsHideString("Hello World");

console.log(tsHidden);
