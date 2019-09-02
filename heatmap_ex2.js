//d3.js에서 csv파일 사용하기

/*참고자료(1)*/ //https://blog.naver.com/wideeyed/221120158854
/*
d3.csv("./heatmap_xy.csv",
 function(error, data){
   myProcess(error, data);
 }
);

function myProcess(error, data){
  console.log("# myProcess Called")
  if(error) throw error;
  console.log("data:")
  console.log(data);
  console.log("data.columns")
  console.log(data.columns)
  console.log("data.columns.slice(1):")
  console.log(data.columns.slice(1))
  console.log("data.columns.slice(2):")
  console.log(data.columns.slice(2))
  console.log("=======================")
}
*/


/*참고자료(2)*/ //https://blog.naver.com/zero_kjy/220787555507

d3.csv("heatmap_xy.csv", type, function(error, data){
  if(error) throw error;

  data.forEach(function(d){
    console.log(d.x + d.y); //문자->숫자 | 형변환 확인
  });
});

function type(d){
  d.x=+d.x; //parseFloat(d.x);
  d.y=+d.y; //parseFloat(d.y);

  return d;
}
