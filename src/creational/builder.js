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
var Word1 = /** @class */ (function () {
    function Word1() {
        this.parts = [];
    }
    Word1.prototype.infoParts = function () {
        console.log("New word has ".concat(this.parts.join(' ,')));
    };
    return Word1;
}());
var WordBuilder = /** @class */ (function () {
    function WordBuilder() {
        this.word = new Word1();
    }
    WordBuilder.prototype.pushFirstLetter = function () {
        this.word.parts.push('U');
    };
    WordBuilder.prototype.pushSecondLetter = function () {
        this.word.parts.push('K');
    };
    WordBuilder.prototype.pushThirdLetter = function () {
        this.word.parts.push('R');
    };
    WordBuilder.prototype.pushForthLetter = function () {
        this.word.parts.push('A');
    };
    WordBuilder.prototype.pushFifthLetter = function () {
        this.word.parts.push('I');
    };
    WordBuilder.prototype.pushSixthLetter = function () {
        this.word.parts.push('N');
    };
    WordBuilder.prototype.pushSeventhLetter = function () {
        this.word.parts.push('E');
    };
    WordBuilder.prototype.getWord = function () {
        var result = this.word;
        // this.reset()
        return result;
    };
    return WordBuilder;
}());
var ukraine = function () {
    var builder = new WordBuilder();
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
var ukr = function () {
    var builder = new WordBuilder();
    builder.pushFirstLetter();
    builder.pushSecondLetter();
    builder.pushThirdLetter();
    builder.getWord().infoParts();
};
