# simple-web3-example
각종 Onchain data에 접근하는 예제(feat. infura.io, 나중엔 node를 직접 띄우는방법을 포함한 예제를 작성할 예정)

## Onchain data parsing
웹개발자가 처음 onchain 데이터를 읽으려 하면 생각보다 어려울 수 있다. 다음과 같은 장애 요소가 있기 때문.
1. node를 띄워야 한다
2. 통신 시, TCP가 아닌 UDP를 쓴다
2번은 다양한 라이브러리가 잘 나와있어서 다행이지만, 1번은 quick start를 보고 따라해도 실패할 가능성이 있다. 하드웨어 최소성능 요구사항이 높은 경우가 많다.

### infura.io의 노드 이용하기
메인넷 별로 node 다 띄울 돈이 없다면, infura.io를 쓰자. 우선 읽고 싶은 onchain data가 [infura에서 proxy node를 제공하는지 확인](https://docs.infura.io/#browse-by-networks)해야 한다.

1. [infura.io 사이트](https://app.infura.io)에 접속 및 가입
2. (Optional) 키발급
3. 발급된 키 확인
4. environments를 수정하고 테스트
