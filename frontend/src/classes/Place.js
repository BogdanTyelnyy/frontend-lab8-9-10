export default class Place {
    constructor(count, state) {
        this.number = count;
        this.state = state || 'empty';
    }
    switchState() {
        if(this.state === 'empty') this.state = 'selected';
        else this.state = 'empty';
    }
}