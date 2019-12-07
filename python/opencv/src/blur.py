import cv2

img = cv2.imread('./img/sample.png')
gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
cv2.imshow('gray',gray)

blur = cv2.GaussianBlur(gray,(5,5),0)
cv2.imshow('blur',blur)

cv2.waitKey(10000)