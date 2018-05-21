export class CommonTool {
  public static sleep(milliseconds) {
    let start: number;
    start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
}
