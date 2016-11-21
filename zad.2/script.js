function Button(text) {
        this.text = text || 'Hello';
}

Button.prototype = {
    create: function() {
            var self = this;
            this.$element = $('<button>');
            this.$element.text(this.text);
            $('body').append(this.$element);
            this.$element.click(function() {
                 alert(self.text);
            
            });
    }
}

var btn1 = new Button('HEY HEY');
btn1.create();

