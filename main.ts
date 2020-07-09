enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Tool = SpriteKind.create()
    export const tool2 = SpriteKind.create()
    export const tool3 = SpriteKind.create()
    export const tool4 = SpriteKind.create()
    export const tool5 = SpriteKind.create()
    export const tool6 = SpriteKind.create()
    export const tool7 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.tool3, SpriteKind.Player, function (sprite, otherSprite) {
    tool_3.follow(CLOWN, 10)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Tool, SpriteKind.Player, function (sprite, otherSprite) {
    tool_1.follow(CLOWN, 10)
    info.changeScoreBy(1)
})
scene.onHitWall(SpriteKind.Player, function (sprite) {
    scene.cameraShake(4, 500)
    game.showLongText("Not that way idiot", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.tool5, SpriteKind.Player, function (sprite, otherSprite) {
    tool_5.follow(CLOWN, 10)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.tool2, SpriteKind.Player, function (sprite, otherSprite) {
    tool_2.follow(CLOWN, 10)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.tool7, SpriteKind.Player, function (sprite, otherSprite) {
    tool_7.follow(CLOWN, 10)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.tool4, SpriteKind.Player, function (sprite, otherSprite) {
    tool_4.follow(CLOWN, 10)
    info.changeScoreBy(1)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite) {
    music.powerDown.play()
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    CLOWN.follow(Zaidan, 100000)
    Zaidan.destroy(effects.fire, 5000)
    Zaidan.say("noooooo")
    scene.cameraFollowSprite(Zaidan)
    scene.cameraShake(4, 2000)
    info.stopCountdown()
    info.setScore(100000000000)
    CLOWN.say("yayayaaya")
    game.showLongText("YOU WIN!!!", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Zaidan.setPosition(105, 46)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.tool6, SpriteKind.Player, function (sprite, otherSprite) {
    tool_6.follow(CLOWN, 10)
    info.changeScoreBy(1)
})
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    CLOWN.destroy(effects.fire, 500)
    game.splash("noooo")
    game.reset()
})
let tool_7: Sprite = null
let tool_6: Sprite = null
let tool_5: Sprite = null
let tool_4: Sprite = null
let tool_3: Sprite = null
let tool_2: Sprite = null
let tool_1: Sprite = null
let Zaidan: Sprite = null
let CLOWN: Sprite = null
music.siren.play()
game.setDialogTextColor(2)
game.splash("CHILD HUNT", "CHAPTER 1")
game.showLongText("FIND THE TOOLS TO PERMANENTLY KEEP ZAIDAN TRAPPED BUT KEEP HIM FROM LEAVING BY OVERLAPPING HIM AT THE SAME TIME. IF HE LEAVES BEFORE YOU MAKE THE WEAPON YOU LOSE. THEIR ARE 7 TOOLS IN TOTAL.", DialogLayout.Full)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100003030302020202020202020202020404020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen],
            TileScale.Sixteen
        ))
info.setLife(1)
let Text = image.create(160, 20)
CLOWN = sprites.create(img`
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
2 . . 2 2 2 2 2 2 2 2 2 . . 2 . 
2 . . 2 2 2 2 2 2 2 2 2 . . 2 . 
1 1 . 1 1 1 1 1 1 1 1 1 . 1 1 . 
1 1 . 1 f 1 1 1 1 f 1 1 . 1 1 . 
. . . 1 f 1 1 1 1 f 1 1 . . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. . . . 1 f 1 f 1 f 1 . . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
info.startCountdown(30)
scene.cameraFollowSprite(CLOWN)
Zaidan = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Enemy)
Zaidan.setPosition(114, 50)
animation.runImageAnimation(
Zaidan,
[img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . . f e 4 d d d d 4 e f e . . 
. . f e f 2 2 2 2 e d d 4 e . . 
. . e 4 f 2 2 2 2 e d d e . . . 
. . . . f 4 4 5 5 f e e . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . e f e 4 d d d d 4 e f . . . 
. . e 4 d d e 2 2 2 2 f e f . . 
. . . e d d e 2 2 2 2 f 4 e . . 
. . . . e e f 5 5 4 4 f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . f f f . . . . 
`],
100,
true
)
animation.runMovementAnimation(
Zaidan,
animation.animationPresets(animation.flyToCenter),
100,
false
)
let anim = animation.createAnimation(ActionKind.Walking, 1000)
Zaidan.startEffect(effects.trail, 5000)
animation.setAction(Zaidan, ActionKind.Walking)
controller.moveSprite(CLOWN, 100, 100)
CLOWN.setPosition(95, 120)
Zaidan.say(":)")
Zaidan.setPosition(159, 117)
Zaidan.setVelocity(19, 20)
game.setDialogFrame(img`
. . . . . c c c c c c c c c c c c c c . . . . . 
. . . c b d 1 1 1 1 1 1 1 1 1 1 1 1 d b c . . . 
. . c d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c . . 
. c d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c . 
. b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . 
c d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c 
c b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b c 
c c d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c . 
. c c d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c c . 
. . c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d b c c . . 
. b 1 1 d c c c c c c c c c c c c c c c c . . . 
c d d c c c c c c c c c c c c c c c c . . . . . 
c c c c c . . . . . . . . . . . . . . . . . . . 
`)
tool_1 = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b c . . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
b d d d b b d 5 5 5 4 4 4 4 4 b 
b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
b d c 5 5 5 5 d 5 5 5 5 5 b . . 
c d d c d 5 5 b 5 5 5 5 5 5 b . 
c b d d c c b 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Tool)
tool_1.setPosition(11, 11)
tool_2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.tool2)
tool_2.setPosition(149, 61)
tool_3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 5 5 6 6 6 . . . . 
. . . 7 7 7 7 6 6 6 6 6 6 . . . 
. . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
. . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
. 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
. 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
. 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
. 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
. . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
. . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.tool3)
tool_3.setPosition(147, 44)
tool_4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c b a c . . . . . . 
. . . . c c b c f a c . . . . . 
. . . . a f b b b a c . . . . . 
. . . . a f f b a f c c . . . . 
. . . . c b b a f f c . . . . . 
. . . . . b b a f a . . . . . . 
. . . . . . c b b . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.tool4)
tool_4.setPosition(136, 15)
tool_5 = sprites.create(img`
. . . . . . c c c . . . . . . . 
. . . . . a a a c c c . . . . . 
. . . c a c f a a a a c . . . . 
. . c a c f f f a f f a c . . . 
. c c a c c f a a c f f a c . . 
. a b a a c 6 a a c c f a c c c 
. a b b b 6 a b b a a c a f f c 
. . a b b a f f b b a a c f f c 
c . a a a c c f c b a a c f a c 
c c a a a c c a a a b b a c a c 
a c a b b a a 6 a b b 6 b b c . 
b a c b b b 6 b c . c c a c . . 
b a c c a b b a c . . . . . . . 
b b a c a b a a . . . . . . . . 
a b 6 b b a c . . . . . . . . . 
. a a b c . . . . . . . . . . . 
`, SpriteKind.tool5)
tool_5.setPosition(12, 9)
tool_6 = sprites.create(img`
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c b . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . c 7 . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . 8 7 . . . . . . . 
. . . . . . 8 8 5 6 . . . . . . 
. . . . . . 8 7 5 6 . . . . . . 
. . . . . c c c 6 6 6 . . . . . 
. . . . 8 8 7 7 7 5 6 6 . . . . 
. . 8 f f f c c 6 6 f f 6 6 . . 
. 8 8 8 8 6 6 7 7 7 7 5 7 6 6 . 
8 8 8 8 8 8 6 6 7 7 7 5 7 7 6 6 
8 8 8 8 8 8 6 6 7 7 7 7 5 7 6 6 
`, SpriteKind.tool6)
tool_6.setPosition(136, 99)
tool_7 = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.tool7)
tool_7.setPosition(8, 108)
game.showLongText("PRESS \"A\" WHEN YOU HAVE  ALL THE TOOLS", DialogLayout.Bottom)
