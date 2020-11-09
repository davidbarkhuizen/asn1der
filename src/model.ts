export enum Asn1Class {
    Universal = 0,
    Application = 1,
    ContextSpecific = 2,
    Private = 3
}

export enum Asn1Construction {
    Primitive = 0,
    Constructed = 1,
}

export enum Asn1Tag {
    EndOfContent = 0,
    Boolean = 1,
    Integer = 2,
    BitString = 3,
    OctetString = 4,
    Null = 5,
    ObjectIdentifier = 6,
    ObjectDescriptor = 7,
    External = 8,
    RealFloat = 9,
    Enumerated = 10,
    EmbeddedPDV = 11,
    UTF8String = 12,
    RelativeOID = 13,
    Time = 14,
    Reserved = 15,
    Sequence = 16,
    Set = 17,
    NumericString = 18,
    PrintableString = 19,
    T61String = 20,
    VideoTexString = 21,
    IA5String = 22,
    UTCTime = 23,
    GeneralizedTime = 24,
    GraphicString = 25,
    VisibleString = 26,
    GeneralString = 27,
    UniversalString = 28,
    CharacterString = 29,
    BMPString = 30,
    Date = 31,
    TimeOfDay = 32,
    DateTime = 33,
    Duration = 34,
    OID_IRI = 35,
    Relative_OID_IRI = 36
}

export interface IAsn1Identifier {
    raw: Buffer,
    class: Asn1Class,
    construction: Asn1Construction,
    tagNumber: number
}

export interface Element {
    raw: Buffer,
    identifier: IAsn1Identifier,
    length: number,
    content: Buffer
    children: Array<Element>,
    parent: Element
}
