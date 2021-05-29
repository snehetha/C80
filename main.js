var names_array=[];
function Submit(){
var display_array=[];
for(var j=1;j<=4;j++){
    var name=document.getElementById("Student_"+j).value;
    names_array.push(name);
}
var len_array=names_array.length;
for(var k=1;k<=len_array;k++){
    display_array.push("<h4> name-"+names_array[k]+"</h4>");
}
document.getElementById("names_with_commas").innerHTML=display_array;
var remove_commas=display_array.join(" ") ;
document.getElementById("names_without_commas").innerHTML=remove_commas;
    document.getElementById("sub").style.display="none";
    document.getElementById("sor").style.display="inline-block";
}
function sorting(){
        names_array.sort();
        var display_sort=[];
        var len_array=names_array.length;
        for(var k=1;k<=len_array;k++){
            display_sort.push("<h4> name-"+names_array[k]+"</h4>");
                }
    var remove_commas=display_sort.join(" ");
    document.getElementById("names_without_commas").innerHTML=remove_commas;
}