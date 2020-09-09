document.write("<pre> <br>");
for (y = 0; y <= 10; y++){
    for(x = 0; x <=10; x++){
        if(x <= y && y + x <= 10 || x >= y && y + x >= 10 ){
            document.write("*");
        }else{
            document.write(" ");
        }

    }
    document.write("<br>")
}
document.write("</pre>")