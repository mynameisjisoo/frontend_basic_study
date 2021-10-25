{
  let options = {
    title: 'Menu',
    width: 100,
    height: 200
  };

  //{객체 프로퍼티의 패턴}={분해하고자 하는 객체}
  let { width, title, height } = options;
  console.log(title, width, height); // Menu 100 200
}

{
  let options = {
    title: 'Menu',
    width: 100,
    height: 200
  };

  let { width: w, height: h, title } = options; //프로퍼티 width를 변수 w에 저장
  console.log(title, w, h); // Menu 100 200
}

//프로퍼티 없는 경우 기본값 설정 가능
{
  let options = {
    title: 'Menu'
  };

  let { width = 100, height = 200, title } = options;

  console.log(title, width, height); // Menu 100 200
}

//프로퍼티가 많은 복잡한 객체에서 원하는 정보 뽑아오기
{
  let options = {
    title: 'Menu',
    width: 100,
    height: 200
  };

  let { title } = options;
  console.log(title); //Menu
}

//sample.json에서 원하는 정보 뽑아오기
{
  let items = {
    kind: 'youtube#video',
    id: 'id_1',
    snippet: {
      channelId: 'snippet_channelId_1',
      title: 'Apple Event — October 18',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/exM1uajp--A/default.jpg',
          width: 120,
          height: 90
        }
      },
      channelTitle: 'Apple'
    }
  };

  let {
    snippet: { channelTitle }
  } = items;
  console.log(channelTitle);
}
