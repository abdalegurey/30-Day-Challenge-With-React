import React from 'react'
import { FaSpinner } from "react-icons/fa";
import { useState,useEffect } from 'react';

const RandomQuote = () => {

    const [stateQuote, setStateQuote]= useState(false);

    const categories = {
        motivation: ["Guusha maaha dhammaad...", "Ha is-dhiibin..."],
        love: ["Jacaylku waa xalka...", "Jacaylku maaha wax la sugayo..."],
        life: ["Noloshu waa barasho joogto ah...", "Hadaf la’aan waa sida markab..."],
      
      };
    
      

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
      
    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //       const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    //       setQuote(randomQuote);
    //     },1000);
      
    //     return () => clearInterval(interval);
    //   }, []);
      
      
      
    
//    const randomQuote= quotes[Math.random()];
//    console.log(randomQuote)
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


// const categoryKeys = Object.keys(categories); 
// console.log("categorieskeys",categoryKeys) // Hel category-yada
// const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
// console.log("randomCategoryenglish",randomCategory)
// const randomQuote = categories[randomCategory][Math.floor(Math.random() * categories[randomCategory].length)];

//console.log(randomQuote);  // Waxaa soo baxaya oraah random ah


const [Quote,setQuote]=useState(categories.motivation)
///const [Quote,setQuote]=useState(quotes[0])

//console.log("llll",quotes[Math.floor(Math.random() * quotes.length)]);


// Daabac console-ka
//console.log("randomquote",randomQuote);

const HandleGenerate = () => {
    // console.log("statequjjs", stateQuote);
    setStateQuote(true);

    setTimeout(() => {
        setStateQuote(false);

        // Filtr garee categories iyadoo la eegayo category-ga la doortay
        const filteredQuotes = categories[selectedCategory] || []; // Hubi in uu jiro
        const CategoriesRandom = filteredQuotes.length > 0 
          ? filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)] 
          : randomQuote

          if(filteredQuotes.length>0){
            setQuote(CategoriesRandom)
          }else{
            setQuote(randomQuote)
          }
        //setQuote(CategoriesRandom || randomQuote); 
        //console.log("filtered",filteredQuotes)
    }, 1000);
};




  
const [selectedCategory, setSelectedCategory] = useState("ChooseCategory");


      
const handleCategoryChange = (event) => {
    
  setSelectedCategory(event.target.value);
};

//console.log("selected vatgehehe",selectedCategory)




const HandleCopy=()=>{

    navigator.clipboard.writeText(Quote);
  alert("Copied to clipboard!");
}

const shareQuote = () => {
    const url = `https://www.facebook.com/dialog/share?app_id=61568347700426&display=popup&quote=${encodeURIComponent(Quote)}&href=https://yourwebsite.com`;
    
    
    window.open(url, "_blank");
  };
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
             <div className='grid grid-cols-2 gap-2 lg:grid-cols-4'>
             <button onClick={HandleGenerate} className="px-6 py-3 bg-pink-700 text-white rounded-lg text-lg font-medium hover:bg-pink-800 transition duration-300">
                Generate Quote
              </button>
              <button onClick={HandleCopy} className='bg-red-700 text-red-300 p-4 rounded-lg'>
                Copy
              </button>
              <button onClick={shareQuote} className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
  Share on Facebook
</button>

<select onChange={handleCategoryChange} className="p-2 border rounded">
        <option value="ChooseCategory">Choose Category</option>
        <option value="motivation">Motivation</option>
        <option value="love">Love</option>
        <option value="life">Life</option>
      </select>
             </div>
            </div>
          </div>
        );
      }
      


export default RandomQuote
