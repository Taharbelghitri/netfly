import { EventEmitter } from "events";

class event extends EventEmitter {
  changeMenuStatus(prms) {
    // this will notfiy the listener
    this.emit("menu", prms);
  }
  handleMenuChanges(clb) {
    //clb function must have one prms to check menu status before
    this.on("menu", (prms) => {
      // this gonna remove all listener after getting notify it
      this.removeAllListeners("menu");
      clb(prms);
    });
  }
  changeMenuView(prms) {
    this.emit("menuView", prms);
  }
  handleMenuChangesView(clb) {
    this.on("menuView", clb);
  }
  toggleSearchPage(prms) {
    this.emit("search", prms);
  }
  handleSearhPageChanges(clb) {
    this.on("search", clb);
    this.removeAllListeners("menu");
  }
}

export default new event();
