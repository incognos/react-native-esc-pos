package io.github.escposjava;

import java.io.IOException;

import io.github.escposjava.print.NetworkPrinter;
import io.github.escposjava.print.Printer;

public class App {

   public static void main(String[] args){
      Printer printer = new NetworkPrinter("192.168.0.100", 9100);
      PrinterService printerService = null;
      try {
         printerService = new PrinterService(printer);

         printerService.print("Test text");

         printerService.close();
      } catch (IOException e) {
         e.printStackTrace();
      }
   }
}
