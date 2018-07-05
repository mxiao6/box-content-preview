import moment from 'moment';
import _ from 'lodash';
import { specialIndexMap } from './colors';

export function num2Chars(number) {
    let baseChar = 'A'.charCodeAt(0),
        letters = '';

    do {
        number -= 1;
        letters = String.fromCharCode(baseChar + (number % 26)) + letters;
        number = (number / 26) >> 0; // quick `floor`
    } while (number > 0);

    return letters;
}

export function dateConvertor(rawDate, rawFormat) {
    const date = moment(rawDate);
    const format = _.map(rawFormat, (c) => (dateMap[c] ? dateMap[c] : c)).join(
        ''
    );
    return date.format(format);
}

export const dateMap = {
    m: 'M',
    d: 'D',
    y: 'Y',
    a: 'd'
};

export function _getVertAlign(align) {
    switch (align) {
        case 'center':
            return 'center';
        case 'top':
            return 'flex-start';
        default:
            return 'flex-end';
    }
}

export function _getHoriAlign(align) {
    switch (align) {
        case 'right':
            return 'flex-end';
        case 'center':
            return 'center';
        default:
            return 'flex-start';
    }
}

export function _parseColor(color) {
    const specialColor = color.index ? specialIndexMap[color.index] : null;
    return specialColor || `#${color.rgb}`;
}

export function _getBackgroundColor(index, fontColor) {
    return isClose(specialIndexMap[index], fontColor)
        ? findBetterColor(index, fontColor)
        : specialIndexMap[index];
}

export const borderWidthMap = {
    thin: '1px',
    thick: '2px'
};

export function isClose(color1, color2) {
    const rrggbb = _.map(
        [
            color1.substr(1, 2),
            color2.substr(1, 2),
            color1.substr(3, 2),
            color2.substr(3, 2),
            color1.substr(5, 2),
            color2.substr(5, 2)
        ],
        (hex) => parseInt(hex, 16)
    );

    let sum = 0;
    for (let i = 0; i < rrggbb.length; i += 2) {
        const diff = rrggbb[i + 1] - rrggbb[i];
        sum += diff * diff;
    }

    return Math.sqrt(sum) < 256;
}

export function findBetterColor(index, fontColor) {
    let currentIndex = index - 1;
    while (currentIndex !== index) {
        if (!isClose(specialIndexMap[currentIndex], fontColor)) {
            return specialIndexMap[currentIndex];
        }
        currentIndex = (currentIndex - 1 + 64) % 64;
    }
    // console.log(specialIndexMap[index]);
    return specialIndexMap[index];
}
