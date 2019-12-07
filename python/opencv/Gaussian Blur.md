# Gaussian Blur

## code

```python
import cv2

img = cv2.imread('./img/sample.png')
gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
cv2.imshow('gray',gray)

blur = cv2.GaussianBlur(gray,(5,5),0)
cv2.imshow('blur',blur)

cv2.waitKey(10000)
```
## description

```
각 픽셀에 a X a 사이즈의 윈도를 올려놓고
그 영역 안에 포함된 값을 모두 더한 뒤, 이것을 a X a로 나눈다.
이건 인접한 점들의 밝기의 산술평균이 된다.

따라서, 이 a X a 사이즈가 더 커질수록 더 부드러운 blur를 얻게된다.

아직 정확하게 가우시안 필터가 작동되는지 이해가 안간다.
단지 이미지에 있는 튀는 값들, 노이즈를 제거해주고 이미지가 흐려진다는 것만 이해간다.
```