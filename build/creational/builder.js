/*class Computer {
    constructor ( name: string,os: string,hd: string,cdrom: boolean)
    { }
};

class PCBuilder {
    name: string;
    os: string;
    hd: string;
    cdrom: boolean
      addName(name: string): string {
      this.name = name;
      return name
    };
    addOs(os: string): string {
        this.os = os;
        return os
    }
    addHd(hd: string): string {
        this.hd = hd;
        return hd
    }
    addCdRom(cdrom: boolean): boolean {
        this.cdrom = cdrom;
        return cdrom
    }
    build() {
        return new Computer(this.name,this.os,this.hd,this.cdrom)
    }
}

let pcFull = new PCBuilder()
pcFull.addName('Dell')
pcFull.addOs('Windows11')
pcFull.addHd('SSD')
pcFull.addCdRom(true)
console.log(pcFull)

//--------------------------------------------------------------------
class Header {
    background: string;
    fontSize: number;
    logo: boolean;
    navigation: boolean;
    };

interface HeaderBuilder {
    setBackground(background: string):void;
    setFontSize(fontSize: number):void;
    checkLogo(logo: boolean):void;
    checkNavigation(navigation: boolean):void;
};

class HeaderBuilder implements HeaderBuilder {
    private header: Header;
    constructor() {
        this.header = new Header()
    }
    setBackground(background: string) {
        this.header.background = background
        return background
    }
    setFontSize(fontSize: number) {
        this.header.fontSize = fontSize
    }
    checkLogo(logo: boolean) {
        this.header.logo = logo
    }
    checkNavigation(navigation: boolean) {
        this.header.navigation = navigation
    }
    build() {
        return this.header
    }
}

 let shopHeader = new HeaderBuilder();
 shopHeader.setBackground('grey');
 shopHeader.setFontSize(14)
 console.log(shopHeader)
 */
//------------------------------------------------------
class Word1 {
    constructor() {
        this.parts = [];
    }
    infoParts() {
        console.log(`New word has ${this.parts.join(' ,')}`);
    }
}
class WordBuilder {
    constructor() {
        this.word = new Word1();
    }
    pushFirstLetter() {
        this.word.parts.push('U');
    }
    pushSecondLetter() {
        this.word.parts.push('K');
    }
    pushThirdLetter() {
        this.word.parts.push('R');
    }
    pushForthLetter() {
        this.word.parts.push('A');
    }
    pushFifthLetter() {
        this.word.parts.push('I');
    }
    pushSixthLetter() {
        this.word.parts.push('N');
    }
    pushSeventhLetter() {
        this.word.parts.push('E');
    }
    getWord() {
        const result = this.word;
        // this.reset()
        return result;
    }
}
const ukraine = () => {
    const builder = new WordBuilder();
    builder.pushFirstLetter();
    builder.pushSecondLetter();
    builder.pushThirdLetter();
    builder.pushForthLetter();
    builder.pushFifthLetter();
    builder.pushSixthLetter();
    builder.pushSeventhLetter();
    builder.getWord().infoParts();
};
ukraine();
const ukr = () => {
    const builder = new WordBuilder();
    builder.pushFirstLetter();
    builder.pushSecondLetter();
    builder.pushThirdLetter();
    builder.getWord().infoParts();
};
export {};
//# sourceMappingURL=builder.js.map