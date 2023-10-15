let exp = '';

        function appendToDisplay(value) {
            exp += value;
            
            js_show();
        } 

        function calculate() {
            try {
                exp = eval(exp);
                
            } catch (error) {
                
            }
            js_show();
        }

        function clearDisplay() {
            exp = '';
            
            js_show();
        }


        function js_show()  {
            let exp1 = document.querySelector('.js-show');
            exp1.innerHTML = `${exp}`;
        }