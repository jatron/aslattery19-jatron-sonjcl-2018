module.exports = {
    arrayContains: function(element, array) {
        for (var e in array) {
            if (e === element) {
                return true;
            }
        }
        return false;
    }
}