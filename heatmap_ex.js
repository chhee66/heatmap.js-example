//https://www.patrick-wied.at/static/heatmapjs/examples.html

var config = {
  // only container is required, the rest will be defaults
  container: document.querySelector('.heatmap'),   //DOM node 중 heatmap이 추가될 위치
  /*backgroundColor : 'black',  //배경색
  gradient : {
    //enter n keys between 0 and 1 here
    //for gradient color customization
    '.3':'yellow',
    '.8':'red',
    '.85':'white'
  },*/
  opacity : .7, //투명
  blur : .6     //클수록 경계가 불분명(?)
};
// minimal heatmap instance configuration
var heatmapInstance = h337.create(config);               //heatmap객체 생성



// now generate some random data
var points = []; //좌표의 배열
var max = 0; //(?)의 최대값
var width = 840; //heatmap이 흩뿌려지는 너비      >>클수록 밀도가 낮다.
var height = 400; //heatmap이 흩뿌려지는 높이     >>클수록 밀도가 낮다.
var len = 200; //len만큼의 랜덤한 값이 만들어진다.

while (len--) {
  var val = Math.floor(Math.random()*100); //100이하의 정수를 얻음. -> 이 수치가 높으면 빨간색에 가까움.
   //Math.random()은 0과 1사이의 소숫점 이하 16자리의 실수(float)를 반환 (ex 0.7467996492054965)
  max = Math.max(max, val); //max와 val 중 최대값을 반환.
  //max=0으로 시작하는데..? max는 왜 있는거지?
  var point = {
    x: Math.floor(Math.random()*width), //x좌표 : width이하의 정수를 얻음
    y: Math.floor(Math.random()*height), //y좌표 : height이하의 정수를 얻음
    value: val  //값
  };
  points.push(point); //배열에 len개의 point를 저장한다.
}

// heatmap data format
var data = {
  max: max, //point들의 value값들 중 가장 큰 값
  data: points //len개의 point
};
// if you have a set of datapoints always use setData instead of addData
// for data initialization
heatmapInstance.setData(data);
