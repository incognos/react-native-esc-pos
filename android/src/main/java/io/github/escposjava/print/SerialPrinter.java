package io.github.escposjava.print;

import com.pi4j.io.serial.Serial;
import com.pi4j.io.serial.SerialFactory;

import java.io.IOException;

public class SerialPrinter implements Printer {

   private final Serial printer = SerialFactory.createInstance();
   private final String address;
   private final int baudRate;

   public SerialPrinter(String address, int baudRate){
      this.address = address;
      this.baudRate = baudRate;
   }
   public void open() throws IOException {
      printer.open(this.address, this.baudRate);
   }

   public void write(byte[] command) throws IOException {
      for (byte b : command){
         printer.write(b);
      }
   }

   public void close() throws IOException {
      printer.close();
   }

}
