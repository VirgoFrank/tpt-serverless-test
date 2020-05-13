
module.exports.hello = async (event) => ({
  statusCode: 200,
  headers: { 'Content-Type': 'text/html' },
  body:
        `<input type="number" id="a" value="56">
        <select id="Operation">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
          <option value=">">></option>
          <option value="<"><</option>
          <option value="=">=</option>
          <option value=">=">>=</option>
          <option value="<="><=</option>
        </select>
        <input type="number" id="b" value="9">
        <input type="submit" style="color:red;" value="=" onclick="fun()">
        <strong id="result">false</strong>
        <script>

        function fun(){
            var e = document.getElementById("Operation");
            let selected = e.options[e.selectedIndex].value;
            var result = document.getElementById("result");
            let a =parseInt(document.getElementById("a").value);
            let b = parseInt(document.getElementById("b").value);

            var math={
                "+":function(x,y) {return x+y},
                "-":function(x,y) {return x-y},
                "/":function(x,y) {return x/y},
                "*":function(x,y) {return x*y},
                ">":function(x,y) {return x>y},
                "<":function(x,y) {return x<y},
                ">=":function(x,y) {return x>=y},
                "<=":function(x,y) {return x<=y},
                "=":function(x,y) {return x==y}
            };
           result.innerHTML= math[selected](a,b);
        }
        

    </script>
        `,


});
