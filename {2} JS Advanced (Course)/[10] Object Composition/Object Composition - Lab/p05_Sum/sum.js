function getModel() {
    let model = {
        init: function (selector1, selector2, resultSelector) {
            model.num1 = $(selector1);
            model.num2 = $(selector2);
            model.result = $(resultSelector);
        },

        add: function () {
            model.action((a, b) => a + b);
        },

        subtract: function () {
            model.action((a, b) => a -b);
        },
        
        action: function (operation) {
            let num1 = Number(model.num1.val());
            let num2 = Number(model.num2.val());
            model.result.val(operation(num1, num2));
        }
    };

    return model;
}

$(function() {
    let model = getModel();
    model.init('#num1', '#num2', '#result');
    $('#sumButton').click(model.add);
    $('#subtractButton').click(model.subtract);
});
