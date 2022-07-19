from sre_constants import SUCCESS
import cv2
import mediapipe as mp
import time

cap=cv2.VideoCapture(0)

while True:
    SUCCESS, image=cap.read() #cap.read regresa 2 valores el primero es para ver si funciona
                            #y es un boolean para success y el segundo es el frame
    cv2.imshow("test", image)

    if cv2.waitKey(10) & 0xFF==ord('q'):
        break

cap.release()
cv2.destroyAllWindows()




