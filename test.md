### ㅤ

| 메소드 | 경로                                        | 설명      |
| ------ | ------------------------------------------- | --------- |
| GET    | /product/recommane| 추천 작품|


#### ㅤ
## Response

### < Success >
```json
{
    "status": 200,
    "success": true,
    "message": "추천 작품 조회",
    "data" : {
        "product : [
            {
                "productIdx" : 1,
                "name" : "베리베리 미니멀 파우치",
                "img" : " ",
                

            }
        ]
    }
}
```

#### ㅤ
### < Fail >

- 아이디 중복

```json
{
    "status": 200,
    "success": false,
    "message": "존재하는 ID 입니다."
}
```


- 데이터 누락 
```json
{
    "status": 400,
    "success": false,
    "message": "필요한 값이 없습니다. phone"
}
```
### ㅤ
### ㅤ