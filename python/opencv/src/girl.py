import cv2

img = cv2.imread('./img/girl.png',cv2.IMREAD_COLOR)
img2 = cv2.imread('./img/girl.png')
img3 = cv2.imread('./img/girl.png',cv2.IMREAD_GRAYSCALE)

cv2.imshow('My Girl',img)
cv2.imshow('My Girl2',img2)
cv2.imshow('My Girl3',img3)

print(len(img),len(img[0]),img[0][0])
print(len(img2),len(img2[0]),img2[0][0])
print(len(img3),len(img3[0]),img3[0][0])

# print result
# 512 512 [125 137 226]
# 512 512 [125 137 226]
# 512 512 169

cv2.imwrite('./img/gray_girl.png',img3)

cv2.waitKey(0)
cv2.destroyAllWindows()