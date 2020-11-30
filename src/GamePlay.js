
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/fondo.png');
        game.load.spritesheet('boomcafe', 'assets/images/mounstrocafe.png', 138, 141.5, 8);
        game.load.spritesheet('boomnegro', 'assets/images/mounstronegro.png', 154.5, 152.5, 8);
        game.load.spritesheet('tortuga', 'assets/images/tortuga.png', 149.75, 214.5, 8);
        game.load.audio('sonido', 'assets/sounds/tono.mp3');
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.boomcafe = game.add.sprite(-200, 550, 'boomcafe');
        this.boomcafe .animations.add('walk', [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7],1,true);
        this.boomcafe .animations.play("walk");
        this.boomnegro = game.add.sprite(-400, 550, 'boomnegro');
        this.boomnegro.animations.add('walk', [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7],1,true);
        this.boomnegro.animations.play("walk");
        this.tortuga = game.add.sprite(-100,20 , 'tortuga');
        this.tortuga.animations.add('walk', [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7],1,true);
        this.tortuga.animations.play("walk");
        sonido = game.add.audio('sonido');

        sonido.play('', 0, 0.5, true);
        
    },
    update: function() {
        console.log("update");
        this.boomcafe .x += 2;
        this.boomnegro.x += 2;
        this.tortuga.x += 2;


        
    }
}

var game = new Phaser.Game(1200, 960, Phaser.CANVAS);
var sonido;
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");