(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        let curLength = str.length;
        if (this.valueOf().slice(0, curLength) !== str) {
            return str + this.valueOf();
        } else {
            return this.valueOf();
        }
    }

    String.prototype.ensureEnd = function (str) {
        let curLength = str.length;
        if (this.valueOf().slice(-curLength) !== str) {
            return this.valueOf() + str;
        } else {
            return this.valueOf();
        }
    }

    String.prototype.isEmpty = function () {
        if (this.valueOf() == '') {
            return true;
        } else {
            return false;
        }
    }

    String.prototype.truncate = function (n) {
        if (this.valueOf().length <= n) {
            return this.valueOf();
        } else {
            let lastIndex = this.valueOf().slice(0, n - 1).lastIndexOf(' ');
            if (lastIndex != -1) {
                return this.valueOf().slice(0, lastIndex) + '...';
            } else {
                return this.valueOf().slice(0, n - 3) + '...';
            }
        }
    }

    String.format = function (string, ...params) {
        let result = string;
        for (let i = 0; i < params.length; i++) {
            result = result.replace(`{${i}}`, params[i]);
        }
        return result;
    }
}());