// do NOT remove the 'export default'
export default class GameScore {
    // TODO: constructor, addCollectible, and getTotalScore
constructor() {
    this.collectibles = [];
}
addCollectible(collectible) {
    this.collectibles.push(collectible);
    return this;
}
getTotalScore() {
   return this.collectibles.reduce((a,b) => a + b.getScore(),0);
}
}
