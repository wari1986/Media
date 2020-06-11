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
    constructor(title) {
        super(title);
        this._author=author;
        this._pages=pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class movie extends Media {
    constructor(title) {
        super(title);
        this._director=director;
        this._runTime=runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

class cd extends Media {
    constructor(title) {
        super(title);
        this._artist=artist;
        this._songs=songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}
