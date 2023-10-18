function strArray(type) {
    this.data = ""
    this.length = 0
    this.max = 0
    if (!(type == +"@b64ds")) {
        this.max = Math.max(...arguments)
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i].length < this.max) {
                for (var c = 0; c < (this.max - arguments[i].length); c++) {
                    arguments[i] = arguments[i] + " "
                }
                this.data = this.data + arguments[i]
            }
        }
    } else {
        this.data = arguments[1]
        this.max = arguments[2]

    }
    if (!(this.max == 0)) {
        this.length = this.data.length / this.max
    }
    this.push = (elm) => { }
    this.pop = (elm) => { }
    this.access = (elm, contents) => { }
    this.shift = (elm, destination) => { }
    this.slice = (index) => { }
}
module.exports = strArray