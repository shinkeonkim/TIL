import cv2

img = cv2.imread('./img/girl.png',cv2.IMREAD_COLOR)

cv2.imshow('My Girl',img)

cv2.waitKey(0)
cv2.destroyAllWindows()