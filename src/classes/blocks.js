import {col, css, divImage, row} from '../utils.js';

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    doHTML() {
        throw new Error(('Method toHTML() must be implemented'))
    }
}

export class StringBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    doHTML() {
        const {tag = 'p', styles} = this.options;
        return `<${tag} style="${css(styles)}">${this.value}</${tag}>`;
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    doHTML() {
        const {tag = 'h1', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    doHTML() {
        const {tag = 'p', styles} = this.options;
        return row(col(` <${tag}>${this.value}</${tag}>`), css(styles));
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }
    doHTML() {
        const {styles, text} = this.options;
        return divImage(`<img class="image-style" src="${this.value}" alt="balck-texture">${text}`, css(styles));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    doHTML() {
        const {styles} = this.options;
        const html = this.value.map((item) => col(item));
        return row(html.join(''), css(styles));
    }
}