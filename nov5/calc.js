let result = '';
let operation = '';
let operation_new_number = '';

const number_button_clicked = e => {
    if(operation == '') {
        result += e.target.dataset.number;
        display(result);
    } else {
        operation_new_number += e.target.dataset.number;
        display(operation_new_number);
    }
};

const add_button_clicked = () => {
    operation = '+';
};
const sub_button_clicked = () => {
    operation = '-';
};
const mul_button_clicked = () => {
    operation = '*';
};
const div_button_clicked = () => {
    operation = '/';
};

const equals_button_clicked = () => {
    if(operation=='+'){
        const res=Number(result)+Number(operation_new_number)
        display(res)
    }
    else if(operation=='-'){
        const res=Number(result)-Number(operation_new_number)
        display(res)
    }
    else if(operation=='*'){
        const res=Number(result)*Number(operation_new_number)
        display(res)
    }
    else if(operation=='/'){
        const res=Number(result)/Number(operation_new_number)
        display(res)
    }
operation=''

}

const display = (value) => {
    document.getElementById('display').innerText = value;
}

let add_button = document.getElementById('add_button')
add_button.addEventListener('click', add_button_clicked);

let sub_button = document.getElementById('sub_button')
sub_button.addEventListener('click', sub_button_clicked);

let div_button = document.getElementById('div_button')
div_button.addEventListener('click', div_button_clicked);

let mul_button = document.getElementById('mul_button')
mul_button.addEventListener('click', mul_button_clicked);

let equals_button = document.getElementById('equals_button');
equals_button.addEventListener('click', equals_button_clicked);

let number_buttons = document.querySelectorAll('.number_button');
number_buttons.forEach(single_number_button => {
    single_number_button.addEventListener('click', number_button_clicked);
});