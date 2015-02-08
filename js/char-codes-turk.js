var CHAR_CODES = {
  // turkishdictionary codings
  '%C4%B1': '%FD', //ı (Lowercase i-dotless)  actually it is &#305; but turkishdictionary need it this way 
  '%C5%9F': '%FE', //ş
  '%C4%9F': '%F0', //ğ  (silent character)
  '%C3%A7': '%E7', //ç
  '%C3%B6': '%F6', //ö
  '%C3%BC': '%FC', //ü
  '%C3%A2': '%E2', // â

   // '' : '', //Ç
   // '' : '', //Ğ
   // '' : '', //Ö
   // '' : '', //Ş
   // '' : '', //Ü
   // '' : '', //İ
   // '' : '', //Â
}

module.exports = CHAR_CODES;