import { Scene } from 'phaser';

export class LoadingScene extends Scene {
    constructor() {
        super('loading-scene');
    }

    create(): void {
        this.scene.start('forest-scene');
    }

    preload() {
        this.load.spritesheet('heart', 'assets/sprites/heart.png', { frameWidth: 16, frameHeight: 16 });

        this.load.atlas('girl',
            'assets/sprites/girl.png',
            'assets/sprites/girl.json',
        );

        this.load.audio({ key: 'girlAttack1', url: ['assets/audio/girl/girl-attack1.wav'] });
        this.load.audio({ key: 'girlAttack2', url: ['assets/audio/girl/girl-attack2.wav'] });
        this.load.audio({ key: 'girlGrunt1', url: ['assets/audio/girl/girl-grunt1.mp3'] });
        this.load.audio({ key: 'girlGrunt2', url: ['assets/audio/girl/girl-grunt2.mp3'] });
        this.load.audio({ key: 'girlGrunt3', url: ['assets/audio/girl/girl-grunt3.mp3'] });
        this.load.audio({ key: 'girlGrunt4', url: ['assets/audio/girl/girl-grunt4.mp3'] });
        this.load.audio({ key: 'girlGrunt5', url: ['assets/audio/girl/girl-grunt5.mp3'] });
        this.load.audio({ key: 'girlGrunt6', url: ['assets/audio/girl/girl-grunt6.mp3'] });


        this.load.atlas('dragon',
            'assets/sprites/dragon.png',
            'assets/sprites/dragon.json',
        );

        this.load.atlas('dragonAttack',
            'assets/sprites/dragon-attack.png',
            'assets/sprites/dragon-attack.json',
        );

        this.load.audio({ key: 'dragonHit1', url: ['assets/audio/dragon/dragon-hit1.mp3'] });
        this.load.audio({ key: 'dragonHit2', url: ['assets/audio/dragon/dragon-hit2.mp3'] });
        this.load.audio({ key: 'dragonHit3', url: ['assets/audio/dragon/dragon-hit3.mp3'] });
    }
}