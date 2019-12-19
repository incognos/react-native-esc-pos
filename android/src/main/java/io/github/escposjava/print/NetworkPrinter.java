package io.github.escposjava.print;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.SocketAddress;
import java.net.SocketException;

public class NetworkPrinter implements Printer {
   private OutputStream printer = null;
   private final String address;
   private final int port;
   private Socket socket;

   public NetworkPrinter(String address, int port){
      this.address = address;
      this.port = port;
      this.socket = new Socket();
   }

   public void open() throws IOException {
      InetAddress address = InetAddress.getByName(this.address);
      SocketAddress socketAddress = new InetSocketAddress(address, port);
      socket.connect(socketAddress, 3000);
      socket.setKeepAlive(true);
      socket.setSoTimeout(3000);
      socket.setTcpNoDelay(true);
      printer = socket.getOutputStream();
   }

   public void write(byte[] command) throws IOException {
      printer.write(command);
   }

   public void close() throws IOException {
      printer.close();
   }

}
