class Media {
    constructor(title,isCheckedOut,ratings) {
        this._title=title;
        this._isCheckedOut=isCheckedOut;
        this._ratings=ratings;
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    getAverageRating() {
        this._ratings;
    }

    toogleCheckOutStatus(){
        this._isCheckedOut;
    }

    addRating() {
        this._ratings++;
    }
}

class books extends Media {
    constructor(x) {
        super(x);
        this._z=z;
    }

    get z() {
        return this._z
    }
}