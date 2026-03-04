

        function addNumber(num) {
            document.getElementById("result").value += num;
        }

        function addOperator(op) {
            document.getElementById("result").value += op;
        }

        function clearResult() {
            document.getElementById("result").value = "";
        }

        function calculate() {
            let value = document.getElementById("result").value;
            document.getElementById("result").value = eval(value);
        }
        
    function backspace() {
    let result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

  



