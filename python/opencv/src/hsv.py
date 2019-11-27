import cv2

import numpy as np

img = cv2.imread('./img/cars.png')
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

lower_white = np.array([0,0,150])
upper_white = np.array([100,255,255])

mask = cv2.inRange(hsv, lower_white, upper_white)

cv2.imshow('line',mask)
cv2.waitKey(10000)