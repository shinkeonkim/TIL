import cv2

"""
디렉토리를 python/opencv로 설정하고 실행
검정 배경 이미지에
도형 그리기
"""

img = cv2.imread('./img/black.png',cv2.IMREAD_COLOR)

# 직선 그리기
img = cv2.line(img,(50,50),(150,150),(0,255,0),10)

# 직사각형 그리기 
# (x1, y1) , (x2,y2) , BGR , thickness
img = cv2.rectangle(img, (100,100),(300,400),(255,0,0),3)

# 원 그리기
img = cv2.circle(img,(300,400),100,(0,0,255),2)

# 텍스트
cv2.putText(img,'Test Text',(10,100),cv2.FONT_HERSHEY_SIMPLEX,4,(255,255,255))

cv2.imshow('black',img)

cv2.imwrite('./result/new_black.png',img)

cv2.waitKey(10000)