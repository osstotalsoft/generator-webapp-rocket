import XMLParser from 'react-xml-parser';

export function parseXML(xmlText) {
    var xml = new XMLParser().parseFromString(xmlText);
    return xml;
}

export function getXMLElementByTagName(xmlText, tagName) {
    var xml = new XMLParser().parseFromString(xmlText);
    return xml.getElementsByTagName(tagName);
}

