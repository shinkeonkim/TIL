# imread, imshow, imwrite

```python
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

cv2.waitKey(0)
cv2.destroyAllWindows()
```

- imread(filename, flags)  
```
이미지 파일을 읽어들일 때는 imread를 사용한다.
flags에는 cv2.IMREAD_COLOR, cv2.IMREAD_GRAYSCALE 등이 들어간다.
GRAYSCALE로 변환하면 image 객체(사실상 배열)에서 한 픽셀에 정수값 하나만 저장되어있다.
COLOR는 BGR의 순서로 배열이 저장되어있다. type이 <type 'numpy.ndarray'> 로 나온다.
```

- imshow(window_title, image)
```
이미지 파일을 화면에 표시할때는 imshow를 사용한다.
window_title은 말 그대로 화면창의 제목부분이고,  image는 화면에 표시할 img 객체가 들어간다.
```

- imwrite(filename, image)
```
이미지 객체를 파일로 저장할때는 imwrite를 사용한다.
저장할 파일의 이름은 filename부분에 (디렉토리도 같이 명세할 수 있음!), 저장할 객체는 image 부분에 들어간다.
```
