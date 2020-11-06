
const one = Buffer.from('01', 'hex').readUInt8(0);

export const bitMask = (bits: Array<number>): number => {

    let byteMask = Buffer.from('00', 'hex').readUInt8(0);

    for (const bitNumber of bits) {
        const bitMask = one << (bitNumber - 1);
        byteMask = byteMask | bitMask;
    }

    return byteMask;
};

export const bitsAreSet = (b: number, bits: Array<number>): boolean => {

    console.log(`bitsAreSet ${b} ${bits}`);

    const mask = bitMask(bits);
    console.log(`mask ${mask}`);
    return (b & mask) == mask;
}

export const parse = (
    derHex: string
): any => {

    const raw = Buffer.from(derHex, 'hex');
    console.log(`raw: ${raw.toString('hex')}`);

    const b0 = raw.readUInt8(0);

    return {};
};

bitMask([1,2]);