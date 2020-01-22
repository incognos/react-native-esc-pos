declare module "react-native-esc-pos" {
  namespace EscPos {
    function addListener(eventNameEventName, cb: () => void): void;
    function setConfig(config): Promise<void>;
    function setPrintingSize(
      size: "PRINTING_SIZE_80_MM" | "PRINTING_SIZE_58_MM"
    ): Promise<void>;
    function setCharsOnLine(charsOnLine: number): Promise<void>;
    function setTextDensity(density: number): Promise<void>;
    function connect(addressstring, portnumber): Promise<void>;
    function disconnect(): Promise<void>;
    function cutPart(): Promise<void>;
    function cutFull(): Promise<void>;
    function lineBreak(): Promise<void>;
    function print(textstring): Promise<void>;
    function printLn(textstring): Promise<void>;
    function printBarcode(
      codestring,
      bcstring,
      widthnumber,
      heightnumber,
      posstring,
      fontstring
    ): Promise<void>;
    function printDesign(textstring): Promise<void>;
    function printImage(filePathstring): Promise<void>;
    function printQRCode(valuestring, sizenumber): Promise<void>;
    function printSample(): Promise<void>;
    function write(commandBuffer): Promise<void>;
    function alignLeft(): Promise<void>;
    function alignCenter(): Promise<void>;
    function alignRight(): Promise<void>;
    function createDivider(): Promise<void>;
    function createDivider(char: string): Promise<void>;
    function setCharset(
      charset: "IBM437" | "IBM850" | "IBM00858" | "windows-1252"
    ): Promise<void>;
    var PRINTING_SIZE_80_MM;
    var PRINTING_SIZE_58_MM;
  }

  type EventName = "bluetoothStateChanged" | "bluetoothDeviceFound";
}
