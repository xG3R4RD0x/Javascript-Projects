
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferByte;
import java.awt.image.WritableRaster;
import java.io.FileNotFoundException;
import java.io.IOException;

import javax.swing.GroupLayout.Group;
import javax.swing.text.html.ImageView;

import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.videoio.VideoCapture;

import javafx.scene.Scene;
import javafx.scene.image.WritableImage;
import javafx.stage.Stage;
public class update  extends Application {

    // TODO Auto-generated method stub
       Mat matrix = null;
       public void start(Stage stage) throws FileNotFoundException, IOException {
          update o = new update();
          WritableImage Imgw = o.capureSnapShot();
          o.saveImage();
          ImageView img = new ImageView(Imgw);
          img.setFitHeight(400);
          img.setFitWidth(600);
          img.setPreserveRatio(true);
          Group r = new Group(img);
          Scene s = new Scene(r, 600, 400);
          stage.setTitle("Capturing an image");
          stage.setScene(s);
          stage.show();
       }
       public WritableImage capureSnapShot() {
          WritableImage WritableImage = null;
          System.loadLibrary( Core.NATIVE_LIBRARY_NAME );
          VideoCapture c = new VideoCapture(0);
          Mat matrix = new Mat();
          c.read(matrix);
          if( c.isOpened()) {
               if (c.read(matrix)) {
                BufferedImage image = new BufferedImage(matrix.width(), 
                   matrix.height(), BufferedImage.TYPE_3BYTE_BGR);
                
                WritableRaster raster = image.getRaster();
                DataBufferByte dataBuffer = (DataBufferByte) raster.getDataBuffer();
                byte[] d = dataBuffer.getData();
                matrix.get(0, 0, d);
                this.matrix = matrix;
                WritableImage = SwingFXUtils.toFXImage(image, null);
             }
          }
          return WritableImage;
       }
       public void saveImage() {
          String f = "c:/opencv/i.jpg";
              Imgcodecs imageCodecs = new Imgcodecs();
              imageCodecs.imwrite(f, matrix);
       }
       public static void main(String args[]) {
          launch(args);
        }
}
