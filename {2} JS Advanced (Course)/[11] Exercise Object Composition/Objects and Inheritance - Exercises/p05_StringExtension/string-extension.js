(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if(this.indexOf(str) !== 0){
            return str + this;
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if(!this.endsWith(str)){
            return this + str;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function () {
        if(this.length === 0) {
            return true;
        }

       return false;
    };

    String.prototype.truncate = function (n) {
        if(n < 4) {
            return ".".repeat(n);
        }

        if(this.toString().length <= n) {
            return this.toString();
        }

        let stringParts = this.split(" ");

        if(stringParts.length > 1) {
            let result = "";

            for (let i = 0; i < stringParts.length; i++) {
                if(result.length + 3 + stringParts[i].length > n) break;

                result += " " + stringParts[i];
            }

            return result.trim() + "...";
        } else {
            return this.substr(0, n - 3) + "...";
        }
    };

    String.format = function (str, params) {
        let index = 0;

        while (true) {
            let placeholder = "{" + index + "}";

            if(str.indexOf(placeholder) < 0) break;

            let replacement = arguments[++index];

            if(replacement === undefined) replacement = placeholder;

            str = str.replace(placeholder, replacement);
        }

        return str;
    };
}());
