function logText<T>(text: T): T {
  return text;
}

logText(10);
logText<string>("hello");
