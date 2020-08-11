

function click1(){
    var str =null
    str = document.getElementById("age").value
    if(str>=151 || str<=0){
        alert("please enter a valid age")
    }
    else{
        window.location.href="assessment.html"
    }
    
}

function click2(){
    var result =0
    var ch = 0
    var fe = document.getElementById("fever")
    var dc = document.getElementById("dry caugh")
    var st = document.getElementById("sore throat")
    var no = document.getElementById("parent")

    if(fe.checked == true){
        result = result + 5
        ch=ch+1
    }
    if(dc.checked == true){
        result = result + 2
        ch=ch+1
    }
    if(st.checked == true){
        result = result + 2
        ch=ch+1
    }
    if(no.checked == true){
        ch=ch+1
    }
    if(ch==0){
        alert("please select the required element ")
    }
    else{
        localStorage.setItem("myvalue", result )
        window.location.href="assessment2.html"
    }
}

function click3(){
    var re
    var result =localStorage.getItem("myvalue")
    var ye = document.getElementById("rd1")
    var no = document.getElementById("rd2")
    if(ye.checked==true){
        re=Number(result) + 7
        localStorage.setItem("myvalue",re)
        window.location.href="assement3.html"
    }
    else if(no.checked==true){
        window.location.href="assement3.html"
    }
    else{
        alert("please select the required element ")
    }
}


function click4(){
    var re
    var result =localStorage.getItem("myvalue")
    var ye = document.getElementById("rd3")
    var no = document.getElementById("rd4")
    if(ye.checked==true){
        re=Number(result) + 7
        localStorage.setItem("myvalue",re)
        window.location.href="assessment4.html"
    }
    else if(no.checked==true){
        window.location.href="assessment4.html"
    }
    else{
        alert("please select the required element ")
    }
}

function click5(){
    var re =localStorage.getItem("myvalue")
    var result =Number(re) 
    var ch = 0
    var di = document.getElementById("diabetes")
    var he = document.getElementById("Heart disease")
    var lu = document.getElementById("lung disease")
    var no = document.getElementById("parent")
    if(di.checked == true){
        result = result + 2
        ch=ch+1
    }
    if(he.checked == true){
        result = result + 2
        ch=ch+1
    }
    if(lu.checked == true){
        result = result + 2
        ch=ch+1
    }
    if(no.checked == true){
        ch=ch+1
    }
    if(ch==0){
        alert("please select the required element ")
    }
    else{
        localStorage.setItem("myvalue", result )
        window.location.href="assesment5.html"
    }
}

function click6(){
    var re
    var result =localStorage.getItem("myvalue")
    var al = document.getElementById("rd5")
    var ye = document.getElementById("rd6")
    var no = document.getElementById("rd7")
    if(al.checked==true){
        re=Number(result) + 3
        localStorage.setItem("myvalue",re)
        window.location.href="assessment6.html"
    }
    else if(ye.checked==true){
        re=Number(result) + 2
        localStorage.setItem("myvalue",re)
        window.location.href="assessment6.html"
    }
    else if(no.checked==true){
        window.location.href="assessment6.html"
    }
    else{
        alert("please select the required element ")
    }
}

function click7(){
    var re
    var result =localStorage.getItem("myvalue")
    var ye = document.getElementById("rd8")
    var no = document.getElementById("rd9")
    if(ye.checked==true){
        re=Number(result) + 3
        localStorage.setItem("myvalue",re)
        window.location.href="assessment7.html"
    }
    else if(no.checked==true){
        window.location.href="assessment7.html"
    }
    else{
        alert("please select the required element ")
    }
}

