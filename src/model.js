
import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock, StringBlock} from './classes/blocks.js';

const head = new StringBlock('email: boiko.vtyna@gmail.com', {
    tag: 'p',
    styles: {

        background: 'black',
        color: '#fff',
        'text-align': 'right',
        padding: '5px',
        margin: '0 auto'
    }
})

const img = new ImageBlock('https://images.unsplash.com/photo-1505456216889-ea7025ae16ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2166&q=80', {
    styles: {
        position: 'relative',
        'justify-content': 'center',
        height: '300px',
        width: '100%',
        overflow: 'hidden'
    },
    text: '<h1 style="position: absolute; top: 120px; width:100%; text-align: center; color: #fff; font-size: 3em;">SITE-CONSTRUCTOR ON PURE JAVASCRIPT</h1>'
});

const text = new TextBlock('The reasons why writing classes in Javascript is fun:', {
    tag: 'h3',
    styles: {
        'text-align': 'center',
        padding: '10px',
        'margin-top': '10px'
    }
});

const columns = new ColumnsBlock( [
    'It is an elegant and graceful way to write code. ',
    'Convenience and readability at a high level.',
    'New style of clearly defined structure.',
], {
    tag: 'p',
    styles: {
        'background-image': 'url(https://images.unsplash.com/photo-1543053976-1f0d57a634ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
        'border-top': '2px solid black',
        'border-bottom': '2px solid black',
        color: '#fff',
        'text-align': 'center',
        padding: '40px',
    }
});

const twoBlocks = new ColumnsBlock(['Objects and classes', 'Encapsulation'], {
    styles: {
        'border': '1px solid black',
        'font-size': '1.5rem',
        'text-align': 'center',
        padding: '10px',
        'margin-top': '10px'
    }
});

const textTwoBlocks = new ColumnsBlock(['Languages that support object-oriented programming (OOP) typically use inheritance for code reuse and extensibility in the form of either classes or prototypes. Those that use classes support two main concepts:<br>\n' +
'<b>Classes</b> – the definitions for the data format and available procedures for a given type or class of object; may also contain data and procedures (known as class methods) themselves, i.e. classes contain the data members and member functions.<br>\n' +
'<b>Objects</b> – instances of classes.', '<b>Encapsulation</b> is an object-oriented programming concept that binds together the data and functions that manipulate the data, and that keeps both safe from outside interference and misuse. Data encapsulation led to the important OOP concept of data hiding.'], {
    tag: 'h3',
    styles: {
        'border-bottom': '1px solid black',
        padding: '10px',
        'margin-top': '10px'
    }
});


export const model = [head, img, text, columns, twoBlocks, textTwoBlocks];
