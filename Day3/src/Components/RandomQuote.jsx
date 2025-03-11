import React from 'react'
import { FaSpinner } from "react-icons/fa";
import { useState } from 'react';

const RandomQuote = () => {

    const [stateQuote, setStateQuote]= useState(false);

    const quotes = [
        "Haddii aad doonayso guul, ha ka cabsan guuldarro.",
        "Xooggaaga dhabta ah wuxuu ku jiraa dulqaadkaaga.",
        "Hadaf la’aani waa sida markab aan jiho lahayn.",
        "Noloshu waa sida baaskiil – inaad miisaankaaga ilaaliso, waa inaad sii waddaa socodka.",
        "Guusha maaha dhammaad, guuldarraduna maaha halaag – waxa muhiimka ah waa geesinimada aad sii waddo.",
        "Marnaba ha is-dhiibin, maxaa yeelay guusha waxay timaadaa marka aad ugu dhowdahay inaad quusato.",
        "Dadku waxa ay illoobaan waxa aad dhahdo, laakiin waligood ma illoobaan sida aad u dareensiisay.",
        "Haddii aad rabto in lagu xasuusto, samee wax weyn.",
        "Fursaduhu ma imaan karaan haddii aadan raadinin.",
        "Haddii aad wax weyn rabto, ku bilow tallaabo yar.",
        "Hadaf la’aan waa sida markab aan kompas lahayn.",
        "Adduunyada waxaa iska leh kuwa dhiirranaada.",
        "Maskaxdu waa sida murqaha, waa inaad tababartaa si ay u xoogaysato.",
        "Dhammaan waxyaabaha wanaagsan waxay ku yimaadaan dulqaadka.",
        "Waa inaad aaminsantahay naftaada kahor intaadan filayn in dadka kale ay ku aaminaan.",
        "Markaad rabto wax aad helayso, waa inaad diyaar u tahay inaad dadaasho.",
        "Ma jiro wax aan macquul ahayn haddii aad rumaysantahay.",
        "Noloshu waa barasho joogto ah – maalin kasta wax cusub baro.",
        "Farxadda dhabta ah waa in aad wax u qabato dadka kale.",
        "Qofkii aan isku dayin wax cusub, ma ogaan karo kartidiisa.",
        "Adiga ayaa noloshaada u qaabeeya – dooro inaad guulaysato.",
        "Jiritaankaaga qiimee, maxaa yeelay waxaad tahay mid qiimo leh.",
        "Hadaf la’aan waa sida dayax aan iftiin lahayn.",
        "Waa inaad ka tagtaa wixii hore si aad u hesho wax cusub.",
        "Guushu waxay timaadaa markay diyaargarowga iyo fursadda kulmaan.",
        "Kama quusanayo guusha, sababtoo ah guuldarro kasta waa cashar cusub.",
        "Xasuuso: waxa aad maanta samayso wuxuu saameyn ku yeelan doonaa mustaqbalkaaga.",
        "Jacayl iyo naxariis badan oo aad bixiso, waa inta badan ee aad heli doonto.",
        "Ha ka welwelin wixii aad luminayso, diirada saar waxa aad helayso.",
        "Maskaxdaadu waxay xaddidaysaa waxa aad gaari karto – maskax furan lahaaw!",
        "Dadka guulaysta waxay sameeyaan wax ay dadka caadiga ah ka cabsadaan.",
        "Fursad kasta oo aad lumiso, mid kale ayaa sugaya."
      ];
      
     
      
      
    
//    const randomQuote= quotes[Math.random()];
//    console.log(randomQuote)
 const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const [Quote,setQuote]=useState(quotes[0])

//console.log("llll",quotes[Math.floor(Math.random() * quotes.length)]);


// Daabac console-ka
console.log("randomquote",randomQuote);

const HandleGenerate=()=>{
    console.log("statequjjs",stateQuote);
    setStateQuote(true)
 
   setTimeout(() => {
    setStateQuote(false);
    setQuote(randomQuote)


    let iconloading=  <FaSpinner className="animate-spin text-4xl text-gray-500" />;
    console.log("iconloading",iconloading)
    //setQuote(iconloading)
  
    
   }, 1000);

  

   
}

// const [quote, setQuote] = useState(quotes[0]); 

// // Function-ka soo saara oraah random ah
// const HandleGenerate= () => {
//   const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

//   setTimeout(()=>{
//     setQuote(randomQuote);

//   },2000)
 
// };

      
  return (
   
          <div className="bg-green-500 min-h-screen flex items-center justify-center px-4">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Random Quote Generator</h1>
              <p className="text-lg text-gray-600 italic mb-6">
              {
            stateQuote ? <FaSpinner className="animate-spin text-4xl text-gray-500" /> : `"${Quote}"`
               }
              </p>
              <button onClick={HandleGenerate} className="px-6 py-3 bg-pink-700 text-white rounded-lg text-lg font-medium hover:bg-pink-800 transition duration-300">
                Generate Quote
              </button>
            </div>
          </div>
        );
      }
      


export default RandomQuote
