  var container=document.createElement("div");
  container.setAttribute("class","container");
  var row=document.createElement("div");
    row.setAttribute("class","row");
     container.append(row);

    var res=fetch("https://anapioficeandfire.com/api/characters/583");
    res.then((data)=>data.json()).then((data1)=>foo(data1));
    function foo(data1){
    row.innerHTML+= `Name :${data1.name}<br>
    Gender : ${data1.gender}<br>
    Title : ${data1.titles}<br>
    Culture : ${data1.culture}<br>
    Born : ${data1.born}`;
    document.body.append(container);
}
