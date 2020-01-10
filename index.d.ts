declare module "react-native-esc-pos" {
  interface LayoutBuilder {}
  interface EscPos {
    addListener: (eventName: EventName, cb: () => void) => void;
    connect: (address: string, port: number) => void;
    cutPart: () => Promise<void>;
    cutFull: () => Promise<void>;
    lineBreak: () => Promise<void>;
    print: (text: string) => Promise<void>;
    printLn: (text: string) => Promise<void>;
    printBarcode: (
      code: string,
      bc: string,
      width: number,
      height: number,
      pos: string,
      font: string
    ) => Promise<void>;
    printDesign: (text: string) => Promise<void>;
    printImage: (filePath: string) => Promise<void>;
    printQRCode: (value: string, size: number) => Promise<void>;
    printSample: () => Promise<void>;
    write: (command: Buffer) => Promise<void>;
    alignLeft: () => Promise<void>;
    alignCenter: () => Promise<void>;
    alignRight: () => Promise<void>;
  }

  type EventName = "bluetoothStateChanged" | "bluetoothDeviceFound";
}
