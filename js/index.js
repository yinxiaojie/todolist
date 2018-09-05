window.onload=function () {

    let arr1=["js","html","css","python"];
    let arr2=["页面","效果","动态","轮播"];


    let concat=document.querySelector(".concat");
    let content=document.querySelector(".concat .content");
    let con1=document.querySelector("#con1");
    let con2=document.querySelector("#con2");
    let input=document.querySelector("input");
    let num1=document.querySelector("#num1");
    let num2=document.querySelector("#num2");
    console.log(num2);
    function Update(){
        con1.innerHTML="";
        con2.innerHTML="";
        num1.innerText=arr1.length;
        num2.innerText=arr2.length;
        arr1.forEach((item,index)=>{
            let box=document.createElement("div");
            box.className="content";
            // let str=`<input type="checkbox"><p>${item}</p>
            // <div class="circle">
            //     <div class="before">-</div>
            // </div>`;
            // box.innerHTML=str;

            //点击上边去到下边
            let input1=document.createElement("input");
            input1.setAttribute("type","checkbox");
            input1.className="in";
            input1.onclick=function () {
                arr1.splice(index,1);
                arr2.unshift(item);
                Update();
            };
            let p=document.createElement("p");
            p.innerHTML=item;
            p.onclick=function () {
                let input=document.createElement("input");
                let text =p.innerText;
                input.value=text;
                p.innerText="";
                p.appendChild(input);
                input.focus();
                input.onblur=function () {
                    arr1.splice(index,1,input.value);
                    text=input.value;
                    Update();
                }
            };
            let circle=document.createElement("div");
            circle.className="circle";
            circle.onclick=function () {
                arr1.splice(index,1);
                Update();
            };
            let before=document.createElement("div");
            before.className="before";
            before.innerHTML="-";
            circle.appendChild(before);
            box.appendChild(input1);
            box.appendChild(p);
            box.appendChild(circle);
            con1.appendChild(box);
            

        });



        arr2.forEach((value,index)=>{
            let box=document.createElement("div");
            box.className="content";
            // let str=`<input type="checkbox" checked="checked"><p>${value}</p>
            // <div class="circle">
            //     <div class="before">-</div>
            // </div>`;
            // box.innerHTML=str;
            // con2.appendChild(box);
           //点击下边去了上边
            let input1=document.createElement("input");
            input1.setAttribute("type","checkbox");
            input1.className="in";
            input1.onclick=function () {
                arr2.splice(index,1);
                arr1.unshift(value);
                Update();
            };
            let p=document.createElement("p");
            p.innerHTML=value;
            p.onclick=function () {
                let input=document.createElement("input");
                let text =p.innerText;
                input.value=text;
                p.innerText="";
                p.appendChild(input);
                input.focus();
                input.onblur=function () {
                    arr2.splice(index,1,input.value);
                    text=input.value;
                    Update();
                }
            };

            let circle=document.createElement("div");
            circle.className="circle";
            circle.onclick=function () {
                arr2.splice(index,1);
                Update();
            };
            let before=document.createElement("div");
            before.className="before";
            before.innerHTML="-";
            circle.appendChild(before);
            box.appendChild(input1);
            box.appendChild(p);
            box.appendChild(circle);
            con2.appendChild(box);

        });
    }
    Update();
    input.onkeydown=function (e) {
        if(e.keyCode==13&&this.value!=""){
            arr1.unshift(this.value);
            this.value="";
        }
        Update();
    };

};