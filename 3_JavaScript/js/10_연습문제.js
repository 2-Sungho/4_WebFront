// 색 출력 영역

// 요소를 얻어와 변수에 저장

// 클래스명, 태그명, name 속성 값, querySelectorAll() 같은 경우
// 요소를 얻어올 때 배열 형식으로 반환!!
const container=document.getElementsByClassName("container")[0];

const area=document.getElementsByClassName("area");
const box=document.getElementsByClassName("box");
const boxColor=document.getElementsByClassName("box-color")

// JS로 CSS 추가하기

// container 클래스요소에 display:flex
container.style.display="flex";

// area 클래스 요소에
// 높이 170px, 너비 150px, 테두리 1px 검정색 실선
// display : flex, main-axis 방향 : 열(세로)

for(let item of area){
    // item== area 배열에 담긴 요소를 순차적으로 하나씩 꺼내 저장하는 변수
    item.style.height="170px";
    item.style.width="150px";
    item.style.border="1px solid black";
    item.style.display="flex";
    item.style.flexDirection="column";
}

// box 클래스 요소에 높이150px, 아랫쪽 테두리 1px 실선 검정색
for(let item of box){
    item.style.height="150px";
    item.style.borderBottom="1px solid black";
}

// box-color 클래스 요소의 테두리와 outline을 없애기
for(let item of boxColor){
    item.style.border="none";
    item.style.outline="none";
}

// box-color 클래스 요소의 입력된 값이 변했을 때
// 위에 있는 box 클래스 요소의 배경색을 변경
for(let i=0;i<boxColor.length;i++){
    // change : 포커스를 잃고나서 또는 엔터 입력 시
    //          작성된 값이 이전과 다를 경우

    // blur : 포커스를 잃었을 때
    boxColor[i].addEventListener("change",function(){
        // box-color input태그와 같은 인덱스 번째 box 요소 배경색 변경
        box[i].style.backgroundColor=boxColor[i].value;
        boxColor[i].style.color=boxColor[i].value;
    })
}

const btn1=document.getElementById("btn1");
const input1=document.getElementById("input1");
const print1=document.getElementById("print1");

btn1.addEventListener("click",function(){
    
    for(let i=0;i<box.length;i++){
        box[i].style.transitionDuration=input1.value+"s";
    }

   print1.innerText=input1.value;
})

// #clearBtn 클릭 시
// .box의 모든 배경색을 없애고
// .box-color에 작성된 값도 없애기

document.getElementById("clearBtn").addEventListener("click",function(){
    for(let item of box){ // box 배경색 삭제
        item.style.backgroundColor="";
    }

    for(let item of boxColor){ // .box-color 값 삭제
        item.boxColor.style.color="";
    }

})
