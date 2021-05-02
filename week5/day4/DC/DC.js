// DC
class video {
    constructor(uploader, time, title) {
        this.uploader = uploader;
        this.time = time;
        this.title = title;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} films of ${this.title}!`);
    }
}
let newVideo = new video("I have", "3", "the Godfather");
newVideo.watch();