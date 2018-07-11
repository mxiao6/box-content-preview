/**
 * Excel 2007/2010/2013 Indexed Colors
 * https://github.com/ClosedXML/ClosedXML/wiki/Excel-Indexed-Colors
 *
 * @type {Object}
 */
export const specialIndexMap = {
    0: '#000000',
    1: '#FFFFFF',
    2: '#FF0000',
    3: '#00FF00',
    4: '#0000FF',
    5: '#FFFF00',
    6: '#FF00FF',
    7: '#00FFFF',
    8: '#000000',
    9: '#FFFFFF',
    10: '#FF0000',
    11: '#00FF00',
    12: '#0000FF',
    13: '#FFFF00',
    14: '#FF00FF',
    15: '#00FFFF',
    16: '#800000',
    17: '#008000',
    18: '#000080',
    19: '#808000',
    20: '#800080',
    21: '#008080',
    22: '#C0C0C0',
    23: '#808080',
    24: '#9999FF',
    25: '#993366',
    26: '#FFFFCC',
    27: '#CCFFFF',
    28: '#660066',
    29: '#FF8080',
    30: '#0066CC',
    31: '#CCCCFF',
    32: '#000080',
    33: '#FF00FF',
    34: '#FFFF00',
    35: '#00FFFF',
    36: '#800080',
    37: '#800000',
    38: '#008080',
    39: '#0000FF',
    40: '#00CCFF',
    41: '#CCFFFF',
    42: '#CCFFCC',
    43: '#FFFF99',
    44: '#99CCFF',
    45: '#FF99CC',
    46: '#CC99FF',
    47: '#FFCC99',
    48: '#3366FF',
    49: '#33CCCC',
    50: '#99CC00',
    51: '#FFCC00',
    52: '#FF9900',
    53: '#FF6600',
    54: '#666699',
    55: '#969696',
    56: '#003366',
    57: '#339966',
    58: '#003300',
    59: '#333300',
    60: '#993300',
    61: '#993366',
    62: '#333399',
    63: '#333333',
    64: '#000000'
};

/**
 * Older 56 Excel ColorIndex Colors
 * http://dmcritchie.mvps.org/excel/colors.htm
 *
 * @type {Object}
 */
export const specialIndexMapOld = {
    1: '#000000',
    2: '#FFFFFF',
    3: '#FF0000',
    4: '#00FF00',
    5: '#0000FF',
    6: '#FFFF00',
    7: '#FF00FF',
    8: '#00FFFF',
    9: '#800000',
    10: '#008000',
    11: '#000080',
    12: '#808000',
    13: '#800080',
    14: '#008080',
    15: '#C0C0C0',
    16: '#808080',
    17: '#9999FF',
    18: '#993366',
    19: '#FFFFCC',
    20: '#CCFFFF',
    21: '#660066',
    22: '#FF8080',
    23: '#0066CC',
    24: '#CCCCFF',
    25: '#000080',
    26: '#FF00FF',
    27: '#FFFF00',
    28: '#00FFFF',
    29: '#800080',
    30: '#800000',
    31: '#008080',
    32: '#0000FF',
    33: '#00CCFF',
    34: '#CCFFFF',
    35: '#CCFFCC',
    36: '#FFFF99',
    37: '#99CCFF',
    38: '#FF99CC',
    39: '#CC99FF',
    40: '#FFCC99',
    41: '#3366FF',
    42: '#33CCCC',
    43: '#99CC00',
    44: '#FFCC00',
    45: '#FF9900',
    46: '#FF6600',
    47: '#666699',
    48: '#969696',
    49: '#003366',
    50: '#339966',
    51: '#003300',
    52: '#333300',
    53: '#993300',
    54: '#993366',
    55: '#333399',
    56: '#333333'
};

/**
 * box color scheme and excel color map
 *
 * @type {Object}
 */
const colors = {
    gridGrey: '#BDC3C7',
    backgroundGrey: '#F9F9F9',
    gridGreen: '#0061D5',
    specialIndexMap,
    specialIndexMapOld
};

export default colors;
