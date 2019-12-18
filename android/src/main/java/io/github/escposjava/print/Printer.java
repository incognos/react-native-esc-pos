package io.github.escposjava.print;

import java.io.IOException;

public interface Printer {
   void open() throws IOException;

   void write(byte[] command) throws IOException;

   void close() throws IOException;
}
